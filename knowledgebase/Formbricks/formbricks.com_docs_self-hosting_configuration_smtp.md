---
url: "https://formbricks.com/docs/self-hosting/configuration/smtp"
title: "SMTP Configuration - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/self-hosting/configuration/smtp#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Configuration

SMTP Configuration

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

- [Why Configure SMTP?](https://formbricks.com/docs/self-hosting/configuration/smtp#why-configure-smtp)
- [Email Configuration Options](https://formbricks.com/docs/self-hosting/configuration/smtp#email-configuration-options)
- [Required Environment Variables](https://formbricks.com/docs/self-hosting/configuration/smtp#required-environment-variables)
- [Enabling Email Features](https://formbricks.com/docs/self-hosting/configuration/smtp#enabling-email-features)
- [Configuration for One-Click Setup](https://formbricks.com/docs/self-hosting/configuration/smtp#configuration-for-one-click-setup)
- [Provider-Specific Examples](https://formbricks.com/docs/self-hosting/configuration/smtp#provider-specific-examples)
- [SendGrid](https://formbricks.com/docs/self-hosting/configuration/smtp#sendgrid)
- [AWS SES](https://formbricks.com/docs/self-hosting/configuration/smtp#aws-ses)
- [Gmail](https://formbricks.com/docs/self-hosting/configuration/smtp#gmail)
- [Troubleshooting](https://formbricks.com/docs/self-hosting/configuration/smtp#troubleshooting)

Configuration

# SMTP Configuration

Set up email functionality for your self-hosted Formbricks instance

By default, Formbricks doesn’t include an SMTP server for sending emails. However, you can easily configure your self-hosted instance to use your own email provider through environment variables.

## [​](https://formbricks.com/docs/self-hosting/configuration/smtp\#why-configure-smtp)  Why Configure SMTP?

Setting up an SMTP server enables important email functionality in Formbricks, including:

- Email verification for new accounts
- Password reset emails
- Team member invitation emails
- Survey response notifications

## [​](https://formbricks.com/docs/self-hosting/configuration/smtp\#email-configuration-options)  Email Configuration Options

Formbricks uses Nodemailer to send emails and supports various SMTP providers like:

- AWS SES
- SendGrid
- Mailgun
- Gmail (for low volume)
- Custom SMTP servers
- Other SMTP providers

## [​](https://formbricks.com/docs/self-hosting/configuration/smtp\#required-environment-variables)  Required Environment Variables

To enable email functionality, configure the following environment variables:

Copy

```
# Basic SMTP Configuration
MAIL_FROM=noreply@yourdomain.com
MAIL_FROM_NAME=Formbricks
SMTP_HOST=smtp.yourprovider.com
SMTP_PORT=587
SMTP_USER=your_username
SMTP_PASSWORD=your_password
```

Additional optional settings:

Copy

```
# Enable SMTP_SECURE_ENABLED for TLS (port 465)
SMTP_SECURE_ENABLED=0

# If set to 0, the server won't require authentication
SMTP_AUTHENTICATED=1

# If set to 0, the server will accept connections without requiring
# authorization from the list of supplied CAs (default is 1)
SMTP_REJECT_UNAUTHORIZED_TLS=0
```

## [​](https://formbricks.com/docs/self-hosting/configuration/smtp\#enabling-email-features)  Enabling Email Features

By default, email verification and password reset features are **disabled** in Formbricks. To enable these features:

Copy

```
# Set to 0 to enable email verification (requires working SMTP)
EMAIL_VERIFICATION_DISABLED=0

# Set to 0 to enable password reset functionality (requires working SMTP)
PASSWORD_RESET_DISABLED=0
```

## [​](https://formbricks.com/docs/self-hosting/configuration/smtp\#configuration-for-one-click-setup)  Configuration for One-Click Setup

If you’re using the one-click setup with Docker Compose, you can either:

1. Edit the docker-compose.yml file and add the SMTP environment variables:

Copy

```
environment:
  # Email Configuration
  MAIL_FROM: noreply@yourdomain.com
  MAIL_FROM_NAME: Formbricks
  SMTP_HOST: smtp.yourprovider.com
  SMTP_PORT: 587
  SMTP_USER: your_username
  SMTP_PASSWORD: your_password
  EMAIL_VERIFICATION_DISABLED: 0
  PASSWORD_RESET_DISABLED: 0
```

2. Or during the setup, answer “Yes” when prompted to set up the email service:

Copy

```
📧 Do you want to set up the email service? You will need SMTP credentials for the same! [y/N] y
```

## [​](https://formbricks.com/docs/self-hosting/configuration/smtp\#provider-specific-examples)  Provider-Specific Examples

### [​](https://formbricks.com/docs/self-hosting/configuration/smtp\#sendgrid)  SendGrid

Copy

```
MAIL_FROM=noreply@yourdomain.com
MAIL_FROM_NAME=Formbricks
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASSWORD=your_sendgrid_api_key
```

### [​](https://formbricks.com/docs/self-hosting/configuration/smtp\#aws-ses)  AWS SES

Copy

```
MAIL_FROM=noreply@yourdomain.com
MAIL_FROM_NAME=Formbricks
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USER=your_ses_access_key
SMTP_PASSWORD=your_ses_secret_key
```

### [​](https://formbricks.com/docs/self-hosting/configuration/smtp\#gmail)  Gmail

Copy

```
MAIL_FROM=your_email@gmail.com
MAIL_FROM_NAME=Formbricks
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASSWORD=your_app_password
```

> **Note**: For Gmail, you need to use an App Password if you have 2FA enabled.

## [​](https://formbricks.com/docs/self-hosting/configuration/smtp\#troubleshooting)  Troubleshooting

If you’re experiencing issues with your email configuration:

1. Check that all required environment variables are set correctly
2. Verify your SMTP credentials are valid
3. Ensure your email provider allows sending from the specified MAIL\_FROM address
4. If using Gmail, ensure you’re using an App Password
5. For secure connections, make sure you’ve set the correct port and SMTP\_SECURE\_ENABLED value

For additional help, join the conversation on [GitHub Discussions](https://github.com/formbricks/formbricks/discussions).

Was this page helpful?

YesNo

[Environment Variables](https://formbricks.com/docs/self-hosting/configuration/environment-variables) [File Uploads Configuration](https://formbricks.com/docs/self-hosting/configuration/file-uploads)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.