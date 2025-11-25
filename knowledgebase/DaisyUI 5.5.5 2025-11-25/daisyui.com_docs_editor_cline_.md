---
url: "https://daisyui.com/docs/editor/cline/"
title: "Cline setup for daisyUI — daisyUI Tailwind CSS Component UI Library"
---

[BLUEPRINT\\
\\
The Official daisyUI Code Generator  MCP Server](https://daisyui.com/blueprint/)

[daisyUI](https://daisyui.com/)

5.5.5

- [Changelog](https://daisyui.com/docs/changelog/)
- [v5 release notes](https://daisyui.com/docs/v5/)
- [v5 upgrade guide](https://daisyui.com/docs/upgrade/)
- [Version 4.x](https://v4.daisyui.com/)
- [Version 3.x](https://v3.daisyui.com/)
- [Version 2.x](https://v2.daisyui.com/)
- [Version 1.x](https://v1.daisyui.com/)
- [Roadmap](https://daisyui.com/docs/roadmap/)

Search… `⌘K`

[Components](https://daisyui.com/components/)

[Templates](https://daisyui.com/store/)

[Figma](https://daisyui.com/store/daisyui-figma-library/)

[MCP](https://daisyui.com/blueprint/)

- Theme
- light

- dark

- cupcake

- bumblebee

- emerald

- corporate

- synthwave

- retro

- cyberpunk

- valentine

- halloween

- garden

- forest

- aqua

- lofi

- pastel

- fantasy

- wireframe

- black

- luxury

- dracula

- cmyk

- autumn

- business

- acid

- lemonade

- night

- coffee

- winter

- dim

- nord

- sunset

- caramellatte

- abyss

- silk

- [Make your theme!](https://daisyui.com/theme-generator/)

- ENEnglish
- ARالعربية
- BNবাংলা
- CACatalà
- CSČeština
- DEDeutsch
- ESEspañol
- FAفارسی
- FRFrançais
- HUMagyar
- IDBahasa Indonesia
- ITItaliano
- JA日本語
- KO한국어
- MSBahasa Melayu
- PLPolski
- PTPortuguês
- RORomână
- RUРусский
- UKУкраїнська
- VITiếng Việt
- ZH简体中文
- ZH繁體中文

# Cline setup for daisyUI

Setup Cline VSCode extension to correctly generate daisyUI code based on your prompt.

## [Link to heading](https://daisyui.com/docs/editor/cline/\#-cline-vscode-extension)![Cline VSCode extension](https://img.daisyui.com/images/logos/cline.webp) Cline VSCode extension

[daisyui.com/llms.txt](https://daisyui.com/llms.txt) file is a compact, text version of daisyUI docs to help AI generate accurate daisyUI code based on your prompt.

Here's how to use daisyUI llms.txt in Cline:

### [Link to heading](https://daisyui.com/docs/editor/cline/\#quick-use) Quick use

In chat window type this before your prompt and Cline will use daisyUI's llms.txt file to generate code.

prompt

```
https://daisyui.com/llms.txt
```

### [Link to heading](https://daisyui.com/docs/editor/cline/\#project-level-permanent-setup) Project-level permanent setup

You can setup daisyUI's llms.txt file to your workspace so Cline can use it by default.

Run this command to save the llms.txt file to `.clinerules/daisyui.md`

Terminal

```
curl -L https://daisyui.com/llms.txt --create-dirs -o .clinerules/daisyui.md
```

### [Link to heading](https://daisyui.com/docs/editor/cline/\#mcp-server) MCP server

MCP is a an API to communicate with AI models.

You can add MCP servers and Cline will communicate with them to get more accurate results.

You can use [Context7](https://context7.com/) or [daisyUI GitMCP](https://gitmcp.io/saadeghi/daisyui) as MCP server in Cline.

#### [Link to heading](https://daisyui.com/docs/editor/cline/\#daisyui-blueprint) daisyUI Blueprint

Blueprint is the official MCP server for daisyUI. [Read more about Blueprint](https://daisyui.com/blueprint/).

1. Get a [Blueprint License](https://daisyui.com/blueprint/checkout/)
2. Click the MCP Servers icon at the top navigation bar of the Cline pane.
3. Select the `Configure` tab.
4. Click the `Configure MCP Servers` button at the bottom of the pane.
5. Add this and set your `license key` \+ `email address` in it

Figma API Key is optional - Only needed for Figma-to-code conversion

cline\_mcp\_settings.json

```
{
  "servers": {
+   "daisyui-blueprint": {
+     "type": "stdio",
+     "command": "npx",
+     "args": ["-y", "daisyui-blueprint@latest"],
+     "env": {
+       "LICENSE": "YOUR BLUEPRINT LICENSE KEY",
+       "EMAIL": "YOUR EMAIL ADDRESS",
+       "FIGMA": "YOUR FIGMA API KEY (optional)"
+     }
+     "disabled": false,
+     "autoApprove": []
+   }
  }
}
```

#### [Link to heading](https://daisyui.com/docs/editor/cline/\#usage) Usage

Now you can ask AI anything about daisyUI, and write `use Blueprint MCP` at the end of your prompt.

For example:

prompt

```
give me a light daisyUI 5 theme with tropical color palette. use Blueprint MCP
```

#### [Link to heading](https://daisyui.com/docs/editor/cline/\#setup-context7-mcp-server) Setup Context7 MCP server

Install `Context7` from Cline MCP marketplace

#### [Link to heading](https://daisyui.com/docs/editor/cline/\#usage) Usage

Now you can ask AI anything about daisyUI, and write `use context7` at the end of your prompt.

For example:

prompt

```
give me a light daisyUI 5 theme with tropical color palette. use context7
```

#### [Link to heading](https://daisyui.com/docs/editor/cline/\#setup-daisyui-gitmcp-server) Setup daisyUI GitMCP server

1. Click the MCP Servers icon at the top navigation bar of the Cline pane.
2. Select the `Configure` tab.
3. Click the `Configure MCP Servers` button at the bottom of the pane.
4. Add this config:

cline\_mcp\_settings.json

```
{
  "mcpServers": {
+   "daisyui-github": {
+     "url": "https://gitmcp.io/saadeghi/daisyui",
+     "disabled": false,
+     "autoApprove": []
+   }
  }
}
```

#### [Link to heading](https://daisyui.com/docs/editor/cline/\#usage) Usage

Now you can ask AI anything about daisyUI.

prompt

```
give me a light daisyUI 5 theme with tropical color palette
```

[NextCustomize](https://daisyui.com/docs/customize/)

Do you have a question? [Ask on GitHub](https://github.com/saadeghi/daisyui/discussions) or [Discord server](https://daisyui.com/discord/)

Do you like daisyUI? [Post about it!](https://x.com/intent/post?text=daisyUI%20%0D%0AComponents%20for%20Tailwind%20CSS%20%0D%0Ahttps://daisyui.com)

Support daisyUI's development: [Open Collective](https://opencollective.com/daisyui)

[Edit this page on GitHub](https://github.com/saadeghi/daisyui/blob/master/packages/docs/src/routes/(routes)/docs/editor/cline/+page.md?plain=1)

[Text version for AI prompts](https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/docs/src/routes/(routes)/docs/editor/cline/+page.md?plain=1)

![daisyUI store](https://img.daisyui.com/images/store/nexus.webp)

## NEXUS  Official daisyUI Dashboard Template

## Available on daisyUI store

[More details](https://daisyui.com/store/)

[![daisyUI swag!](https://img.daisyui.com/images/store/banner/cicd-hat.webp)\\
\\
daisyUI swag!\\
\\
Hats and more](https://swag.daisyui.com/collections/hats)

[Please upgrade your browser](https://www.wikihow.com/Update-Your-Browser)

[daisyUI](https://daisyui.com/)

5.5.5

- [Changelog](https://daisyui.com/docs/changelog/)
- [v5 release notes](https://daisyui.com/docs/v5/)
- [v5 upgrade guide](https://daisyui.com/docs/upgrade/)
- [Version 4.x](https://v4.daisyui.com/)
- [Version 3.x](https://v3.daisyui.com/)
- [Version 2.x](https://v2.daisyui.com/)
- [Version 1.x](https://v1.daisyui.com/)
- [Roadmap](https://daisyui.com/docs/roadmap/)

- Docs

- [Introduction](https://daisyui.com/docs/intro/)
- [Install](https://daisyui.com/docs/install/)
- [CDN](https://daisyui.com/docs/cdn/)
- [Use](https://daisyui.com/docs/use/)
- [Code editor & LLM setupupdated](https://daisyui.com/docs/editor/)
- [Customize](https://daisyui.com/docs/customize/)
- [Config](https://daisyui.com/docs/config/)
- [Colors](https://daisyui.com/docs/colors/)
- [Themes](https://daisyui.com/docs/themes/)
- [Base style](https://daisyui.com/docs/base/)
- [Utilities & variables](https://daisyui.com/docs/utilities/)
- [Layout & Typography](https://daisyui.com/docs/layout-and-typography/)

- Components

- ## Actions


  - [Button](https://daisyui.com/components/button/)
  - [Dropdown](https://daisyui.com/components/dropdown/)
  - [FAB / Speed Dialnew](https://daisyui.com/components/fab/)
  - [Modal](https://daisyui.com/components/modal/)
  - [Swap](https://daisyui.com/components/swap/)
  - [Theme Controller](https://daisyui.com/components/theme-controller/)
- ## Data display


  - [Accordion](https://daisyui.com/components/accordion/)
  - [Avatar](https://daisyui.com/components/avatar/)
  - [Badge](https://daisyui.com/components/badge/)
  - [Card](https://daisyui.com/components/card/)
  - [Carousel](https://daisyui.com/components/carousel/)
  - [Chat bubble](https://daisyui.com/components/chat/)
  - [Collapse](https://daisyui.com/components/collapse/)
  - [Countdownupdated](https://daisyui.com/components/countdown/)
  - [Diff](https://daisyui.com/components/diff/)
  - [Hover 3D cardnew](https://daisyui.com/components/hover-3d/)
  - [Hover Gallerynew](https://daisyui.com/components/hover-gallery/)
  - [Kbd](https://daisyui.com/components/kbd/)
  - [List](https://daisyui.com/components/list/)
  - [Stat](https://daisyui.com/components/stat/)
  - [Status](https://daisyui.com/components/status/)
  - [Table](https://daisyui.com/components/table/)
  - [Text Rotatenew](https://daisyui.com/components/text-rotate/)
  - [Timeline](https://daisyui.com/components/timeline/)
- ## Navigation


  - [Breadcrumbs](https://daisyui.com/components/breadcrumbs/)
  - [Dock](https://daisyui.com/components/dock/)
  - [Link](https://daisyui.com/components/link/)
  - [Menu](https://daisyui.com/components/menu/)
  - [Navbar](https://daisyui.com/components/navbar/)
  - [Pagination](https://daisyui.com/components/pagination/)
  - [Steps](https://daisyui.com/components/steps/)
  - [Tab](https://daisyui.com/components/tab/)
- ## Feedback


  - [Alert](https://daisyui.com/components/alert/)
  - [Loading](https://daisyui.com/components/loading/)
  - [Progress](https://daisyui.com/components/progress/)
  - [Radial progress](https://daisyui.com/components/radial-progress/)
  - [Skeletonupdated](https://daisyui.com/components/skeleton/)
  - [Toast](https://daisyui.com/components/toast/)
  - [Tooltip](https://daisyui.com/components/tooltip/)
- ## Data input


  - [Calendar](https://daisyui.com/components/calendar/)
  - [Checkbox](https://daisyui.com/components/checkbox/)
  - [Fieldset](https://daisyui.com/components/fieldset/)
  - [File Input](https://daisyui.com/components/file-input/)
  - [Filter](https://daisyui.com/components/filter/)
  - [Label](https://daisyui.com/components/label/)
  - [Radio](https://daisyui.com/components/radio/)
  - [Range](https://daisyui.com/components/range/)
  - [Rating](https://daisyui.com/components/rating/)
  - [Selectupdated](https://daisyui.com/components/select/)
  - [Input field](https://daisyui.com/components/input/)
  - [Textarea](https://daisyui.com/components/textarea/)
  - [Toggle](https://daisyui.com/components/toggle/)
  - [Validator](https://daisyui.com/components/validator/)
- ## Layout


  - [Divider](https://daisyui.com/components/divider/)
  - [Drawer sidebarupdated](https://daisyui.com/components/drawer/)
  - [Footer](https://daisyui.com/components/footer/)
  - [Hero](https://daisyui.com/components/hero/)
  - [Indicator](https://daisyui.com/components/indicator/)
  - [Join (group items)](https://daisyui.com/components/join/)
  - [Mask](https://daisyui.com/components/mask/)
  - [Stack](https://daisyui.com/components/stack/)
- ## Mockup


  - [Browser](https://daisyui.com/components/mockup-browser/)
  - [Code](https://daisyui.com/components/mockup-code/)
  - [Phone](https://daisyui.com/components/mockup-phone/)
  - [Window](https://daisyui.com/components/mockup-window/)

- [Theme Generator](https://daisyui.com/theme-generator/)
- [Template Storeupdated](https://daisyui.com/store/)
- [Blog](https://daisyui.com/blog/)
- [Resources](https://daisyui.com/resources/videos/)
- [Playground](https://daisyui.com/tailwindplay/)
- [T-shirts](https://swag.daisyui.com/)
- [BLUEPRINT\\
\\
Official MCPnew](https://daisyui.com/blueprint/)
- [llms.txt](https://daisyui.com/llms.txt)

- [GitHub](https://github.com/saadeghi/daisyui)
- [X.com](https://x.com/daisyui_)
- [Discord](https://daisyui.com/discord/)
- [Donate](https://github.com/saadeghi/daisyui?sponsor=1)

close