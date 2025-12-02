---
url: "https://formbricks.com/docs/xm-and-surveys/core-features/integrations/notion"
title: "Notion - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/notion#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Integrations

Notion

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

- [Formbricks Cloud](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/notion#formbricks-cloud)
- [Setup in self-hosted Formbricks](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/notion#setup-in-self-hosted-formbricks)
- [Remove Integration with Notion Account](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/notion#remove-integration-with-notion-account)

Integrations

# Notion

The notion integration allows you to automatically send responses to a Notion database of your choice.

If you are on a self-hosted instance, you will need to configure this integration separately. Please follow
the guides [here](https://formbricks.com/docs/self-hosting/configuration/integrations) to configure integrations on your self-hosted
instance.

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/notion\#formbricks-cloud)  Formbricks Cloud

1. Click on the `Configuration` tab in the left sidebar and then click on the `Integrations` tab and click on the `connect` button under the `Notion` card.

![Formbricks Integrations Tab](https://mintcdn.com/formbricks/Q9LOxgpWHulOxfHK/images/xm-and-surveys/core-features/integrations/notion/integrations-tab.webp?fit=max&auto=format&n=Q9LOxgpWHulOxfHK&q=85&s=aabbd5dcf9020dc7af97088ac06179d0)

1. Now click on the “Connect with Notion” button to authenticate yourself with Notion.

![Connect Formbricks with your Notion account](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/notion/connect-with-notion.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=6a4edd9694d3941a51f3289b29dc6887)

1. You will now be taken to the Notion OAuth page where you can select the Notion account you want to use for the integration
2. Once you have selected the account and databases and completed the authentication and authorization process, you will be taken back to Formbricks Cloud and see the connected status as below:

![Formbricks is now connected with Notion](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/notion/notion-connected.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=951a18a0a6a97257b17bc3c041198d87)

Before the next step, make sure that you have a Formbricks Survey with at least one question and a Notion
database in the Notion account you integrated.

1. Now click on the “Link New Database” button to link a Notion database with Formbricks and a modal will open up.

![Link Formbricks with a Notion database](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/notion/link-survey-with-database.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=19cced7d1d3f5cef9d2e1248013fd024)

1. Select the Notion database you want to link with Formbricks and the Survey. On doing so, you will be asked to map formbricks’ survey questions with selected databases’ column. Complete the mapping and click on the “Link Database” button.

![Question to notion database column mapping](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/notion/link-with-databases.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=56205fa316707f7fa7355cc45680f320)

1. On submitting, the modal will close and you will see the linked Notion database in the list of linked Notion databases.

![List of linked notion databases](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/notion/list-linked-databases.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=9106829aecd0129e0176ae5ce1d92cc2)Congratulations! You have successfully linked a Notion database with Formbricks. Now whenever a response is submitted for the linked survey, it will be automatically added to the linked Notion database.

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/notion\#setup-in-self-hosted-formbricks)  Setup in self-hosted Formbricks

Enabling the Notion Integration in a self-hosted environment requires a setup using Notion account and changing the environment variables of your Formbricks instance.

1. Sign up for a [Notion](https://www.notion.so/) account, if you don’t have one already.
2. Go to the [my integrations](https://www.notion.so/my-integrations) page and click on **New integration**.
3. Fill up the basic information like **Name**, **Logo** and click on **Submit**.
4. Now, click on **Distribution** tab on the sidebar. A text will appear which will ask you to make the integration public. Click on that toggle button. A form will appear below the text.
5. Now provide it the details such as requested. Under **Redirect URIs** field:   - If you are running formbricks locally, you can enter `http://localhost:3000/api/v1/integrations/notion/callback`.
   - Or, you can enter `https://<your-public-facing-url>/api/v1/integrations/notion/callback`
6. Once you’ve filled all the necessary details, click on **Submit**.
7. A screen will appear which will have **Client ID** and **Client secret**. Copy them and set them as the environment variables in your Formbricks instance as:   - `NOTION_OAUTH_CLIENT_ID` \- OAuth Client ID
   - `NOTION_OAUTH_CLIENT_SECRET` \- OAuth Client Secret

Voila! You have successfully enabled the Notion integration in your self-hosted Formbricks instance. Now you can follow the steps mentioned in the [Formbricks Cloud](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/notion#formbricks-cloud) section to link a Notion database with Formbricks.

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/notion\#remove-integration-with-notion-account)  Remove Integration with Notion Account

To remove the integration with Slack Workspace,

1. Visit the Integrations tab in your Formbricks Cloud dashboard.
2. Select “Manage” button in the Slack card.
3. Click on the “Delete Integration” button.
4. It will now ask for a confirmation to remove the integration. Click on the “Delete” button to remove the integration. You can always come back and connect again with the same Notion Account.

![Delete Notion Integration with Formbricks](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/notion/delete-connection.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=f71521075d194636638394b15e2d66b7)Still struggling or something not working as expected? [Join our Github Discussions](https://github.com/formbricks/formbricks/discussions) and we’d be glad to assist you!

Was this page helpful?

YesNo

[n8n](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/n8n) [Slack](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/slack)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.