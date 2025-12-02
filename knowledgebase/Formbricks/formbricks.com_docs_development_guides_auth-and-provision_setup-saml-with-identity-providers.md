---
url: "https://formbricks.com/docs/development/guides/auth-and-provision/setup-saml-with-identity-providers"
title: "Setup SAML with Identity Providers - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/development/guides/auth-and-provision/setup-saml-with-identity-providers#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Auth & Provision

Setup SAML with Identity Providers

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

  - [Setup SAML with Identity Providers](https://formbricks.com/docs/development/guides/auth-and-provision/setup-saml-with-identity-providers)

##### Support

- [Troubleshooting](https://formbricks.com/docs/development/support/troubleshooting)

On this page

- [SAML Registration with Identity Providers](https://formbricks.com/docs/development/guides/auth-and-provision/setup-saml-with-identity-providers#saml-registration-with-identity-providers)
- [SAML With Okta](https://formbricks.com/docs/development/guides/auth-and-provision/setup-saml-with-identity-providers#saml-with-okta)

Auth & Provision

# Setup SAML with Identity Providers

This guide explains the settings you need to use to configure SAML with your Identity Provider. Once configured, obtain an XML metadata file and use it to configure SAML in Formbricks.

### [​](https://formbricks.com/docs/development/guides/auth-and-provision/setup-saml-with-identity-providers\#saml-registration-with-identity-providers)  SAML Registration with Identity Providers

This guide explains the settings you need to use to configure SAML with your Identity Provider. Once configured, obtain an XML metadata file and use it to configure SAML in Formbricks.

> **Note:** Please do not add a trailing slash at the end of the URLs. Create them exactly as shown below.

**Assertion consumer service URL / Single Sign-On URL / Destination URL:** [https://app.formbricks.com/api/auth/saml/callback](https://app.formbricks.com/api/auth/saml/callback)**Entity ID / Identifier / Audience URI / Audience Restriction:** [https://saml.formbricks.com](https://saml.formbricks.com/)

> **Note:** [https://saml.formbricks.com](https://saml.formbricks.com/) is hardcoded in Formbricks — do not replace it with your instance URL. It is the fixed SP Entity ID and must match exactly as shown in SAML assertions.

**Response:** Signed**Assertion Signature:** Signed**Signature Algorithm:** RSA-SHA256**Assertion Encryption:** Unencrypted**NameID Format:** EmailAddress**Application username:** email**Mapping Attributes / Attribute Statements:**

- Name claim:If your IdP has a `name` claim, set the following claims to populate the name field:





| Name | Name Format | Value |
| --- | --- | --- |
| name | Basic | user.name |




Many IdPs do not have a `name` claim. If not, you can use different claims to populate the name field. The order of precedence is `name` -\> **other options** -\> `email`.**Other options:**





| Name | Name Format | Value |
| --- | --- | --- |
| firstName | Basic | **FIRST\_NAME\_EQUIVALENT** |
| lastName | Basic | **LAST\_NAME\_EQUIVALENT** |




Refer to the table below for the different claims you can use for each IdP.





| IdP | FIRST\_NAME\_EQUIVALENT | LAST\_NAME\_EQUIVALENT |
| --- | --- | --- |
| Okta | user.firstName | user.lastName |
| Microsoft Entra ID (Azure AD) | user.givenName | user.surname |
| Google Workspace | user.given\_name / user.firstName | user.family\_name / user.lastName |
| OneLogin | user.FirstName / user.first\_name | user.LastName / user.last\_name |
| Auth0 | user.given\_name | user.family\_name |
| JumpCloud | user.firstname | user.lastname |




Above provided claims may differ based on your configuration and the IdP you are using. Please refer to the documentation of your IdP for the correct claims.

### [​](https://formbricks.com/docs/development/guides/auth-and-provision/setup-saml-with-identity-providers\#saml-with-okta)  SAML With Okta

1

Create an application with your SAML provider

For example, in Okta, once you create an account, you can click on Applications on the sidebar menu:![](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/development/guides/auth-and-provision/okta/okta-applications.webp?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=46e6da91380045edaae25db0aea8ec7e)

2

Click on Create App Integration

![](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/development/guides/auth-and-provision/okta/create-app-integration.webp?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=2f16eff88fe23e6347c9bab40ca74e62)

3

Select SAML 2.0 in the modal form, and click Next

![](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/development/guides/auth-and-provision/okta/select-saml-2.0.webp?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=a94f3c5912cbc7bba52531adcbe8f544)

4

Fill the general settings as shown and click Next

![](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/development/guides/auth-and-provision/okta/general-settings.webp?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=30d459732bf280adf2014fe043b25a5f)

5

Enter the SAML Integration Settings as shown and click Next

- **Single Sign-On URL**: `https://<your-formbricks-instance>/api/auth/saml/callback` or `http://localhost:3000/api/auth/saml/callback` (if you are running Formbricks locally)
- **Audience URI (SP Entity ID)**: `https://saml.formbricks.com` (hardcoded; do not replace with your instance URL)

![](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/development/guides/auth-and-provision/okta/saml-integration-settings.webp?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=4f23af0c4f40522c40278ababef02414)

6

Fill the fields mapping as shown and click Next

![](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/development/guides/auth-and-provision/okta/fields-mapping.webp?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=599aa1b47d73e6aaac1fcab0effa718b)

7

Check the internal app checkbox and click Finish

![](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/development/guides/auth-and-provision/okta/internal-app.webp?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=3ea651f570277fa24ef2a2955992fcfc)

8

Check that the app is created successfully

![](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/development/guides/auth-and-provision/okta/app-created.webp?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=0b353256d93847b815ae093993666abd)

9

Click on the app and head over to the Assignments tab

![](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/development/guides/auth-and-provision/okta/assignments-tab.webp?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=53babea15958867615e6e46b9694077b)

10

Click on Assign button and select Assign to People

![](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/development/guides/auth-and-provision/okta/assign-to-people.webp?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=388b1480d9a598febcd50beb9f942fad)

11

Select the users you want to assign the app to and click Assign

![](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/development/guides/auth-and-provision/okta/select-users.webp?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=6e03ececac7c157a0b786b8071645767)

12

Head over to the Sign On tab and click on the 'view SAML setup instructions' button

![](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/development/guides/auth-and-provision/okta/view-saml-instructions.webp?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=1d6c0220d346c21e822f6d3769bec779)

13

Scroll to the bottom and copy the IDP metadata

![](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/development/guides/auth-and-provision/okta/idp-metadata.webp?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=8429210d2053be4ac88649f89a485829)

14

Copy the IDP metadata and paste it in the \`connection.xml\` file in the \`formbricks/saml-connection\` (use \`formbricks/apps/web/saml-connection\` for development) directory

That’s it. Now when you try to login with SSO, your application on Okta will handle the authentication.

Was this page helpful?

YesNo

[Contribute to Formbricks](https://formbricks.com/docs/development/contribution/contribution) [Troubleshooting](https://formbricks.com/docs/development/support/troubleshooting)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.