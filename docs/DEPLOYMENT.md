# Run and deploy the club website

The application now requires its Node backend. Hosting only the Vite build will
not provide news, publishing, uploads, or contact submissions. Use Node 24.13 or
newer; this version's built-in SQLite module emits an experimental-feature warning.
No third-party backend runtime packages are required.

## Local development

1. Run `npm install`.
2. Copy `.env.example` to `.env` if you need different settings.
3. Run `npm run server` and `npm run dev` in separate terminals.
4. Use Vite's reported URL. `SITE_ORIGIN` defines the trusted browser origin.
   Local HTTP development accepts `localhost`, `127.0.0.1` and `[::1]` at that
   configured frontend port or the backend's own port. Other frontend ports or
   network hostnames require an explicit `SITE_ORIGIN` and backend restart.
   Production keeps the exact configured origin; local aliases are disabled.
5. Open `/admin` to manage articles and contact messages.

The local development administrator, if created during setup, has its credentials
in the ignored, private `var/local-admin.txt`. That file is for local development
only and is never included in the Docker image. Do not reuse that account in production.

To create an administrator for a fresh data directory, enter a password without
putting it in shell history:

```sh
read -rsp 'New administrator password: ' ADMIN_PASSWORD
export ADMIN_PASSWORD
ADMIN_USERNAME=admin npm run setup:admin
unset ADMIN_PASSWORD
```

Use at least 12 characters. Restart the backend after setup. Passwords are stored
as salted scrypt hashes in `var/admin.json`. The setup command refuses to replace
an existing account. To reset an account, stop the server, preserve a backup,
move `admin.json` aside, run setup again, and invalidate all sessions with
`node server/revoke-sessions.mjs` before restarting.

## Content and messages

On its first start, the backend imports the eight Markdown files from
`src/data/news/`, preserving their IDs. The import runs once per database.
After that, SQLite is the authoritative source and edits belong in `/admin`.
Changing a seed file does not overwrite existing published content.

The editor supports formatting controls, live preview, draft/public status,
review notes, event dates, and PNG/JPEG/WebP images up to 5 MB. Updates detect stale
versions rather than silently overwriting another editor's changes. Mark a
published article as a draft to withdraw it from the public pages.

Contact submissions are stored privately in the administrator inbox. They do not
send email notifications. Administrators must check the inbox and reply through
their own email program. Messages can be marked read and deleted. Define an
appropriate retention policy with the club before launch.

SQLite, administrator configuration, and uploads are stored under `DATA_DIR`
(default `var`). Keep this directory private and persistent. The server serves only
uploaded images, never the database or credentials.

## Single-server Docker deployment

A VPS or club-operated server with persistent storage is the proposed deployment
model. No hosting account has been purchased and nothing has been published.
The supplied Docker Compose setup runs Node behind Caddy with HTTPS.

1. Point the selected domain at the server and make ports 80/443 reachable.
2. Set `SITE_HOST` to the public hostname in the server's `.env`.
3. Build with `docker compose build`.
4. Configure a fresh production administrator:

```sh
read -rsp 'Production administrator password: ' ADMIN_PASSWORD
export ADMIN_PASSWORD
docker compose run --rm -e ADMIN_USERNAME=admin -e ADMIN_PASSWORD app node server/setup.mjs
unset ADMIN_PASSWORD
```

5. Start with `docker compose up -d`. Caddy obtains the HTTPS certificate. This
   step publishes the site and should be performed only after content approval.
6. Verify direct visits and refreshes on `/neuigkeiten/168`, `/kontaktformular`,
   and `/admin`. The backend serves the SPA fallback for page routes and a JSON
   404 for unknown API endpoints. Missing asset files return 404.

`club-data` is a named persistent volume. Rebuilding/restarting containers does
not reset articles or uploads. Do not run `docker compose down -v` on a live site.
The production build excludes `/testing`; it remains available in Vite development
or when explicitly built with `VITE_ENABLE_SHOWCASE=true`.

For a non-Docker server, run `npm run build`, set `SITE_ORIGIN` to the public HTTPS
origin, and run `npm start` behind an HTTPS reverse proxy as an unprivileged user.
Bind to loopback unless the proxy is on a separate private network.

## Backups and operational limits

Back up the entire data directory/volume, including uploaded images and SQLite's
associated files. Stop the application while taking a filesystem copy, or use a
SQLite-aware backup mechanism. Test restoration into a separate data directory
before relying on a backup. Treat backups as private: they contain messages and
administrator credentials. Back up again before upgrades or password resets.

This implementation is intended for one Node process and a small club website.
Login/contact rate limits are held in memory and reset on restart. The Docker configuration enables `TRUST_PROXY=1` because only Caddy can reach
the application port; it uses the last forwarded client address for these limits.
Only enable this setting behind a trusted proxy that overwrites forwarded headers,
and never expose that application port directly. Without it, limits use the direct
connection address.
Sessions expire after eight hours and are invalidated on logout. Production
cookies are Secure when `SITE_ORIGIN` is HTTPS. Production mutations require the configured origin. When a browser omits the
Origin header, a Referer from that same trusted origin is accepted; missing,
foreign or explicitly null origins without a valid fallback are rejected. Do not expose a production instance with an HTTP `SITE_ORIGIN`.

Before launch, confirm the hostname/host, mailbox-monitoring responsibility,
contact/register details, training times, imported article content, and final
privacy/legal text. The Docker image was built and smoke-tested locally, including seed import,
SPA deep routes, PDF serving and private-file protection. Compose configuration
validation passed. No public server deployment was performed.
