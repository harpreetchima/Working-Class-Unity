---
url: "https://formbricks.com/docs/self-hosting/configuration/integrations/airtable"
title: "Airtable (On Premise) - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/self-hosting/configuration/integrations/airtable#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Integrations

Airtable (On Premise)

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

- [Setup](https://formbricks.com/docs/self-hosting/configuration/integrations/airtable#setup)

Integrations

# Airtable (On Premise)

Instantly populate your Airtable table with survey data

The Airtable integration allows you to automatically send responses to an Airtable of your choice.

If you are using Formbricks Cloud, you will need to configure this
integration differently. Please follow this guide
[here](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/airtable) to set it up.

## [​](https://formbricks.com/docs/self-hosting/configuration/integrations/airtable\#setup)  Setup

Enabling the Airtable Integration in a self-hosted environment requires creating an airtable account and changing the environment variables of your Formbricks instance.

If your Airtable app is in development use, please ensure that the email used in the Airtable integration matches the email used in the Airtable OAuth app. To use other email addresses, you need to fill this information in your OAuth app settings again:![airtable img](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738251900/image_eoaxg3.jpg)

- Go to the [Airtable](https://airtable.com/) and create a new account if you dont already have one.
- Click on user icon on top left and open to **Developer hub**

![opendevhub](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738252268/image_l3w3an.jpg)

- Navigate to OAuth integrations and click on **Register an OAuth integrations**

![new](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738252316/image_xmqyee.jpg)

- Select a name for your integration and also add a redirect URL which will be `<YOUR_WEBAPP_URL>/api/v1/integrations/airtable/callback`![air](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738252498/image_ufbmot.jpg)
- . Now fill some basic details about your integrations and then go to scope section. You need to **enable** 5 scopes:  - data.records:read
  - data.records:write
  - schema.bases:read
  - schema.bases:write
  - user.email:read

![tables](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738252641/image_veqzki.jpg)

- Click on the “Save” button and you are done
- Now just copy **Client ID** for your integration & add it to your **Formbricks environment variables** as in the docker compose file:
- `AIRTABLE_CLIENT_ID`

Voila! You have successfully enabled the Airtable integration in your self-hosted Formbricks instance. Now you can follow the steps mentioned in [Airtable Integration with Formbricks](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/airtable) section to link an Airtable with Formbricks.Still struggling or something not working as expected? [Join our Github Discussions](https://github.com/formbricks/formbricks/discussions) and we’d be glad to assist you!

Was this page helpful?

YesNo

[SAML SSO](https://formbricks.com/docs/self-hosting/configuration/auth-sso/saml-sso) [Google Sheets (On Premise)](https://formbricks.com/docs/self-hosting/configuration/integrations/google-sheets)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.

![airtable img](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738251900/image_eoaxg3.jpg)

![opendevhub](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738252268/image_l3w3an.jpg)

![new](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738252316/image_xmqyee.jpg)

![air](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738252498/image_ufbmot.jpg)

![tables](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738252641/image_veqzki.jpg)