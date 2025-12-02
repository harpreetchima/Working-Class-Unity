---
url: "https://formbricks.com/docs/development/standards/qa/code-reviews"
title: "Code Reviews - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/development/standards/qa/code-reviews#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Quality Assurance

Code Reviews

[Overview](https://formbricks.com/docs/overview/introduction) [XM & Surveys](https://formbricks.com/docs/xm-and-surveys/overview) [Self Hosting](https://formbricks.com/docs/self-hosting/overview) [Development](https://formbricks.com/docs/development/overview) [API v1 Reference](https://formbricks.com/docs/api-reference/rest-api) [API v2 Reference (Beta)](https://formbricks.com/docs/api-v2-reference/introduction)

##### Development

- [Overview](https://formbricks.com/docs/development/overview)

##### Local Setup

- [Linux](https://formbricks.com/docs/development/local-setup/linux)
- [Mac](https://formbricks.com/docs/development/local-setup/mac)
- [Windows](https://formbricks.com/docs/development/local-setup/windows)
- [Gitpod](https://formbricks.com/docs/development/local-setup/gitpod)
- [GitHub Codespaces](https://formbricks.com/docs/development/local-setup/github-codespaces)

##### Technical Handbook

- [Solution Overview](https://formbricks.com/docs/development/technical-handbook/overview)
- [Database Model](https://formbricks.com/docs/development/technical-handbook/database-model)
- [Tenant Separation](https://formbricks.com/docs/development/technical-handbook/tenant-separation)

##### Standards

- Code Organization

- Development Practices

- Technical Standards

- Quality Assurance

  - [Code Reviews](https://formbricks.com/docs/development/standards/qa/code-reviews)
  - [Testing Methodology](https://formbricks.com/docs/development/standards/qa/testing-methodology)

##### Contributions

- [Contribute to Formbricks](https://formbricks.com/docs/development/contribution/contribution)

##### Guides

- Auth & Provision


##### Support

- [Troubleshooting](https://formbricks.com/docs/development/support/troubleshooting)

On this page

- [Initial Checks via GitHub Workflows](https://formbricks.com/docs/development/standards/qa/code-reviews#initial-checks-via-github-workflows)
- [Reviewer Assignment](https://formbricks.com/docs/development/standards/qa/code-reviews#reviewer-assignment)
- [Functional Testing and UI Review](https://formbricks.com/docs/development/standards/qa/code-reviews#functional-testing-and-ui-review)
- [Functionality Testing](https://formbricks.com/docs/development/standards/qa/code-reviews#functionality-testing)
- [UI Review (if applicable)](https://formbricks.com/docs/development/standards/qa/code-reviews#ui-review-if-applicable)
- [Feedback Process](https://formbricks.com/docs/development/standards/qa/code-reviews#feedback-process)
- [In-depth Code Review](https://formbricks.com/docs/development/standards/qa/code-reviews#in-depth-code-review)
- [Manual Review](https://formbricks.com/docs/development/standards/qa/code-reviews#manual-review)
- [AI-Assisted Review](https://formbricks.com/docs/development/standards/qa/code-reviews#ai-assisted-review)
- [Resolution and Merge](https://formbricks.com/docs/development/standards/qa/code-reviews#resolution-and-merge)
- [Best Practices](https://formbricks.com/docs/development/standards/qa/code-reviews#best-practices)
- [Conclusion](https://formbricks.com/docs/development/standards/qa/code-reviews#conclusion)

Quality Assurance

# Code Reviews

This document outlines our comprehensive code review process at Formbricks. We maintain high quality, consistency, and best practices within our codebase through this structured approach.

## [​](https://formbricks.com/docs/development/standards/qa/code-reviews\#initial-checks-via-github-workflows)  Initial Checks via GitHub Workflows

When a Pull Request (PR) is opened, our automated GitHub workflows perform several critical checks:

> **Note:** At Formbricks, all feature changes must be submitted through Pull Requests - direct pushes to protected branches are not allowed.

- **PR Title Validation**: Ensures clear, descriptive titles following our conventions
- **Build Verification**: Confirms that the build process completes successfully
- **Test Suite**: Runs all automated tests to catch potential regressions
- **Translation Check**: Identifies any missing translation keys
- **Linting**: Enforces our coding standards and style guidelines

These checks must pass before proceeding to manual review.

## [​](https://formbricks.com/docs/development/standards/qa/code-reviews\#reviewer-assignment)  Reviewer Assignment

Once all automated checks pass successfully:

- A team member with relevant expertise is assigned as the reviewer
- The reviewer is notified automatically through GitHub
- Priority is given based on PR urgency and complexity

## [​](https://formbricks.com/docs/development/standards/qa/code-reviews\#functional-testing-and-ui-review)  Functional Testing and UI Review

The assigned reviewer performs thorough testing:

### [​](https://formbricks.com/docs/development/standards/qa/code-reviews\#functionality-testing)  Functionality Testing

- Verifies that new features work as specified
- Tests edge cases and error scenarios
- Ensures proper error handling
- Checks integration with existing features

### [​](https://formbricks.com/docs/development/standards/qa/code-reviews\#ui-review-if-applicable)  UI Review (if applicable)

- Validates visual consistency
- Checks responsive behavior
- Ensures accessibility standards
- Reviews user interaction flows

## [​](https://formbricks.com/docs/development/standards/qa/code-reviews\#feedback-process)  Feedback Process

If improvements are needed:

- Reviewers add inline comments on GitHub
- Feedback is specific and actionable
- Code suggestions are provided when helpful
- Comments follow our constructive feedback guidelines

## [​](https://formbricks.com/docs/development/standards/qa/code-reviews\#in-depth-code-review)  In-depth Code Review

Our code review process utilizes both human expertise and AI assistance:

### [​](https://formbricks.com/docs/development/standards/qa/code-reviews\#manual-review)  Manual Review

- Code structure and organization
- Design patterns and best practices
- Performance considerations
- Security implications
- Documentation completeness

### [​](https://formbricks.com/docs/development/standards/qa/code-reviews\#ai-assisted-review)  AI-Assisted Review

We leverage advanced AI tools for additional insights:

- **Code Rabbit**: Automated code analysis and suggestions
- **Sonarqube**: Code quality metrics and potential issues

## [​](https://formbricks.com/docs/development/standards/qa/code-reviews\#resolution-and-merge)  Resolution and Merge

Final steps before merging:

- All review comments must be addressed
- Required changes are implemented
- At least one reviewer approval is required
- All conversations must be resolved
- CI/CD pipeline passes again
- PR is merged into the target branch

## [​](https://formbricks.com/docs/development/standards/qa/code-reviews\#best-practices)  Best Practices

- Keep PRs focused and reasonably sized
- Respond to review comments promptly
- Use the “Request Changes” feature when necessary
- Mark conversations as resolved when addressed
- Use approve/request changes workflow appropriately

## [​](https://formbricks.com/docs/development/standards/qa/code-reviews\#conclusion)  Conclusion

Our code review process combines automated checks, manual review, and AI assistance to ensure high-quality code contributions. This multi-layered approach helps maintain code quality while promoting knowledge sharing within the team.Remember: Code reviews are not just about finding issues—they’re opportunities for learning and improving our codebase together.

Was this page helpful?

YesNo

[Framework Usage](https://formbricks.com/docs/development/standards/technical/framework-usage) [Testing Methodology](https://formbricks.com/docs/development/standards/qa/testing-methodology)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.