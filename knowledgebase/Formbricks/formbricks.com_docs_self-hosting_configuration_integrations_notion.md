---
url: "https://formbricks.com/docs/self-hosting/configuration/integrations/notion"
title: "Notion (On Premise) - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/self-hosting/configuration/integrations/notion#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Integrations

Notion (On Premise)

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

- [Setup](https://formbricks.com/docs/self-hosting/configuration/integrations/notion#setup)

Integrations

# Notion (On Premise)

Instantly populate a Notion database with survey data

The Notion integration allows you to automatically send responses to a Notion database of your choice.

If you are using Formbricks Cloud, you will need to configure this
integration differently. Please follow this guide
[here](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/notion) to set it up.

## [​](https://formbricks.com/docs/self-hosting/configuration/integrations/notion\#setup)  Setup

Enabling the Notion Integration in a self-hosted environment requires a setup using Notion account and changing the environment variables of your Formbricks instance.

- Sign up for a [Notion](https://www.notion.so/) account, if you don’t have one already.
- Go to the [my integrations](https://www.notion.so/my-integrations) page and click on **New integration**.
- Fill up the basic information like **Name**, **Logo** and click on **Submit**.
- Now, click on **Distribution** tab on the sidebar. A text will appear which will ask you to make the integration public. Click on that toggle button. A form will appear below the text.
- Now provide it the details such as requested. Under **Redirect URIs** field:  - If you are running formbricks locally, you can enter `http://localhost:3000/api/v1/integrations/notion/callback`.
  - Or, you can enter `https://<your-public-facing-url>/api/v1/integrations/notion/callback`
- Once you’ve filled all the necessary details, click on **Submit**.
- Now just copy from the screen the **Client ID** and **Client secret** for your integration & add it to your **Formbricks environment variables** as in the docker compose file:  - `NOTION_OAUTH_CLIENT_ID` \- OAuth Client ID
  - `NOTION_OAUTH_CLIENT_SECRET` \- OAuth Client Secret

Voila! You have successfully enabled the Notion integration in your self-hosted Formbricks instance. Now you can follow the steps mentioned in [Notion Integration with Formbricks](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/notion) section to link your Notion with Formbricks.Still struggling or something not working as expected? [Join our Github Discussions](https://github.com/formbricks/formbricks/discussions) and we’d be glad to assist you!

Was this page helpful?

YesNo

[n8n (On Premise)](https://formbricks.com/docs/self-hosting/configuration/integrations/n8n) [Slack (On Premise)](https://formbricks.com/docs/self-hosting/configuration/integrations/slack)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.