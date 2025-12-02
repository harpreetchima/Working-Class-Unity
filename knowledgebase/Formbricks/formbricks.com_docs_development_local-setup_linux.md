---
url: "https://formbricks.com/docs/development/local-setup/linux"
title: "Linux - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/development/local-setup/linux#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Local Setup

Linux

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

- [Local Machine Setup - Linux](https://formbricks.com/docs/development/local-setup/linux#local-machine-setup-linux)

Local Setup

# Linux

How to set up Formbricks on a Linux machine

### [​](https://formbricks.com/docs/development/local-setup/linux\#local-machine-setup-linux)  Local Machine Setup - Linux

This guide is recommended for advanced users setting up Formbricks on a **Linux** machine.

Here are the requirements for setting up Formbricks on Linux:

- Node.JS (v20 recommended)
- [pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/) (to run PostgreSQL/MailHog)

**Steps:**

1. **Clone the project & move into the directory:**






Copy











```
git clone https://github.com/formbricks/formbricks && cd formbricks
```

2. **Setup NodeJS with nvm:**






Copy











```
nvm install && nvm use
```

3. **Install NodeJS packages via pnpm:**






Copy











```
pnpm install
```

4. **Create a `.env` file based on `.env.example`:**






Copy











```
cp .env.example .env
```

5. **Generate & set the secret values:**






Copy











```
sed -i '/^ENCRYPTION_KEY=/c\ENCRYPTION_KEY='$(openssl rand -hex 32) .env
sed -i '/^NEXTAUTH_SECRET=/c\NEXTAUTH_SECRET='$(openssl rand -hex 32) .env
sed -i '/^CRON_SECRET=/c\CRON_SECRET='$(openssl rand -hex 32) .env
```

6. **Start the development setup:**






Copy











```
pnpm go
```


You can now access Formbricks at [http://localhost:3000](http://localhost:3000/).

Create a new account on first login as no default account is available.

Was this page helpful?

YesNo

[Overview](https://formbricks.com/docs/development/overview) [Mac](https://formbricks.com/docs/development/local-setup/mac)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.