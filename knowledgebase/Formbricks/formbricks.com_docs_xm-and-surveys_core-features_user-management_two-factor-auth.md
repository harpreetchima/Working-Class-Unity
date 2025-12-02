---
url: "https://formbricks.com/docs/xm-and-surveys/core-features/user-management/two-factor-auth"
title: "Two-factor authentication - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/two-factor-auth#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

User Management

Two-factor authentication

[Overview](https://formbricks.com/docs/overview/introduction) [XM & Surveys](https://formbricks.com/docs/xm-and-surveys/overview) [Self Hosting](https://formbricks.com/docs/self-hosting/overview) [Development](https://formbricks.com/docs/development/overview) [API v1 Reference](https://formbricks.com/docs/api-reference/rest-api) [API v2 Reference (Beta)](https://formbricks.com/docs/api-v2-reference/introduction)

##### XM & Surveys

- [XM & Surveys](https://formbricks.com/docs/xm-and-surveys/overview)

##### Surveys

- General Features

- Link Surveys

- Website & App Surveys

- Question Types


##### Platform Features

- Integrations

- User Management

  - [Key Concepts](https://formbricks.com/docs/xm-and-surveys/core-features/user-management)
  - [Organizations and roles](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/organizations-and-roles)
  - [Teams and roles](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles)
  - [Invite members](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/invite-members)
  - [Two-factor authentication](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/two-factor-auth)
- [Styling Theme](https://formbricks.com/docs/xm-and-surveys/core-features/styling-theme)
- [Email Branding](https://formbricks.com/docs/xm-and-surveys/core-features/email-customization)
- [Test Environment](https://formbricks.com/docs/xm-and-surveys/core-features/test-environment)

##### XM

- Best Practices


On this page

- [Prerequisites](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/two-factor-auth#prerequisites)
- [Setting up Two-factor authentication](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/two-factor-auth#setting-up-two-factor-authentication)
- [Logging in with Two-factor authentication](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/two-factor-auth#logging-in-with-two-factor-authentication)
- [Managing Two-factor authentication](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/two-factor-auth#managing-two-factor-authentication)
- [Disabling 2FA](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/two-factor-auth#disabling-2fa)
- [Re-enabling 2FA](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/two-factor-auth#re-enabling-2fa)

User Management

# Two-factor authentication

Secure your account with an additional layer of protection using time-based codes from authenticator apps and backup codes.

Two-factor authentication (2FA) adds an extra layer of security to user accounts by requiring a second form of verification in addition to the password. This significantly reduces the risk of unauthorized access even if passwords are compromised.

Two-factor authentication is part of the [Enterprise Edition](https://formbricks.com/docs/self-hosting/advanced/license).

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/two-factor-auth\#prerequisites)  Prerequisites

To use two-factor authentication, users must:

- Have an account with email-based authentication (third-party login providers like Google SSO are not compatible with 2FA)
- Have a TOTP-compatible authenticator app installed on their device (such as Google Authenticator, Authy, or 1Password)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/two-factor-auth\#setting-up-two-factor-authentication)  Setting up Two-factor authentication

Users can enable 2FA from their profile settings:

1. Navigate to **Profile Settings** via the menu in the lower right corner
2. In the **Security** section, toggle the **Two-factor authentication** switch
3. Follow the setup wizard:**Step 1: Confirm Password**

   - Enter your current password to verify your identity

**Step 2: Scan QR Code**

   - Use your authenticator app to scan the displayed QR code
   - Alternatively, manually enter the provided secret key into your authenticator app

**Step 3: Verify Setup**

   - Enter the 6-digit code from your authenticator app to confirm the setup

**Step 4: Save Backup Codes**   - **Important**: Save the 10 backup codes in a secure location
   - These codes can be used to access your account if you lose access to your authenticator device
   - Each backup code can only be used once

Store your backup codes in a secure location. If you lose access to both your authenticator device and backup codes, you will need administrator assistance to regain access to your account.

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/two-factor-auth\#logging-in-with-two-factor-authentication)  Logging in with Two-factor authentication

Once 2FA is enabled, the login process requires an additional step:

1. Enter your email and password as usual
2. When prompted, enter either:
   - A 6-digit code from your authenticator app, or
   - One of your backup codes (use format: xxxxx-xxxxx or just the 10-character code)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/two-factor-auth\#managing-two-factor-authentication)  Managing Two-factor authentication

### [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/two-factor-auth\#disabling-2fa)  Disabling 2FA

To disable two-factor authentication:

1. Go to **Profile Settings > Security**
2. Toggle off the **Two-factor authentication** switch
3. Confirm by entering either:
   - Your password and a TOTP code from your authenticator app, or
   - Your password and a backup code

When 2FA is disabled, all associated backup codes are permanently deleted for security reasons.

### [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/two-factor-auth\#re-enabling-2fa)  Re-enabling 2FA

If you need to set up 2FA again (for example, after getting a new device):

1. Follow the same setup process described above
2. New backup codes will be generated
3. Old backup codes (if any existed) will be invalidated

Was this page helpful?

YesNo

[Invite members](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/invite-members) [Styling Theme](https://formbricks.com/docs/xm-and-surveys/core-features/styling-theme)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.