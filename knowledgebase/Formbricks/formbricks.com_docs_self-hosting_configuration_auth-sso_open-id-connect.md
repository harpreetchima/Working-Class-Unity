---
url: "https://formbricks.com/docs/self-hosting/configuration/auth-sso/open-id-connect"
title: "Open ID Connect - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/self-hosting/configuration/auth-sso/open-id-connect#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Auth & SSO

Open ID Connect

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

  - [Authentication Behavior](https://formbricks.com/docs/self-hosting/auth-behavior)
  - [Open ID Connect](https://formbricks.com/docs/self-hosting/configuration/auth-sso/open-id-connect)
  - [Azure AD OAuth](https://formbricks.com/docs/self-hosting/configuration/auth-sso/azure-ad-oauth)
  - [Google OAuth](https://formbricks.com/docs/self-hosting/configuration/auth-sso/google-oauth)
  - [SAML SSO](https://formbricks.com/docs/self-hosting/configuration/auth-sso/saml-sso)
- Integrations


##### Advanced

- [Migration](https://formbricks.com/docs/self-hosting/advanced/migration)
- [License](https://formbricks.com/docs/self-hosting/advanced/license)
- [License Activation](https://formbricks.com/docs/self-hosting/advanced/license-activation)
- Enterprise Features

- [Rate Limiting](https://formbricks.com/docs/self-hosting/advanced/rate-limiting)

Auth & SSO

# Open ID Connect

Configure Open ID Connect for secure Single Sign-On with your Formbricks instance. Implement enterprise-grade authentication for your survey platform with Open ID Connect.

OpenID Connect is part of the Formbricks [Enterprise Edition](https://formbricks.com/docs/self-hosting/advanced/license)

Integrating your own OIDC (OpenID Connect) instance with your Formbricks instance allows users to log in using their OIDC credentials, ensuring a secure and streamlined user experience. Please follow the steps below to set up OIDC for your Formbricks instance.

- Configure your OIDC provider & get the following variables:
- `OIDC_CLIENT_ID`
- `OIDC_CLIENT_SECRET`
- `OIDC_ISSUER`
- `OIDC_SIGNING_ALGORITHM`

Make sure the Redirect URI for your OIDC Client is set to `{WEBAPP_URL}/api/auth/callback/openid`.

- Update these environment variables in your `docker-compose.yml` or pass it directly to the running container.

An example configuration for a FusionAuth OpenID Connect in Formbricks would look like:

Formbricks Env for FusionAuth OIDC

Copy

```
OIDC_CLIENT_ID=59cada54-56d4-4aa8-a5e7-5823bbe0e5b7
OIDC_CLIENT_SECRET=4f4dwP0ZoOAqMW8fM9290A7uIS3E8Xg29xe1umhlB_s
OIDC_ISSUER=http://localhost:9011
OIDC_DISPLAY_NAME=FusionAuth
OIDC_SIGNING_ALGORITHM=HS256
```

- Set an environment variable `OIDC_DISPLAY_NAME` to the display name of your OIDC provider.
- Restart your Formbricks instance.
- You’re all set! Users can now sign up & log in using their OIDC credentials.

Was this page helpful?

YesNo

[Authentication Behavior](https://formbricks.com/docs/self-hosting/auth-behavior) [Azure AD OAuth](https://formbricks.com/docs/self-hosting/configuration/auth-sso/azure-ad-oauth)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.