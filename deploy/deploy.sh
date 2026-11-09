#!/usr/bin/env bash
# Deploys one commit on the VPS. Installed as /usr/local/bin/ssv-deploy by
# setup-vps.sh and run through the restricted SSH key of the `deploy` user:
#   ssh deploy@host <40-character commit sha>
# It can also be run by hand: ssv-deploy <sha>
#
# Steps: fetch → check out the exact commit → build → stop app → back up the
# data volume → start → wait for health → check the public URL.
set -euo pipefail

APP_DIR="${APP_DIR:-/opt/ssv}"
BACKUP_DIR="${BACKUP_DIR:-/opt/ssv-backups}"
KEEP_BACKUPS="${KEEP_BACKUPS:-10}"

fail() { echo "deploy: $*" >&2; exit 1; }

# Everything runs inside main(), which bash parses completely before executing it.
main() {
    local sha="${1:-${SSH_ORIGINAL_COMMAND:-}}"
    [[ "$sha" =~ ^[0-9a-f]{40}$ ]] || fail "expected a 40-character commit SHA, got '${sha}'"

    mkdir -p "$BACKUP_DIR"
    exec 9>"$BACKUP_DIR/.deploy.lock"
    flock -n 9 || fail "another deployment is running"

    cd "$APP_DIR"
    git diff --quiet && git diff --cached --quiet || fail "tracked files in $APP_DIR were changed on the server; commit or revert them first"

    echo "==> Fetching $sha"
    git fetch --quiet --tags origin
    git cat-file -e "${sha}^{commit}" 2>/dev/null || fail "commit $sha is not on origin"
    git checkout --quiet --detach "$sha"

    local site_host
    site_host="$(grep -E '^SITE_HOST=' .env | tail -n 1 | cut -d= -f2-)"
    [ -n "$site_host" ] || fail "SITE_HOST is not set in $APP_DIR/.env"

    echo "==> Building"
    docker compose build --pull app

    local project volume
    project="${COMPOSE_PROJECT_NAME:-$(basename "$APP_DIR")}"
    volume="${project}_club-data"
    if docker volume inspect "$volume" >/dev/null 2>&1; then
        echo "==> Backing up $volume (app stopped briefly for a consistent SQLite copy)"
        docker compose stop app
        local archive
        archive="club-data-$(date -u +%Y%m%dT%H%M%SZ)-${sha:0:7}.tar.gz"
        docker run --rm -v "$volume":/data:ro -v "$BACKUP_DIR":/backup busybox \
            tar czf "/backup/$archive" -C /data .
        chmod 600 "$BACKUP_DIR/$archive"
        ls -1t "$BACKUP_DIR"/club-data-*.tar.gz | tail -n +"$((KEEP_BACKUPS + 1))" | xargs -r rm -f
    fi

    echo "==> Starting"
    if ! docker compose up -d --wait --wait-timeout 120; then
        docker compose logs --tail 80 app >&2 || true
        fail "containers did not become healthy"
    fi

    # Through the local Caddy with the real hostname: checks certificate and proxy without hairpin NAT.
    echo "==> Checking https://$site_host/api/news"
    curl -fsS --retry 5 --retry-delay 3 --retry-all-errors --resolve "$site_host:443:127.0.0.1" \
        -o /dev/null "https://$site_host/api/news" \
        || fail "public health check failed"

    docker image prune -f >/dev/null
    echo "==> Deployed $sha"
}

main "$@"
