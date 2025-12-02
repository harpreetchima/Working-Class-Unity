---
url: "https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys"
title: "Headless Surveys - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Best Practices

Headless Surveys

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

- User Management

- [Styling Theme](https://formbricks.com/docs/xm-and-surveys/core-features/styling-theme)
- [Email Branding](https://formbricks.com/docs/xm-and-surveys/core-features/email-customization)
- [Test Environment](https://formbricks.com/docs/xm-and-surveys/core-features/test-environment)

##### XM

- Best Practices

  - [Contact form](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/contact-form)
  - [Headless Surveys](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys)
  - [Docs Feedback](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/docs-feedback)
  - [Feature Chaser](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feature-chaser)
  - [Feedback Box](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feedback-box)
  - [Improve Email Content](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/improve-email-content)
  - [App Interview Prompt](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/interview-prompt)
  - [Learn from Churn](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/cancel-subscription)
  - [Product-Market Fit](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/pmf-survey)
  - [Quiz Time](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/quiz-time)
  - [Improve Trial Conversion](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/improve-trial-cr)

On this page

- [In a nutshell](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys#in-a-nutshell)
- [What Formbricks handles:](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys#what-formbricks-handles:)
- [What you handle:](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys#what-you-handle:)
- [Why choose this approach?](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys#why-choose-this-approach)
- [Core components](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys#core-components)
- [Data Flow](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys#data-flow)
- [Create Survey with Formbricks:](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys#create-survey-with-formbricks:)
- [Fetch Survey Schema:](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys#fetch-survey-schema:)
- [Implementation Options:](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys#implementation-options:)
- [Render Survey with Your Custom UI:](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys#render-survey-with-your-custom-ui:)
- [Submit Responses to Formbricks:](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys#submit-responses-to-formbricks:)
- [Client-side Submission (Recommended):](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys#client-side-submission-recommended-:)
- [Server-side Submission (Alternative):](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys#server-side-submission-alternative-:)
- [Consume Analytics & Response Data:](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys#consume-analytics-&-response-data:)
- [Option A: Real-time Webhooks (Recommended):](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys#option-a:-real-time-webhooks-recommended-:)
- [Option B: Pull from API on Demand:](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys#option-b:-pull-from-api-on-demand:)

Best Practices

# Headless Surveys

Using Formbricks as a Headless Survey Platform

This document shows how you can use Formbricks to manage survey definitions and response collection via APIs, while rendering the surveys in your own frontend and forwarding the response data to your own analytics pipelines.

## [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys\#in-a-nutshell)  In a nutshell

### [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys\#what-formbricks-handles:)  What Formbricks handles:

1. **Survey Management:** Create, update, and host survey definitions through the Formbricks Management API or dashboard.
2. **Response Handling:** Receive and securely store responses via the Client or Management API.
3. **Webhooks Delivery:** Send real-time response data to your configured endpoints when responses are created, updated, or completed.

### [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys\#what-you-handle:)  What you handle:

1. **Custom Survey Wrapper / UI:** Build your own front-end package that fetches the survey (via API or local cache), renders it, and captures user responses.
2. **Analysis & Reporting:** Process incoming webhook data or fetched responses in your own analytics, data warehouse, or visualization tools. You can still make use of Formbricks to view Survey stats and data, but any type of custom dashboards is currently not supported.

## [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys\#why-choose-this-approach)  Why choose this approach?

1. **Your UI, your brand:** You take full control of survey look, feel, transitions, validations, and logic in your application stack.
2. **Separation of concerns:** Formbricks functions like a specialized “Backend-as-a-Service” for survey schemas and response handling; you control the frontend and analytics.
3. **OSS, self-hostable**: With Formbricks being open source, you can self-host without vendor lock-in.

## [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys\#core-components)  Core components

1. **Formbricks Backend:** Use the Formbricks app or Management API to create surveys (questions, flows, locales, validations).
2. **Your UI Survey Package:** Renders your custom UI, collects the data and sends to Formbricks backend using Formbricks API. For inspiration, you can start looking [here](https://github.com/formbricks/formbricks/tree/main/packages/surveys). With an active Enterprise license you can even fork our surveys package, make changes and keep them private to your organization (freed from AGPL obligation to also release your changes under AGPL)
3. **Webhook Integration:** Using in-built Webhook integration forward the data to your Analysis tool or Data warehouse.
4. **Your Analysis Tool / Data Warehouse:** Receive all the data from Formbricks integration and process it for analysis.

## [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys\#data-flow)  Data Flow

### [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys\#create-survey-with-formbricks:)  **Create Survey with Formbricks:**

Create a survey in Formbricks (UI) or programmatically via the Management API. Read more about the API endpoint [here](https://formbricks.com/docs/api-reference/management-api--survey/create-survey).

Returns: Full survey object with id, schema, and configuration.

⚠️ Backend only: Requires API key - call from your server, not client-side.

Copy

```
POST /api/v1/management/surveys
Headers:
  x-api-key: <your-api-key>
  Content-Type: application/json

Body:
{
  "environmentId": "your-environment-id",
  "type": "link",
  "name": "Customer Feedback Survey",
  "questions": [\
    ...\
  ]
}
```

### [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys\#fetch-survey-schema:)  **Fetch Survey Schema:**

Get the survey schema using the Formbricks API. Read more about the API endpoint [here](https://formbricks.com/docs/api-reference/management-api--survey/get-survey-by-id).GET /api/v1/management/surveys/

Headers: x-api-key: <your-api-key>

#### [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys\#)

**Returns**: Complete survey JSON schema including:

- Questions array with types, logic, and validation
- Display settings and styling
- Languages and translations
- Branching/skip logic
- Thank you pages and redirects

#### [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys\#implementation-options:)  **Implementation Options:**

**Option A (Live)**: Your backend fetches at runtime and serves to your UI

1. Fresh data on every request
2. Requires backend proxy endpoint

⚠️ Backend only: API key required, cannot be called from browser.**Optional:**: Store survey JSON in your CDN/storage

1. Faster client load times
2. Periodically refresh from Management API
3. Best for high-traffic scenarios

⚠️ Backend only: API key required, cannot be called from browser.**Option B (Client Environment API)**: You can fetch all the survey schema and surveys from the Client side using the Client Environment API. However, this only works for Website & App surveys since they are the only ones that are made public on the Client API for our SDK to pull into an app. Make sure that:

1. Survey type: Website & App
2. Recontact Options: Overwrite Global Waiting Time & Always show
3. Targeting: None

These are **necessary requirements** for the survey to show up in the endpoint.More about the Endpoint [here](https://formbricks.com/docs/api-reference/client-api--environment/get-environment-state).

Copy

```
GET /api/v1/client/{environmentId}/environment
Headers:
  Content-Type: application/json

Body:
{
  "data": {
    "actionClasses": [\
      { ... },\
      { ... }\
    ],
    "project": {
      "id": "<project_id>",
      ...
    },
    "surveys": [\
      {\
        "id": "<survey_id>",\
        "name": "Start from scratch",\
        "status": "inProgress",\
        "question": "What would you like to know?",\
        "trigger": "code action",\
        "ending": "Thank you! We appreciate your feedback."\
      }\
    ]
  }
}
```

### [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys\#render-survey-with-your-custom-ui:)  **Render Survey with Your Custom UI:**

Your frontend receives the survey JSON and renders it using your own UI components.For inspiration, you can start looking [here](https://github.com/formbricks/formbricks/tree/main/packages/surveys). With an active Enterprise license you can even fork our surveys package, make changes and keep them private to your organization (freed from AGPL obligation to also release your changes under AGPL)

- Question rendering based on type (openText, multipleChoiceSingle, rating, etc.)
- Skip logic and conditional branching
- Input validation
- Progress tracking
- Custom styling and branding

### [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys\#submit-responses-to-formbricks:)  **Submit Responses to Formbricks:**

#### [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys\#client-side-submission-recommended-:)  **Client-side Submission (Recommended):**

Post responses directly from the browser to Formbricks Client API. Read more about it [here](https://formbricks.com/docs/api-reference/client-api--response/create-response).

✅ No authentication required - Safe for browser/mobile apps.

Copy

```
POST /api/v1/client/{environmentId}/responses
Headers:
  Content-Type: application/json

Body:
{
  "surveyId": "survey-xyz",
  "data": {
    "question-id-1": "Customer's answer",
    "question-id-2": 5,
    "question-id-3": ["option1", "option2"]
  },
  "finished": true
}
```

#### [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys\#server-side-submission-alternative-:)  **Server-side Submission (Alternative):**

Proxy responses through your backend.

Use when: You need server-side validation, PII handling, or response enrichment before storage.

### [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys\#consume-analytics-&-response-data:)  **Consume Analytics & Response Data:**

#### [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys\#option-a:-real-time-webhooks-recommended-:)  **Option A: Real-time Webhooks (Recommended):**

Configure webhooks in Formbricks to push response data to your system. Read more about Webhooks [here](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/webhooks#webhooks).

1. Go to Formbricks Settings → Webhooks
2. Add your endpoint URL: [https://your-domain.com/webhooks/formbricks](https://your-domain.com/webhooks/formbricks)
3. Select triggers:
   - responseCreated - New response started
   - responseUpdated - Response in progress
   - responseFinished - Response completed

**Webhook payload example:**

Copy

```
{
  "event": "responseFinished",
  "data": {
    "id": "response-123",
    "surveyId": "survey-xyz",
    "data": {
      "question-id-1": "answer"
      ...
    },
    "createdAt": "2025-01-15T10:30:00Z",
    "finished": true
  }
}
```

Forward to your analytics tool, data warehouse, or CRM in real-time.

#### [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys\#option-b:-pull-from-api-on-demand:)  **Option B: Pull from API on Demand:**

Fetch responses periodically from your backend, read more about the Endpoint [here](https://formbricks.com/docs/api-reference/management-api--response/get-survey-responses).

Copy

```
GET /api/v1/management/responses?surveyId={surveyId}
Headers:
  x-api-key: <your-api-key>
```

Was this page helpful?

YesNo

[Contact form](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/contact-form) [Docs Feedback](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/docs-feedback)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.