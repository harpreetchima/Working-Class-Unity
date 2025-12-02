---
url: "https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feature-chaser"
title: "Feature Chaser - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feature-chaser#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Best Practices

Feature Chaser

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

- [Styling Theme](https://formbricks.com/docs/xm-and-surveys/core-features/styling-theme)
- [Email Branding](https://formbricks.com/docs/xm-and-surveys/core-features/email-customization)
- [Test Environment](https://formbricks.com/docs/xm-and-surveys/core-features/test-environment)

##### XM

- Best Practices

  - [Contact form](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/contact-form)
  - [Headless Surveys](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys)
  - [Docs Feedback](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/docs-feedback)
  - [Feature Chaser](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feature-chaser)
  - [Feedback Box](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feedback-box)
  - [Improve Email Content](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/improve-email-content)
  - [App Interview Prompt](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/interview-prompt)
  - [Learn from Churn](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/cancel-subscription)
  - [Product-Market Fit](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/pmf-survey)
  - [Quiz Time](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/quiz-time)
  - [Improve Trial Conversion](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/improve-trial-cr)

On this page

- [Purpose](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feature-chaser#purpose)
- [Formbricks Approach](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feature-chaser#formbricks-approach)
- [Overview](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feature-chaser#overview)
- [1\. Create new Feature Chaser](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feature-chaser#1-create-new-feature-chaser)
- [2\. Update questions](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feature-chaser#2-update-questions)
- [3\. Set up a trigger for the Feature Chaser survey:](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feature-chaser#3-set-up-a-trigger-for-the-feature-chaser-survey:)
- [4\. Select Action in the “When to ask” card](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feature-chaser#4-select-action-in-the-%E2%80%9Cwhen-to-ask%E2%80%9D-card)
- [5\. Last step: Set Recontact Options correctly](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feature-chaser#5-last-step:-set-recontact-options-correctly)
- [7\. Congrats! You’re ready to publish your survey 💃](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feature-chaser#7-congrats-you%E2%80%99re-ready-to-publish-your-survey-%F0%9F%92%83)

Best Practices

# Feature Chaser

Learn how to harness the power of Formbricks to gather targeted user feedback on specific features. Dive deep into creating, triggering, and publishing the Feature Chaser survey to enhance your product with actionable insights for specific users.

Following up on specific features only makes sense with very targeted surveys. Formbricks is built for that.

## [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feature-chaser\#purpose)  Purpose

Product analytics never tell you why a feature is used - and why not. Following up on specific features with highly relevant questions is a great way to gather feedback and improve your product.

## [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feature-chaser\#formbricks-approach)  Formbricks Approach

- Trigger survey at exactly the right point in the user journey
- Never ask twice, keep your data clean
- Prevent survey fatigue with global waiting period

## [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feature-chaser\#overview)  Overview

To run the Feature Chaser survey in your app you want to proceed as follows:

- Create new Feature Chaser survey at [app.formbricks.com](https://app.formbricks.com/)
- Setup a user action to display survey at the right point in time

Formbricks Widget running? We assume that you have already installed the Formbricks Widget in your web app. It’s required to display messages and surveys in your app. If not, please follow the [Quick Start Guide (takes 15mins max.)](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/quickstart)

### [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feature-chaser\#1-create-new-feature-chaser)  1\. Create new Feature Chaser

If you don’t have an account yet, create one at [app.formbricks.com](https://app.formbricks.com/auth/signup)Click on “Create Survey” and choose the template [Feature Chaser](https://formbricks.com/survey-templates/feature-chaser):![Create survey by template](https://mintcdn.com/formbricks/DApr5ZMISC_jbIxa/images/xm-and-surveys/xm/best-practices/feature-chaser/create-survey.webp?fit=max&auto=format&n=DApr5ZMISC_jbIxa&q=85&s=7c69c84c1122c65b780dfb5ee2ece609)

### [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feature-chaser\#2-update-questions)  2\. Update questions

The questions you want to ask are dependent on your feature and can be very specific. In the template, we suggest a high-level check on how easy it was for the user to achieve their goal. We also add an opportunity to provide context:![Change text content](https://mintcdn.com/formbricks/DApr5ZMISC_jbIxa/images/xm-and-surveys/xm/best-practices/feature-chaser/change-text.webp?fit=max&auto=format&n=DApr5ZMISC_jbIxa&q=85&s=f2ec6cb3ba082f9f6d6d6a8b172abf40)Save, and move over to where the magic happens: The “Audience” tab.

### [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feature-chaser\#3-set-up-a-trigger-for-the-feature-chaser-survey:)  3\. Set up a trigger for the Feature Chaser survey:

Before setting the right trigger, you need to identify a user action in your app which signals, that they have just used the feature you want to understand better. In most cases, it is clicking a specific button in your product.You can create [Code Actions](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions#setting-up-code-actions) and [No Code Actions](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions#setting-up-no-code-actions) to follow users through your app. In this example, we will create a No Code Action.There are two ways to track a button:

1. **Trigger by Inner Text:** You might have a button with a unique text at the end of your feature e.g. “Export Report”. You can setup a user Action with the according `Inner Text` to trigger the survey, like so:

![Set the trigger by inner Text](https://mintcdn.com/formbricks/DApr5ZMISC_jbIxa/images/xm-and-surveys/xm/best-practices/feature-chaser/action-innertext.webp?fit=max&auto=format&n=DApr5ZMISC_jbIxa&q=85&s=e9499a1a07c5012d07540c46a1e4a442)

1. **Trigger by CSS Selector:** In case you have more than one button saying “Export Report” in your app and only want to display the survey when one of them is clicked, you want to be more specific. The best way to do that is to give this button the HTML `id=“export-report-featurename”` and set your user action up like so:

![Set the trigger by CSS Selector](https://mintcdn.com/formbricks/DApr5ZMISC_jbIxa/images/xm-and-surveys/xm/best-practices/feature-chaser/action-css.webp?fit=max&auto=format&n=DApr5ZMISC_jbIxa&q=85&s=b2b9a0226287e42db13d957b06e03872)Please follow our [Actions manual](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions) for an in-depth description of how Actions work.

### [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feature-chaser\#4-select-action-in-the-%E2%80%9Cwhen-to-ask%E2%80%9D-card)  4\. Select Action in the “When to ask” card

![Select PMF trigger button action](https://mintcdn.com/formbricks/DApr5ZMISC_jbIxa/images/xm-and-surveys/xm/best-practices/feature-chaser/select-action.webp?fit=max&auto=format&n=DApr5ZMISC_jbIxa&q=85&s=edd661426a914b08cc82806385bccd57)

### [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feature-chaser\#5-last-step:-set-recontact-options-correctly)  5\. Last step: Set Recontact Options correctly

Lastly, scroll down to “Recontact Options”. Here you have full freedom to decide who you want to ask. Generally, you only want to ask every user once and prevent survey fatigue. It’s up to you to decide if you want to ask again, when the user did not yet reply:![Set recontact options](https://mintcdn.com/formbricks/DApr5ZMISC_jbIxa/images/xm-and-surveys/xm/best-practices/feature-chaser/recontact-options.webp?fit=max&auto=format&n=DApr5ZMISC_jbIxa&q=85&s=a2a3b7deff1cc37c501fd11fec09dc47)

### [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feature-chaser\#7-congrats-you%E2%80%99re-ready-to-publish-your-survey-%F0%9F%92%83)  7\. Congrats! You’re ready to publish your survey 💃

![Publish survey](https://mintcdn.com/formbricks/DApr5ZMISC_jbIxa/images/xm-and-surveys/xm/best-practices/feature-chaser/publish.webp?fit=max&auto=format&n=DApr5ZMISC_jbIxa&q=85&s=65724c4562c9fc5b5ae1bc4cf59c949c)

Formbricks Widget running? You need to have the Formbricks Widget installed
to display the Feature Chaser in your app. Please follow [this tutorial (Step\\
4 onwards)](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/quickstart) to install the widget.

Was this page helpful?

YesNo

[Docs Feedback](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/docs-feedback) [Feedback Box](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feedback-box)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.