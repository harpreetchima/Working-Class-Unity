---
url: "https://nuxt.com/docs/4.x/examples/routing/middleware"
title: "Middleware · Nuxt Examples v4"
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

- [Hello World](https://nuxt.com/docs/4.x/examples/hello-world)
- Features


- [Auto Imports](https://nuxt.com/docs/4.x/examples/features/auto-imports)
- [Data Fetching](https://nuxt.com/docs/4.x/examples/features/data-fetching)
- [State Management](https://nuxt.com/docs/4.x/examples/features/state-management)
- [Meta Tags](https://nuxt.com/docs/4.x/examples/features/meta-tags)
- [Layouts](https://nuxt.com/docs/4.x/examples/features/layouts)

- Routing


- [Middleware](https://nuxt.com/docs/4.x/examples/routing/middleware)
- [Pages](https://nuxt.com/docs/4.x/examples/routing/pages)
- [Universal Router](https://nuxt.com/docs/4.x/examples/routing/universal-router)

- Advanced


- [Layers](https://nuxt.com/docs/4.x/examples/advanced/config-extends)
- [Error Handling](https://nuxt.com/docs/4.x/examples/advanced/error-handling)
- [JSX / TSX](https://nuxt.com/docs/4.x/examples/advanced/jsx)
- [Locale](https://nuxt.com/docs/4.x/examples/advanced/locale)
- [Module Extend Pages](https://nuxt.com/docs/4.x/examples/advanced/module-extend-pages)
- [Teleport](https://nuxt.com/docs/4.x/examples/advanced/teleport)
- [Testing](https://nuxt.com/docs/4.x/examples/advanced/testing)
- [useCookie](https://nuxt.com/docs/4.x/examples/advanced/use-cookie)
- [Use Custom Fetch Composable](https://nuxt.com/docs/4.x/examples/advanced/use-custom-fetch-composable)

- Experimental


- [WASM](https://nuxt.com/docs/4.x/examples/experimental/wasm)

1. [Examples](https://nuxt.com/docs/4.x/examples)
3. [Routing](https://nuxt.com/docs/4.x/examples/routing)

# Middleware

Copy page

This example shows how to add route middleware with the middleware/ directory or with a plugin, and how to use them globally or per page.

[Docs > Guide > Directory Structure > Middleware](https://nuxt.com/docs/guide/directory-structure/middleware) Read more in Docs > Guide > Directory Structure > Middleware.

Examples Middleware Example - StackBlitz

Project

Search

Ports in use

Settings

## Project

Download Project

#### Info

### Examples Middleware Example

Run official live example code for Examples Middleware, created by Nuxt on StackBlitz

0 views0 forks

#### Files

middleware

New File

New Folder

Rename

Delete

pages

New File

New Folder

Rename

Delete

plugins

New File

New Folder

Rename

Delete

app.vue

Rename

Delete

nuxt.config.ts

Rename

Delete

package-lock.json

Rename

Delete

package.json

Rename

Delete

tsconfig.json

Rename

Delete

app.vue

More Actions…

Close all

Close saved

1

2

3

4

5

6

7

8

9

10

11

12

13

14

15

16

17

18

19

20

<scriptsetuplang="ts">

constnav=\[\
\
{label:'Home',to:'/'},\
\
{label:'Forbidden',to:'/\
\
forbidden'},\
\
{label:'Redirect',to:'/\
\
redirect'},\
\
\]

constroute=useRoute()

</script>

<template>

<NuxtExample

dir="routing/middleware"

:nav="nav"

>

<NuxtPage />

<template #footer>

<divclass="text-center

p-4 op-50">

        Current route: <UKbd>{

{ route.path }}</UKbd>

</div>

Enter to Rename, Shift+Enter to Preview

Terminal

Terminal\_1

#### Terminal\_1

Fork on

EditorPreviewBoth

## Create a new project

- Popular
- Frontend
- Backend
- Fullstack
- Docs, Blogs & Slides
- Creative
- Mobile & VR
- Vanilla
- Native Languages

[Astro Basics\\
\\
Node.js](https://stackblitz.com/fork/github/withastro/astro/tree/latest/examples/basics?file=README.md&title=Astro%20Starter%20Kit:%20Basics) [Next.js\\
\\
Node.js](https://stackblitz.com/fork/github/stackblitz/starters/tree/main/nextjs?title=Next.js%20Starter&description=The%20React%20framework%20for%20production) [Nuxt\\
\\
Node.js](https://stackblitz.com/fork/github/nuxt/starter/tree/v3-stackblitz) [React\\
\\
TypeScript](https://stackblitz.com/fork/github/vitejs/vite/tree/main/packages/create-vite/template-react-ts?file=index.html&terminal=dev) [Vanilla\\
\\
JavaScript](https://stackblitz.com/fork/github/vitejs/vite/tree/main/packages/create-vite/template-vanilla?file=index.html&terminal=dev) [Vanilla\\
\\
TypeScript](https://stackblitz.com/fork/github/vitejs/vite/tree/main/packages/create-vite/template-vanilla-ts?file=index.html&terminal=dev) [Static\\
\\
HTML/JS/CSS](https://stackblitz.com/fork/github/stackblitz/starters/tree/main/static?title=Static%20Starter&description=HTML/CSS/JS%20Starter&file=script.js,styles.css,index.html&terminalHeight=10) [Node.js\\
\\
Blank project](https://stackblitz.com/fork/github/stackblitz/starters/tree/main/node?title=node.new%20Starter&description=Starter%20project%20for%20Node.js%2C%20a%20JavaScript%20runtime%20built%20on%20Chrome%27s%20V8%20JavaScript%20engine) [Angular\\
\\
TypeScript](https://stackblitz.com/fork/github/stackblitz/starters/tree/main/angular?template=node&title=Angular%20Starter&description=An%20angular-cli%20project%20based%20on%20%40angular%2Fanimations%2C%20%40angular%2Fcommon%2C%20%40angular%2Fcompiler%2C%20%40angular%2Fcore%2C%20%40angular%2Fforms%2C%20%40angular%2Fplatform-browser%2C%20%40angular%2Fplatform-browser-dynamic%2C%20%40angular%2Frouter%2C%20core-js%2C%20rxjs%2C%20tslib%20and%20zone.js) [Vue\\
\\
JavaScript](https://stackblitz.com/fork/github/vitejs/vite/tree/main/packages/create-vite/template-vue?file=index.html&terminal=dev) [WebContainer API\\
\\
Node.js](https://stackblitz.com/fork/github/stackblitz/webcontainer-api-starter)

# Publish a package

Are you trying to publish ``?

CancelConfirm

# Allow access to localhost resource

Request to:

More information

```
Method: undefined
Headers:
```

Warning

Allowing access to your localhost resources can lead to security issues such as unwanted request access or data leaks through your localhost.

Do not ask me again

BlockAllow

# Out of memory error

This browser tab is running out of memory. Free up memory by closing other StackBlitz tabs and then refresh the page.

OK [Learn more](https://developer.stackblitz.com/codeflow/working-in-codeflow-ide#out-of-memory-error)

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/4.examples/2.routing/middleware.md)

[Layouts\\
\\
This example shows how to define default and custom layouts.](https://nuxt.com/docs/4.x/examples/features/layouts) [Pages\\
\\
This example shows how to use the pages/ directory to create application routes.](https://nuxt.com/docs/4.x/examples/routing/pages)

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