---
url: "https://formbricks.com/docs/self-hosting/setup/one-click"
title: "One-Click Setup - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/self-hosting/setup/one-click#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Setup

One-Click Setup

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

- [Requirements](https://formbricks.com/docs/self-hosting/setup/one-click#requirements)
- [Deployment](https://formbricks.com/docs/self-hosting/setup/one-click#deployment)
- [Script Prompts](https://formbricks.com/docs/self-hosting/setup/one-click#script-prompts)
- [Update](https://formbricks.com/docs/self-hosting/setup/one-click#update)
- [Stop](https://formbricks.com/docs/self-hosting/setup/one-click#stop)
- [Restart](https://formbricks.com/docs/self-hosting/setup/one-click#restart)
- [Cleanup MinIO init (optional)](https://formbricks.com/docs/self-hosting/setup/one-click#cleanup-minio-init-optional)
- [Uninstall](https://formbricks.com/docs/self-hosting/setup/one-click#uninstall)
- [Debug](https://formbricks.com/docs/self-hosting/setup/one-click#debug)
- [Troubleshooting](https://formbricks.com/docs/self-hosting/setup/one-click#troubleshooting)

Setup

# One-Click Setup

How to set up Formbricks instance with a one-click script

This only works with an Ubuntu machine, so ensure the underlying OS is verified beforehand!

If you’re looking to quickly set up a production instance of Formbricks on an Ubuntu server, this guide is for you. Using a convenient shell script, you can install everything—including Docker, Postgres DB, and an SSL certificate—in just a few steps. The script takes care of all the dependencies and configuration for your server, making the process smooth and simple.

This setup uses **Traefik** as a **reverse proxy**, essential for directing incoming traffic to the correct
container and enabling secure internet access to Formbricks. Traefik is chosen for its simplicity and
automatic SSL management via Let’s Encrypt.

For other operating systems or a more customized installation, please refer to the advanced installation guide with [Docker](https://formbricks.com/docs/self-hosting/setup/docker).

### [​](https://formbricks.com/docs/self-hosting/setup/one-click\#requirements)  Requirements

- An Ubuntu Virtual Machine with SSH access.
- A custom domain with an **A record** pointing to your server.
- Ports **80** and **443** are open in your VM’s Security Group, allowing Traefik to create an SSL certificate.

### [​](https://formbricks.com/docs/self-hosting/setup/one-click\#deployment)  Deployment

Run this command in your terminal:

Copy

```
curl -fsSL https://raw.githubusercontent.com/formbricks/formbricks/stable/docker/formbricks.sh -o formbricks.sh && chmod +x formbricks.sh && ./formbricks.sh install
```

### [​](https://formbricks.com/docs/self-hosting/setup/one-click\#script-prompts)  Script Prompts

During installation, the script will prompt you to provide some details:

- **Overwriting Docker GPG Keys**:
If Docker GPG keys already exist, the script will ask whether you want to overwrite them.

Copy

```
🚀 Executing default step of installing Formbricks
🧱 Welcome to the Formbricks Setup Script

🛸 Fasten your seatbelts! We're setting up your Formbricks environment on your Ubuntu 24.04 LTS server.

🧹 Time to sweep away any old Docker installations.
🔄 Updating your package list.
📦 Installing the necessary dependencies.
🔑 Adding Docker's official GPG key and setting up the stable repository.
File '/etc/apt/keyrings/docker.gpg' exists. Overwrite? (y/N)
```

- **Domain Name**:
Enter the domain name where you’ll host Formbricks. The domain will be used to generate an SSL certificate. Do not include the protocol (http/https).

Copy

```
🚀 Executing default step of installing Formbricks
🧱 Welcome to the Formbricks Setup Script

🛸 Fasten your seatbelts! We're setting up your Formbricks environment on your Ubuntu 24.04 LTS server.

🧹 Time to sweep away any old Docker installations.
🔄 Updating your package list.
📦 Installing the necessary dependencies.
🔑 Adding Docker's official GPG key and setting up the stable repository.
File '/etc/apt/keyrings/docker.gpg' exists. Overwrite? (y/N) y
🔄 Updating your package list again.
🐳 Installing Docker.
🚀 Testing your Docker installation.
🎉 Docker is installed!
🐳 Adding your user to the Docker group to avoid using sudo with docker commands.
🎉 Hooray! Docker is all set and ready to go. You're now ready to run your Formbricks instance!
📁 Created Formbricks Quickstart directory at ./formbricks.
🔗 Please enter your domain name for the SSL certificate (🚨 do NOT enter the protocol (http/https/etc)):
```

- **HTTPS Certificate Setup**:
The script will ask if you’d like to create an HTTPS certificate for your domain. Enter `Y` to proceed (highly recommended for secure access).

Copy

```
🚀 Executing default step of installing Formbricks
🧱 Welcome to the Formbricks Setup Script

🛸 Fasten your seatbelts! We're setting up your Formbricks environment on your Ubuntu 24.04 LTS server.

🧹 Time to sweep away any old Docker installations.
🔄 Updating your package list.
📦 Installing the necessary dependencies.
🔑 Adding Docker's official GPG key and setting up the stable repository.
File '/etc/apt/keyrings/docker.gpg' exists. Overwrite? (y/N) y
🔄 Updating your package list again.
🐳 Installing Docker.
🚀 Testing your Docker installation.
🎉 Docker is installed!
🐳 Adding your user to the Docker group to avoid using sudo with docker commands.
🎉 Hooray! Docker is all set and ready to go. You're now ready to run your Formbricks instance!
📁 Created Formbricks Quickstart directory at ./formbricks.
🔗 Please enter your domain name for the SSL certificate (🚨 do NOT enter the protocol (http/https/etc)):
my.hosted.url.com
🔗 Do you want us to set up an HTTPS certificate for you? [Y/n]
```

- **DNS Setup Prompt**: Ensure that your domain’s DNS is correctly configured and ports 80 and 443 are open. Confirm this by entering `Y`. This step is crucial for proper SSL certificate issuance and secure server access.

Copy

```
🚀 Executing default step of installing Formbricks
🧱 Welcome to the Formbricks Setup Script

🛸 Fasten your seatbelts! We're setting up your Formbricks environment on your Ubuntu 24.04 LTS server.

🧹 Time to sweep away any old Docker installations.
🔄 Updating your package list.
📦 Installing the necessary dependencies.
🔑 Adding Docker's official GPG key and setting up the stable repository.
File '/etc/apt/keyrings/docker.gpg' exists. Overwrite? (y/N) y
🔄 Updating your package list again.
🐳 Installing Docker.
🚀 Testing your Docker installation.
🎉 Docker is installed!
🐳 Adding your user to the Docker group to avoid using sudo with docker commands.
🎉 Hooray! Docker is all set and ready to go. You're now ready to run your Formbricks instance!
📁 Created Formbricks Quickstart directory at ./formbricks.
🔗 Please enter your domain name for the SSL certificate (🚨 do NOT enter the protocol (http/https/etc)):
my.hosted.url.com
🔗 Do you want us to set up an HTTPS certificate for you? [Y/n]
Y
🔗 Please make sure that the domain points to the server's IP address and that ports 80 & 443 are open in your server's firewall. Is everything set up? [Y/n]
```

- **Email Address for SSL Certificate**:
Provide an email address to register the SSL certificate. Notifications regarding the certificate will be sent to this address.

Copy

```
🚀 Executing default step of installing Formbricks
🧱 Welcome to the Formbricks Setup Script

🛸 Fasten your seatbelts! We're setting up your Formbricks environment on your Ubuntu 24.04 LTS server.

🧹 Time to sweep away any old Docker installations.
🔄 Updating your package list.
📦 Installing the necessary dependencies.
🔑 Adding Docker's official GPG key and setting up the stable repository.
File '/etc/apt/keyrings/docker.gpg' exists. Overwrite? (y/N) y
🔄 Updating your package list again.
🐳 Installing Docker.
🚀 Testing your Docker installation.
🎉 Docker is installed!
🐳 Adding your user to the Docker group to avoid using sudo with docker commands.
🎉 Hooray! Docker is all set and ready to go. You're now ready to run your Formbricks instance!
📁 Created Formbricks Quickstart directory at ./formbricks.
🔗 Please enter your domain name for the SSL certificate (🚨 do NOT enter the protocol (http/https/etc)):
my.hosted.url.com
🔗 Do you want us to set up an HTTPS certificate for you? [Y/n]
Y
🔗 Please make sure that the domain points to the server's IP address and that ports 80 & 443 are open in your server's firewall. Is everything set up? [Y/n]
Y
💡 Please enter your email address for the SSL certificate:
```

- **Enforce HTTPS with HSTS**:
Enabling HTTP Strict Transport Security (HSTS) ensures all communication with your server is encrypted. It’s a recommended best practice. Enter `Y` to enforce HTTPS.

Copy

```
🚀 Executing default step of installing Formbricks
🧱 Welcome to the Formbricks Setup Script

🛸 Fasten your seatbelts! We're setting up your Formbricks environment on your Ubuntu 24.04 LTS server.

🧹 Time to sweep away any old Docker installations.
🔄 Updating your package list.
📦 Installing the necessary dependencies.
🔑 Adding Docker's official GPG key and setting up the stable repository.
File '/etc/apt/keyrings/docker.gpg' exists. Overwrite? (y/N) y
🔄 Updating your package list again.
🐳 Installing Docker.
🚀 Testing your Docker installation.
🎉 Docker is installed!
🐳 Adding your user to the Docker group to avoid using sudo with docker commands.
🎉 Hooray! Docker is all set and ready to go. You're now ready to run your Formbricks instance!
📁 Created Formbricks Quickstart directory at ./formbricks.
🔗 Please enter your domain name for the SSL certificate (🚨 do NOT enter the protocol (http/https/etc)):
my.hosted.url.com
🔗 Do you want us to set up an HTTPS certificate for you? [Y/n]
Y
🔗 Please make sure that the domain points to the server's IP address and that ports 80 & 443 are open in your server's firewall. Is everything set up? [Y/n]
Y
💡 Please enter your email address for the SSL certificate:
docs@formbricks.com
🔗 Do you want to enforce HTTPS (HSTS)? [Y/n]
```

- **Email Service Setup Prompt**: The script will ask if you want to set up the email service. Enter `Y` to proceed.(default is `N`). You can skip this step if you don’t want to set up the email service. You will still be able to use Formbricks without setting up the email service.

Copy

```
🚀 Executing default step of installing Formbricks
🧱 Welcome to the Formbricks Setup Script

🛸 Fasten your seatbelts! We're setting up your Formbricks environment on your Ubuntu 24.04 LTS server.

🧹 Time to sweep away any old Docker installations.
🔄 Updating your package list.
📦 Installing the necessary dependencies.
🔑 Adding Docker's official GPG key and setting up the stable repository.
File '/etc/apt/keyrings/docker.gpg' exists. Overwrite? (y/N) y
🔄 Updating your package list again.
🐳 Installing Docker.
🚀 Testing your Docker installation.
🎉 Docker is installed!
🐳 Adding your user to the Docker group to avoid using sudo with docker commands.
🎉 Hooray! Docker is all set and ready to go. You're now ready to run your Formbricks instance!
📁 Created Formbricks Quickstart directory at ./formbricks.
🔗 Please enter your domain name for the SSL certificate (🚨 do NOT enter the protocol (http/https/etc)):
my.hosted.url.com
🔗 Do you want us to set up an HTTPS certificate for you? [Y/n]
Y
🔗 Please make sure that the domain points to the server's IP address and that ports 80 & 443 are open in your server's firewall. Is everything set up? [Y/n]
Y
💡 Please enter your email address for the SSL certificate:
docs@formbricks.com
🔗 Do you want to enforce HTTPS (HSTS)? [Y/n]
Y
🚗 Configuring Traefik...
💡 Created traefik.yaml and traefik-dynamic.yaml file.
💡 Created acme.json file with correct permissions.
📧 Do you want to set up the email service? You will need SMTP credentials for the same! [y/N]
```

**That’s it**! After running the command and providing the required information, visit the domain name you entered, and you should see the Formbricks home wizard!

Copy

```
🚀 Executing default step of installing Formbricks
🧱 Welcome to the Formbricks Setup Script

🛸 Fasten your seatbelts! We're setting up your Formbricks environment on your Ubuntu 24.04 LTS server.

🧹 Time to sweep away any old Docker installations.
🔄 Updating your package list.
📦 Installing the necessary dependencies.
🔑 Adding Docker's official GPG key and setting up the stable repository.
File '/etc/apt/keyrings/docker.gpg' exists. Overwrite? (y/N) y
🔄 Updating your package list again.
🐳 Installing Docker.
🚀 Testing your Docker installation.
🎉 Docker is installed!
🐳 Adding your user to the Docker group to avoid using sudo with docker commands.
🎉 Hooray! Docker is all set and ready to go. You're now ready to run your Formbricks instance!
📁 Created Formbricks Quickstart directory at ./formbricks.
🔗 Please enter your domain name for the SSL certificate (🚨 do NOT enter the protocol (http/https/etc)):
my.hosted.url.com
🔗 Do you want us to set up an HTTPS certificate for you? [Y/n]
Y
🔗 Please make sure that the domain points to the server's IP address and that ports 80 & 443 are open in your server's firewall. Is everything set up? [Y/n]
Y
💡 Please enter your email address for the SSL certificate:
docs@formbricks.com
🔗 Do you want to enforce HTTPS (HSTS)? [Y/n]
Y
🚗 Configuring Traefik...
💡 Created traefik.yaml and traefik-dynamic.yaml file.
💡 Created acme.json file with correct permissions.
📧 Do you want to set up the email service? You will need SMTP credentials for the same! [y/N] N
📥 Downloading docker-compose.yml from Formbricks GitHub repository...
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100  6632  100  6632    0     0  24280      0 --:--:-- --:--:-- --:--:-- 24382
🚙 Updating docker-compose.yml with your custom inputs...
🚗 NEXTAUTH_SECRET updated successfully!
🚗 ENCRYPTION_KEY updated successfully!
🚗 CRON_SECRET updated successfully!

[+] Running 4/4
 ✔ Network formbricks_default         Created                                                                                                                                                    0.2s
 ✔ Container formbricks-postgres-1    Started                                                                                                                                                    1.0s
 ✔ Container formbricks-formbricks-1  Started                                                                                                                                                    1.6s
 ✔ Container traefik                  Started                                                                                                                                                    2.8s
🔗 To edit more variables and deeper config, go to the formbricks/docker-compose.yml, edit the file, and restart the container!
🚨 Make sure you have set up the DNS records as well as inbound rules for the domain name and IP address of this instance.

🎉 All done! Please setup your Formbricks instance by visiting your domain at https://my.hosted.url.com. You can check the status of Formbricks & Traefik with 'cd formbricks && sudo docker compose ps.'
```

## [​](https://formbricks.com/docs/self-hosting/setup/one-click\#update)  Update

To update Formbricks, simply run the following command:

Copy

```
./formbricks.sh update
```

The script will automatically pull the latest version of Formbricks from GitHub Container Registry and restart the containers.

## [​](https://formbricks.com/docs/self-hosting/setup/one-click\#stop)  Stop

To stop Formbricks, simply run the following command:

Copy

```
./formbricks.sh stop
```

The script will automatically stop all the Formbricks related containers and brings the entire stack down.

## [​](https://formbricks.com/docs/self-hosting/setup/one-click\#restart)  Restart

To restart Formbricks, simply run the following command:

Copy

```
./formbricks.sh restart
```

The script will automatically restart all the Formbricks related containers and brings the entire stack up with the previous configuration.

## [​](https://formbricks.com/docs/self-hosting/setup/one-click\#cleanup-minio-init-optional)  Cleanup MinIO init (optional)

During the one-click setup, a temporary `minio-init` service configures MinIO (bucket, policy, service user). It is idempotent and safe to leave in place; it will do nothing on subsequent starts once configuration exists.If you prefer to remove the `minio-init` service and its references after a successful setup, run:

Copy

```
./formbricks.sh cleanup-minio-init
```

This only removes the init job and its Compose references; it does not delete any data or affect your MinIO configuration.

## [​](https://formbricks.com/docs/self-hosting/setup/one-click\#uninstall)  Uninstall

To uninstall Formbricks, simply run the following command, but keep in mind that this will delete all your data!

Copy

```
./formbricks.sh uninstall
```

The script will automatically stop all the Formbricks related containers, remove the Formbricks directory, and delete the Docker network.

## [​](https://formbricks.com/docs/self-hosting/setup/one-click\#debug)  Debug

If you encounter any issues, you can check the logs of the containers with:

Copy

```
./formbricks.sh logs
```

## [​](https://formbricks.com/docs/self-hosting/setup/one-click\#troubleshooting)  Troubleshooting

If you encounter any issues, consider the following steps:

- **Inbound Rules**: Make sure you have added inbound rules for Port 80 and 443 in your VM’s Security Group.
- **A Record**: Verify that you have set up an A record for your domain, pointing to your VM’s IP address.
- **Check Docker Instances**: Run `docker ps` to check the status of the Docker instances.
- **Check Formbricks Logs**: Run `cd formbricks && docker compose logs` to check the logs of the Formbricks stack.

If you have any questions or require help, feel free to reach out to us on [**GitHub Discussions**](https://github.com/formbricks/formbricks/discussions). 😃

Was this page helpful?

YesNo

[Self-Hosting](https://formbricks.com/docs/self-hosting/overview) [Docker Setup](https://formbricks.com/docs/self-hosting/setup/docker)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.