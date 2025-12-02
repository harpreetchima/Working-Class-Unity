---
url: "https://formbricks.com/docs/development/standards/practices/documentation"
title: "Documentation - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/development/standards/practices/documentation#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Development Practices

Documentation

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

  - [Code Formatting](https://formbricks.com/docs/development/standards/practices/code-formatting)
  - [Documentation](https://formbricks.com/docs/development/standards/practices/documentation)
  - [Error Handling](https://formbricks.com/docs/development/standards/practices/error-handling)
- Technical Standards

- Quality Assurance


##### Contributions

- [Contribute to Formbricks](https://formbricks.com/docs/development/contribution/contribution)

##### Guides

- Auth & Provision


##### Support

- [Troubleshooting](https://formbricks.com/docs/development/support/troubleshooting)

On this page

- [Overview](https://formbricks.com/docs/development/standards/practices/documentation#overview)
- [Contribute to Documentation](https://formbricks.com/docs/development/standards/practices/documentation#contribute-to-documentation)
- [Code Documentation](https://formbricks.com/docs/development/standards/practices/documentation#code-documentation)
- [Function Documentation](https://formbricks.com/docs/development/standards/practices/documentation#function-documentation)
- [API Documentation](https://formbricks.com/docs/development/standards/practices/documentation#api-documentation)
- [Feature Documentation](https://formbricks.com/docs/development/standards/practices/documentation#feature-documentation)
- [Working with Mintlify](https://formbricks.com/docs/development/standards/practices/documentation#working-with-mintlify)
- [File Structure](https://formbricks.com/docs/development/standards/practices/documentation#file-structure)
- [Content Guidelines](https://formbricks.com/docs/development/standards/practices/documentation#content-guidelines)
- [Validation](https://formbricks.com/docs/development/standards/practices/documentation#validation)

Development Practices

# Documentation

Standards for documenting code and features in the Formbricks codebase

## [​](https://formbricks.com/docs/development/standards/practices/documentation\#overview)  Overview

At Formbricks, we maintain strict documentation standards to ensure code clarity, maintainability, and ease of use for both internal developers and external contributors.

### [​](https://formbricks.com/docs/development/standards/practices/documentation\#contribute-to-documentation)  Contribute to Documentation

We use Mintlify to maintain our documentation. You can find more information about how to contribute to the documentation in the [README](https://github.com/formbricks/formbricks/blob/main/docs/README.md) file.

## [​](https://formbricks.com/docs/development/standards/practices/documentation\#code-documentation)  Code Documentation

### [​](https://formbricks.com/docs/development/standards/practices/documentation\#function-documentation)  Function Documentation

1. **Complex Logic Documentation**
   - All functions with complex logic must include JSDoc comments
   - Document parameters, return types, and potential side effects
   - Example:

Copy

```
/**
Creates a new user and initializes their preferences
@param {string} name - User's full name
@param {UserOptions} options - Configuration options for user creation
@returns {Promise<User>} The created user object
@throws {ValidationError} If name is invalid
*/
async function createUser(name: string, options: UserOptions): Promise<User> {
  // implementation
}
```

2. **TypeScript Ignore Comments**
   - When using `@ts-ignore` or `@ts-expect-error`, always include a comment explaining why
   - Example:

Copy

```
// @ts-expect-error -- Required for dynamic function calls
void window.formbricks.setup(...args);
```

### [​](https://formbricks.com/docs/development/standards/practices/documentation\#api-documentation)  API Documentation

1. **API Endpoints**   - All new API endpoints must be documented in the OpenAPI specification
   - Include request/response schemas, authentication requirements, and examples
   - Document both Client API and Management API endpoints
   - Place API documentation in the `docs/api-reference` directory
2. **Authentication**   - Clearly specify authentication requirements
   - Document API key usage and permissions
   - Include error scenarios and handling

### [​](https://formbricks.com/docs/development/standards/practices/documentation\#feature-documentation)  Feature Documentation

- All new features must include a feature documentation file
- Document the feature’s purpose, usage, and implementation details
- Include code examples and best practices

## [​](https://formbricks.com/docs/development/standards/practices/documentation\#working-with-mintlify)  Working with Mintlify

We use Mintlify to write our documentation.

### [​](https://formbricks.com/docs/development/standards/practices/documentation\#file-structure)  File Structure

1. **MDX Files**
   - All documentation files must use the `.mdx` extension
   - Include frontmatter with required metadata:

Copy

```
---
title: "Document Title"
description: "Brief description of the content"
icon: "appropriate-icon"
---
```

2. **Navigation**
   - Add new pages to the appropriate section in `docs/mint.json`
   - Follow the existing navigation structure
   - Include proper redirects if URLs change

### [​](https://formbricks.com/docs/development/standards/practices/documentation\#content-guidelines)  Content Guidelines

1. **Writing Style**
   - Use clear, concise language
   - Break content into logical sections with proper headings
   - Include practical examples and code snippets
   - Use Mintlify components for notes, warnings, and callouts:

Copy

```
<Note>
Important information goes here
</Note>
```

2. **Media and Assets**   - Store images in the appropriate `/images` subdirectory
   - Use descriptive alt text for all images
   - Optimize images for web delivery
   - Use relative paths for internal links
3. **Code Examples**   - Specify the language for all code blocks
   - Include comments for complex code snippets
   - Use proper indentation and formatting

## [​](https://formbricks.com/docs/development/standards/practices/documentation\#validation)  Validation

1. **Local Testing**
   - Test documentation locally using Mintlify CLI:

Copy

```
mintlify dev
```

2. **Review Process**
   - Documentation changes require peer review
   - Verify all links and references work
   - Ensure proper formatting and rendering

These documentation requirements ensure that our codebase remains maintainable, accessible, and well-documented for both current and future developers.

Was this page helpful?

YesNo

[Code Formatting](https://formbricks.com/docs/development/standards/practices/code-formatting) [Error Handling](https://formbricks.com/docs/development/standards/practices/error-handling)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.