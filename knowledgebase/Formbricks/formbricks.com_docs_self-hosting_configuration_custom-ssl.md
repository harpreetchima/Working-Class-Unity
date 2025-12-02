---
url: "https://formbricks.com/docs/self-hosting/configuration/custom-ssl"
title: "Custom SSL Certificate - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/self-hosting/configuration/custom-ssl#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Configuration

Custom SSL Certificate

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

- [Step 1: Navigate to the Formbricks Folder](https://formbricks.com/docs/self-hosting/configuration/custom-ssl#step-1:-navigate-to-the-formbricks-folder)
- [Step 2: Create a Folder for SSL Certificates](https://formbricks.com/docs/self-hosting/configuration/custom-ssl#step-2:-create-a-folder-for-ssl-certificates)
- [Step 3: Understand SSL Certificate Files](https://formbricks.com/docs/self-hosting/configuration/custom-ssl#step-3:-understand-ssl-certificate-files)
- [Step 4: Set Correct File Permissions](https://formbricks.com/docs/self-hosting/configuration/custom-ssl#step-4:-set-correct-file-permissions)
- [Step 5: Update traefik.yaml](https://formbricks.com/docs/self-hosting/configuration/custom-ssl#step-5:-update-traefik-yaml)
- [Step 6: Create certs-traefik.yaml](https://formbricks.com/docs/self-hosting/configuration/custom-ssl#step-6:-create-certs-traefik-yaml)
- [Step 7: Update docker-compose.yml](https://formbricks.com/docs/self-hosting/configuration/custom-ssl#step-7:-update-docker-compose-yml)
- [Summary](https://formbricks.com/docs/self-hosting/configuration/custom-ssl#summary)

Configuration

# Custom SSL Certificate

Using Formbricks One-Click Setup with a Custom SSL Certificate.

Formbricks One-Click setup already comes with a valid SSL certificate using **Let’s Encrypt**. This guide is only if you already have a valid SSL certificate that you need to use due to company policy or other requirements.

Formbricks’ One-Click setup automatically creates an SSL certificate using **Let’s Encrypt**. However, some setups need a custom SSL certificate. This is common for intranets or systems with special certificate rules that use an internal or custom certificate authority (CA).

### [​](https://formbricks.com/docs/self-hosting/configuration/custom-ssl\#step-1:-navigate-to-the-formbricks-folder)  Step 1: Navigate to the Formbricks Folder

Move into the `formbricks/` directory:

Copy

```
cd formbricks
```

### [​](https://formbricks.com/docs/self-hosting/configuration/custom-ssl\#step-2:-create-a-folder-for-ssl-certificates)  Step 2: Create a Folder for SSL Certificates

Create a folder called `certs` and place your SSL certificate files inside:

Copy

```
mkdir certs
# Move your SSL certificate files to the certs folder
mv /path/to/your/fullchain.crt certs/
mv /path/to/your/cert.key certs/
```

### [​](https://formbricks.com/docs/self-hosting/configuration/custom-ssl\#step-3:-understand-ssl-certificate-files)  Step 3: Understand SSL Certificate Files

- **fullchain.crt** – Your SSL certificate, including the full certificate chain.
- **cert.key** – The private key used to encrypt data.

### [​](https://formbricks.com/docs/self-hosting/configuration/custom-ssl\#step-4:-set-correct-file-permissions)  Step 4: Set Correct File Permissions

Ensure the certificate files have the right permissions:

Copy

```
sudo chown root:root certs/*
sudo chmod 600 certs/*
```

### [​](https://formbricks.com/docs/self-hosting/configuration/custom-ssl\#step-5:-update-traefik-yaml)  Step 5: Update `traefik.yaml`

Modify the file to define HTTP and HTTPS settings:

traefik.yaml

Copy

```
entryPoints:
  web:
    address: ":80"
    http:
      redirections:
        entryPoint:
          to: websecure
          scheme: https
          permanent: true
  websecure:
    address: ":443"

providers:
  docker:
    watch: true
    exposedByDefault: false
  file:
    directory: /etc/traefik/dynamic
```

### [​](https://formbricks.com/docs/self-hosting/configuration/custom-ssl\#step-6:-create-certs-traefik-yaml)  Step 6: Create `certs-traefik.yaml`

Create a `certs-traefik.yaml` file that specifies the path to your custom SSL certificate and key.

certs-traefik.yaml

Copy

```
tls:
  certificates:
    - certFile: /certs/fullchain.crt
      keyFile: /certs/cert.key
```

### [​](https://formbricks.com/docs/self-hosting/configuration/custom-ssl\#step-7:-update-docker-compose-yml)  Step 7: Update `docker-compose.yml`

Modify the configuration to enforce SSL. The rest of the configuration should remain the same as the One-Click setup:

docker-compose.yml

Copy

```
services:
  formbricks:
    restart: always
    image: ghcr.io/formbricks/formbricks:latest
    depends_on:
      - postgres
    labels:
      - "traefik.enable=true"  # Enable Traefik for this service
      - "traefik.http.routers.formbricks.rule=Host(`my-domain.com`)"  # Use your actual domain or IP
      - "traefik.http.routers.formbricks.entrypoints=websecure"  # Use the websecure entrypoint (port 443 with TLS)
      - "traefik.http.routers.formbricks.tls=true"  # Enable TLS
      - "traefik.http.services.formbricks.loadbalancer.server.port=3000"  # Forward traffic to Formbricks on port 3000
    ports:
      - 3000:3000
    volumes:
      - uploads:/home/nextjs/apps/web/uploads/
    <<: *environment

  traefik:
    image: "traefik:v2.7"
    restart: always
    container_name: "traefik"
    depends_on:
      - formbricks
    ports:
      - "80:80"
      - "443:443"
      - "8080:8080"
    volumes:
      - ./traefik.yaml:/traefik.yaml
      - ./acme.json:/acme.json
      - /var/run/docker.sock:/var/run/docker.sock:ro
      - ./certs:/certs
      - ./certs-traefik.yaml:/etc/traefik/dynamic/certs-traefik.yaml
```

## [​](https://formbricks.com/docs/self-hosting/configuration/custom-ssl\#summary)  Summary

- **Navigate to the Formbricks folder**
- **Create a `certs/` folder** and move your certificate files inside.
- **Ensure you have the correct certificate files** (`fullchain.crt` and `cert.key`).
- **Update file permissions** for security.
- **Modify `traefik.yaml`** to handle HTTPS.
- **Create `certs-traefik.yaml`** to point to your certificate files.
- **Update `docker-compose.yml`** to use your custom SSL certificate.

This setup ensures that Formbricks securely communicates using your own SSL certificate. 🚀If you have any questions or require help, feel free to reach out to us on [**GitHub Discussions**](https://github.com/formbricks/formbricks/discussions). 😃

Was this page helpful?

YesNo

[Kubernetes Deployment](https://formbricks.com/docs/self-hosting/setup/kubernetes) [Environment Variables](https://formbricks.com/docs/self-hosting/configuration/environment-variables)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.