---
url: "https://formbricks.com/docs/xm-and-surveys/surveys/general-features/multi-language-surveys"
title: "Multi-language Surveys - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/multi-language-surveys#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

General Features

Multi-language Surveys

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

- [Creating a Multi-language Survey](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/multi-language-surveys#creating-a-multi-language-survey)
- [App Surveys Configuration](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/multi-language-surveys#app-surveys-configuration)
- [Link Surveys Configuration](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/multi-language-surveys#link-surveys-configuration)
- [RTL Language Support](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/multi-language-surveys#rtl-language-support)
- [How RTL Support Works](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/multi-language-surveys#how-rtl-support-works)
- [Setting Up RTL Languages](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/multi-language-surveys#setting-up-rtl-languages)

General Features

# Multi-language Surveys

Create surveys that support multiple languages using translations. This helps you reach a diverse audience without making separate surveys for each language. It also simplifies survey creation, delivery, and analysis for multilingual audiences.

Multi-language surveys are part of the Formbricks [Enterprise Edition](https://formbricks.com/docs/self-hosting/advanced/license)

How to deliver a specific language depends on the survey type (app or link survey):

- App & Website survey: Set a `language` attribute for the user. [Read this guide for App Surveys](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/multi-language-surveys#app-surveys-configuration)
- Link survey: Add a `lang` parameter in the survey URL. [Read this guide for Link Surveys](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/multi-language-surveys#link-surveys-configuration)

Multi-language in-app surveys with Formbricks - YouTube

[Photo image of Formbricks](https://www.youtube.com/channel/UC5FuBjPjhs6_Pf02wpXfAAQ?embeds_referring_euri=https%3A%2F%2Fformbricks.com%2F)

Formbricks

144 subscribers

[Multi-language in-app surveys with Formbricks](https://www.youtube.com/watch?v=Vol5zjYIoos)

Formbricks

Search

Watch later

Share

Copy link

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

More videos

## More videos

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

[Watch on www.youtube.com](https://www.youtube.com/watch?v=Vol5zjYIoos)

Watch on

* * *

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/multi-language-surveys\#creating-a-multi-language-survey)  Creating a Multi-language Survey

1

Configure Survey Languages

Go to Configuration and open the **Survey Languages tab**:![Survey Configuration](https://mintcdn.com/formbricks/-OXulQKHaX30TsqK/images/xm-and-surveys/surveys/general-features/multi-language-surveys/project-configuration.webp?fit=max&auto=format&n=-OXulQKHaX30TsqK&q=85&s=b2a614b314a8a0745a3cdd69a00e8ddb)Click on the **Edit languages** button to add a new language to your survey.Select the preferred language from the dropdown and assign an identifier Alias. Click the **Add language** button to add the language to your project:![Add Multiple Languages to your Project](https://mintcdn.com/formbricks/-OXulQKHaX30TsqK/images/xm-and-surveys/surveys/general-features/multi-language-surveys/add-languages.webp?fit=max&auto=format&n=-OXulQKHaX30TsqK&q=85&s=2579babcd45fcdbd3d95fe0d9cfb4f0d)You can come back to this page anytime to add more languages or remove existing ones.

2

Create or Edit Your Survey

Return to the dashboard to create a new survey or edit an existing one:![Survey Overview](https://mintcdn.com/formbricks/-OXulQKHaX30TsqK/images/xm-and-surveys/surveys/general-features/multi-language-surveys/surveys-home.webp?fit=max&auto=format&n=-OXulQKHaX30TsqK&q=85&s=39d8d158ddeb311b4fef01c307bd9ce4)

3

Enable Multi-language Support

In the survey editor, scroll down to the **Multiple Languages** section at the bottom and enable the toggle next to it:![Enable Multi-language for a survey](https://mintcdn.com/formbricks/-OXulQKHaX30TsqK/images/xm-and-surveys/surveys/general-features/multi-language-surveys/enable-multi-lang.webp?fit=max&auto=format&n=-OXulQKHaX30TsqK&q=85&s=7adb07e648ebd6fe279e0d4cfb7619ee)Choose a **Default Language** for your survey.

Changing the default language will reset all the translations you have made for the survey.

4

Add Supported Languages

Add the languages from the dropdown that you want to support in your survey:![Enable Multi-language for a survey](https://mintcdn.com/formbricks/-OXulQKHaX30TsqK/images/xm-and-surveys/surveys/general-features/multi-language-surveys/add-language-in-survey.webp?fit=max&auto=format&n=-OXulQKHaX30TsqK&q=85&s=17ea5df1ce9ca872b4056ba7c288849f)

5

Preview and Translate Content

You can now see the survey in the selected language by clicking on the language dropdown in any of the questions.Now you can translate all survey content, including questions, options, and button placeholders, into the selected language.

6

Publish Your Survey

Once you are done, click on the **Publish** button to save the survey.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/multi-language-surveys\#app-surveys-configuration)  App Surveys Configuration

1

Set Up Language for Users

After you setup the Formbricks SDK for your user, you can call the `setLanguage` function with the language code. This can be either the ISO identifier or the Alias you set when creating the language. The `language` attribute makes sure that this user only sees surveys with a translation in this specific language available.

Copy

```
Formbricks.setup({
  environmentId: "<environment-id>",
  appUrl: "<app-url>", // use PUBLIC_URL if you are using multi-domain setup, otherwise use WEBAPP_URL
});

Formbricks.setLanguage("de"); // ISO identifier or Alias set when creating language
```

If a user has a language assigned, a survey has multi-language activated and it is missing a translation in
the language of the user, the survey will not be displayed.

2

Start Collecting Responses

That’s it! Now, users with the language attribute set will see the survey in their preferred language. You can start collecting responses in multiple languages and filter them by language on the summary page.

* * *

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/multi-language-surveys\#link-surveys-configuration)  Link Surveys Configuration

For link surveys, the translation delivery is dependent on the `lang` URL parameter.

1

Publish Your Survey

After publishing the survey, just copy the survey link and append the `lang` query parameter with the language alias you have set.

2

Create Language-Specific URLs

For example, if you have set the alias for French as `fr`, you can share the survey link as[`https://your-survey-url.com?lang=fr`](https://your-survey-url.com/?lang=fr)Here are two examples:

- English: [https://app.Formbricks.com/s/clptfos2i1pj516pvhxqyu3bn?lang=en](https://app.formbricks.com/s/clptfos2i1pj516pvhxqyu3bn?lang=en)
- German: [https://app.Formbricks.com/s/clptfos2i1pj516pvhxqyu3bn?lang=de](https://app.formbricks.com/s/clptfos2i1pj516pvhxqyu3bn?lang=de)

Without the `lang` parameter, Formbricks will show the survey in the default language you have set.

3

Start Collecting Responses

You can now start collecting responses in multiple languages!

* * *

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/multi-language-surveys\#rtl-language-support)  RTL Language Support

Formbricks fully supports Right-to-Left (RTL) languages such as Arabic, Hebrew, Persian, and Urdu. When you add an RTL language to your survey, the survey interface automatically adjusts to display content from right to left.

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/multi-language-surveys\#how-rtl-support-works)  How RTL Support Works

- Text alignment automatically switches to right-to-left
- Survey layout and UI elements adjust to RTL orientation
- Button placement and navigation flow adapt to RTL reading direction
- Form elements maintain proper RTL formatting

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/multi-language-surveys\#setting-up-rtl-languages)  Setting Up RTL Languages

1

Add RTL Language

Add an RTL language (like Arabic or Hebrew) in the **Survey Languages** settings

2

Create Translations

Create translations for your survey content in the RTL language

3

Automatic RTL Display

The survey will automatically display in RTL format when that language is selected![RTL Language Support](https://mintcdn.com/formbricks/-OXulQKHaX30TsqK/images/xm-and-surveys/surveys/general-features/multi-language-surveys/rtl-support.webp?fit=max&auto=format&n=-OXulQKHaX30TsqK&q=85&s=7178d6d7a3acfe073e1fb4f890dfd34d)

* * *

**Need help?** [Reach out in Github Discussions](https://github.com/formbricks/formbricks/discussions)

Was this page helpful?

YesNo

[Limit Submissions](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/limit-submissions) [Partial Submissions](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/partial-submissions)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.