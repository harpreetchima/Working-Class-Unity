---
url: "https://formbricks.com/docs/development/local-setup/windows"
title: "Windows - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/development/local-setup/windows#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Local Setup

Windows

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

- [Local Machine Setup - Windows](https://formbricks.com/docs/development/local-setup/windows#local-machine-setup-windows)

Local Setup

# Windows

How to set up Formbricks on a Windows machine

### [​](https://formbricks.com/docs/development/local-setup/windows\#local-machine-setup-windows)  Local Machine Setup - Windows

This guide is intended for **Windows** users. For the best experience, use **WSL2** since pure Windows is
not fully supported.

**Requirements:**

- Node.JS (v20 recommended) via WSL2
- [pnpm](https://pnpm.io/)
- [Docker](https://www.docker.com/) (ensure Docker Desktop is installed with WSL2 integration enabled)

**Steps (Using WSL2):**

1. **Open your WSL2 terminal and clone the project:**






Copy











```
git clone https://github.com/formbricks/formbricks && cd formbricks
```

2. **Setup NodeJS with nvm in WSL2:**






Copy











```
nvm install && nvm use
```

3. **Install packages using pnpm:**






Copy











```
pnpm install
```

4. **Create a `.env` file:**






Copy











```
cp .env.example .env
```

5. **Generate & set secret values (Linux commands work in WSL2):**






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


Access Formbricks at [http://localhost:3000](http://localhost:3000/).

If you run into conflicts, ensure any local services (like PostgreSQL) are stopped.

Was this page helpful?

YesNo

[Mac](https://formbricks.com/docs/development/local-setup/mac) [Gitpod](https://formbricks.com/docs/development/local-setup/gitpod)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.