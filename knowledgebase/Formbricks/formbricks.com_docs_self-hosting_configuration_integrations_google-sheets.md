---
url: "https://formbricks.com/docs/self-hosting/configuration/integrations/google-sheets"
title: "Google Sheets (On Premise) - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/self-hosting/configuration/integrations/google-sheets#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Integrations

Google Sheets (On Premise)

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

- [Setup](https://formbricks.com/docs/self-hosting/configuration/integrations/google-sheets#setup)

Integrations

# Google Sheets (On Premise)

Instantly populate your Google Sheet table with survey data

The Google Sheets integration allows you to automatically send responses to an Google Sheets of your choice.

If you are using Formbricks Cloud, you will need to configure this
integration differently. Please follow this guide
[here](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/google-sheets) to set it up.

## [​](https://formbricks.com/docs/self-hosting/configuration/integrations/google-sheets\#setup)  Setup

Integrating Google Sheets with a self-hosted Formbricks instance requires configuring Google Cloud and updating your environment variables.

If your Google Cloud Console project has a publishing status of “Testing” your refresh token will expire after 7 days. To avoid that, you need to change the publishing status to “Production”. [Google OAuth 2.0 documentation](https://developers.google.com/identity/protocols/oauth2?hl=en#expiration)

- Go to the [Google Cloud Console](https://console.cloud.google.com/) and **create a new project**.
- Enable necessary APIs:  - Now select the project you just created and go to the **APIs & Services** section.
  - Click on the **Enable APIs and Services** button and search for **Google Sheets API** and enable it.
- Configure OAuth Consent Screen:  - Go to **OAuth Consent screen** and select the appropriate User Type (External or Internal). Select **Internal** if you want only the users of your Google Workspace to be able to use the integration.
  - Fill the required details:    - App name: Name displayed during OAuth authentication.
    - User support email and Developer contact information: Your contact details for support.
  - Click on **Save and Continue**.
- Add required Scopes:
- Click on the **Add or Remove Scopes** button and add the scopes:  - [`https://www.googleapis.com/auth/userinfo.email`](https://www.googleapis.com/auth/userinfo.email)
  - [`https://www.googleapis.com/auth/spreadsheets`](https://www.googleapis.com/auth/spreadsheets)
- Click on the **Update** button. Verify the scopes and click on the **Save and Continue** button.
- Skip the **Test Users** section and click on the **Save and Continue** button.
- View the OAuth Consent Screen summary and click on the **Back to Dashboard** button.
- Register OAuth Client:
- Navigate to **Credentials** \> **Create Credentials** \> **OAuth Client ID**.
- Select **Web Application** and set:  - Name: Name of the OAuth Client ID.
  - Authorized JavaScript Origins: `https://<your-public-facing-url>`
  - Authorized redirect URIs: `https://<your-public-facing-url>/api/google-sheet/callback`
- Save and note the Client ID and Client Secret.
- Copy the Client ID and Client Secret and set them as environment variables in your Formbricks instance:  - `GOOGLE_SHEETS_CLIENT_ID`
  - `GOOGLE_SHEETS_CLIENT_SECRET`
  - `GOOGLE_SHEETS_REDIRECT_URL`

Now just copy **GOOGLE\_SHEETS\_CLIENT\_ID**, **GOOGLE\_SHEETS\_CLIENT\_SECRET** and **GOOGLE\_SHEETS\_REDIRECT\_URL** for your integration & add it to your **Formbricks environment variables** as in the docker compose file:

- `GOOGLE_SHEETS_CLIENT_ID`
- `GOOGLE_SHEETS_CLIENT_SECRET`
- `GOOGLE_SHEETS_REDIRECT_URL`

Voila! You have successfully enabled the Google Sheets integration in your self-hosted Formbricks instance. Now you can follow the steps mentioned in [Google Sheets Integration with Formbricks](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/google-sheets) section to link a Google Sheet with Formbricks.Still struggling or something not working as expected? [Join our Github Discussions](https://github.com/formbricks/formbricks/discussions) and we’d be glad to assist you!

Was this page helpful?

YesNo

[Airtable (On Premise)](https://formbricks.com/docs/self-hosting/configuration/integrations/airtable) [n8n (On Premise)](https://formbricks.com/docs/self-hosting/configuration/integrations/n8n)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.