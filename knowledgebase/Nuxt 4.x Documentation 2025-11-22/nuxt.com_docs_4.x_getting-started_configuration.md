---
url: "https://nuxt.com/docs/4.x/getting-started/configuration"
title: "Configuration · Get Started with Nuxt v4"
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

- [Introduction](https://nuxt.com/docs/4.x/getting-started/introduction)
- [Installation](https://nuxt.com/docs/4.x/getting-started/installation)
- [Configuration](https://nuxt.com/docs/4.x/getting-started/configuration)
- [Views](https://nuxt.com/docs/4.x/getting-started/views)
- [Assets](https://nuxt.com/docs/4.x/getting-started/assets)
- [Styling](https://nuxt.com/docs/4.x/getting-started/styling)
- [Routing](https://nuxt.com/docs/4.x/getting-started/routing)
- [SEO and Meta](https://nuxt.com/docs/4.x/getting-started/seo-meta)
- [Transitions](https://nuxt.com/docs/4.x/getting-started/transitions)
- [Data Fetching](https://nuxt.com/docs/4.x/getting-started/data-fetching)
- [State Management](https://nuxt.com/docs/4.x/getting-started/state-management)
- [Error Handling](https://nuxt.com/docs/4.x/getting-started/error-handling)
- [Server](https://nuxt.com/docs/4.x/getting-started/server)
- [Layers](https://nuxt.com/docs/4.x/getting-started/layers)
- [Prerendering](https://nuxt.com/docs/4.x/getting-started/prerendering)
- [Deployment](https://nuxt.com/docs/4.x/getting-started/deployment)
- [Testing](https://nuxt.com/docs/4.x/getting-started/testing)
- [Upgrade Guide](https://nuxt.com/docs/4.x/getting-started/upgrade)

1. [Get Started](https://nuxt.com/docs/4.x/getting-started)

# Configuration

Copy page

Nuxt is configured with sensible defaults to make you productive.

By default, Nuxt is configured to cover most use cases. The [`nuxt.config.ts`](https://nuxt.com/docs/4.x/directory-structure/nuxt-config) file can override or extend this default configuration.

## [Nuxt Configuration](https://nuxt.com/docs/4.x/getting-started/configuration\#nuxt-configuration)

The [`nuxt.config.ts`](https://nuxt.com/docs/4.x/directory-structure/nuxt-config) file is located at the root of a Nuxt project and can override or extend the application's behavior.

A minimal configuration file exports the `defineNuxtConfig` function containing an object with your configuration. The `defineNuxtConfig` helper is globally available without import.

nuxt.config.ts

```ts
export default defineNuxtConfig({
  // My Nuxt config
})
```

This file will often be mentioned in the documentation, for example to add custom scripts, register modules or change rendering modes.

[Docs > 4 X > API > Configuration > Nuxt Config](https://nuxt.com/docs/4.x/api/configuration/nuxt-config) Every option is described in the **Configuration Reference**.

You don't have to use TypeScript to build an application with Nuxt. However, it is strongly recommended to use the `.ts` extension for the `nuxt.config` file. This way you can benefit from hints in your IDE to avoid typos and mistakes while editing your configuration.

### [Environment Overrides](https://nuxt.com/docs/4.x/getting-started/configuration\#environment-overrides)

You can configure fully typed, per-environment overrides in your nuxt.config

nuxt.config.ts

```ts
export default defineNuxtConfig({
  $production: {
    routeRules: {
      '/**': { isr: true },
    },
  },
  $development: {
    //
  },
  $env: {
    staging: {
      //
    },
  },
})
```

To select an environment when running a Nuxt CLI command, simply pass the name to the `--envName` flag, like so: `nuxt build --envName staging`.

To learn more about the mechanism behind these overrides, please refer to the `c12` documentation on [environment-specific configuration](https://github.com/unjs/c12?tab=readme-ov-file#environment-specific-configuration).

Watch a video from Alexander Lichter about the env-aware nuxt.config.ts

If you're authoring layers, you can also use the `$meta` key to provide metadata that you or the consumers of your layer might use.

### [Environment Variables and Private Tokens](https://nuxt.com/docs/4.x/getting-started/configuration\#environment-variables-and-private-tokens)

The `runtimeConfig` API exposes values like environment variables to the rest of your application. By default, these keys are only available server-side. The keys within `runtimeConfig.public` and `runtimeConfig.app` (which is used by Nuxt internally) are also available client-side.

Those values should be defined in `nuxt.config` and can be overridden using environment variables.

nuxt.config.ts.env

```ts
export default defineNuxtConfig({
  runtimeConfig: {
    // The private keys which are only available server-side
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api',
    },
  },
})
```

```ini
# This will override the value of apiSecret
NUXT_API_SECRET=api_secret_token
```

These variables are exposed to the rest of your application using the [`useRuntimeConfig()`](https://nuxt.com/docs/4.x/api/composables/use-runtime-config) composable.

app/pages/index.vue

```vue
<script setup lang="ts">
const runtimeConfig = useRuntimeConfig()
</script>
```

[Docs > 4 X > Guide > Going Further > Runtime Config](https://nuxt.com/docs/4.x/guide/going-further/runtime-config) Read more in Docs > 4 X > Guide > Going Further > Runtime Config.

## [App Configuration](https://nuxt.com/docs/4.x/getting-started/configuration\#app-configuration)

The `app.config.ts` file, located in the source directory (by default `app/`), is used to expose public variables that can be determined at build time. Contrary to the `runtimeConfig` option, these cannot be overridden using environment variables.

A minimal configuration file exports the `defineAppConfig` function containing an object with your configuration. The `defineAppConfig` helper is globally available without import.

app/app.config.ts

```ts
export default defineAppConfig({
  title: 'Hello Nuxt',
  theme: {
    dark: true,
    colors: {
      primary: '#ff0000',
    },
  },
})
```

These variables are exposed to the rest of your application using the [`useAppConfig`](https://nuxt.com/docs/4.x/api/composables/use-app-config) composable.

app/pages/index.vue

```vue
<script setup lang="ts">
const appConfig = useAppConfig()
</script>
```

[Docs > 4 X > Directory Structure > App > App Config](https://nuxt.com/docs/4.x/directory-structure/app/app-config) Read more in Docs > 4 X > Directory Structure > App > App Config.

## [`runtimeConfig` vs. `app.config`](https://nuxt.com/docs/4.x/getting-started/configuration\#runtimeconfig-vs-appconfig)

As stated above, `runtimeConfig` and `app.config` are both used to expose variables to the rest of your application. To determine whether you should use one or the other, here are some guidelines:

- `runtimeConfig`: Private or public tokens that need to be specified after build using environment variables.
- `app.config`: Public tokens that are determined at build time, website configuration such as theme variant, title and any project config that are not sensitive.

| Feature | `runtimeConfig` | `app.config` |
| --- | --- | --- |
| Client Side | Hydrated | Bundled |
| Environment Variables | ✅ Yes | ❌ No |
| Reactive | ✅ Yes | ✅ Yes |
| Types support | ✅ Partial | ✅ Yes |
| Configuration per Request | ❌ No | ✅ Yes |
| Hot Module Replacement | ❌ No | ✅ Yes |
| Non primitive JS types | ❌ No | ✅ Yes |

## [External Configuration Files](https://nuxt.com/docs/4.x/getting-started/configuration\#external-configuration-files)

Nuxt uses [`nuxt.config.ts`](https://nuxt.com/docs/4.x/directory-structure/nuxt-config) file as the single source of truth for configurations and skips reading external configuration files. During the course of building your project, you may have a need to configure those. The following table highlights common configurations and, where applicable, how they can be configured with Nuxt.

| Name | Config File | How To Configure |
| --- | --- | --- |
| [Nitro](https://nitro.build/) | ~~`nitro.config.ts`~~ | Use [`nitro`](https://nuxt.com/docs/4.x/api/nuxt-config#nitro) key in `nuxt.config` |
| [PostCSS](https://postcss.org/) | ~~`postcss.config.js`~~ | Use [`postcss`](https://nuxt.com/docs/4.x/api/nuxt-config#postcss) key in `nuxt.config` |
| [Vite](https://vite.dev/) | ~~`vite.config.ts`~~ | Use [`vite`](https://nuxt.com/docs/4.x/api/nuxt-config#vite) key in `nuxt.config` |
| [webpack](https://webpack.js.org/) | ~~`webpack.config.ts`~~ | Use [`webpack`](https://nuxt.com/docs/4.x/api/nuxt-config#webpack-1) key in `nuxt.config` |

Here is a list of other common config files:

| Name | Config File | How To Configure |
| --- | --- | --- |
| [TypeScript](https://www.typescriptlang.org/) | `tsconfig.json` | [More Info](https://nuxt.com/docs/4.x/directory-structure/tsconfig) |
| [ESLint](https://eslint.org/) | `eslint.config.js` | [More Info](https://eslint.org/docs/latest/use/configure/configuration-files) |
| [Prettier](https://prettier.io/) | `prettier.config.js` | [More Info](https://prettier.io/docs/configuration.html) |
| [Stylelint](https://stylelint.io/) | `stylelint.config.js` | [More Info](https://stylelint.io/user-guide/configure/) |
| [TailwindCSS](https://tailwindcss.com/) | `tailwind.config.js` | [More Info](https://tailwindcss.nuxtjs.org/tailwindcss/configuration/) |
| [Vitest](https://vitest.dev/) | `vitest.config.ts` | [More Info](https://vitest.dev/config/) |

## [Vue Configuration](https://nuxt.com/docs/4.x/getting-started/configuration\#vue-configuration)

### [With Vite](https://nuxt.com/docs/4.x/getting-started/configuration\#with-vite)

If you need to pass options to `@vitejs/plugin-vue` or `@vitejs/plugin-vue-jsx`, you can do this in your `nuxt.config` file.

- `vite.vue` for `@vitejs/plugin-vue`. Check [available options](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue).
- `vite.vueJsx` for `@vitejs/plugin-vue-jsx`. Check [available options](https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue-jsx).

nuxt.config.ts

```ts
export default defineNuxtConfig({
  vite: {
    vue: {
      customElement: true,
    },
    vueJsx: {
      mergeProps: true,
    },
  },
})
```

[Docs > 4 X > API > Configuration > Nuxt Config#vue](https://nuxt.com/docs/4.x/api/configuration/nuxt-config#vue) Read more in Docs > 4 X > API > Configuration > Nuxt Config#vue.

### [With webpack](https://nuxt.com/docs/4.x/getting-started/configuration\#with-webpack)

If you use webpack and need to configure `vue-loader`, you can do this using `webpack.loaders.vue` key inside your `nuxt.config` file. The available options are [defined here](https://github.com/vuejs/vue-loader/blob/main/src/index.ts#L32-L62).

nuxt.config.ts

```ts
export default defineNuxtConfig({
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      },
    },
  },
})
```

[Docs > 4 X > API > Configuration > Nuxt Config#loaders](https://nuxt.com/docs/4.x/api/configuration/nuxt-config#loaders) Read more in Docs > 4 X > API > Configuration > Nuxt Config#loaders.

### [Enabling Experimental Vue Features](https://nuxt.com/docs/4.x/getting-started/configuration\#enabling-experimental-vue-features)

You may need to enable experimental features in Vue, such as `propsDestructure`. Nuxt provides an easy way to do that in `nuxt.config.ts`, no matter which builder you are using:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  vue: {
    propsDestructure: true,
  },
})
```

#### [experimental `reactivityTransform` migration from Vue 3.4 and Nuxt 3.9](https://nuxt.com/docs/4.x/getting-started/configuration\#experimental-reactivitytransform-migration-from-vue-34-and-nuxt-39)

Since Nuxt 3.9 and Vue 3.4, `reactivityTransform` has been moved from Vue to Vue Macros which has a [Nuxt integration](https://vue-macros.dev/guide/nuxt-integration.html).

[Docs > 4 X > API > Configuration > Nuxt Config#vue 1](https://nuxt.com/docs/4.x/api/configuration/nuxt-config#vue-1) Read more in Docs > 4 X > API > Configuration > Nuxt Config#vue 1.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/1.getting-started/03.configuration.md)

[Installation\\
\\
Get started with Nuxt quickly with our online starters or start locally with your terminal.](https://nuxt.com/docs/4.x/getting-started/installation) [Views\\
\\
Nuxt provides several component layers to implement the user interface of your application.](https://nuxt.com/docs/4.x/getting-started/views)

On this page

On this page

- [Nuxt Configuration](https://nuxt.com/docs/4.x/getting-started/configuration#nuxt-configuration)
  - [Environment Overrides](https://nuxt.com/docs/4.x/getting-started/configuration#environment-overrides)
  - [Environment Variables and Private Tokens](https://nuxt.com/docs/4.x/getting-started/configuration#environment-variables-and-private-tokens)
- [App Configuration](https://nuxt.com/docs/4.x/getting-started/configuration#app-configuration)
- [runtimeConfig vs. app.config](https://nuxt.com/docs/4.x/getting-started/configuration#runtimeconfig-vs-appconfig)
- [External Configuration Files](https://nuxt.com/docs/4.x/getting-started/configuration#external-configuration-files)
- [Vue Configuration](https://nuxt.com/docs/4.x/getting-started/configuration#vue-configuration)
  - [With Vite](https://nuxt.com/docs/4.x/getting-started/configuration#with-vite)
  - [With webpack](https://nuxt.com/docs/4.x/getting-started/configuration#with-webpack)
  - [Enabling Experimental Vue Features](https://nuxt.com/docs/4.x/getting-started/configuration#enabling-experimental-vue-features)

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