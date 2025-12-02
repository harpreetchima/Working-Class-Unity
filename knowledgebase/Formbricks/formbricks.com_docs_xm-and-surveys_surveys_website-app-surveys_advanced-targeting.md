---
url: "https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/advanced-targeting"
title: "Advanced Targeting - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/advanced-targeting#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Features

Advanced Targeting

[Overview](https://formbricks.com/docs/overview/introduction) [XM & Surveys](https://formbricks.com/docs/xm-and-surveys/overview) [Self Hosting](https://formbricks.com/docs/self-hosting/overview) [Development](https://formbricks.com/docs/development/overview) [API v1 Reference](https://formbricks.com/docs/api-reference/rest-api) [API v2 Reference (Beta)](https://formbricks.com/docs/api-v2-reference/introduction)

##### XM & Surveys

- [XM & Surveys](https://formbricks.com/docs/xm-and-surveys/overview)

##### Surveys

- General Features

- Link Surveys

- Website & App Surveys

  - [Quickstart](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/quickstart)
  - [Framework Guides](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/framework-guides)
  - [Google Tag Manager](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/google-tag-manager)
  - Features

    - [Actions](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions)
    - [Advanced Targeting](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/advanced-targeting)
    - [User Identification](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/user-identification)
    - [Recontact Options](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/recontact)
    - [Survey % of Users](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/show-survey-to-percent-of-users)
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

- [When to use Advanced Targeting?](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/advanced-targeting#when-to-use-advanced-targeting)
- [How does Advanced Targeting work?](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/advanced-targeting#how-does-advanced-targeting-work)
- [Segment Configuration](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/advanced-targeting#segment-configuration)

Features

# Advanced Targeting

Advanced Targeting allows you to show surveys to a specific segment of your users. You can target surveys based on user attributes, device type, and more. This helps you get more relevant insights while keeping survey fatigue at a minimum. After the initial setup, you can target any segment without touching code.

Advanced Targeting is part of the [Enterprise Edition](https://formbricks.com/docs/self-hosting/advanced/license).

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/advanced-targeting\#when-to-use-advanced-targeting)  When to use Advanced Targeting?

Advanced Targeting helps you achieve a number of goals:

1. **Relevance**: Keep survey content relevant to respondents.
2. **Cohort-analysis**: Survey specific user cohorts only.
3. **Statistical Relevance:** When surveying a smaller subset of users, statistical relevance is reached with a lot less responses.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/advanced-targeting\#how-does-advanced-targeting-work)  How does Advanced Targeting work?

1

Create Segment

To get started, go to the Contacts tab and create a new Segment:![Create a new segment](https://mintcdn.com/formbricks/DApr5ZMISC_jbIxa/images/xm-and-surveys/surveys/website-app-surveys/targeting/contacts.webp?fit=max&auto=format&n=DApr5ZMISC_jbIxa&q=85&s=82efc2ab8d864e2afa7deb9058c45d4d)

2

Configure Segment based on attributes

In the Segment editor, you can configure your Segment with a combination of Attributes, Segments and Devices. If a user matches either or all of the criteria, they become part of the Segment. See [Segment Configuration](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/advanced-targeting#segment-configuration) below.

3

Create a survey of type Website & App

Create a new survey and go to Settings to change it to Website & App survey:![Create a new segment of type in-app](https://mintcdn.com/formbricks/DApr5ZMISC_jbIxa/images/xm-and-surveys/surveys/website-app-surveys/targeting/survey-type.webp?fit=max&auto=format&n=DApr5ZMISC_jbIxa&q=85&s=835da071e04a6834cdc77c584d32424d)

4

Choose Segment in Targeting options

![Choose Segment in Targeting options](https://mintcdn.com/formbricks/DApr5ZMISC_jbIxa/images/xm-and-surveys/surveys/website-app-surveys/targeting/target-audience.webp?fit=max&auto=format&n=DApr5ZMISC_jbIxa&q=85&s=d35bc6f3c27fa747748f23a9280f8bfd)

Publish your survey

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/advanced-targeting\#segment-configuration)  Segment Configuration

There are three means to move Contacts in or out of Segments: **Attributes**, other **Segments** and **Devices**:

1. **Attributes**: If the value of a specific attribute matches, the user becomes part of the Segment.

![Attribute filter](https://mintcdn.com/formbricks/DApr5ZMISC_jbIxa/images/xm-and-surveys/surveys/website-app-surveys/targeting/attribute-filter.webp?fit=max&auto=format&n=DApr5ZMISC_jbIxa&q=85&s=ffef551f450f33be12e18d6228dcd601)

2. **Segments**: You can nest Segments meaning that if a user is or is not part of another Segment, they can be included or excluded![Segments filter](https://mintcdn.com/formbricks/DApr5ZMISC_jbIxa/images/xm-and-surveys/surveys/website-app-surveys/targeting/segments-filter.webp?fit=max&auto=format&n=DApr5ZMISC_jbIxa&q=85&s=bf815e4ffb2c795c5915834f5f3eba62)
3. **Devices**: If a user uses a Phone or Desktop, you can include or exclude them![Devices filter](https://mintcdn.com/formbricks/DApr5ZMISC_jbIxa/images/xm-and-surveys/surveys/website-app-surveys/targeting/device-filter.webp?fit=max&auto=format&n=DApr5ZMISC_jbIxa&q=85&s=164483f324420d43819e81b95819b697)
4. **Filter Groups:** You can group any of the above conditions in group and connect them logically with `AND` or `OR`. This allows for maximum granularity.

Was this page helpful?

YesNo

[Actions](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions) [User Identification](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/user-identification)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.