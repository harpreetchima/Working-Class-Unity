---
url: "https://formbricks.com/docs/xm-and-surveys/xm/best-practices/quiz-time"
title: "Quiz Time - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/quiz-time#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Best Practices

Quiz Time

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

- [Creating a quiz with Formbricks - Step-by-step Guide](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/quiz-time#creating-a-quiz-with-formbricks-step-by-step-guide)
- [What we’ll build](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/quiz-time#what-we%E2%80%99ll-build)
- [Setting up the form](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/quiz-time#setting-up-the-form)
- [Adding the questions](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/quiz-time#adding-the-questions)
- [Calculate Score](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/quiz-time#calculate-score)
- [Creating Multiple Endings Based on Scores](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/quiz-time#creating-multiple-endings-based-on-scores)
- [Wrapping Up](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/quiz-time#wrapping-up)

Best Practices

# Quiz Time

How to Create a Quiz Using Formbricks - Step-by-Step Guide

# [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/quiz-time\#creating-a-quiz-with-formbricks-step-by-step-guide)  Creating a quiz with Formbricks - Step-by-step Guide

Welcome to this guide on creating engaging quizzes with Formbricks! Quizzes help you capture customer insights, explore user personalities, or simply add fun for your team. With Formbricks, you can personalize quizzes in minutes add scores, customize backgrounds, and more, all without any technical skills!

## [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/quiz-time\#what-we%E2%80%99ll-build)  What we’ll build

By the end of this tutorial, you’ll have created a simple trivia Quiz featuring:

1. Score calculations.
2. Multiple endings depending on the score.

## [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/quiz-time\#setting-up-the-form)  Setting up the form

First, make sure you have a Formbricks account. If not, you can create one [here](https://app.formbricks.com/):

1. Head to the Surveys page and click on **New Survey**.
2. Select Start from Scratch to create a new form.
3. Go to the settings and select form type as **Link Survey**
4. In the form editor, click the three dots next to a question, then select Change Question Type and choose **Single-Select**.

![Change Question type to Single-Select](https://mintcdn.com/formbricks/0ry2MU6Byjoxjs2P/images/xm-and-surveys/xm/best-practices/quiz-time/single-select.webp?fit=max&auto=format&n=0ry2MU6Byjoxjs2P&q=85&s=316966925a1f46c3bf75e79cbac15167)

5. Add a welcoming statement to greet your users and explain the Quiz’s purpose.
6. Personalize the greeting to make it inviting and encourage engagement.

**Note:** While we’re creating a Link Survey here, the process is similar for Web and App surveys.

## [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/quiz-time\#adding-the-questions)  Adding the questions

Next, let’s create a question for example with multiple options:What country has the longest coastline in the world?
A) Canada
B) Japan
C) India
D) Nepal![Sample Question](https://mintcdn.com/formbricks/0ry2MU6Byjoxjs2P/images/xm-and-surveys/xm/best-practices/quiz-time/quiz.webp?fit=max&auto=format&n=0ry2MU6Byjoxjs2P&q=85&s=4cc3562261970eb250c3830d11986595)

## [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/quiz-time\#calculate-score)  Calculate Score

Now that we have our question ready, let’s add the logic to calculate scores.

1. Scroll down in the editor and click on variables.
2. Create a new variable named `score` with a default value of 0

![Create Variable named Score image](https://mintcdn.com/formbricks/0ry2MU6Byjoxjs2P/images/xm-and-surveys/xm/best-practices/quiz-time/score.webp?fit=max&auto=format&n=0ry2MU6Byjoxjs2P&q=85&s=eb3a212af5fb50d4f75a060190ee97ba)

3. Now go back to the question and expand the advanced settings by clicking on `> Show Advanced Settings`.
4. Under the conditional logic you should see the option to `Add Logic`. Click on that.

![Add Logic Button](https://mintcdn.com/formbricks/0ry2MU6Byjoxjs2P/images/xm-and-surveys/xm/best-practices/quiz-time/conditional-logic.webp?fit=max&auto=format&n=0ry2MU6Byjoxjs2P&q=85&s=d8d59c69b8db1d70874133d4df7144f5)

5. Now you should see conditional logic. Customize the logic to match your needs for example:

**When**`question` equals `YOUR_ANSWER_HERE` **Then**`Calculate``score``Add +``01`. So it should look something like this.![When-Then Conditional Logic](https://mintcdn.com/formbricks/0ry2MU6Byjoxjs2P/images/xm-and-surveys/xm/best-practices/quiz-time/when-then.webp?fit=max&auto=format&n=0ry2MU6Byjoxjs2P&q=85&s=8b9f64d9efa62ceb8801447261db0ae6)

6. Let’s duplicate and customize these questions. Click on the duplicate icon at the top of the question.
7. Now edit the questions, options, and answers in the **conditional logic**

## [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/quiz-time\#creating-multiple-endings-based-on-scores)  Creating Multiple Endings Based on Scores

Once you have all the questions and the calculation logic in place, it’s time to customize the endings. Scroll down to the Ending Card section. We will create two cards for this quiz: one for when the user fails the quiz and another for when the user passes.

1. Customize the ending card.
2. Display the score by typing `@score`. ( You can address all the variables or questions by just typing @ ).
3. Add logic to the last question. ( this is necessary to redirect the user based on the score ). Kind of like this:

**When**`score` >= `03` **Then**`Jump to``Pass`. So it should look something like this.![Conditional Logic for ending card](https://mintcdn.com/formbricks/0ry2MU6Byjoxjs2P/images/xm-and-surveys/xm/best-practices/quiz-time/ending-logic.webp?fit=max&auto=format&n=0ry2MU6Byjoxjs2P&q=85&s=7917717f06294d9b50a3763050cf5d74)

4. Ensure that the Fail card is positioned above the Pass card. This allows any condition that does not meet the criteria of being greater than or equal to 3 to jump to the Fail card.

![Pass or Fail ending Cards](https://mintcdn.com/formbricks/0ry2MU6Byjoxjs2P/images/xm-and-surveys/xm/best-practices/quiz-time/pass-fail.webp?fit=max&auto=format&n=0ry2MU6Byjoxjs2P&q=85&s=61e1e328634cb94bc09e2fcce36cbacb)

5. That’s it! Now you can save and publish the quiz.

# [​](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/quiz-time\#wrapping-up)  Wrapping Up

Congratulations! You’ve successfully created a Quiz with Formbricks. You can play around with the quiz that we just created [here](https://app.formbricks.com/s/cm2wwt3vu0001ir8o7ys0bezz).A great quiz can serve as an excellent lead generator, a job fit checker, or just a fun icebreaker for your team. You now have the skills to build that! If you want to read more about building quizzes and how you can create a Job Fit Quiz check this article [here](https://www.harshbhat.me/blog/formbricks-quiz).

Was this page helpful?

YesNo

[Product-Market Fit](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/pmf-survey) [Improve Trial Conversion](https://formbricks.com/docs/xm-and-surveys/xm/best-practices/improve-trial-cr)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.