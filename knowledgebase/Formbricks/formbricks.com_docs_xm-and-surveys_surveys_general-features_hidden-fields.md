---
url: "https://formbricks.com/docs/xm-and-surveys/surveys/general-features/hidden-fields"
title: "Hidden Fields - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/hidden-fields#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

General Features

Hidden Fields

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

- [How to Add Hidden Fields](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/hidden-fields#how-to-add-hidden-fields)
- [Enable Hidden Fields](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/hidden-fields#enable-hidden-fields)
- [Add Hidden Field IDs](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/hidden-fields#add-hidden-field-ids)
- [Set Hidden Field via URL](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/hidden-fields#set-hidden-field-via-url)
- [Set Hidden Fields via SDK](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/hidden-fields#set-hidden-fields-via-sdk)
- [View Hidden Fields in Responses](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/hidden-fields#view-hidden-fields-in-responses)
- [Use Cases](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/hidden-fields#use-cases)

General Features

# Hidden Fields

Add data to a submission without asking the user to type it in. This feature is especially useful when you already have information about a user that you want to use in the analysis of the survey results (e.g. `payment plan` or `email`).

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/hidden-fields\#how-to-add-hidden-fields)  How to Add Hidden Fields

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/hidden-fields\#enable-hidden-fields)  Enable Hidden Fields

1. Edit the survey you want to add hidden fields to & switch to the Questions tab and scroll down to the bottom of the page. You will see a section called **Hidden Fields**. Make sure to enable it by toggling the switch.

![Enable Hidden Fields](https://mintcdn.com/formbricks/yKl9MUpEW6O1uJ5B/images/xm-and-surveys/surveys/general-features/hidden-fields/hidden-fields.webp?fit=max&auto=format&n=yKl9MUpEW6O1uJ5B&q=85&s=b0d54f4f2aa222e39ae5106ace4bda18)

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/hidden-fields\#add-hidden-field-ids)  Add Hidden Field IDs

1. Now click on it to add a new hidden field ID. You can add as many hidden fields as you want.

![Add Hidden Fields](https://mintcdn.com/formbricks/yKl9MUpEW6O1uJ5B/images/xm-and-surveys/surveys/general-features/hidden-fields/input-hidden-fields.webp?fit=max&auto=format&n=yKl9MUpEW6O1uJ5B&q=85&s=68dc73381dfe89a68d327af3e3daff2b)![Filled Hidden Fields](https://mintcdn.com/formbricks/yKl9MUpEW6O1uJ5B/images/xm-and-surveys/surveys/general-features/hidden-fields/filled-hidden-fields.webp?fit=max&auto=format&n=yKl9MUpEW6O1uJ5B&q=85&s=2f304da896064791224e590be38cd80a)

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/hidden-fields\#set-hidden-field-via-url)  Set Hidden Field via URL

Single Hidden Field:

Copy

```
https://formbricks.com/s/clin34bjy?screen=pricing
```

Multiple Hidden Fields:

Copy

```
https://formbricks.com/s/clin34bjy?screen=landing_page&job=Founder
```

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/hidden-fields\#set-hidden-fields-via-sdk)  Set Hidden Fields via SDK

We are reworking how to add Hidden Fields via SDK moving away from binding them to Actions over to Context. Until then, we will **continue to support the current approach for the JS SDK**. However, we don’t support Hidden Fields for the Android and iOS SDKs.

Copy

```
formbricks.track("action_name", {hiddenFields: {myField: "value"}})
```

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/hidden-fields\#view-hidden-fields-in-responses)  View Hidden Fields in Responses

These hidden fields will now be visible in the responses tab just like other fields in the Summary as well as the Response Cards, and you can use them to filter and analyze your responses.![Hidden Field Responses](https://mintcdn.com/formbricks/yKl9MUpEW6O1uJ5B/images/xm-and-surveys/surveys/general-features/hidden-fields/hidden-field-responses.webp?fit=max&auto=format&n=yKl9MUpEW6O1uJ5B&q=85&s=eafce2c10f6585f4ea278b6669d2f88c)

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/hidden-fields\#use-cases)  Use Cases

- **Tracking Source**: You can add a hidden field to track the source of the survey. For a detailed guide on Source Tracking, check out the [Source Tracking](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/source-tracking) guide.
- **User Metadata**: You can add hidden fields to capture user metadata such as user ID, email, or any other user-specific information.
- **Survey Metadata**: You can add hidden fields to capture other metadata, e.g. the screen from which the survey was filled, or any other app specific information.

Was this page helpful?

YesNo

[Custom Styling](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/overwrite-styling) [Limit Submissions](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/limit-submissions)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.