#!/usr/bin/env bash
set -euo pipefail

# =====================================================================
#  SSV Schluchsee — VPS setup (Ubuntu 24.04, run as root)
#
#  Before running:
#   1. Point the DNS A record for ssv-schluchsee.de (and www) at this
#      VPS IP. Keep the MX/mail records unchanged.
#   2. Set REPO_URL below.
#
#  Run:  bash setup-vps.sh
# =====================================================================

REPO_URL="https://github.com/Andoxtra/018_ssv_schluchsee_react.git"                        # e.g. https://github.com/you/ssv.git
SITE_HOST="ssv-schluchsee.de"
APP_DIR="/opt/ssv"
ADMIN_USERNAME="admin"

[ -n "$REPO_URL" ] || { echo "Error: set REPO_URL at the top of the script."; exit 1; }
[ "$(id -u)" -eq 0 ] || { echo "Error: run as root."; exit 1; }

echo "==> 1. Update system"
apt-get update -y
apt-get upgrade -y

echo "==> 2. Firewall (open 22, 80, 443)"
if command -v ufw >/dev/null; then
    ufw allow OpenSSH
    ufw allow 80/tcp
    ufw allow 443/tcp
    ufw --force enable
else
    echo "ufw not found — open TCP 22/80/443 in your provider's firewall."
fi

echo "==> 3. Install Docker + Compose plugin"
if ! command -v docker >/dev/null; then
    apt-get install -y ca-certificates curl
    install -m 0755 -d /etc/apt/keyrings
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
    chmod a+r /etc/apt/keyrings/docker.asc
    echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" > /etc/apt/sources.list.d/docker.list
    apt-get update -y
    apt-get install -y docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin
fi
docker --version
docker compose version

echo "==> 4. Clone the repository"
if [ ! -d "$APP_DIR/.git" ]; then
    git clone "$REPO_URL" "$APP_DIR"
fi
cd "$APP_DIR"

echo "==> 5. Configure (.env)"
if [ ! -f .env ]; then
    cp .env.example .env
fi
sed -i "s|^SITE_HOST=.*|SITE_HOST=$SITE_HOST|" .env
grep -q '^SITE_HOST=' .env || echo "SITE_HOST=$SITE_HOST" >> .env

echo "==> 6. Build the image"
docker compose build

echo "==> 7. Create the production administrator"
read -rsp 'Admin password (>= 12 chars): ' ADMIN_PASSWORD
echo
export ADMIN_PASSWORD
docker compose run --rm -e "ADMIN_USERNAME=$ADMIN_USERNAME" -e ADMIN_PASSWORD app node server/setup.ts
unset ADMIN_PASSWORD

echo "==> 8. Start the site"
docker compose up -d
docker compose ps

echo
echo "Done. Check https://$SITE_HOST and log in at https://$SITE_HOST/admin"
echo "Follow the logs with: cd $APP_DIR && docker compose logs -f"
