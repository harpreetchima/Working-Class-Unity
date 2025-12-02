---
url: "https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/quickstart"
title: "Quickstart - Web & App Surveys - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/quickstart#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Website & App Surveys

Quickstart - Web & App Surveys

[Overview](https://formbricks.com/docs/overview/introduction) [XM & Surveys](https://formbricks.com/docs/xm-and-surveys/overview) [Self Hosting](https://formbricks.com/docs/self-hosting/overview) [Development](https://formbricks.com/docs/development/overview) [API v1 Reference](https://formbricks.com/docs/api-reference/rest-api) [API v2 Reference (Beta)](https://formbricks.com/docs/api-v2-reference/introduction)

##### XM & Surveys

- [XM & Surveys](https://formbricks.com/docs/xm-and-surveys/overview)

##### Surveys

- General Features

- Link Surveys

- Website & App Surveys

  - [Quickstart](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/quickstart)
  - [Framework Guides](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/framework-guides)
  - [Google Tag Manager](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/google-tag-manager)
  - Features
- Question Types


##### Platform Features

- Integrations

- User Management

- [Styling Theme](https://formbricks.com/docs/xm-and-surveys/core-features/styling-theme)
- [Email Branding](https://formbricks.com/docs/xm-and-surveys/core-features/email-customization)
- [Test Environment](https://formbricks.com/docs/xm-and-surveys/core-features/test-environment)

##### XM

- Best Practices


Website & App Surveys

# Quickstart - Web & App Surveys

App surveys deliver 6–10x higher conversion rates compared to email surveys. If you are new to Formbricks, follow the steps in this guide to launch a survey in your web or mobile app (React Native) within 10–15 minutes.

1

Create a Formbricks cloud account

While you can [self-host](https://formbricks.com/docs/self-hosting) Formbricks, the fastest and easiest way to get started is with the free Cloud plan. Simply [sign up](https://app.formbricks.com/auth/signup) here, follow the onboarding steps, and choose the “Formbricks Surveys” option.![what are you here for](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738113228/image_d11uiy.png)

2

Choose 'In-product surveys'

You can create In-product and Link Surveys with both options, but the onboarding will prompt you to connect your app/website to Formbricks.![three options](https://mintcdn.com/formbricks/Y0_rk27eZSQCDXfm/images/xm-and-surveys/surveys/website-app-surveys/quickstart/survey-type.webp?fit=max&auto=format&n=Y0_rk27eZSQCDXfm&q=85&s=b7bf803a17a3d28af4cb48de225fead3)

3

Connect your App/Website

Follow the instructions to connect your app or website: ![connect product to formbricks](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738114328/image_tv0jmj.png)

4

Confirm setup

As soon as Formbricks receives the first data point, you will see a message in the onboarding:![congrats](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738114793/image_lij7kw.png)Onboarding is complete! Now let’s create our first survey as you should see templates to choose from after clicking on **Next**:![first survey](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738115025/image_yyuuzn.jpg)

5

Create your first survey

To be able to see a survey in your app, you need to create one. We’ll choose one of the templates and head over to the survey settings:Pick the Survey Type as **Website & App Survey**.

6

Create trigger to show survey

Scroll to **Survey Trigger**, click **\+ Add Action**, and select **Page View**. This ensures the survey appears when the Formbricks Widget detects any page load.![page view action](https://mintcdn.com/formbricks/Y0_rk27eZSQCDXfm/images/xm-and-surveys/surveys/website-app-surveys/quickstart/page-view-action.webp?fit=max&auto=format&n=Y0_rk27eZSQCDXfm&q=85&s=1d9f18a81670c8f27827a0611fd63626)

7

Set Recontact Options right

A common hiccup is users seeing one survey but it doesn’t appear again. This is due to the default settings we chose to avoid survey fatigue. While setting up, we recommend the following Recontact Options:![recontact options](https://mintcdn.com/formbricks/Y0_rk27eZSQCDXfm/images/xm-and-surveys/surveys/website-app-surveys/quickstart/recontact-options.webp?fit=max&auto=format&n=Y0_rk27eZSQCDXfm&q=85&s=17213104d6bb2b537a8253b717a82e48)

Please change this setting after testing your survey to avoid user fatigue.

8

Publish the survey

Publish the survey to make it available for the SDK to pull into the website or app where you want to show it.

9

Enable debug mode in website / app

For better scalability, we cache the request the SDK makes to the server. This allows you to use Formbricks on websites with millions of visitors without high hosting cost. On the downside, there can be **up to a 5 minute delay** until the SDK pulls the newest surveys from the server.

**Important**: Any changes to surveys, action classes, project settings, or environment configuration will take up to 5 minutes to reflect in debug mode in your app/website due to server-side caching. This includes survey modifications, new triggers, styling changes, and other updates.

To avoid the delay during development and testing, please switch on the [Debug Mode.](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/framework-guides#activate-debug-mode)

Need help? Join us in [**GitHub Discussions**](https://github.com/formbricks/formbricks/discussions), and we’ll be happy to assist!

Was this page helpful?

YesNo

[PIN Protected Surveys](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/pin-protected-surveys) [Framework Guides](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/framework-guides)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.

![what are you here for](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738113228/image_d11uiy.png)

![connect product to formbricks](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738114328/image_tv0jmj.png)

![congrats](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738114793/image_lij7kw.png)

![first survey](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738115025/image_yyuuzn.jpg)