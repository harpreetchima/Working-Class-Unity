---
url: "https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions"
title: "Actions - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Features

Actions

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

- [How Do Actions Work?](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions#how-do-actions-work)
- [Setting Up No-Code Actions](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions#setting-up-no-code-actions)
- [1\. Click Action](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions#1-click-action)
- [2\. Page View Action](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions#2-page-view-action)
- [3\. Exit Intent Action](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions#3-exit-intent-action)
- [4\. 50% Scroll Action](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions#4-50%-scroll-action)
- [Page Filter](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions#page-filter)
- [Setting Up Code Actions](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions#setting-up-code-actions)

Features

# Actions

Actions are predefined events within your app that prompt Formbricks to display a survey when triggered. These are detected by the Formbricks widget, which then presents the appropriate survey based on your predefined settings.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions\#how-do-actions-work)  **How Do Actions Work?**

1

User performs action

The user performs an action in your application.

2

Formbricks widget detects action

The embedded widget (SDK) detects the action, if you set up a [No Code\\
Action](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions#setting-up-no-code-actions) or a [Code\\
Action](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions#setting-up-code-actions) to do so.

3

Check for survey trigger

If a survey is set to trigger on that action, Formbricks checks if the user or visitor qualifies.

4

Check for user or visitor qualification

If the user or visitor already filled out a survey in the past couple of days (see [Global Waiting Time](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/recontact#project-wide-global-waiting-time)), the survey will not be shown to prevent survey fatigue.Also, if this user or visitor has seen this specific survey before, Formbricks might not show it as this is dependent on the [Recontact Options](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/recontact).

5

Show survey

If all conditions match, the survey is shown.

Tying surveys to specific user actions enables **context-aware surveying**: You make sure that your user
research is relevant to the current user context which leads to sign **ificantly higher response and**
**completions rates** as well as lower survey fatigue.

**Important**: Any changes to actions, surveys, or environment configuration will take about 1 minute to
reflect in your app/website running the formbricks sdk with debug mode enabled due to server-side caching.
This includes new actions, modified action configurations, and survey trigger updates. For quick updates
during development and testing, you can enable [Debug\\
Mode](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/framework-guides#activate-debug-mode) in your SDK
configuration.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions\#setting-up-no-code-actions)  **Setting Up No-Code Actions**

Formbricks offers an intuitive No-Code interface that allows you to configure actions without needing to write any code.

No Code Actions are **not available for surveys in mobile apps**. No Code Action tracking are heavily
dependent on JavaScript and most mobile apps are compiled into a different programming language. To track
user actions in mobile apps use [Code\\
Actions.](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions#setting-up-code-actions)

1

Visit the Configuration tab and click on the \`Website & App Connection\`

![Action overview on Formbricks Open Source Survey Solution](https://mintcdn.com/formbricks/0LmyYl0sNB6xZO2K/images/xm-and-surveys/surveys/website-app-surveys/actions/actions-view.webp?fit=max&auto=format&n=0LmyYl0sNB6xZO2K&q=85&s=4d2ef94656cdc2fb04200b4447c934a7)

2

Click on 'Add Action' in the top right corner to see the following:

![Add action to open source in app survey](https://mintcdn.com/formbricks/Y0_rk27eZSQCDXfm/images/xm-and-surveys/surveys/website-app-surveys/actions/i2.webp?fit=max&auto=format&n=Y0_rk27eZSQCDXfm&q=85&s=7827fc976999e30f885b017ae19c1d26)

There are four types of No-Code actions:

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions\#1-click-action)  **1\. Click Action**

![Add click action to open source in app survey](https://mintcdn.com/formbricks/Y0_rk27eZSQCDXfm/images/xm-and-surveys/surveys/website-app-surveys/actions/click-action.webp?fit=max&auto=format&n=Y0_rk27eZSQCDXfm&q=85&s=d49531ae8581b47070ea3dcb6023fc33)A Click Action is triggered when a user clicks on a specific element within your application. You can define the element’s inner text, CSS selector or both to trigger the survey.

- **Inner Text**: Checks if the innerText of a clicked HTML element, like a button label, matches a specific text. This action allows you to display a survey based on text interactions within your application.
- **CSS Selector**: Verifies if a clicked HTML element matches a provided CSS selector, such as a class, ID, or any other CSS selector used in your website. It enables survey triggers based on element interactions.
- **Both**: Only if both is true, the action is triggered

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions\#2-page-view-action)  **2\. Page View Action**

![Add page view action to open source in app survey](https://mintcdn.com/formbricks/Y0_rk27eZSQCDXfm/images/xm-and-surveys/surveys/website-app-surveys/actions/page-view.webp?fit=max&auto=format&n=Y0_rk27eZSQCDXfm&q=85&s=e7a17d361bf0495260ebc9f40d6ff7ab)This action is triggered when a user visits a page within your application.

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions\#3-exit-intent-action)  **3\. Exit Intent Action**

![Add exit intent action to open source in app survey](https://mintcdn.com/formbricks/Y0_rk27eZSQCDXfm/images/xm-and-surveys/surveys/website-app-surveys/actions/exit-intent.webp?fit=max&auto=format&n=Y0_rk27eZSQCDXfm&q=85&s=a35dcd10af9bc0a2b9de7ff1aa63c9db)This action is triggered when a user is about to leave your application. It helps capture user feedback before they exit, providing valuable insights into user experiences and potential improvements.

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions\#4-50%-scroll-action)  **4\. 50% Scroll Action**

![Add 50% scroll action to open source in app survey](https://mintcdn.com/formbricks/Y0_rk27eZSQCDXfm/images/xm-and-surveys/surveys/website-app-surveys/actions/scroll.webp?fit=max&auto=format&n=Y0_rk27eZSQCDXfm&q=85&s=77d11d8d8d5c9e7b070f5c38171f2571)This action is triggered when a user scrolls through 50% of a page within your application. It helps capture user feedback at a specific point in their journey, enabling you to gather insights based on user interactions.This action is triggered when a user visits a specific page within your application. You can define the URL match conditions as follows:You can combine the url filters with any of the no-code actions to trigger the survey based on the URL match conditions.

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions\#page-filter)  **Page Filter**

You can limit action tracking to specific subpages of your website or web app by using the Page Filter. Here you can use a variety of URL filter settings:

- **exactMatch**: Triggers the action when the URL exactly matches the specified string.
- **contains**: Activates when the URL contains the specified substring.
- **startsWith**: Fires when the URL starts with the specified string.
- **endsWith**: Executes when the URL ends with the specified string.
- **notMatch**: Triggers when the URL does not match the specified condition.
- **notContains**: Activates when the URL does not contain the specified substring.
- **matchesRegex**: Activates when the URL matches the pattern from the specified string.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions\#setting-up-code-actions)  **Setting Up Code Actions**

For more granular control, you can implement actions directly in your code:

1

Configure action in Formbricks

First, add the action via the Formbricks web interface to make it available for survey configuration:![Add a code action to open source in app survey](https://mintcdn.com/formbricks/Y0_rk27eZSQCDXfm/images/xm-and-surveys/surveys/website-app-surveys/actions/code-action.webp?fit=max&auto=format&n=Y0_rk27eZSQCDXfm&q=85&s=5adf1d306ebe2aaf0f082b0e23287dd6)

2

Add action tracking to your code

Use formbricks.track() to send an action event to Formbricks:

Copy

```
formbricks.track("action");
```

Here is an example of how to fire an action when a user clicks a button:

Copy

```
const handleClick = () => {
  formbricks.track("Button Clicked");
};

return <button onClick={handleClick}>Click Me</button>;
```

Was this page helpful?

YesNo

[Google Tag Manager](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/google-tag-manager) [Advanced Targeting](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/advanced-targeting)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.