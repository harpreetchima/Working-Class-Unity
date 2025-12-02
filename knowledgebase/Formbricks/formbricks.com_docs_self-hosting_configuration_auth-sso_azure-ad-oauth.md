---
url: "https://formbricks.com/docs/self-hosting/configuration/auth-sso/azure-ad-oauth"
title: "Azure AD OAuth - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/self-hosting/configuration/auth-sso/azure-ad-oauth#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Auth & SSO

Azure AD OAuth

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

- [Microsoft Entra ID](https://formbricks.com/docs/self-hosting/configuration/auth-sso/azure-ad-oauth#microsoft-entra-id)
- [Requirements](https://formbricks.com/docs/self-hosting/configuration/auth-sso/azure-ad-oauth#requirements)
- [How to connect your Formbricks instance to Microsoft Entra](https://formbricks.com/docs/self-hosting/configuration/auth-sso/azure-ad-oauth#how-to-connect-your-formbricks-instance-to-microsoft-entra)

Auth & SSO

# Azure AD OAuth

Configure Microsoft Entra ID (Azure AD) OAuth for secure Single Sign-On with your Formbricks instance. Use enterprise-grade authentication for your survey platform.

AzureAD OAuth is part of the Formbricks [Enterprise Edition](https://formbricks.com/docs/self-hosting/advanced/license)

### [​](https://formbricks.com/docs/self-hosting/configuration/auth-sso/azure-ad-oauth\#microsoft-entra-id)  Microsoft Entra ID

Do you have a Microsoft Entra ID Tenant? Integrate it with your Formbricks instance to allow users to log in using their existing Microsoft credentials. This guide will walk you through the process of setting up an Application Registration for your Formbricks instance.

### [​](https://formbricks.com/docs/self-hosting/configuration/auth-sso/azure-ad-oauth\#requirements)  Requirements

- A Microsoft Entra ID Tenant populated with users. [Create a tenant as per Microsoft’s documentation](https://learn.microsoft.com/en-us/entra/fundamentals/create-new-tenant).
- A Formbricks instance running and accessible.
- The callback URI for your Formbricks instance: `{WEBAPP_URL}/api/auth/callback/azure-ad`

## [​](https://formbricks.com/docs/self-hosting/configuration/auth-sso/azure-ad-oauth\#how-to-connect-your-formbricks-instance-to-microsoft-entra)  How to connect your Formbricks instance to Microsoft Entra

1

Access the Microsoft Entra admin center

- Login to the [Microsoft Entra admin center](https://entra.microsoft.com/).
- Go to **Applications** \> **App registrations** in the left menu.

![first](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738250153/image_tobdth.jpg)

2

Create a new app registration

- Click the **New registration** button at the top.

![second](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738250228/image_dmz75t.jpg)

3

Configure the application

- Name your application something descriptive, such as `Formbricks SSO`.

![third](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738250292/image_rooa3w.jpg)

- If you have multiple tenants/organizations, choose the appropriate **Supported account types** option. Otherwise, leave the default option for _Single Tenant_.

![fourth](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738250542/image_nyndzo.jpg)

- Under **Redirect URI**, select **Web** for the platform and paste your Formbricks callback URI (see Requirements above).

![fifth](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738250776/image_s3pgb6.jpg)

- Click **Register** to create the App registration. You will be redirected to your new app’s _Overview_ page after it is created.

4

Collect application credentials

- On the _Overview_ page, under **Essentials**:

  - Copy the entry for **Application (client) ID** to populate the `AZUREAD_CLIENT_ID` variable.
  - Copy the entry for **Directory (tenant) ID** to populate the `AZUREAD_TENANT_ID` variable.

![sixth](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738250876/image_dj2vi5.jpg)

5

Create a client secret

- From your App registration’s _Overview_ page, go to **Manage** \> **Certificates & secrets**.

![seventh](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738250913/image_p4zknw.jpg)

- Make sure you have the **Client secrets** tab active, and click **New client secret**.

![eighth](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738250973/image_kyjray.jpg)

- Enter a **Description**, set an **Expires** period, then click **Add**.

You will need to create a new client secret using these steps whenever your chosen expiry period ends.

![ninth](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738251467/image_bkirq4.jpg)

- Copy the entry under **Value** to populate the `AZUREAD_CLIENT_SECRET` variable.

Microsoft will only show this value to you immediately after creation, and you will not be able to access it again. If you lose it, simply create a new secret.

![tenth](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738251234/image_jen6tp.jpg)

6

Update environment variables

- Update these environment variables in your `docker-compose.yml` or pass it like your other environment variables to the Formbricks container.

You must wrap the `AZUREAD_CLIENT_SECRET` value in double quotes (e.g., “THis~iS4faKe.53CreTvALu3”\`) to prevent issues with special characters.

An example `.env` for Microsoft Entra ID in Formbricks would look like this:

Formbricks Env for Microsoft Entra ID SSO

Copy

```
AZUREAD_CLIENT_ID=a25cadbd-f049-4690-ada3-56a163a72f4c
AZUREAD_TENANT_ID=2746c29a-a3a6-4ea1-8762-37816d4b7885
AZUREAD_CLIENT_SECRET="THis~iS4faKe.53CreTvALu3"
```

7

Restart and test

- Restart your Formbricks instance.
- You’re all set! Users can now sign up & log in using their Microsoft credentials associated with your Entra ID Tenant.

Was this page helpful?

YesNo

[Open ID Connect](https://formbricks.com/docs/self-hosting/configuration/auth-sso/open-id-connect) [Google OAuth](https://formbricks.com/docs/self-hosting/configuration/auth-sso/google-oauth)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.

![first](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738250153/image_tobdth.jpg)

![second](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738250228/image_dmz75t.jpg)

![third](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738250292/image_rooa3w.jpg)

![fourth](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738250542/image_nyndzo.jpg)

![fifth](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738250776/image_s3pgb6.jpg)

![sixth](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738250876/image_dj2vi5.jpg)

![seventh](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738250913/image_p4zknw.jpg)

![eighth](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738250973/image_kyjray.jpg)

![ninth](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738251467/image_bkirq4.jpg)

![tenth](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738251234/image_jen6tp.jpg)