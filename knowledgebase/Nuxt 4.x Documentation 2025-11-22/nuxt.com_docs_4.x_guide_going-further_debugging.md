---
url: "https://nuxt.com/docs/4.x/guide/going-further/debugging"
title: "Debugging · Nuxt Advanced v4"
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

# Debugging

Copy page

In Nuxt, you can get started with debugging your application directly in the browser as well as in your IDE.

## [Sourcemaps](https://nuxt.com/docs/4.x/guide/going-further/debugging\#sourcemaps)

Sourcemaps are enabled for your server build by default, and for the client build in dev mode, but you can enable them more specifically in your configuration.

```ts
export default defineNuxtConfig({
  // or sourcemap: true
  sourcemap: {
    server: true,
    client: true,
  },
})
```

## [Debugging with Node Inspector](https://nuxt.com/docs/4.x/guide/going-further/debugging\#debugging-with-node-inspector)

You can use [Node inspector](https://nodejs.org/en/learn/getting-started/debugging) to debug Nuxt server-side.

```bash
nuxt dev --inspect
```

This will start Nuxt in `dev` mode with debugger active. If everything is working correctly a Node.js icon will appear on your Chrome DevTools and you can attach to the debugger.

Note that the Node.js and Chrome processes need to be run on the same platform. This doesn't work inside of Docker.

## [Debugging in Your IDE](https://nuxt.com/docs/4.x/guide/going-further/debugging\#debugging-in-your-ide)

It is possible to debug your Nuxt app in your IDE while you are developing it.

### [Example VS Code Debug Configuration](https://nuxt.com/docs/4.x/guide/going-further/debugging\#example-vs-code-debug-configuration)

You may need to update the config below with a path to your web browser. For more information, visit the [VS Code documentation about debug configuration](https://code.visualstudio.com/docs/debugtest/debugging#_launch-configurations).

```json5
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  "version": "0.2.0",
  "configurations": [\
    {\
      "type": "chrome",\
      "request": "launch",\
      "name": "client: chrome",\
      "url": "http://localhost:3000",\
      // this should point to your Nuxt `srcDir`, which is `app` by default\
      "webRoot": "${workspaceFolder}/app"\
    },\
    {\
      "type": "node",\
      "request": "launch",\
      "name": "server: nuxt",\
      "outputCapture": "std",\
      "program": "${workspaceFolder}/node_modules/nuxt/bin/nuxt.mjs",\
      "args": [\
        "dev"\
      ],\
    }\
  ],
  "compounds": [\
    {\
      "name": "fullstack: nuxt",\
      "configurations": [\
        "server: nuxt",\
        "client: chrome"\
      ]\
    }\
  ]
}
```

If you prefer your usual browser extensions, add this to the _chrome_ configuration above:

```json5
"userDataDir": false,
```

### [Example JetBrains IDEs Debug Configuration](https://nuxt.com/docs/4.x/guide/going-further/debugging\#example-jetbrains-ides-debug-configuration)

You can also debug your Nuxt app in JetBrains IDEs such as IntelliJ IDEA, WebStorm, or PhpStorm.

1. Create a new file in your project root directory and name it `nuxt.run.xml`.
2. Open the `nuxt.run.xml` file and paste the following debug configuration:

```html
<component name="ProjectRunConfigurationManager">
  <configuration default="false" name="client: chrome" type="JavascriptDebugType" uri="http://localhost:3000" useFirstLineBreakpoints="true">
    <method v="2" />
  </configuration>

  <configuration default="false" name="server: nuxt" type="NodeJSConfigurationType" application-parameters="dev" path-to-js-file="$PROJECT_DIR$/node_modules/nuxt/bin/nuxt.mjs" working-dir="$PROJECT_DIR$">
    <method v="2" />
  </configuration>

  <configuration default="false" name="fullstack: nuxt" type="CompoundRunConfigurationType">
    <toRun name="client: chrome" type="JavascriptDebugType" />
    <toRun name="server: nuxt" type="NodeJSConfigurationType" />
    <method v="2" />
  </configuration>
</component>
```

### [Other IDEs](https://nuxt.com/docs/4.x/guide/going-further/debugging\#other-ides)

If you have another IDE and would like to contribute sample configuration, feel free to [open a PR](https://github.com/nuxt/nuxt/edit/main/docs/2.guide/3.going-further/9.debugging.md)!

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/3.guide/5.going-further/9.debugging.md)

[Authoring Nuxt Layers\\
\\
Nuxt provides a powerful system that allows you to extend the default files, configs, and much more.](https://nuxt.com/docs/4.x/guide/going-further/layers) [<ClientOnly>\\
\\
Render components only in client-side with the <ClientOnly> component.](https://nuxt.com/docs/4.x/api/components/client-only)

On this page

On this page

- [Sourcemaps](https://nuxt.com/docs/4.x/guide/going-further/debugging#sourcemaps)
- [Debugging with Node Inspector](https://nuxt.com/docs/4.x/guide/going-further/debugging#debugging-with-node-inspector)
- [Debugging in Your IDE](https://nuxt.com/docs/4.x/guide/going-further/debugging#debugging-in-your-ide)
  - [Example VS Code Debug Configuration](https://nuxt.com/docs/4.x/guide/going-further/debugging#example-vs-code-debug-configuration)
  - [Example JetBrains IDEs Debug Configuration](https://nuxt.com/docs/4.x/guide/going-further/debugging#example-jetbrains-ides-debug-configuration)
  - [Other IDEs](https://nuxt.com/docs/4.x/guide/going-further/debugging#other-ides)

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