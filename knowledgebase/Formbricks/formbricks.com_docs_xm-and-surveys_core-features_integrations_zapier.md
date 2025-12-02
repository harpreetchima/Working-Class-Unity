---
url: "https://formbricks.com/docs/xm-and-surveys/core-features/integrations/zapier"
title: "Zapier - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/zapier#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Integrations

Zapier

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

  - [Third-party Integrations](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/overview)
  - [Activepieces](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/activepieces)
  - [Airtable](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/airtable)
  - [Google Sheets](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/google-sheets)
  - [Make](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/make)
  - [n8n](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/n8n)
  - [Notion](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/notion)
  - [Slack](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/slack)
  - [Wordpress](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/wordpress)
  - [Zapier](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/zapier)
  - [Webhooks](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/webhooks)
- User Management

- [Styling Theme](https://formbricks.com/docs/xm-and-surveys/core-features/styling-theme)
- [Email Branding](https://formbricks.com/docs/xm-and-surveys/core-features/email-customization)
- [Test Environment](https://formbricks.com/docs/xm-and-surveys/core-features/test-environment)

##### XM

- Best Practices


On this page

- [Step 1: Setup your survey incl. questionId for every question](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/zapier#step-1:-setup-your-survey-incl-questionid-for-every-question)
- [Step 2: Send a test response](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/zapier#step-2:-send-a-test-response)
- [Step 3: Setup your Zap](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/zapier#step-3:-setup-your-zap)
- [Step 4: Connect Formbricks with Zapier](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/zapier#step-4:-connect-formbricks-with-zapier)
- [Step 5: Select Survey](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/zapier#step-5:-select-survey)
- [Step 6: Test your trigger](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/zapier#step-6:-test-your-trigger)
- [Step 7: Set up your Zap](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/zapier#step-7:-set-up-your-zap)

Integrations

# Zapier

Master the integration of Formbricks with Zapier using our detailed guide. Seamlessly connect your surveys to 5000+ apps, automate data transfers, and enhance feedback management. Start optimizing your workflow today.

Nail down your survey first? Any changes in the survey cause additional work in the Zap. It makes sense to first settle on the survey you want to run and then get to setting up Zapier.

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/zapier\#step-1:-setup-your-survey-incl-questionid-for-every-question)  Step 1: Setup your survey incl. `questionId` for every question

When setting up the Zap your life will be easier when you change the `questionId`s of your survey questions. You can only do so **before** you publish your survey.![Update Question ID](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/zapier/update-question-id.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=68bc0d3c727d9fa416c913af75f94855)_In every question card in the Advanced Settings you find the Question ID field. Update it so that you’ll recognize the response tied to this question._

Already published? Duplicate survey You can only update the questionId
when the survey was not yet published. Already published it? Just **duplicate**
**it** to update the questionIds.![Duplicate Survey](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/zapier/duplicate-survey.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=af75752abb26de5dd7fc2ff050837826)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/zapier\#step-2:-send-a-test-response)  Step 2: Send a test response

In order to set up Zapier you’ll need a test response. This allows you to select the individual values of each response in your Zap.![Submit Test Response](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/zapier/submit-test-response.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=43c479a4de74d5a41661c9c6f1b01da4)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/zapier\#step-3:-setup-your-zap)  Step 3: Setup your Zap

Go to [zapier.com](https://zapier.com/) and create a new Zap. Search for “Formbricks” to get started:![Add New Zap](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/zapier/add-new-zap.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=a1148884214bed9595363d6a34c103ed)Then, choose the event you want to trigger the Zap on:![Choose Event](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/zapier/choose-event.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=072f01c18206a6ba74d1300976b9f0cb)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/zapier\#step-4:-connect-formbricks-with-zapier)  Step 4: Connect Formbricks with Zapier

Now, you have to connect Zapier with Formbricks via an API Key:![Connect with Formbricks - 1](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/zapier/connect-with-formbricks-1.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=755f50c037ed68969f87f6299d9f38da)![Connect with Formbricks - 2](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/zapier/connect-with-formbricks-2.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=678f9e97b3874d8d7482534e20ad9804)Now you need an API key. Please refer to the [API Key Setup](https://formbricks.com/docs/api-reference/rest-api#how-to-generate-an-api-key) page to learn how to create one.Once you copied it in the newly opened Zapier window, you will be connected:![Successful Connection](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/zapier/success-connected.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=302f3f4980c59e36236ac1372996e0f9)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/zapier\#step-5:-select-survey)  Step 5: Select Survey

Next, you can choose from all the surveys you have created in this environment:![Select Survey](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/zapier/select-survey.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=5102cd9e3ced6d4cc16aae127d9c2df9)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/zapier\#step-6:-test-your-trigger)  Step 6: Test your trigger

Once you hit “Test” you will see the three most recent submissions for this survey. If you don’t have any submissions in the survey, submit one to continue setting up your Zap:![Test Submission](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/zapier/test-submission.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=7cd89d32433c81cad67a0406b9d7588a)_Now you’re happy that you updated the questionId’s_

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/zapier\#step-7:-set-up-your-zap)  Step 7: Set up your Zap

Now you have all the data you need at hand. The next steps depend on what you want to do with it. In this tutorial, we will send submissions to a Slack channel:![Slack Channel Message](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/zapier/slack-channel-msg.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=07bf830dc5450158806a8b1e24d7f8af)In the action itself we can determine the data and layout of the message. Here, we only choose the submission data. You can also refer to the meta data of the submission and the [attributes](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/user-identification) of the person who submitted the survey.![Slack Message](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/zapier/slack-message.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=43add9bbe60bb373549f443c0f27baab)We now receive a notifcation in our Slack channel whenever a Churn survey is completed:![Zapier Message](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/zapier/zapier-message.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=e566dd47a78344c5c1d669f32bb59f50)

Was this page helpful?

YesNo

[Wordpress](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/wordpress) [Webhooks](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/webhooks)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.