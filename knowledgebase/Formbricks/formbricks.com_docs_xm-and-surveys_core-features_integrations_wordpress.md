---
url: "https://formbricks.com/docs/xm-and-surveys/core-features/integrations/wordpress"
title: "Wordpress - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/wordpress#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Integrations

Wordpress

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

- [TLDR](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/wordpress#tldr)
- [Step 1: Install the Formbricks WordPress plugin](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/wordpress#step-1:-install-the-formbricks-wordpress-plugin)
- [Step 2: Create a Formbricks Account](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/wordpress#step-2:-create-a-formbricks-account)
- [Step 3: Find and copy the environmentId](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/wordpress#step-3:-find-and-copy-the-environmentid)
- [Step 4: Copy the environmentId to the WordPress Plugin Settings](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/wordpress#step-4:-copy-the-environmentid-to-the-wordpress-plugin-settings)
- [Step 5: Create survey on trigger “New Session”](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/wordpress#step-5:-create-survey-on-trigger-%E2%80%9Cnew-session%E2%80%9D)
- [Step 6: Reload your page to check out your survey 🤓](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/wordpress#step-6:-reload-your-page-to-check-out-your-survey-%F0%9F%A4%93)
- [Doesn’t work?](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/wordpress#doesn%E2%80%99t-work)

Integrations

# Wordpress

Target specific visitors with a survey on your WordPress page using Formbricks for free. Show survey on specific page or on button click.

To run a targeted survey on your WordPress website, Formbricks is the way to go! With our generous free plan and open source tech, you get everything you need to get started and keep full control over your data.

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/wordpress\#tldr)  TLDR

1. Install the Formbricks WordPress plugin
2. Create a [free Formbricks account](https://app.formbricks.com/auth/signup)
3. Find and copy the `environment id`
4. Copy the environment id into the right field in the plugin settings
5. Create survey on trigger “New Session” to test it

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/wordpress\#step-1:-install-the-formbricks-wordpress-plugin)  Step 1: Install the Formbricks WordPress plugin

As long as the Formbricks plugin is in review, please download it from our [GitHub repository directly.](https://github.com/formbricks/wordpress)![Run targeted website survye on any WordPress site](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/wordpress/1-wordpress-targeted-survey-on-website-free.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=a9fffbb869cf6d24eb1f9d984a39cd43)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/wordpress\#step-2:-create-a-formbricks-account)  Step 2: Create a Formbricks Account

This is super straight forward: Go to [app.formbricks.com/auth/signup](https://app.formbricks.com/auth/signup), create the account, verify your email and you’re in!When you see this screen, you’re there:![Free HotJar survey alternative open source](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/wordpress/2-run-website-survey-wordpress-targeted-for-free.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=da1cab8573b3981febdc6c8f22854f69)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/wordpress\#step-3:-find-and-copy-the-environmentid)  Step 3: Find and copy the environmentId

Go to `Configuration` \> `Website & App Connection` where you’ll find your environmentId:![Run targeted surveys for free on WordPress pages](https://mintcdn.com/formbricks/Q9LOxgpWHulOxfHK/images/xm-and-surveys/core-features/integrations/wordpress/3-wordpress-setup-survey-on-website-targeted-free-open-source.webp?fit=max&auto=format&n=Q9LOxgpWHulOxfHK&q=85&s=9a6f08cc42f01b599929b3c93bf3fc0f)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/wordpress\#step-4:-copy-the-environmentid-to-the-wordpress-plugin-settings)  Step 4: Copy the environmentId to the WordPress Plugin Settings

In your WordPress instance, go to the Formbricks Plugin settings and copy the environmentId in the correct field:![Free and open source HotJar survey on WordPress page](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/wordpress/step-4-copy-to-wordpress-for-free-targeted-survey.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=645e80231bb6cfdff2ef66de53cad002)Then click the button at the bottom to see if the connection worked.

If you don’t use our Cloud, you also have to update the API Host

Great!

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/wordpress\#step-5:-create-survey-on-trigger-%E2%80%9Cnew-session%E2%80%9D)  Step 5: Create survey on trigger “New Session”

Now that all is setup, we create a survey to display an example survey. Create a survey and open survey editor.Keep the content for now, click on the Settings tab:![Free and open source HotJar survey on WordPress page](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/wordpress/4-wordpress-website-survey-target-visitor-free.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=9ec5b7ef6b0199582166ff5d845bb400)Here we do three things:

1. Change survey type to **App Survey** or **Website Survey**(for public facing)
2. Select trigger “New Session”
3. Publish

![Open Source survey on targeted website wordpress](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/wordpress/6-targeted-survey-on-wordpress-website-for-free.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=77a3397cdaf7d770aa3c7a2e40aa2ce8)When you see this page, you did it!![Run free an open source targeted survey on any page](https://mintcdn.com/formbricks/PoRbKmWNh09zaWpR/images/xm-and-surveys/core-features/integrations/wordpress/7-wordpress-free-hotjar-survey-open-source-website-survey-hotjar.webp?fit=max&auto=format&n=PoRbKmWNh09zaWpR&q=85&s=a888a300c44ad513c5aff08e60ee7d81)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/wordpress\#step-6:-reload-your-page-to-check-out-your-survey-%F0%9F%A4%93)  Step 6: Reload your page to check out your survey 🤓

You did it! Reload the WordPress page and your survey should appear!

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/wordpress\#doesn%E2%80%99t-work)  Doesn’t work?

If you have any questions or need help, feel free to reach out to us on [Github Discussions](https://github.com/formbricks/formbricks/discussions)

Was this page helpful?

YesNo

[Slack](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/slack) [Zapier](https://formbricks.com/docs/xm-and-surveys/core-features/integrations/zapier)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.