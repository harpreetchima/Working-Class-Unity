---
url: "https://nuxt.com/docs/4.x/getting-started/installation"
title: "Installation · Get Started with Nuxt v4"
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

# Installation

Copy page

Get started with Nuxt quickly with our online starters or start locally with your terminal.

## [Play Online](https://nuxt.com/docs/4.x/getting-started/installation\#play-online)

If you just want to play around with Nuxt in your browser without setting up a project, you can use one of our online sandboxes:

[Open on StackBlitz](https://nuxt.new/s/v4)

Open on StackBlitz

[Open on CodeSandbox](https://nuxt.new/c/v4)

Open on CodeSandbox

Or follow the steps below to set up a new Nuxt project on your computer.

## [New Project](https://nuxt.com/docs/4.x/getting-started/installation\#new-project)

#### [Prerequisites](https://nuxt.com/docs/4.x/getting-started/installation\#prerequisites)

- **Node.js** \- [`20.x`](https://nodejs.org/en) or newer (but we recommend the [active LTS release](https://github.com/nodejs/release#release-schedule))
- **Text editor** \- There is no IDE requirement, but we recommend [Visual Studio Code](https://code.visualstudio.com/) with the [official Vue extension](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously known as Volar) or [WebStorm](https://www.jetbrains.com/webstorm/), which, along with [other JetBrains IDEs](https://www.jetbrains.com/ides/), offers great Nuxt support right out-of-the-box.
- **Terminal** \- In order to run Nuxt commands

Additional notes for an optimal setup:

- **Node.js**: Make sure to use an even numbered version (20, 22, etc.)
- **Nuxtr**: Install the community-developed [Nuxtr extension](https://marketplace.visualstudio.com/items?itemName=Nuxtr.nuxtr-vscode)
- **WSL**: If you are using Windows and experience slow HMR, you may want to try using [WSL (Windows Subsystem for Linux)](https://learn.microsoft.com/en-us/windows/wsl/install) which may solve some performance issues.
- **Windows slow DNS resolution**: Instead of using `localhost:3000` for local dev server on Windows, use `127.0.0.1` for much faster loading experience on browsers.

Open a terminal (if you're using [Visual Studio Code](https://code.visualstudio.com/), you can open an [integrated terminal](https://code.visualstudio.com/docs/terminal/basics)) and use the following command to create a new starter project:

npmyarnpnpmbundeno

```bash
npm create nuxt@latest <project-name>
```

```bash
yarn create nuxt@latest <project-name>
```

```bash
pnpm create nuxt@latest <project-name>
```

```bash
bun create nuxt@latest <project-name>
```

```bash
deno -A npm:create-nuxt@latest <project-name>
```

Alternatively, you can find other starters or themes by opening [nuxt.new](https://nuxt.new/) and following the instructions there.

Open your project folder in Visual Studio Code:

Terminal

```bash
code <project-name>
```

Or change directory into your new project from your terminal:

```bash
cd <project-name>
```

## [Development Server](https://nuxt.com/docs/4.x/getting-started/installation\#development-server)

Now you'll be able to start your Nuxt app in development mode:

npmyarnpnpmbundeno

```bash
npm run dev -- -o
```

```bash
yarn dev --open
```

```bash
pnpm dev -o
```

```bash
bun run dev -o

# To use the Bun runtime during development
# bun --bun run dev -o
```

```bash
deno run dev -o
```

Well done! A browser window should automatically open for [http://localhost:3000](http://localhost:3000/).

## [Next Steps](https://nuxt.com/docs/4.x/getting-started/installation\#next-steps)

Now that you've created your Nuxt project, you are ready to start building your application.

[Nuxt Concepts](https://nuxt.com/docs/4.x/guide/concepts) Read more in Nuxt Concepts.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/1.getting-started/02.installation.md)

[Introduction\\
\\
Nuxt's goal is to make web development intuitive and performant with a great Developer Experience in mind.](https://nuxt.com/docs/4.x/getting-started/introduction) [Configuration\\
\\
Nuxt is configured with sensible defaults to make you productive.](https://nuxt.com/docs/4.x/getting-started/configuration)

On this page

On this page

- [Play Online](https://nuxt.com/docs/4.x/getting-started/installation#play-online)
- [New Project](https://nuxt.com/docs/4.x/getting-started/installation#new-project)
- [Development Server](https://nuxt.com/docs/4.x/getting-started/installation#development-server)
- [Next Steps](https://nuxt.com/docs/4.x/getting-started/installation#next-steps)

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