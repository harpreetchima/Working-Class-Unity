---
url: "https://formbricks.com/docs/xm-and-surveys/core-features/integrations/n8n"
title: "n8n - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/n8n#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Integrations

n8n

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

- [Step 1: Setup your survey incl. questionId for every question](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/n8n#step-1:-setup-your-survey-incl-questionid-for-every-question)
- [Step 2: Setup your n8n workflow](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/n8n#step-2:-setup-your-n8n-workflow)
- [Step 3: Connect Formbricks with n8n](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/n8n#step-3:-connect-formbricks-with-n8n)
- [Step 4: Select Event](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/n8n#step-4:-select-event)
- [Step 5: Select Survey](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/n8n#step-5:-select-survey)
- [Step 6: Test your trigger](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/n8n#step-6:-test-your-trigger)
- [Step 7: Add discord to your workflow](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/n8n#step-7:-add-discord-to-your-workflow)

Integrations

# n8n

Integrate Formbricks with n8n for a streamlined workflow experience.

The Formbricks n8n node is currently only available in the n8n self-hosted
version as a community node. To install it go to “Settings” -> “Community
Nodes” and install @formbricks/n8n-nodes-formbricks.

n8n allows you to build flexible workflows focused on deep data integration. And with sharable templates and a user-friendly UI, the less technical people on your team can collaborate on them too. Unlike other tools, complexity is not a limitation. So you can build whatever you want — without stressing over budget. Hook up Formbricks with n8n and you can send your data to 350+ other apps. Here is how to do it.

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/n8n\#step-1:-setup-your-survey-incl-questionid-for-every-question)  Step 1: Setup your survey incl. `questionId` for every question

Nailed down your survey? Any changes in the survey cause additional work in
the n8n node. It makes sense to first settle on the survey you want to run and
then get to setting up n8n.

When setting up the node your life will be easier when you change the `questionId`s of your survey questions. You can only do so **before** you publish your survey.![Update Question ID](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/n8n/update-question-id.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=aef81ffe55406253128ffdc41d667b48)_In every question card in the Advanced Settings you find the Question ID field. Update it so that you’ll recognize the response tied to this question._

Already published? Duplicate survey You can only update the questionId
when the survey was not yet published. Already published it? Just **duplicate**
**it** to update the questionIds.![Duplicate Survey](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/n8n/duplicate-survey.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=5ecddbfae6f713e2a2be16df32cba17f)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/n8n\#step-2:-setup-your-n8n-workflow)  Step 2: Setup your n8n workflow

Go to [n8n.io](https://n8n.io/) and create a new workflow. Search for “Formbricks” to get started:![Add Formbricks Trigger](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/n8n/add-formbricks-trigger.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=4b53fcf705f002cef1bb9279e959b24d)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/n8n\#step-3:-connect-formbricks-with-n8n)  Step 3: Connect Formbricks with n8n

Now, you have to connect n8n with Formbricks via an API Key:![Create new credential button](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/n8n/create-new-credential-btn.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=2c1d1987d23ec0aaf34ff3d8fa7a9e2f)Click on Create New Credentail button to add your host and API Key![Add host and api key](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/n8n/add-api-key.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=16b7cde82ee343b9e4926b9342ac3f7c)Now you need an API key. Please refer to the [API Key Setup](https://formbricks.com/docs/api-reference/rest-api#how-to-generate-an-api-key) page to learn how to create one.Once you copied it in the API Key field, hit Save button to test the connection and save the credentials.![Successful Connection](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/n8n/success-connection.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=ec4843cc189adb46318febd153804ee6)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/n8n\#step-4:-select-event)  Step 4: Select Event

Next, you can choose the event you want to trigger the node on. You can select multiple events:![Select Event](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/n8n/select-event.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=de6ea8723209ba12b0494a23bac84e51)Here, we are adding `Response Finished` as an event, which will trigger when the survey has been filled out.

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/n8n\#step-5:-select-survey)  Step 5: Select Survey

Next, you can choose from all the surveys you have created in this environment. You can select multiple surveys:![Select Survey](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/n8n/select-survey.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=6923ea8fe567a54b5ebde5a65de42107)Here, we are selecting two surveys.![Selected Surveys](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/n8n/selected-surveys.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=e4f3c9392fddf89d99884f8fae5bd60e)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/n8n\#step-6:-test-your-trigger)  Step 6: Test your trigger

In order to set up n8n you’ll need a test response in the selected survey. This allows you to select the individual values of each response in your workflow.![Submit Test Response](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/n8n/submit-test-response.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=47263ee0c7fe81fa97a71ffabb43bc80)Next, click on Listen for event button.![Listen for event](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/n8n/listen-for-event.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=9790a277b145f4196dc42abb7ba28cc1)Then, go to the survey which you selected. Fill it out, and wait for the particular event to trigger (in this case it’s `Response Finished`). Once the event is triggered you will see the response that you filled out in the survey.![Test Response Success](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/n8n/test-response-success.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=03bb422c493d1407ce31d28c3ecf964b)Now you have all the data you need at hand. The next steps depend on what you want to do with it. In this tutorial, we will send submissions to a discord channel:

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/n8n\#step-7:-add-discord-to-your-workflow)  Step 7: Add discord to your workflow

Click on the plus and search `Discord`.![Add Discord](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/n8n/add-discord.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=567248b904c37a726da571cc94c6bc24)Fill in the `Webhook URL` and the `Content` that you want to receive in the respective discord channel. Next, click on `Execute Node` button to test the node.![Fill Discord Details](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/n8n/fill-discord-details.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=b2051a9482cfd9138b65d2642b78a98f)Once the execution is successful, you’ll receive the content in the discord channel.![Discord Response](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/n8n/discord-response.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=5b8eae673b13f2387d2e3a125b004d1c)

Was this page helpful?

YesNo

[Make](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/make) [Notion](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/notion)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.