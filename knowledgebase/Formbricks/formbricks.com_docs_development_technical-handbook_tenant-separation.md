---
url: "https://formbricks.com/docs/development/technical-handbook/tenant-separation"
title: "Tenant Separation - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/development/technical-handbook/tenant-separation#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Technical Handbook

Tenant Separation

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

- [Multi-Tenancy in Formbricks Cloud](https://formbricks.com/docs/development/technical-handbook/tenant-separation#multi-tenancy-in-formbricks-cloud)
- [Organizational Structure](https://formbricks.com/docs/development/technical-handbook/tenant-separation#organizational-structure)
- [1\. Organization-Level Isolation](https://formbricks.com/docs/development/technical-handbook/tenant-separation#1-organization-level-isolation)
- [2\. Project-Level Isolation](https://formbricks.com/docs/development/technical-handbook/tenant-separation#2-project-level-isolation)
- [3\. Environment-Level Isolation](https://formbricks.com/docs/development/technical-handbook/tenant-separation#3-environment-level-isolation)
- [Data Security in Multi-Tenant Environment](https://formbricks.com/docs/development/technical-handbook/tenant-separation#data-security-in-multi-tenant-environment)

Technical Handbook

# Tenant Separation

How Formbricks handles tenant separation on Formbricks Cloud

Formbricks Cloud is designed to support multiple tenants, each with their own set of surveys and data. This page describes the different ways to configure and use Formbricks for multi-tenancy.

This documentation only applies to Formbricks Cloud instances. On-premise deployments handle tenant separation differently based on your specific setup and requirements.

## [​](https://formbricks.com/docs/development/technical-handbook/tenant-separation\#multi-tenancy-in-formbricks-cloud)  Multi-Tenancy in Formbricks Cloud

Formbricks Cloud is architected as a true multi-tenant system where each organization operates in its own isolated environment while sharing the underlying infrastructure. This approach allows multiple organizations to use the platform independently without visibility into each other’s data.

### [​](https://formbricks.com/docs/development/technical-handbook/tenant-separation\#organizational-structure)  Organizational Structure

Organization

Project 1

Project 2

Project n

Development Environment

Production Environment

Surveys

Contacts

Actions

API Keys

Webhooks

Integrations

Surveys

Contacts

Actions

API Keys

Webhooks

Integrations

The multi-tenant architecture in Formbricks Cloud is built around three key levels of isolation:

### [​](https://formbricks.com/docs/development/technical-handbook/tenant-separation\#1-organization-level-isolation)  1\. Organization-Level Isolation

- Each tenant is represented by an Organization entity
- Organizations are completely separated from each other
- Users can be members of multiple organizations simultaneously
- All resources and data belong exclusively to a single organization
- Role-based access control (RBAC) with specific roles:
  - Owner: Full access to all organization resources
  - Manager: Can manage members and billing
  - Member: Basic access to organization resources
  - Billing: Access to billing information only
- Billing and subscription management occurs at the organization level

### [​](https://formbricks.com/docs/development/technical-handbook/tenant-separation\#2-project-level-isolation)  2\. Project-Level Isolation

Projects provide an additional layer of isolation within an organization:

- Organizations can have multiple projects to separate different applications or product lines
- Projects have their own configuration, branding, and style settings
- Team-based access control allows fine-grained permission management within projects
- Language settings and customizations are project-specific

### [​](https://formbricks.com/docs/development/technical-handbook/tenant-separation\#3-environment-level-isolation)  3\. Environment-Level Isolation

Within each organization’s projects, further isolation is maintained through environments:

- Each project has separate production and development environments
- Complete separation of resources between environments:
  - Surveys and responses
  - Contacts and attributes
  - Action classes and triggers
  - API keys and integrations
  - Webhooks and notifications
  - Segments and targeting rules
- Environments are created automatically when a project is created
- Changes in development environments have no impact on production
- Surveys can be copied between environments
- Each environment has its own dedicated resources and settings

## [​](https://formbricks.com/docs/development/technical-handbook/tenant-separation\#data-security-in-multi-tenant-environment)  Data Security in Multi-Tenant Environment

Formbricks ensures data security in its multi-tenant environment through:

- **Database Layer Isolation**:  - Foreign key constraints enforce data isolation
  - Each resource is scoped to its organization
  - Cascading deletes maintain referential integrity
- **Authentication Boundaries**:  - Role-based access control (RBAC)
  - Session management per organization
  - Multi-factor authentication support
- **API Access Control**:  - API keys are scoped to specific environments
  - Rate limiting per organization
  - Request validation and sanitization
- **Resource Quotas**:  - Organization-level limits based on billing plan

This multi-layered approach to tenant separation ensures that organizations can safely use Formbricks Cloud with complete data privacy and isolation from other tenants.

Was this page helpful?

YesNo

[Database Model](https://formbricks.com/docs/development/technical-handbook/database-model) [File and Directory Org.](https://formbricks.com/docs/development/standards/organization/file-and-directory-organization)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.