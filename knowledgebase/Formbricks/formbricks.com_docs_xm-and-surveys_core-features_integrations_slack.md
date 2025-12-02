---
url: "https://formbricks.com/docs/xm-and-surveys/core-features/integrations/slack"
title: "Slack - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/slack#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Integrations

Slack

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

- [Formbricks Cloud](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/slack#formbricks-cloud)
- [Setup in self-hosted Formbricks](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/slack#setup-in-self-hosted-formbricks)
- [By now, your environment variables should include the below ones:](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/slack#by-now,-your-environment-variables-should-include-the-below-ones:)
- [Remove Integration with Slack Workspace](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/slack#remove-integration-with-slack-workspace)

Integrations

# Slack

The slack integration allows you to automatically send responses to a Slack channel of your choice.

If you are on a self-hosted instance, you will need to configure this integration separately. Please follow the guides [here](https://formbricks.com/docs/self-hosting/configuration/integrations) to configure integrations on your self-hosted instance.

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/slack\#formbricks-cloud)  Formbricks Cloud

1. Click on the `Configuration` tab in the left sidebar and then click on the `Integrations` tab and click on the `connect` button under the `Slack` card.

![Formbricks Integrations Tab](https://mintcdn.com/formbricks/Q9LOxgpWHulOxfHK/images/xm-and-surveys/core-features/integrations/slack/integrations-tab.webp?fit=max&auto=format&n=Q9LOxgpWHulOxfHK&q=85&s=b6af7204970ae24e91dd57942f005989)

1. Now click on the “Connect with Slack” button to authenticate yourself with Slack.

![Connect Formbricks with your Slack Workspace](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/slack/connect-with-slack.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=dd52028bb9c231e81a2ba49640bbe449)

1. You will now be taken to the Slack OAuth page where you can select the Slack channel you want to link with Formbricks and click on the “Allow” button.

![Slack OAuth Page](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/slack/slack-auth.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=ef2d3cc6719d04f6dbad9fc519c6e7a4)

1. Once you have selected the account and completed the authentication process, you will be taken back to Formbricks Cloud and see the connected status as below:

![Formbricks is now connected with Slack](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/slack/slack-connected.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=7bfb9c8119467eccb90e0c344fc693cc)

Before the next step, make sure that you have a Formbricks Survey with at
least one question and a Slack channel in the Slack workspace you integrated.

1. In order to make your channel available in channel dropdown, you need to add formbricks integration bot to the channel you want to link. You can do this by going to channel settings -> Integrations -> Add apps -> Search for “Formbricks” -> Select the bot -> Add.

![Click on three dot at top right of the channel](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/slack/add-slack-bot-1.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=0624888690a1ea63e939cade8a4eb115)![Select Edit Settings](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/slack/add-slack-bot-2.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=0baab547927caa5e2ef505904edf97ab)![Navigate to Integrations](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/slack/add-slack-bot-3.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=e4e860e621481f9092b079c7e94bd7c5)![Add Formbricks Bot](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/slack/add-slack-bot-4.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=fdf8e91683e71181110f65a019fb7002)

1. Now click on the “Link channel” button to link a Slack channel with Formbricks and a modal will open up.

![Link Formbricks with a Slack Channel](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/slack/link-survey-with-channel.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=d74c8c1be912ebb380ca6eb8fd39b72d)

1. Select the channel you want to link with Formbricks and the Survey. On doing so, you will be asked to select the questions’ responses you want to feed in the Slack channel. Select the questions and click on the “Link Channel” button.

![Select question to link with Slack Channel](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/slack/link-with-questions.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=12e9b2324a44ca6febe8762fc09bb01f)

1. On submitting, the modal will close and you will see the linked Slack channel in the list of linked Slack channels.

![List of linked Slack Channels](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/slack/list-linked-surveys.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=1ec9c0742e90fd263b51f7c415c29474)Congratulations! You have successfully linked a Slack channel with Formbricks. Now whenever a response is submitted for the linked survey, it will be automatically sent to the linked Slack channel.

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/slack\#setup-in-self-hosted-formbricks)  Setup in self-hosted Formbricks

Enabling the Slack Integration in a self-hosted environment requires a setup using slack workspace account and changing the environment variables of your Formbricks instance.

If you are running Formbricks locally:You need to use `https` instead of `http` for the redirect URI.

- You can update the `go` script in your `apps/web/package.json` to include the `--experimental-https` flag. The
command will look like:








Copy











```
    "go": next dev --experimental-https -p 3000
```

- You also need to update the .env file in the `apps/web` directory to include the `WEBAPP_URL` as `https://localhost:3000` instead of `http://localhost:3000`.
- You also need to run the terminal in admin mode to run the `go` script(to acquire the SSL certificate). You can do this by running the terminal as an administrator or using the `sudo` command in Unix-based systems.

1. Create a Slack workspace if you don’t have one already.
2. Go to the [Your apps](https://api.slack.com/apps) page and **Create New App**.
3. Click on **From Scratch** and provide the **App Name** and select your workspace in **Pick a workspace to develop your app in:** dropdown. Click on **Create App**.
4. Go to the **OAuth & Permissions** tab on the sidebar and add the following **Bot Token Scopes**:   - `channels:read`
   - `groups:read`
   - `chat:write`
   - `chat:write.public`
   - `chat:write.customize`
5. Add the **Redirect URLs** under **OAuth & Permissions** tab. You can add the following URLs:   - If you are running formbricks locally, you can enter `https://localhost:3000/api/v1/integrations/slack/callback`.
   - Or, you can enter `https://<your-public-facing-url>/api/v1/integrations/slack/callback`
6. Now, click on **Install to Workspace** and **Allow** the permissions.
7. Go to the **Basic Information** tab on the sidebar and copy the **Client ID** and **Client Secret**. Copy them and set them as the environment variables in your Formbricks instance as:

- `SLACK_CLIENT_ID` \- OAuth Client ID
- `SLACK_CLIENT_SECRET` \- OAuth Client Secret

1. Now, you need to enable the public distribution of your app. Go to the **Basic Information** tab and click on the **Manage distribution** button and click on the “Distribute App”.
2. Scroll down to the **Share your app with other workspaces** section, complete the checklist and click on the **Activate public distribution** button.

### [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/slack\#by-now,-your-environment-variables-should-include-the-below-ones:)  By now, your environment variables should include the below ones:

- `SLACK_CLIENT_ID`
- `SLACK_CLIENT_SECRET`

Voila! You have successfully enabled the Slack integration in your self-hosted Formbricks instance. Now you can follow the steps mentioned in the [Formbricks Cloud](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/slack#formbricks-cloud) section to link a Slack workspace with Formbricks.

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/slack\#remove-integration-with-slack-workspace)  Remove Integration with Slack Workspace

To remove the integration with Slack Workspace,

1. Visit the Integrations tab in your Formbricks Cloud dashboard.
2. Select “Manage” button in the Slack card.
3. Click on the “Delete Integration” button.
4. It will now ask for a confirmation to remove the integration. Click on the “Delete” button to remove the integration. You can always come back and connect again with the same Slack Workspace.

![Delete Slack Integration with Formbricks](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/slack/delete-connection.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=0937b11e9643545bdad541114b18e9e0)Still struggling or something not working as expected? [Join our Github Discussions](https://github.com/formbricks/formbricks/discussions) and we’d be glad to assist you!

Was this page helpful?

YesNo

[Notion](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/notion) [Wordpress](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/wordpress)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.