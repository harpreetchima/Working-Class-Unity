---
url: "https://formbricks.com/docs/xm-and-surveys/core-features/integrations/webhooks"
title: "Webhooks - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/webhooks#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Integrations

Webhooks

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

- [Webhook Triggers](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/webhooks#webhook-triggers)
- [Creating Webhooks](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/webhooks#creating-webhooks)
- [Creating Webhooks via UI](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/webhooks#creating-webhooks-via-ui)
- [Creating Webhooks via API](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/webhooks#creating-webhooks-via-api)
- [Example Webhook Payloads](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/webhooks#example-webhook-payloads)
- [Response Created](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/webhooks#response-created)
- [Response Updated](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/webhooks#response-updated)
- [Response Finished](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/webhooks#response-finished)

Integrations

# Webhooks

With webhooks, you can receive real-time HTTP notifications when specific objects change in your Formbricks environment. This allows you to stay updated and trigger automated actions based on these events.

### [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/webhooks\#webhook-triggers)  **Webhook Triggers**

Webhooks are configured to send notifications based on trigger events. The available triggers include:

- **`responseCreated`**
- **`responseUpdated`**
- **`responseFinished`**

* * *

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/webhooks\#creating-webhooks)  **Creating Webhooks**

You can create webhooks either through the **Formbricks App UI** or programmatically via the **Webhook API**.

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/webhooks\#creating-webhooks-via-ui)  **Creating Webhooks via UI**

- **Log in to Formbricks**
and click on the `Configuration` tab in the left sidebar and then click on the `Integrations` tab.

![Step one](https://mintcdn.com/formbricks/Q9LOxgpWHulOxfHK/images/xm-and-surveys/core-features/integrations/webhooks/integrations-tab.webp?fit=max&auto=format&n=Q9LOxgpWHulOxfHK&q=85&s=d202857933cba10c8ad2b139e82d9d41)

- Click on **Manage Webhooks** & then **Add Webhook** button:

![Step two](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738094259/j4a92z2q43twgamogpny.webp)

- Add your webhook listener endpoint & test it to make sure it can receive the test endpoint otherwise you will not be able to save it.

![Step three](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738094617/image_kubsnz.jpg)

- Now add the triggers you want to listen to and the surveys!
- That’s it! Your webhooks will not start receiving data as soon as it arrives!

![Step five](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738094816/image_xvrel1.jpg)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/webhooks\#creating-webhooks-via-api)  **Creating Webhooks via API**

Use our documented methods on the **Creation**, **List**, and **Deletion** endpoints of the Webhook API mentioned in our [API v2 playground](https://formbricks.com/docs/api-v2-reference/management-api-%3E-webhooks/get-webhooks).If you encounter any issues or need help setting up webhooks, feel free to reach out to us on [GitHub Discussions](https://github.com/formbricks/formbricks/discussions). 😃

* * *

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/webhooks\#example-webhook-payloads)  Example Webhook Payloads

We provide the following webhook payloads, `responseCreated`, `responseUpdated`, and `responseFinished`.

### [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/webhooks\#response-created)  Response Created

Example of Response Created webhook payload:

Copy

```
[\
  {\
    "data": {\
      "contact": null,\
      "contactAttributes": null,\
      "createdAt": "2025-07-24T07:47:29.507Z",\
      "data": {\
        "q1": "clicked"\
      },\
      "displayId": "displayId",\
      "endingId": null,\
      "finished": false,\
      "id": "responseId",\
      "language": "en",\
      "meta": {\
        "country": "DE",\
        "url": "https://app.formbricks.com/s/surveyId",\
        "userAgent": {\
          "browser": "Chrome",\
          "device": "desktop",\
          "os": "macOS"\
        }\
      },\
      "singleUseId": null,\
      "surveyId": "surveyId",\
      "tags": [],\
      "ttc": {\
        "q1": 2154.700000047684\
      },\
      "updatedAt": "2025-07-24T07:47:29.507Z",\
      "variables": {}\
    },\
    "event": "responseCreated",\
    "webhookId": "webhookId"\
  }\
]
```

### [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/webhooks\#response-updated)  Response Updated

Example of Response Updated webhook payload:

Copy

```
[\
  {\
    "data": {\
      "contact": null,\
      "contactAttributes": null,\
      "createdAt": "2025-07-24T07:47:29.507Z",\
      "data": {\
        "q1": "clicked",\
        "q2": "Just browsing"\
      },\
      "displayId": "displayId",\
      "endingId": null,\
      "finished": false,\
      "id": "responseId",\
      "language": "en",\
      "meta": {\
        "country": "DE",\
        "url": "https://app.formbricks.com/s/surveyId",\
        "userAgent": {\
          "browser": "Chrome",\
          "device": "desktop",\
          "os": "macOS"\
        }\
      },\
      "singleUseId": null,\
      "surveyId": "surveyId",\
      "tags": [],\
      "ttc": {\
        "q1": 2154.700000047684,\
        "q2": 3855.799999952316\
      },\
      "updatedAt": "2025-07-24T07:47:33.696Z",\
      "variables": {}\
    },\
    "event": "responseUpdated",\
    "webhookId": "webhookId"\
  }\
]
```

### [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/webhooks\#response-finished)  Response Finished

Example of Response Finished webhook payload:

Copy

```
[\
  {\
    "data": {\
      "contact": null,\
      "contactAttributes": null,\
      "createdAt": "2025-07-24T07:47:29.507Z",\
      "data": {\
        "q1": "clicked",\
        "q2": "accepted"\
      },\
      "displayId": "displayId",\
      "endingId": "endingId",\
      "finished": true,\
      "id": "responseId",\
      "language": "en",\
      "meta": {\
        "country": "DE",\
        "url": "https://app.formbricks.com/s/surveyId",\
        "userAgent": {\
          "browser": "Chrome",\
          "device": "desktop",\
          "os": "macOS"\
        }\
      },\
      "singleUseId": null,\
      "surveyId": "surveyId",\
      "tags": [],\
      "ttc": {\
        "_total": 4947.899999035763,\
        "q1": 2154.700000047684,\
        "q2": 2793.199999988079\
      },\
      "updatedAt": "2025-07-24T07:47:56.116Z",\
      "variables": {}\
    },\
    "event": "responseFinished",\
    "webhookId": "webhookId"\
  }\
]
```

Was this page helpful?

YesNo

[Zapier](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/zapier) [Key Concepts](https://formbricks.com/docs/xm-and-surveys/core-features/user-management)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.

![Step three](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738094617/image_kubsnz.jpg)

![Step five](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738094816/image_xvrel1.jpg)