---
url: "https://formbricks.com/docs/self-hosting/advanced/license-activation"
title: "License Activation - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/self-hosting/advanced/license-activation#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Advanced

License Activation

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

Advanced

# License Activation

How to activate your Formbricks Enterprise License

To unlock Formbricks Enterprise Edition features, you need to activate your Enterprise License Key. Follow these steps to activate your license:

1

Set the License Key

Add your Enterprise License Key as an environment variable in your deployment:

Copy

```
ENTERPRISE_LICENSE_KEY=
```

- Add your Enterprise License Key after `ENTERPRISE_LICENSE_KEY=` with the key you received from Formbricks.
- How you set environment variables depends on your deployment (Docker, Kubernetes, .env file, etc.).

2

Restart Your Instance

After setting the environment variable, **restart your Formbricks instance** to apply the changes.

3

Verify License Activation

To verify if your license is active, visit `Organization Settings` -\> `Enterprise License` to check the confirmation screen.

4

Ensure License Server is Reachable

Your Formbricks instance performs a daily license check to verify your Enterprise License. If you’re deploying Formbricks behind a firewall or have network restrictions, you need to whitelist the following:

- **Domain**: `ee.formbricks.com`
- **URL**: `https://ee.formbricks.com/api/licenses/check`
- **Protocol**: HTTPS (Port 443)
- **Method**: POST
- **Frequency**: Every 24 hours

The license check includes a 3-day grace period. If the check fails temporarily, your instance will continue using cached license information for up to 3 days.

If you have questions or need assistance with network configuration, please reach out to [hola@formbricks.com](mailto:hola@formbricks.com).

Was this page helpful?

YesNo

[License](https://formbricks.com/docs/self-hosting/advanced/license) [Hide Branding](https://formbricks.com/docs/self-hosting/advanced/enterprise-features/hide-powered-by-formbricks)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.