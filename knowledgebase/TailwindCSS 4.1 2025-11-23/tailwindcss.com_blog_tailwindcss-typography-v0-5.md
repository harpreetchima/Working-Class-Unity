---
url: "https://tailwindcss.com/blog/tailwindcss-typography-v0-5"
title: "Effortless Typography, Even in Dark Mode - Tailwind CSS"
---

[Home](https://tailwindcss.com/) v4.1

`⌘K`  `Ctrl K` [Docs](https://tailwindcss.com/docs) [Blog](https://tailwindcss.com/blog) [Showcase](https://tailwindcss.com/showcase) [Sponsor](https://tailwindcss.com/sponsor) [Plus](https://tailwindcss.com/plus?ref=top) [GitHub repository](https://github.com/tailwindlabs/tailwindcss)

December 17, 2021

# Effortless Typography, Even in Dark Mode

![](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fadamwathan.f69b0b90.jpg&w=96&q=75)

Adam Wathan

[@adamwathan](https://twitter.com/adamwathan)

Introducing Tailwind CSS Typography v0.5 - YouTube

[Photo image of Tailwind Labs](https://www.youtube.com/channel/UCOe-8z68tgw9ioqVvYM4ddQ?embeds_referring_euri=https%3A%2F%2Ftailwindcss.com%2F)

Tailwind Labs

105K subscribers

[Introducing Tailwind CSS Typography v0.5](https://www.youtube.com/watch?v=Aa2RjxU-BCw)

Tailwind Labs

Search

Info

Shopping

Tap to unmute

If playback doesn't begin shortly, try restarting your device.

You're signed out

Videos you watch may be added to the TV's watch history and influence TV recommendations. To avoid this, cancel and sign in to YouTube on your computer.

CancelConfirm

Share

Include playlist

An error occurred while retrieving sharing information. Please try again later.

Watch later

Share

Copy link

Watch on

0:00

/
•Live

•

Today we're announcing the next version of the [Tailwind CSS Typography plugin](https://v3.tailwindcss.com/docs/typography-plugin), which brings easy dark mode support, a brand new customization API, and the `not-prose` class I wasn't sure we'd ever figure out how to support.

For a full tour of everything that's new, check out [the official release video](https://www.youtube.com/watch?v=GEYkwfYytAM) on our YouTube channel.

Tailwind CSS Typography v0.5 is designed for Tailwind CSS v3.0, so make sure you're on the latest version of Tailwind, then install the new plugin release from npm:

```
npm install -D @tailwindcss/typography@latest
```

To learn more about everything the plugin provides, check out our update [typography plugin](https://v3.tailwindcss.com/docs/typography-plugin) documentation.

* * *

## [Easy dark mode support](https://tailwindcss.com/blog/tailwindcss-typography-v0-5\#easy-dark-mode-support)

We've added a `prose-invert` class you can use to easily swap out your typography colors in dark mode:

```
<body class="bg-white dark:bg-gray-900">  <article class="prose dark:prose-invert">{{ markdown }}</article></body>
```

The dark themes are hand-crafted by our expert design team, and automatically adapt to whatever gray scale you're using.

* * *

## [Pick your gray scale](https://tailwindcss.com/blog/tailwindcss-typography-v0-5\#pick-your-gray-scale)

Tailwind CSS v3.0 ships with five different sets of grays by default, and the updated typography plugin includes classes for each one, making it easy to match your typography to the rest of your site:

```
<article class="prose prose-slate">{{ markdown }}</article>
```

We've simplified how we define color themes internally too, which makes it easier to add your own if you need to.

Check out the [documentation](https://v3.tailwindcss.com/docs/typography-plugin#choosing-a-gray-scale) to learn more.

* * *

## [HTML-based customization API](https://tailwindcss.com/blog/tailwindcss-typography-v0-5\#html-based-customization-api)

We've added tons of modifiers you can use to tweak specific elements in your prose styles, directly in your HTML:

```
<article class="prose prose-img:rounded-xl prose-headings:underline prose-a:text-blue-600">  {{ markdown }}</article>
```

This makes it easy to do things like style links to match your brand, add a border radius to images, and tons more.

Check out the [element modifiers](https://v3.tailwindcss.com/docs/typography-plugin#element-modifiers) documentation to learn more.

* * *

## [Undo prose styles](https://tailwindcss.com/blog/tailwindcss-typography-v0-5\#undo-prose-styles)

Ever needed to stick some non-content HTML in the middle of your content? Now you can wrap that with `not-prose` to make sure the prose styles don't interfere with it:

```
<article class="prose">  <h1>My Heading</h1>  <p>...</p>  <div class="not-prose">    <!-- Some HTML that needs to be prose-free -->  </div>  <p>...</p>  <!-- ... --></article>
```

* * *

Ready to try it out? Check out the [typography plugin documentation](https://v3.tailwindcss.com/docs/typography-plugin) to learn more and get started.

## Get all of our updates directly to your inbox.  Sign up for our newsletter.

Subscribe

### Tailwind CSS

- [Documentation](https://tailwindcss.com/docs)
- [Playground](https://play.tailwindcss.com/)
- [Blog](https://tailwindcss.com/blog)
- [Showcase](https://tailwindcss.com/showcase)
- [Sponsor](https://tailwindcss.com/sponsor)

### Resources

- [Refactoring UI](https://www.refactoringui.com/)
- [Headless UI](https://headlessui.com/)
- [Heroicons](https://heroicons.com/)
- [Hero Patterns](https://heropatterns.com/)

### [Tailwind Plus](https://tailwindcss.com/plus?ref=footer)

- [UI Blocks](https://tailwindcss.com/plus/ui-blocks?ref=footer)
- [Templates](https://tailwindcss.com/plus/templates?ref=footer)
- [UI Kit](https://tailwindcss.com/plus/ui-kit?ref=footer)

### Community

- [GitHub](https://github.com/tailwindlabs/tailwindcss)
- [Discord](https://tailwindcss.com/sponsor#insiders)
- [X](https://x.com/tailwindcss)

### Tailwind CSS

- [Documentation](https://tailwindcss.com/docs)
- [Playground](https://play.tailwindcss.com/)
- [Blog](https://tailwindcss.com/blog)
- [Showcase](https://tailwindcss.com/showcase)
- [Sponsor](https://tailwindcss.com/sponsor)

### [Tailwind Plus](https://tailwindcss.com/plus?ref=footer)

- [UI Blocks](https://tailwindcss.com/plus/ui-blocks?ref=footer)
- [Templates](https://tailwindcss.com/plus/templates?ref=footer)
- [UI Kit](https://tailwindcss.com/plus/ui-kit?ref=footer)

### Resources

- [Refactoring UI](https://www.refactoringui.com/)
- [Headless UI](https://headlessui.com/)
- [Heroicons](https://heroicons.com/)
- [Hero Patterns](https://heropatterns.com/)

### Community

- [GitHub](https://github.com/tailwindlabs/tailwindcss)
- [Discord](https://tailwindcss.com/sponsor#insiders)
- [X](https://x.com/tailwindcss)

Copyright © 2025 Tailwind Labs Inc.· [Trademark Policy](https://tailwindcss.com/brand)