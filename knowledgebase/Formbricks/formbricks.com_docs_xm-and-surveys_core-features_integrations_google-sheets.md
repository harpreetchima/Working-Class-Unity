---
url: "https://formbricks.com/docs/xm-and-surveys/core-features/integrations/google-sheets"
title: "Google Sheets - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/google-sheets#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Integrations

Google Sheets

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

- [Connect Google Sheets](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/google-sheets#connect-google-sheets)
- [Remove Integration with Google Account](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/google-sheets#remove-integration-with-google-account)
- [What info do you need?](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/google-sheets#what-info-do-you-need)

Integrations

# Google Sheets

The Google Sheets integration allows you to automatically send responses to a Google Sheet of your choice.

If you are on a self-hosted instance, you will need to configure this integration separately. Please follow
the guides [here](https://formbricks.com/docs/self-hosting/configuration/integrations) to configure integrations on your self-hosted
instance.

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/google-sheets\#connect-google-sheets)  Connect Google Sheets

1. Click on the `Configuration` tab in the left sidebar and then click on the `Integrations` tab and click on the `connect` button under the `Google Sheets` card.

![Formbricks Integrations Tab](https://mintcdn.com/formbricks/W79CbeUfNts3a2Kp/images/xm-and-surveys/core-features/integrations/google-sheets/integrations-tab.webp?fit=max&auto=format&n=W79CbeUfNts3a2Kp&q=85&s=f82d698226f67ede5283203e9725d26e)

1. Now click on the “Connect with Google” button to authenticate yourself with Google.

![Connect Formbricks with your Google](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/google-sheets/connect-with-google.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=ea10e4650bd441f0874dd939eb90600b)

1. You will now be taken to the Google OAuth page where you can select the Google account you want to use for the integration.
2. Once you have selected the account and completed the authentication process, you will be taken back to Formbricks Cloud and see the connected status as below:

![Formbricks is now connected with Google](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/google-sheets/google-connected.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=ce11807bf1b56feb2f32476aae579f4c)

Before the next step, make sure that you have a Formbricks Survey with at least one question and a Google
Sheet in the Google account you integrated.

1. Now click on the “Link New Sheet” button to link a Google Sheet with Formbricks and a modal will open up.

![Link Formbricks with a Google Sheet](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/google-sheets/link-survey-with-sheet.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=3670ee7adbe554d041502228b26ad1a7)

1. Enter the spreadsheet URL for the Google Sheet you want to link with Formbricks and the Survey. On doing so, you will be asked with what questions’ responses you want to feed in the Google Sheet. Select the questions and click on the “Link Sheet” button.

![Select question to link with Google Sheet](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/google-sheets/link-with-questions.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=2d1dfbb10a9b6210afb3aa53f416befe)

1. On submitting, the modal will close and you will see the linked Google Sheet in the list of linked Google Sheets.

![List of linked Google Sheets](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/google-sheets/list-linked-surveys.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=2f1cd47cfae275e0d739cf40ca568df9)Congratulations! You have successfully linked a Google Sheet with Formbricks. Now whenever a response is submitted for the linked survey, it will be automatically added to the linked Google Sheet.

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/google-sheets\#remove-integration-with-google-account)  Remove Integration with Google Account

To remove the integration with Google Account,

1. Visit the Integrations tab in your Formbricks Cloud dashboard.
2. Select **Manage Sheets** button in the Google Sheets card.
3. Click on the **Delete Integration** button.
4. It will now ask for a confirmation to remove the integration. Click on the **Delete** button to remove the integration. You can always come back and connect again with the same Google Account.

![Delete Google Integration with Formbricks](https://mintcdn.com/formbricks/hX4eoMhsUTcFz4G1/images/xm-and-surveys/core-features/integrations/google-sheets/delete-connection.webp?fit=max&auto=format&n=hX4eoMhsUTcFz4G1&q=85&s=cb24d7ad8295537fb18c169114b48308)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/google-sheets\#what-info-do-you-need)  What info do you need?

- Your **Email ID** for authentication (We use this to identify you)
- Your **Google Sheets Names and IDs** (We fetch this to list and show you the options of choosing a sheet to integrate with)
- Write access to **selected Google Sheet** (The google sheet you choose to integrate it with, we write survey responses to it)

For the above, we ask for:

1. **User Email**: To identify you (that’s it, nothing else, we’re opensource, see this in our codebase [here](https://github.com/formbricks/formbricks/blob/main/apps/web/app/api/google-sheet/callback/route.ts#L47C17-L47C25))
2. **Google Spreadsheet API**: To write to the spreadsheet you select (that’s it, nothing else, we’re opensource, see this method in our codebase [here](https://github.com/formbricks/formbricks/blob/main/packages/lib/googleSheet/service.ts#L70))

We store as little personal information as possible.

Still struggling or something not working as expected? [Join our Github Discussions](https://github.com/formbricks/formbricks/discussions) and we’d be glad to assist you!

Was this page helpful?

YesNo

[Airtable](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/airtable) [Make](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/make)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.