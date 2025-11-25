---
url: "https://nuxt.com/docs/4.x/directory-structure/env"
title: ".env · Nuxt Directory Structure v4"
---

[Back to home](https://nuxt.com/) v4.2.1

- [Docs](https://nuxt.com/docs/4.x)
- [Modules](https://nuxt.com/modules)
- [Templates](https://nuxt.com/templates)
- [Resources](https://nuxt.com/showcase)
- [Enterprise](https://nuxt.com/enterprise)
- [Blog](https://nuxt.com/blog)

Search…
`Ctrl`  `k`
[58.9K](https://go.nuxt.com/github)

- [Get Started](https://nuxt.com/docs/4.x/getting-started/installation)
- [Structure](https://nuxt.com/docs/4.x/directory-structure)
- [Guide](https://nuxt.com/docs/4.x/guide)
- [API](https://nuxt.com/docs/4.x/api)
- [Deploy](https://nuxt.com/deploy)
- [Examples](https://nuxt.com/docs/4.x/examples)
- [Community](https://nuxt.com/docs/4.x/community)

- [.nuxt](https://nuxt.com/docs/4.x/directory-structure/nuxt)
- [.output](https://nuxt.com/docs/4.x/directory-structure/output)
- app


- [assets](https://nuxt.com/docs/4.x/directory-structure/app/assets)
- [components](https://nuxt.com/docs/4.x/directory-structure/app/components)
- [composables](https://nuxt.com/docs/4.x/directory-structure/app/composables)
- [layouts](https://nuxt.com/docs/4.x/directory-structure/app/layouts)
- [middleware](https://nuxt.com/docs/4.x/directory-structure/app/middleware)
- [pages](https://nuxt.com/docs/4.x/directory-structure/app/pages)
- [plugins](https://nuxt.com/docs/4.x/directory-structure/app/plugins)
- [utils](https://nuxt.com/docs/4.x/directory-structure/app/utils)
- [app.vue](https://nuxt.com/docs/4.x/directory-structure/app/app)
- [app.config.ts](https://nuxt.com/docs/4.x/directory-structure/app/app-config)
- [error.vue](https://nuxt.com/docs/4.x/directory-structure/app/error)

- [content](https://nuxt.com/docs/4.x/directory-structure/content)
- [modules](https://nuxt.com/docs/4.x/directory-structure/modules)
- [node\_modules](https://nuxt.com/docs/4.x/directory-structure/node_modules)
- [public](https://nuxt.com/docs/4.x/directory-structure/public)
- [server](https://nuxt.com/docs/4.x/directory-structure/server)
- [shared](https://nuxt.com/docs/4.x/directory-structure/shared)
- [.env](https://nuxt.com/docs/4.x/directory-structure/env)
- [.gitignore](https://nuxt.com/docs/4.x/directory-structure/gitignore)
- [.nuxtignore](https://nuxt.com/docs/4.x/directory-structure/nuxtignore)
- [.nuxtrc](https://nuxt.com/docs/4.x/directory-structure/nuxtrc)
- [nuxt.config.ts](https://nuxt.com/docs/4.x/directory-structure/nuxt-config)
- [package.json](https://nuxt.com/docs/4.x/directory-structure/package)
- [tsconfig.json](https://nuxt.com/docs/4.x/directory-structure/tsconfig)

1. [Directory Structure](https://nuxt.com/docs/4.x/directory-structure)

# .env

Copy page

A .env file specifies your build/dev-time environment variables.

This file should be added to your [`.gitignore`](https://nuxt.com/docs/4.x/directory-structure/gitignore) file to avoid pushing secrets to your repository.

## [Dev, Build and Generate Time](https://nuxt.com/docs/4.x/directory-structure/env\#dev-build-and-generate-time)

Nuxt CLI has built-in [dotenv](https://github.com/motdotla/dotenv) support in development mode and when running [`nuxt build`](https://nuxt.com/docs/4.x/api/commands/build) and [`nuxt generate`](https://nuxt.com/docs/4.x/api/commands/generate).

In addition to any process environment variables, if you have a `.env` file in your project root directory, it will be automatically loaded **at dev, build and generate time**. Any environment variables set there will be accessible within your `nuxt.config` file and modules.

.env

```ini
MY_ENV_VARIABLE=hello
```

Note that removing a variable from `.env` or removing the `.env` file entirely will not unset values that have already been set.

## [Custom File](https://nuxt.com/docs/4.x/directory-structure/env\#custom-file)

If you want to use a different file - for example, to use `.env.local` or `.env.production` \- you can do so by passing the `--dotenv` flag when using the Nuxt CLI.

Terminal

```bash
npx nuxt dev --dotenv .env.local
```

When updating `.env` in development mode, the Nuxt instance is automatically restarted to apply new values to the `process.env`.

In your application code, you should use [Runtime Config](https://nuxt.com/docs/4.x/guide/going-further/runtime-config) instead of plain env variables.

## [Production](https://nuxt.com/docs/4.x/directory-structure/env\#production)

**After your server is built**, you are responsible for setting environment variables when you run the server.

Your `.env` files will not be read at this point. How you do this is different for every environment.

This design decision was made to ensure compatibility across various deployment environments, some of which may not have a traditional file system available, such as serverless platforms or edge networks like Cloudflare Workers.

Since `.env` files are not used in production, you must explicitly set environment variables using the tools and methods provided by your hosting environment. Here are some common approaches:

- You can pass the environment variables as arguments using the terminal:

`$ DATABASE_HOST=mydatabaseconnectionstring node .output/server/index.mjs`
- You can set environment variables in shell configuration files like `.bashrc` or `.profile`.
- Many cloud service providers, such as Vercel, Netlify, and AWS, provide interfaces for setting environment variables via their dashboards, CLI tools or configuration files.

`runtimeConfig`won't pick up environment variables that don't start with `NUXT_` in production ( [https://nuxt.com/docs/4.x/guide/going-further/runtime-config#environment-variables](https://nuxt.com/docs/4.x/guide/going-further/runtime-config#environment-variables)).

## [Production Preview](https://nuxt.com/docs/4.x/directory-structure/env\#production-preview)

For local production preview purpose, we recommend using [`nuxt preview`](https://nuxt.com/docs/4.x/api/commands/preview) since using this command, the `.env` file will be loaded into `process.env` for convenience. Note that this command requires dependencies to be installed in the package directory.

Or you could pass the environment variables as arguments using the terminal. For example, on Linux or macOS:

Terminal

```bash
DATABASE_HOST=mydatabaseconnectionstring node .output/server/index.mjs
```

Note that for a purely static site, it is not possible to set runtime configuration config after your project is prerendered.

[Docs > 4 X > Guide > Going Further > Runtime Config](https://nuxt.com/docs/4.x/guide/going-further/runtime-config) Read more in Docs > 4 X > Guide > Going Further > Runtime Config.

If you want to use environment variables set at build time but do not care about updating these down the line (or only need to update them reactively _within_ your app) then `appConfig` may be a better choice. You can define `appConfig` both within your `nuxt.config` (using environment variables) and also within an `~/app.config.ts` file in your project.

[Docs > 4 X > Directory Structure > App > App Config](https://nuxt.com/docs/4.x/directory-structure/app/app-config) Read more in Docs > 4 X > Directory Structure > App > App Config.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/2.directory-structure/2.env.md)

[shared\\
\\
Use the shared/ directory to share functionality between the Vue app and the Nitro server.](https://nuxt.com/docs/4.x/directory-structure/shared) [.gitignore\\
\\
A .gitignore file specifies intentionally untracked files that git should ignore.](https://nuxt.com/docs/4.x/directory-structure/gitignore)

On this page

On this page

- [Dev, Build and Generate Time](https://nuxt.com/docs/4.x/directory-structure/env#dev-build-and-generate-time)
- [Custom File](https://nuxt.com/docs/4.x/directory-structure/env#custom-file)
- [Production](https://nuxt.com/docs/4.x/directory-structure/env#production)
- [Production Preview](https://nuxt.com/docs/4.x/directory-structure/env#production-preview)

Community

- [Become a Sponsor](https://go.nuxt.com/sponsor)
- [Master Nuxt](https://masteringnuxt.com/nuxt3)
- [Nuxt Certification](https://certification.nuxt.com/)

[Nuxt on Discord](https://go.nuxt.com/discord) [Nuxt on Bluesky](https://go.nuxt.com/bluesky) [Nuxt on X](https://go.nuxt.com/x) [Nuxt on GitHub](https://go.nuxt.com/github)

Black Friday Week

Get 60% off and bonuses on all Official Nuxt Certifications.

MenuOn this page

### Community

- [Nuxters](https://nuxters.nuxt.com/)
- [Team](https://nuxt.com/team)
- [Design Kit](https://nuxt.com/design-kit)

### Explore

- [Modules](https://nuxt.com/modules)
- [Templates](https://nuxt.com/templates)
- [Showcase](https://nuxt.com/showcase)

### Enterprise

- [Support](https://nuxt.com/enterprise/support)
- [Agencies](https://nuxt.com/enterprise/agencies)
- [Sponsors](https://nuxt.com/enterprise/sponsors)

Subscribe to our newsletter

Stay updated on new releases and features, guides, and community updates.

Subscribe

[Nuxt on X](https://go.nuxt.com/x) [Nuxt on BlueSky](https://go.nuxt.com/bluesky) [Nuxt on LinkedIn](https://go.nuxt.com/linkedin) [Nuxt on Discord](https://go.nuxt.com/discord) [Nuxt on GitHub](https://go.nuxt.com/github)

Copyright © 2016-2025 Nuxt - [MIT License](https://go.nuxt.com/license)