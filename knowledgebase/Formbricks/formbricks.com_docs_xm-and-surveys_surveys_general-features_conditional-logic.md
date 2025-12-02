---
url: "https://formbricks.com/docs/xm-and-surveys/surveys/general-features/conditional-logic"
title: "Conditional Logic - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/conditional-logic#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

General Features

Conditional Logic

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

- [Terminology](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/conditional-logic#terminology)
- [Creating Logic](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/conditional-logic#creating-logic)
- [Question Logic](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/conditional-logic#question-logic)

General Features

# Conditional Logic

Create complex survey logic with the Logic Editor. Use conditions, actions, and variables to create a personalized survey experience.

![Add conditions](https://mintcdn.com/formbricks/yKl9MUpEW6O1uJ5B/images/xm-and-surveys/surveys/general-features/conditional-logic/editor.webp?fit=max&auto=format&n=yKl9MUpEW6O1uJ5B&q=85&s=a3e01cde7d905b574196d263b8c0845f)

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/conditional-logic\#terminology)  Terminology

- **Condition**: A rule that determines when an action should be executed.
- **Action**: A task that is executed when a condition is met.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/conditional-logic\#creating-logic)  **Creating Logic**

- **Add a Logic Block**: Click the `Add logic +` button to add a new logic block.

![Add conditions](https://mintcdn.com/formbricks/yKl9MUpEW6O1uJ5B/images/xm-and-surveys/surveys/general-features/conditional-logic/add-logic.webp?fit=max&auto=format&n=yKl9MUpEW6O1uJ5B&q=85&s=39d0b46d702d340cc22e07e35477788f)

You can add multiple logic blocks to a survey. Logic blocks are executed in
the order they are added. You can rearrange the order of logic blocks.

- **Add Conditions**: Add conditions to the logic block. Conditions are rules that determine when an action should be executed.

![Add conditions](https://mintcdn.com/formbricks/yKl9MUpEW6O1uJ5B/images/xm-and-surveys/surveys/general-features/conditional-logic/conditions.webp?fit=max&auto=format&n=yKl9MUpEW6O1uJ5B&q=85&s=411a1f36f6ee17300653aa91712bc64a)Conditons can be based on:

- **Question**: The answer to a question.
- **Variable**: A variable value.
- **Hidden Field**: The value of a hidden field.2.a **Condition Options**: Choose from a list of available conditions.

![Condition Options](https://mintcdn.com/formbricks/yKl9MUpEW6O1uJ5B/images/xm-and-surveys/surveys/general-features/conditional-logic/condition-options.webp?fit=max&auto=format&n=yKl9MUpEW6O1uJ5B&q=85&s=6946f6427e41d67c56c9767e5ad1a6df)

- **Condition Operators**: Choose an operator to compare the condition value.

![Condition Operators](https://mintcdn.com/formbricks/yKl9MUpEW6O1uJ5B/images/xm-and-surveys/surveys/general-features/conditional-logic/condition-operators.webp?fit=max&auto=format&n=yKl9MUpEW6O1uJ5B&q=85&s=e9b8acc835d986171af387cc3085ee72)

- \\*\\* Condition Value\*\*: Enter a value to compare the condition against.
Comparisons can be made against a fixed value or a dynamic value.
Dynamic values can be based on a question, variable, or hidden field.

![Condition Value](https://mintcdn.com/formbricks/yKl9MUpEW6O1uJ5B/images/xm-and-surveys/surveys/general-features/conditional-logic/condition-value.webp?fit=max&auto=format&n=yKl9MUpEW6O1uJ5B&q=85&s=92ed9ad191e30552192f249eae4c955b)

Conditions can be grouped. - Conditions can be combined using AND or OR
operators. You can add multiple conditions to a logic block. Conditions are
evaluated in the order they are added.

![Condition Chaining](https://mintcdn.com/formbricks/yKl9MUpEW6O1uJ5B/images/xm-and-surveys/surveys/general-features/conditional-logic/condition-chaining.webp?fit=max&auto=format&n=yKl9MUpEW6O1uJ5B&q=85&s=449f60d93552b2fcf59274519b1ade6c)

- **Add Actions**: Add actions to the logic block. Actions are tasks that are executed when a condition is met.

You can add multiple actions to a logic block. Actions are executed in the
order they are added.

- **Action Options**: Choose from a list of available actions.

![Add Actions](https://mintcdn.com/formbricks/yKl9MUpEW6O1uJ5B/images/xm-and-surveys/surveys/general-features/conditional-logic/action-options.webp?fit=max&auto=format&n=yKl9MUpEW6O1uJ5B&q=85&s=c53ca1cb7b16b86e54beb80d2424d4c1)Action is of the following types:

- **Calculate**: Perform a calculation. These variables are then available for use in other questions.

  - Calculations can be performed on variables.
  - Calculations can be based on fixed values or dynamic values.

![Action Calculate Variables](https://mintcdn.com/formbricks/yKl9MUpEW6O1uJ5B/images/xm-and-surveys/surveys/general-features/conditional-logic/action-calculate-variables.webp?fit=max&auto=format&n=yKl9MUpEW6O1uJ5B&q=85&s=56e7fa1d96ac3a3fa1011bd664be2e8e)![Action Calculate Operators](https://mintcdn.com/formbricks/yKl9MUpEW6O1uJ5B/images/xm-and-surveys/surveys/general-features/conditional-logic/action-calculate-operators.webp?fit=max&auto=format&n=yKl9MUpEW6O1uJ5B&q=85&s=63676eccdcf860eacac4c698b0f47b3c)![Action Calculate value](https://mintcdn.com/formbricks/yKl9MUpEW6O1uJ5B/images/xm-and-surveys/surveys/general-features/conditional-logic/action-calculate-value.webp?fit=max&auto=format&n=yKl9MUpEW6O1uJ5B&q=85&s=109d5ef90132107c403b0bb0bdf69b8e)![Action Calculate](https://mintcdn.com/formbricks/yKl9MUpEW6O1uJ5B/images/xm-and-surveys/surveys/general-features/conditional-logic/action-calculate.webp?fit=max&auto=format&n=yKl9MUpEW6O1uJ5B&q=85&s=fb7b71242ab5f950635213dca823f0b2)
- **Require Answer**: Make a question required. Only the optional questions can be marked as required while filling the survey.

![Action Require](https://mintcdn.com/formbricks/yKl9MUpEW6O1uJ5B/images/xm-and-surveys/surveys/general-features/conditional-logic/action-require.webp?fit=max&auto=format&n=yKl9MUpEW6O1uJ5B&q=85&s=aa892aface5aee986b08b462e494143b)

- **Jump to Question**: Skip to a specific question. The user will be redirected to the specified question based on the condition.

![Action Jump](https://mintcdn.com/formbricks/yKl9MUpEW6O1uJ5B/images/xm-and-surveys/surveys/general-features/conditional-logic/action-jump.webp?fit=max&auto=format&n=yKl9MUpEW6O1uJ5B&q=85&s=221ad18df653d94e43731aac9ffcb643)

- **Save Logic**: Click the `Save` button to save the logic block.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/conditional-logic\#question-logic)  Question Logic

This logic is executed when the user answers the question. Logic can be as simple as showing a follow-up question based on the answer or as complex as calculating a score based on multiple answers.![Question Logic](https://mintcdn.com/formbricks/yKl9MUpEW6O1uJ5B/images/xm-and-surveys/surveys/general-features/conditional-logic/question-logic.webp?fit=max&auto=format&n=yKl9MUpEW6O1uJ5B&q=85&s=2ac0dc6a19781b37ab1a1e57c03a13a8)

Was this page helpful?

YesNo

[Add Image / Video](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/add-image-or-video-question) [Custom Styling](https://formbricks.com/docs/xm-and-surveys/surveys/general-features/overwrite-styling)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.