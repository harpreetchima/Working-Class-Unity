---
url: "https://nuxt.com/docs/4.x/guide/concepts/typescript"
title: "TypeScript · Nuxt Concepts v4"
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
3. [Key Concepts](https://nuxt.com/docs/4.x/guide/concepts)

# TypeScript

Copy page

Nuxt is fully typed and provides helpful shortcuts to ensure you have access to accurate type information when you are coding.

## [Type-checking](https://nuxt.com/docs/4.x/guide/concepts/typescript\#type-checking)

By default, Nuxt doesn't check types when you run [`nuxt dev`](https://nuxt.com/docs/4.x/api/commands/dev) or [`nuxt build`](https://nuxt.com/docs/4.x/api/commands/build), for performance reasons.

To enable type-checking at build or development time, install `vue-tsc` and `typescript` as development dependency:

npmyarnpnpmbun

```bash
npm install --save-dev vue-tsc typescript
```

```bash
yarn add --dev vue-tsc typescript
```

```bash
pnpm add -D vue-tsc typescript
```

```bash
bun add -D vue-tsc typescript
```

Then, run [`nuxt typecheck`](https://nuxt.com/docs/4.x/api/commands/typecheck) command to check your types:

Terminal

```bash
npx nuxt typecheck
```

To enable type-checking at build or development time, you can also use the [`typescript.typeCheck`](https://nuxt.com/docs/4.x/api/nuxt-config#typecheck) option in your `nuxt.config` file:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  typescript: {
    typeCheck: true,
  },
})
```

## [Auto-generated Types](https://nuxt.com/docs/4.x/guide/concepts/typescript\#auto-generated-types)

Nuxt projects rely on auto-generated types to work properly. These types are stored in the [`.nuxt`](https://nuxt.com/docs/4.x/directory-structure/nuxt) directory and are generated when you run the dev server or build your application. You can also generate these files manually by running `nuxt prepare`.

The generated `tsconfig.json` files inside the [`.nuxt`](https://nuxt.com/docs/4.x/directory-structure/nuxt) directory include **recommended basic TypeScript configuration** for your project, references to [auto-imports](https://nuxt.com/docs/4.x/guide/concepts/auto-imports), [API route types](https://nuxt.com/docs/4.x/guide/concepts/server-engine#typed-api-routes), path aliases like `#imports`, `~/file`, or `#build/file`, and more.

Nuxt relies on this configuration, and [Nuxt Modules](https://nuxt.com/docs/4.x/guide/going-further/modules) can extend it as well. For this reason, it is not recommended to modify your `tsconfig.json` file directly, as doing so could overwrite important settings. Instead, extend it via `nuxt.config.ts`. [Learn more about extending the configuration here](https://nuxt.com/docs/4.x/directory-structure/tsconfig).

Watch a video from Daniel Roe explaining built-in Nuxt aliases.

## [Project References](https://nuxt.com/docs/4.x/guide/concepts/typescript\#project-references)

Nuxt uses [TypeScript project references](https://www.typescriptlang.org/docs/handbook/project-references.html) to improve type-checking performance and provide better IDE support. This feature allows TypeScript to break up your codebase into smaller, more manageable pieces.

### [How Nuxt Uses Project References](https://nuxt.com/docs/4.x/guide/concepts/typescript\#how-nuxt-uses-project-references)

When you run `nuxt dev`, `nuxt build` or `nuxt prepare`, Nuxt will generate multiple `tsconfig.json` files for different parts of your application.

- **`.nuxt/tsconfig.app.json`** \- Configuration for your application code within the `app/` directory
- **`.nuxt/tsconfig.node.json`** \- Configuration for your `nuxt.config.ts` and files outside the other contexts
- **`.nuxt/tsconfig.server.json`** \- Configuration for server-side code (when applicable)
- **`.nuxt/tsconfig.shared.json`** \- For code shared between app and server contexts (like types and non-environment specific utilities)

Each of these files is configured to reference the appropriate dependencies and provide optimal type-checking for their specific context.

For backward compatibility, Nuxt still generates `.nuxt/tsconfig.json`. However, we recommend using [TypeScript project references](https://nuxt.com/docs/4.x/directory-structure/tsconfig) with the new configuration files (`.nuxt/tsconfig.app.json`, `.nuxt/tsconfig.server.json`, etc.) for better type safety and performance. This legacy file will be removed in a future version of Nuxt.

### [Benefits of Project References](https://nuxt.com/docs/4.x/guide/concepts/typescript\#benefits-of-project-references)

- **Faster builds**: TypeScript can skip rebuilding unchanged projects
- **Better IDE performance**: Your IDE can provide faster IntelliSense and error checking
- **Isolated compilation**: Errors in one part of your application don't prevent compilation of other parts
- **Clearer dependency management**: Each project explicitly declares its dependencies

### [Augmenting Types with Project References](https://nuxt.com/docs/4.x/guide/concepts/typescript\#augmenting-types-with-project-references)

Since the project is divided into **multiple type contexts**, it's important to **augment types within the correct context** to ensure they're properly recognized. TypeScript will not recognize augmentations placed outside these directories unless they are explicitly included in the appropriate context.

For example, if you want to augment types for the `app` context, the augmentation file should be placed in the `app/` directory.

Similarly:

- For the `server` context, place the augmentation file in the `server/` directory.
- For types that are **shared between the app and server**, place the file in the `shared/` directory.

[Docs > 4 X > Guide > Going Further > Modules#extending Tsconfigjson](https://nuxt.com/docs/4.x/guide/going-further/modules#extending-tsconfigjson) Read more about augmenting specific type contexts from **files outside those contexts** in the Module Author Guide.

## [Strict Checks](https://nuxt.com/docs/4.x/guide/concepts/typescript\#strict-checks)

TypeScript comes with certain checks to give you more safety and analysis of your program.

[Strict checks](https://www.typescriptlang.org/docs/handbook/migrating-from-javascript.html#getting-stricter-checks) are enabled by default in Nuxt when the [`typescript.typeCheck`](https://nuxt.com/docs/4.x/guide/concepts/typescript#type-checking) option is enabled to give you greater type safety.

If you are currently converting your codebase to TypeScript, you may want to temporarily disable strict checks by setting `strict` to `false` in your `nuxt.config`:

nuxt.config.ts

```ts
export default defineNuxtConfig({
  typescript: {
    strict: false,
  },
})
```

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/3.guide/1.concepts/8.typescript.md)

[Modules\\
\\
Nuxt provides a module system to extend the framework core and simplify integrations.](https://nuxt.com/docs/4.x/guide/concepts/modules) [Code Style\\
\\
Nuxt supports ESLint out of the box](https://nuxt.com/docs/4.x/guide/concepts/code-style)

On this page

On this page

- [Type-checking](https://nuxt.com/docs/4.x/guide/concepts/typescript#type-checking)
- [Auto-generated Types](https://nuxt.com/docs/4.x/guide/concepts/typescript#auto-generated-types)
- [Project References](https://nuxt.com/docs/4.x/guide/concepts/typescript#project-references)
  - [How Nuxt Uses Project References](https://nuxt.com/docs/4.x/guide/concepts/typescript#how-nuxt-uses-project-references)
  - [Benefits of Project References](https://nuxt.com/docs/4.x/guide/concepts/typescript#benefits-of-project-references)
  - [Augmenting Types with Project References](https://nuxt.com/docs/4.x/guide/concepts/typescript#augmenting-types-with-project-references)
- [Strict Checks](https://nuxt.com/docs/4.x/guide/concepts/typescript#strict-checks)

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