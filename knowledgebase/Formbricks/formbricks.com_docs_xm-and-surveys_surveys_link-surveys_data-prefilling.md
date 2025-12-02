---
url: "https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling"
title: "Data Prefilling - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Features

Data Prefilling

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

- [Purpose](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling#purpose)
- [Quick Example](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling#quick-example)
- [How it works](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling#how-it-works)
- [Skip prefilled questions](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling#skip-prefilled-questions)
- [Prefilling multiple values](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling#prefilling-multiple-values)
- [Where do I find my question Id?](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling#where-do-i-find-my-question-id)
- [Examples](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling#examples)
- [Rating Question](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling#rating-question)
- [NPS Question](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling#nps-question)
- [Single Select Question (Radio)](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling#single-select-question-radio)
- [Multi Select Question (Checkbox)](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling#multi-select-question-checkbox)
- [Open Text Question](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling#open-text-question)
- [CTA Question](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling#cta-question)
- [Consent Question](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling#consent-question)
- [Picture Selection Question](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling#picture-selection-question)
- [Validation](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling#validation)

Features

# Data Prefilling

URL Data Prefilling for Link Surveys in Formbricks

Data prefilling via the URL allows you to increase completion rate by prefilling data you already have in a different system. Formbricks allows you to prefill multiple questions in a survey and skip prefilled questions.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling\#purpose)  Purpose

Data prefilling via URL comes in handy when you:

- Have data for some of the respondents, but not all
- Have data you want the respondent to confirm or update
- Have data in a different system (e.g. your database) and want to add it to the user profile in Formbricks
- Want to embed a survey in an email and increase completion by prefilling the choice selected in the email

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling\#quick-example)  Quick Example

Example URL

Copy

```
https://app.formbricks.com/s/clin3dxja02k8l80hpwmx4bjy?question_id_1=answer_1&question_id_2=answer_2&skipPrefilled=true
```

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling\#how-it-works)  How it works

1. To prefill survey questions, add query parameters to the survey URL using the format `questionId=answer`.
2. The answer must match the question’s expected type to pass [validation](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling#validation).
3. The answer needs to be [URL encoded](https://www.urlencoder.org/) (if it contains spaces or special characters)

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling\#skip-prefilled-questions)  Skip prefilled questions

You can skip prefilled questions by adding the `skipPrefilled` parameter in the URL. To skip prefilled questions and show the next available question, add `skipPrefilled=true` to the URL. By default, `skipPrefilled` is set to `false`.

Skipping prefilled questions

Copy

```
app.formbricks.com/s/clin3dxj?question_id_1=answer_1&skipPrefilled=true
```

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling\#prefilling-multiple-values)  Prefilling multiple values

Formbricks lets you prefill as many values as you want. Combine multiple values in the URL using `&`, for example: `name=Bernadette&age=18`. The order of query parameters doesn’t matter, so you can move questions around or add new ones without worrying about the parameter order.

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling\#where-do-i-find-my-question-id)  Where do I find my question Id?

You can find the `questionId` in the **Advanced Settings** at the bottom of each question card in the Survey Editor. You can update the `questionId` to any string you like **before you publish a survey.** After you published a survey, you cannot change the id anymore.![The question Id is located at the bottom of each question card in the survey editor.](https://mintcdn.com/formbricks/Y0_rk27eZSQCDXfm/images/xm-and-surveys/surveys/link-surveys/data-prefilling/question-id.webp?fit=max&auto=format&n=Y0_rk27eZSQCDXfm&q=85&s=24c3dd2a1398864b684429e7eee601c0)

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling\#examples)  Examples

Here are a few examples to get you started:

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling\#rating-question)  Rating Question

Translates to 5 stars / points / emojis:

Rating Question

Copy

```
https://app.formbricks.com/s/clin3yxja52k8l80hpwmx4bjy?rating_question_id=5
```

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling\#nps-question)  NPS Question

Translates to an NPS rating of 10:

NPS Questions

Copy

```
https://app.formbricks.com/s/clin3yxja52k8l80hpwmx4bjy?nps_question_id=10
```

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling\#single-select-question-radio)  Single Select Question (Radio)

Chooses the option ‘Very disappointed’ in the single select question. The string has to be identical to the option in your question:

Single-select Question

Copy

```
https://app.formbricks.com/s/clin3yxja52k8l80hpwmx4bjy?single_select_question_id=Very%20disappointed
```

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling\#multi-select-question-checkbox)  Multi Select Question (Checkbox)

Selects three options ‘Sun, Palms and Beach’ in the multi select question. The strings have to be identical to the options in your question:

Multi-select Question

Copy

```
https://app.formbricks.com/s/clin3yxja52k8l80hpwmx4bjy?multi_select_question_id=Sun%2CPalms%2CBeach
```

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling\#open-text-question)  Open Text Question

Adds ‘I love Formbricks’ as the answer to the open text question:

Open Text Question

Copy

```
https://app.formbricks.com/s/clin3yxja52k8l80hpwmx4bjy?openText_question_id=I%20love%20Formbricks
```

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling\#cta-question)  CTA Question

Accepts only ‘dismissed’ as answer option. Due to the risk of domain abuse, this value cannot be set to ‘clicked’ via prefilling:

CTA Question

Copy

```
https://app.formbricks.com/s/clin3yxja52k8l80hpwmx4bjy?cta_question_id=dismissed
```

Due to the risk of domain abuse, this value cannot be set to ‘clicked’ via prefilling.

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling\#consent-question)  Consent Question

Adds ‘accepted’ as the answer to the Consent question. Alternatively, you can set it to ‘dismissed’ to skip the question.

Consent Question

Copy

```
https://app.formbricks.com/s/clin3yxja52k8l80hpwmx4bjy?consent_question_id=accepted
```

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling\#picture-selection-question)  Picture Selection Question

Adds index of the selected image(s) as the answer to the Picture Selection question. The index starts from 1

Picture Selection Question.

Copy

```
https://app.formbricks.com/s/clin3yxja52k8l80hpwmx4bjy?pictureSelection_question_id=1%2C2%2C3
```

All other question types, you currently cannot prefill via the URL.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling\#validation)  Validation

Make sure that the answer in the URL matches the expected type for the questions.The URL validation works as follows:

- For Rating or NPS questions, the response is parsed as a number and verified if it’s accepted by the schema.
- For CTA type questions, the valid values are “clicked” (main CTA) and “dismissed” (skip CTA).
- For Consent type questions, the valid values are “accepted” (consent given) and “dismissed” (consent not given).
- For Picture Selection type questions, the response is parsed as an array of numbers and verified if it’s accepted by the schema.
- All other question types are strings.

If an answer is invalid, the prefilling will be ignored and the question is
presented as if not prefilled.

Was this page helpful?

YesNo

[Quickstart](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/quickstart) [Embed Surveys](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.