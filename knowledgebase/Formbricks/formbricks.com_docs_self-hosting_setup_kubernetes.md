---
url: "https://formbricks.com/docs/self-hosting/setup/kubernetes"
title: "Kubernetes Deployment - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/self-hosting/setup/kubernetes#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Setup

Kubernetes Deployment

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

- [Prerequisites](https://formbricks.com/docs/self-hosting/setup/kubernetes#prerequisites)
- [1\. Installation Steps](https://formbricks.com/docs/self-hosting/setup/kubernetes#1-installation-steps)
- [2\. Configuring Secrets](https://formbricks.com/docs/self-hosting/setup/kubernetes#2-configuring-secrets)
- [Using Kubernetes Secrets (Default)](https://formbricks.com/docs/self-hosting/setup/kubernetes#using-kubernetes-secrets-default)
- [Using External Secrets (AWS Secrets Manager, Vault, etc.)](https://formbricks.com/docs/self-hosting/setup/kubernetes#using-external-secrets-aws-secrets-manager,-vault,-etc)
- [3\. Configuring PostgreSQL and Redis](https://formbricks.com/docs/self-hosting/setup/kubernetes#3-configuring-postgresql-and-redis)
- [Using Managed PostgreSQL and Redis](https://formbricks.com/docs/self-hosting/setup/kubernetes#using-managed-postgresql-and-redis)
- [Using In-Cluster PostgreSQL and Redis (Default)](https://formbricks.com/docs/self-hosting/setup/kubernetes#using-in-cluster-postgresql-and-redis-default)
- [4\. Upgrading the Deployment](https://formbricks.com/docs/self-hosting/setup/kubernetes#4-upgrading-the-deployment)
- [Scaling Resources](https://formbricks.com/docs/self-hosting/setup/kubernetes#scaling-resources)
- [Enabling Autoscaling](https://formbricks.com/docs/self-hosting/setup/kubernetes#enabling-autoscaling)
- [5\. Key Configuration Values](https://formbricks.com/docs/self-hosting/setup/kubernetes#5-key-configuration-values)
- [6\. Uninstalling the Deployment](https://formbricks.com/docs/self-hosting/setup/kubernetes#6-uninstalling-the-deployment)
- [Removing Persistent Volumes (PVCs)](https://formbricks.com/docs/self-hosting/setup/kubernetes#removing-persistent-volumes-pvcs)
- [Additional Notes](https://formbricks.com/docs/self-hosting/setup/kubernetes#additional-notes)

Setup

# Kubernetes Deployment

Deploy the new Helm chart on a Kubernetes cluster using Helm.

## [​](https://formbricks.com/docs/self-hosting/setup/kubernetes\#prerequisites)  Prerequisites

Ensure you have the following before proceeding:

- A running Kubernetes cluster (EKS, GKE, AKS, Minikube, etc.)
- An **Ingress Controller** (e.g., Traefik, Nginx)
- **Helm installed** on your local machine
- **Production setup requires managed PostgreSQL and Redis services**

> **Note:** Redis is required for **session handling** when deploying multiple pods.

* * *

## [​](https://formbricks.com/docs/self-hosting/setup/kubernetes\#1-installation-steps)  1\. Installation Steps

1

Install with Default Configuration

Copy

```
helm install formbricks oci://ghcr.io/formbricks/helm-charts/formbricks -n formbricks --create-namespace
```

> **Note:** To specify specific version use `--version` flag. E.g., `--version 1.0.0`. Starting from 3.5.0, the chart is available on the GitHub Container Registry (GHCR).

By default:

- PostgreSQL and Redis are deployed within the cluster.
- Secrets are dynamically generated and stored as Kubernetes Secrets.

2

Install with an Enterprise License

Copy

```
helm install formbricks oci://ghcr.io/formbricks/helm-charts/formbricks -n formbricks --create-namespace --set enterprise.licenseKey="YOUR_LICENSE_KEY"
```

* * *

## [​](https://formbricks.com/docs/self-hosting/setup/kubernetes\#2-configuring-secrets)  2\. Configuring Secrets

### [​](https://formbricks.com/docs/self-hosting/setup/kubernetes\#using-kubernetes-secrets-default)  Using Kubernetes Secrets (Default)

By default, **secrets are stored as Kubernetes Secrets**.
The chart automatically generates **random values** for required secrets.Modify `values.yaml`:

Copy

```
secret:
  enabled: true
```

* * *

### [​](https://formbricks.com/docs/self-hosting/setup/kubernetes\#using-external-secrets-aws-secrets-manager,-vault,-etc)  Using External Secrets (AWS Secrets Manager, Vault, etc.)

To use an **external secrets manager**, enable `externalSecret` in `values.yaml`:

Copy

```
secret:
  enabled: false  # Disable default secret generation

externalSecret:
  enabled: true
  secretStore:
    name: aws-secrets-manager
    kind: ClusterSecretStore
  refreshInterval: "1h"
  files:
    redis:
      data:
        REDIS_PASSWORD:
          remoteRef:
            key: "prod/formbricks/secrets"
            property: REDIS_PASSWORD
    postgres:
      data:
        POSTGRES_ADMIN_PASSWORD:
          remoteRef:
            key: "prod/formbricks/secrets"
            property: POSTGRES_ADMIN_PASSWORD
        POSTGRES_USER_PASSWORD:
          remoteRef:
            key: "prod/formbricks/secrets"
            property: POSTGRES_USER_PASSWORD
    app-secrets:
      data:
        DATABASE_URL:
          remoteRef:
            key: "prod/formbricks/secrets"
            property: DATABASE_URL
        REDIS_URL:
          remoteRef:
            key: "prod/formbricks/secrets"
            property: REDIS_URL
        ENCRYPTION_KEY:
          remoteRef:
            key: "prod/formbricks/secrets"
            property: ENCRYPTION_KEY
```

**Ensure ExternalSecrets Operator is installed:** [https://external-secrets.io/latest/](https://external-secrets.io/latest/)Install with:

Copy

```
helm install formbricks oci://ghcr.io/formbricks/helm-charts/formbricks -n formbricks --create-namespace -f values.yaml
```

* * *

## [​](https://formbricks.com/docs/self-hosting/setup/kubernetes\#3-configuring-postgresql-and-redis)  3\. Configuring PostgreSQL and Redis

### [​](https://formbricks.com/docs/self-hosting/setup/kubernetes\#using-managed-postgresql-and-redis)  Using Managed PostgreSQL and Redis

For production, we recommend using **managed database and cache services**.Modify `values.yaml`:

Copy

```
postgresql:
  enabled: false
  externalDatabaseUrl: "postgresql://user:password@your-postgres-host:5432/mydb"

redis:
  enabled: false
  externalRedisUrl: "redis://your-redis-host:6379"
```

Install with:

Copy

```
helm install formbricks oci://ghcr.io/formbricks/helm-charts/formbricks -n formbricks --create-namespace -f values.yaml
```

* * *

### [​](https://formbricks.com/docs/self-hosting/setup/kubernetes\#using-in-cluster-postgresql-and-redis-default)  Using In-Cluster PostgreSQL and Redis (Default)

By default, PostgreSQL and Redis are **deployed inside the cluster**.
To **ensure in-cluster deployment**, use:

Copy

```
postgresql:
  enabled: true

redis:
  enabled: true
```

Apply with:

Copy

```
helm install formbricks oci://ghcr.io/formbricks/helm-charts/formbricks -n formbricks --create-namespace -f values.yaml
```

* * *

## [​](https://formbricks.com/docs/self-hosting/setup/kubernetes\#4-upgrading-the-deployment)  4\. Upgrading the Deployment

To apply changes:

Copy

```
helm upgrade formbricks oci://ghcr.io/formbricks/helm-charts/formbricks -n formbricks
```

### [​](https://formbricks.com/docs/self-hosting/setup/kubernetes\#scaling-resources)  Scaling Resources

Copy

```
helm upgrade formbricks oci://ghcr.io/formbricks/helm-charts/formbricks -n formbricks   --set deployment.resources.limits.cpu=2   --set deployment.resources.limits.memory=4Gi
```

### [​](https://formbricks.com/docs/self-hosting/setup/kubernetes\#enabling-autoscaling)  Enabling Autoscaling

Copy

```
helm upgrade formbricks oci://ghcr.io/formbricks/helm-charts/formbricks -n formbricks   --set autoscaling.enabled=true   --set autoscaling.minReplicas=3   --set autoscaling.maxReplicas=10
```

* * *

## [​](https://formbricks.com/docs/self-hosting/setup/kubernetes\#5-key-configuration-values)  5\. Key Configuration Values

| Field | Description | Default Value |
| --- | --- | --- |
| `deployment.replicas` | Number of application replicas | `1` |
| `deployment.image.repository` | Docker image repository | `"ghcr.io/formbricks/formbricks"` |
| `deployment.image.tag` | Docker image tag | `"latest"` |
| `autoscaling.enabled` | Enable autoscaling | `false` |
| `postgresql.enabled` | Deploy PostgreSQL in cluster | `true` |
| `postgresql.externalDatabaseUrl` | External PostgreSQL URL | `""` |
| `redis.enabled` | Deploy Redis in cluster | `true` |
| `redis.externalRedisUrl` | External Redis URL | `""` |
| `externalSecret.enabled` | Enable external secrets manager | `false` |

**Refer to the Helm chart repository for full configuration options.**

* * *

## [​](https://formbricks.com/docs/self-hosting/setup/kubernetes\#6-uninstalling-the-deployment)  6\. Uninstalling the Deployment

To remove the deployment:

Copy

```
helm uninstall formbricks -n formbricks
```

### [​](https://formbricks.com/docs/self-hosting/setup/kubernetes\#removing-persistent-volumes-pvcs)  Removing Persistent Volumes (PVCs)

By default, **PVCs are not deleted** with Helm.
To manually remove them:

Copy

```
kubectl delete pvc --all -n formbricks
```

To completely delete the namespace:

Copy

```
kubectl delete namespace formbricks
```

* * *

## [​](https://formbricks.com/docs/self-hosting/setup/kubernetes\#additional-notes)  Additional Notes

- **Ingress Setup:** If using an ingress controller, make sure to configure `ingress.enabled: true` in `values.yaml`.
- **Environment Variables:** Pass custom environment variables via `envFrom` in `values.yaml`.
- **Backup Strategy:** Ensure you have a backup policy for PostgreSQL if running in-cluster.

**Your Formbricks deployment is now ready!**

Was this page helpful?

YesNo

[Cluster Setup](https://formbricks.com/docs/self-hosting/setup/cluster-setup) [Custom SSL Certificate](https://formbricks.com/docs/self-hosting/configuration/custom-ssl)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.