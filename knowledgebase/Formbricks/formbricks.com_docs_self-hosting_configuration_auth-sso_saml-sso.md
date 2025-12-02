---
url: "https://formbricks.com/docs/self-hosting/configuration/auth-sso/saml-sso"
title: "SAML SSO - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/self-hosting/configuration/auth-sso/saml-sso#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Auth & SSO

SAML SSO

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

- [Overview](https://formbricks.com/docs/self-hosting/configuration/auth-sso/saml-sso#overview)
- [How SAML works in Formbricks](https://formbricks.com/docs/self-hosting/configuration/auth-sso/saml-sso#how-saml-works-in-formbricks)
- [SAML Auth Flow Sequence Diagram](https://formbricks.com/docs/self-hosting/configuration/auth-sso/saml-sso#saml-auth-flow-sequence-diagram)
- [Setting Up SAML SSO](https://formbricks.com/docs/self-hosting/configuration/auth-sso/saml-sso#setting-up-saml-sso)

Auth & SSO

# SAML SSO

Configure SAML Single Sign-On (SSO) for secure enterprise authentication with your Formbricks instance.

SAML SSO is part of the Formbricks [Enterprise Edition](https://formbricks.com/docs/self-hosting/advanced/license)

## [​](https://formbricks.com/docs/self-hosting/configuration/auth-sso/saml-sso\#overview)  Overview

Formbricks supports SAML Single Sign-On (SSO) to enable secure, centralized authentication. With SAML, organizations can integrate their existing Identity Provider (IdP) infrastructure for streamlined access management. Formbricks internally uses BoxyHQ’s SAML Jackson to manage SAML connections. SAML Jackson is a service provided by BoxyHQ that manages SAML connection details and validates assertions. It is part of the Formbricks server.To learn more about SAML Jackson, please refer to the [BoxyHQ SAML Jackson documentation](https://boxyhq.com/docs/jackson/deploy).

## [​](https://formbricks.com/docs/self-hosting/configuration/auth-sso/saml-sso\#how-saml-works-in-formbricks)  How SAML works in Formbricks

SAML (Security Assertion Markup Language) is an XML-based standard for exchanging authentication and authorization data between an Identity Provider (IdP) and Formbricks. Here’s how the integration works with BoxyHQ Jackson embedded into the flow:

1. **Login Initiation:**


The user clicks `Continue with SAML SSO` on Formbricks.
2. **Configuration Retrieval via BoxyHQ:**


Formbricks requests the SAML connection details from BoxyHQ Jackson. BoxyHQ securely stores and manages the IdP configuration, including endpoints, certificates, and other metadata.
3. **Redirection:**


With the configuration details from BoxyHQ, Formbricks redirects the user to the IdP’s login page (e.g., Okta).
4. **Authentication:**


The user authenticates directly with the IdP.
5. **SAML Response:**


Upon successful authentication, the IdP sends a signed SAML response back to Formbricks via the user’s browser.
6. **Validation via BoxyHQ:**


BoxyHQ Jackson validates the SAML assertion—verifying the signature and extracting user details—before sending the validated data back to Formbricks.
7. **Access Granted:**


Formbricks logs the user in using the verified information.

## [​](https://formbricks.com/docs/self-hosting/configuration/auth-sso/saml-sso\#saml-auth-flow-sequence-diagram)  SAML Auth Flow Sequence Diagram

Below is a sequence diagram illustrating the complete SAML authentication flow with BoxyHQ Jackson integrated:

Okta (IdP)BoxyHQ JacksonFormbricks (SP)UserOkta (IdP)BoxyHQ JacksonFormbricks (SP)User(Setup phase, done beforehand)1\. Admin configures SAML metadata in Formbricks2\. BoxyHQ stores & manages SAML connection detailsClicks “Continue with SAML SSO"Request SAML connection detailsReturns SAML configuration (IdP info)Redirect user to Okta (SAML Auth Request)Prompts user for credentialsSubmits credentialsSends SAML Assertion (Callback URL)Validates assertion & extracts user infoReturns validated user dataLogs user into Formbricks

## [​](https://formbricks.com/docs/self-hosting/configuration/auth-sso/saml-sso\#setting-up-saml-sso)  Setting Up SAML SSO

To configure SAML SSO in Formbricks, follow these steps:

1

Database Setup

Configure a dedicated database for SAML by setting the `SAML_DATABASE_URL` environment variable in your `docker-compose.yml` file (e.g., `postgres://postgres:postgres@postgres:5432/formbricks-saml`). If you’re using a self-signed certificate for Postgres, include the `sslmode=disable` parameter.

2

IdP Application

Create a SAML application in your IdP by following your provider’s instructions( [SAML Setup](https://formbricks.com/docs/development/guides/auth-and-provision/setup-saml-with-identity-providers))

3

User Provisioning

Provision users in your IdP and configure access to the IdP SAML app for all your users (who need access to Formbricks).

4

Metadata

Keep the XML metadata from your IdP handy for the next step.

5

Metadata Setup

Create a file called `connection.xml` in your self-hosted Formbricks instance’s `formbricks/saml-connection` (use `formbricks/apps/web/saml-connection` for development) directory and paste the XML metadata from your IdP into it. Please create the directory if it doesn’t exist. Your metadata file should start with a tag like this: `<?xml version="1.0" encoding="UTF-8"?><...>` or `<md:EntityDescriptor entityID="...">`. Please remove any extra text from the metadata.

6

Restart Formbricks

Restart Formbricks to apply the changes. You can do this by running `docker compose down` and then `docker compose up -d`.

We don’t support multiple SAML connections yet. You can only have one SAML connection at a time. If you
change the `connection.xml` file, your existing SAML connection will be overwritten.

Was this page helpful?

YesNo

[Google OAuth](https://formbricks.com/docs/self-hosting/configuration/auth-sso/google-oauth) [Airtable (On Premise)](https://formbricks.com/docs/self-hosting/configuration/integrations/airtable)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.