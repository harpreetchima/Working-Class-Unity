---
url: "https://formbricks.com/docs/self-hosting/configuration/integrations/activepieces"
title: "ActivePieces (On Premise) - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/self-hosting/configuration/integrations/activepieces#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Integrations

ActivePieces (On Premise)

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

  - [Airtable (On Premise)](https://formbricks.com/docs/self-hosting/configuration/integrations/airtable)
  - [Google Sheets (On Premise)](https://formbricks.com/docs/self-hosting/configuration/integrations/google-sheets)
  - [n8n (On Premise)](https://formbricks.com/docs/self-hosting/configuration/integrations/n8n)
  - [Notion (On Premise)](https://formbricks.com/docs/self-hosting/configuration/integrations/notion)
  - [Slack (On Premise)](https://formbricks.com/docs/self-hosting/configuration/integrations/slack)
  - [Zapier (On Premise)](https://formbricks.com/docs/self-hosting/configuration/integrations/zapier)
  - [ActivePieces (On Premise)](https://formbricks.com/docs/self-hosting/configuration/integrations/activepieces)

##### Advanced

- [Migration](https://formbricks.com/docs/self-hosting/advanced/migration)
- [License](https://formbricks.com/docs/self-hosting/advanced/license)
- [License Activation](https://formbricks.com/docs/self-hosting/advanced/license-activation)
- Enterprise Features

- [Rate Limiting](https://formbricks.com/docs/self-hosting/advanced/rate-limiting)

On this page

- [Setting Up ActivePieces with Self-Hosted Formbricks](https://formbricks.com/docs/self-hosting/configuration/integrations/activepieces#setting-up-activepieces-with-self-hosted-formbricks)
- [Prerequisites](https://formbricks.com/docs/self-hosting/configuration/integrations/activepieces#prerequisites)
- [Configuration Steps](https://formbricks.com/docs/self-hosting/configuration/integrations/activepieces#configuration-steps)
- [Important Note for Self-Hosting](https://formbricks.com/docs/self-hosting/configuration/integrations/activepieces#important-note-for-self-hosting)
- [Verification](https://formbricks.com/docs/self-hosting/configuration/integrations/activepieces#verification)
- [Troubleshooting](https://formbricks.com/docs/self-hosting/configuration/integrations/activepieces#troubleshooting)

Integrations

# ActivePieces (On Premise)

Learn how to configure ActivePieces integration in your survey for self-hosting instance.

## [​](https://formbricks.com/docs/self-hosting/configuration/integrations/activepieces\#setting-up-activepieces-with-self-hosted-formbricks)  Setting Up ActivePieces with Self-Hosted Formbricks

### [​](https://formbricks.com/docs/self-hosting/configuration/integrations/activepieces\#prerequisites)  Prerequisites

- A self-hosted Formbricks instance
- Access to an ActivePieces account

### [​](https://formbricks.com/docs/self-hosting/configuration/integrations/activepieces\#configuration-steps)  Configuration Steps

For general setup instructions, refer to our [comprehensive ActivePieces integration guide](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/activepieces).

#### [​](https://formbricks.com/docs/self-hosting/configuration/integrations/activepieces\#important-note-for-self-hosting)  Important Note for Self-Hosting

When following the main guide, pay special attention to **Step 3** where you create a new connection:Instead of using `app.formbricks.com` as your `APP_URL`, you must substitute this with your own self-hosted Formbricks instance URL.![ActivePieces Connection Setup](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/self-hosting/configuration/integrations/activepieces/new-connection.webp?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=3d0bff1738310a6452855bf238c2261c)

### [​](https://formbricks.com/docs/self-hosting/configuration/integrations/activepieces\#verification)  Verification

After configuring the connection:

1. Test the integration by submitting a sample survey
2. Verify that your ActivePieces workflow executes as expected
3. Check the logs if you encounter any issues

## [​](https://formbricks.com/docs/self-hosting/configuration/integrations/activepieces\#troubleshooting)  Troubleshooting

If you encounter issues with your ActivePieces integration:

- Ensure your self-hosted Formbricks instance is accessible from the internet
- Verify that you’ve entered the correct URL for your instance
- Check that any necessary API keys are properly configured

Was this page helpful?

YesNo

[Zapier (On Premise)](https://formbricks.com/docs/self-hosting/configuration/integrations/zapier) [Migration](https://formbricks.com/docs/self-hosting/advanced/migration)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.