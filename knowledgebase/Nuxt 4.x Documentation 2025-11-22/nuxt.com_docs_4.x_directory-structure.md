---
url: "https://nuxt.com/docs/4.x/directory-structure"
title: "Nuxt Directory Structure · Nuxt Directory Structure v4"
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

1. [Structure](https://nuxt.com/docs/4.x/directory-structure)

# Nuxt Directory Structure

Copy page

Learn about the directory structure of a Nuxt application and how to use it.

Nuxt applications have a specific directory structure that is used to organize the code. This structure is designed to be easy to understand and to be used in a consistent way.

## [Root Directory](https://nuxt.com/docs/4.x/directory-structure\#root-directory)

The root directory of a Nuxt application is the directory that contains the `nuxt.config.ts` file. This file is used to configure the Nuxt application.

## [App Directory](https://nuxt.com/docs/4.x/directory-structure\#app-directory)

The `app/` directory is the main directory of the Nuxt application. It contains the following subdirectories:

- [`assets/`](https://nuxt.com/docs/4.x/directory-structure/app/assets): website's assets that the build tool (Vite or webpack) will process
- [`components/`](https://nuxt.com/docs/4.x/directory-structure/app/components): Vue components of the application
- [`composables/`](https://nuxt.com/docs/4.x/directory-structure/app/composables): add your Vue composables
- [`layouts/`](https://nuxt.com/docs/4.x/directory-structure/app/layouts): Vue components that wrap around your pages and avoid re-rendering between pages
- [`middleware/`](https://nuxt.com/docs/4.x/directory-structure/app/middleware): run code before navigating to a particular route
- [`pages/`](https://nuxt.com/docs/4.x/directory-structure/app/pages): file-based routing to create routes within your web application
- [`plugins/`](https://nuxt.com/docs/4.x/directory-structure/app/plugins): use Vue plugins and more at the creation of your Nuxt application
- [`utils/`](https://nuxt.com/docs/4.x/directory-structure/app/utils): add functions throughout your application that can be used in your components, composables, and pages.

This directory also includes specific files:

- [`app.config.ts`](https://nuxt.com/docs/4.x/directory-structure/app/app-config): a reactive configuration within your application
- [`app.vue`](https://nuxt.com/docs/4.x/directory-structure/app/app): the root component of your Nuxt application
- [`error.vue`](https://nuxt.com/docs/4.x/directory-structure/app/error): the error page of your Nuxt application

## [Public Directory](https://nuxt.com/docs/4.x/directory-structure\#public-directory)

The [`public/`](https://nuxt.com/docs/4.x/directory-structure/public) directory is the directory that contains the public files of the Nuxt application. Files contained within this directory are served at the root and are not modified by the build process.

This is suitable for files that have to keep their names (e.g. `robots.txt`) _or_ likely won't change (e.g. `favicon.ico`).

## [Server Directory](https://nuxt.com/docs/4.x/directory-structure\#server-directory)

The [`server/`](https://nuxt.com/docs/4.x/directory-structure/server) directory is the directory that contains the server-side code of the Nuxt application. It contains the following subdirectories:

- [`api/`](https://nuxt.com/docs/4.x/directory-structure/server#server-routes): contains the API routes of the application.
- [`routes/`](https://nuxt.com/docs/4.x/directory-structure/server#server-routes): contains the server routes of the application (e.g. dynamic `/sitemap.xml`).
- [`middleware/`](https://nuxt.com/docs/4.x/directory-structure/server#server-middleware): run code before a server route is processed
- [`plugins/`](https://nuxt.com/docs/4.x/directory-structure/server#server-plugins): use plugins and more at the creation of the Nuxt server
- [`utils/`](https://nuxt.com/docs/4.x/directory-structure/server#server-utilities): add functions throughout your application that can be used in your server code.

## [Shared Directory](https://nuxt.com/docs/4.x/directory-structure\#shared-directory)

The [`shared/`](https://nuxt.com/docs/4.x/directory-structure/shared) directory is the directory that contains the shared code of the Nuxt application and Nuxt server. This code can be used in both the Vue app and the Nitro server.

## [Content Directory](https://nuxt.com/docs/4.x/directory-structure\#content-directory)

The [`content/`](https://nuxt.com/docs/4.x/directory-structure/content) directory is enabled by the [Nuxt Content](https://content.nuxt.com/) module. It is used to create a file-based CMS for your application using Markdown files.

## [Modules Directory](https://nuxt.com/docs/4.x/directory-structure\#modules-directory)

The [`modules/`](https://nuxt.com/docs/4.x/directory-structure/modules) directory is the directory that contains the local modules of the Nuxt application. Modules are used to extend the functionality of the Nuxt application.

## [Nuxt Files](https://nuxt.com/docs/4.x/directory-structure\#nuxt-files)

- [`nuxt.config.ts`](https://nuxt.com/docs/4.x/directory-structure/nuxt-config) file is the main configuration file for the Nuxt application.
- [`.nuxtrc`](https://nuxt.com/docs/4.x/directory-structure/nuxtrc) file is another syntax for configuring the Nuxt application (useful for global configurations).
- [`.nuxtignore`](https://nuxt.com/docs/4.x/directory-structure/nuxtignore) file is used to ignore files in the root directory during the build phase.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/2.directory-structure/index.md)

On this page

On this page

- [Root Directory](https://nuxt.com/docs/4.x/directory-structure#root-directory)
- [App Directory](https://nuxt.com/docs/4.x/directory-structure#app-directory)
- [Public Directory](https://nuxt.com/docs/4.x/directory-structure#public-directory)
- [Server Directory](https://nuxt.com/docs/4.x/directory-structure#server-directory)
- [Shared Directory](https://nuxt.com/docs/4.x/directory-structure#shared-directory)
- [Content Directory](https://nuxt.com/docs/4.x/directory-structure#content-directory)
- [Modules Directory](https://nuxt.com/docs/4.x/directory-structure#modules-directory)
- [Nuxt Files](https://nuxt.com/docs/4.x/directory-structure#nuxt-files)

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