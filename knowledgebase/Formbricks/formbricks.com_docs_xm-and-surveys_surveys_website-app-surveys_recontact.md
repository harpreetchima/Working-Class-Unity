---
url: "https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/recontact"
title: "Recontact Options - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/recontact#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Features

Recontact Options

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

- [When do Recontact Options come into play?](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/recontact#when-do-recontact-options-come-into-play)
- [Recontact Options](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/recontact#recontact-options)
- [Project-wide Global Waiting Time](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/recontact#project-wide-global-waiting-time)
- [Overriding Global Waiting Time for a Specific Survey](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/recontact#overriding-global-waiting-time-for-a-specific-survey)

Features

# Recontact Options

Recontact options in Formbricks enable you to manage how often and under what conditions a survey is shown to a user. This feature is crucial for balancing effective feedback collection with a positive user experience by preventing survey fatigue.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/recontact\#when-do-recontact-options-come-into-play)  When do Recontact Options come into play?

Recontact options are the last layer of the logic that determines if a survey is shown to the current user. The logic goes as follows:

1. Targeting: Does the current user targeted to fill out this survey? If yes…
2. Trigger: Is the survey triggered? If yes…
3. **Recontact Options:** Should the survey be shown (again) to this user? That’s dependent on:

- Did the user see any survey recently (meaning, has Global Waiting Time passed)?
- Did the user see this specific survey already?
- How many times did the user see this specific survey already?
- Has the user already responded to this survey?

As you can see, there are a lot of different cases to cover. Let’s have a closer look 👇

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/recontact\#recontact-options)  Recontact Options

By default, a survey is shown to each user only once.

You can adjust the default behavior by modifying the Recontact Options for each survey in the settings:

1. Open the Survey Editor for the survey you want to see & modify the Recontact Options for.
2. Select the Settings Tab.
3. Ensure your Survey type is set to **App Survey**.

![Choose Survey Type as App Survey](https://mintcdn.com/formbricks/Y0_rk27eZSQCDXfm/images/xm-and-surveys/surveys/website-app-surveys/recontact/app-survey.webp?fit=max&auto=format&n=Y0_rk27eZSQCDXfm&q=85&s=96da70b38d458914e90aff255cbaa7ac)

1. Scroll down to the Recontact Options section.

Available Recontact Options include:

- **Show only once**: (default) Displays the survey a single time, regardless of whether it was completed.
- **Until they Submit a Response**: If tareting matches and trigger fires, Formbricks keeps showing the survey until the user submits a response.
- **Keep Showing while Conditions Match**: Always shows the survey while specific conditions are met. Useful for continuous feedback collection, such as in [Docs Feedback Survey](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/docs-feedback) or the [Feedback Box](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feedback-box).

![Choose Recontanct Options for the Survey](https://mintcdn.com/formbricks/DApr5ZMISC_jbIxa/images/xm-and-surveys/surveys/website-app-surveys/recontact/survey-recontact.webp?fit=max&auto=format&n=DApr5ZMISC_jbIxa&q=85&s=8dd81c2446c80c4c9401d1a89370cc7d)

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/recontact\#project-wide-global-waiting-time)  Project-wide Global Waiting Time

The Global Waiting Time is a universal blocker to make sure that no user sees too many surveys. This is particularly helpful when several teams of large organisations use Formbricks at the same time.

The default Global Waiting Time is set to 7 days.

To adjust the Global Waiting Time:

1. Visit Formbricks Settings
2. Go to Project Settings
3. Find the **Recontact Waiting Time** section
4. Modify the interval (in days) as needed.

![Formbricks Project-Wide Wait Time](https://mintcdn.com/formbricks/Y0_rk27eZSQCDXfm/images/xm-and-surveys/surveys/website-app-surveys/recontact/global-wait-time.webp?fit=max&auto=format&n=Y0_rk27eZSQCDXfm&q=85&s=f0c1f14c3d42302ffbe04f9f30b65d6f)

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/recontact\#overriding-global-waiting-time-for-a-specific-survey)  Overriding Global Waiting Time for a Specific Survey

For specific surveys, you may need to override the default waiting time. Below is how you can do that:

1. In the Survey Editor, access the Settings Tab.
2. Find the Ignore Waiting Time between Surveys toggle under Recontact Options.
3. Enable this toggle to bypass the global setting.
4. Set a custom recontact period:   - **Always Show Survey**: Displays the survey whenever triggered, ignoring the waiting time.
   - **Wait `X` days before showing this survey again**: Sets a specific interval before the survey can be shown again.

![Ignore Global Waiting Time for a Specific Survey](https://mintcdn.com/formbricks/DApr5ZMISC_jbIxa/images/xm-and-surveys/surveys/website-app-surveys/recontact/ignore-wait-time.webp?fit=max&auto=format&n=DApr5ZMISC_jbIxa&q=85&s=fd50a4641c6468dde4cf13577f8c13dd)

* * *

Still struggling or is something not working as expected? [Join us in Github Discussions](https://github.com/formbricks/formbricks/discussions) and we’d be glad to assist you!

Was this page helpful?

YesNo

[User Identification](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/user-identification) [Survey % of Users](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/show-survey-to-percent-of-users)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.