---
url: "https://nuxt.com/docs/4.x/guide/ai/mcp"
title: "Working with AI: Nuxt MCP Server v4"
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

# Nuxt MCP Server

Copy page

Use Nuxt documentation in your AI assistants with Model Context Protocol support.

## [What is MCP?](https://nuxt.com/docs/4.x/guide/ai/mcp\#what-is-mcp)

MCP (Model Context Protocol) is a standardized protocol that enables AI assistants to access external data sources and tools. Nuxt provides an MCP server that allows AI assistants like Claude Code, Cursor, and Windsurf to access documentation, blog posts, and deployment guides directly.

The MCP server provides structured access to the Nuxt documentation, making it easy for AI tools to understand and assist with Nuxt development.

## [Resources](https://nuxt.com/docs/4.x/guide/ai/mcp\#resources)

The Nuxt MCP server provides the following resources for discovery:

- **`resource://nuxt-com/documentation-pages`**: Browse all available documentation pages (defaults to v4.x)
- **`resource://nuxt-com/blog-posts`**: Browse all Nuxt blog posts including releases and tutorials
- **`resource://nuxt-com/deploy-providers`**: Browse all deployment providers and hosting platforms

You're able to access these resources with tools like Claude Code by using `@`.

## [Tools](https://nuxt.com/docs/4.x/guide/ai/mcp\#tools)

The Nuxt MCP server provides the following tools organized by category:

### [Documentation](https://nuxt.com/docs/4.x/guide/ai/mcp\#documentation)

- **`list_documentation_pages`**: Lists all available Nuxt documentation pages with their categories and basic information. Supports version filtering (3.x, 4.x, or all)
- **`get_documentation_page`**: Retrieves documentation page content and details by path
- **`get_getting_started_guide`**: Gets the getting started guide for a specific Nuxt version

### [Blog](https://nuxt.com/docs/4.x/guide/ai/mcp\#blog)

- **`list_blog_posts`**: Lists all Nuxt blog posts with metadata including dates, categories, and tags
- **`get_blog_post`**: Retrieves blog post content and details by path

### [Deployment](https://nuxt.com/docs/4.x/guide/ai/mcp\#deployment)

- **`list_deploy_providers`**: Lists all deployment providers and hosting platforms for Nuxt applications
- **`get_deploy_provider`**: Retrieves deployment provider details and instructions by path

## [Prompts](https://nuxt.com/docs/4.x/guide/ai/mcp\#prompts)

The Nuxt MCP server provides guided prompts for common workflows:

- **`find_documentation_for_topic`**: Find the best Nuxt documentation for a specific topic or feature
- **`deployment_guide`**: Get deployment instructions for a specific hosting provider
- **`migration_help`**: Get help with migrating between Nuxt versions

You're able to access these resources with tools like Claude Code by using `/`.

## [Setup](https://nuxt.com/docs/4.x/guide/ai/mcp\#setup)

The Nuxt MCP server uses HTTP transport and can be installed in different AI assistants.

### [ChatGPT](https://nuxt.com/docs/4.x/guide/ai/mcp\#chatgpt)

**Custom connectors using MCP are available on ChatGPT for Pro and Plus accounts** on the web.

Follow these steps to set up Nuxt as a connector within ChatGPT:

1. **Enable Developer mode:**
   - Go to Settings → Connectors → Advanced settings → Developer mode
2. **Open ChatGPT settings**
3. **In the Connectors tab, Create a new connector:**
   - Give it a name: `Nuxt`
   - MCP server URL: `https://nuxt.com/mcp`
   - Authentication: `None`
4. **Click Create**

The Nuxt connector will appear in the composer's "Developer mode" tool later during conversations.

### [Claude Code](https://nuxt.com/docs/4.x/guide/ai/mcp\#claude-code)

**Ensure Claude Code is installed** \- Visit [Anthropic's documentation](https://docs.claude.com/en/docs/claude-code/quickstart) for installation instructions.

Add the server using the CLI command:

```bash
claude mcp add --transport http nuxt-remote https://nuxt.com/mcp
```

### [Cursor](https://nuxt.com/docs/4.x/guide/ai/mcp\#cursor)

Click the button below to install the Nuxt MCP server directly in Cursor:

[Install MCP Server](cursor://anysphere.cursor-deeplink/mcp/install?name=nuxt&config=eyJ0eXBlIjoiaHR0cCIsInVybCI6Imh0dHBzOi8vbnV4dC5jb20vbWNwIn0%3D)

For manual setup, follow these steps:

1. Open Cursor and go to "Settings" > "Tools & MCP"
2. Add the Nuxt MCP server configuration

Or manually create/update `.cursor/mcp.json` in your project root:

.cursor/mcp.json

```json
{
  "mcpServers": {
    "nuxt": {
      "type": "http",
      "url": "https://nuxt.com/mcp"
    }
  }
}
```

### [Le Chat Mistral](https://nuxt.com/docs/4.x/guide/ai/mcp\#le-chat-mistral)

1. Navigate to "Intelligence" > "Connectors"
2. Click on "Add Connector" button, then select "Custom MCP Connector"
3. Create your Custom MCP Connector:

   - Connector Name : `Nuxt`
   - Connector Server : `https://nuxt.com/mcp`

### [Visual Studio Code](https://nuxt.com/docs/4.x/guide/ai/mcp\#visual-studio-code)

**Install required extensions** \- Ensure you have [GitHub Copilot](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot) and [GitHub Copilot Chat](https://marketplace.visualstudio.com/items?itemName=GitHub.copilot-chat) extensions installed.

1. Open VS Code and access the Command Palette (Ctrl/Cmd + Shift + P)
2. Type "Preferences: Open Workspace Settings (JSON)" and select it
3. Navigate to your project's `.vscode` folder or create one if it doesn't exist
4. Create or edit the `mcp.json` file with the following configuration:

.vscode/mcp.json

```json
{
  "servers": {
    "nuxt": {
      "type": "http",
      "url": "https://nuxt.com/mcp"
    }
  }
}
```

### [GitHub Copilot Agent](https://nuxt.com/docs/4.x/guide/ai/mcp\#github-copilot-agent)

**Repository administrator access required** to configure MCP servers for GitHub Copilot coding agent.

If you have already configured MCP servers in VS Code (replace the `servers` key with `mcpServers` for GitHub Copilot Agent), you can leverage a similar configuration for GitHub Copilot coding agent. You will need to add a `tools` key specifying which tools are available to Copilot.

1. Navigate to your GitHub repository
2. Go to **Settings** \> **Code & automation** \> **Copilot** \> **Coding agent**
3. In the **MCP configuration** section, add the following configuration:



```json
{
     "mcpServers": {
       "nuxt": {
         "type": "http",
         "url": "https://nuxt.com/mcp",
         "tools": ["*"]
       }
     }
}
```

4. Click **Save**

#### [Validating the Configuration](https://nuxt.com/docs/4.x/guide/ai/mcp\#validating-the-configuration)

To verify the MCP server is configured correctly:

1. Create an issue in your repository and assign it to Copilot
2. Wait for Copilot to create a pull request
3. In the pull request, click **View session** in the "Copilot started work" timeline event
4. Click the ellipsis button ( **...**) at the top right, then click **Copilot** in the sidebar
5. Expand the **Start MCP Servers** step to see the configured Nuxt tools

For more information on using MCP with GitHub Copilot coding agent, see [Extend coding agent with MCP](https://docs.github.com/en/copilot/how-tos/use-copilot-agents/coding-agent/extend-coding-agent-with-mcp).

### [Windsurf](https://nuxt.com/docs/4.x/guide/ai/mcp\#windsurf)

1. Open Windsurf and navigate to "Settings" > "Windsurf Settings" > "Cascade"
2. Click the "Manage MCPs" button, then select the "View raw config" option
3. Add the following configuration to your MCP settings:

.codeium/windsurf/mcp\_config.json

```json
{
  "mcpServers": {
    "nuxt": {
      "type": "http",
      "url": "https://nuxt.com/mcp"
    }
  }
}
```

### [Zed](https://nuxt.com/docs/4.x/guide/ai/mcp\#zed)

1. Open Zed and go to "Settings" > "Open Settings"
2. Navigate to the JSON settings file
3. Add the following context server configuration to your settings:

.config/zed/settings.json

```json
{
  "context_servers": {
    "nuxt": {
      "source": "custom",
      "command": "npx",
      "args": ["mcp-remote", "https://nuxt.com/mcp"],
      "env": {}
    }
  }
}
```

### [Opencode](https://nuxt.com/docs/4.x/guide/ai/mcp\#opencode)

1. In your project root, create `opencode.json`
2. Add the following configuration:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "nuxt": {
      "type": "remote",
      "url": "https://nuxt.com/mcp",
      "enabled": true
    }
  }
}
```

## [Prompts Examples](https://nuxt.com/docs/4.x/guide/ai/mcp\#prompts-examples)

Once configured, you can ask your AI assistant questions like:

- "List all available Nuxt documentation pages"
- "Get the introduction documentation"
- "What's the difference between v3 and v4?"
- "How do I deploy to Vercel?"
- "Show me the latest blog posts"
- "Help me migrate from Nuxt 3 to Nuxt 4"
- "Search documentation about composables"
- "Find deployment guides for Cloudflare"

The AI assistant will use the MCP server to fetch structured JSON data and provide guided assistance for Nuxt development.

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/3.guide/3.ai/1.mcp.md)

[Nuxt Plugins\\
\\
Best practices when using Nuxt plugins.](https://nuxt.com/docs/4.x/guide/best-practices/plugins) [LLMs.txt\\
\\
How to get AI tools like Cursor, Windsurf, GitHub Copilot, ChatGPT, and Claude to understand Nuxt concepts, APIs, and best practices.](https://nuxt.com/docs/4.x/guide/ai/llms-txt)

On this page

On this page

- [What is MCP?](https://nuxt.com/docs/4.x/guide/ai/mcp#what-is-mcp)
- [Resources](https://nuxt.com/docs/4.x/guide/ai/mcp#resources)
- [Tools](https://nuxt.com/docs/4.x/guide/ai/mcp#tools)
  - [Documentation](https://nuxt.com/docs/4.x/guide/ai/mcp#documentation)
  - [Blog](https://nuxt.com/docs/4.x/guide/ai/mcp#blog)
  - [Deployment](https://nuxt.com/docs/4.x/guide/ai/mcp#deployment)
- [Prompts](https://nuxt.com/docs/4.x/guide/ai/mcp#prompts)
- [Setup](https://nuxt.com/docs/4.x/guide/ai/mcp#setup)
  - [ChatGPT](https://nuxt.com/docs/4.x/guide/ai/mcp#chatgpt)
  - [Claude Code](https://nuxt.com/docs/4.x/guide/ai/mcp#claude-code)
  - [Cursor](https://nuxt.com/docs/4.x/guide/ai/mcp#cursor)
  - [Le Chat Mistral](https://nuxt.com/docs/4.x/guide/ai/mcp#le-chat-mistral)
  - [Visual Studio Code](https://nuxt.com/docs/4.x/guide/ai/mcp#visual-studio-code)
  - [GitHub Copilot Agent](https://nuxt.com/docs/4.x/guide/ai/mcp#github-copilot-agent)
  - [Windsurf](https://nuxt.com/docs/4.x/guide/ai/mcp#windsurf)
  - [Zed](https://nuxt.com/docs/4.x/guide/ai/mcp#zed)
  - [Opencode](https://nuxt.com/docs/4.x/guide/ai/mcp#opencode)
- [Prompts Examples](https://nuxt.com/docs/4.x/guide/ai/mcp#prompts-examples)

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