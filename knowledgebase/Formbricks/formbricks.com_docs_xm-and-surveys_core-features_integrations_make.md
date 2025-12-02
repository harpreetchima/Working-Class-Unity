---
url: "https://formbricks.com/docs/xm-and-surveys/core-features/integrations/make"
title: "Make - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/make#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Integrations

Make

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

- [Step 1: Setup your survey incl. questionId for every question](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/make#step-1:-setup-your-survey-incl-questionid-for-every-question)
- [Step 2: Setup Make.com](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/make#step-2:-setup-make-com)
- [Step 3: Connect Formbricks with Make](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/make#step-3:-connect-formbricks-with-make)
- [Step 4: Select Survey](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/make#step-4:-select-survey)
- [Step 5: Send a test response](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/make#step-5:-send-a-test-response)
- [Step 6: Set up Google Sheet](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/make#step-6:-set-up-google-sheet)

Integrations

# Make

Discover how to seamlessly integrate Formbricks with Make.com. Dive into our comprehensive guide to set up scenarios, connect with a plethora of apps, and send your survey data to more than 1000 platforms.

Make is a powerful tool to send information between Formbricks and thousands of apps. Here’s how to set it up.

Nailed down your survey?? Any changes in the survey cause additional work in the _Scenario_. It makes sense to first settle on the survey you want to run and then get to setting up Make.

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/make\#step-1:-setup-your-survey-incl-questionid-for-every-question)  Step 1: Setup your survey incl. `questionId` for every question

Set up the `questionId`s of your survey questions before publishing.![Update Question ID](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/make/update-question-id.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=03ecf3bedc97dc2804f314faa9702fe1)_Update the Question ID field in every question card under Advanced Settings._

Already published? Duplicate survey You can only update the questionId
before publishing the survey. If already published, simply duplicate it.![Duplicate Survey](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/make/duplicate-survey.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=7de92f1ac09dc0cf7d546d5791fc6553)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/make\#step-2:-setup-make-com)  Step 2: Setup Make.com

Visit [Make.com](https://make.com/) to start a new scenario.![Create New Scenario](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/make/create-new-scenario.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=ae84731aa3217eea556c7707323b9aa1)Search for `Formbricks`:![Search Formbricks](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/make/search-formbricks.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=00c4b2f985d64929b14b96785bd8d2a2)Choose the event to trigger the Scenario:![Select Triggers](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/make/select-trigger.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=fa303e766d305a5f2937c0ca753876bb)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/make\#step-3:-connect-formbricks-with-make)  Step 3: Connect Formbricks with Make

Click “Create a webhook”:![Create Webhook](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/make/create-webhook.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=327009ebea94a57e1e99285d3f9aa27c)Enter the Formbricks API Host and API Key. API Host is by default set to [https://app.formbricks.com](https://app.formbricks.com/) but can be modified for self hosting instances. Learn how to get an API Key from the [API Key tutorial](https://formbricks.com/docs/api-reference/rest-api#how-to-generate-an-api-key).![Enter API Key](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/make/enter-api-key-and-host.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=146cb349538c6bc1419876f0b672e99d)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/make\#step-4:-select-survey)  Step 4: Select Survey

Choose from your created surveys:![Select Survey](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/make/select-survey.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=0d65510cfdef6cdd2ca8cdeae69ae5ba)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/make\#step-5:-send-a-test-response)  Step 5: Send a test response

You need a test response for Make setup.![Submit Test Response](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/make/submit-test-response.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=b611eaa8ae0ef95fa22bdcdc4dd624e2)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/make\#step-6:-set-up-google-sheet)  Step 6: Set up Google Sheet

Decide on the desired action for the data. Here, we’ll send submissions to a Google Sheet:![Add Module](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/make/add-module.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=d5be1f984bdd4bd1364ac55222fbc5b8)Choose “Add a Row” for the action:![Select Action](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/make/select-action.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=05a155c5bd3f2202a23d8c1fe9464c0b)Specify the spreadsheet details and match the Formbricks data:![Select Fields](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/make/select-fields.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=951a7dea8303ea9f30e6ba12e965623c)A new row gets added to the spreadsheet for every response:![Result](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/make/result.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=2ac5b01878981a55430a8dd53d0795db)

Was this page helpful?

YesNo

[Google Sheets](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/google-sheets) [n8n](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/n8n)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.