---
url: "https://formbricks.com/docs/development/local-setup/github-codespaces"
title: "GitHub Codespaces - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/development/local-setup/github-codespaces#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Local Setup

GitHub Codespaces

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

- [GitHub Codespaces Setup](https://formbricks.com/docs/development/local-setup/github-codespaces#github-codespaces-setup)

Local Setup

# GitHub Codespaces

How to set up Formbricks in a GitHub Codespaces environment

### [​](https://formbricks.com/docs/development/local-setup/github-codespaces\#github-codespaces-setup)  GitHub Codespaces Setup

This guide outlines how to set up Formbricks in a **GitHub Codespaces** environment.

**Requirements:**

- A GitHub Codespace that has support for Node.JS, pnpm, and Docker.

**Steps:**

1. **Open your repository in GitHub Codespaces. If needed, clone the repository:**






Copy











```
git clone https://github.com/formbricks/formbricks && cd formbricks
```

2. **Setup NodeJS with nvm (if not already configured):**






Copy











```
nvm install && nvm use
```

3. **Install the dependencies:**






Copy











```
pnpm install
```

4. **Create a `.env` file from the template:**






Copy











```
cp .env.example .env
```

5. **Generate & set the required secrets:**






Copy











```
sed -i '/^ENCRYPTION_KEY=/c\ENCRYPTION_KEY='$(openssl rand -hex 32) .env
sed -i '/^NEXTAUTH_SECRET=/c\NEXTAUTH_SECRET='$(openssl rand -hex 32) .env
sed -i '/^CRON_SECRET=/c\CRON_SECRET='$(openssl rand -hex 32) .env
```

6. **Launch the development setup:**






Copy











```
pnpm go
```


Use the Codespaces port forwarding to access Formbricks at [http://localhost:3000](http://localhost:3000/).

Make sure your Codespaces port configuration is set to allow access to the app.

Was this page helpful?

YesNo

[Gitpod](https://formbricks.com/docs/development/local-setup/gitpod) [Solution Overview](https://formbricks.com/docs/development/technical-handbook/overview)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.