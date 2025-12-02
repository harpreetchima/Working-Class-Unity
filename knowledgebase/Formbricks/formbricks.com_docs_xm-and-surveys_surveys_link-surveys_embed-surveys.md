---
url: "https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys"
title: "Embed Surveys - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Features

Embed Surveys

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

- [Embed Surveys in Your Web Page & Emails](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys#embed-surveys-in-your-web-page-&-emails)
- [Embedding Surveys in Web Pages](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys#embedding-surveys-in-web-pages)
- [Example of Embedding a Survey on a Web Page](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys#example-of-embedding-a-survey-on-a-web-page)
- [Iframe Events](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys#iframe-events)
- [How to Use it?](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys#how-to-use-it)
- [Example of Handling Survey Completion Events](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys#example-of-handling-survey-completion-events)
- [Embed Mode](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys#embed-mode)
- [How to enable Embed Mode](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys#how-to-enable-embed-mode)
- [Embedding Surveys in Emails](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys#embedding-surveys-in-emails)
- [Generate an Embed Code](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys#generate-an-embed-code)
- [Embedding the Survey in Emails](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys#embedding-the-survey-in-emails)
- [1\. Gmail](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys#1-gmail)
- [2\. Sendgrid](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys#2-sendgrid)
- [3\. Mailchimp](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys#3-mailchimp)
- [4\. Nodemailer](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys#4-nodemailer)
- [Example: Email Footer Survey](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys#example:-email-footer-survey)

Features

# Embed Surveys

Embed Formbricks surveys seamlessly into your website using an iframe & Email using code snippets.

# [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys\#embed-surveys-in-your-web-page-&-emails)  Embed Surveys in Your Web Page & Emails

Embedding Formbricks surveys directly into your web pages & emails allows you to integrate interactive surveys without redirecting users to a separate survey site. This method ensures a seamless integration and maintains the aesthetic continuity of your website or application and your email marketing campaigns.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys\#embedding-surveys-in-web-pages)  Embedding Surveys in Web Pages

1. Create and publish a link survey.
2. Open survey summary page and click on **share** button on the top right.
3. In the survey share modal, click on **Embed survey** button.
4. Navigate to **Embed in a Web Page** tab and click on Copy code
5. Paste the copied iframe code into the HTML of your web page where you want the survey to appear.

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys\#example-of-embedding-a-survey-on-a-web-page)  Example of Embedding a Survey on a Web Page

Example Embedding Code

Copy

```
<div style="position: relative; height:100vh; max-height:100vh; overflow:auto;">
  <iframe
    src="https://app.formbricks.com/s/<your-surveyId>"
    frameborder="0"
    style="position: absolute; left:0; top:0; width:100%; height:100%; border:0;"
  >
  </iframe>
</div>
```

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys\#iframe-events)  Iframe Events

The iframe fires a **formbricksSurveyCompleted** event when a user finishes a survey within the embedded iframe. This event can be captured through a message listener in your webpage’s JavaScript

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys\#how-to-use-it)  How to Use it?

1. Embed the Formbricks survey on your webpage using the iframe method as described above.
2. Add an event listener to your webpage’s JavaScript that listens for `message` events from the iframe.
3. Check if the received message indicates that the survey is completed by comparing the `event.data` with the value `formbricksSurveyCompleted`.

It is important to verify the origin of the message to ensure it comes from
the iframe containing your survey, enhancing the security of your event
handling.

4. Implement your custom actions within the callback function based on the survey completion.

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys\#example-of-handling-survey-completion-events)  Example of Handling Survey Completion Events

Example Code for Event Listener

Copy

```
window.addEventListener("message", (event) => {
  // Replace 'https://app.formbricks.com' with the actual web app url
  if (
    event.origin === "https://app.formbricks.com" &&
    event.data === "formbricksSurveyCompleted"
  ) {
    console.log("Survey completed!");
    // Implement your custom actions here
  }
});
```

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys\#embed-mode)  Embed Mode

Embed your survey with a minimalist design, disregarding padding and background.

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys\#how-to-enable-embed-mode)  How to enable Embed Mode

It can be enabled by simply appending **?embed=true** to your survey link or from UI

1. Open Website embed tab in survey share modal
2. Toggle **Embed mode**![Toggle embed mode](https://mintcdn.com/formbricks/Y0_rk27eZSQCDXfm/images/xm-and-surveys/surveys/link-surveys/embed-surveys/embed-mode-toggle.webp?fit=max&auto=format&n=Y0_rk27eZSQCDXfm&q=85&s=2430f394a3ec28d941e2e1e8c565e34a)With Embed mode enabled:![Toggle embed mode](https://mintcdn.com/formbricks/Y0_rk27eZSQCDXfm/images/xm-and-surveys/surveys/link-surveys/embed-surveys/embed-mode-enabled.webp?fit=max&auto=format&n=Y0_rk27eZSQCDXfm&q=85&s=c15ed4f70b43ecc49e37bf1016184eaa)With Embed mode disabled:![Toggle embed mode](https://mintcdn.com/formbricks/Y0_rk27eZSQCDXfm/images/xm-and-surveys/surveys/link-surveys/embed-surveys/embed-mode-disabled.webp?fit=max&auto=format&n=Y0_rk27eZSQCDXfm&q=85&s=74d7b81c8779ff32b9039a4aae089a29)

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys\#embedding-surveys-in-emails)  Embedding Surveys in Emails

Embedding Formbricks surveys directly into your emails allows you to collect valuable feedback from your users at every touchpoint. Seamlessly integrate interactive surveys into your email campaigns to gather insights and improve user experience.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys\#generate-an-embed-code)  Generate an Embed Code

To embed a Formbricks survey in an email, first, create a survey and publish it. Follow these steps to generate the embed code:

1. **Create and Publish a Survey**: Start by creating a link survey and publish it once ready.
2. **Access the Share Options**: Go to the survey summary page and click the Share button (see below).
3. **Get the Embed Code**: Click on Embed Survey at the bottom of the share modal, navigate to the `Embed in an Email` tab, and click `Copy Code`.
4. **Preview and Test**: Before sending it to your users, click on Send Preview to receive a test email. This helps ensure the survey appears correctly.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys\#embedding-the-survey-in-emails)  Embedding the Survey in Emails

Different email clients have different support for HTML and CSS. We recommend testing the email in different email clients to ensure the survey looks good in all of them.Below are some of the methods and services that we know that allows HTML embedding and how you can use them:

Please use the below methods at your own discretion. We do not officially
endorse any of the services mentioned below.

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys\#1-gmail)  1\. Gmail

Gmail does not support HTML embedding natively. It’s a WYSIWYG (What You See Is What You Get) editor. However, you can use a free plugin like [HTML Editor for Gmail by cloudHQ](https://chromewebstore.google.com/detail/free-html-editor-for-gmai/ioinaaeeacahcmbgfmeaaofhfkijpdeb) to embed HTML in your emails.

- Install the plugin from the Chrome Web Store.
- Open Gmail and compose a new email.
- Write your email content after which you want to embed the survey.![Choose a link survey template](https://mintcdn.com/formbricks/Y0_rk27eZSQCDXfm/images/xm-and-surveys/surveys/link-surveys/embed-surveys/email-content-without-survey.webp?fit=max&auto=format&n=Y0_rk27eZSQCDXfm&q=85&s=3a8834f263168f614777218a0bc7ef67)
- Right next to the Send button you will see a new button called **HTML Editor**. Click on it.
- This will open a new window with the **Design** tab active. Switch to the **Source** tab.![Choose a link survey template](https://mintcdn.com/formbricks/Y0_rk27eZSQCDXfm/images/xm-and-surveys/surveys/link-surveys/embed-surveys/plugin-source-tab.webp?fit=max&auto=format&n=Y0_rk27eZSQCDXfm&q=85&s=75c95e06c2ed161e31e82946845c05de)
- Now paste the copied HTML code from Formbricks into this window. On the right, you will see a preview of how the email will look.![Choose a link survey template](https://mintcdn.com/formbricks/Y0_rk27eZSQCDXfm/images/xm-and-surveys/surveys/link-surveys/embed-surveys/plugin-add-survey.webp?fit=max&auto=format&n=Y0_rk27eZSQCDXfm&q=85&s=f27b0283bcf69bd2e4872acdc15b4cd0)
- Click on the **Close Editor** button to save the changes & close the editor.![Choose a link survey template](https://mintcdn.com/formbricks/Y0_rk27eZSQCDXfm/images/xm-and-surveys/surveys/link-surveys/embed-surveys/email-content-with-survey.webp?fit=max&auto=format&n=Y0_rk27eZSQCDXfm&q=85&s=2a6e38c239ec94fede38c19eac359206)
- Voila! You have successfully embedded the survey in your email.

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys\#2-sendgrid)  2\. Sendgrid

Sendgrid supports HTML content in emails directly:

- Compose Your Email: Use Sendgrid’s email composition tools to embed the HTML directly into your email body.
- Reference: For detailed steps, refer to Sendgrid’s official documentation [here](https://sendgrid.com/en-us/solutions/email-marketing/email-design) or API docs [here](https://sendgrid.com/docs/for-developers/sending-email/api-getting-started/)

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys\#3-mailchimp)  3\. Mailchimp

Available in their Standard plan and above, Mailchimp allows HTML content embedding:

- Use the Code Block: Drag a code block into your email template and paste the HTML code for the survey.
- Reference: Check out Mailchimp’s guide on pasting in custom HTML [here](https://mailchimp.com/help/paste-in-html-to-create-an-email/)

### [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys\#4-nodemailer)  4\. Nodemailer

Nodemailer is a Node.js module that allows you to send emails with HTML content.

- If you use Node.js to send emails, just attach the `html` parameter in your email message.
- Reference: Take a look at Nodemailer’s official message documentation [here](https://nodemailer.com/message/)

Please note that the above methods are not exhaustive and there are many other
ways to embed HTML in emails.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/embed-surveys\#example:-email-footer-survey)  Example: Email Footer Survey

Embed a survey link in your email signature to collect feedback subtly yet effectively. Here’s how:![Choose a link survey template](https://mintcdn.com/formbricks/Y0_rk27eZSQCDXfm/images/xm-and-surveys/surveys/link-surveys/embed-surveys/jo-signature.webp?fit=max&auto=format&n=Y0_rk27eZSQCDXfm&q=85&s=948221095839ad62113a16946c649f6d)

1. Create a Survey: Adjust an existing survey or create a new one.
2. Scroll down & enable the **Hidden Fields** option.
3. Add a new hidden field with the name **helpful**.
4. Now Publish the survey as a Link Survey & copy the link.
5. Embed in Your Signature: Add this HTML snippet to your email signature in your email client settings.

Embed this in your Email

Copy

```
Was our conversation helpful?
<a href="<Link-Survey-URL>?helpful=Yes">Yes 👍</a> |
<a href="<Link-Survey-URL>?helpful=No">No 👎</a>
```

Replace `YOUR_SURVEY_LINK` with the actual survey link.PS: If you do not see any signature settings, just use one of the methods we’ve mentioned above to embed the HTML code in your email.

* * *

**Need help?** [Reach out in Github Discussions](https://github.com/formbricks/formbricks/discussions)

Was this page helpful?

YesNo

[Data Prefilling](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/data-prefilling) [Link Settings](https://formbricks.com/docs/xm-and-surveys/surveys/link-surveys/link-settings)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.