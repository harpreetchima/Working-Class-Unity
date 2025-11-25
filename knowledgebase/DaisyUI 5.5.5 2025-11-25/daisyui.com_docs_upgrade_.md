---
url: "https://daisyui.com/docs/upgrade/"
title: "daisyUI 5 upgrade guide — daisyUI Tailwind CSS Component UI Library"
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

# daisyUI 5 upgrade guide

This guide helps you how to update your project to Tailwind CSS 4 and daisyUI 5.

daisyUI 5.0 - YouTube

[Photo image of Pouya Saadeghi](https://www.youtube.com/channel/UCaWiPNaXynhvv02CV9NG0Eg?embeds_referring_euri=https%3A%2F%2Fdaisyui.com%2F)

Pouya Saadeghi

233 subscribers

[daisyUI 5.0](https://www.youtube.com/watch?list=TLGGyGMR_rwq8N4yNDExMjAyNQ&v=bYznFmzL820)

Pouya Saadeghi

Search

1/1

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

Up NextCancelAutoplay is paused

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

Watch later

Share

Copy link

[Watch on www.youtube.com](https://www.youtube.com/watch?list=TLGGyGMR_rwq8N4yNDExMjAyNQ&v=bYznFmzL820)

Watch on

> Before upgrading your project, read about:
>
> 1 - [Tailwind CSS 4 breaking changes](https://tailwindcss.com/docs/upgrade-guide#changes-from-v3)
>
> 2 - [daisyUI 5 release notes](https://daisyui.com/docs/v5/)
>
> 3 - [daisyUI 5 breaking changes](https://daisyui.com/docs/upgrade/#changes-from-v4)

### [Link to heading](https://daisyui.com/docs/upgrade/\#1-update-tailwind-css) 1\. Update Tailwind CSS

Tailwind CSS provides a CLI tool for automatic upgrade. It automatically applies the new Tailwind CSS changes to your project.

1. First, remove daisyUI and plugins from your `tailwind.config.js` file, so Tailwind CSS upgrade tool can safely replace it with the CSS file.

tailwind.config.js

```
module.exports = {
   content: ['./your-files/**/*.{html,js}'],
   // other stuff...
-  daisyui: {
-    themes: ['light', 'dark', 'cupcake'],
-  },
- plugins: [require("daisyui")],
}
```

2. Run the [official Tailwind CSS upgrade tool](https://tailwindcss.com/docs/upgrade-guide):

Terminal

```
npx @tailwindcss/upgrade
```

### [Link to heading](https://daisyui.com/docs/upgrade/\#2-update-daisyui) 2\. Update daisyUI

1. Install daisyUI 5

Terminal

```
npm i -D daisyui@latest
```

3. Add daisyUI to your CSS file

app.css

```
@import "tailwindcss";
@plugin "daisyui";
```

OR if you want [enable a built-in theme](https://daisyui.com/docs/themes/#enable-a-built-in-theme) in [config](https://daisyui.com/docs/config/):

app.css

```
@import "tailwindcss";
@plugin "daisyui" {
  themes: light --default, dark --prefersdark, cupcake;
}
```

Now everything should work as expected. If you're facing any challenges, you can ask for help on [daisyUI Discord server](https://daisyui.com/discord/) so you can get help from the community.

* * *

## [Link to heading](https://daisyui.com/docs/upgrade/\#changes-from-v4) Changes from v4

These are all the HTML changes from daisyUI 4 to 5. There are ~15 changes in total but you won't need to do all of them, only the ones you're using.

- To read about new features in daisyUI 5 go to [release notes page](https://daisyui.com/docs/v5/)
- For more detailed changelog go to [changelogs page](https://daisyui.com/docs/changelog/)

### [Link to heading](https://daisyui.com/docs/upgrade/\#artboard) Artboard

- Removed all `artboard` and `phone-*` classes. These classes were simply setting the width and height of the div. Use Tailwind CSS `w-*` and `h-*` classes instead.

| Before | After |
| --- | --- |
| `artboard phone-1` | `w-[320px] h-[568px]` |
| `artboard phone-2` | `w-[375px] h-[667px]` |
| `artboard phone-3` | `w-[414px] h-[736px]` |
| `artboard phone-4` | `w-[375px] h-[812px]` |
| `artboard phone-5` | `w-[414px] h-[896px]` |
| `artboard phone-6` | `w-[320px] h-[1024px]` |
| `artboard artboard-horizontal phone-1` | `w-[568px] h-[320px]` |
| `artboard artboard-horizontal phone-2` | `w-[667px] h-[375px]` |
| `artboard artboard-horizontal phone-3` | `w-[736px] h-[414px]` |
| `artboard artboard-horizontal phone-4` | `w-[812px] h-[375px]` |
| `artboard artboard-horizontal phone-5` | `w-[896px] h-[414px]` |
| `artboard artboard-horizontal phone-6` | `w-[1024px] h-[320px]` |

Example:

page.html

```
- <div class="artboard phone-1">
+ <div class="w-[320px] h-[568px]">
```

### [Link to heading](https://daisyui.com/docs/upgrade/\#avatar) Avatar

- Renamed `online` class to `avatar-online`, `offline` to `avatar-offline`, and `placeholder` to `avatar-placeholder`.

page.html

```
- <div class="avatar online">
+ <div class="avatar avatar-online">
  <div class="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
```

page.html

```
- <div class="avatar offline">
+ <div class="avatar avatar-offline">
  <div class="w-24 rounded-full">
    <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
  </div>
</div>
```

### [Link to heading](https://daisyui.com/docs/upgrade/\#bottom-navigation) Bottom Navigation

- Removed `bottom-nav` component. Use [`dock`](https://daisyui.com/components/dock/) component instead.
- Removed `btm-nav-xs`, `btm-nav-sm`, `btm-nav-md`, `btm-nav-lg`. Use `dock-xs`, `dock-sm`, `dock-md`, `dock-lg` instead.
- Removed `btm-nav-active`. Use `dock-active` instead.
- Removed `disabled` class of `bottom-nav`. Use `aria-disabled="true"` attribute or `disabled` attribute if it's a button. This is for better accessibility.

page.html

```
- <div class="btm-nav btm-nav-sm">
+ <div class="dock dock-sm">
  <button>🏠</button>
-   <button class="active">🍿</button>
+   <button class="dock-active">🍿</button>
  <button>⚙️</button>
</div>
```

### [Link to heading](https://daisyui.com/docs/upgrade/\#card) Card

- `card-bordered` is renamed to `card-border`.

page.html

```
- <div class="card card-bordered">
+ <div class="card card-border">
```

- Removed `card-compact`. Use `card-sm` instead.

page.html

```
- <div class="card card-compact">
+ <div class="card card-sm">
```

### [Link to heading](https://daisyui.com/docs/upgrade/\#fileinput) FileInput

- File input now has border by default. Use `file-input-ghost` if you want to remove the border.
- Removed `file-input-bordered`. File input has a border by default now. Use `file-input-ghost` if you want to remove the border.

page.html

```
- <input type="file" class="file-input file-input-bordered">
+ <input type="file" class="file-input">
```

### [Link to heading](https://daisyui.com/docs/upgrade/\#footer) Footer

- Footer is now vertical by default. Use `footer-horizontal` to make it horizontal at the screen size you want.

page.html

```
- <footer class="footer">
+ <footer class="footer md:footer-horizontal">
```

### [Link to heading](https://daisyui.com/docs/upgrade/\#input) Input

- Input now has a default width of 20rem, no need for adding `w-full max-w-xs`.
- Removed `input-border`.Input has a border by default now. Use `input-ghost` if you want to remove the border.
- Removed `input-bordered` class (not needed anymore).

before

```
<!-- Input with border -->
<input class="input input-bordered"/>

<!-- Input without border -->
<input class="input"/>

<!-- Input with 20rem width -->
<input class="input w-full max-w-xs"/>
```

after

```
<!-- Input with border -->
<input class="input"/>

<!-- Input without border -->
<input class="input input-ghost"/>

<!-- Input with consistent width -->
<input class="input"/>
```

### [Link to heading](https://daisyui.com/docs/upgrade/\#label) Label

- Label has been refactored to be more compatible with form elements. See [label docs](https://daisyui.com/components/label/) for more information.

### [Link to heading](https://daisyui.com/docs/upgrade/\#mask) Mask

- Removed `mask-parallelogram`, `mask-parallelogram-2`, `mask-parallelogram-3`, and `mask-parallelogram-4`. These mask styles are no longer included in the library. If you need them, [manually use the CSS](https://github.com/saadeghi/daisyui/blob/ff313a45cea023c852903138ea032ac2d0a217f4/src/components/styled/mask.css#L23)

### [Link to heading](https://daisyui.com/docs/upgrade/\#menu) Menu

- vertical menu is not `w-full` anymore. Use `w-full` if you want it to be full width.
- Renamed `disabled` class of menu item to `menu-disabled`.
- Renamed `active` class of menu item to `menu-active`.
- Renamed `focus` class of menu item to `menu-focus`.

page.html

```
- <ul class="menu">
+ <ul class="menu w-full">

-   <li class="disabled"><a>disabled item</a></li>
+   <li class="menu-disabled"><a>disabled item</a></li>

-   <li class="active"><a>active item</a></li>
+   <li class="menu-active"><a>active item</a></li>

-   <li class="focus"><a>focus item</a></li>
+   <li class="menu-focus"><a>focus item</a></li>
</ul>
```

### [Link to heading](https://daisyui.com/docs/upgrade/\#mockup) Mockup

- Rename `camera` class in mockup-phone to `mockup-phone-camera`.
- Rename `display` class in mockup-phone to `mockup-phone-display`.
- `mockup-phone-display`

page.html

```
<div class="mockup-phone">
-  <div class="camera"></div>
+  <div class="mockup-phone-camera"></div>

-    <div class="display">
+    <div class="mockup-phone-display">

-    <div class="artboard artboard-demo phone-1">Hi.</div>
+    <div class="w-[320px] h-[568px]">Hi.</div>
  </div>
</div>
```

### [Link to heading](https://daisyui.com/docs/upgrade/\#select) Select

- Select now has a default width of 20rem, no need for adding `w-full max-w-xs`. `max-w-none` class.

- Removed `select-border`. Select has a border by default now. Use `select-ghost` if you want to remove the border.


before

```
<!-- Select with border -->
<select class="select select-bordered">

<!-- Select without border -->
<select class="select">

<!-- Select with consistent width -->
<select class="select w-full max-w-xs">
```

after

```
<!-- Select with border -->
<select class="select">

<!-- Select without border -->
<select class="select select-ghost">

<!-- Select with consistent width -->
<select class="select">
```

### [Link to heading](https://daisyui.com/docs/upgrade/\#stack) Stack

- Instead of setting the width and height of the stack items, use width and height for the stack itself.

page.html

```
- <div class="stack">
-   <div class="card bg-base-100 w-36 h-36">Text</div>
-   <div class="card bg-base-100 w-36 h-36">Text</div>
-   <div class="card bg-base-100 w-36 h-36">Text</div>
+ <div class="stack w-36 h-32">
+   <div class="card bg-base-100">Text</div>
+   <div class="card bg-base-100">Text</div>
+   <div class="card bg-base-100">Text</div>
</div>
```

### [Link to heading](https://daisyui.com/docs/upgrade/\#stat) Stat

- `stats` background color is now transparent. Use `bg-base-100` if you need a background color.

### [Link to heading](https://daisyui.com/docs/upgrade/\#tab) Tab

- Renamed `tabs-bordered` to `tabs-border`.

page.html

```
- <div class="tabs tabs-bordered">
+ <div class="tabs tabs-border">
```

- Renamed `tabs-lifted` to `tabs-lift`.

page.html

```
- <div class="tabs tabs-lifted">
+ <div class="tabs tabs-lift">
```

- Renamed `tabs-boxed` to `tabs-box`.

page.html

```
- <div class="tabs tabs-boxed">
+ <div class="tabs tabs-box">
```

### [Link to heading](https://daisyui.com/docs/upgrade/\#table) Table

- Removed `hover` class. Use `hover:bg-base-300` (or any other color) instead.

page.html

```
- <tr class="hover">
+ <tr class="hover:bg-base-300">
```

### [Link to heading](https://daisyui.com/docs/upgrade/\#textarea) Textarea

- Removed `textarea-border`. Textarea has a border by default now. Use `textarea-ghost` if you want to remove the border.

### [Link to heading](https://daisyui.com/docs/upgrade/\#other-removals) Other removals

- Remove form-control, label-text, label-text-alt

You can still use the same HTML still, but class names don't exist anymore and won't apply color, font-size, flex, etc.

I suggest using the newly added class names for `fieldset` and `legend` elements for better accessibility.

before

```
<label class="form-control w-full max-w-xs">
  Login
  <div class="label">
    <span class="label-text">Name</span>
  </div>
  <input class="input" placeholder="Name" />
</label>
```

after

```
<fieldset class="fieldset">
  <legend>Login</legend>
  <label class="label" for="name">Name</label>
  <input id="name" class="input" placeholder="Name" />
</fieldset>
```

before

```
<label class="form-control w-full max-w-xs">
  <div class="label">
    <span class="label-text">What is your name?</span>
    <span class="label-text-alt">Top Right label</span>
  </div>
  <input type="text" placeholder="Type here" class="input input-bordered w-full max-w-xs" />
  <div class="label">
    <span class="label-text-alt">Bottom Left label</span>
    <span class="label-text-alt">Bottom Right label</span>
  </div>
</label>
```

after

```
<fieldset class="fieldset max-w-xs">
  <label class="label flex justify-between" for="name">
    <span>What is your name?</span>
    <span>Top Right label</span>
  </label>
  <input id="name" class="input" placeholder="Name" />
  <label class="label flex justify-between" for="name">
    <span>Bottom Left label</span>
    <span>Bottom Right label</span>
  </label>
</fieldset>
```

- Remove btn-group and input-group

btn-group, input-group were deprecated a year ago and now finally removed.

If you've been using btn-group or input-group, you can use `join` instead

before

```
<div class="btn-group">
  <button class="btn">Button 1</button>
  <button class="btn">Button 2</button>
</div>
```

after

```
<div class="join">
  <button class="btn join-item">Button 1</button>
  <button class="btn join-item">Button 2</button>
</div>
```

Do you have a question? [Ask on GitHub](https://github.com/saadeghi/daisyui/discussions) or [Discord server](https://daisyui.com/discord/)

Do you like daisyUI? [Post about it!](https://x.com/intent/post?text=daisyUI%20%0D%0AComponents%20for%20Tailwind%20CSS%20%0D%0Ahttps://daisyui.com)

Support daisyUI's development: [Open Collective](https://opencollective.com/daisyui)

[Edit this page on GitHub](https://github.com/saadeghi/daisyui/blob/master/packages/docs/src/routes/(routes)/docs/upgrade/+page.md?plain=1)

[Text version for AI prompts](https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/docs/src/routes/(routes)/docs/upgrade/+page.md?plain=1)

![daisyUI store](https://img.daisyui.com/images/store/nexus.webp)

## NEXUS  Official daisyUI Dashboard Template

## Available on daisyUI store

[More details](https://daisyui.com/store/)

[![daisyUI mugs](https://img.daisyui.com/images/store/banner/techdebt-mug.webp)\\
\\
daisyUI mugs\\
\\
See more →](https://swag.daisyui.com/collections/mugs)

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