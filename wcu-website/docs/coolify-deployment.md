# Coolify Deployment Guide

This guide explains how to deploy the WCU Website (Nuxt 4) application using [Coolify](https://coolify.io/).

**Repository**: [https://github.com/harpreetchima/Working-Class-Unity](https://github.com/harpreetchima/Working-Class-Unity)

## Overview

This application uses **Server-Side Rendering (SSR)** for optimal SEO and internationalization support. SSR is the recommended deployment method because:

- **SEO Benefits**: Search engines receive fully rendered HTML content
- **i18n Support**: Language detection and routing work correctly on first page load
- **Dynamic Content**: Cal.com embeds and Formbricks surveys function properly
- **Performance**: Initial page loads are faster with server-rendered content

Coolify is a self-hosted Platform-as-a-Service (PaaS) that deploys applications as Docker containers. It supports Nuxt applications through the Nixpacks build pack, which automatically detects and builds Node.js projects.

> ⚠️ **Important**: Do **NOT** enable "Is it a static site?" for this application. That option is only for static site generation (SSG), which is not recommended for this project.

## Prerequisites

Before deploying, ensure you have:

- A Coolify instance with a connected server
- GitHub repository connected via GitHub App integration
- Domain configured in Coolify (optional but recommended)
- Access to the Coolify dashboard with permissions to create applications

## Application Specifications

| Component | Version | Notes |
|-----------|---------|-------|
| Nuxt | 4.2.1 | SSR enabled by default |
| Node.js | 18+ | Required for Nuxt 4 |
| Vue | 3.5.25 | |
| Tailwind CSS | 4.1.17 | With Vite plugin |
| DaisyUI | 5.5.5 | Component library |
| i18n | 10.2.1 | English, Spanish, Punjabi |

## Deployment Configuration

### Option 1: SSR Deployment (Recommended)

Server-Side Rendering provides better SEO and initial load performance.

#### Coolify Settings

| Setting | Value |
|---------|-------|
| **Build Pack** | `nixpacks` |
| **Base Directory** | `wcu-website` |
| **Port Exposes** | `3000` |
| **Install Command** | *(leave empty - auto-detected)* |
| **Build Command** | `npm run build` or *(leave empty)* |
| **Start Command** | `node .output/server/index.mjs` |

#### How It Works

1. Nixpacks detects the Node.js project via `package.json`
2. Runs `npm install` (or `npm ci` if lock file present)
3. Executes `npm run build` which runs `nuxt build`
4. Starts the Node.js server on port 3000
5. Coolify's Traefik proxy routes traffic to the container

### Option 2: Static Site Generation (SSG)

Generate static HTML files for hosting without a Node.js server.

#### Coolify Settings

| Setting | Value |
|---------|-------|
| **Build Pack** | `nixpacks` |
| **Base Directory** | `wcu-website` |
| **Is it a static site?** | `true` (enabled) |
| **Output Directory** | `dist` |
| **Build Command** | `npm run generate` |

#### How It Works

1. Runs `nuxt generate` to create static files
2. Outputs to `dist` directory
3. Coolify serves files via Nginx

> **Note**: SSG may have limitations with dynamic content and is **not recommended** for this application due to i18n support requirements. Use SSR (Option 1) instead for best SEO and internationalization support.

### Option 3: Custom Dockerfile

For advanced control, create a Dockerfile in the `wcu-website` directory:

```dockerfile
# wcu-website/Dockerfile
FROM node:20-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:20-alpine AS runner

WORKDIR /app
COPY --from=builder /app/.output .output

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
```

Then in Coolify:
- Set **Build Pack** to `dockerfile`
- Set **Base Directory** to `wcu-website`
- Set **Port Exposes** to `3000`

## Environment Variables

Configure these in Coolify's **Environment Variables** section if needed:

| Variable | Description | Example |
|----------|-------------|---------|
| `NUXT_PUBLIC_API_URL` | Public API endpoint | `https://api.example.com` |
| `NUXT_PUBLIC_SITE_URL` | Public site URL | `https://wcu.example.com` |
| `NODE_ENV` | Environment mode | `production` |

### Build-time vs Runtime Variables

- `NUXT_PUBLIC_*` - Available in both server and client code
- `NUXT_*` - Server-only variables
- Add to **Build Variables** if needed during build process

## i18n Routes

The application uses the `prefix_except_default` strategy:

| Language | URL Path | Example |
|----------|----------|---------|
| English (default) | `/` | `/about`, `/join` |
| Spanish | `/es/` | `/es/about`, `/es/join` |
| Punjabi | `/pa/` | `/pa/about`, `/pa/join` |

All routes work automatically with Coolify's Traefik proxy.

## Health Checks

Coolify performs container health checks by default. The Nuxt server responds on port 3000.

**Recommended Health Check Settings:**

| Setting | Value |
|---------|-------|
| **Health Check Path** | `/` |
| **Health Check Interval** | `30s` |
| **Health Check Timeout** | `10s` |
| **Health Check Start Period** | `60s` |

If you encounter health check issues:
1. Ensure the start command is correct: `node .output/server/index.mjs`
2. Verify port 3000 is exposed
3. Check container logs in Coolify dashboard
4. Temporarily disable health checks to debug

## Nixpacks Configuration

Nixpacks automatically detects and builds Node.js projects. The default configuration should work without any changes.

If you need to customize the build, create a [`nixpacks.toml`](wcu-website/nixpacks.toml) file in the `wcu-website` directory:

```toml
# wcu-website/nixpacks.toml
[phases.build]
cmds = ["npm run build"]

[phases.setup]
nixPkgs = ["nodejs_20"]

[start]
cmd = "node .output/server/index.mjs"
```

**When to use `nixpacks.toml`:**
- Need a specific Node.js version
- Custom build steps required
- Environment-specific build configurations

## Domain Configuration

1. In Coolify, navigate to your application
2. Add your domain(s) in the **Domains** section
3. Enable **Force HTTPS** for security (enabled by default)
4. Coolify automatically provisions SSL certificates via Let's Encrypt

### Multiple Domains

You can configure multiple domains:
- `wcu.example.com` - Primary domain
- `www.wcu.example.com` - WWW subdomain

## Auto Deploy

Enable automatic deployments when pushing to your repository:

1. Connect your GitHub repository via GitHub App integration
2. Enable **Auto Deploy** in application settings
3. Configure the target branch (e.g., `main` or `production`)

### Preview Deployments

For pull request previews:
1. Enable **Preview Deployments**
2. Set URL template: `{{pr_id}}.{{domain}}`
3. PRs will deploy to URLs like `123.wcu.example.com`

## Troubleshooting

### Build Fails

**Check Base Directory**: Ensure `wcu-website` is set correctly since the Nuxt app is in a subdirectory.

**Node Version Mismatch**: If you see errors related to Node.js version:
1. Ensure Nixpacks is using Node.js 18+ (required for Nuxt 4)
2. Create a [`nixpacks.toml`](wcu-website/nixpacks.toml) file to specify Node.js version (see Nixpacks Configuration section)
3. Alternatively, add `"engines": { "node": ">=18" }` to your `package.json`

**Lock File Issues**: If build fails on dependencies:
```bash
# Regenerate lock file locally
cd wcu-website
rm package-lock.json
npm install
git add package-lock.json
git commit -m "Regenerate package-lock.json"
git push
```

### Container Won't Start

**Verify Start Command**: Must be `node .output/server/index.mjs`

**Check Logs**: In Coolify dashboard, view container logs for errors.

**Memory Issues**: Increase container memory limits if OOM errors occur:
- Set memory limit to at least 512MB
- Set memory reservation to 256MB

### Port Configuration Issues

If the application doesn't respond:
1. Verify **Port Exposes** is set to `3000`
2. Ensure no other setting overrides the port
3. Check that `HOST=0.0.0.0` is set in environment variables (usually automatic)

### 502 Bad Gateway

1. Container may still be starting - wait 30 seconds
2. Check if container is healthy in Coolify dashboard
3. Verify port 3000 is correctly exposed
4. Review Traefik proxy logs

### Static Assets Not Loading

For SSR deployments, static assets are served from `.output/public`. If assets fail to load:
1. Clear Coolify's build cache
2. Rebuild the application
3. Check browser console for 404 errors

### Environment Variable Issues

If environment variables aren't working:
1. Verify `NUXT_PUBLIC_*` prefix for client-exposed variables
2. Check if variables need to be in **Build Variables** vs **Environment Variables**
3. Rebuild the application after adding new build-time variables
4. Use `useRuntimeConfig()` in Nuxt to access variables

## Verification Steps

After deployment, verify everything is working correctly:

### 1. Check Application Status

In Coolify dashboard:
- [ ] Container status shows "Running"
- [ ] Health check shows "Healthy" (green)
- [ ] No error messages in logs

### 2. Test the Application

Visit your deployed URL and verify:
- [ ] Homepage loads correctly
- [ ] Navigation works between pages
- [ ] Styling (Tailwind CSS/DaisyUI) is applied
- [ ] Images and static assets load

### 3. Test i18n Routes

Test language switching:
- [ ] English: `https://yourdomain.com/`
- [ ] Spanish: `https://yourdomain.com/es/`
- [ ] Punjabi: `https://yourdomain.com/pa/`

### 4. Test Third-Party Integrations

- [ ] Cal.com calendar embeds load on relevant pages
- [ ] Formbricks surveys trigger correctly

### 5. Test SSL/HTTPS

- [ ] Site redirects HTTP to HTTPS
- [ ] SSL certificate is valid (no browser warnings)
- [ ] Mixed content warnings don't appear

## Resource Recommendations

| Environment | CPU | Memory |
|-------------|-----|--------|
| Development/Testing | 0.5 cores | 512MB |
| Production (low traffic) | 1 core | 1GB |
| Production (high traffic) | 2+ cores | 2GB+ |

## Related Documentation

- [Coolify Documentation](https://coolify.io/docs)
- [Nuxt Deployment Guide](https://nuxt.com/docs/getting-started/deployment)
- [Nixpacks Documentation](https://nixpacks.com/docs)

---

*Last updated: December 2024*