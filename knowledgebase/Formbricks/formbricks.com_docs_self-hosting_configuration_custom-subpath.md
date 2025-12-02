---
url: "https://formbricks.com/docs/self-hosting/configuration/custom-subpath"
title: "Custom Subpath - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/self-hosting/configuration/custom-subpath#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Configuration

Custom Subpath

[Overview](https://formbricks.com/docs/overview/introduction) [XM & Surveys](https://formbricks.com/docs/xm-and-surveys/overview) [Self Hosting](https://formbricks.com/docs/self-hosting/overview) [Development](https://formbricks.com/docs/development/overview) [API v1 Reference](https://formbricks.com/docs/api-reference/rest-api) [API v2 Reference (Beta)](https://formbricks.com/docs/api-v2-reference/introduction)

##### Self Hosting

- [Self-Hosting](https://formbricks.com/docs/self-hosting/overview)

##### Setup

- [One-Click Setup](https://formbricks.com/docs/self-hosting/setup/one-click)
- [Docker Setup](https://formbricks.com/docs/self-hosting/setup/docker)
- [Monitoring](https://formbricks.com/docs/self-hosting/setup/monitoring)
- [Cluster Setup](https://formbricks.com/docs/self-hosting/setup/cluster-setup)
- [Kubernetes Deployment](https://formbricks.com/docs/self-hosting/setup/kubernetes)

##### Configuration

- [Custom SSL Certificate](https://formbricks.com/docs/self-hosting/configuration/custom-ssl)
- [Environment Variables](https://formbricks.com/docs/self-hosting/configuration/environment-variables)
- [SMTP Configuration](https://formbricks.com/docs/self-hosting/configuration/smtp)
- [File Uploads Configuration](https://formbricks.com/docs/self-hosting/configuration/file-uploads)
- [Domain Configuration](https://formbricks.com/docs/self-hosting/configuration/domain-configuration)
- [Custom Subpath](https://formbricks.com/docs/self-hosting/configuration/custom-subpath)
- Auth & SSO

- Integrations


##### Advanced

- [Migration](https://formbricks.com/docs/self-hosting/advanced/migration)
- [License](https://formbricks.com/docs/self-hosting/advanced/license)
- [License Activation](https://formbricks.com/docs/self-hosting/advanced/license-activation)
- Enterprise Features

- [Rate Limiting](https://formbricks.com/docs/self-hosting/advanced/rate-limiting)

On this page

- [When to use a custom subpath](https://formbricks.com/docs/self-hosting/configuration/custom-subpath#when-to-use-a-custom-subpath)
- [Requirements and limitations](https://formbricks.com/docs/self-hosting/configuration/custom-subpath#requirements-and-limitations)
- [Configure environment variables](https://formbricks.com/docs/self-hosting/configuration/custom-subpath#configure-environment-variables)
- [Build a Docker image with a custom subpath](https://formbricks.com/docs/self-hosting/configuration/custom-subpath#build-a-docker-image-with-a-custom-subpath)
- [Verify the deployment](https://formbricks.com/docs/self-hosting/configuration/custom-subpath#verify-the-deployment)
- [Troubleshooting checklist](https://formbricks.com/docs/self-hosting/configuration/custom-subpath#troubleshooting-checklist)

Configuration

# Custom Subpath

Serve Formbricks from a custom URL prefix when you cannot expose it on the root domain.

Custom subpath deployments are currently under internal review. If you need early access, please reach out via
[GitHub Discussions](https://github.com/formbricks/formbricks/discussions).

### [​](https://formbricks.com/docs/self-hosting/configuration/custom-subpath\#when-to-use-a-custom-subpath)  When to use a custom subpath

Use a custom subpath (also called a Next.js base path) when your reverse proxy reserves the root domain for another
service, but you still want Formbricks to live under the same hostname—for example `https://example.com/feedback`.
Support for a build-time `BASE_PATH` variable is available in the Formbricks web app so that all internal routes,
assets, and sign-in redirects honor the prefix.

### [​](https://formbricks.com/docs/self-hosting/configuration/custom-subpath\#requirements-and-limitations)  Requirements and limitations

- `BASE_PATH` must be present during `pnpm build`; changing it afterward requires a rebuild.
- Official Formbricks Docker images do **not** accept this flag for technical reasons, so you must build your own image.
- All public URLs (`WEBAPP_URL`, `NEXTAUTH_URL`, webhook targets, OAuth callbacks, etc.) need the same prefix.
- Your proxy must rewrite `/custom-path/*` to the Formbricks container while keeping the prefix visible to clients.

### [​](https://formbricks.com/docs/self-hosting/configuration/custom-subpath\#configure-environment-variables)  Configure environment variables

Add the following variables to the environment you use for builds (local, CI, or Docker build args):

Copy

```
BASE_PATH="/custom-path"
WEBAPP_URL="https://yourdomain.com/custom-path"
NEXTAUTH_URL="https://yourdomain.com/custom-path/api/auth"
```

If you use email links, webhooks, or third-party OAuth providers, ensure every URL you register includes the prefix.

### [​](https://formbricks.com/docs/self-hosting/configuration/custom-subpath\#build-a-docker-image-with-a-custom-subpath)  Build a Docker image with a custom subpath

1

Clone Formbricks and prepare secrets

Make sure you have the repository checked out and create temporary files (or use `—secret`) for the
required build-time secrets such as `DATABASE_URL`, `ENCRYPTION_KEY`, `REDIS_URL`,
and optional telemetry tokens.

2

Pass BASE\_PATH as a build argument

Use the Formbricks web Dockerfile and supply the custom subpath via `—build-arg`. Example:

Copy

```
docker build \
  --progress=plain \
  --no-cache \
  --build-arg BASE_PATH=/custom-path \
  --secret id=database_url,src=<(printf "postgresql://user:password@localhost:5432/formbricks?schema=public") \
  --secret id=encryption_key,src=<(printf "your-32-character-encryption-key-here") \
  --secret id=redis_url,src=<(printf "redis://localhost:6379") \
  --secret id=sentry_auth_token,src=<(printf "") \
  -f apps/web/Dockerfile \
  -t formbricks-web \
  .
```

During the build logs you should see `BASE PATH /custom-path`, confirming that Next.js picked up the
prefix.

3

Run the container behind your proxy

Start the resulting image with the same runtime environment variables you normally use (database credentials,
mailing provider, etc.). Point your reverse proxy so that `/custom-path` requests forward to
`http://formbricks-web:3000/custom-path` without stripping the prefix.

### [​](https://formbricks.com/docs/self-hosting/configuration/custom-subpath\#verify-the-deployment)  Verify the deployment

1. Open `https://yourdomain.com/custom-path` and complete the onboarding flow.
2. Create a survey and preview it—embedded scripts now load assets relative to the subpath.
3. Sign out and confirm the login page still includes `/custom-path`.

### [​](https://formbricks.com/docs/self-hosting/configuration/custom-subpath\#troubleshooting-checklist)  Troubleshooting checklist

- Confirm your build pipeline actually passes `BASE_PATH` (and, if needed, `WEBAPP_URL`/`NEXTAUTH_URL`) into the build
stage—check CI logs for the `BASE PATH /your-prefix` line and make sure custom Dockerfiles or wrappers forward
`--build-arg BASE_PATH=...` correctly.
- If you cannot log in, double-check that `NEXTAUTH_URL` includes the prefix and uses the full route to the API as stated above. NextAuth rejects callbacks that do not
match exactly.
- Re-run the Docker build when changing `BASE_PATH`; simply editing the container environment is not sufficient.
- Inspect your proxy configuration to ensure it does not rewrite paths internally (e.g., `strip_prefix` needs to stay
disabled).
- When in doubt, rebuild locally with `--progress=plain` and verify that the `BASE PATH` line reflects your prefix.

Was this page helpful?

YesNo

[Domain Configuration](https://formbricks.com/docs/self-hosting/configuration/domain-configuration) [Authentication Behavior](https://formbricks.com/docs/self-hosting/auth-behavior)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.