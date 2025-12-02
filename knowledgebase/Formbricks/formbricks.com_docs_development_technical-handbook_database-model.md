---
url: "https://formbricks.com/docs/development/technical-handbook/database-model"
title: "Database Model - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/development/technical-handbook/database-model#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Technical Handbook

Database Model

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

- [Entity Relationship Diagram](https://formbricks.com/docs/development/technical-handbook/database-model#entity-relationship-diagram)
- [Core Models](https://formbricks.com/docs/development/technical-handbook/database-model#core-models)
- [Organization & Project Management](https://formbricks.com/docs/development/technical-handbook/database-model#organization-&-project-management)
- [Survey Management](https://formbricks.com/docs/development/technical-handbook/database-model#survey-management)
- [User Management](https://formbricks.com/docs/development/technical-handbook/database-model#user-management)
- [Data Isolation](https://formbricks.com/docs/development/technical-handbook/database-model#data-isolation)
- [Schema Management](https://formbricks.com/docs/development/technical-handbook/database-model#schema-management)
- [PostgreSQL Database Tables](https://formbricks.com/docs/development/technical-handbook/database-model#postgresql-database-tables)
- [Schema Reference](https://formbricks.com/docs/development/technical-handbook/database-model#schema-reference)

Technical Handbook

# Database Model

Overview of the Formbricks database schema and relationships

Formbricks uses PostgreSQL as its primary database and [Prisma](https://www.prisma.io/) as the Object-Relational Mapping (ORM) tool. The database schema is designed to support multi-tenancy, survey management, and response collection while maintaining data isolation between organizations.

## [​](https://formbricks.com/docs/development/technical-handbook/database-model\#entity-relationship-diagram)  Entity Relationship Diagram

The following diagram shows the core entities and their relationships in the Formbricks database:

OrganizationProjectMembershipTeamInviteEnvironmentLanguageProjectTeamSurveyContactActionClassApiKeyIntegrationResponseDisplaySurveyTriggerSurveyAttributeFilterSurveyLanguageContactAttributeUserAccountTeamUserTagsOnResponsesTagContactAttributeKeyhas manyhas manyhas manysendshas twosupportshascontainstracksdefineshasconfiguresreceivestracksconfigured byfiltered bytranslated toprovidesseeshasbelongs tohasmember ofincludeshas access totagged withapplied totriggersdefinesused in

## [​](https://formbricks.com/docs/development/technical-handbook/database-model\#core-models)  Core Models

### [​](https://formbricks.com/docs/development/technical-handbook/database-model\#organization-&-project-management)  Organization & Project Management

1. **Organization**   - Top-level entity for multi-tenancy
   - Contains multiple projects and team members
   - Manages billing and whitelabel settings
2. **Project**   - Groups related surveys and configurations
   - Has two environments (production/development)
   - Controls branding and display settings
3. **Environment**   - Isolates production and development resources
   - Contains surveys, contacts, and actions
   - Manages API keys and integrations

### [​](https://formbricks.com/docs/development/technical-handbook/database-model\#survey-management)  Survey Management

1. **Survey**   - Central model for questionnaires
   - Configurable with multiple questions and display rules
   - Supports multiple languages and targeting filters
2. **Response**   - Records user answers to surveys
   - Links to contact information when available
   - Supports tagging and notes for analysis
3. **ActionClass**   - Defines triggering points for surveys
   - Can be code-based or no-code configurations
   - Links surveys to specific user actions

### [​](https://formbricks.com/docs/development/technical-handbook/database-model\#user-management)  User Management

1. **User**   - Represents system users (admins/team members)
   - Manages authentication and preferences
   - Can belong to multiple organizations
2. **Contact**   - Represents survey respondents
   - Stores attributes for targeting
   - Tracks survey displays and responses
3. **Team**   - Groups users within organizations
   - Controls project access permissions
   - Facilitates collaborative survey management

## [​](https://formbricks.com/docs/development/technical-handbook/database-model\#data-isolation)  Data Isolation

The database schema ensures proper data isolation through:

1. **Organization-level isolation**   - Each organization has its own projects
   - Users can belong to multiple organizations
   - Resources are scoped to organizations
2. **Environment-level isolation**   - Separate production and development environments
   - Independent surveys, contacts, and actions
   - Isolated API keys and integrations
3. **Project-level isolation**   - Project-specific configurations
   - Separate language settings
   - Team-based access control

## [​](https://formbricks.com/docs/development/technical-handbook/database-model\#schema-management)  Schema Management

The database schema is managed through Prisma, which provides:

- Type-safe database client
- Automatic migration generation
- Schema versioning
- Data validation
- Query optimization

For detailed information about specific models and their properties, refer to the [schema.prisma](https://github.com/formbricks/formbricks/blob/main/packages/database/schema.prisma) file in the repository.

## [​](https://formbricks.com/docs/development/technical-handbook/database-model\#postgresql-database-tables)  PostgreSQL Database Tables

Formbricks stores all data in PostgreSQL tables. Here’s a comprehensive list of all database tables and their purposes:

| Table Name | Description |
| --- | --- |
| Account | Stores third-party authentication accounts (OAuth) and their tokens |
| ActionClass | Defines triggerable events that can launch surveys |
| ApiKey | Stores API authentication keys for environment-specific access |
| Contact | Records information about user that can receive and respond to surveys |
| ContactAttribute | Stores attribute values for contacts (e.g., role, company size) |
| ContactAttributeKey | Defines available attribute types for contacts |
| DataMigration | Tracks the status of database schema migrations |
| Display | Records when and to whom surveys were shown |
| Environment | Manages production/development environments within projects |
| Integration | Stores configuration for third-party service integrations |
| Invite | Manages pending invitations to join organizations |
| Language | Defines supported languages for multi-lingual surveys |
| Membership | Links users to organizations with specific roles |
| Organization | Top-level container for projects and team management |
| Project | Groups related surveys and environments |
| ProjectTeam | Manages team access permissions to projects |
| Response | Stores survey responses and associated metadata |
| Segment | Defines groups of contacts based on attributes |
| Survey | Stores survey configurations, questions, and display rules |
| SurveyAttributeFilter | Defines targeting rules for surveys based on contact attributes |
| SurveyFollowUp | Configures automated actions based on survey responses |
| SurveyLanguage | Links surveys to their supported languages |
| SurveyTrigger | Connects surveys to their triggering actions |
| Tag | Stores labels for categorizing responses |
| TagsOnResponses | Junction table linking tags to responses |
| Team | Groups users within organizations |
| TeamUser | Links users to teams with specific roles |
| User | Stores user account information and preferences |
| Webhook | Manages webhook endpoints for event notifications |

## [​](https://formbricks.com/docs/development/technical-handbook/database-model\#schema-reference)  Schema Reference

For detailed information about the database schema, including:

- Complete field definitions
- Relationships between tables
- Enums and custom types
- Field constraints and indices
- JSON field structures

Please refer to the [Prisma schema file](https://github.com/formbricks/formbricks/blob/main/packages/database/schema.prisma) in our GitHub repository.The schema.prisma file contains extensive documentation comments for each model, making it the authoritative reference for the database structure.

Was this page helpful?

YesNo

[Solution Overview](https://formbricks.com/docs/development/technical-handbook/overview) [Tenant Separation](https://formbricks.com/docs/development/technical-handbook/tenant-separation)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.