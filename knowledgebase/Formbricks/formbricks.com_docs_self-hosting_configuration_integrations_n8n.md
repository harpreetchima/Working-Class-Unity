---
url: "https://formbricks.com/docs/self-hosting/configuration/integrations/n8n"
title: "n8n (On Premise) - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/self-hosting/configuration/integrations/n8n#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Integrations

n8n (On Premise)

[Overview](https://formbricks.com/docs/overview/introduction) [XM & Surveys](https://formbricks.com/docs/xm-and-surveys/overview) [Self Hosting](https://formbricks.com/docs/self-hosting/overview) [Development](https://formbricks.com/docs/development/overview) [API v1 Reference](https://formbricks.com/docs/api-reference/rest-api) [API v2 Reference (Beta)](https://formbricks.com/docs/api-v2-reference/introduction)

##### Self Hosting

- [Self-Hosting](https://formbricks.com/docs/self-hosting/overview)

##### Setup

- [One-Click Setup](https://formbricks.com/docs/self-hosting/setup/one-click)
- [Docker Setup](https://formbricks.com/docs/self-hosting/setup/docker)
- [Monitoring](https://formbricks.com/docs/self-hosting/setup/monitoring)
- [Cluster Setup](https://formbricks.com/docs/self-hosting/setup/cluster-setup)
- [Kubernetes Deployment](https://formbricks.com/docs/self-hosting/setup/kubernetes)

##### Configuration

- [Custom SSL Certificate](https://formbricks.com/docs/self-hosting/configuration/custom-ssl)
- [Environment Variables](https://formbricks.com/docs/self-hosting/configuration/environment-variables)
- [SMTP Configuration](https://formbricks.com/docs/self-hosting/configuration/smtp)
- [File Uploads Configuration](https://formbricks.com/docs/self-hosting/configuration/file-uploads)
- [Domain Configuration](https://formbricks.com/docs/self-hosting/configuration/domain-configuration)
- [Custom Subpath](https://formbricks.com/docs/self-hosting/configuration/custom-subpath)
- Auth & SSO

- Integrations

  - [Airtable (On Premise)](https://formbricks.com/docs/self-hosting/configuration/integrations/airtable)
  - [Google Sheets (On Premise)](https://formbricks.com/docs/self-hosting/configuration/integrations/google-sheets)
  - [n8n (On Premise)](https://formbricks.com/docs/self-hosting/configuration/integrations/n8n)
  - [Notion (On Premise)](https://formbricks.com/docs/self-hosting/configuration/integrations/notion)
  - [Slack (On Premise)](https://formbricks.com/docs/self-hosting/configuration/integrations/slack)
  - [Zapier (On Premise)](https://formbricks.com/docs/self-hosting/configuration/integrations/zapier)
  - [ActivePieces (On Premise)](https://formbricks.com/docs/self-hosting/configuration/integrations/activepieces)

##### Advanced

- [Migration](https://formbricks.com/docs/self-hosting/advanced/migration)
- [License](https://formbricks.com/docs/self-hosting/advanced/license)
- [License Activation](https://formbricks.com/docs/self-hosting/advanced/license-activation)
- Enterprise Features

- [Rate Limiting](https://formbricks.com/docs/self-hosting/advanced/rate-limiting)

On this page

- [Setup](https://formbricks.com/docs/self-hosting/configuration/integrations/n8n#setup)

Integrations

# n8n (On Premise)

Set up automations with your self-hosted n8n instance.

The n8n integration allows you to create automations based on survey responses.

If you are using Formbricks Cloud, you will need to configure this
integration differently. Please follow this guide
[here](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/n8n) to set it up.

## [​](https://formbricks.com/docs/self-hosting/configuration/integrations/n8n\#setup)  Setup

Enabling the n8n integration in a self-hosted environment requires a new workflow setup using n8n and changing the environment variables of your Formbricks instance.

- Setup your n8n workflow: Go to [n8n.io](https://n8n.io/) and create a new workflow. Search for “Formbricks” to get started:

![n8n](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738252710/image_rp86wt.jpg)

- **Connect Formbricks with n8n**: Now, you have to connect n8n with Formbricks via an API Key:

![CreateNewCredentialBtn](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738252823/image_kyyvur.jpg)

- Click on Create New Credentail button to add your host and API Key

![AddAPIKey](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738252907/image_a1fmyc.jpg)Now you need an API key. Please refer to the [API Key Setup](https://formbricks.com/docs/api-reference/rest-api#how-to-generate-an-api-key) page to learn how to create one.Once you copied it in the API Key field, hit Save button to test the connection and save the credentials.![connectiontest](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738252980/image_asox5o.jpg)

- Select Event: Next, you can choose the event you want to trigger the node on. You can select multiple events:

![select event](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738253186/image_xrjjrh.jpg)Here, we are adding `Response Finished` as an event, which will trigger when the survey has been filled out.

- Select Survey: Next, you can choose from all the surveys you have created in this environment. You can select multiple surveys:

![select survey](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738253219/image_hbubu7.jpg)Here, we are selecting two surveys.![two survey](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738253296/image_lbb4hw.jpg)

- Test your trigger: In order to set up n8n you’ll need a test response in the selected survey. This allows you to select the individual values of each response in your workflow.

![test trigger](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738253356/image_ogjya8.jpg)Next, click on Listen for event button.![listen](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738253388/image_pzerrp.jpg)Then, go to the survey which you selected. Fill it out, and wait for the particular event to trigger (in this case it’s `Response Finished`). Once the event is triggered you will see the response that you filled out in the survey.![response](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738253435/image_c0hyo9.jpg)Now you have all the data you need at hand. The next steps depend on what you want to do with it. In this tutorial, we will send submissions to a discord channel:

1. Add Discord to your workflow: Click on the plus and search `Discord`.

![discord](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738253513/image_hwld7h.jpg)Fill in the `Webhook URL` and the `Content` that you want to receive in the respective discord channel. Next, click on `Execute Node` button to test the node.![webhook](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738253594/image_avxxkl.jpg)Once the execution is successful, you’ll receive the content in the discord channel.![success](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738253753/image_qlxvpv.jpg)Voila! You have successfully enabled the n8n integration in your self-hosted Formbricks instance. Now you can follow the steps mentioned in the [Formbricks](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/n8n) Integrations section to know more about the capabilities with Formbricks with n8n.Still struggling or something not working as expected? [Join our Github Discussions](https://github.com/formbricks/formbricks/discussions) and we’d be glad to assist you!

Was this page helpful?

YesNo

[Google Sheets (On Premise)](https://formbricks.com/docs/self-hosting/configuration/integrations/google-sheets) [Notion (On Premise)](https://formbricks.com/docs/self-hosting/configuration/integrations/notion)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.

![n8n](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738252710/image_rp86wt.jpg)

![CreateNewCredentialBtn](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738252823/image_kyyvur.jpg)

![AddAPIKey](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738252907/image_a1fmyc.jpg)

![connectiontest](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738252980/image_asox5o.jpg)

![select event](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738253186/image_xrjjrh.jpg)

![select survey](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738253219/image_hbubu7.jpg)

![two survey](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738253296/image_lbb4hw.jpg)

![test trigger](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738253356/image_ogjya8.jpg)

![listen](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738253388/image_pzerrp.jpg)

![response](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738253435/image_c0hyo9.jpg)

![discord](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738253513/image_hwld7h.jpg)

![webhook](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738253594/image_avxxkl.jpg)

![success](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738253753/image_qlxvpv.jpg)