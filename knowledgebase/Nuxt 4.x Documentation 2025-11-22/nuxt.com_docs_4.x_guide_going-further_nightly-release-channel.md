---
url: "https://nuxt.com/docs/4.x/guide/going-further/nightly-release-channel"
title: "Nightly Release Channel · Nuxt Advanced v4"
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

# Nightly Release Channel

Copy page

The nightly release channel allows using Nuxt built directly from the latest commits to the repository.

Nuxt lands commits, improvements, and bug fixes every day. You can opt in to test them earlier before the next release.

After a commit is merged into the `main` branch of [nuxt/nuxt](https://github.com/nuxt/nuxt) and **passes all tests**, we trigger an automated npm release, using GitHub Actions.

You can use these 'nightly' releases to beta test new features and changes.

The build and publishing method and quality of these 'nightly' releases are the same as stable ones. The only difference is that you should often check the GitHub repository for updates. There is a slight chance of regressions not being caught during the review process and by the automated tests. Therefore, we internally use this channel to double-check everything before each release.

Features that are only available on the nightly release channel are marked with an alert in the documentation.

The `latest` nightly release channel is currently tracking the Nuxt v4 branch, meaning that it is particularly likely to have breaking changes right now — be careful! You can opt in to the 3.x branch nightly releases with `"nuxt": "npm:nuxt-nightly@3x"`.

## [Opting In](https://nuxt.com/docs/4.x/guide/going-further/nightly-release-channel\#opting-in)

Update `nuxt` dependency inside `package.json`:

package.json

```diff
{
  "devDependencies": {
--    "nuxt": "^4.0.0"
++    "nuxt": "npm:nuxt-nightly@latest"
  }
}
```

Remove lockfile (`package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`, `bun.lock` or `bun.lockb`) and reinstall dependencies.

## [Opting Out](https://nuxt.com/docs/4.x/guide/going-further/nightly-release-channel\#opting-out)

Update `nuxt` dependency inside `package.json`:

package.json

```diff
{
  "devDependencies": {
--    "nuxt": "npm:nuxt-nightly@latest"
++    "nuxt": "^4.0.0"
  }
}
```

Remove lockfile (`package-lock.json`, `yarn.lock`, `pnpm-lock.yaml`, `bun.lock` or `bun.lockb`) and reinstall dependencies.

## [Using Nightly `@nuxt/cli`](https://nuxt.com/docs/4.x/guide/going-further/nightly-release-channel\#using-nightly-nuxtcli)

To try the latest version of [nuxt/cli](https://github.com/nuxt/cli):

Terminal

```bash
npx @nuxt/cli-nightly@latest [command]
```

[Docs > 4 X > API > Commands](https://nuxt.com/docs/4.x/api/commands) Read more about the available commands.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/3.guide/5.going-further/11.nightly-release-channel.md)

[Runtime Config\\
\\
Nuxt provides a runtime config API to expose configuration and secrets within your application.](https://nuxt.com/docs/4.x/guide/going-further/runtime-config) [Lifecycle Hooks\\
\\
Nuxt provides a powerful hooking system to expand almost every aspect using hooks.](https://nuxt.com/docs/4.x/guide/going-further/hooks)

On this page

On this page

- [Opting In](https://nuxt.com/docs/4.x/guide/going-further/nightly-release-channel#opting-in)
- [Opting Out](https://nuxt.com/docs/4.x/guide/going-further/nightly-release-channel#opting-out)
- [Using Nightly @nuxt/cli](https://nuxt.com/docs/4.x/guide/going-further/nightly-release-channel#using-nightly-nuxtcli)

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