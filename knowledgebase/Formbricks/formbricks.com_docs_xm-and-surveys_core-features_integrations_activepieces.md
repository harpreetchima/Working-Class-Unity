---
url: "https://formbricks.com/docs/xm-and-surveys/core-features/integrations/activepieces"
title: "Activepieces - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/activepieces#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Integrations

Activepieces

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

- [Step 1: Setup your survey incl. questionId for every question](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/activepieces#step-1:-setup-your-survey-incl-questionid-for-every-question)
- [Step 2: Setup Activepieces](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/activepieces#step-2:-setup-activepieces)
- [Step 3: Connect Formbricks with Activepieces](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/activepieces#step-3:-connect-formbricks-with-activepieces)
- [Step 4: Select Survey](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/activepieces#step-4:-select-survey)
- [Step 5: Send a test response](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/activepieces#step-5:-send-a-test-response)
- [Step 6: Set up Google Sheet](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/activepieces#step-6:-set-up-google-sheet)

Integrations

# Activepieces

A step-by-step guide to integrating Formbricks with Activepieces.

Activepieces is a versatile tool to automate workflows between Formbricks and numerous applications. Here’s how to set it up.

Ensure your survey is finalized before setting up Activepieces. Any changes in the survey will require additional adjustments in the workflow.

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/activepieces\#step-1:-setup-your-survey-incl-questionid-for-every-question)  Step 1: Setup your survey incl. `questionId` for every question

Set up the `questionId`s of your survey questions before publishing.![Update Question ID](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/activepieces/update-question-id.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=aa0bea2564d3821e4d747360aefc2b7a)_Update the Question ID field in every question card under Advanced Settings._

Already published? Duplicate survey You can only update the questionId before publishing the survey. If already published, simply duplicate it.![Duplicate Survey](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/xm-and-surveys/core-features/integrations/activepieces/duplicate-survey.webp?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=95ef9012ac1652a1e5bbc8894ebc3297)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/activepieces\#step-2:-setup-activepieces)  Step 2: Setup Activepieces

Visit [Activepieces](https://activepieces.com/) to start a new Flow.![Create New Flow](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/xm-and-surveys/core-features/integrations/activepieces/create-new-flow.webp?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=b7f6ebee8f825add83a3b5e6a4bbd070)Search for `Formbricks` and choose the event to trigger the flow, we will choose `Response Finished` here![Search Formbricks](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/xm-and-surveys/core-features/integrations/activepieces/search-formbricks.webp?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=9bd4e3b24e905f438b034fc258c28557)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/activepieces\#step-3:-connect-formbricks-with-activepieces)  Step 3: Connect Formbricks with Activepieces

Click on `Create connection`:![Create Connection](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/xm-and-surveys/core-features/integrations/activepieces/create-connection.webp?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=0fba6a51fe3105ed3fb3ce480084bb2c)Enter the Formbricks API Host and API Key. API Host is by default set to [https://app.formbricks.com](https://app.formbricks.com/) but can be modified for self-hosting instances. Learn how to get an API Key from the [API Key tutorial](https://formbricks.com/docs/api-reference/rest-api#how-to-generate-an-api-key).![Configure Connection](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/xm-and-surveys/core-features/integrations/activepieces/configure-connection.webp?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=6084cb03f2d39ccafe9a8a3798c624e3)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/activepieces\#step-4:-select-survey)  Step 4: Select Survey

Choose from your created surveys:![Select Survey](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/xm-and-surveys/core-features/integrations/activepieces/select-survey.webp?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=3c8e5a2af8f27e4dd6fb4f9e68fb8cd6)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/activepieces\#step-5:-send-a-test-response)  Step 5: Send a test response

You need a test response for Activepieces setup. Click on Test trigger and submit a test response in the connected Formbricks survey to see the data in Activepieces.![Test Trigger](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/xm-and-surveys/core-features/integrations/activepieces/test-trigger.webp?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=7da624890a91582cdd1b42ab42ea770c)If the test response is successful, you will see the data in Activepieces.![Success Response](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/xm-and-surveys/core-features/integrations/activepieces/success-response.webp?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=c228ca19f8b13618e3cdb4aea15aa524)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/activepieces\#step-6:-set-up-google-sheet)  Step 6: Set up Google Sheet

Decide on the desired action for the data. Here, we’ll send submissions to a Google Sheet. Add Google sheet step to your flow and configure it as follows:
Choose “Add a Row” for the action. Authenticate with Google and select the spreadsheet you want to add the data to.![Select Google sheet](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/xm-and-surveys/core-features/integrations/activepieces/select-gs-sheet.webp?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=985e10076852bbca00eaa07c3c814618)Specify the fields you want to add to the spreadsheet.![Match Data](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/xm-and-surveys/core-features/integrations/activepieces/match-data.webp?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=33dbbf4832cb3a4d41f224edfef48819)A new row gets added to the spreadsheet for every response:![Result](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/xm-and-surveys/core-features/integrations/activepieces/result.webp?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=39d602beacebe7f26846621e763cf290)

Was this page helpful?

YesNo

[Third-party Integrations](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/overview) [Airtable](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/airtable)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.