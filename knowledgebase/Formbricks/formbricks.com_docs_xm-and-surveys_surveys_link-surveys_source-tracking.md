---
url: "https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/source-tracking"
title: "Source Tracking - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/source-tracking#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Features

Source Tracking

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

- [Purpose](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/source-tracking#purpose)
- [Code Example](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/source-tracking#code-example)
- [How it Works](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/source-tracking#how-it-works)

Features

# Source Tracking

Track the source of your users in an easy & compliant way!

Understand the source a survey respondent comes from when responding to your survey – all while keeping data privacy standards high!Check out this video to learn more about source tracking in link surveys:

Tracking the source with Formbricks - YouTube

[Photo image of Formbricks](https://www.youtube.com/channel/UC5FuBjPjhs6_Pf02wpXfAAQ?embeds_referring_euri=https%3A%2F%2Fformbricks.com%2F)

Formbricks

144 subscribers

[Tracking the source with Formbricks](https://www.youtube.com/watch?v=CytWhuyEMVI)

Formbricks

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

More videos

## More videos

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Watch on www.youtube.com](https://www.youtube.com/watch?v=CytWhuyEMVI)

Watch on

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/source-tracking\#purpose)  Purpose

Source tracking for link surveys is essential when you:

- Want to analyze the origin of your survey respondents.
- Aim to ensure compliance with tracking and data collection regulations.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/source-tracking\#code-example)  Code Example

Example Source as Google

Copy

```
https://formbricks.com/s/clin3dxja02k8l80hpwmx4bjy?source=Google
```

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/source-tracking\#how-it-works)  How it Works

To track the source of users in your link surveys effectively, follow these steps:

1. **Generate Survey URL**: Create a Link Survey and get the sharable link. Append `?source=YourSouce` to the link to reference it with your campaigns and sources.

Example Source as Google

Copy

```
https://formbricks.com/s/clin3dxja02k8l80hpwmx4bjy?source=Google
```

2. **Collect Data**: When users access the survey through these links, the URL parameters will capture the source information from which they were shared.
3. **View Responses**: Use the collected source data to analyze where your survey respondents are coming from. You can hover over the user icon in the responses tab to see the source of the user.![View Source in Response](https://mintcdn.com/formbricks/Y0_rk27eZSQCDXfm/images/xm-and-surveys/surveys/link-surveys/source-tracking/view-response.webp?fit=max&auto=format&n=Y0_rk27eZSQCDXfm&q=85&s=fc9ebcbe274996a9640a0d3da34d35b7)
4. **Analyse Data**: Download all the responses as a CSV/Excel and get access to the source information. This can provide valuable insights into your audience.

Source tracking allows you to make informed decisions based on the origin of your survey participants, helping you tailor your surveys and marketing strategies accordingly.

Was this page helpful?

YesNo

[Single-Use Links](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/single-use-links) [Start At Specific Question](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/start-at-question)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.