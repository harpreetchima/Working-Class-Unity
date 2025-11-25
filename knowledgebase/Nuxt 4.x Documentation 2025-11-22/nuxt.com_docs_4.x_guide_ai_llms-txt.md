---
url: "https://nuxt.com/docs/4.x/guide/ai/llms-txt"
title: "Working with AI: Nuxt LLMs.txt v4"
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
3. [Working with AI](https://nuxt.com/docs/4.x/guide/ai)

# Nuxt LLMs.txt

Copy page

How to get AI tools like Cursor, Windsurf, GitHub Copilot, ChatGPT, and Claude to understand Nuxt concepts, APIs, and best practices.

## [What is LLMs.txt?](https://nuxt.com/docs/4.x/guide/ai/llms-txt\#what-is-llmstxt)

LLMs.txt is a structured documentation format specifically designed for large language models (LLMs). Nuxt provides LLMs.txt files that contain comprehensive information about the framework, making it easy for AI tools to understand and assist with Nuxt development.

These files are optimized for AI consumption and contain structured information about concepts, APIs, usage patterns, and best practices.

## [Available routes](https://nuxt.com/docs/4.x/guide/ai/llms-txt\#available-routes)

We provide LLMs.txt routes to help AI tools access our documentation:

- **`/llms.txt`** \- Contains a structured overview of all documentation pages and their links (~5K tokens)
- **`/llms-full.txt`** \- Provides comprehensive documentation including getting started guides, API references, blog posts, and deployment guides (~1M+ tokens)

## [Choosing the Right File](https://nuxt.com/docs/4.x/guide/ai/llms-txt\#choosing-the-right-file)

**Most users should start with `/llms.txt`** \- it contains all essential information and works with standard LLM context windows.Use `/llms-full.txt` only if you need comprehensive implementation details and your AI tool supports large contexts (200K+ tokens).

## [Important usage notes](https://nuxt.com/docs/4.x/guide/ai/llms-txt\#important-usage-notes)

**@-symbol must be typed manually** \- When using tools like Cursor or Windsurf, the `@` symbol must be typed by hand in the chat interface. Copy-pasting breaks the tool's ability to recognize it as a context reference.

## [Usage with AI Tools](https://nuxt.com/docs/4.x/guide/ai/llms-txt\#usage-with-ai-tools)

### [Cursor](https://nuxt.com/docs/4.x/guide/ai/llms-txt\#cursor)

Nuxt provides specialized LLMs.txt files that you can reference in Cursor for better AI assistance with Nuxt development.

#### [How to use](https://nuxt.com/docs/4.x/guide/ai/llms-txt\#how-to-use)

1. **Direct reference**: Mention the LLMs.txt URLs when asking questions
2. Add these specific URLs to your project context using `@docs`

[Read more about Cursor Web and Docs Search](https://cursor.com/docs/context/symbols)

### [Windsurf](https://nuxt.com/docs/4.x/guide/ai/llms-txt\#windsurf)

Windsurf can directly access the Nuxt LLMs.txt files to understand framework usage and best practices.

#### [Using LLMs.txt with Windsurf](https://nuxt.com/docs/4.x/guide/ai/llms-txt\#using-llmstxt-with-windsurf)

- Use `@docs` to reference specific LLMs.txt URLs
- Create persistent rules referencing these URLs in your workspace

[Read more about Windsurf Web and Docs Search](https://docs.windsurf.com/windsurf/cascade/web-search)

### [Other AI Tools](https://nuxt.com/docs/4.x/guide/ai/llms-txt\#other-ai-tools)

Any AI tool that supports LLMs.txt can use these routes to better understand Nuxt.

#### [Examples for ChatGPT, Claude, or other LLMs](https://nuxt.com/docs/4.x/guide/ai/llms-txt\#examples-for-chatgpt-claude-or-other-llms)

- "Using Nuxt documentation from [https://nuxt.com/llms.txt](https://nuxt.com/llms.txt)"
- "Follow complete Nuxt guidelines from [https://nuxt.com/llms-full.txt](https://nuxt.com/llms-full.txt)"

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/3.guide/3.ai/2.llms-txt.md)

[MCP Server\\
\\
Use Nuxt documentation in your AI assistants with Model Context Protocol support.](https://nuxt.com/docs/4.x/guide/ai/mcp) [Custom Routing\\
\\
In Nuxt, your routing is defined by the structure of your files inside the pages directory. However, since it uses vue-router under the hood, Nuxt offers you several ways to add custom routes in your project.](https://nuxt.com/docs/4.x/guide/recipes/custom-routing)

On this page

On this page

- [What is LLMs.txt?](https://nuxt.com/docs/4.x/guide/ai/llms-txt#what-is-llmstxt)
- [Available routes](https://nuxt.com/docs/4.x/guide/ai/llms-txt#available-routes)
- [Choosing the Right File](https://nuxt.com/docs/4.x/guide/ai/llms-txt#choosing-the-right-file)
- [Important usage notes](https://nuxt.com/docs/4.x/guide/ai/llms-txt#important-usage-notes)
- [Usage with AI Tools](https://nuxt.com/docs/4.x/guide/ai/llms-txt#usage-with-ai-tools)
  - [Cursor](https://nuxt.com/docs/4.x/guide/ai/llms-txt#cursor)
  - [Windsurf](https://nuxt.com/docs/4.x/guide/ai/llms-txt#windsurf)
  - [Other AI Tools](https://nuxt.com/docs/4.x/guide/ai/llms-txt#other-ai-tools)

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