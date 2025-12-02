---
url: "https://formbricks.com/docs/development/technical-handbook/overview"
title: "Solution Overview - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/development/technical-handbook/overview#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Technical Handbook

Solution Overview

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


##### Contributions

- [Contribute to Formbricks](https://formbricks.com/docs/development/contribution/contribution)

##### Guides

- Auth & Provision


##### Support

- [Troubleshooting](https://formbricks.com/docs/development/support/troubleshooting)

On this page

- [System Architecture](https://formbricks.com/docs/development/technical-handbook/overview#system-architecture)
- [Key Components](https://formbricks.com/docs/development/technical-handbook/overview#key-components)
- [Users](https://formbricks.com/docs/development/technical-handbook/overview#users)
- [Client Applications](https://formbricks.com/docs/development/technical-handbook/overview#client-applications)
- [Core Platform](https://formbricks.com/docs/development/technical-handbook/overview#core-platform)
- [Data Storage](https://formbricks.com/docs/development/technical-handbook/overview#data-storage)
- [Communication Flow](https://formbricks.com/docs/development/technical-handbook/overview#communication-flow)
- [Technology Stack](https://formbricks.com/docs/development/technical-handbook/overview#technology-stack)

Technical Handbook

# Solution Overview

High-level architecture and technical details of the Formbricks platform

The Formbricks platform is designed with a modern, unified architecture that prioritizes developer experience and performance. This overview outlines the system’s architecture, key technology choices, and how different components interact.

## [​](https://formbricks.com/docs/development/technical-handbook/overview\#system-architecture)  System Architecture

Formbricks uses a unified architecture with Next.js at its core, serving both the frontend and backend capabilities. Here’s an interactive overview of the system:

Formbricks Platform

Client Applications

Users

Storage

Uses

Interacts

Direct Access

Manages

REST API

REST API

Cache Data

Read/Write

File Upload

Mobile User

Web User

Link Survey User

Admin

Mobile App\\niOS/Android SDK

Survey Widget\\nJavaScript SDK

Next.js Server\\nAPI Routes + SSR\\nBusiness Logic

PostgreSQL\\nSurveys & Data

Redis\\nPerformance Cache

File Storage\\nUploads

### [​](https://formbricks.com/docs/development/technical-handbook/overview\#key-components)  Key Components

#### [​](https://formbricks.com/docs/development/technical-handbook/overview\#users)  Users

- **Mobile Users**: Access surveys through native mobile applications
- **Web Users**: Interact with embedded survey widgets on websites
- **Link Survey Users**: Access surveys directly through shared URLs
- **Admins**: Manage surveys and view responses through the web dashboard

#### [​](https://formbricks.com/docs/development/technical-handbook/overview\#client-applications)  Client Applications

- **Survey Widget**: A JavaScript component that can be embedded in web applications
- **Mobile Application**: Native iOS/Android apps that integrate with the Formbricks SDK
- **Web Dashboard**: The admin interface for managing surveys and viewing responses

#### [​](https://formbricks.com/docs/development/technical-handbook/overview\#core-platform)  Core Platform

- **Next.js Server**: The central component that handles:

  - Frontend rendering and SSR
  - API routes for client communication
  - Business logic implementation
  - Survey display and response collection

#### [​](https://formbricks.com/docs/development/technical-handbook/overview\#data-storage)  Data Storage

- **PostgreSQL Database**: Primary data store for:

  - Survey definitions
  - Response data
  - User and organization information
- **Redis Cache**: Performance optimization through:

  - Caching frequently accessed data
  - Reducing database load
  - Improving response times

### [​](https://formbricks.com/docs/development/technical-handbook/overview\#communication-flow)  Communication Flow

1. **Client Interaction**   - Web users interact with embedded survey widgets
   - Mobile users engage with surveys through native apps
   - Link survey users access surveys directly via URLs
   - Admins manage the system through the web dashboard
2. **Data Flow**   - Clients communicate with the Next.js server via REST APIs
   - Survey data is fetched and responses are submitted over HTTPS
   - The server processes requests and interacts with the database using Prisma ORM
   - Frequently accessed data is cached in Redis for performance
3. **Data Storage**   - Persistent data is stored in PostgreSQL
   - Frequently accessed data is cached in Redis
   - File attachments are handled through the configured storage provider

## [​](https://formbricks.com/docs/development/technical-handbook/overview\#technology-stack)  Technology Stack

- **Frontend**: React, TailwindCSS, Radix UI
- **Backend**: Next.js App Router with API Routes
- **Database**: PostgreSQL with Prisma ORM
- **Caching**: Redis
- **API**: REST with OpenAPI specification
- **Testing**: Playwright for E2E, Vitest for unit tests

Was this page helpful?

YesNo

[GitHub Codespaces](https://formbricks.com/docs/development/local-setup/github-codespaces) [Database Model](https://formbricks.com/docs/development/technical-handbook/database-model)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.