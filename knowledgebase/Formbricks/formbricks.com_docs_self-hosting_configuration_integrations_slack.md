---
url: "https://formbricks.com/docs/self-hosting/configuration/integrations/slack"
title: "Slack (On Premise) - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/self-hosting/configuration/integrations/slack#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Integrations

Slack (On Premise)

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

- [Setup](https://formbricks.com/docs/self-hosting/configuration/integrations/slack#setup)

Integrations

# Slack (On Premise)

Send survey responses automatically to Slack workspace.

Send survey responses automatically to Slack workspace.

If you are using Formbricks Cloud, you will need to configure this
integration differently. Please follow this guide
[here](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/slack) to set it up.

## [​](https://formbricks.com/docs/self-hosting/configuration/integrations/slack\#setup)  Setup

Enabling the Slack Integration in a self-hosted environment requires a setup using slack workspace account and changing the environment variables of your Formbricks instance.

Make sure your self-hosted Formbricks instance works with SSL as Slack requires it.

- Create a Slack workspace if you don’t have one already.
- Go to the [Your apps](https://api.slack.com/apps) page and **Create New App**.
- Click on **From Scratch** and provide the **App Name** and select your workspace in **Pick a workspace to develop your app in:** dropdown. Click on **Create App**.
- Go to the **OAuth & Permissions** tab on the sidebar and add the following **Bot Token Scopes**:  - `channels:read`
  - `groups:read`
  - `chat:write`
  - `chat:write.public`
  - `chat:write.customize`
- Add the **Redirect URLs** under **OAuth & Permissions** tab. You can add the following URLs:  - If you are running formbricks locally, you can enter `https://localhost:3000/api/v1/integrations/slack/callback`.
  - Or, you can enter `https://<your-public-facing-url>/api/v1/integrations/slack/callback`
- Now, click on **Install to Workspace** and **Allow** the permissions.
- Go to the **Basic Information** tab on the sidebar and copy the **Client ID** and **Client Secret**. Copy them & add it to your **Formbricks environment variables** as in the docker compose file:
- `SLACK_CLIENT_ID` \- OAuth Client ID
- `SLACK_CLIENT_SECRET` \- OAuth Client Secret
- Now, you need to enable the public distribution of your app. Go to the **Basic Information** tab and click on the **Manage distribution** button and click on the “Distribute App”.
- Scroll down to the **Share your app with other workspaces** section, complete the checklist and click on the **Activate public distribution** button.

Voila! You have successfully enabled the Slack integration in your self-hosted Formbricks instance. Now you can follow the steps mentioned in the [Slack Integration](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/slack) section to link a Slack workspace with Formbricks.Still struggling or something not working as expected? [Join our Github Discussions](https://github.com/formbricks/formbricks/discussions) and we’d be glad to assist you!

Was this page helpful?

YesNo

[Notion (On Premise)](https://formbricks.com/docs/self-hosting/configuration/integrations/notion) [Zapier (On Premise)](https://formbricks.com/docs/self-hosting/configuration/integrations/zapier)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.