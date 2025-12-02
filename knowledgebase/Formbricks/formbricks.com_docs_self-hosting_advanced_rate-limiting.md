---
url: "https://formbricks.com/docs/self-hosting/advanced/rate-limiting"
title: "Rate Limiting - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/self-hosting/advanced/rate-limiting#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Advanced

Rate Limiting

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

- [Default Rate Limits](https://formbricks.com/docs/self-hosting/advanced/rate-limiting#default-rate-limits)
- [Disabling Rate Limiting](https://formbricks.com/docs/self-hosting/advanced/rate-limiting#disabling-rate-limiting)

Advanced

# Rate Limiting

Rate limiting for Formbricks

To protect the platform from abuse and ensure fair usage, rate limiting is enforced by default on an IP-address basis. If a client exceeds the allowed number of requests within the specified time window, the API will return a `429 Too Many Requests` status code.

## [​](https://formbricks.com/docs/self-hosting/advanced/rate-limiting\#default-rate-limits)  Default Rate Limits

The following rate limits apply to various endpoints:

| **Endpoint** | **Rate Limit** | **Time Window** |
| --- | --- | --- |
| `POST /login` | 30 requests | 15 minutes |
| `POST /signup` | 30 requests | 60 minutes |
| `POST /verify-email` | 10 requests | 60 minutes |
| `POST /forgot-password` | 5 requests | 60 minutes |
| `GET /client-side-api` | 100 requests | 1 minute |
| `POST /share` | 100 requests | 60 minutes |

If a request exceeds the defined rate limit, the server will respond with:

Copy

```
{
  "code": 429,
  "error": "Too many requests, Please try after a while!"
}
```

## [​](https://formbricks.com/docs/self-hosting/advanced/rate-limiting\#disabling-rate-limiting)  Disabling Rate Limiting

For self-hosters, rate limiting can be disabled if necessary. However, we **strongly recommend keeping rate limiting enabled in production environments** to prevent abuse.To disable rate limiting, set the following environment variable:

Copy

```
RATE_LIMITING_DISABLED=1
```

After making this change, restart your server to apply the new setting.

Was this page helpful?

YesNo

[Audit Logging](https://formbricks.com/docs/self-hosting/advanced/enterprise-features/audit-logging)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.