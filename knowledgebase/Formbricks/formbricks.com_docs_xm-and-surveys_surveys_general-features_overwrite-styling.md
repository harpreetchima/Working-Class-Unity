---
url: "https://formbricks.com/docs/xm-and-surveys/surveys/general-features/overwrite-styling"
title: "Custom Styling - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/overwrite-styling#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

General Features

Custom Styling

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

- [Overwrite Styling Theme](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/overwrite-styling#overwrite-styling-theme)
- [Overwrite CSS Styles for App & Website Surveys](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/overwrite-styling#overwrite-css-styles-for-app-&-website-surveys)
- [Fixes & Improvements:](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/overwrite-styling#fixes-&-improvements:)

General Features

# Custom Styling

Overwrite the global styling theme for individual surveys to create unique styles for each survey.

Overwrite the global styling theme for individual surveys to create unique styles for each survey.

To set a styling theme for all surveys, please see the [Styling Theme](https://formbricks.com/docs/xm-and-surveys/core-features/styling-theme) manual.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/overwrite-styling\#overwrite-styling-theme)  Overwrite Styling Theme

1. In the **Survey Editor** of the survey you want to style, navigate to the **Styling** tab:![Styling tab in survey editor](https://mintcdn.com/formbricks/-OXulQKHaX30TsqK/images/xm-and-surveys/surveys/general-features/overwrite-styling/step-nine.webp?fit=max&auto=format&n=-OXulQKHaX30TsqK&q=85&s=2b2d8cea2064440eebd11289ebe0849f)
2. Activate the **Add Custom Styles** toggle to override the default project styling:![Add Custom Styles toggle](https://mintcdn.com/formbricks/-OXulQKHaX30TsqK/images/xm-and-surveys/surveys/general-features/overwrite-styling/step-ten.webp?fit=max&auto=format&n=-OXulQKHaX30TsqK&q=85&s=3a4f99ade71f33a70b949cbbcb03fdd6)/>
3. Customize your survey’s style as needed:![Custom styling options](https://mintcdn.com/formbricks/-OXulQKHaX30TsqK/images/xm-and-surveys/surveys/general-features/overwrite-styling/step-eleven.webp?fit=max&auto=format&n=-OXulQKHaX30TsqK&q=85&s=6f377e6dbd839c7149e6c47d517c010a)

Just hit the **Save** button to apply your changes. Your survey is now ready to impress with its unique look!

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/overwrite-styling\#overwrite-css-styles-for-app-&-website-surveys)  Overwrite CSS Styles for App & Website Surveys

You can overwrite the default CSS styles for app and website surveys by adding the following CSS to your global CSS file (e.g., `globals.css`):**Do not** change the CSS variable names, as Formbricks uses them to identify styling elements. You can adjust the values to fit your design. Below are sample values for reference:

Copy

```
/* Overwrite Formbricks default styles */
--fb-brand-color: red;
--fb-brand-text-color: white;
--fb-border-color: green;
--fb-border-color-highlight: rgb(13, 13, 12);
--fb-focus-color: red;
--fb-heading-color: yellow;
--fb-subheading-color: green;
--fb-info-text-color: orange;
--fb-signature-text-color: blue;
--fb-survey-background-color: black;
--fb-accent-background-color: rgb(13, 13, 12);
--fb-accent-background-color-selected: red;
--fb-placeholder-color: white;
--fb-rating-fill: rgb(13, 13, 12);
--fb-rating-hover: green;
--fb-back-btn-border: blue;
--fb-submit-btn-border: transparent;
--fb-rating-selected: black;
```

Check out an example in our Demo project.Funky Survey Examples
Super Mario
“I guess he won’t let himself be limited by radio buttons and do all three things!”![Super Mario survey example](https://mintcdn.com/formbricks/-OXulQKHaX30TsqK/images/xm-and-surveys/surveys/general-features/overwrite-styling/mario.webp?fit=max&auto=format&n=-OXulQKHaX30TsqK&q=85&s=e33426155ed8dd90a9eebdf68ede9cfd)Hipster Living
“Does your monstera get enough water?”![Hipster Living survey example](https://mintcdn.com/formbricks/-OXulQKHaX30TsqK/images/xm-and-surveys/surveys/general-features/overwrite-styling/hipster-living.webp?fit=max&auto=format&n=-OXulQKHaX30TsqK&q=85&s=ad67de91e5f163d427638e6b882d2f61)Windows XP
“Hach, nostalgia. It made us want to play Mafia.”![Windows XP survey example](https://mintcdn.com/formbricks/-OXulQKHaX30TsqK/images/xm-and-surveys/surveys/general-features/overwrite-styling/windows-xp.webp?fit=max&auto=format&n=-OXulQKHaX30TsqK&q=85&s=ba9650398c1c5c9c23388ddc176a6798)Who’s a Good Boy?
“Things you’ve likely said to your dog.”![Dog-themed survey example](https://mintcdn.com/formbricks/-OXulQKHaX30TsqK/images/xm-and-surveys/surveys/general-features/overwrite-styling/doggo.webp?fit=max&auto=format&n=-OXulQKHaX30TsqK&q=85&s=a53758fe5e028e53b78ac857570e9e13)

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/overwrite-styling\#fixes-&-improvements:)  Fixes & Improvements:

- **Numbered list formatting**: Fixed numbering issues.
- **Consistent image alt text**: Updated descriptions for clarity.
- **CSS syntax correction**: Removed unnecessary text before code block.
- **Grammar & punctuation fixes**: Ensured clarity and smooth readability.

This should now display correctly on Mintlify! Let me know if you need further tweaks.

Was this page helpful?

YesNo

[Conditional Logic](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/conditional-logic) [Hidden Fields](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/hidden-fields)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.