---
url: "https://formbricks.com/docs/development/standards/organization/file-and-directory-organization"
title: "File and Directory Org. - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Code Organization

File and Directory Org.

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

- [Project Structure Overview](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#project-structure-overview)
- [Apps Directory](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#apps-directory)
- [apps/web/](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#apps/web/)
- [apps/demo/](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#apps/demo/)
- [apps/demo-react-native/](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#apps/demo-react-native/)
- [apps/storybook/](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#apps/storybook/)
- [Packages Directory](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#packages-directory)
- [packages/js-core/](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#packages/js-core/)
- [packages/js/](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#packages/js/)
- [packages/react-native/](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#packages/react-native/)
- [packages/lib/](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#packages/lib/)
- [packages/types/](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#packages/types/)
- [packages/database/](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#packages/database/)
- [packages/surveys/](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#packages/surveys/)
- [Module Organization](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#module-organization)
- [Core Module Structure](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#core-module-structure)
- [Adding New Code](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#adding-new-code)
- [New Features](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#new-features)
- [Best Practices](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#best-practices)
- [Code Organization](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#code-organization)
- [File Structure](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#file-structure)
- [Module Independence](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#module-independence)
- [Documentation](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#documentation)
- [Testing Organization](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#testing-organization)
- [Test File Location](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#test-file-location)
- [Test Directory Structure](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#test-directory-structure)
- [Configuration Files](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#configuration-files)
- [Root Level Configuration](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#root-level-configuration)
- [Package Level Configuration](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#package-level-configuration)
- [Version Control](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#version-control)
- [Git Organization](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#git-organization)
- [Conclusion](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization#conclusion)

Code Organization

# File and Directory Org.

This document outlines the structure and organization of files and directories in the Formbricks codebase, providing guidelines for maintaining consistency and clarity across the project.

## [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#project-structure-overview)  Project Structure Overview

The Formbricks codebase follows a monorepo structure using pnpm workspaces, with two main directories:

- `apps/` \- Contains full applications
- `packages/` \- Contains shared libraries and utilities

## [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#apps-directory)  Apps Directory

The `apps/` directory contains complete applications:

### [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#apps/web/)  apps/web/

- Main Formbricks web application (Next.js)
- Primary application with full feature set
- Uses App Router architecture
- Contains environment-specific settings and configurations

### [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#apps/demo/)  apps/demo/

- Demo application (Next.js)
- Showcases Formbricks in-product surveying functionality
- Used for testing and demonstration purposes

### [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#apps/demo-react-native/)  apps/demo-react-native/

- React Native demo app (React Native)
- Demonstrates mobile integration capabilities
- Example implementation for React Native

### [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#apps/storybook/)  apps/storybook/

- Component documentation
- Visual documentation of UI components
- Testing environment for isolated components

## [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#packages-directory)  Packages Directory

The `packages/` directory contains shared libraries and utilities:

### [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#packages/js-core/)  packages/js-core/

- Contains core functionality for in-product surveys
- Shared logic between different SDK implementations
- Base classes and utilities

### [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#packages/js/)  packages/js/

- JavaScript SDK for browser-based applications
- Used for running surveys on websites and web apps (browser)
- Public NPM package

### [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#packages/react-native/)  packages/react-native/

- React Native SDK
- Used to run surveys in mobile apps built with React Native / Expo
- Includes native platform adaptations

### [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#packages/lib/)  packages/lib/

- Shared business logic
- Shared utilities and helpers

### [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#packages/types/)  packages/types/

- TypeScript type definitions
- Zod schemas for validation

### [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#packages/database/)  packages/database/

- Database schemas and migrations
- Prisma schema definitions
- Migration management

### [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#packages/surveys/)  packages/surveys/

- Survey-specific functionality
- Survey rendering logic and UI components
- Survey state management

## [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#module-organization)  Module Organization

### [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#core-module-structure)  Core Module Structure

Each feature module follows a consistent structure:

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

## [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#adding-new-code)  Adding New Code

### [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#new-features)  New Features

When adding new features, follow these guidelines:

1. **Determine Scope**:   - Complete application → `apps/`
   - Shared library → `packages/`
   - Feature for existing app → appropriate module in `apps/web/modules/`
2. **Module Creation**:
Create a new module with the standard structure:






Copy











```
modules/
└── your-feature/
       ├── components/    # React components
       ├── lib/           # Business logic
       ├── types/         # TypeScript types
       ├── actions.ts     # Server actions
       └── route.ts       # API routes
```

3. **Component Organization**:   - Base UI components → `modules/ui/components/`
   - Feature-specific components → `modules/[feature]/components/`

## [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#best-practices)  Best Practices

### [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#code-organization)  Code Organization

- Keep modules focused and single-purpose
- Maintain clear separation between UI and business logic
- Use proper TypeScript interfaces and types

### [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#file-structure)  File Structure

- Group related files in descriptive directories
- Use consistent naming patterns
- Keep files focused and modular

### [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#module-independence)  Module Independence

- Minimize dependencies between modules
- Share common utilities through appropriate packages
- Maintain clear module boundaries

### [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#documentation)  Documentation

- Document complex logic and APIs as laid out in the [Documentation](https://formbricks.com/docs/development/standards/practices/documentation) section
- Keep documentation current with code changes

## [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#testing-organization)  Testing Organization

### [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#test-file-location)  Test File Location

- Test files should be located alongside the code they test
- Use `.test.ts` or `.spec.ts` suffix for test files
- Example: `user-service.test.ts` for `user-service.ts`

### [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#test-directory-structure)  Test Directory Structure

Copy

```
feature/
├── tests/ # Test directory (if grouping tests)
├── components/ # Feature components
└── lib/ # Business logic
```

## [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#configuration-files)  Configuration Files

### [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#root-level-configuration)  Root Level Configuration

- `.eslintrc.js` \- ESLint configuration
- `tsconfig.json` \- TypeScript configuration
- `package.json` \- Package metadata and scripts
- `.env` \- Environment variables

### [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#package-level-configuration)  Package Level Configuration

Each package maintains its own configuration files:

- `package.json` \- Package-specific dependencies and scripts
- `tsconfig.json` \- Package-specific TypeScript settings
- `.eslintrc.js` \- Package-specific linting rules

## [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#version-control)  Version Control

### [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#git-organization)  Git Organization

- `.gitignore` \- Specifies ignored files and directories
- `.github/` \- GitHub specific configurations and workflows
- `CHANGELOG.md` \- Documents version changes
- `LICENSE` \- License information

## [​](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization\#conclusion)  Conclusion

Following these organizational patterns ensures:

- Consistent code structure across the project
- Easy navigation and maintenance
- Clear separation of concerns
- Scalable architecture for future growth

Remember to maintain these patterns when adding new code to keep the codebase organized and maintainable.

Was this page helpful?

YesNo

[Tenant Separation](https://formbricks.com/docs/development/technical-handbook/tenant-separation) [Naming Conventions](https://formbricks.com/docs/development/standards/organization/naming-conventions)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.