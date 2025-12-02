---
url: "https://formbricks.com/docs/xm-and-surveys/surveys/general-features/recall"
title: "Recall Data - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/recall#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

General Features

Recall Data

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

- [Recall Sources](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/recall#recall-sources)
- [Recalling from a previous question](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/recall#recalling-from-a-previous-question)
- [Pre-requisite](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/recall#pre-requisite)
- [Step 1: Recall Data](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/recall#step-1:-recall-data)
- [Step 2: Set a Fallback](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/recall#step-2:-set-a-fallback)
- [Recalling from the URL](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/recall#recalling-from-the-url)
- [Recalling from a Variable](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/recall#recalling-from-a-variable)
- [Live Demo](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/recall#live-demo)
- [Conclusion](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/recall#conclusion)

General Features

# Recall Data

Personalize your surveys by dynamically inserting data from URL parameters or previous answers into questions and descriptions. The Recall Data feature helps create engaging, adaptive survey experiences tailored to each respondent.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/recall\#recall-sources)  Recall Sources

You can recall data from the following sources:

- From a previous question
- From a [Hidden Field](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/hidden-fields)
- From a [Variable](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/variables)

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/recall\#recalling-from-a-previous-question)  Recalling from a previous question

The recall functionality is disabled on the first question of the survey since
there’s no preceding question to recall data from.

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/recall\#pre-requisite)  **Pre-requisite**

Ensure the answer you wish to recall precedes the question in which it will be recalled. Here’s an example of setting up the first question:![Survey setup example with link survey template](https://mintcdn.com/formbricks/-OXulQKHaX30TsqK/images/xm-and-surveys/surveys/general-features/recall/step-three.webp?fit=max&auto=format&n=-OXulQKHaX30TsqK&q=85&s=0582706859c23cbd667b37e049bf3d8c)

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/recall\#step-1:-recall-data)  **Step 1: Recall Data**

Type **`@`** in the question or description field where you want to insert a recall. This triggers a dropdown menu listing all preceding questions. Select the question you want to recall data from.![Dropdown menu for recalling data in survey](https://mintcdn.com/formbricks/-OXulQKHaX30TsqK/images/xm-and-surveys/surveys/general-features/recall/step-two.webp?fit=max&auto=format&n=-OXulQKHaX30TsqK&q=85&s=90084a7dca035bbc42e9b933bdd7cb14)

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/recall\#step-2:-set-a-fallback)  **Step 2: Set a Fallback**

To ensure the survey remains coherent when a response is missing (or the question is optional), you should set a fallback option.![Setting fallback option in survey question](https://mintcdn.com/formbricks/-OXulQKHaX30TsqK/images/xm-and-surveys/surveys/general-features/recall/step-one.webp?fit=max&auto=format&n=-OXulQKHaX30TsqK&q=85&s=12dc6d8726b0356def069db6dc27cb62)

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/recall\#recalling-from-the-url)  Recalling from the URL

1. Create a hidden field, [here is how →](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/hidden-fields)
2. Use the `@` symbol in a question or description to recall the value of the hidden field
3. Set a fallback in case the hidden field is not being filled by a URL parameter
4. Use [Data Prefilling](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling) to set the hidden field value when the survey is accessed

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/recall\#recalling-from-a-variable)  Recalling from a Variable

1. Create a variable, [here is how →](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/variables)
2. Use the `@` symbol in a question or description to recall the value of the variable
3. Set a fallback in case the variable is not being filled by a URL parameter

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/recall\#live-demo)  Live Demo

Recall data \| Formbricks \| Formbricks

![Logo](https://app.formbricks.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpowered-by-formbricks.8d044b79.svg&w=1920&q=75)

![Company Logo](https://app.formbricks.com/_next/image?url=https%3A%2F%2Fapp.formbricks.com%2Fstorage%2Fclgwcwp4z000lpf0hur7pzbuv%2Fpublic%2Fdark-larger--fid--9c67b171-f5d3-4fcc-a6d2-d99ca95a707f.png&w=640&q=75)

What's your name?

Next

[Powered by **Formbricks**](https://formbricks.com/?utm_source=survey_branding)

[Imprint](https://formbricks.com/imprint) \| [Privacy Policy](https://formbricks.com/privacy-policy) \| [Report Survey](https://app.formbricks.com/s/clxbivtla014iye2vfrn436xd?surveyUrl=https://app.formbricks.com/s/cm393eiiq0001kxphzc6lbbku)

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/recall\#conclusion)  **Conclusion**

Recall Data in Formbricks surveys allows for a conversational and customized survey experience that enhances engagement and improves the quality of feedback. By integrating previous responses into new questions, you create a more interactive and relevant environment for respondents.

Was this page helpful?

YesNo

[Partial Submissions](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/partial-submissions) [User Metadata](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/metadata)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.