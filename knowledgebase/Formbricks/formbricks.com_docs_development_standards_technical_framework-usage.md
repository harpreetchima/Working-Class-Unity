---
url: "https://formbricks.com/docs/development/standards/technical/framework-usage"
title: "Framework Usage - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/development/standards/technical/framework-usage#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Technical Standards

Framework Usage

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

  - [Language-Specific](https://formbricks.com/docs/development/standards/technical/language-specific-conventions)
  - [Framework Usage](https://formbricks.com/docs/development/standards/technical/framework-usage)
- Quality Assurance


##### Contributions

- [Contribute to Formbricks](https://formbricks.com/docs/development/contribution/contribution)

##### Guides

- Auth & Provision


##### Support

- [Troubleshooting](https://formbricks.com/docs/development/support/troubleshooting)

On this page

- [Introduction](https://formbricks.com/docs/development/standards/technical/framework-usage#introduction)
- [Next.js](https://formbricks.com/docs/development/standards/technical/framework-usage#next-js)
- [App Router and Server Components](https://formbricks.com/docs/development/standards/technical/framework-usage#app-router-and-server-components)
- [Data Fetching in page.tsx](https://formbricks.com/docs/development/standards/technical/framework-usage#data-fetching-in-page-tsx)
- [Server Actions for Mutations](https://formbricks.com/docs/development/standards/technical/framework-usage#server-actions-for-mutations)
- [Error Handling and Performance](https://formbricks.com/docs/development/standards/technical/framework-usage#error-handling-and-performance)
- [Tailwind CSS](https://formbricks.com/docs/development/standards/technical/framework-usage#tailwind-css)
- [Prisma ORM](https://formbricks.com/docs/development/standards/technical/framework-usage#prisma-orm)

Technical Standards

# Framework Usage

Guidelines on how Formbricks utilizes Next.js, Tailwind CSS, and Prisma ORM for efficient development and performance.

## [​](https://formbricks.com/docs/development/standards/technical/framework-usage\#introduction)  Introduction

This document outlines the framework usage guidelines for Formbricks, which is built primarily on Next.js (with heavy use of Server-Side Rendering through the App Router), Tailwind CSS, and Prisma ORM.

## [​](https://formbricks.com/docs/development/standards/technical/framework-usage\#next-js)  Next.js

### [​](https://formbricks.com/docs/development/standards/technical/framework-usage\#app-router-and-server-components)  App Router and Server Components

- Use the Next.js App Router with the /app directory for building the application.
- Leverage React Server Components, which are the default in the App Router.
- Perform server-side data fetching directly within page.tsx files using async function components.

### [​](https://formbricks.com/docs/development/standards/technical/framework-usage\#data-fetching-in-page-tsx)  Data Fetching in page.tsx

- Implement data fetching logic directly in your page.tsx components. This allows for server-side rendering without needing separate data fetching methods like getServerSideProps.
- Utilize React Suspense and streaming features if using advanced asynchronous patterns.

### [​](https://formbricks.com/docs/development/standards/technical/framework-usage\#server-actions-for-mutations)  Server Actions for Mutations

- Define Server Actions in dedicated action.ts files.
- Server actions serve as entry points for mutations and delegate to service layers that perform Prisma operations and other business logic.
- This approach promotes separation of concerns and maintainability by keeping form actions and mutations decoupled from UI components.

### [​](https://formbricks.com/docs/development/standards/technical/framework-usage\#error-handling-and-performance)  Error Handling and Performance

- Integrate error boundaries and loading states appropriately within your App Router structure.
- Optimize performance with Next.js built-in features such as dynamic imports, the Image component, and code splitting.

## [​](https://formbricks.com/docs/development/standards/technical/framework-usage\#tailwind-css)  Tailwind CSS

We follow the Tailwind framework as intended. Please have a look at the [Tailwind CSS Guidelines](https://tailwindcss.com/docs/styling-with-utility-classes) for more information.

## [​](https://formbricks.com/docs/development/standards/technical/framework-usage\#prisma-orm)  Prisma ORM

We’re working with Prisma as our ORM. Please have a look at the [Prisma ORM Documentation](https://www.prisma.io/docs/orm) for more information.

Was this page helpful?

YesNo

[Language-Specific](https://formbricks.com/docs/development/standards/technical/language-specific-conventions) [Code Reviews](https://formbricks.com/docs/development/standards/qa/code-reviews)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.