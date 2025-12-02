---
url: "https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/single-use-links"
title: "Single-Use Links - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/single-use-links#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Features

Single-Use Links

[Overview](https://formbricks.com/docs/overview/introduction) [XM & Surveys](https://formbricks.com/docs/xm-and-surveys/overview) [Self Hosting](https://formbricks.com/docs/self-hosting/overview) [Development](https://formbricks.com/docs/development/overview) [API v1 Reference](https://formbricks.com/docs/api-reference/rest-api) [API v2 Reference (Beta)](https://formbricks.com/docs/api-v2-reference/introduction)

##### XM & Surveys

- [XM & Surveys](https://formbricks.com/docs/xm-and-surveys/overview)

##### Surveys

- General Features

- Link Surveys

  - [Quickstart](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/quickstart)
  - Features

    - [Data Prefilling](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling)
    - [Embed Surveys](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys)
    - [Link Settings](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/link-settings)
    - [Personal Links](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/personal-links)
    - [Single-Use Links](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/single-use-links)
    - [Source Tracking](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/source-tracking)
    - [Start At Specific Question](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/start-at-question)
    - [Verify Email](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/verify-email-before-survey)
    - [Market Research Panel](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/market-research-panel)
    - [PIN Protected Surveys](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/pin-protected-surveys)
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

- [Purpose](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/single-use-links#purpose)
- [How to use single-use links](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/single-use-links#how-to-use-single-use-links)
- [Check suId of a submission](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/single-use-links#check-suid-of-a-submission)

Features

# Single-Use Links

Make sure that each respondent only replies once with single use links.

This guide will help you understand how to generate and use single-use links within our application.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/single-use-links\#purpose)  Purpose

- Single-use links (or one-time / disposable links) are URLs that grant access to a survey only once.
- The primary purpose of single-use links is to assure that no respondent submits a survey twice.

Want to create up to 5,000 single-use links? Use our [API endpoint for\\
that.](https://documenter.getpostman.com/view/11026000/2sA3Bq5XEh#c49ef758-a78a-4ef4-a282-262621151f08)

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/single-use-links\#how-to-use-single-use-links)  How to use single-use links

Using single-use links with Formbricks is quite straight-forward:

1. On the Summary page, hit “Share survey” in the top right corner to open the sharing modal.
2. Toggle “Single Use Link” on in the Anonymous Links tab:![Single use link survey settings](https://mintcdn.com/formbricks/WfuMRM7nNFF3gztV/images/xm-and-surveys/surveys/link-surveys/single-use-links/single-use-links.webp?fit=max&auto=format&n=WfuMRM7nNFF3gztV&q=85&s=c0f5c7c09d8ef659a562db92e879614d)
3. If you’d like to use URL encryption, toggle “URL Encryption” on. You can then customize the number of links you’d like to generate and download as CSV.
4. If you’d like to set a custom single-use ID, deactivate the “Enable URL Encryption” toggle. You can then customize the single-use ID in the URL or programmatically.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/single-use-links\#check-suid-of-a-submission)  Check suId of a submission

You can find the suId of each submission in the submission meta data. You’ll find it both in the table as well as in the meta data when hovering over the Avatar:![Single use link survey metadata](https://mintcdn.com/formbricks/WfuMRM7nNFF3gztV/images/xm-and-surveys/surveys/link-surveys/single-use-links/suid-metadata.webp?fit=max&auto=format&n=WfuMRM7nNFF3gztV&q=85&s=f4cde585b06a4abd693c1e27a01aafd9)

Was this page helpful?

YesNo

[Personal Links](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/personal-links) [Source Tracking](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/source-tracking)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.