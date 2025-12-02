---
url: "https://formbricks.com/docs/self-hosting/configuration/domain-configuration"
title: "Domain Configuration - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/self-hosting/configuration/domain-configuration#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Configuration

Domain Configuration

[Overview](https://formbricks.com/docs/overview/introduction) [XM & Surveys](https://formbricks.com/docs/xm-and-surveys/overview) [Self Hosting](https://formbricks.com/docs/self-hosting/overview) [Development](https://formbricks.com/docs/development/overview) [API v1 Reference](https://formbricks.com/docs/api-reference/rest-api) [API v2 Reference (Beta)](https://formbricks.com/docs/api-v2-reference/introduction)

##### Self Hosting

- [Self-Hosting](https://formbricks.com/docs/self-hosting/overview)

##### Setup

- [One-Click Setup](https://formbricks.com/docs/self-hosting/setup/one-click)
- [Docker Setup](https://formbricks.com/docs/self-hosting/setup/docker)
- [Monitoring](https://formbricks.com/docs/self-hosting/setup/monitoring)
- [Cluster Setup](https://formbricks.com/docs/self-hosting/setup/cluster-setup)
- [Kubernetes Deployment](https://formbricks.com/docs/self-hosting/setup/kubernetes)

##### Configuration

- [Custom SSL Certificate](https://formbricks.com/docs/self-hosting/configuration/custom-ssl)
- [Environment Variables](https://formbricks.com/docs/self-hosting/configuration/environment-variables)
- [SMTP Configuration](https://formbricks.com/docs/self-hosting/configuration/smtp)
- [File Uploads Configuration](https://formbricks.com/docs/self-hosting/configuration/file-uploads)
- [Domain Configuration](https://formbricks.com/docs/self-hosting/configuration/domain-configuration)
- [Custom Subpath](https://formbricks.com/docs/self-hosting/configuration/custom-subpath)
- Auth & SSO

- Integrations


##### Advanced

- [Migration](https://formbricks.com/docs/self-hosting/advanced/migration)
- [License](https://formbricks.com/docs/self-hosting/advanced/license)
- [License Activation](https://formbricks.com/docs/self-hosting/advanced/license-activation)
- Enterprise Features

- [Rate Limiting](https://formbricks.com/docs/self-hosting/advanced/rate-limiting)

On this page

- [Single Domain Setup](https://formbricks.com/docs/self-hosting/configuration/domain-configuration#single-domain-setup)
- [Example Configuration](https://formbricks.com/docs/self-hosting/configuration/domain-configuration#example-configuration)
- [Important Notes](https://formbricks.com/docs/self-hosting/configuration/domain-configuration#important-notes)
- [Public / Private Domain Split](https://formbricks.com/docs/self-hosting/configuration/domain-configuration#public-/-private-domain-split)
- [Why Use Domain Split?](https://formbricks.com/docs/self-hosting/configuration/domain-configuration#why-use-domain-split)
- [Configuration](https://formbricks.com/docs/self-hosting/configuration/domain-configuration#configuration)
- [Example Configuration](https://formbricks.com/docs/self-hosting/configuration/domain-configuration#example-configuration-2)
- [How It Works](https://formbricks.com/docs/self-hosting/configuration/domain-configuration#how-it-works)
- [Routes Available on the Public Domain](https://formbricks.com/docs/self-hosting/configuration/domain-configuration#routes-available-on-the-public-domain)
- [Survey Routes](https://formbricks.com/docs/self-hosting/configuration/domain-configuration#survey-routes)
- [API Routes](https://formbricks.com/docs/self-hosting/configuration/domain-configuration#api-routes)
- [Static Assets & Next.js Routes](https://formbricks.com/docs/self-hosting/configuration/domain-configuration#static-assets-&-next-js-routes)
- [Storage Routes](https://formbricks.com/docs/self-hosting/configuration/domain-configuration#storage-routes)
- [Health & Monitoring](https://formbricks.com/docs/self-hosting/configuration/domain-configuration#health-&-monitoring)
- [Sharing & Embed Routes](https://formbricks.com/docs/self-hosting/configuration/domain-configuration#sharing-&-embed-routes)
- [App URL SDK Configuration](https://formbricks.com/docs/self-hosting/configuration/domain-configuration#app-url-sdk-configuration)
- [Multi-Domain Setup SDK Configuration](https://formbricks.com/docs/self-hosting/configuration/domain-configuration#multi-domain-setup-sdk-configuration)
- [DNS and SSL Configuration](https://formbricks.com/docs/self-hosting/configuration/domain-configuration#dns-and-ssl-configuration)
- [Fallback Behavior](https://formbricks.com/docs/self-hosting/configuration/domain-configuration#fallback-behavior)
- [Reverting to a Single Domain](https://formbricks.com/docs/self-hosting/configuration/domain-configuration#reverting-to-a-single-domain)

Configuration

# Domain Configuration

Configuring your domain for Formbricks.

Formbricks supports both single domain and dual domain configurations with Public/Private Domain Split feature. This guide will help you set up your domains correctly for enhanced security and organization.

## [​](https://formbricks.com/docs/self-hosting/configuration/domain-configuration\#single-domain-setup)  Single Domain Setup

For a single domain setup, you need to configure two essential environment variables:

1. `WEBAPP_URL`: The base URL of your Formbricks instance (serves both admin and public content)
2. `NEXTAUTH_URL`: The authentication URL (should be the same as WEBAPP\_URL)

### [​](https://formbricks.com/docs/self-hosting/configuration/domain-configuration\#example-configuration)  Example Configuration

Copy

```
WEBAPP_URL=https://formbricks.example.com
NEXTAUTH_URL=https://formbricks.example.com
```

### [​](https://formbricks.com/docs/self-hosting/configuration/domain-configuration\#important-notes)  Important Notes

- Both URLs must be the same for authentication to work properly
- The URLs should be the full URL including the protocol (http:// or https://)
- Make sure your domain is properly configured in your DNS settings
- If you’re using HTTPS (recommended), ensure you have valid SSL certificates installed

## [​](https://formbricks.com/docs/self-hosting/configuration/domain-configuration\#public-/-private-domain-split)  Public / Private Domain Split

Formbricks supports a powerful domain separation feature that allows you to serve public content (surveys, public APIs) from a different domain than your private admin interface. This provides enhanced security and better organization. It enables you to:

- Serve public content (surveys, public APIs) from a different domain than your private admin interface
- Restrict admin functionality to the private domain
- Ensure authentication and sensitive operations only occur on the private domain

Publicly available images uploaded before the domain split (logos, images in Picture Select questions, etc.) will continue to be served from the Private Domain. **To protect your Private Domain, please reupload public images after the successful setup of the domain split.**

### [​](https://formbricks.com/docs/self-hosting/configuration/domain-configuration\#why-use-domain-split)  Why Use Domain Split?

- **Enhanced Security**: Separate public-facing surveys from your admin interface
- **Better Organization**: Use dedicated domains for different purposes (e.g., `admin.company.com` for management, `surveys.company.com` for public surveys)

### [​](https://formbricks.com/docs/self-hosting/configuration/domain-configuration\#configuration)  Configuration

To set up Public/Private Domain Split:

1. **Private Domain (WEBAPP\_URL)**: Your admin/management interface
2. **Public Domain (PUBLIC\_URL)**: For surveys and public-facing content

**Important Security Note**: Formbricks handles application-level domain restrictions to ensure each domain
can only access specific resources within the application. However, all domain configuration (DNS, SSL
certificates, reverse proxy setup) and firewall configuration that comes with this feature to enhance
security must be configured by you. Formbricks does not manage your infrastructure-level security settings.

### [​](https://formbricks.com/docs/self-hosting/configuration/domain-configuration\#example-configuration-2)  Example Configuration

Copy

```
# Private admin domain
WEBAPP_URL=https://admin.formbricks.example.com
NEXTAUTH_URL=https://admin.formbricks.example.com

# Public domain for surveys
PUBLIC_URL=https://surveys.example.com
```

### [​](https://formbricks.com/docs/self-hosting/configuration/domain-configuration\#how-it-works)  How It Works

When PUBLIC\_URL is configured:

- **Admin Interface**: All admin/management functions are served from `WEBAPP_URL`
- **Public Surveys**: All survey links and public APIs use `PUBLIC_URL`
- **SDK Integration**: The public domain is used for all client-side SDK connections
- **Email Links**: Survey invitation emails use the public domain
- **Sharing Features**: Survey sharing uses the public domain

### [​](https://formbricks.com/docs/self-hosting/configuration/domain-configuration\#routes-available-on-the-public-domain)  Routes Available on the Public Domain

When PUBLIC\_URL is configured, the following routes are automatically served from the public domain:

#### [​](https://formbricks.com/docs/self-hosting/configuration/domain-configuration\#survey-routes)  Survey Routes

- `/s/{surveyId}` \- Individual survey access
- `/c/{jwt}` \- Personalized link survey access (JWT-based access)
- Embedded survey endpoints

#### [​](https://formbricks.com/docs/self-hosting/configuration/domain-configuration\#api-routes)  API Routes

- `/api/v1/client/{environmentId}/*` \- Client API endpoints (v1)
- `/api/v2/client/{environmentId}/*` \- Client API endpoints (v2)

#### [​](https://formbricks.com/docs/self-hosting/configuration/domain-configuration\#static-assets-&-next-js-routes)  Static Assets & Next.js Routes

- `/favicon.ico` \- Favicon
- `/_next/*` \- Next.js static assets and build files
- `/js/*` \- JavaScript files
- `/css/*` \- CSS stylesheets
- `/images/*` \- Image assets
- `/fonts/*` \- Font files
- `/icons/*` \- Icon assets
- `/public/*` \- Public static files
- `/animated-bgs/*` \- Animated Background assets

#### [​](https://formbricks.com/docs/self-hosting/configuration/domain-configuration\#storage-routes)  Storage Routes

- `/storage/{environmentId}/{accessType}/{fileName}` \- Public file storage access

#### [​](https://formbricks.com/docs/self-hosting/configuration/domain-configuration\#health-&-monitoring)  Health & Monitoring

- `/health` \- Health check endpoint

#### [​](https://formbricks.com/docs/self-hosting/configuration/domain-configuration\#sharing-&-embed-routes)  Sharing & Embed Routes

- Survey sharing endpoints
- Embed widget routes
- Social sharing endpoints

All other routes are restricted to the private domain (`WEBAPP_URL`) for security purposes. The admin domain can access the health endpoint (/health) and public file storage (`/storage/{environmentId}/{accessType}/{fileName}`), while all other public routes are exclusively accessible on the public domain (`PUBLIC_URL`) and will return a 404 error if accessed from the admin domain.

### [​](https://formbricks.com/docs/self-hosting/configuration/domain-configuration\#app-url-sdk-configuration)  App URL SDK Configuration

#### [​](https://formbricks.com/docs/self-hosting/configuration/domain-configuration\#multi-domain-setup-sdk-configuration)  Multi-Domain Setup SDK Configuration

When using PUBLIC\_URL (multi-domain setup), all SDK configurations must use the **public domain**:

Copy

```
Formbricks.setup({
  environmentId: "your-environment-id",
  appUrl: "https://surveys.example.com", // Use PUBLIC_URL domain
});
```

Please refer to the [Framework Guides](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/framework-guides) for step-by-step instructions specific to your platform.

### [​](https://formbricks.com/docs/self-hosting/configuration/domain-configuration\#dns-and-ssl-configuration)  DNS and SSL Configuration

1. **Set up DNS records** for both domains
2. **Configure SSL certificates** for both domains
3. **Update your reverse proxy** (nginx, Apache, Cloudflare, etc.) to route both domains to your Formbricks instance
4. **Firewall rules**: Ensure both domains can reach your Formbricks instance

### [​](https://formbricks.com/docs/self-hosting/configuration/domain-configuration\#fallback-behavior)  Fallback Behavior

If `PUBLIC_URL` is not set:

- All content (admin and public) is served from `WEBAPP_URL`
- The system behaves as a single domain setup
- No domain separation occurs

### [​](https://formbricks.com/docs/self-hosting/configuration/domain-configuration\#reverting-to-a-single-domain)  Reverting to a Single Domain

While it’s possible to revert to a Single Domain setup, please take into account the following:

1. All image links and uploaded files are stored in the database, so they will continue to link to the Public Domain **hence the links will break.** You’ll need to reupload the images, like you did when you set up the domain split.
2. Any survey link shared to with the Public Domain **will break.**
3. API calls to the Public Domain **will break**, unless updated.

As of now, Formbricks does not provide an automated migration between domain setups.If you have any questions or require help, feel free to reach out to us on [GitHub Discussions](https://github.com/formbricks/formbricks/discussions).

Was this page helpful?

YesNo

[File Uploads Configuration](https://formbricks.com/docs/self-hosting/configuration/file-uploads) [Custom Subpath](https://formbricks.com/docs/self-hosting/configuration/custom-subpath)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.