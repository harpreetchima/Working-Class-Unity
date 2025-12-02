---
url: "https://formbricks.com/docs/xm-and-surveys/surveys/general-features/spam-protection"
title: "Spam Protection - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/spam-protection#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

General Features

Spam Protection

[Overview](https://formbricks.com/docs/overview/introduction) [XM & Surveys](https://formbricks.com/docs/xm-and-surveys/overview) [Self Hosting](https://formbricks.com/docs/self-hosting/overview) [Development](https://formbricks.com/docs/development/overview) [API v1 Reference](https://formbricks.com/docs/api-reference/rest-api) [API v2 Reference (Beta)](https://formbricks.com/docs/api-v2-reference/introduction)

##### XM & Surveys

- [XM & Surveys](https://formbricks.com/docs/xm-and-surveys/overview)

##### Surveys

- General Features

  - [Add Image / Video](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/add-image-or-video-question)
  - [Conditional Logic](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/conditional-logic)
  - [Custom Styling](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/overwrite-styling)
  - [Hidden Fields](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/hidden-fields)
  - [Limit Submissions](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/limit-submissions)
  - [Multi-language Surveys](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/multi-language-surveys)
  - [Partial Submissions](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/partial-submissions)
  - [Recall Data](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/recall)
  - [User Metadata](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/metadata)
  - [Variables](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/variables)
  - [Hide Back Button](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/hide-back-button)
  - [Email Follow-ups](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/email-followups)
  - [Quota Management](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management)
  - [Spam Protection](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/spam-protection)
  - [Tags](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/tags)
- Link Surveys

- Website & App Surveys

- Question Types


##### Platform Features

- Integrations

- User Management

- [Styling Theme](https://formbricks.com/docs/xm-and-surveys/core-features/styling-theme)
- [Email Branding](https://formbricks.com/docs/xm-and-surveys/core-features/email-customization)
- [Test Environment](https://formbricks.com/docs/xm-and-surveys/core-features/test-environment)

##### XM

- Best Practices


On this page

- [Overview](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/spam-protection#overview)
- [Key Generation](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/spam-protection#key-generation)
- [Configuration](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/spam-protection#configuration)
- [Firewall & Network Requirements](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/spam-protection#firewall-&-network-requirements)
- [Steps to Enable Spam Protection](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/spam-protection#steps-to-enable-spam-protection)

General Features

# Spam Protection

Enable spam protection for your surveys using Google reCAPTCHA v3.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/spam-protection\#overview)  Overview

Spam protection feature protects your Formbricks instance from spam and automated abuse by verifying that survey responses are submitted by real users. This guide explains how to enable and configure spam protection in your Formbricks instance using Google reCAPTCHA v3.

Spam protection is a paid feature. It is only available for users on paid plans or if you have [Enterprise\\
Edition](https://formbricks.com/docs/self-hosting/advanced/license).

Spam protection does **not** work for surveys displayed with the Mobile SDKs(React Native, iOS,
or Android SDKs). Enabling this setting in the Survey Editor will break the survey in those environments.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/spam-protection\#key-generation)  Key Generation

To use spam protection, you need to generate a Site Key and Secret Key:

1. Go to the [Google reCAPTCHA admin console](https://www.google.com/recaptcha/admin/create).
2. Register a new site:
   - **Label:** Any name (e.g., “Formbricks Self-Hosted”)
   - **reCAPTCHA type:** Select **reCAPTCHA v3**
   - **Domains:** Add your domain (e.g., `yourdomain.com`). For local development, add `localhost`.
   - Accept the terms and submit.
3. Copy the generated **Site Key** and **Secret Key**.

> **Note:** Keep your Secret Key private and never expose it in client-side code.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/spam-protection\#configuration)  Configuration

Add the following environment variables to your `.env` file or deployment environment:

Copy

```
RECAPTCHA_SITE_KEY=your_site_key_here
RECAPTCHA_SECRET_KEY=your_secret_key_here
```

Restart your application after setting these variables.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/spam-protection\#firewall-&-network-requirements)  Firewall & Network Requirements

If your self-hosted Formbricks instance is behind a firewall or proxy, ensure it can reach the Google reCAPTCHA verification endpoint:

- `https://www.google.com/recaptcha/api/siteverify`

Allow outbound HTTPS (TCP port 443) traffic to this domain.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/spam-protection\#steps-to-enable-spam-protection)  Steps to Enable Spam Protection

You can enable Google reCAPTCHA v3 spam protection for your survey directly from the Formbricks Survey Editor. This helps prevent automated and spammy responses.

1

Open the Survey Editor

Navigate to the Survey Editor.

2

Go to the Settings Tab

Click on the **Settings** tab next to the Questions & Styling tab.

3

Find Spam Protection Option

Scroll down to the **Response Options** and find the **Spam Protection** option.

4

Enable Spam Protection

Toggle the **Spam Protection** option to activate spam protection for this survey.

5

Set the reCAPTCHA Threshold

Adjust the **response threshold**. This is the score threshold for accepting or rejecting responses. A lower threshold (e.g., 0.1) is lenient, while a higher threshold (e.g., 0.9) is strict.![Set reCAPTCHA Threshold](https://mintcdn.com/formbricks/-OXulQKHaX30TsqK/images/xm-and-surveys/surveys/general-features/spam-protection/spam-protection.webp?fit=max&auto=format&n=-OXulQKHaX30TsqK&q=85&s=2b1c708d318c820c891cf4fa13773d81)

6

Save Your Changes

Click **Save** to apply spam protection settings to your survey.

Once enabled, all survey responses will be checked using Google reCAPTCHA v3 before being accepted.For help, join the conversation on [GitHub Discussions](https://github.com/formbricks/formbricks/discussions).

Was this page helpful?

YesNo

[Quota Management](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management) [Tags](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/tags)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.