---
url: "https://formbricks.com/docs/xm-and-surveys/core-features/user-management/organizations-and-roles"
title: "Organizations and roles - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/organizations-and-roles#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

User Management

Organizations and roles

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

- [Role hierarchy](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/organizations-and-roles#role-hierarchy)
- [Role Permissions and Privilege Escalation Prevention](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/organizations-and-roles#role-permissions-and-privilege-escalation-prevention)
- [Organization-level roles](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/organizations-and-roles#organization-level-roles)
- [Owner](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/organizations-and-roles#owner)
- [Manager](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/organizations-and-roles#manager)
- [Billing](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/organizations-and-roles#billing)
- [Member](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/organizations-and-roles#member)
- [Detailed permissions matrix](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/organizations-and-roles#detailed-permissions-matrix)
- [Best practices](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/organizations-and-roles#best-practices)

User Management

# Organizations and roles

Understand organization-level roles and how they control access to teams, projects, and data across your Formbricks organization.

Organization-level roles apply to all teams and projects within your Formbricks organization. These roles provide broad permissions that determine what users can do across the entire organization.

Access Roles is a feature of the [Enterprise Edition](https://formbricks.com/docs/self-hosting/advanced/license). In the **Community Edition** and on the **Free**
and **Startup** plan in the Cloud you can invite unlimited organization members as `Owner`.

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/organizations-and-roles\#role-hierarchy)  Role hierarchy

Here are the different access permissions, ranked from highest to lowest access:

1. **Owner** \- Full organizational control
2. **Manager** \- Management access with some restrictions
3. **Billing** \- Billing and payment management only
4. **Member** \- Basic access to assigned projects

### [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/organizations-and-roles\#role-permissions-and-privilege-escalation-prevention)  Role Permissions and Privilege Escalation Prevention

To prevent privilege escalation, the following rules apply:

- **Owners** can:  - Invite users as owners, managers, or members
  - Assign roles up to owner level
- **Managers** can:  - Invite users only as members
  - Assign roles up to member only, not manager or owner
- **Members** cannot:  - Invite users
  - Assign roles

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/organizations-and-roles\#organization-level-roles)  Organization-level roles

All users and their organization-level roles are listed in **Organization Settings > Access Control**. Users can hold any of the following org-level roles:

### [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/organizations-and-roles\#owner)  Owner

- Have full access to the organization, its data, and settings
- Can perform Team Admin actions without needing to join the team
- Can manage all aspects of the organization including billing, integrations, and member management

### [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/organizations-and-roles\#manager)  Manager

- Have full management access to all teams and projects
- Can manage the organization’s membership (but can only invite or assign users as members)
- Can perform Team Admin actions without needing to join the team
- Cannot change other organization settings like billing or delete the organization

### [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/organizations-and-roles\#billing)  Billing

- Can manage payment and compliance details in the organization
- Have access to billing settings and subscription management
- Cannot access other organizational data or settings

### [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/organizations-and-roles\#member)  Member

- Can view most data in the organization and act in the projects they are members of
- Cannot create or join projects on their own and need to be assigned by owners or managers
- Have limited permissions that depend on their project-level access

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/organizations-and-roles\#detailed-permissions-matrix)  Detailed permissions matrix

|  | Owner | Manager | Billing | Member |
| --- | --- | --- | --- | --- |
| **Organization** |  |  |  |  |
| Update organization | ✅ | ❌ | ❌ | ❌ |
| Delete organization | ✅ | ❌ | ❌ | ❌ |
| Add new member | ✅ | ✅ | ❌ | ❌ |
| Delete member | ✅ | ✅ | ❌ | ❌ |
| Update member access | ✅ | ✅ | ❌ | ❌ |
| Update billing | ✅ | ✅ | ✅ | ❌ |
| **Project** |  |  |  |  |
| Create project | ✅ | ✅ | ❌ | ❌ |
| Update project name | ✅ | ✅ | ❌ | ✅\*\* |
| Update project recontact options | ✅ | ✅ | ❌ | ✅\*\* |
| Update look & feel | ✅ | ✅ | ❌ | ✅\*\* |
| Update survey languages | ✅ | ✅ | ❌ | ✅\*\* |
| Delete project | ✅ | ✅ | ❌ | ❌ |
| **Surveys** |  |  |  |  |
| Create new survey | ✅ | ✅ | ❌ | ✅\* |
| Edit survey | ✅ | ✅ | ❌ | ✅\* |
| Delete survey | ✅ | ✅ | ❌ | ✅\* |
| View survey results | ✅ | ✅ | ❌ | ✅ |
| **Response** |  |  |  |  |
| Delete response | ✅ | ✅ | ❌ | ✅\* |
| Add tags on response | ✅ | ✅ | ❌ | ✅\* |
| Edit tags on response | ✅ | ✅ | ❌ | ✅\* |
| Download survey responses (CSV) | ✅ | ✅ | ❌ | ✅\* |
| **Actions** |  |  |  |  |
| Create action | ✅ | ✅ | ❌ | ✅\* |
| Update action | ✅ | ✅ | ❌ | ✅\* |
| Delete action | ✅ | ✅ | ❌ | ✅\* |
| **API keys** |  |  |  |  |
| Create API key | ✅ | ✅ | ❌ | ✅\*\* |
| Update API key | ✅ | ✅ | ❌ | ✅\*\* |
| Delete API key | ✅ | ✅ | ❌ | ✅\*\* |
| **Tags** |  |  |  |  |
| Create tags | ✅ | ✅ | ❌ | ✅\* |
| Update tags | ✅ | ✅ | ❌ | ✅\* |
| Delete tags | ✅ | ✅ | ❌ | ✅\*\* |
| **Contacts** |  |  |  |  |
| Delete contact | ✅ | ✅ | ❌ | ✅\* |
| **Integrations** |  |  |  |  |
| Manage integrations | ✅ | ✅ | ❌ | ✅\* |

\\* \- for the read & write permissions team members\\*\\* \- for the manage permissions team members

## [​](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/organizations-and-roles\#best-practices)  Best practices

- **Principle of least privilege**: Assign users the minimum role necessary for their responsibilities
- **Regular audits**: Periodically review organization members and their roles
- **Owner role**: Limit the number of owners to reduce security risk
- **Manager role**: Use for team leads who need to manage projects but not organizational settings

Was this page helpful?

YesNo

[Key Concepts](https://formbricks.com/docs/xm-and-surveys/core-features/user-management) [Teams and roles](https://formbricks.com/docs/xm-and-surveys/core-features/user-management/teams-and-roles)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.