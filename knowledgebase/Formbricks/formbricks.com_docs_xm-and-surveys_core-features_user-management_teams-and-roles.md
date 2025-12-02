---
url: "https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles"
title: "Teams and roles - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

User Management

Teams and roles

[Overview](https://formbricks.com/docs/overview/introduction) [XM & Surveys](https://formbricks.com/docs/xm-and-surveys/overview) [Self Hosting](https://formbricks.com/docs/self-hosting/overview) [Development](https://formbricks.com/docs/development/overview) [API v1 Reference](https://formbricks.com/docs/api-reference/rest-api) [API v2 Reference (Beta)](https://formbricks.com/docs/api-v2-reference/introduction)

##### XM & Surveys

- [XM & Surveys](https://formbricks.com/docs/xm-and-surveys/overview)

##### Surveys

- General Features

- Link Surveys

- Website & App Surveys

- Question Types


##### Platform Features

- Integrations

- User Management

  - [Key Concepts](https://formbricks.com/docs/xm-and-surveys/core-features/user-management)
  - [Organizations and roles](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/organizations-and-roles)
  - [Teams and roles](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles)
  - [Invite members](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/invite-members)
  - [Two-factor authentication](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/two-factor-auth)
- [Styling Theme](https://formbricks.com/docs/xm-and-surveys/core-features/styling-theme)
- [Email Branding](https://formbricks.com/docs/xm-and-surveys/core-features/email-customization)
- [Test Environment](https://formbricks.com/docs/xm-and-surveys/core-features/test-environment)

##### XM

- Best Practices


On this page

- [Understanding the role hierarchy](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles#understanding-the-role-hierarchy)
- [How roles interact](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles#how-roles-interact)
- [Team-level roles](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles#team-level-roles)
- [Team Admins](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles#team-admins)
- [Team Contributors](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles#team-contributors)
- [Project-level permissions](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles#project-level-permissions)
- [Read](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles#read)
- [Read & Write](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles#read-&-write)
- [Manage](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles#manage)
- [Permission examples](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles#permission-examples)
- [Scenario 1: Marketing Team Member](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles#scenario-1:-marketing-team-member)
- [Scenario 2: Team Lead](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles#scenario-2:-team-lead)
- [Scenario 3: Department Manager](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles#scenario-3:-department-manager)

User Management

# Teams and roles

Learn about team-level roles and project permissions that enable granular access control within teams and projects.

Team-level roles provide more granular permissions within specific teams and projects. These roles work alongside organization-level roles to create a flexible permission system.

Team-level roles are a feature of the [Enterprise Edition](https://formbricks.com/docs/self-hosting/advanced/license). In the Community Edition, all members are Organisation-level “Owners”.

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles\#understanding-the-role-hierarchy)  Understanding the role hierarchy

Formbricks uses a two-tier permission system:

1. **Organization-level roles** \- Apply across all teams and projects
2. **Team-level roles** \- Apply within specific teams and projects

### [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles\#how-roles-interact)  How roles interact

- Organization-level roles (Owner, Manager) can override team-level restrictions
- Team-level roles provide granular control for specific teams
- Project permissions further refine what users can do within individual projects

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles\#team-level-roles)  Team-level roles

### [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles\#team-admins)  Team Admins

- Have additional permissions to manage their team’s membership and projects
- Can add or remove team members
- Can create and manage projects within their team
- Can assign project-level permissions to team members
- These permissions are granted at the team-level and don’t apply to teams where they’re not a Team Admin

### [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles\#team-contributors)  Team Contributors

- Can view and act on surveys and responses within their assigned projects
- Cannot manage team membership or create new projects
- Permissions depend on their project-level access (Read, Read & Write, or Manage)

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles\#project-level-permissions)  Project-level permissions

Within each project, team members can have one of three permission levels:

### [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles\#read)  Read

- Read access to all resources (except settings) in the project
- Can view surveys, responses, and analytics
- Cannot create, edit, or delete surveys
- Cannot modify project settings

### [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles\#read-&-write)  Read & Write

- Read & write access to all resources (except settings) in the project
- Can create, edit, and delete surveys
- Can manage responses and tags
- Can download survey data
- Cannot modify project settings or manage integrations

### [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles\#manage)  Manage

- Read & write access to all resources including settings in the project
- Full project control including settings
- Can manage API keys and integrations
- Can configure project-level settings like recontact options and styling
- Can manage project tags and actions

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles\#permission-examples)  Permission examples

### [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles\#scenario-1:-marketing-team-member)  Scenario 1: Marketing Team Member

- **Organization role**: Member
- **Team role**: Team Contributor
- **Project permission**: Read & Write
- **Can do**: Create and edit surveys, view responses, download data
- **Cannot do**: Change project settings, manage team membership

### [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles\#scenario-2:-team-lead)  Scenario 2: Team Lead

- **Organization role**: Member
- **Team role**: Team Admin
- **Project permission**: Manage
- **Can do**: Everything within their team including managing members and project settings
- **Cannot do**: Access other teams, change organization settings

### [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles\#scenario-3:-department-manager)  Scenario 3: Department Manager

- **Organization role**: Manager
- **Team role**: N/A (org role overrides)
- **Project permission**: N/A (org role provides access)
- **Can do**: Access all teams and projects, manage organization membership
- **Cannot do**: Change organization-level settings like billing

Was this page helpful?

YesNo

[Organizations and roles](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/organizations-and-roles) [Invite members](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/invite-members)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.