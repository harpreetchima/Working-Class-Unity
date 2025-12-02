---
url: "https://formbricks.com/docs/self-hosting/auth-behavior"
title: "Authentication Behavior - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/self-hosting/auth-behavior#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Auth & SSO

Authentication Behavior

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

- [Overview](https://formbricks.com/docs/self-hosting/auth-behavior#overview)
- [License Requirement for Role Management and SSO Behavior](https://formbricks.com/docs/self-hosting/auth-behavior#license-requirement-for-role-management-and-sso-behavior)
- [Environment Variables](https://formbricks.com/docs/self-hosting/auth-behavior#environment-variables)
- [AUTH\_SKIP\_INVITE\_FOR\_SSO](https://formbricks.com/docs/self-hosting/auth-behavior#auth-skip-invite-for-sso)
- [AUTH\_DEFAULT\_TEAM\_ID](https://formbricks.com/docs/self-hosting/auth-behavior#auth-default-team-id)
- [Example .env Configuration](https://formbricks.com/docs/self-hosting/auth-behavior#example-env-configuration)

Auth & SSO

# Authentication Behavior

Learn how authentication and user invitation work in self-hosted Formbricks deployments.

## [​](https://formbricks.com/docs/self-hosting/auth-behavior\#overview)  Overview

In self-hosted Formbricks, user management and authentication can be customized using environment variables. By default, self-hosted instances have user signup disabled, and only organization owners or admins can invite new users. The behavior of the authentication and invitation flow can be further controlled using the following environment variables:

- `AUTH_SKIP_INVITE_FOR_SSO`
- `AUTH_DEFAULT_TEAM_ID`

## [​](https://formbricks.com/docs/self-hosting/auth-behavior\#license-requirement-for-role-management-and-sso-behavior)  License Requirement for Role Management and SSO Behavior

To control advanced role management features and environment-based SSO behavior, your self-hosted Formbricks
instance must have a valid enterprise license.

## [​](https://formbricks.com/docs/self-hosting/auth-behavior\#environment-variables)  Environment Variables

### [​](https://formbricks.com/docs/self-hosting/auth-behavior\#auth-skip-invite-for-sso)  `AUTH_SKIP_INVITE_FOR_SSO`

- **Type:** Boolean (0 or 1)
- **Default:** 0 (invite required)
- **Description:**
  - When set to `1`, users who sign up via SSO (Single Sign-On) providers (such as Google, Azure AD, SAML, or OIDC) can create an account without requiring an invitation.
  - When set to `0` (default), all users—including those signing up via SSO—must be invited by an organization owner or admin before they can create an account.
- **Use case:**
  - Set this to `1` if you want to allow anyone with access to your SSO provider to join your Formbricks instance without a manual invite.
  - Keep it at `0` for stricter access control, where only invited users can join, regardless of SSO.

### [​](https://formbricks.com/docs/self-hosting/auth-behavior\#auth-default-team-id)  `AUTH_DEFAULT_TEAM_ID`

- **Type:** String (Team ID, a valid cuid)
- **Default:** None (must be set if you want to use default team assignment)
- **Description:**
  - When a new user is invited or signs up (if allowed), they will automatically be added to the team with the ID specified in this variable.
  - This is useful for onboarding users into a default team, ensuring they have access to relevant projects and resources immediately after joining.
- **Use case:**
  - Set this to the ID of your default team to streamline onboarding for new users.
  - If not set, users will not be automatically assigned to any team upon signup or invite acceptance.

## [​](https://formbricks.com/docs/self-hosting/auth-behavior\#example-env-configuration)  Example `.env` Configuration

Copy

```
# Allow SSO users to join without invite
AUTH_SKIP_INVITE_FOR_SSO=1

# Automatically assign new users to this team
AUTH_DEFAULT_TEAM_ID=team-123
```

Refer to the [Environment Variables documentation](https://formbricks.com/docs/self-hosting/configuration/environment-variables) for a full list and details.

* * *

For more information on SSO setup, see:

- [Google OAuth](https://formbricks.com/docs/self-hosting/configuration/auth-sso/google-oauth)
- [Azure AD OAuth](https://formbricks.com/docs/self-hosting/configuration/auth-sso/azure-ad-oauth)
- [Open ID Connect](https://formbricks.com/docs/self-hosting/configuration/auth-sso/open-id-connect)
- [SAML SSO](https://formbricks.com/docs/self-hosting/configuration/auth-sso/saml-sso)

Formbricks does not support special characters, such as Cyrillic, in account email addresses to avoid technical, compatibility, and security issues. Additionally, universal support for such addresses is still limited.

Was this page helpful?

YesNo

[Custom Subpath](https://formbricks.com/docs/self-hosting/configuration/custom-subpath) [Open ID Connect](https://formbricks.com/docs/self-hosting/configuration/auth-sso/open-id-connect)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.