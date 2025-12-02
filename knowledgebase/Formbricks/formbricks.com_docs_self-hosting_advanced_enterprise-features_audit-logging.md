---
url: "https://formbricks.com/docs/self-hosting/advanced/enterprise-features/audit-logging"
title: "Audit Logging - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/self-hosting/advanced/enterprise-features/audit-logging#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Enterprise Features

Audit Logging

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

  - [Hide Branding](https://formbricks.com/docs/self-hosting/advanced/enterprise-features/hide-powered-by-formbricks)
  - [White-label Follow-ups](https://formbricks.com/docs/self-hosting/advanced/enterprise-features/whitelabel-email-follow-ups)
  - [Teams & Roles (RBAC)](https://formbricks.com/docs/self-hosting/advanced/enterprise-features/team-access)
  - [Contacts & Segments](https://formbricks.com/docs/self-hosting/advanced/enterprise-features/contact-management-segments)
  - [Multi-language Surveys](https://formbricks.com/docs/self-hosting/advanced/enterprise-features/multi-language-surveys)
  - [OAuth & SSO](https://formbricks.com/docs/self-hosting/advanced/enterprise-features/oidc-sso)
  - [SAML SSO](https://formbricks.com/docs/self-hosting/advanced/enterprise-features/saml-sso)
  - [Audit Logging](https://formbricks.com/docs/self-hosting/advanced/enterprise-features/audit-logging)
- [Rate Limiting](https://formbricks.com/docs/self-hosting/advanced/rate-limiting)

On this page

- [Benefits of audit logging](https://formbricks.com/docs/self-hosting/advanced/enterprise-features/audit-logging#benefits-of-audit-logging)
- [Enabling audit logging](https://formbricks.com/docs/self-hosting/advanced/enterprise-features/audit-logging#enabling-audit-logging)
- [Understanding the log format](https://formbricks.com/docs/self-hosting/advanced/enterprise-features/audit-logging#understanding-the-log-format)
- [Centralized logging and compliance](https://formbricks.com/docs/self-hosting/advanced/enterprise-features/audit-logging#centralized-logging-and-compliance)
- [Additional details](https://formbricks.com/docs/self-hosting/advanced/enterprise-features/audit-logging#additional-details)

Enterprise Features

# Audit Logging

Enable comprehensive audit logs for your Formbricks instance.

Audit logs record **who** did **what**, **when**, **from where**, and **with what outcome** across your Formbricks instance.

* * *

## [​](https://formbricks.com/docs/self-hosting/advanced/enterprise-features/audit-logging\#benefits-of-audit-logging)  Benefits of audit logging

- **Compliance readiness** — Many regulatory frameworks such as GDPR and SOC 2 require immutable records of user activity.
- **Security investigation support** — Audit logs provide clear visibility into user and system actions, helping teams respond quickly and confidently during security incidents.
- **Operational accountability** — Track changes across the system to answer common questions like “ _who modified this?_” or “ _when was this deleted?_”.

* * *

## [​](https://formbricks.com/docs/self-hosting/advanced/enterprise-features/audit-logging\#enabling-audit-logging)  Enabling audit logging

1. Set the following environment variables in your deployment (Docker Compose, Kubernetes, etc.):

.env

Copy

```
# --- Audit logging ---
AUDIT_LOG_ENABLED=1
AUDIT_LOG_GET_USER_IP=1                        # set to 1 to include user IP address in audit logs, 0 to omit (default: 0)
```

2. Redeploy your containers.
3. Confirm you can see audit logs in the output of your containers.

Audit logs are printed to **stdout** as JSON Lines format, making them easily accessible through your container logs or log aggregation systems.

* * *

## [​](https://formbricks.com/docs/self-hosting/advanced/enterprise-features/audit-logging\#understanding-the-log-format)  Understanding the log format

Audit logs are **JSON Lines** (one JSON object per line). A typical entry looks like this:

Copy

```
{"level":"audit","time":1749207302158,"pid":20023,"hostname":"Victors-MacBook-Pro.local","name":"formbricks","actor":{"id":"cm90t4t7l0000vrws5hpo5ta5","type":"api"},"action":"created","target":{"id":"cmbkov4dn0000vrg72i7oznqv","type":"webhook"},"timestamp":"2025-06-06T10:55:02.145Z","organizationId":"cm8zovtbm0001vr3efa4n03ms","status":"success","ipAddress":"unknown","apiUrl":"http://localhost:3000/api/v1/webhooks","changes":{"id":"cmbkov4dn0000vrg72i7oznqv","name":"********","createdAt":"2025-06-06T10:55:02.123Z","updatedAt":"2025-06-06T10:55:02.123Z","url":"https://eoy8o887lmsqmhz.m.pipedream.net","source":"user","environmentId":"cm8zowv0b0009vr3ec56w2qf3","triggers":["responseCreated","responseUpdated","responseFinished"],"surveyIds":[]}}
```

Key fields:

| Field | Description |
| --- | --- |
| `level` | Log level, always `"audit"` for audit events |
| `time` | Unix timestamp in milliseconds |
| `pid` | Process ID of the logging instance |
| `hostname` | Hostname of the server generating the log |
| `name` | Application name, typically `"formbricks"` |
| `timestamp` | ISO‑8601 time of the action |
| `actor` | User or API key responsible (object with `id` and `type`) |
| `action` | Constant verb‑noun string (`survey.updated`, `login.failed`, …) |
| `target` | The resource affected (object with `id` and `type`) |
| `status` | `success` or `failure` |
| `organizationId` | Organization identifier where the action occurred |
| `ipAddress` | User IP address, present only if `AUDIT_LOG_GET_USER_IP=1`, otherwise `"unknown"` |
| `apiUrl` | (Optional) API endpoint URL if the logs was generated through an API call |
| `eventId` | (Optional) Available on error logs. You can use it to refer to the system log with this eventId for more details on the error |
| `changes` | (Optional) Only the fields that actually changed (sensitive values redacted) |

* * *

## [​](https://formbricks.com/docs/self-hosting/advanced/enterprise-features/audit-logging\#centralized-logging-and-compliance)  Centralized logging and compliance

Formbricks audit logs are designed to work with modern centralized logging architectures:

- **Stdout delivery**: Logs are written to stdout for immediate collection by log forwarding agents
- **Centralized integrity**: Log integrity and immutability are handled by your centralized logging platform (ELK Stack, Splunk, CloudWatch, etc.)
- **Platform-level security**: Access controls and tamper detection are provided by your logging infrastructure
- **SOC2 compliance**: Most SOC2 auditors accept centralized logging without application-level integrity mechanisms

## [​](https://formbricks.com/docs/self-hosting/advanced/enterprise-features/audit-logging\#additional-details)  Additional details

- **Redacted secrets:** Sensitive fields (e‑mails, access tokens, passwords…) are replaced with `"********"` before being written.
- **Failure events count:** Both successful _and_ failed operations are logged.
- **Single source of truth:** The same logs power the `Formbricks` UI and API endpoints.
- **Scope limitation:** For now, **only events triggered inside the `Formbricks` application** are audited. This means:

  - **Embed and Link Surveys** are **not** included in the audit logs.
  - **Survey responses** created via the client API or client-side SDKs are **not** audited.

* * *

Was this page helpful?

YesNo

[SAML SSO](https://formbricks.com/docs/self-hosting/advanced/enterprise-features/saml-sso) [Rate Limiting](https://formbricks.com/docs/self-hosting/advanced/rate-limiting)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.