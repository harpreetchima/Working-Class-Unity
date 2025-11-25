---
url: "https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle"
title: "Nuxt Lifecycle · Nuxt Concepts v4"
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

# Nuxt Lifecycle

Copy page

Understanding the lifecycle of Nuxt applications can help you gain deeper insights into how the framework operates, especially for both server-side and client-side rendering.

The goal of this chapter is to provide a high-level overview of the different parts of the framework, their execution order, and how they work together.

## [Server lifecycle](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle\#server-lifecycle)

On the server, the following steps are executed for every initial request to your application:

### [Server plugins once](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle\#server-plugins-once)

Nuxt is powered by [Nitro](https://nitro.build/), a modern server engine.

When Nitro starts, it initializes and executes the plugins under the [`/server/plugins`](https://nuxt.com/docs/4.x/directory-structure/server#server-plugins) directory. These plugins can:

- Capture and handle application-wide errors.
- Register hooks that execute when Nitro shuts down.
- Register hooks for request lifecycle events, such as modifying responses.

Nitro plugins are executed only once when the server starts. In a serverless environment, the server boots on each incoming request, and so do the Nitro plugins. However, they are not awaited.

[Docs > 4 X > Directory Structure > Server#server Plugins](https://nuxt.com/docs/4.x/directory-structure/server#server-plugins) Read more in Docs > 4 X > Directory Structure > Server#server Plugins.

### [Server middleware](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle\#server-middleware)

After initializing the Nitro server, middleware under `server/middleware/` is executed for every request. Middleware can be used for tasks such as authentication, logging, or request transformation.

Returning a value from middleware will terminate the request and send the returned value as the response. This behavior should generally be avoided to ensure proper request handling!

[Docs > 4 X > Directory Structure > Server#server Middleware](https://nuxt.com/docs/4.x/directory-structure/server#server-middleware) Read more in Docs > 4 X > Directory Structure > Server#server Middleware.

### [App plugins](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle\#app-plugins)

The Vue and Nuxt instances are created first. Afterward, Nuxt executes its app plugins. This includes:

- Built-in plugins, such as Vue Router and `unhead`.
- Custom plugins located in the `app/plugins/` directory, including those without a suffix (e.g., `myPlugin.ts`) and those with the `.server` suffix (e.g., `myServerPlugin.server.ts`).

Plugins execute in a specific order and may have dependencies on one another. For more details, including execution order and parallelism, refer to the [Plugins documentation](https://nuxt.com/docs/4.x/directory-structure/app/plugins).

After this step, Nuxt calls the [`app:created`](https://nuxt.com/docs/4.x/api/advanced/hooks#app-hooks-runtime) hook, which can be used to execute additional logic.

[Docs > 4 X > Directory Structure > App > Plugins](https://nuxt.com/docs/4.x/directory-structure/app/plugins) Read more in Docs > 4 X > Directory Structure > App > Plugins.

### [Route validation](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle\#route-validation)

After initializing plugins and before executing middleware, Nuxt calls the `validate` method if it is defined in the `definePageMeta` function. The `validate` method, which can be synchronous or asynchronous, is often used to validate dynamic route parameters.

- The `validate` function should return `true` if the parameters are valid.
- If validation fails, it should return `false` or an object containing a `statusCode` and/or `statusMessage` to terminate the request.

For more information, see the [Route Validation documentation](https://nuxt.com/docs/4.x/getting-started/routing#route-validation).

[Docs > 4 X > Getting Started > Routing#route Validation](https://nuxt.com/docs/4.x/getting-started/routing#route-validation) Read more in Docs > 4 X > Getting Started > Routing#route Validation.

### [App middleware](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle\#app-middleware)

Middleware allows you to run code before navigating to a particular route. It is often used for tasks such as authentication, redirection, or logging.

In Nuxt, there are three types of middleware:

- **Global route middleware**
- **Named route middleware**
- **Anonymous (or inline) route middleware**

Nuxt executes all global middleware on the initial page load (both on server and client) and then again before any client-side navigation. Named and anonymous middleware are executed only on the routes specified in the middleware property of the page(route) meta defined in the corresponding page components.

For details about each type and examples, see the [Middleware documentation](https://nuxt.com/docs/4.x/directory-structure/app/middleware).

Any redirection on the server will result in a `Location:` header being sent to the browser; the browser then makes a fresh request to this new location. All application state will be reset when this happens, unless persisted in a cookie.

[Docs > 4 X > Directory Structure > App > Middleware](https://nuxt.com/docs/4.x/directory-structure/app/middleware) Read more in Docs > 4 X > Directory Structure > App > Middleware.

### [Page and components](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle\#page-and-components)

Nuxt renders the page and its components and fetches any required data with `useFetch` and `useAsyncData` during this step. Since there are no dynamic updates and no DOM operations occur on the server, Vue lifecycle hooks such as `onBeforeMount`, `onMounted`, and subsequent hooks are **NOT** executed during SSR.

By default, Vue pauses dependency tracking during SSR for better performance.

There is no reactivity on the server side because Vue SSR renders the app top-down as static HTML, making it impossible to go back and modify content that has already been rendered.

You should avoid code that produces side effects that need cleanup in root scope of `<script setup>`. An example of such side effects is setting up timers with `setInterval`. In client-side only code we may setup a timer and then tear it down in `onBeforeUnmount` or `onUnmounted`. However, because the unmount hooks will never be called during SSR, the timers will stay around forever. To avoid this, move your side-effect code into `onMounted` instead.

Watch a video from Daniel Roe explaining Server Rendering and Global State.

### [HTML Output](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle\#html-output)

After all required data is fetched and the components are rendered, Nuxt combines the rendered components with settings from `unhead` to generate a complete HTML document. This HTML, along with the associated data, is then sent back to the client to complete the SSR process.

After rendering the Vue application to HTML, Nuxt calls the [`app:rendered`](https://nuxt.com/docs/4.x/api/advanced/hooks#app-hooks-runtime) hook.

Before finalizing and sending the HTML, Nitro will call the [`render:html`](https://nuxt.com/docs/4.x/api/advanced/hooks#nitro-app-hooks-runtime-server-side) hook. This hook allows you to manipulate the generated HTML, such as injecting additional scripts or modifying meta tags.

## [Client lifecycle](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle\#client-lifecycle)

This part of the lifecycle is fully executed in the browser, no matter which Nuxt mode you've chosen.

### [App plugins](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle\#app-plugins-1)

This step is similar to the server-side execution and includes both built-in and custom plugins.

Custom plugins in the `app/plugins/` directory, such as those without a suffix (e.g., `myPlugin.ts`) and with the `.client` suffix (e.g., `myClientPlugin.client.ts`), are executed on the client side.

After this step, Nuxt calls the [`app:created`](https://nuxt.com/docs/4.x/api/advanced/hooks#app-hooks-runtime) hook, which can be used to execute additional logic.

[Docs > 4 X > Directory Structure > App > Plugins](https://nuxt.com/docs/4.x/directory-structure/app/plugins) Read more in Docs > 4 X > Directory Structure > App > Plugins.

### [Route validation](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle\#route-validation-1)

This step is the same as the server-side execution and includes the `validate` method if defined in the `definePageMeta` function.

### [App middleware](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle\#app-middleware-1)

Nuxt middleware runs on both the server and the client. If you want certain code to run in specific environments, consider splitting it by using `import.meta.client` for the client and `import.meta.server` for the server.

[Docs > 4 X > Directory Structure > App > Middleware#when Middleware Runs](https://nuxt.com/docs/4.x/directory-structure/app/middleware#when-middleware-runs) Read more in Docs > 4 X > Directory Structure > App > Middleware#when Middleware Runs.

### [Mount Vue app and hydrate](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle\#mount-vue-app-and-hydrate)

Calling `app.mount('#__nuxt')` mounts the Vue application to the DOM. If the application uses SSR or SSG mode, Vue performs a hydration step to make the client-side application interactive. During hydration, Vue recreates the application (excluding [Server Components](https://nuxt.com/docs/4.x/directory-structure/app/components#server-components)), matches each component to its corresponding DOM nodes, and attaches DOM event listeners.

To ensure proper hydration, it's important to maintain consistency between the data on the server and the client. For API requests, it is recommended to use `useAsyncData`, `useFetch`, or other SSR-friendly composables. These methods ensure that the data fetched on the server side is reused during hydration, avoiding repeated requests. Any new requests should only be triggered after hydration, preventing hydration errors.

Before mounting the Vue application, Nuxt calls the [`app:beforeMount`](https://nuxt.com/docs/4.x/api/advanced/hooks#app-hooks-runtime) hook.

After mounting the Vue application, Nuxt calls the [`app:mounted`](https://nuxt.com/docs/4.x/api/advanced/hooks#app-hooks-runtime) hook.

### [Vue lifecycle](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle\#vue-lifecycle)

Unlike on the server, the browser executes the full [Vue lifecycle](https://vuejs.org/guide/essentials/lifecycle).

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/3.guide/1.concepts/2.nuxt-lifecycle.md)

[Rendering Modes\\
\\
Learn about the different rendering modes available in Nuxt.](https://nuxt.com/docs/4.x/guide/concepts/rendering) [Auto-imports\\
\\
Nuxt auto-imports components, composables, helper functions and Vue APIs.](https://nuxt.com/docs/4.x/guide/concepts/auto-imports)

On this page

On this page

- [Server lifecycle](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle#server-lifecycle)
  - [Server plugins once](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle#server-plugins-once)
  - [Server middleware](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle#server-middleware)
  - [App plugins](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle#app-plugins)
  - [Route validation](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle#route-validation)
  - [App middleware](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle#app-middleware)
  - [Page and components](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle#page-and-components)
  - [HTML Output](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle#html-output)
- [Client lifecycle](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle#client-lifecycle)
  - [App plugins](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle#app-plugins-1)
  - [Route validation](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle#route-validation-1)
  - [App middleware](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle#app-middleware-1)
  - [Mount Vue app and hydrate](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle#mount-vue-app-and-hydrate)
  - [Vue lifecycle](https://nuxt.com/docs/4.x/guide/concepts/nuxt-lifecycle#vue-lifecycle)

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