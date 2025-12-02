---
url: "https://formbricks.com/docs/development/support/troubleshooting"
title: "Troubleshooting - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/development/support/troubleshooting#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Support

Troubleshooting

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

- [“The app doesn’t work after Prisma migration”](https://formbricks.com/docs/development/support/troubleshooting#%E2%80%9Cthe-app-doesn%E2%80%99t-work-after-prisma-migration%E2%80%9D)
- [“I ran ‘pnpm i’ but there seems to be an error with the packages”](https://formbricks.com/docs/development/support/troubleshooting#%E2%80%9Ci-ran-%E2%80%98pnpm-i%E2%80%99-but-there-seems-to-be-an-error-with-the-packages%E2%80%9D)
- [”I get a full-screen error with cryptic strings”](https://formbricks.com/docs/development/support/troubleshooting#%E2%80%9Di-get-a-full-screen-error-with-cryptic-strings%E2%80%9D)
- [”My machine struggles with the repository”](https://formbricks.com/docs/development/support/troubleshooting#%E2%80%9Dmy-machine-struggles-with-the-repository%E2%80%9D)
- [Error: “Uncaught (in promise) SyntaxError: Unexpected token !DOCTYPE … is not valid JSON”](https://formbricks.com/docs/development/support/troubleshooting#error:-%E2%80%9Cuncaught-in-promise-syntaxerror:-unexpected-token-doctype-%E2%80%A6-is-not-valid-json%E2%80%9D)

Support

# Troubleshooting

Here, you’ll find help with common issues.

## [​](https://formbricks.com/docs/development/support/troubleshooting\#%E2%80%9Cthe-app-doesn%E2%80%99t-work-after-prisma-migration%E2%80%9D)  “The app doesn’t work after Prisma migration”

If the app doesn’t work after a Prisma migration, clear your browser’s storage and reload the page. This will force the app to fetch data from the server again. ![prisma](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738108186/image_dwm9hp.jpg)

## [​](https://formbricks.com/docs/development/support/troubleshooting\#%E2%80%9Ci-ran-%E2%80%98pnpm-i%E2%80%99-but-there-seems-to-be-an-error-with-the-packages%E2%80%9D)  “I ran ‘pnpm i’ but there seems to be an error with the packages”

If you run `pnpm i` and get an error with the packages, try running `pnpm clean` followed by `pnpm i` again. This often solves the problem.

## [​](https://formbricks.com/docs/development/support/troubleshooting\#%E2%80%9Di-get-a-full-screen-error-with-cryptic-strings%E2%80%9D)  ”I get a full-screen error with cryptic strings”

This usually happens when the Formbricks Widget isn’t correctly or completely built.

Copy

```
pnpm build --filter=@formbricks/js

// Run the app again
pnpm dev
```

## [​](https://formbricks.com/docs/development/support/troubleshooting\#%E2%80%9Dmy-machine-struggles-with-the-repository%E2%80%9D)  ”My machine struggles with the repository”

Since we’re working with a monorepo structure, the repository can get quite big. If you’re having trouble working with the repository, try the following:

helloWorld.js

Copy

```
pnpm dev --filter=@formbricks/web...
```

It’s better to use a single terminal with `pnpm dev` rather than having multiple open (one with the Formbricks app and one with the demo).

## [​](https://formbricks.com/docs/development/support/troubleshooting\#error:-%E2%80%9Cuncaught-in-promise-syntaxerror:-unexpected-token-doctype-%E2%80%A6-is-not-valid-json%E2%80%9D)  Error: “Uncaught (in promise) SyntaxError: Unexpected token !DOCTYPE … is not valid JSON”![Syntax Error](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738109837/image_wbxv8k.jpg)

If you see this error, it happens when the person connected to the widget is deleted. To fix it, log out of the test person and reload the page.![Reset person](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738110212/image_nvkpku.jpg)

Was this page helpful?

YesNo

[Setup SAML with Identity Providers](https://formbricks.com/docs/development/guides/auth-and-provision/setup-saml-with-identity-providers)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.

![prisma](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738108186/image_dwm9hp.jpg)

![Syntax Error](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738109837/image_wbxv8k.jpg)

![Reset person](https://res.cloudinary.com/dwdb9tvii/image/upload/v1738110212/image_nvkpku.jpg)