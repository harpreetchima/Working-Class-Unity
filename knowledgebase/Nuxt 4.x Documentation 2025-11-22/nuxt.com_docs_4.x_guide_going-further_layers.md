---
url: "https://nuxt.com/docs/4.x/guide/going-further/layers"
title: "Authoring Nuxt Layers · Nuxt Advanced v4"
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

# Authoring Nuxt Layers

Copy page

Nuxt provides a powerful system that allows you to extend the default files, configs, and much more.

Nuxt layers are a powerful feature that you can use to share and reuse partial Nuxt applications within a monorepo, or from a git repository or npm package. The layers structure is almost identical to a standard Nuxt application, which makes them easy to author and maintain.

[Docs > 4 X > Getting Started > Layers](https://nuxt.com/docs/4.x/getting-started/layers) Read more in Docs > 4 X > Getting Started > Layers.

A minimal Nuxt layer directory should contain a [`nuxt.config.ts`](https://nuxt.com/docs/4.x/directory-structure/nuxt-config) file to indicate it is a layer.

base/nuxt.config.ts

```ts
export default defineNuxtConfig({})
```

Additionally, certain other files in the layer directory will be auto-scanned and used by Nuxt for the project extending this layer.

- [`app/components/*`](https://nuxt.com/docs/4.x/directory-structure/app/components) \- Extend the default components
- [`app/composables/*`](https://nuxt.com/docs/4.x/directory-structure/app/composables) \- Extend the default composables
- [`app/layouts/*`](https://nuxt.com/docs/4.x/directory-structure/app/layouts) \- Extend the default layouts
- [`app/middleware/*`](https://nuxt.com/docs/4.x/directory-structure/app/middleware) \- Extend the default middleware
- [`app/pages/*`](https://nuxt.com/docs/4.x/directory-structure/app/pages) \- Extend the default pages
- [`app/plugins/*`](https://nuxt.com/docs/4.x/directory-structure/app/plugins) \- Extend the default plugins
- [`app/utils/*`](https://nuxt.com/docs/4.x/directory-structure/app/utils) \- Extend the default utils
- [`app/app.config.ts`](https://nuxt.com/docs/4.x/directory-structure/app/app-config) \- Extend the default app config
- [`server/*`](https://nuxt.com/docs/4.x/directory-structure/server) \- Extend the default server endpoints & middleware
- [`nuxt.config.ts`](https://nuxt.com/docs/4.x/directory-structure/nuxt-config)\- Extend the default nuxt config

## [Basic Example](https://nuxt.com/docs/4.x/guide/going-further/layers\#basic-example)

- app
  - app.vue
- base
  - app
    - components
      - BaseComponent.vue
  - nuxt.config.ts
- nuxt.config.ts

nuxt.config.ts

```ts
export default defineNuxtConfig({
  extends: [\
    './base',\
  ],
})
```

## [Layer Priority](https://nuxt.com/docs/4.x/guide/going-further/layers\#layer-priority)

When extending from multiple layers, it's important to understand the override order. Layers with **higher priority** override layers with lower priority when they define the same files or components.

The priority order from highest to lowest is:

1. **Your project files** \- always have the highest priority
2. **Auto-scanned layers** from `~~/layers` directory - sorted alphabetically (Z has higher priority than A)
3. **Layers in `extends`** config - first entry has higher priority than second

### [When to Use Each](https://nuxt.com/docs/4.x/guide/going-further/layers\#when-to-use-each)

- **`extends`** \- Use for external dependencies (npm packages, remote repositories) or layers outside your project directory
- **`~~/layers` directory** \- Use for local layers that are part of your project

If you need to control the order of auto-scanned layers, you can prefix them with numbers: `~/layers/1.z-layer`, `~/layers/2.a-layer`. This way `2.a-layer` will have higher priority than `1.z-layer`.

### [Example](https://nuxt.com/docs/4.x/guide/going-further/layers\#example)

nuxt.config.ts

```ts
export default defineNuxtConfig({
  extends: [\
    // Local layer outside the project\
    '../base',\
    // NPM package\
    '@my-themes/awesome',\
    // Remote repository\
    'github:my-themes/awesome#v1',\
  ],
})
```

If you also have `~~/layers/custom`, the priority order is:

- Your project files (highest)
- `~~/layers/custom`
- `../base`
- `@my-themes/awesome`
- `github:my-themes/awesome#v1` (lowest)

This means your project files will override any layer, and `~~/layers/custom` will override anything in `extends`.

## [Starter Template](https://nuxt.com/docs/4.x/guide/going-further/layers\#starter-template)

To get started you can initialize a layer with the [nuxt/starter/layer template](https://github.com/nuxt/starter/tree/layer). This will create a basic structure you can build upon. Execute this command within the terminal to get started:

Terminal

```bash
npm create nuxt -- --template layer nuxt-layer
```

Follow up on the README instructions for the next steps.

## [Publishing Layers](https://nuxt.com/docs/4.x/guide/going-further/layers\#publishing-layers)

You can publish and share layers by either using a remote source or an npm package.

### [Git Repository](https://nuxt.com/docs/4.x/guide/going-further/layers\#git-repository)

You can use a git repository to share your Nuxt layer. Some examples:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  extends: [\
    // GitHub Remote Source\
    'github:username/repoName',\
    // GitHub Remote Source within /base directory\
    'github:username/repoName/base',\
    // GitHub Remote Source from dev branch\
    'github:username/repoName#dev',\
    // GitHub Remote Source from v1.0.0 tag\
    'github:username/repoName#v1.0.0',\
    // GitLab Remote Source example\
    'gitlab:username/repoName',\
    // Bitbucket Remote Source example\
    'bitbucket:username/repoName',\
  ],
})
```

If you want to extend a private remote source, you need to add the environment variable `GIGET_AUTH=<token>` to provide a token.

If you want to extend a remote source from a self-hosted GitHub or GitLab instance, you need to supply its URL with the `GIGET_GITHUB_URL=<url>` or `GIGET_GITLAB_URL=<url>` environment variable - or directly configure it with [the `auth` option](https://github.com/unjs/c12#extending-config-layer-from-remote-sources) in your `nuxt.config`.

Bear in mind that if you are extending a remote source as a layer, you will not be able to access its dependencies outside of Nuxt. For example, if the remote layer depends on an eslint plugin, this will not be usable in your eslint config. That is because these dependencies will be located in a special location (`node_modules/.c12/layer_name/node_modules/`) that is not accessible to your package manager.

When using git remote sources, if a layer has npm dependencies and you wish to install them, you can do so by specifying `install: true` in your layer options.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  extends: [\
    ['github:username/repoName', { install: true }],\
  ],
})
```

### [npm Package](https://nuxt.com/docs/4.x/guide/going-further/layers\#npm-package)

You can publish Nuxt layers as an npm package that contains the files and dependencies you want to extend. This allows you to share your config with others, use it in multiple projects or use it privately.

To extend from an npm package, you need to make sure that the module is published to npm and installed in the user's project as a devDependency. Then you can use the module name to extend the current nuxt config:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  extends: [\
    // Node Module with scope\
    '@scope/moduleName',\
    // or just the module name\
    'moduleName',\
  ],
})
```

To publish a layer directory as an npm package, you want to make sure that the `package.json` has the correct properties filled out. This will make sure that the files are included when the package is published.

package.json

```json
{
  "name": "my-theme",
  "version": "1.0.0",
  "type": "module",
  "main": "./nuxt.config.ts",
  "dependencies": {},
  "devDependencies": {
    "nuxt": "^3.0.0"
  }
}
```

Make sure any dependency imported in the layer is **explicitly added** to the `dependencies`. The `nuxt` dependency, and anything only used for testing the layer before publishing, should remain in the `devDependencies` field.

Now you can proceed to publish the module to npm, either publicly or privately.

When publishing the layer as a private npm package, you need to make sure you log in, to authenticate with npm to download the node module.

## [Tips](https://nuxt.com/docs/4.x/guide/going-further/layers\#tips)

### [Named Layer Aliases](https://nuxt.com/docs/4.x/guide/going-further/layers\#named-layer-aliases)

Auto-scanned layers (from your `~~/layers` directory) automatically create aliases. For example, you can access your `~~/layers/test` layer via `#layers/test`.

If you want to create named layer aliases for other layers, you can specify a name in the configuration of the layer.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  $meta: {
    name: 'example',
  },
})
```

This will produce an alias of `#layers/example` which points to your layer.

### [Relative Paths and Aliases](https://nuxt.com/docs/4.x/guide/going-further/layers\#relative-paths-and-aliases)

When importing using global aliases (such as `~/` and `@/`) in a layer components and composables, note that these aliases are resolved relative to the user's project paths. As a workaround, you can **use relative paths** to import them, or use named layer aliases.

Also when using relative paths in `nuxt.config` file of a layer, (with exception of nested `extends`) they are resolved relative to user's project instead of the layer. As a workaround, use full resolved paths in `nuxt.config`:

nuxt.config.ts

```ts
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const currentDir = dirname(fileURLToPath(import.meta.url))

export default defineNuxtConfig({
  css: [\
    join(currentDir, './app/assets/main.css'),\
  ],
})
```

## [Multi-Layer Support for Nuxt Modules](https://nuxt.com/docs/4.x/guide/going-further/layers\#multi-layer-support-for-nuxt-modules)

You can use the [`getLayerDirectories`](https://nuxt.com/docs/4.x/api/kit/layers#getlayerdirectories) utility from Nuxt Kit to support custom multi-layer handling for your modules.

modules/my-module.ts

```ts
import { defineNuxtModule, getLayerDirectories } from 'nuxt/kit'

export default defineNuxtModule({
  setup (_options, nuxt) {
    const layerDirs = getLayerDirectories()

    for (const [index, layer] of layerDirs.entries()) {
      console.log(`Layer ${index}:`)
      console.log(`  Root: ${layer.root}`)
      console.log(`  App: ${layer.app}`)
      console.log(`  Server: ${layer.server}`)
      console.log(`  Pages: ${layer.appPages}`)
      // ... other directories
    }
  },
})
```

**Notes:**

- Earlier items in the array have higher priority and override later ones
- The user's project is the first item in the array

## [Going Deeper](https://nuxt.com/docs/4.x/guide/going-further/layers\#going-deeper)

Configuration loading and extends support is handled by [unjs/c12](https://github.com/unjs/c12), merged using [unjs/defu](https://github.com/unjs/defu) and remote git sources are supported using [unjs/giget](https://github.com/unjs/giget). Check the docs and source code to learn more.

[https://github.com/nuxt/nuxt/issues/13367](https://github.com/nuxt/nuxt/issues/13367) Checkout our ongoing development to bring more improvements for layers support on GitHub.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/3.guide/5.going-further/7.layers.md)

[NuxtApp\\
\\
In Nuxt, you can access runtime app context within composables, components and plugins.](https://nuxt.com/docs/4.x/guide/going-further/nuxt-app) [Debugging\\
\\
In Nuxt, you can get started with debugging your application directly in the browser as well as in your IDE.](https://nuxt.com/docs/4.x/guide/going-further/debugging)

On this page

On this page

- [Basic Example](https://nuxt.com/docs/4.x/guide/going-further/layers#basic-example)
- [Layer Priority](https://nuxt.com/docs/4.x/guide/going-further/layers#layer-priority)
  - [When to Use Each](https://nuxt.com/docs/4.x/guide/going-further/layers#when-to-use-each)
  - [Example](https://nuxt.com/docs/4.x/guide/going-further/layers#example)
- [Starter Template](https://nuxt.com/docs/4.x/guide/going-further/layers#starter-template)
- [Publishing Layers](https://nuxt.com/docs/4.x/guide/going-further/layers#publishing-layers)
  - [Git Repository](https://nuxt.com/docs/4.x/guide/going-further/layers#git-repository)
  - [npm Package](https://nuxt.com/docs/4.x/guide/going-further/layers#npm-package)
- [Tips](https://nuxt.com/docs/4.x/guide/going-further/layers#tips)
  - [Named Layer Aliases](https://nuxt.com/docs/4.x/guide/going-further/layers#named-layer-aliases)
  - [Relative Paths and Aliases](https://nuxt.com/docs/4.x/guide/going-further/layers#relative-paths-and-aliases)
- [Multi-Layer Support for Nuxt Modules](https://nuxt.com/docs/4.x/guide/going-further/layers#multi-layer-support-for-nuxt-modules)
- [Going Deeper](https://nuxt.com/docs/4.x/guide/going-further/layers#going-deeper)

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