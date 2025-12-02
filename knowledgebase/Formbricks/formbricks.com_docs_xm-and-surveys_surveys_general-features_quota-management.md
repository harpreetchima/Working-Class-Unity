---
url: "https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management"
title: "Quota Management - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

General Features

Quota Management

[Overview](https://formbricks.com/docs/overview/introduction) [XM & Surveys](https://formbricks.com/docs/xm-and-surveys/overview) [Self Hosting](https://formbricks.com/docs/self-hosting/overview) [Development](https://formbricks.com/docs/development/overview) [API v1 Reference](https://formbricks.com/docs/api-reference/rest-api) [API v2 Reference (Beta)](https://formbricks.com/docs/api-v2-reference/introduction)

##### XM & Surveys

- [XM & Surveys](https://formbricks.com/docs/xm-and-surveys/overview)

##### Surveys

- General Features

  - [Add Image / Video](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/add-image-or-video-question)
  - [Conditional Logic](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/conditional-logic)
  - [Custom Styling](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/overwrite-styling)
  - [Hidden Fields](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/hidden-fields)
  - [Limit Submissions](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/limit-submissions)
  - [Multi-language Surveys](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/multi-language-surveys)
  - [Partial Submissions](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/partial-submissions)
  - [Recall Data](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/recall)
  - [User Metadata](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/metadata)
  - [Variables](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/variables)
  - [Hide Back Button](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/hide-back-button)
  - [Email Follow-ups](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/email-followups)
  - [Quota Management](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management)
  - [Spam Protection](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/spam-protection)
  - [Tags](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/tags)
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


On this page

- [Overview](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management#overview)
- [Key benefits](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management#key-benefits)
- [How Quota Management works](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management#how-quota-management-works)
- [Setting up Quotas](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management#setting-up-quotas)
- [Quota actions](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management#quota-actions)
- [Counting against Quotas](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management#counting-against-quotas)
- [1\. Count by Hidden Field value](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management#1-count-by-hidden-field-value)
- [2\. Quota by survey responses](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management#2-quota-by-survey-responses)
- [3\. Multi-criteria quotas](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management#3-multi-criteria-quotas)
- [Partial vs. complete responses](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management#partial-vs-complete-responses)
- [Quota monitoring](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management#quota-monitoring)

General Features

# Quota Management

Control response collection by setting limits on specific segments to ensure balanced and representative survey datasets.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management\#overview)  Overview

Quota Management allows you to set limits on the number of responses collected for specific segments or criteria in your survey. This feature helps ensure you collect a balanced and representative dataset while preventing oversaturation of certain response types.

Quota Management is part of the [Enterprise Edition](https://formbricks.com/docs/self-hosting/advanced/license).

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management\#key-benefits)  Key benefits

- **Balanced Data Collection**: Ensure your survey responses are evenly distributed across different segments
- **Cost Control**: Prevent collecting more responses than needed from specific groups
- **Quality Assurance**: Maintain data quality by avoiding homogeneous response patterns
- **Automated Management**: Automatically stop collecting responses when quotas are met

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management\#how-quota-management-works)  How Quota Management works

When you set up quotas for your survey, Formbricks automatically tracks responses against your defined limits. Once a quota is reached, the system can:

- Prevent new responses from that segment
- Skip respondents to the end of the survey
- Redirect respondents to a custom end screen

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management\#setting-up-quotas)  Setting up Quotas

In the first step, you need to define the criteria for the quota:

1

Name the quota

Create a Quota and label it e.g. “Mobile Phone Users in Europe”

2

Set quota limit

Set numerical limits for each hidden field value combination e.g. 500

3

Define inclusion criteria

Choose a distinct set of answers to survey questions, variable values or hidden fields. Responses who match this set will be included in the quota.

4

Configure actions

Choose what happens when this Quota is met (e.g. skip to specific end screen)

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management\#quota-actions)  Quota actions

Configure what happens when a quota reaches its limit:

- Skip to End

- Custom Redirect (soon)


Jump respondents directly to the survey completion page

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management\#counting-against-quotas)  Counting against Quotas

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management\#1-count-by-hidden-field-value)  1\. Count by Hidden Field value

Determine if a response falls in or out of a Quota based on hidden field values passed through URL parameters:

Copy

```
https://your-survey-url.com/s/abc123?product=credit-card&region=europe
```

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management\#2-quota-by-survey-responses)  2\. Quota by survey responses

Create quotas based on specific answers to survey questions:

- Single Question Quota

- Multi-Question Quota


Set quotas for individual answer options:

- Question: “What is your gender?”
- Quota: 500 responses for “Male”, 500 responses for “Female”

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management\#3-multi-criteria-quotas)  3\. Multi-criteria quotas

Create complex quotas using multiple conditions:

Copy

```
Hidden Field: product = "mobile"
AND
Question Response: satisfaction = "very satisfied"
```

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management\#partial-vs-complete-responses)  Partial vs. complete responses

By default, Quota Management includes partial responses in quota counts. You can change this behavior by configuring the quota to only count complete responses.

This means if a respondent starts but doesn’t complete the survey, they may still count toward your quota if they’ve answered the qualifying questions.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/quota-management\#quota-monitoring)  Quota monitoring

## Live Quota Status

Monitor your quotas in real-time through the dashboard in the survey summary:

- **Current Count**: See how many responses each quota has collected
- **Progress Bars**: Visual representation of quota completion
- **Status Indicators**: Active, completed, or paused quota status

Was this page helpful?

YesNo

[Email Follow-ups](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/email-followups) [Spam Protection](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/spam-protection)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.