---
url: "https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/start-at-question"
title: "Start At Specific Question - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/start-at-question#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Features

Start At Specific Question

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

- [How to Use it?](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/start-at-question#how-to-use-it)
- [Sample Link Survey URL with startAt](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/start-at-question#sample-link-survey-url-with-startat)
- [Use Cases](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/start-at-question#use-cases)

Features

# Start At Specific Question

Start a survey at a specific question using the URL to skip the initial questions.

You can start a survey at a specific question from the survey using the URL to skip the initial questions. This is useful when you want to link to a specific question from an external source or want to use the same survey in different parts of the user journey.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/start-at-question\#how-to-use-it)  How to Use it?

1. In the Survey Editor, open the Questions Tab and ensure the survey is set as a **Link Survey**.
2. Find the question you want to start at, click on **Show Advanced Settings**, and copy the **Question ID**.

Each question has a unique Question ID, which is used to identify it in the
survey. You can use different Question IDs for multiple **startAt** points in
the URL.

3. Append `?startAt=question_id` to your survey’s URL, replacing `question_id` with the copied Question ID.
4. Share this modified URL with your users to start the survey at the specified question.

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/start-at-question\#sample-link-survey-url-with-startat)  Sample Link Survey URL with `startAt`

Example Link Survey URL with startAt configured

Copy

```
https://formbricks.com/clny997dj087ho30fdzyf4nkl?startAt=bqd29m94l9k0hnc3azbrexl8
```

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/start-at-question\#use-cases)  Use Cases

- **Link to a specific question from an external source:** Use this feature to direct users to a specific question in your survey from emails, chatbots, or web pages, providing a seamless experience.
- **Use the same survey in different parts of the user journey:** Employ the same survey at various stages of the user journey, starting at different questions to gather comprehensive insights.
- **Create a personalized survey experience:** Tailor the survey experience by starting at a particular question based on the user’s past interactions or preferences, enhancing engagement.

Was this page helpful?

YesNo

[Source Tracking](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/source-tracking) [Verify Email](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/verify-email-before-survey)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.