---
url: "https://formbricks.com/docs/xm-and-surveys/core-features/integrations/airtable"
title: "Airtable - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/airtable#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Integrations

Airtable

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

- [Formbricks Cloud](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/airtable#formbricks-cloud)
- [Remove Integration with Airtable](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/airtable#remove-integration-with-airtable)

Integrations

# Airtable

A step-by-step guide to integrate Airtable with Formbricks Cloud.

The Airtable integration allows you to automatically send responses to an Airtable of your choice.

If you are on a self-hosted instance, you will need to configure this integration separately. Please follow
the guides [here](https://formbricks.com/docs/self-hosting/configuration/integrations) to configure integrations on your self-hosted
instance.

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/airtable\#formbricks-cloud)  Formbricks Cloud

1. Click on the `Configuration` tab in the left sidebar and then click on the `Integrations` tab and click on the `connect` button under the `Airtable` card.

![Formbricks Integration Tab](https://mintcdn.com/formbricks/W79CbeUfNts3a2Kp/images/xm-and-surveys/core-features/integrations/airtable/integrations-tab.webp?fit=max&auto=format&n=W79CbeUfNts3a2Kp&q=85&s=d29a0af80ab7a934d6933b4e9e665ec7)

1. Now click on the “Connect with Airtable” button to authenticate yourself with Airtable.

![Connect Formbricks with Airtable](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/airtable/connect-with-airtable.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=821c679a3d67fc13e3bfa705436c9116)

1. You will now be taken to a page where you need to add and grant access to the base you want to use for the integration.

![Add and grant access to airtable base](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/airtable/add-base.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=9142581cb50e408b7d80e1eec845a738)

1. Once you add and grant access to your base, you will be taken back to Formbricks Cloud and see the connected status as below:

![Formbricks is now connected with Google](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/airtable/airtable-connected.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=7241f625f8ac84ec8c91af254851922b)

Before the next step, make sure that you have a Formbricks Survey with at least one question and a Airtable
base with atleast one table in the Airtable account you integrated.

1. Now click on the “Link New Table” button to link an Airtable with Formbricks and a modal will open up.

![Link Formbricks with a Airtable](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/airtable/link-survey-with-table.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=89c376a41a3121b0fc174d77268956c3)

1. Select the Base and table you want to link with Formbricks and the Survey. On doing so, you will be asked with what questions’ responses you want to feed in Airtable. Select the questions and click on the “Save” button.

![Select question to link with Airtable](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/airtable/link-with-questions.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=b41b00a418b3bcd24e7b2b6dd198d1bc)

1. On submitting, the modal will close and you will see the linked table in the list of linked tables.

![List of linked tables](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/airtable/list-linked-surveys.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=c92f2f838efdf3dfda6615c13a7b0d5a)Congratulations! You have successfully linked an Airtable with Formbricks. Now whenever a response is submitted for the linked survey, it will be automatically added to the linked Airtable.Still struggling or something not working as expected? [Join us on Github Discussions](https://github.com/formbricks/formbricks/discussions) and we’d be glad to assist you!

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/airtable\#remove-integration-with-airtable)  Remove Integration with Airtable

To remove the integration with Airtable,

1. Visit the Integrations tab in your Formbricks Cloud dashboard.
2. Select “Manage” button in the Airtable card.
3. Click on the “Connected with `<your-email-here`>” just before the “Link new Table” button.
4. It will now ask for a confirmation to remove the integration. Click on the “Delete” button to remove the integration. You can always come back and connect again with the same Airtable Account.

![Delete Airtable Integration with Formbricks](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/airtable/delete-integration.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=40e96ab901aa9764c6017c563f16add3)Still struggling or something not working as expected? [Join our Github Discussions](https://github.com/formbricks/formbricks/discussions) and we’d be glad to assist you!

Was this page helpful?

YesNo

[Activepieces](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/activepieces) [Google Sheets](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/google-sheets)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.