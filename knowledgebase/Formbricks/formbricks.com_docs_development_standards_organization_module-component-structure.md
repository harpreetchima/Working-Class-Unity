---
url: "https://formbricks.com/docs/development/standards/organization/module-component-structure"
title: "Modules & Components - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/development/standards/organization/module-component-structure#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Code Organization

Modules & Components

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

  - [File and Directory Org.](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization)
  - [Naming Conventions](https://formbricks.com/docs/development/standards/organization/naming-conventions)
  - [Modules & Components](https://formbricks.com/docs/development/standards/organization/module-component-structure)
- Development Practices

- Technical Standards

- Quality Assurance


##### Contributions

- [Contribute to Formbricks](https://formbricks.com/docs/development/contribution/contribution)

##### Guides

- Auth & Provision


##### Support

- [Troubleshooting](https://formbricks.com/docs/development/support/troubleshooting)

On this page

- [Introduction](https://formbricks.com/docs/development/standards/organization/module-component-structure#introduction)
- [Module Organization](https://formbricks.com/docs/development/standards/organization/module-component-structure#module-organization)
- [Core Module Structure](https://formbricks.com/docs/development/standards/organization/module-component-structure#core-module-structure)
- [Enterprise Edition (EE) Modules](https://formbricks.com/docs/development/standards/organization/module-component-structure#enterprise-edition-ee-modules)
- [Component Organization](https://formbricks.com/docs/development/standards/organization/module-component-structure#component-organization)
- [UI Component Structure](https://formbricks.com/docs/development/standards/organization/module-component-structure#ui-component-structure)
- [Component Types](https://formbricks.com/docs/development/standards/organization/module-component-structure#component-types)
- [Feature Module Example](https://formbricks.com/docs/development/standards/organization/module-component-structure#feature-module-example)
- [Best Practices](https://formbricks.com/docs/development/standards/organization/module-component-structure#best-practices)

Code Organization

# Modules & Components

In this document we outline the best practices for organizing modules and components across the codebase. Clear separation of concerns between modules (which encompass business logic and domain-specific functionality) and components (reusable UI elements and building blocks) promotes clarity, scalability, and maintainability.

## [​](https://formbricks.com/docs/development/standards/organization/module-component-structure\#introduction)  Introduction

Our codebase follows a modular architecture with two primary organizational units:

1. **UI Components**: Reusable components in the `modules/ui/components` directory
2. **Feature Modules**: Domain-specific functionality organized by feature in the `modules` directory

## [​](https://formbricks.com/docs/development/standards/organization/module-component-structure\#module-organization)  Module Organization

### [​](https://formbricks.com/docs/development/standards/organization/module-component-structure\#core-module-structure)  Core Module Structure

Modules are organized by feature and can be found in the `modules` directory. Each module typically includes:

Copy

```
modules/
└── feature-name/
   ├── components/ # Feature-specific components
   ├── lib/ # Business logic and utilities
   ├── types/ # TypeScript types
   ├── actions.ts # Server actions
   └── route.ts # API routes (if needed)
```

### [​](https://formbricks.com/docs/development/standards/organization/module-component-structure\#enterprise-edition-ee-modules)  Enterprise Edition (EE) Modules

Enterprise features are organized in a dedicated `modules/ee` directory:

Copy

```
modules/
└── ee/
├── insights/
│ ├── components/
│ ├── experience/
│ └── types/
└── contacts/
├── segments/
└── components/
```

## [​](https://formbricks.com/docs/development/standards/organization/module-component-structure\#component-organization)  Component Organization

### [​](https://formbricks.com/docs/development/standards/organization/module-component-structure\#ui-component-structure)  UI Component Structure

UI components are centralized in `modules/ui/components` and follow a consistent structure:

Copy

```
modules/ui/components/
└── component-name/
   ├── index.tsx # Main component implementation
   ├── stories.tsx # Storybook stories
   └── components/ # Sub-components (if needed)
```

### [​](https://formbricks.com/docs/development/standards/organization/module-component-structure\#component-types)  Component Types

1. **Base Components**: Fundamental UI elements like Button, Input, Modal
2. **Composite Components**: More complex components that combine base components
3. **Feature-Specific Components**: Components tied to specific features

### [​](https://formbricks.com/docs/development/standards/organization/module-component-structure\#feature-module-example)  Feature Module Example

A feature module with its components and business logic:

Copy

```
modules/survey/
├── components/
│ ├── question-form-input/
│ └── template-list/
├── editor/
│ └── components/
├── lib/
│ └── utils.ts
└── types/
└── index.ts
```

## [​](https://formbricks.com/docs/development/standards/organization/module-component-structure\#best-practices)  Best Practices

1. **Component Organization**   - Keep components focused and single-purpose
   - Use proper TypeScript interfaces for props
   - Implement Storybook stories for UI components
2. **Module Structure**   - Organize by feature domain
   - Separate business logic from UI components
   - Use proper type definitions
3. **Code Sharing**   - Share common utilities through the ui/lib directory
   - Maintain clear boundaries between modules
   - Use proper imports with aliases (@/modules/…)

Was this page helpful?

YesNo

[Naming Conventions](https://formbricks.com/docs/development/standards/organization/naming-conventions) [Code Formatting](https://formbricks.com/docs/development/standards/practices/code-formatting)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.