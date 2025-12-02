---
url: "https://formbricks.com/docs/development/standards/organization/naming-conventions"
title: "Naming Conventions - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/development/standards/organization/naming-conventions#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Code Organization

Naming Conventions

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

- [Files and Directories](https://formbricks.com/docs/development/standards/organization/naming-conventions#files-and-directories)
- [General Files](https://formbricks.com/docs/development/standards/organization/naming-conventions#general-files)
- [Special Files](https://formbricks.com/docs/development/standards/organization/naming-conventions#special-files)
- [Code Symbols](https://formbricks.com/docs/development/standards/organization/naming-conventions#code-symbols)
- [Variables and Functions](https://formbricks.com/docs/development/standards/organization/naming-conventions#variables-and-functions)
- [Classes and Types](https://formbricks.com/docs/development/standards/organization/naming-conventions#classes-and-types)
- [Constants](https://formbricks.com/docs/development/standards/organization/naming-conventions#constants)
- [Database Models](https://formbricks.com/docs/development/standards/organization/naming-conventions#database-models)
- [Components](https://formbricks.com/docs/development/standards/organization/naming-conventions#components)
- [API and Endpoints](https://formbricks.com/docs/development/standards/organization/naming-conventions#api-and-endpoints)
- [Schema and Validation](https://formbricks.com/docs/development/standards/organization/naming-conventions#schema-and-validation)
- [Error Handling](https://formbricks.com/docs/development/standards/organization/naming-conventions#error-handling)
- [Best Practices](https://formbricks.com/docs/development/standards/organization/naming-conventions#best-practices)

Code Organization

# Naming Conventions

This section outlines the guidelines for naming conventions across the codebase, ensuring consistency and clarity in the project.

## [​](https://formbricks.com/docs/development/standards/organization/naming-conventions\#files-and-directories)  Files and Directories

### [​](https://formbricks.com/docs/development/standards/organization/naming-conventions\#general-files)  General Files

- Use lowercase and hyphen-separated names (kebab-case) for files and directories
  - ✅ `user-profile.ts`
  - ❌ `UserProfile.ts`
- Group related files in directories with descriptive plural names
  - ✅ `components`, `services`, `utils`
  - ❌ `component`, `util`

### [​](https://formbricks.com/docs/development/standards/organization/naming-conventions\#special-files)  Special Files

- Configuration files should follow framework conventions
  - ✅ `next.config.mjs`, `tailwind.config.js`
- Test files should mirror source files with `.test` or `.spec` suffix

  - ✅ `user-service.test.ts` for `user-service.ts`
- Database migration files should include timestamp and description
  - ✅ `20241017124431_add_documents_and_insights.sql`

## [​](https://formbricks.com/docs/development/standards/organization/naming-conventions\#code-symbols)  Code Symbols

### [​](https://formbricks.com/docs/development/standards/organization/naming-conventions\#variables-and-functions)  Variables and Functions

- Use camelCase for variables and function names
  - ✅ `fetchUserData`, `isLoading`, `handleSubmit`
  - ❌ `FetchUserData`, `is_loading`
- Boolean variables should use is/has/should prefix
  - ✅ `isVerifyEmailEnabled`, `hasPermission`, `shouldDisplay`
- Async functions should use verb prefixes suggesting async
  - ✅ `fetchData`, `createUser`, `updateProfile`

### [​](https://formbricks.com/docs/development/standards/organization/naming-conventions\#classes-and-types)  Classes and Types

- Use PascalCase for:
  - Classes: `Config`, `Client`, `ResponseAPI`
  - Interfaces: `TSurveySummaryResponse`, `ApiConfig`
  - Type aliases: `TResponseData`, `TJsTrackProperties`
- Prefix types with T and interfaces with I (when helpful)
  - ✅ `TStats`, `TResponseData`, `IApiConfig`
- Enum names should be PascalCase, values in UPPER\_SNAKE\_CASE







Copy











```
enum ProjectFeatureKeys {
    FREE = "free",
    STARTUP = "startup",
    SCALE = "scale"
}
```


### [​](https://formbricks.com/docs/development/standards/organization/naming-conventions\#constants)  Constants

- Use UPPER\_SNAKE\_CASE for constant values
  - ✅ `API_TIMEOUT`, `MAX_RETRIES`, `CONTAINER_ID`
- Use PascalCase for constant references/objects
  - ✅ `ErrorCodes`, `Config`

### [​](https://formbricks.com/docs/development/standards/organization/naming-conventions\#database-models)  Database Models

- Use PascalCase singular form for model names
  - ✅ `Survey`, `Response`, `Document`
- Use camelCase for field names
  - ✅ `createdAt`, `environmentId`, `isSpam`
- Use snake\_case for database column names
  - ✅ `created_at`, `updated_at`

### [​](https://formbricks.com/docs/development/standards/organization/naming-conventions\#components)  Components

- Use PascalCase for React components and their files
  - ✅ `SurveyCard.tsx`, `UserProfile.tsx`
- Component-specific types should be prefixed with component name
  - ✅ `SurveyCardProps`, `UserProfileData`

### [​](https://formbricks.com/docs/development/standards/organization/naming-conventions\#api-and-endpoints)  API and Endpoints

- Use kebab-case for API endpoints
  - ✅ `/api/user-profile`, `/api/survey-responses`
- Use camelCase for query parameters
  - ✅ `/api/surveys?pageSize=10&sortOrder=desc`

## [​](https://formbricks.com/docs/development/standards/organization/naming-conventions\#schema-and-validation)  Schema and Validation

- Prefix Zod schemas with Z
  - ✅ `ZSurvey`, `ZDocument`, `ZInsight`
- Use descriptive names for validation schemas
  - ✅ `ZUpdateDocumentAction`, `ZGenerateDocumentObjectSchema`

## [​](https://formbricks.com/docs/development/standards/organization/naming-conventions\#error-handling)  Error Handling

- Suffix error classes with “Error”
  - ✅ `ValidationError`, `DatabaseError`, `AuthenticationError`
- Use descriptive names for error types
  - ✅ `SURVEY_NOT_FOUND`, `INVALID_RESPONSE`

## [​](https://formbricks.com/docs/development/standards/organization/naming-conventions\#best-practices)  Best Practices

- Keep names descriptive but concise
- Be consistent within each context
- Follow existing patterns in the codebase
- Use full words instead of abbreviations unless widely accepted
  - ✅ `configuration` vs ❌ `config` (except in standard terms)
  - ✅ `id`, `url` (standard abbreviations are acceptable)

By following these conventions, we maintain consistency and clarity across the codebase, making it more maintainable and easier to understand for all team members.

Was this page helpful?

YesNo

[File and Directory Org.](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization) [Modules & Components](https://formbricks.com/docs/development/standards/organization/module-component-structure)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.