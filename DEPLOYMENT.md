# SyncOps — Docker Deployment Guide (Contabo VPS)

Production-ready Docker deployment for the SyncOps Next.js website.  
Designed to coexist with **Beautora** without sharing ports, networks, volumes, or Nginx configs.

---

## Stack overview

| Item | Value |
|------|--------|
| Framework | Next.js 15 (App Router) + React 19 |
| Runtime image | `node:22.14-alpine` (standalone) |
| Compose project | `syncops` |
| Container | `syncops-web` |
| Network | `syncops-network` (isolated) |
| Host bind | `127.0.0.1:3001` → container `:3001` |
| Database | **Hosted Supabase** (no local Postgres container) |
| Redis | **Not used** |
| Workers | **None** |
| Health | `GET /api/health` |

Beautora stays on host port **3000**. SyncOps uses **3001** on loopback only.

---

## 1. Files added for deployment

| File | Purpose |
|------|---------|
| `Dockerfile` | Multi-stage production build (non-root, healthcheck) |
| `compose.yaml` | Isolated SyncOps stack, loopback bind, log rotation |
| `.dockerignore` | Keeps secrets and junk out of the build context |
| `.env.example` | Template for required secrets |
| `DEPLOYMENT.md` | This guide |
| `app/api/health/route.ts` | Liveness probe for Docker/Nginx |
| `next.config.mjs` | `output: 'standalone'` (Docker-optimized) |

---

## 2. Environment variables you must set

Copy `.env.example` → `.env` and fill in real values:

```bash
cp .env.example .env
nano .env   # or vim
```

**Required**

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anon/public key |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase service role (server/admin) |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |
| `ADMIN_PASSWORD` | Password for `/admin` |
| `ADMIN_SESSION_SECRET` | Long random secret (`openssl rand -hex 32`) |

**Optional**

| Variable | Purpose |
|----------|---------|
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | Google reCAPTCHA on contact/CTA forms |

`NEXT_PUBLIC_*` values are baked into the client bundle at **build** time.  
If you change them, you must **rebuild** the image (`docker compose build --no-cache`).

---

## 3. Local Docker test (Windows / Mac / Linux)

From the project root:

```bash
# 1) Create env
cp .env.example .env
# Edit .env with real or test credentials

# 2) Validate Compose file
docker compose config

# 3) Build
docker compose build

# 4) Start
docker compose up -d

# 5) Status
docker compose ps
docker compose logs -f syncops-web

# 6) Health check
curl http://127.0.0.1:3001/api/health

# 7) Homepage smoke test
curl -I http://127.0.0.1:3001/

# 8) Stop
docker compose down
```

Confirm nothing else is bound to `3001`, and that Beautora (if local) still uses `3000`.

---

## 4. VPS deployment (`/var/www/syncops`)

Assumes Ubuntu 24.04, Docker already installed, Beautora already running.

### First-time setup

```bash
# Create app directory
sudo mkdir -p /var/www/syncops
sudo chown "$USER":"$USER" /var/www/syncops
cd /var/www/syncops

# Clone (use your repo URL / SSH if preferred)
git clone https://github.com/MajidAli36/syncops_new.git .

# Environment
cp .env.example .env
nano .env
# Fill all required secrets, then:
chmod 600 .env

# Build & start (project name comes from compose.yaml: name: syncops)
docker compose build
docker compose up -d

# Verify
docker compose ps
curl http://127.0.0.1:3001/api/health
docker compose logs --tail=100 syncops-web
```

### Useful commands

```bash
cd /var/www/syncops

# Status
docker compose ps

# Logs
docker compose logs -f syncops-web
docker compose logs --tail=200 syncops-web

# Restart
docker compose restart syncops-web

# Stop safely (does not remove the image)
docker compose stop

# Start again
docker compose start

# Full tear-down of SyncOps containers/network only (keeps images)
docker compose down
```

---

## 5. Deploy updates from GitHub

```bash
cd /var/www/syncops

git fetch origin
git pull origin main   # or your production branch

# Rebuild with current .env build-args and restart
docker compose build
docker compose up -d

# Confirm
curl http://127.0.0.1:3001/api/health
docker compose ps
docker compose logs --tail=50 syncops-web
```

Zero-downtime tip: build first, then recreate:

```bash
docker compose build
docker compose up -d --force-recreate syncops-web
```

---

## 6. Connect the domain later via Nginx

**Do not edit Beautora’s Nginx site.** Add a **new** site config only.

Example for `syncops.tech` (HTTP first; then Certbot for TLS):

```nginx
# /etc/nginx/sites-available/syncops.tech
server {
    listen 80;
    listen [::]:80;
    server_name syncops.tech www.syncops.tech;

    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_read_timeout 60s;
    }

    location /api/health {
        proxy_pass http://127.0.0.1:3001/api/health;
        access_log off;
    }
}
```

Enable and reload **without touching Beautora**:

```bash
sudo ln -s /etc/nginx/sites-available/syncops.tech /etc/nginx/sites-enabled/syncops.tech
sudo nginx -t
sudo systemctl reload nginx

# TLS (after DNS points to this VPS)
sudo certbot --nginx -d syncops.tech -d www.syncops.tech
```

---

## 7. Database / backups

This stack **does not run PostgreSQL in Docker**. Blog/admin data lives in **Supabase**.

### Supabase backups

- Use Supabase Dashboard → Database → Backups (Pro plans), or
- Periodic `pg_dump` with your Supabase DB connection string (keep offline securely):

```bash
# Run from a secure machine — NOT baked into the container
pg_dump "$SUPABASE_DB_URL" --format=custom --file="syncops-supabase-$(date +%F).dump"
```

### No Docker volumes to back up for SyncOps web

The web container is stateless (images → Cloudinary; posts → git; DB → Supabase).  
`docker compose down` does **not** delete Beautora data.

If you ever add a local Postgres for SyncOps later, use a **new** named volume (e.g. `syncops_pgdata`) and never reuse Beautora volumes.

---

## 8. Troubleshooting

| Symptom | Check |
|---------|--------|
| Container unhealthy | `docker compose logs syncops-web` |
| Port conflict | `ss -tlnp \| grep 3001` — must be SyncOps only |
| 502 from Nginx | Confirm app: `curl -I http://127.0.0.1:3001/` |
| Missing env / crash on boot | Ensure `.env` exists and `chmod 600`; rebuild if `NEXT_PUBLIC_*` changed |
| Blog empty / fallback | Confirm Supabase keys; markdown posts are copied into the image under `/app/posts` |
| Build fails on `NEXT_PUBLIC_*` | Set them in `.env` before `docker compose build` |

```bash
# Inspect
docker compose ps
docker inspect syncops-web --format '{{.State.Health.Status}}'
docker compose exec syncops-web node -e "console.log(process.env.PORT)"

# Confirm isolation from Beautora
docker network ls | grep -E 'syncops|beautora'
docker ps --format 'table {{.Names}}\t{{.Ports}}\t{{.Networks}}'
```

---

## 9. Confirmation: no Beautora interference

| Concern | SyncOps choice |
|---------|----------------|
| Compose project | `syncops` (not Beautora’s) |
| Container name | `syncops-web` |
| Network | `syncops-network` only |
| Host port | `127.0.0.1:3001` (Beautora keeps `3000`) |
| Volumes | None shared; no Beautora mounts |
| Nginx | New site file only — **never** edit Beautora config |
| Database | Hosted Supabase — not Beautora’s DB |

---

## 10. Security notes

- `.env` is gitignored; never commit secrets.
- Container runs as non-root user `nextjs` (uid 1001).
- `no-new-privileges` enabled; Docker socket is **not** mounted.
- Published port is loopback-only; public traffic goes through Nginx/TLS.
- Logs rotate (`10m` × 3 files) to avoid disk fill.
- Soft `mem_limit: 2g` only — no CPU/RAM reservations against Beautora.
