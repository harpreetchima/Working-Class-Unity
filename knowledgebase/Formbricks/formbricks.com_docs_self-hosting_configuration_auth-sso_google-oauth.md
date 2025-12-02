---
url: "https://formbricks.com/docs/self-hosting/configuration/auth-sso/google-oauth"
title: "Google OAuth - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/self-hosting/configuration/auth-sso/google-oauth#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Auth & SSO

Google OAuth

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

On this page

- [Google OAuth](https://formbricks.com/docs/self-hosting/configuration/auth-sso/google-oauth#google-oauth)
- [Requirements](https://formbricks.com/docs/self-hosting/configuration/auth-sso/google-oauth#requirements)
- [How to connect your Formbricks instance to Google](https://formbricks.com/docs/self-hosting/configuration/auth-sso/google-oauth#how-to-connect-your-formbricks-instance-to-google)

Auth & SSO

# Google OAuth

Configure Google OAuth for secure Single Sign-On with your Formbricks instance. Implement enterprise-grade authentication for your survey platform with Google credentials.

Google OAuth is part of the Formbricks [Enterprise Edition](https://formbricks.com/docs/self-hosting/advanced/license)

### [​](https://formbricks.com/docs/self-hosting/configuration/auth-sso/google-oauth\#google-oauth)  Google OAuth

Integrating Google OAuth with your Formbricks instance allows users to log in using their Google credentials, ensuring a secure and streamlined user experience. This guide will walk you through the process of setting up Google OAuth for your Formbricks instance.

### [​](https://formbricks.com/docs/self-hosting/configuration/auth-sso/google-oauth\#requirements)  Requirements

- A Google Cloud Platform (GCP) account
- A Formbricks instance running

### [​](https://formbricks.com/docs/self-hosting/configuration/auth-sso/google-oauth\#how-to-connect-your-formbricks-instance-to-google)  How to connect your Formbricks instance to Google

1

Create a GCP Project

- Navigate to the [GCP Console](https://console.cloud.google.com/).
- From the projects list, select a project or create a new one.

2

Setting up OAuth 2.0

- If the **APIs & services** page isn’t already open, open the console left side menu and select **APIs & services**.
- On the left, click **Credentials**.
- Click **Create Credentials**, then select **OAuth client ID**.

3

Configure OAuth Consent Screen

- If this is your first time creating a client ID, configure your consent screen by clicking **Consent Screen**.
- Fill in the necessary details and under **Authorized domains**, add the domain where your Formbricks instance is hosted.

4

Create OAuth 2.0 Client IDs

- Select the application type **Web application** for your project and enter any additional information required.
- Ensure to specify authorized JavaScript origins and authorized redirect URIs.

Copy

```
Authorized JavaScript origins: {WEBAPP_URL}
Authorized redirect URIs: {WEBAPP_URL}/api/auth/callback/google
```

5

Update Environment Variables in Docker

- To integrate the Google OAuth, you have two options: either update the environment variables in the docker-compose file or directly add them to the running container.
- In your Docker setup directory, open the `.env` file, and add or update the following lines with the `Client ID` and `Client Secret` obtained from Google Cloud Platform:

Copy

```
GOOGLE_CLIENT_ID=your-client-id-here
GOOGLE_CLIENT_SECRET=your-client-secret-here
```

- Alternatively, you can add the environment variables directly to the running container using the following commands (replace `container_id` with your actual Docker container ID):

Copy

```
docker exec -it container_id /bin/bash
export GOOGLE_CLIENT_ID=your-client-id-here
export GOOGLE_CLIENT_SECRET=your-client-secret-here
exit
```

6

Restart Your Formbricks Instance

Restarting your Docker containers may cause a brief period of downtime. Plan accordingly.

- Once the environment variables have been updated, it’s crucial to restart your Docker containers to apply the changes. This ensures that your Formbricks instance can utilize the new Google OAuth configuration for user authentication.
- Navigate to your Docker setup directory where your `docker-compose.yml` file is located.
- Run the following command to bring down your current Docker containers and then bring them back up with the updated environment configuration.

Was this page helpful?

YesNo

[Azure AD OAuth](https://formbricks.com/docs/self-hosting/configuration/auth-sso/azure-ad-oauth) [SAML SSO](https://formbricks.com/docs/self-hosting/configuration/auth-sso/saml-sso)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.