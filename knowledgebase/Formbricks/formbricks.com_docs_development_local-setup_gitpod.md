---
url: "https://formbricks.com/docs/development/local-setup/gitpod"
title: "Gitpod - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/development/local-setup/gitpod#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Local Setup

Gitpod

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

- [Gitpod Setup](https://formbricks.com/docs/development/local-setup/gitpod#gitpod-setup)

Local Setup

# Gitpod

How to set up Formbricks in a Gitpod workspace

### [​](https://formbricks.com/docs/development/local-setup/gitpod\#gitpod-setup)  Gitpod Setup

This guide explains how to set up Formbricks in a **Gitpod** workspace.

**Requirements:**

- A Gitpod workspace with Node.JS, pnpm, and Docker support.

**Steps:**

1. **Open the repository in Gitpod. The workspace typically clones the repo automatically. If not:**






Copy











```
git clone https://github.com/formbricks/formbricks && cd formbricks
```

2. **Setup NodeJS with nvm:**






Copy











```
nvm install && nvm use
```

3. **Install dependencies:**






Copy











```
pnpm install
```

4. **Create a `.env` file:**






Copy











```
cp .env.example .env
```

5. **Generate & set secret values:**






Copy











```
sed -i '/^ENCRYPTION_KEY=/c\ENCRYPTION_KEY='$(openssl rand -hex 32) .env
sed -i '/^NEXTAUTH_SECRET=/c\NEXTAUTH_SECRET='$(openssl rand -hex 32) .env
sed -i '/^CRON_SECRET=/c\CRON_SECRET='$(openssl rand -hex 32) .env
```

6. **Run the development setup:**






Copy











```
pnpm go
```


Access the running app via the forwarded port (typically [http://localhost:3000](http://localhost:3000/) inside Gitpod).

Check your Gitpod settings to ensure Docker is enabled if required.

Was this page helpful?

YesNo

[Windows](https://formbricks.com/docs/development/local-setup/windows) [GitHub Codespaces](https://formbricks.com/docs/development/local-setup/github-codespaces)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.