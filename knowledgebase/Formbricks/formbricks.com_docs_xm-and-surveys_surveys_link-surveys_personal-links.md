---
url: "https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/personal-links"
title: "Personal Links - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/personal-links#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Features

Personal Links

[Overview](https://formbricks.com/docs/overview/introduction) [XM & Surveys](https://formbricks.com/docs/xm-and-surveys/overview) [Self Hosting](https://formbricks.com/docs/self-hosting/overview) [Development](https://formbricks.com/docs/development/overview) [API v1 Reference](https://formbricks.com/docs/api-reference/rest-api) [API v2 Reference (Beta)](https://formbricks.com/docs/api-v2-reference/introduction)

##### XM & Surveys

- [XM & Surveys](https://formbricks.com/docs/xm-and-surveys/overview)

##### Surveys

- General Features

- Link Surveys

  - [Quickstart](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/quickstart)
  - Features

    - [Data Prefilling](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling)
    - [Embed Surveys](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys)
    - [Link Settings](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/link-settings)
    - [Personal Links](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/personal-links)
    - [Single-Use Links](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/single-use-links)
    - [Source Tracking](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/source-tracking)
    - [Start At Specific Question](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/start-at-question)
    - [Verify Email](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/verify-email-before-survey)
    - [Market Research Panel](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/market-research-panel)
    - [PIN Protected Surveys](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/pin-protected-surveys)
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


On this page

- [When to use Personal Links](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/personal-links#when-to-use-personal-links)
- [How Personal Links work](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/personal-links#how-personal-links-work)
- [Generating Personal Links (UI)](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/personal-links#generating-personal-links-ui)
- [Understanding the CSV export](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/personal-links#understanding-the-csv-export)
- [Generating Personal Links (API)](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/personal-links#generating-personal-links-api)
- [Limitations and considerations](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/personal-links#limitations-and-considerations)
- [Troubleshooting](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/personal-links#troubleshooting)

Features

# Personal Links

Personal Links enable you to generate unique survey links for individual contacts, allowing you to attribute responses directly to specific people and set expiry dates for better control over survey distribution.

Personal Links are part of the [Enterprise Edition](https://formbricks.com/docs/self-hosting/advanced/license).

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/personal-links\#when-to-use-personal-links)  When to use Personal Links

Personal Links are ideal when you need to:

- **Track individual responses**: Associate survey responses with specific contacts in your database
- **Enable targeted follow-ups**: Know exactly who responded and who didn’t for personalized outreach
- **Control survey access**: Set expiry dates to limit when links can be used
- **Maintain data integrity**: Ensure each contact can only submit one response per survey

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/personal-links\#how-personal-links-work)  How Personal Links work

When you generate personal links:

1. **Individual URLs**: Each contact receives a unique survey link tied to their contact record
2. **Automatic attribution**: Responses are automatically linked to the specific contact who clicked the link
3. **Single-use by default**: Each link can only be used once to prevent duplicate responses
4. **Expiry control**: Set expiration dates to control survey access windows

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/personal-links\#generating-personal-links-ui)  Generating Personal Links (UI)

1

Access the share modal

Navigate to your survey summary page and click the **Share survey** button in the top bar.

2

Select Personal Links tab

In the Share Modal, click on the **Personal Links** tab.

3

Choose your segment

Select the contact segment you want to generate links for using the dropdown menu.

If no segments are available, you’ll see “No segments available” in the dropdown. Create segments first in your Contact Management section.

4

Set expiry date (optional)

Choose an expiry date for your links. You can only select dates starting from tomorrow onwards.

Links expire at 00:00:00 UTC on the day after your selected date. This means links remain valid through the entirety of your chosen expiry date.

5

Generate and download

Click **Generate & download links** to create your personal links and download them as a CSV file.

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/personal-links\#understanding-the-csv-export)  Understanding the CSV export

Your downloaded CSV file contains the following columns in this order:

| Column | Description |
| --- | --- |
| **Formbricks Contact ID** | Internal contact identifier (`contactId`) |
| **Custom ID** | Your custom user identifier (`userId`) |
| **First Name** | Contact’s first name |
| **Last Name** | Contact’s last name |
| **Email** | Contact’s email address |
| **Personal Link** | Unique survey URL for this contact |

Use the Custom ID column to match contacts with your existing systems, and the Personal Link column for distribution via your preferred communication channels.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/personal-links\#generating-personal-links-api)  Generating Personal Links (API)

We also offer a way to generate Personal Links via the API. You can use two endpoints for generating Personal Links: For [individual contacts](https://formbricks.com/docs/api-v2-reference/management-api--surveys--contact-links/get-personalized-survey-link-for-a-contact) and for a [whole segment](https://formbricks.com/docs/api-v2-reference/management-api--surveys--contact-links/get-survey-links-for-contacts-in-a-segment).

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/personal-links\#limitations-and-considerations)  Limitations and considerations

Keep these limitations in mind when using Personal Links

- **Single-use only**: Each personal link can only be used once
- **Enterprise feature**: Requires EE license with Contact Management enabled
- **Segment requirement**: You must have contacts organized in segments
- **CSV storage**: Generated link lists are not retained in Formbricks - download and store your CSV files securely

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/personal-links\#troubleshooting)  Troubleshooting

- No segments available

- Generation failed

- Links not working


**Issue**: Dropdown shows “No segments available”**Solution**: Create contact segments in your Contact Management section before generating personal links.

Was this page helpful?

YesNo

[Link Settings](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/link-settings) [Single-Use Links](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/single-use-links)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.