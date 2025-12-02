---
url: "https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/user-identification"
title: "User Identification - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/user-identification#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Features

User Identification

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

- [Understanding Identified vs Unidentified Users](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/user-identification#understanding-identified-vs-unidentified-users)
- [Identified Users](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/user-identification#identified-users)
- [Setting User ID](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/user-identification#setting-user-id)
- [Setting Custom User Attributes](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/user-identification#setting-custom-user-attributes)
- [Setting User Language](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/user-identification#setting-user-language)
- [Logging Out Users](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/user-identification#logging-out-users)

Features

# User Identification

User Identification helps you to not only segment your users but also to see more information about the user who responded to a survey. This helps you to target surveys to specific user segments and see more information about the user who responded to a survey.

User identification is part of the Formbricks [Enterprise Edition](https://formbricks.com/docs/self-hosting/advanced/license).

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/user-identification\#understanding-identified-vs-unidentified-users)  Understanding Identified vs Unidentified Users

In Formbricks, understanding the difference between identified and unidentified users is crucial for effective survey segmentation and targeted feedback collection.

| Feature | Unidentified Users | Identified Users |
| --- | --- | --- |
| Show surveys based on **trigger** actions | ✅ | ✅ |
| Set **recontact details** to avoid survey fatique | ✅ | ✅ |
| Target a subset of users using **attributes & segments** | ❌ | ✅ |
| Collect **user information** in Formbricks | ❌ | ✅ |
| Track **custom attributes** | ❌ | ✅ |
| Counts towards your **monthly tacked user (MTU)** limit | ❌ | ✅ |
| Recommended for **public-facing websites** | ✅ | ❌ |
| Recommended for **web apps after login** | ❌ | ✅ |

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/user-identification\#identified-users)  Identified Users

Identified users are those for whom specific information has been set, notably the userId. This identification allows for more precise targeting of surveys and a deeper understanding of the feedback provided. When enabled, all information specified by you and all actions are sent to Formbricks.This method is recommended for applications where users are required to log in and will often return.

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/user-identification\#setting-user-id)  Setting User ID

To enable user identification, call the `setUserId` function of Formbricks and pass the user id. The user will show up in the Formbricks dashboard. Use a unique string, like a database ID or a unique email address. You can also anonymize the identifier, as long as it is unique for each user.

Copy

```
formbricks.setUserId("<user-id>");
```

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/user-identification\#setting-custom-user-attributes)  Setting Custom User Attributes

Use the `setAttribute` function to set custom attributes for the user (e.g., name, plan).

Setting Custom Attributes

Copy

```
formbricks.setAttribute("Plan", "free");
```

The `setAttribute` function works like this:

Setting Custom Attributes

Copy

```
formbricks.setAttribute("attribute_key", "attribute_value");
```

You can also set multiple attributes at once by passing an object to the `setAttributes` function:

Setting Multiple Custom Attributes

Copy

```
formbricks.setAttributes({
  attribute_key_1: "attribute_value_1",
  attribute_key_2: "attribute_value_2",
});
```

**Note**: the number of different attribute classes (e.g., “Plan,” “First Name,” etc.) is currently limited
to 150 attributes per environment.

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/user-identification\#setting-user-language)  Setting User Language

Use the `setLanguage` function to set the user’s preferred language for surveys. This allows you to display surveys in the user’s language when multi-language surveys are enabled. You can pass either the ISO language code (e.g., “de”, “fr”, “es”) or the language alias you configured in your project settings.

Setting User Language

Copy

```
formbricks.setLanguage("de"); // ISO identifier or Alias set when creating language
```

If a user has a language assigned, a survey has multi-language activated and it is missing a translation in
the language of the user, the survey will not be displayed. Learn more about [Multi-language Surveys](https://formbricks.com/docs/docs/xm-and-surveys/surveys/general-features/multi-language-surveys).

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/user-identification\#logging-out-users)  Logging Out Users

When a user logs out of your webpage, also log them out of Formbricks to prevent activity from being linked to the wrong user. Use the logout function:

Logging out User

Copy

```
formbricks.logout();
```

Was this page helpful?

YesNo

[Advanced Targeting](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/advanced-targeting) [Recontact Options](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/recontact)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.