---
url: "https://nuxt.com/docs/4.x/directory-structure/nuxtrc"
title: ".nuxtrc · Nuxt Directory Structure v4"
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

# .nuxtrc

Copy page

The .nuxtrc file allows you to define nuxt configurations in a flat syntax.

The `.nuxtrc` file can be used to configure Nuxt with a flat syntax. It is based on [`unjs/rc9`](https://github.com/unjs/rc9).

For more advanced configurations, use [`nuxt.config`](https://nuxt.com/docs/4.x/directory-structure/nuxt-config).

## [Usage](https://nuxt.com/docs/4.x/directory-structure/nuxtrc\#usage)

.nuxtrc

```bash
# Disable SSR
ssr=false

# Configuration for `@nuxt/devtools`
devtools.enabled=true

# Add Nuxt modules
modules[]=@nuxt/image
modules[]=nuxt-security
```

If present, the properties in the `nuxt.config` file will overwrite the properties in `.nuxtrc` file.

Nuxt automatically adds a `setups` section to track module installation and upgrade state. This is used internally for [module lifecycle hooks](https://nuxt.com/docs/4.x/api/kit/modules#using-lifecycle-hooks-for-module-installation-and-upgrade) and should not be modified manually.

[Docs > 4 X > API > Configuration > Nuxt Config](https://nuxt.com/docs/4.x/api/configuration/nuxt-config) Discover all the available options in the **Nuxt configuration** documentation.

## [Global `.nuxtrc` File](https://nuxt.com/docs/4.x/directory-structure/nuxtrc\#global-nuxtrc-file)

You can also create a global `.nuxtrc` file in your home directory to apply configurations globally.

- On macOS/Linux, this file is located at:


```md
~/.nuxtrc
```

- On Windows, it is located at:


```md
C:\Users\{username}\.nuxtrc
```


This global `.nuxtrc` file allows you to define default settings that apply to all Nuxt projects on your system. However, project-level `.nuxtrc` files will override these global settings, and `nuxt.config` will take precedence over both.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/2.directory-structure/2.nuxtrc.md)

[.nuxtignore\\
\\
The .nuxtignore file lets Nuxt ignore files in your project’s root directory during the build phase.](https://nuxt.com/docs/4.x/directory-structure/nuxtignore) [nuxt.config.ts\\
\\
Nuxt can be easily configured with a single nuxt.config file.](https://nuxt.com/docs/4.x/directory-structure/nuxt-config)

On this page

On this page

- [Usage](https://nuxt.com/docs/4.x/directory-structure/nuxtrc#usage)
- [Global .nuxtrc File](https://nuxt.com/docs/4.x/directory-structure/nuxtrc#global-nuxtrc-file)

Community

- [Become a Sponsor](https://go.nuxt.com/sponsor)
- [Master Nuxt](https://masteringnuxt.com/nuxt3)
- [Nuxt Certification](https://certification.nuxt.com/)

[Nuxt on Discord](https://go.nuxt.com/discord) [Nuxt on Bluesky](https://go.nuxt.com/bluesky) [Nuxt on X](https://go.nuxt.com/x) [Nuxt on GitHub](https://go.nuxt.com/github)

Black Friday Week

Get 50% off the complete Mastering Nuxt course.

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