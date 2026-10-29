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
`node server/revoke-sessions.ts` before restarting.

## Content and messages

On every start, the backend synchronises the nineteen Markdown files from
`src/data/news/` into the database, preserving their numeric IDs. Seed files are
the source for seeded content: editing a file updates the article on the next
restart, and deleting a file removes it. Articles created in `/admin` use UUID
IDs and are only changed through `/admin`.

The editor supports formatting controls, live preview, draft/public status,
review notes, event dates, and PNG/JPEG/WebP images up to 5 MB. Updates detect stale
versions rather than silently overwriting another editor's changes. Mark a
published article as a draft to withdraw it from the public pages.

Contact submissions are stored privately in the administrator inbox. When the
optional SMTP settings are configured, the club is additionally notified by email
(best-effort; a failed notification never loses the stored message). Administrators
check the inbox and reply through their own email program. Messages can be marked
read and deleted. Define an appropriate retention policy with the club before launch.

SQLite, administrator configuration, and uploads are stored under `DATA_DIR`
(default `var`). Keep this directory private and persistent. The server serves only
uploaded images, never the database or credentials.

## Single-server Docker deployment

A VPS or club-operated server with persistent storage is the proposed deployment
model. Shared webhosting and serverless platforms such as Vercel cannot run the
long-lived Node server or the SQLite database; use a server with root access and a
persistent volume. The supplied Docker Compose setup runs Node behind Caddy with HTTPS.

### 1. Prerequisites

- A domain you control, with an A record (and optional AAAA) pointing at the VPS.
- A VPS with Docker Engine and the Compose plugin (Ubuntu 24.04 LTS is fine).
  Node runs inside the image; the host only needs Docker.
- SSH access with key authentication.

### 2. Firewall

Open only SSH, HTTP and HTTPS. Never expose the application port (3001).

```sh
ufw allow OpenSSH
ufw allow 80/tcp
ufw allow 443/tcp
ufw enable
```

### 3. Get the code

```sh
git clone <repo-url> /opt/ssv
cd /opt/ssv
```

### 4. Configure

```sh
cp .env.example .env
```

Set `SITE_HOST=your-domain.example` in `.env`. `compose.yaml` fails fast if
`SITE_HOST` is unset. Never commit `.env`.

To enable the optional contact-form email notification, set `SMTP_HOST`,
`SMTP_USER`, `SMTP_PASS`, and (optionally) `SMTP_PORT`/`SMTP_SECURE`/`MAIL_FROM`/
`MAIL_TO` in `.env`. Mail is only sent when both `SMTP_HOST` and `SMTP_USER` are
present; the club must supply the SMTP credentials for `mail.ssv-schluchsee.de`.
A failed notification is logged and never loses the stored inbox message.

### 5. Build

```sh
docker compose build
```

This runs `npm install` and `npm run build` inside the image (Node 24.13 pinned).

### 6. Create the production administrator

```sh
read -rsp 'Admin password: ' ADMIN_PASSWORD
export ADMIN_PASSWORD
docker compose run --rm -e ADMIN_USERNAME=admin -e ADMIN_PASSWORD app node server/setup.ts
unset ADMIN_PASSWORD
```

Use at least twelve characters. The credential hash is written to `admin.json`
inside the `club-data` volume.

### 7. Start

```sh
docker compose up -d
docker compose logs -f
```

On first start the backend synchronises the seed articles, then Caddy obtains the
HTTPS certificate (port 80 must be reachable). Perform this step only after content
approval, as it publishes the site.

### 8. Verify

- The homepage, `/api/news` and the admin login load over HTTPS.
- Deep links and refreshes work: `/neuigkeiten/168`, `/kontaktformular`, `/admin`.
- Log in at `/admin` and check the inbox and article editor.
- Unknown API endpoints return JSON 404; missing asset files return 404.

### 9. Backups

Back up the `club-data` volume (SQLite, `admin.json`, uploads). Stop the app for a
filesystem copy or use a SQLite-aware tool, test restoration, and store off-server.
Backups are private: they contain messages and administrator credentials.

### Operations notes

- `club-data` is a named persistent volume; rebuilding/restarting does not reset
  data. Do not run `docker compose down -v` on a live site.
- Keep `TRUST_PROXY=1`; only Caddy may reach the application port.
- Rate limits are held in memory and reset on restart.
- Updates: `git pull`, `docker compose build`, `docker compose up -d`.
- The production build excludes `/testing`; it remains available in development or
  when explicitly built with `VITE_ENABLE_SHOWCASE=true`.

For a non-Docker server, run `npm run build`, set `SITE_ORIGIN` to the public HTTPS
origin, and run `npm start` behind an HTTPS reverse proxy as an unprivileged user.
Bind to loopback unless the proxy is on a separate private network.

## Domain and DNS

The public domain (e.g. `ssv-schluchsee.de`) is separate from the old shared
hosting (`c4.webspace-verkauf.de`). Keep the domain registration and only repoint
DNS; cancel the old webspace, never the domain itself.

1. Find where the domain is managed (the registrar): check the invoice or control
   panel of the provider that sold the domain, or query the registry
   (`whois ssv-schluchsee.de`). The registrar is where DNS is edited.
2. Point the domain at the VPS. Either:
   - edit the A/AAAA records in the registrar's DNS panel, or
   - change the domain's nameservers to a DNS provider you control (Cloudflare,
     Hetzner DNS, or the registrar's own DNS) and create the records there.
3. Create an A record for the apex (`ssv-schluchsee.de`) and for `www` pointing at
   the VPS IPv4 address (plus an AAAA record for IPv6 if available). Remove or
   override any old record that forwards to `c4.webspace-verkauf.de`.
4. Wait for propagation (usually minutes to a few hours, up to 24 h for some
   resolvers). Verify with `dig +short ssv-schluchsee.de`.
5. Once the new site is live, cancel the old hosting/webspace — but keep the domain
   registration active. Remove the Vercel deployment as well.

The old `c4.webspace-verkauf.de` subdomain becomes unused once DNS points at the
VPS; it belongs to the old hosting and disappears when that contract ends.

### Keep email on the old provider

Web and email are independent DNS records; they do not have to be on the same
server. The domain's mail runs on the old host (`mail.ssv-schluchsee.de`, with
`MX` → `mail.ssv-schluchsee.de` and `imap`/`smtp`/`pop`/`autodiscover`/`autoconfig`
hosts, all at the old host's address). So move only the web records:

- **Change:** the `A` record for `ssv-schluchsee.de` and for `www` → the VPS IPv4.
- **Keep:** the `MX` record, the `mail`/`imap`/`smtp`/`pop`/`autodiscover`/
  `autoconfig` A records, and the SPF `TXT` record — all still point at the old
  host's mail server, so mailboxes at `…@ssv-schluchsee.de` keep working.
- If you move the nameservers to another DNS provider, recreate **all** of those
  mail records as well, not just the web A record, or email will break.

The application itself never sends email unless SMTP is configured (contact
submissions are stored in the `/admin` inbox, with an optional best-effort email
notification to the club). Mail itself stays on the old host; the VPS only needs
SMTP client credentials in the environment if that notification is enabled.

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
