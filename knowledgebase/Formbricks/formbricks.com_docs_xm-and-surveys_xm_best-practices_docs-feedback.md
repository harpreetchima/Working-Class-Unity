---
url: "https://formbricks.com/docs/xm-and-surveys/xm/best-practices/docs-feedback"
title: "Docs Feedback - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/docs-feedback#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Best Practices

Docs Feedback

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

- User Management

- [Styling Theme](https://formbricks.com/docs/xm-and-surveys/core-features/styling-theme)
- [Email Branding](https://formbricks.com/docs/xm-and-surveys/core-features/email-customization)
- [Test Environment](https://formbricks.com/docs/xm-and-surveys/core-features/test-environment)

##### XM

- Best Practices

  - [Contact form](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/contact-form)
  - [Headless Surveys](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys)
  - [Docs Feedback](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/docs-feedback)
  - [Feature Chaser](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feature-chaser)
  - [Feedback Box](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feedback-box)
  - [Improve Email Content](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/improve-email-content)
  - [App Interview Prompt](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/interview-prompt)
  - [Learn from Churn](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/cancel-subscription)
  - [Product-Market Fit](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/pmf-survey)
  - [Quiz Time](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/quiz-time)
  - [Improve Trial Conversion](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/improve-trial-cr)

On this page

- [Purpose](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/docs-feedback#purpose)
- [Installation](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/docs-feedback#installation)
- [1\. Setting up Formbricks Cloud](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/docs-feedback#1-setting-up-formbricks-cloud)
- [2\. Build the frontend](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/docs-feedback#2-build-the-frontend)
- [3\. Connecting to the Formbricks API](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/docs-feedback#3-connecting-to-the-formbricks-api)
- [4\. Setting it up for testing](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/docs-feedback#4-setting-it-up-for-testing)
- [You’re good to go! 🎉](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/docs-feedback#you%E2%80%99re-good-to-go-%F0%9F%8E%89)

Best Practices

# Docs Feedback

A step-by-step guide to getting feedback on your Documentation with Formbricks

Docs Feedback allows you to measure how clear your documentation is.

## [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/docs-feedback\#purpose)  Purpose

Your users don’t spend as much time thinking about your product as you do. To fight the “Curse of Knowledge” you have to measure how clear your docs are.

## [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/docs-feedback\#installation)  Installation

To get this running, you’ll need a bit of time. Here are the steps we’re going through:

- Set up Formbricks Cloud
- Build the frontend
- Connect to API
- Test

## [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/docs-feedback\#1-setting-up-formbricks-cloud)  1\. Setting up Formbricks Cloud

- Create a [Formbricks Cloud](https://app.formbricks.com/auth/signup) account.
- In the top-right menu, you can switch between “Development” and “Production” environments. These are separate, so your test data won’t affect real insights. Switch to “Development”:

![switch to dev environment](https://mintcdn.com/formbricks/DApr5ZMISC_jbIxa/images/xm-and-surveys/xm/best-practices/docs-feedback/switch-to-dev.webp?fit=max&auto=format&n=DApr5ZMISC_jbIxa&q=85&s=09a718b8e193aa2504b7be293ef4eb23)

- Then, create a survey using the template [Docs Feedback](https://formbricks.com/survey-templates/docs-feedback):

![select docs template](https://mintcdn.com/formbricks/DApr5ZMISC_jbIxa/images/xm-and-surveys/xm/best-practices/docs-feedback/docs-template.webp?fit=max&auto=format&n=DApr5ZMISC_jbIxa&q=85&s=37be7adf6f37515c51c6c290bd434110)

- Change the Internal Question ID of the first question to **“isHelpful”** to make your life easier 😉

![change id](https://mintcdn.com/formbricks/DApr5ZMISC_jbIxa/images/xm-and-surveys/xm/best-practices/docs-feedback/change-id.webp?fit=max&auto=format&n=DApr5ZMISC_jbIxa&q=85&s=5c948bf0238495aa07fede963a6cad28)

- Similarly, you can change the Internal Question ID of the _Please elaborate_ question to **“additionalFeedback”** and the one of the _Page URL_ question to **“pageUrl”**.

The answers must be identical. If you want different options than “Yes 👍” and “No 👎”, you need to update the choices accordingly. They must match the frontend we’re building in the next step.

- Click on “Continue to Settings or select the audience tab manually. Scroll down to “Survey Trigger” and create a new Action:

![set up when to ask card](https://mintcdn.com/formbricks/DApr5ZMISC_jbIxa/images/xm-and-surveys/xm/best-practices/docs-feedback/survey-trigger.webp?fit=max&auto=format&n=DApr5ZMISC_jbIxa&q=85&s=9016bb47845f18acb0c1fd52a58811e5)

- Our goal is to create an event that never triggers. This might seem odd, but it’s a necessary workaround. Fill out the action as shown in the screenshot:

![add action](https://mintcdn.com/formbricks/DApr5ZMISC_jbIxa/images/xm-and-surveys/xm/best-practices/docs-feedback/add-action.webp?fit=max&auto=format&n=DApr5ZMISC_jbIxa&q=85&s=39f6447b1e95c95c3d0cbf9d02e67f70)

- Select the Non-Event in the dropdown. Now you see that the “Publish survey” button is active. Publish your survey 🤝

![select nonevent](https://mintcdn.com/formbricks/DApr5ZMISC_jbIxa/images/xm-and-surveys/xm/best-practices/docs-feedback/select-action.webp?fit=max&auto=format&n=DApr5ZMISC_jbIxa&q=85&s=5a32fc34bd621a85aa75495e4b38f5cf)**You’re all setup in Formbricks Cloud for now 👍**

## [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/docs-feedback\#2-build-the-frontend)  2\. Build the frontend

Your frontend might work differently Your frontend likely looks and works
differently. This is an example specific to our tech stack. We want to
illustrate what you should consider building yours.

Before we start, lets talk about the widget. It works like this:

- Once the user selects yes/no, a partial response is sent to the Formbricks API. It includes the feedback and the current page url.
- Then the user is presented with an additional open text field to further explain their choice. Once it’s submitted, the previous response is updated with the additional feedback.

This allows us to capture and analyze partial feedback where the user is not willing to provide additional information.**Let’s do this 👇**

- Open the code editor where you handle your docs page.
- Likely, you have a template file or similar which renders the navigation at the bottom of the page:

![doc navigation](https://mintcdn.com/formbricks/DApr5ZMISC_jbIxa/images/xm-and-surveys/xm/best-practices/docs-feedback/docs-navi.webp?fit=max&auto=format&n=DApr5ZMISC_jbIxa&q=85&s=53125b9852714fe341ae3ffca38da4ae)Locate that file. We are using the [Tailwind Template “Syntax”](https://tailwindui.com/templates/syntax) in this case.

- Write the frontend code for the widget. Here is the full component (we break it down right below):

Entire Widget

Copy

```
import { Button } from "@/modules/ui/components/Button";
import { Popover, PopoverContent, PopoverTrigger } from "@/modules/ui/popover";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  handleFeedbackSubmit,
  updateFeedback,
} from "../../lib/handleFeedbackSubmit";

export const DocsFeedback = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [sharedFeedback, setSharedFeedback] = useState(false);
  const [responseId, setResponseId] = useState(null);
  const [freeText, setFreeText] = useState("");

  if (
    !process.env.NEXT_PUBLIC_FORMBRICKS_COM_DOCS_FEEDBACK_SURVEY_ID ||
    !process.env.NEXT_PUBLIC_FORMBRICKS_COM_API_HOST ||
    !process.env.NEXT_PUBLIC_FORMBRICKS_COM_ENVIRONMENT_ID
  ) {
    return null;
  }

  return (
    <div className="mt-6 inline-flex cursor-default items-center rounded-md border border-slate-200 bg-white p-4 text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
      {!sharedFeedback ? (
        <div>
          Was this page helpful?
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <div className="ml-4 inline-flex space-x-3">
              {["Yes 👍", " No 👎"].map((option) => (
                <PopoverTrigger
                  className="rounded border border-slate-200 bg-slate-50 px-4 py-2 text-slate-900 hover:bg-slate-100 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-1 dark:border-slate-700 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600 dark:hover:text-slate-300"
                  onClick={async () => {
                    const id = await handleFeedbackSubmit(
                      option,
                      router.asPath
                    );
                    setResponseId(id);
                  }}
                >
                  {option}
                </PopoverTrigger>
              ))}
            </div>
            <PopoverContent className="border-slate-300 bg-white dark:border-slate-500 dark:bg-slate-700">
              <form>
                <textarea
                  value={freeText}
                  onChange={(e) => setFreeText(e.target.value)}
                  placeholder="Please explain why..."
                  className="focus:border-brand-dark focus:ring-brand-dark mb-2 w-full rounded-md bg-white text-sm text-slate-900 dark:bg-slate-600 dark:text-slate-200 dark:placeholder:text-slate-200"
                />
                <div className="text-right">
                  <Button
                    type="submit"
                    variant="primary"
                    onClick={(e) => {
                      e.preventDefault();
                      updateFeedback(freeText, responseId);
                      setIsOpen(false);
                      setFreeText("");
                      setSharedFeedback(true);
                    }}
                  >
                    Send
                  </Button>
                </div>
              </form>
            </PopoverContent>
          </Popover>
        </div>
      ) : (
        <div>Thanks a lot, boss! 🤝</div>
      )}
    </div>
  );
};
```

**Let’s break it down!**Setting the local states and getting the current URL:

State Management

Copy

```
const router = useRouter(); // to get the URL of the current docs page
const [isOpen, setIsOpen] = useState(false); // to close Popover after
const [sharedFeedback, setSharedFeedback] = useState(false); // to display Thank You message
const [responseId, setResponseId] = useState(null); // to store responseID (will explain more)
const [freeText, setFreeText] = useState(""); // to locally store the additional info provided by user
```

Disabling feedback if config environment variables are not set properly:

Disable feedback if incorrect config env vars

Copy

```
if (
  !process.env.NEXT_PUBLIC_FORMBRICKS_COM_DOCS_FEEDBACK_SURVEY_ID ||
  !process.env.NEXT_PUBLIC_FORMBRICKS_COM_API_HOST ||
  !process.env.NEXT_PUBLIC_FORMBRICKS_COM_ENVIRONMENT_ID
) {
  return null;
}
```

The actual frontend (read comments):

Actual Frontend

Copy

```
return (
    <div className="mt-6 inline-flex cursor-default items-center rounded-md border border-slate-200 bg-white p-4 text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
      {!sharedFeedback ? ( // displays Feedback buttons or Thank You message
        <div>
          Was this page helpful?
          <Popover open={isOpen} onOpenChange={setIsOpen}>
            <div className="ml-4 inline-flex space-x-3">
              {["Yes 👍", " No 👎"].map((option) => ( // Popup Trigger is a button as well. This is a workaround to open the same form but send a different response to the API
                <PopoverTrigger
                  className="rounded border border-slate-200 bg-slate-50 px-4 py-2 text-slate-900 hover:bg-slate-100 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-neutral-900 focus:ring-offset-1 dark:border-slate-700 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-slate-600 dark:hover:text-slate-300"
                  onClick={async () => {
                    const id = await handleFeedbackSubmit(option, router.asPath); // handleFeedbackSubmit sends the Yes / No choice as well as the current URL to Formbricks and returns the responseId
                    setResponseId(id); // add responseId to local state so we can use it if user decides to add more feedback in free text field
                  }}>
                  {option} // "Yes 👍" or "No 👎" - they have to be identical with the choices in the survey on app.formbricks.com for it to work (!)
                </PopoverTrigger>
              ))}
            </div>
            <PopoverContent className="border-slate-300 bg-white dark:border-slate-500 dark:bg-slate-700">
              <form> // Form to handle additional feedback by user
                <textarea
                  value={freeText}
                  onChange={(e) => setFreeText(e.target.value)}
                  placeholder="Please explain why..."
                  className="focus:border-brand-dark focus:ring-brand-dark mb-2 w-full rounded-md bg-white text-sm text-slate-900 dark:bg-slate-600 dark:text-slate-200 dark:placeholder:text-slate-200"
                />
                <div className="text-right">
                  <Button
                    type="submit"
                    variant="primary"
                    onClick={(e) => {
                      e.preventDefault(); // prevent page from reloading (default HTML behaviour)
                      updateFeedback(freeText, responseId); // update initial Yes / No response with free text feedback
                      setIsOpen(false); // close Popover
                      setFreeText(""); // remove feedback from free text field local state
                      setSharedFeedback(true); // display Thank You message
                    }}>
                    Send
                  </Button>
                </div>
              </form>
            </PopoverContent>
          </Popover>
        </div>
      ) : (
        <div>Thanks a lot, boss! 🤝</div> // Thank You message
      )}
    </div>
  );
}
```

## [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/docs-feedback\#3-connecting-to-the-formbricks-api)  3\. Connecting to the Formbricks API

The last step is to hook up your new frontend to the Formbricks API. To achieve that, we followed the “ [Create Response](https://formbricks.com/docs/api-reference/client-api--response/create-response)” and “ [Update Response](https://formbricks.com/docs/api-reference/client-api--response/update-response)” pages in our docs.Here is the code for the `handleFeedbackSubmit` function with comments:

handleFeedbackSubmit() function definition

Copy

```
export const handleFeedbackSubmit = async (YesNo, pageUrl) => {
  const response_data = {
    data: {
      isHelpful: YesNo, // the "Yes 👍" or "No 👎" response. Remember: They have to be identical with the choices in the survey on app.formbricks.com for it to work.
      pageUrl: pageUrl, // So you know which page the user gives feedback about.
    },
  };

  const payload = {
    response: response_data,
    surveyId: process.env.NEXT_PUBLIC_FORMBRICKS_COM_DOCS_FEEDBACK_SURVEY_ID, // For testing, replace this with the survey ID of your survey (more info below)
  };

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_FORMBRICKS_COM_API_HOST}/api/v1/client/environments/${process.env.NEXT_PUBLIC_FORMBRICKS_COM_ENVIRONMENT_ID}/responses`, // For testing, replace this with the API host and environemnt ID of your Development environment on app.formbricks.com
  };
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (res.ok) {
      const responseJson = await res.json();
      return responseJson.id; // Returns the response ID
    } else {
      console.error("Error submitting form");
    }
  } catch (error) {
    console.error("Error submitting form:", error);
  }
};
```

And this is the `updateFeedback` function with comments:

updateFeedback() function definition

Copy

```
export const updateFeedback = async (freeText, responseId) => {
  if (!responseId) {
    console.error("No response ID available"); // If there is not response ID, no response can be updated.
    return;
  }

  const payload = {
    response: {
      data: {
        additionalInfo: freeText,
      },
      finished: true, // Lets Formbricks calculate Completion Rate
    },
  };

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_FORMBRICKS_COM_API_HOST}/api/v1/client/environments/${process.env.NEXT_PUBLIC_FORMBRICKS_COM_ENVIRONMENT_ID}/responses/${responseId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (!res.ok) {
      console.error("Error updating response");
    }
  } catch (error) {
    console.error("Error updating response:", error);
  }
};
```

We’re almosr there! 🤸

## [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/docs-feedback\#4-setting-it-up-for-testing)  4\. Setting it up for testing

Before you roll it out in production, you want to test it. To do so, you need two things:

- Environment ID (1) of the development environment on app.formbricks.com
- Survey ID (2) of your test survey

When you are on the survey detail page, you’ll find both of them in the URL:![copy IDs](https://mintcdn.com/formbricks/DApr5ZMISC_jbIxa/images/xm-and-surveys/xm/best-practices/docs-feedback/copy-ids.webp?fit=max&auto=format&n=DApr5ZMISC_jbIxa&q=85&s=6683532e5980bb1c55bab614d2898e5e)Now, you have to replace the IDs and the API host accordingly in your `handleFeedbackSubmit`:

Replace the ID and API accordingly

Copy

```
  const payload = {
    response: response_data,
    surveyId: clgwfv4a7002el50ihyuss38x, // This is an example, replace with yours
  };

  try {
    const res = await fetch(
			// Note that we also updated the API host to 'https://app.formbricks.com/'
      `https:app.formbricks.com/api/v1/client/environments/clgwcwp4z000lpf0hur7uxbuv/responses`,
  };
```

And lastly, in the `updateFeedback` function

Replace the ID and API here as well

Copy

```
  try {
    const res = await fetch(
		// Note that we also updated the API host to 'https://app.formbricks.com/'
      `https:app.formbricks.com/api/v1/client/environments/clgwcwp4z000lpf0hur7uxbuv/responses/${responseId}`, // Note that we also updated the API host to 'https://app.formbricks.com/'
}
```

### [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/docs-feedback\#you%E2%80%99re-good-to-go-%F0%9F%8E%89)  You’re good to go! 🎉

Something doesn’t work? Check your browser console for the error.**Need help?** [Reach out in GitHub Discussions](https://github.com/formbricks/formbricks/discussions)

Was this page helpful?

YesNo

[Headless Surveys](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/headless-surveys) [Feature Chaser](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/feature-chaser)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.