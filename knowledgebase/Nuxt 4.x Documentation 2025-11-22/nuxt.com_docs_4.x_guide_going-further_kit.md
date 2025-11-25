---
url: "https://nuxt.com/docs/4.x/guide/going-further/kit"
title: "Nuxt Kit · Nuxt Advanced v4"
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

- Key Concepts


- [Rendering Modes](https://nuxt.com/docs/4.x/guide/concepts/rendering)
- [Nuxt Lifecycle](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle)
- [Auto-imports](https://nuxt.com/docs/4.x/guide/concepts/auto-imports)
- [Server Engine](https://nuxt.com/docs/4.x/guide/concepts/server-engine)
- [Modules](https://nuxt.com/docs/4.x/guide/concepts/modules)
- [TypeScript](https://nuxt.com/docs/4.x/guide/concepts/typescript)
- [Code Style](https://nuxt.com/docs/4.x/guide/concepts/code-style)

- Best Practices


- [Nuxt and hydration](https://nuxt.com/docs/4.x/guide/best-practices/hydration)
- [Nuxt Performance](https://nuxt.com/docs/4.x/guide/best-practices/performance)
- [Nuxt Plugins](https://nuxt.com/docs/4.x/guide/best-practices/plugins)

- Working with AI


- [MCP Server](https://nuxt.com/docs/4.x/guide/ai/mcp)
- [LLMs.txt](https://nuxt.com/docs/4.x/guide/ai/llms-txt)

- Recipes


- [Custom Routing](https://nuxt.com/docs/4.x/guide/recipes/custom-routing)
- [Vite Plugins](https://nuxt.com/docs/4.x/guide/recipes/vite-plugin)
- [Custom useFetch](https://nuxt.com/docs/4.x/guide/recipes/custom-usefetch)
- [Sessions and Authentication](https://nuxt.com/docs/4.x/guide/recipes/sessions-and-authentication)

- Going Further


- [Custom Events](https://nuxt.com/docs/4.x/guide/going-further/events)
- [Experimental Features](https://nuxt.com/docs/4.x/guide/going-further/experimental-features)
- [Features](https://nuxt.com/docs/4.x/guide/going-further/features)
- [Runtime Config](https://nuxt.com/docs/4.x/guide/going-further/runtime-config)
- [Nightly Release Channel](https://nuxt.com/docs/4.x/guide/going-further/nightly-release-channel)
- [Lifecycle Hooks](https://nuxt.com/docs/4.x/guide/going-further/hooks)
- [Module Author Guide](https://nuxt.com/docs/4.x/guide/going-further/modules)
- [Nuxt Kit](https://nuxt.com/docs/4.x/guide/going-further/kit)
- [NuxtApp](https://nuxt.com/docs/4.x/guide/going-further/nuxt-app)
- [Authoring Nuxt Layers](https://nuxt.com/docs/4.x/guide/going-further/layers)
- [Debugging](https://nuxt.com/docs/4.x/guide/going-further/debugging)

1. [Guide](https://nuxt.com/docs/4.x/guide)
3. [Going Further](https://nuxt.com/docs/4.x/guide/going-further)

# Nuxt Kit

Copy page

@nuxt/kit provides features for module authors.

Nuxt Kit provides composable utilities to make interacting with [Nuxt Hooks](https://nuxt.com/docs/4.x/api/advanced/hooks), the [Nuxt Interface](https://nuxt.com/docs/4.x/guide/going-further/internals#the-nuxt-interface) and developing [Nuxt Modules](https://nuxt.com/docs/4.x/guide/going-further/modules) super easy.

[Docs > 4 X > API > Kit](https://nuxt.com/docs/4.x/api/kit) Discover all Nuxt Kit utilities.

## [Usage](https://nuxt.com/docs/4.x/guide/going-further/kit\#usage)

### [Install Dependency](https://nuxt.com/docs/4.x/guide/going-further/kit\#install-dependency)

You can install the latest Nuxt Kit by adding it to the `dependencies` section of your `package.json`. However, please consider always explicitly installing the `@nuxt/kit` package even if it is already installed by Nuxt.

`@nuxt/kit` and `@nuxt/schema` are key dependencies for Nuxt. If you are installing it separately, make sure that the versions of `@nuxt/kit` and `@nuxt/schema` are equal to or greater than your `nuxt` version to avoid any unexpected behavior.

package.json

```json
{
  "dependencies": {
    "@nuxt/kit": "npm:@nuxt/kit-nightly@latest"
  }
}
```

### [Import Kit Utilities](https://nuxt.com/docs/4.x/guide/going-further/kit\#import-kit-utilities)

test.mjs

```ts
import { useNuxt } from '@nuxt/kit'
```

[Docs > 4 X > API > Kit](https://nuxt.com/docs/4.x/api/kit) Read more in Docs > 4 X > API > Kit.

Nuxt Kit utilities are only available for modules and not meant to be imported in runtime (components, Vue composables, pages, plugins, or server routes).

Nuxt Kit is an [esm-only package](https://nuxt.com/docs/4.x/guide/concepts/esm) meaning that you **cannot**`require('@nuxt/kit')`. As a workaround, use dynamic import in the CommonJS context:

test.cjs

```ts
// This does NOT work!
// const kit = require('@nuxt/kit')
async function main () {
  const kit = await import('@nuxt/kit')
}
main()
```

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/3.guide/5.going-further/4.kit.md)

[Module Author Guide\\
\\
Learn how to create a Nuxt Module to integrate, enhance or extend any Nuxt applications.](https://nuxt.com/docs/4.x/guide/going-further/modules) [NuxtApp\\
\\
In Nuxt, you can access runtime app context within composables, components and plugins.](https://nuxt.com/docs/4.x/guide/going-further/nuxt-app)

On this page

On this page

- [Usage](https://nuxt.com/docs/4.x/guide/going-further/kit#usage)
  - [Install Dependency](https://nuxt.com/docs/4.x/guide/going-further/kit#install-dependency)
  - [Import Kit Utilities](https://nuxt.com/docs/4.x/guide/going-further/kit#import-kit-utilities)

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