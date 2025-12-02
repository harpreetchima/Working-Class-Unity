---
url: "https://formbricks.com/docs/self-hosting/setup/cluster-setup"
title: "Cluster Setup - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/self-hosting/setup/cluster-setup#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Setup

Cluster Setup

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

- [Overview](https://formbricks.com/docs/self-hosting/setup/cluster-setup#overview)
- [Requirements](https://formbricks.com/docs/self-hosting/setup/cluster-setup#requirements)
- [Architecture](https://formbricks.com/docs/self-hosting/setup/cluster-setup#architecture)
- [Component Description](https://formbricks.com/docs/self-hosting/setup/cluster-setup#component-description)
- [Redis Configuration](https://formbricks.com/docs/self-hosting/setup/cluster-setup#redis-configuration)
- [S3 Configuration](https://formbricks.com/docs/self-hosting/setup/cluster-setup#s3-configuration)
- [Kubernetes Setup](https://formbricks.com/docs/self-hosting/setup/cluster-setup#kubernetes-setup)
- [Features of the Helm Chart](https://formbricks.com/docs/self-hosting/setup/cluster-setup#features-of-the-helm-chart)
- [Installation Steps](https://formbricks.com/docs/self-hosting/setup/cluster-setup#installation-steps)
- [Configuration Options](https://formbricks.com/docs/self-hosting/setup/cluster-setup#configuration-options)

Setup

# Cluster Setup

How to set up Formbricks in a High-Availability Cluster

## [​](https://formbricks.com/docs/self-hosting/setup/cluster-setup\#overview)  Overview

Running Formbricks as a cluster of multiple instances offers several key advantages:

- **High Availability**: Ensure your surveys remain accessible even if some instances fail
- **Load Distribution**: Handle higher traffic by distributing requests across multiple instances
- **Scalability**: Easily scale horizontally by adding more instances as your needs grow
- **Zero-Downtime Updates**: Rolling updates without service interruption

## [​](https://formbricks.com/docs/self-hosting/setup/cluster-setup\#requirements)  Requirements

To run Formbricks in a cluster setup, you’ll need:

- Shared PostgreSQL database
- Shared Redis cache for session management and caching
- Load balancer to distribute traffic

## [​](https://formbricks.com/docs/self-hosting/setup/cluster-setup\#architecture)  Architecture

The Formbricks cluster setup consists of multiple components working together to provide a scalable and highly available system. Here’s a detailed overview of the architecture:

Data Storage

Formbricks Cluster

Load Balancer

Redis Cluster

PostgreSQL HA

Load Balancer/Ingress

Formbricks Instance 1

Formbricks Instance 2

Formbricks Instance n

PostgreSQL Primary

PostgreSQL Replica

Redis Primary

Redis Replica

S3 Compatible Storage

FB1,FB2,FB3

### [​](https://formbricks.com/docs/self-hosting/setup/cluster-setup\#component-description)  Component Description

1. **Formbricks Cluster**   - Multiple Formbricks instances (1..n) running in parallel
   - Each instance is stateless and can handle any incoming request
   - Automatic failover if any instance becomes unavailable
2. **PostgreSQL Database**   - Primary database storing all survey, response, and contact data
   - Optional high-availability setup with primary-replica configuration
   - Handles all persistent data storage needs
3. **Redis Cluster**   - Acts as a distributed cache layer
   - Improves performance by caching frequently accessed data
   - Can be configured in HA mode with primary-replica setup
   - Handles session management and real-time features
4. **S3 Compatible Storage**   - Stores file uploads and attachments
   - Can be any S3-compatible storage service (AWS S3, MinIO, etc.)
   - Provides reliable and scalable file storage
5. **Load Balancer**   - Distributes incoming traffic across all Formbricks instances
   - Performs health checks and removes unhealthy instances
   - Ensures even load distribution and high availability

## [​](https://formbricks.com/docs/self-hosting/setup/cluster-setup\#redis-configuration)  Redis Configuration

Redis is required for Formbricks to function. The application will not start without a Redis URL configured.

Configure Redis by adding the following **required** environment variable to your instances:

env

Copy

```
REDIS_URL=redis://your-redis-host:6379
```

## [​](https://formbricks.com/docs/self-hosting/setup/cluster-setup\#s3-configuration)  S3 Configuration

Configure S3 storage by adding the following environment variables to your instances:

env

Copy

```
# Required for file uploads in serverless environments
S3_ACCESS_KEY=your-access-key
S3_SECRET_KEY=your-secret-key
S3_REGION=your-region
S3_BUCKET_NAME=your-bucket-name

# For S3-compatible storage (e.g., StorJ, MinIO)
# Leave empty for Amazon S3
S3_ENDPOINT_URL=https://your-s3-compatible-endpoint

# Enable for S3-compatible storage that requires path style
# 0 for disabled, 1 for enabled
S3_FORCE_PATH_STYLE=0
```

When using S3 in a cluster setup, ensure that:

- All Formbricks instances have access to the same S3 bucket
- The bucket has appropriate CORS settings configured
- IAM roles/users have sufficient permissions for read/write operations

## [​](https://formbricks.com/docs/self-hosting/setup/cluster-setup\#kubernetes-setup)  Kubernetes Setup

Formbricks provides an official Helm chart for deploying the entire cluster stack on Kubernetes. The Helm chart is available in the [Formbricks GitHub repository](https://github.com/formbricks/formbricks/tree/main/helm-chart).

### [​](https://formbricks.com/docs/self-hosting/setup/cluster-setup\#features-of-the-helm-chart)  Features of the Helm Chart

The Helm chart provides a complete deployment solution that includes:

- Formbricks application with configurable replicas
- PostgreSQL database (with optional HA configuration)
- Redis cluster for caching
- Optional Traefik ingress controller for routing and SSL termination
- Automatic configuration of dependencies and networking

### [​](https://formbricks.com/docs/self-hosting/setup/cluster-setup\#installation-steps)  Installation Steps

1. Add the Formbricks Helm repository:

Copy

```
helm repo add formbricks https://raw.githubusercontent.com/formbricks/formbricks/main/helm-chart
helm repo update
```

2. Install the chart:

Copy

```
helm install formbricks formbricks/formbricks
```

### [​](https://formbricks.com/docs/self-hosting/setup/cluster-setup\#configuration-options)  Configuration Options

The Helm chart can be customized using a `values.yaml` file to configure:

- Number of Formbricks replicas
- Resource limits and requests
- Database configuration
- Redis settings
- Ingress rules and TLS
- Environment variables and secrets

Refer to the [Helm chart documentation](https://github.com/formbricks/formbricks/tree/main/helm-chart) for detailed configuration options and examples.

Was this page helpful?

YesNo

[Monitoring](https://formbricks.com/docs/self-hosting/setup/monitoring) [Kubernetes Deployment](https://formbricks.com/docs/self-hosting/setup/kubernetes)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.