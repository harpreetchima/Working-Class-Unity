---
url: "https://tailwindcss.com/blog/utility-friendly-transitions-with-tailwindui-react"
title: "Utility-Friendly Transitions with @tailwindui/react - Tailwind CSS"
---

[Home](https://tailwindcss.com/) v4.1

`⌘K`  `Ctrl K` [Docs](https://tailwindcss.com/docs) [Blog](https://tailwindcss.com/blog) [Showcase](https://tailwindcss.com/showcase) [Sponsor](https://tailwindcss.com/sponsor) [Plus](https://tailwindcss.com/plus?ref=top) [GitHub repository](https://github.com/tailwindlabs/tailwindcss)

August 27, 2020

# Utility-Friendly Transitions with @tailwindui/react

![](https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frobinmalfait.e0195e4e.jpg&w=96&q=75)

Robin Malfait

[@malfaitrobin](https://twitter.com/malfaitrobin)

Back in February we released [Tailwind UI](https://tailwindui.com/), a directory of HTML component examples designed for you to copy and paste into your Tailwind projects as a starting point for your own designs.

We built Tailwind UI as an HTML-only, bring-your-own-JS product to make it as universal as possible, but many designs are inherently interactive and porting those interactive behaviors between JavaScript frameworks is unfortunately not always very easy.

One example of this is enter/leave transitions, like when you toggle a dropdown menu and see it fade in and out.

Vue.js has a really neat `<transition>` component for enter/leave transitions with a very utility-friendly API:

```
<transition  enter-active-class="transition-opacity duration-75"  enter-from-class="opacity-0"  enter-to-class="opacity-100"  leave-active-class="transition-opacity duration-150"  leave-from-class="opacity-100"  leave-to-class="opacity-0">  <div v-show="isShowing">    <!-- Will fade in and out -->  </div></transition>
```

But replicating this in React turns out to be much more difficult, because until now there hasn't been a library designed to support utility-driven transition styling.

**So earlier this week, we released the very first version of [@tailwindui/react](https://github.com/tailwindlabs/tailwindui-react), a library that provides low-level primitives for turning utility-first HTML into fully interactive UIs.**

We'll be adding many more components in the coming months _(like dropdowns, toggles, modals, and more, and for Vue too!)_ but thought we'd start with a `<Transition>` component to at least get the current Tailwind UI experience for React users up to par with what's possible in Vue and Alpine.js.

Here's what it looks like to use:

```
import { Transition } from "@tailwindui/react";import { useState } from "react";function MyComponent() {  const [isOpen, setIsOpen] = useState(false);  return (    <div>      <button onClick={() => setIsOpen(!isOpen)}>Toggle</button>      <Transition        show={isOpen}        enter="transition-opacity duration-75"        enterFrom="opacity-0"        enterTo="opacity-100"        leave="transition-opacity duration-150"        leaveFrom="opacity-100"        leaveTo="opacity-0"      >        {/* Will fade in and out */}      </Transition>    </div>  );}
```

[Read the documentation](https://github.com/tailwindlabs/tailwindui-react) to learn more about advanced functionality, like:

- Rendering without an extra DOM element
- Co-ordinating related transitions
- Transitioning on initial mount.

Check it out in action in this CodeSandbox demo:

dreamy-villani-1lz49 - CodeSandbox

CodeSandbox

# dreamy-villani-1lz49

![](https://avatars1.githubusercontent.com/u/1834413?v=3)RobinMalfait

228.8k

9

178

[Edit Sandbox](https://codesandbox.io/p/sandbox/dreamy-villani-1lz49?from-embed)

Files

public

src

App.js

Dropdown.js

LayoutWithSidebar.js

index.js

package.json

Dependencies

[@tailwindui/react](https://codesandbox.io/examples/package/@tailwindui/react) 0.1.0

[react](https://codesandbox.io/examples/package/react) 16.12.0

[react-dom](https://codesandbox.io/examples/package/react-dom) 16.12.0

[react-scripts](https://codesandbox.io/examples/package/react-scripts) 3.0.1

[Open Sandbox](https://codesandbox.io/p/sandbox/dreamy-villani-1lz49?from-embed)

App.js

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

21

22

importReactfrom"react";

import { Dropdown } from"./Dropdown";

import { LayoutWithSidebar } from"./LayoutWithSidebar";

// This is an example project to showcase the Transition component.

// You can look in the \`Dropdown\` and \`LayoutWithSidebar\` files to see how this is implemented!

exportdefaultfunctionApp() {

return(

    <Shell>

{/\* This is a distilled implementation of this component: \*/}

{/\*https://tailwindui.com/components/application-ui/page-examples/home-screens#component-d7cea65e442e0c2c85f158472dd2a846\*/}

      <LayoutWithSidebar>

        <divclassName="space-y-3">

          <h2className="text-gray-500 text-xs font-medium uppercase tracking-wide">

            Pinned Projects

          </h2>

          <ulclassName="grid grid-cols-1 gap-5 grid-cols-4">

            <liclassName="col-span-1 flex shadow-sm rounded-md">

              <divclassName="flex-shrink-0 flex items-center justify-center w-16 bg-pink-600 text-white text-sm leading-5 font-medium rounded-l-md">

                TUI

React App

Search

## Pinned Projects

- TUI



[@tailwindui/react](https://github.com/tailwindlabs/tailwindui-react)

16 Components


Console

0

Problems

0

React DevTools

0

AllInfoWarningErrorDebug

Try it out on your projects, and if you run into any problems, [report an issue on GitHub](https://github.com/tailwindlabs/tailwindui-react).

Want to talk about this post? [Discuss this on GitHub →](https://github.com/tailwindcss/tailwindcss/discussions/2262)

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