---
url: "https://formbricks.com/docs/self-hosting/setup/docker"
title: "Docker Setup - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/self-hosting/setup/docker#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Setup

Docker Setup

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

- [Requirements](https://formbricks.com/docs/self-hosting/setup/docker#requirements)
- [Start](https://formbricks.com/docs/self-hosting/setup/docker#start)
- [Update](https://formbricks.com/docs/self-hosting/setup/docker#update)
- [Optional: Adding MinIO for File Storage](https://formbricks.com/docs/self-hosting/setup/docker#optional:-adding-minio-for-file-storage)
- [Quick Start: Using docker-compose.dev.yml](https://formbricks.com/docs/self-hosting/setup/docker#quick-start:-using-docker-compose-dev-yml)
- [Manual MinIO Setup (Custom Configuration)](https://formbricks.com/docs/self-hosting/setup/docker#manual-minio-setup-custom-configuration)
- [Tips & Common Gotchas](https://formbricks.com/docs/self-hosting/setup/docker#tips-&-common-gotchas)
- [Production Setup with Traefik](https://formbricks.com/docs/self-hosting/setup/docker#production-setup-with-traefik)
- [Debug](https://formbricks.com/docs/self-hosting/setup/docker#debug)

Setup

# Docker Setup

Set up Formbricks quickly using our ready-to-use Docker image.

The image is pre-built and requires minimal setup—just download it and start the container.

### [​](https://formbricks.com/docs/self-hosting/setup/docker\#requirements)  Requirements

Make sure Docker and Docker Compose are installed on your system. These are usually included in tools like Docker Desktop and Rancher Desktop.

`docker compose` without the hyphen is now the primary method of using docker-compose, according to the
Docker documentation.

## [​](https://formbricks.com/docs/self-hosting/setup/docker\#start)  Start

1. **Create a New Directory for Formbricks**Open a terminal and run the following commands to create and enter a new directory for Formbricks:






Copy











```
mkdir formbricks-quickstart && cd formbricks-quickstart
```

2. **Download the Docker-Compose File**Get the docker-compose file from the Formbricks repository by running:






Copy











```
curl -o docker-compose.yml https://raw.githubusercontent.com/formbricks/formbricks/stable/docker/docker-compose.yml
```

3. **Generate NextAuth Secret**You need a NextAuth secret for session signing and encryption. Run one of the commands below based on your operating system:For Linux:






Copy











```
sed -i "/NEXTAUTH_SECRET:$/s/NEXTAUTH_SECRET:.*/NEXTAUTH_SECRET: $(openssl rand -hex 32)/" docker-compose.yml
```






For macOS:






Copy











```
sed -i '' "s/NEXTAUTH_SECRET:.*/NEXTAUTH_SECRET: $(openssl rand -hex 32)/" docker-compose.yml
```

4. **Generate Encryption Key**Next, you need to generate an Encryption Key. This will be used for authenticating and verifying 2 Factor Authentication. Run one of the commands below based on your operating system:For Linux:






Copy











```
sed -i "/ENCRYPTION_KEY:$/s/ENCRYPTION_KEY:.*/ENCRYPTION_KEY: $(openssl rand -hex 32)/" docker-compose.yml
```






For macOS:






Copy











```
sed -i '' "s/ENCRYPTION_KEY:.*/ENCRYPTION_KEY: $(openssl rand -hex 32)/" docker-compose.yml
```

5. **Generate Cron Secret**You require a Cron secret to secure API access for running cron jobs. Run one of the commands below based on your operating system:For Linux:






Copy











```
sed -i "/CRON_SECRET:$/s/CRON_SECRET:.*/CRON_SECRET: $(openssl rand -hex 32)/" docker-compose.yml
```






For macOS:






Copy











```
sed -i '' "s/CRON_SECRET:.*/CRON_SECRET: $(openssl rand -hex 32)/" docker-compose.yml
```

6. **Start the Docker Setup**Now, you’re ready to run Formbricks with Docker. Use the command below to start Formbricks along with a PostgreSQL database using Docker Compose:






Copy











```
docker compose up -d
```






The `-d` flag runs the containers in the background, so they keep running even after you close the terminal.
7. **Open Formbricks in Your Browser**Once the setup is running, open [**http://localhost:3000**](http://localhost:3000/) in your browser to access Formbricks. The first time you visit, you’ll see a setup wizard. Follow the steps to create your first user and start using Formbricks.

## [​](https://formbricks.com/docs/self-hosting/setup/docker\#update)  Update

Please take a look at our [migration guide](https://formbricks.com/docs/self-hosting/advanced/migration) for version specific steps to update Formbricks.

1. Pull the latest Formbricks image






Copy











```
docker compose pull
```

2. Stop the Formbricks stack






Copy











```
docker compose down
```

3. Re-start the Formbricks stack with the updated image






Copy











```
docker compose up -d
```


## [​](https://formbricks.com/docs/self-hosting/setup/docker\#optional:-adding-minio-for-file-storage)  Optional: Adding MinIO for File Storage

MinIO provides S3-compatible object storage for file uploads in Formbricks. If you want to enable features like image uploads, file uploads in surveys, or custom logos, you can add MinIO to your Docker setup.

For detailed information about file storage options and configuration, see our [File Uploads\\
Configuration](https://formbricks.com/docs/self-hosting/configuration/file-uploads) guide.

**For production deployments with HTTPS**, use the [one-click setup script](https://formbricks.com/docs/self-hosting/setup/one-click)
which automatically configures MinIO with Traefik, SSL certificates, and a subdomain (required for MinIO in
production). The setups below are suitable for local development or testing only.

### [​](https://formbricks.com/docs/self-hosting/setup/docker\#quick-start:-using-docker-compose-dev-yml)  Quick Start: Using docker-compose.dev.yml

The fastest way to test MinIO with Formbricks is to use the included `docker-compose.dev.yml` which already has MinIO pre-configured.

1. **Start MinIO and Services**From the repository root:






Copy











```
docker compose -f docker-compose.dev.yml up -d
```






This starts PostgreSQL, Valkey (Redis), MinIO, and Mailhog.
2. **Access MinIO Console**Open [http://localhost:9001](http://localhost:9001/) in your browser.Login credentials:   - Username: `devminio`
   - Password: `devminio123`
3. **Create Bucket**   - Click “Buckets” in the left sidebar
   - Click “Create Bucket”
   - Name it: `formbricks`
4. **Configure Formbricks**Update your `.env` file or environment variables with MinIO configuration:






Copy











```
# MinIO S3 Storage
S3_ACCESS_KEY="devminio"
S3_SECRET_KEY="devminio123"
S3_REGION="us-east-1"
S3_BUCKET_NAME="formbricks"
S3_ENDPOINT_URL="http://localhost:9000"
S3_FORCE_PATH_STYLE="1"
```

5. **Verify in MinIO Console**After uploading files in Formbricks, view them at [http://localhost:9001](http://localhost:9001/):   - Navigate to Buckets → formbricks → Browse
   - Your uploaded files will appear here

The `docker-compose.dev.yml` file includes MinIO with console access on port 9001, making it easy to
visually verify file uploads. This is the recommended approach for development and testing.

### [​](https://formbricks.com/docs/self-hosting/setup/docker\#manual-minio-setup-custom-configuration)  Manual MinIO Setup (Custom Configuration)

**Recommended:** If you can, use `docker-compose.dev.yml` for the fastest path. Use
this manual approach only when you need to integrate MinIO into an existing `docker-compose.yml`
or customize settings.

If you prefer to add MinIO to your own `docker-compose.yml`, follow these steps:

1. **Add the MinIO service**Add this service alongside your existing `formbricks` and `postgres` services:






Copy











```
services:
     # ... your existing services (formbricks, postgres, redis/valkey, etc.)

     minio:
       image: minio/minio:latest
       restart: always
       command: server /data --console-address ":9001"
       environment:
         MINIO_ROOT_USER: "formbricks-root"
         MINIO_ROOT_PASSWORD: "change-this-secure-password"
       ports:
      - "9000:9000" # S3 API
      - "9001:9001" # Web console
    volumes:
      - minio-data:/data
```

For production pinning, consider using a digest (e.g., `minio/minio@sha256:…`) and review
periodically with `docker inspect minio/minio:latest`.

2. **Declare the MinIO volume**Add (or extend) your `volumes` block:






Copy











```
volumes:
     postgres:
       driver: local
     redis:
       driver: local
     minio-data:
       driver: local
```

3. **Start services**






Copy











```
docker compose up -d
```

4. **Open the MinIO Console & Create a Bucket**   - Visit **[http://localhost:9001](http://localhost:9001/)**
   - Log in with:
     - **Username:**`formbricks-root`
     - **Password:**`change-this-secure-password`
   - Go to **Buckets → Create Bucket**
   - Name it: **`formbricks`**
5. **Configure Formbricks to use MinIO**In your `.env` or `formbricks` service environment, set:






Copy











```
# MinIO S3 Storage
S3_ACCESS_KEY="formbricks-root"
S3_SECRET_KEY="change-this-secure-password"
S3_REGION="us-east-1"
S3_BUCKET_NAME="formbricks"
S3_ENDPOINT_URL="http://minio:9000"
S3_FORCE_PATH_STYLE="1"
```













These credentials should match `MINIO_ROOT_USER` and `MINIO_ROOT_PASSWORD` above.
For local/dev this is fine. For production, create a dedicated MinIO user with restricted policies.

6. **Verify uploads**After uploading a file in Formbricks, check **[http://localhost:9001](http://localhost:9001/)**:   - **Buckets → formbricks → Browse**


        You should see your uploaded files.

#### [​](https://formbricks.com/docs/self-hosting/setup/docker\#tips-&-common-gotchas)  Tips & Common Gotchas

- **Connection refused**: Ensure the `minio` container is running and port **9000** is reachable from the Formbricks container (use the internal URL `http://minio:9000`).
- **Bucket not found**: Create the `formbricks` bucket in the console before uploading.
- **Auth failed**: Confirm `S3_ACCESS_KEY`/`S3_SECRET_KEY` match MinIO credentials.
- **Health check**: From the Formbricks container:







Copy











```
docker compose exec formbricks sh -c 'wget -O- http://minio:9000/minio/health/ready'
```


### [​](https://formbricks.com/docs/self-hosting/setup/docker\#production-setup-with-traefik)  Production Setup with Traefik

For production deployments, use the [one-click setup script](https://formbricks.com/docs/self-hosting/setup/one-click) which automatically configures:

- MinIO service with Traefik reverse proxy
- Dedicated subdomain (e.g., `files.yourdomain.com`) \- **required for production**
- Automatic SSL certificate generation via Let’s Encrypt
- CORS configuration for your domain
- Rate limiting middleware
- Secure credential generation

The production setup from [formbricks.sh](https://github.com/formbricks/formbricks/blob/main/docker/formbricks.sh) includes advanced features not covered in this manual setup. For production use, we strongly recommend using the one-click installer.

## [​](https://formbricks.com/docs/self-hosting/setup/docker\#debug)  Debug

If you encounter any issues, you can check the logs of the container with this command:

Copy

```
docker compose logs -f
```

In an ideal case, you should see this:

Copy

```
[+] Running 9/16
⠹ formbricks 15 layers [⣿⣤⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀] 29.78MB/47.76MB Pulling                                                           13.3s
✔ 7264a8db6415 Already exists                                                                                                 0.0s
⠋ 751194035c36 Downloading    [===============================>                   ]  29.78MB/47.76...                         8.1s
✔ eff5dce73b38 Download complete                                                                                              1.7s
✔ c8ce5be43019 Download complete                                                                                              1.2s
✔ a2f33c630af5 Download complete                                                                                              5.1s
✔ e3b64e437860 Download complete                                                                                              3.3s
✔ a6551ac5f976 Download complete                                                                                              4.9s
✔ 4f4fb700ef54 Download complete                                                                                              6.0s
✔ 22163889e16b Download complete                                                                                              6.7s
✔ dc647bb9eb13 Download complete                                                                                              7.8s
⠋ 49c2ad494720 Waiting                                                                                                        8.1s
⠋ 5c797a842dcb Waiting                                                                                                        8.1s
⠋ 1f231213db04 Waiting                                                                                                        8.1s
⠋ e407294bdcda Waiting                                                                                                        8.1s
⠋ 6fd8358dca47 Pulling fs layer                                                                                               8.1s

[+] Running 2/2
✔ Container formbricks-quickstart-postgres-1    Created                                                                       0.0s
✔ Container formbricks-quickstart-formbricks-1  Created                                                                       0.0s
```

And at the tail of the output, you should see this:

Copy

```
formbricks-quickstart-formbricks-1  | All migrations have been successfully applied.
formbricks-quickstart-formbricks-1  |
formbricks-quickstart-formbricks-1  | - info Loaded env from /home/nextjs/apps/web/.env
formbricks-quickstart-formbricks-1  | Listening on port 3000 url: http://<random-string>:3000
```

You can close the logs again by hitting `CTRL + C`.

**Customizing environment variables**To edit any of the available environment variables, check out our [Configuration](https://formbricks.com/docs/self-hosting/configuration/environment-variables) section!

If you have any questions or require help, feel free to reach out to us on [**GitHub Discussions**](https://github.com/formbricks/formbricks/discussions). 😃

Was this page helpful?

YesNo

[One-Click Setup](https://formbricks.com/docs/self-hosting/setup/one-click) [Monitoring](https://formbricks.com/docs/self-hosting/setup/monitoring)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.