---
url: "https://daisyui.com/blueprint/"
title: "daisyUI and Tailwind CSS MCP server"
---

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

Version 1.2

# BLUEPRINT

![daisyUI](https://img.daisyui.com/images/daisyui/mark.svg)

Official daisyUI Code Generator MCP Server

Provides on-demand, fine-tuned daisyUI design system resources to AI

daisyUI code generation with  10x code quality \+  10x faster result and 90% less token cost

Generate unlimited and accurate daisyUI code, with any code editor, any LLM

Convert Image\|Figma\|Tailwind CSS\|Bootstrap to daisyUI

Install guide [Get the license](https://daisyui.com/blueprint/checkout/)

Compatible with

![Cursor](https://img.daisyui.com/images/logos/cursor.webp?2)![VS Code](https://img.daisyui.com/images/logos/vscode.webp)![Claude](https://img.daisyui.com/images/logos/claude.webp)

and more

Your text editor

Design System

Resources

(on-demand)

```
<body class="flex min-h-screen items-center justify-center bg-base-200">
    <div class="card w-96 bg-base-100 card-border">
      <div class="card-body">
        <h2 class="mb-4 card-title text-2xl font-bold">Login</h2>

        <form>
          <!-- Email Input -->
          <div class="mb-4">
            <label class="mb-2 block text-sm font-medium">Email</label>
            <input type="email" class="validator input input-md w-full"
              placeholder="mail@site.com" required />
            <div class="validator-hint hidden text-sm">Please enter a valid email address</div>
          </div>

          <!-- Password Input -->
          <div class="mb-4">
            <label class="mb-2 block text-sm font-medium">Password</label>
            <input type="password" class="validator input input-md w-full"
              placeholder="Enter your password" required minlength="8" />
            <div class="validator-hint hidden text-sm">Password must be at least 8 characters</div>
          </div>

          <!-- Remember Me & Forgot Password -->
          <div class="mb-6 flex items-center justify-between">
            <label class="flex cursor-pointer items-center gap-2">
              <input type="checkbox" class="checkbox checkbox-sm" />
              <span class="text-sm">Remember me</span>
            </label>
            <a href="#" class="link text-sm link-hover">Forgot password?</a>
          </div>

          <!-- Submit Button -->
          <div class="card-actions">
            <button type="submit" class="btn btn-block">Login</button>
          </div>
        </form>

        <!-- Sign up link -->
        <div class="mt-4 text-center">
          <span class="text-sm">Don't have an account? </span>
          <a href="#" class="link text-sm link-hover">Sign up</a>
        </div>
      </div>
    </div>
  </body>
```

Create a daisyUI login form with form validator, a remember me checkbox and a forgot
password link

Thought for 1s

Fetching required daisyUI code snippets

Ran daisyUI BlueprintMCP tool

Received required components from MCP:

card, input, button, link, checkbox, validator

![button](https://img.daisyui.com/images/components-screenshot/checkbox.png)

![button](https://img.daisyui.com/images/components-screenshot/button.png)

![button](https://img.daisyui.com/images/components-screenshot/input.png)

![button](https://img.daisyui.com/images/components-screenshot/card.png)

Reading specs, docs and examples.

Done.

Creating login form with daisyUI components with a remember me checkbox and a forgot
password link

index.html +50-1

Login form made with daisyUI components has been added to index.html using daisyUI Blueprint
MCP server.

index.html

Ask AI...

Agent

daisyUI Blueprint

Problem

## Why AI sucks at UI?

If you open an LLM and simply ask for UI code, you're probably going to get broken,
outdated or mediocre results. But why is that?

To generate a good looking UI, LLM needs:

1. Docs and tutorials
2. Design system resources
3. List of all available components and their specs
4. Code examples and syntax
5. Design tokens, colors, states, variants and variables
6. Modification guide and best practices

I see, let's put them all in a 600KB .md file and give it to LLM.

That should work!

Well... no.

Providing too much context won't work either.

LLM will ignore most of it, hallucinates the rest and lies to you about it.

Create a daisyUI login form with form validator, a remember me checkbox and a forgot
password link

Thought for 5s

Let me guess how a daisyUI login form looks like...

Based on my 2023 coding knowledge, let me guess the syntax...

I'm not sure what's the correct way to put it together.
Let me search the web...

I found 20 random pages that I'm not going to read anyway. But who cares... Here's a
mediocre AI slop for you.

index.html +183-29

Do you want me to add more purple gradients? I love purple.

index.html

Ask AI...

Agent

No MCP

Solution

## Providing context to LLM   right time, right place

MCP (Model Context Protocol) is an API protocol for AI to get accurate, reliable context
information on demand, instead of guessing or searching through irrelevant data
everytime.

The official daisyUI Blueprint MCP server provide real-time context to the LLM, using MCP tools, MCP prompts and MCP resources.

No more guessworks, no hallucinations, no outdated syntax.

It increases code quality, because LLM gains access to the correct context right away instead of reading a
big llms.txt file or searching the web for random pages, or guessing the results based
on outdated info.

Providing the right context at the right time means fast, efficient, and accurate
results. The LLM receives exactly what it needs, which means faster code generation and less token usage.

Create a daisyUI form for profile settings with form validator and a save button

Thought for 1s

Fetching daisyUI code snippets and design system resources...

Introducing

BLUEPRINT

MCP server

## Design System    Resource Provider    for daisyUI

Blueprint MCP server provides curated resources to your LLM

- daisyUI code snippets
- Pictures of daisyUI components
- Docs, specs, class names, variants, variables
- Layout examples
- Best practices

This will guarantee an accurate and efficient result, without guessworks or
hallucinations.

Using daisyUI Blueprint MCP

Ran daisyUI BlueprintMCP tool

Received required components from MCP:

checkbox, toggle, radio, button, input, select, label, fieldset, validator, accordion

![button](https://img.daisyui.com/images/components-screenshot/checkbox.png)

![button](https://img.daisyui.com/images/components-screenshot/toggle.png)

![button](https://img.daisyui.com/images/components-screenshot/radio.png)

![button](https://img.daisyui.com/images/components-screenshot/input.png)

![button](https://img.daisyui.com/images/components-screenshot/select.png)

![button](https://img.daisyui.com/images/components-screenshot/accordion.png)

![button](https://img.daisyui.com/images/components-screenshot/button.png)

Reading specs, docs and examples.

Done.

Creating a daisyUI form for profile settings using the provided resources...

index.html +50-1

Profile settings form made with daisyUI components has been added to index.html using daisyUI
Blueprint MCP server.

index.html

Ask AI...

Agent

daisyUI Blueprint

daisyUI

BLUEPRINT

: The essential MCP server

for higher code quality, faster LLM results, and less token cost

![Cursor](https://img.daisyui.com/images/logos/cursor.webp?2)![VS Code](https://img.daisyui.com/images/logos/vscode.webp)![Claude](https://img.daisyui.com/images/logos/claude.webp)![Zed](https://img.daisyui.com/images/logos/zed.webp)![Cline](https://img.daisyui.com/images/logos/cline.webp)![ChatGPT](https://img.daisyui.com/images/logos/chatgpt.webp)![Windsurf](https://img.daisyui.com/images/logos/windsurf.webp)

MCP Tool

## 1.   On-demand code Snippets

Blueprint MCP server provides curated daisyUI code snippets to your LLM

Including:

- Component examples
- Page layouts
- UI blocks
- Useful combinations

It also provides actual picture of the components to help the LLM better understand the design system, and generate a more
accurate code.

Using daisyUI Blueprint MCP

Received 4 components from MCP:

togglefiltermodaldrawer

Components preview:

![button](https://img.daisyui.com/images/components-screenshot/toggle.png)

![button](https://img.daisyui.com/images/components-screenshot/modal.png)

![button](https://img.daisyui.com/images/components-screenshot/filter.png)

![button](https://img.daisyui.com/images/components-screenshot/drawer.png)

Analyzed code snippets, layouts, UI blocks and usage examples.

index.html +50-1

Page generated successfully with daisyUI code snippets.

index.html

Ask AI...

Agent

daisyUI Blueprint

Generate daisyUI code with AI - Blueprint MCP server - YouTube

[Photo image of Pouya Saadeghi](https://www.youtube.com/channel/UCaWiPNaXynhvv02CV9NG0Eg?embeds_referring_euri=https%3A%2F%2Fdaisyui.com%2F)

Pouya Saadeghi

233 subscribers

[Generate daisyUI code with AI - Blueprint MCP server](https://www.youtube.com/watch?list=TLGGDMGSv5K9QNoyNDExMjAyNQ&v=ICmVdS-sJKU)

Pouya Saadeghi

Search

1/1

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

[Previous (SHIFT+p)](https://www.youtube.com/watch?list=TLGGDMGSv5K9QNoyNDExMjAyNQ&v=ICmVdS-sJKU "Previous (SHIFT+p)")[Next (SHIFT+n)](https://www.youtube.com/watch?list=TLGGDMGSv5K9QNoyNDExMjAyNQ&v=ICmVdS-sJKU "Next (SHIFT+n)")

/

•Live

•

MCP Resource

## 2.   Design system resources

Blueprint MCP server provides specific details about each component. Including dimensionsspacingvariantsvariables and more

This helps the LLM to better understand the design system and generate a higher quality
UI. Knowing the exact size of components, their variants and how they they look like in
practice, the LLM can make more informed decisions when generating code instead of
guessing the styles just by looking at the name of the component.

Using daisyUI Blueprint MCP

Received checkbox component from daisyUI Blueprint MCP server.

Reading design system specs for daisyUI checkbox component.

According to daisyUI design system specs, the checkbox component is 24px by 24px. That's why
the alignment looks off. Let's use checkbox-sm variant instead, so it fits better with the
other form elements.

index.html +1-1

Checkbox component updated to checkbox-sm variant successfully. Now the design looks perfect.

index.html

Ask AI...

Agent

daisyUI Blueprint

MCP ToolExperimental

## 3.   Convert Figma ➞ daisyUI

Blueprint MCP server can generate a daisyUI code based on a figma design.

This is done by processing the properties of the design elements, their styles, and
layout from Figma API to LLM along with daisyUI component details so LLM can map the design to the closest daisyUI
components.

This works with any UI made with Figma, whether if
you used the official daisyUI Figma library or not. AI will understand the context of
the elements and generate the closest possible daisyUI code.

For example if have a login form in Figma made with Material design, AI will still be
able to generate the equivalent daisyUI code for it!

The accuracy of the generated code depends on the complexity of the design.

For best result, convert smaller pieces of the design at a time, instead of the whole page.

Figma API setup guide

Convert this Figma frame to daisyUI

https://www.figma.com/file/ABCDEFG1234567/my-design?node-id=100%3A200

Thought for 1s

Using daisyUI Blueprint Figma to daisyUI MCP tool

Received Figma design nodes from Figma API.

The figma design contains a pricing table with a toggle to switch between monthly and yearly
billing. There's a payment button at the bottom as well.

Using daisyUI Blueprint Get Snippet MCP tool to get required
daisyUI components that match the Figma design.

Received 4 components from MCP server:

cardtoggledividerbutton

Perfect! Now we can generate the daisyUI code for the Figma design using these components.

index.html +1-1

index.html file was updated successfully. The pricing table design from Figma is now implemented
using daisyUI components.

index.html

Ask AI...

Agent

daisyUI Blueprint

Convert Figma to daisyUI using daisyUI MCP server: Blueprint - YouTube

[Photo image of Pouya Saadeghi](https://www.youtube.com/channel/UCaWiPNaXynhvv02CV9NG0Eg?embeds_referring_euri=https%3A%2F%2Fdaisyui.com%2F)

Pouya Saadeghi

233 subscribers

[Convert Figma to daisyUI using daisyUI MCP server: Blueprint](https://www.youtube.com/watch?list=TLGG_zOp1P3FjdoyNDExMjAyNQ&v=4ZYKxkibJT0)

Pouya Saadeghi

Search

1/1

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

[Previous (SHIFT+p)](https://www.youtube.com/watch?list=TLGG_zOp1P3FjdoyNDExMjAyNQ&v=4ZYKxkibJT0 "Previous (SHIFT+p)")[Next (SHIFT+n)](https://www.youtube.com/watch?list=TLGG_zOp1P3FjdoyNDExMjAyNQ&v=4ZYKxkibJT0 "Next (SHIFT+n)")

/

•Live

•

MCP Prompt

## 4.   Convert Screenshot ➞ daisyUI

Attach a picture and receive daisyUI code!

This is a detailed prompt that generates daisyUI + Tailwind CSS code from a screenshot.

The prompt guides the AI to analyze the screenshot, identify UI components, and generate
the corresponding daisyUI code using existing daisyUI components which will be received
from daisyUI Blueprint MCP server.

This works with any screenshot of a web UI, whether
it's from a design tool, a live website, or a mobile app. AI will understand the context
of the elements and generate the closest daisyUI code.

The accuracy of the generated code depends on the clarity and complexity of the
screenshot.

For best result, use smaller parts of the UI instead of a full-page screenshot.

Convert this image to daisyUI code

![img](<Base64-Image-Removed>) settings-screenshot.png

Using daisyUI Blueprint MCP prompt

Image to daisyUI conversion

You are analyzing a UI screenshot to recreate it using daisyUI components.

Follow below steps strictly. If you miss any step, your code will be rejected.

\## Step By Step Instructions:

1\. Carefully examine the screenshot provided...

More

The screenshot shows a settings page with a sidebar on the left and various settings options
on the right. Now we need to identify the daisyUI components required to build this UI.

Using daisyUI Blueprint Get Snippet MCP tool to get required
daisyUI components that match the UI from the screenshot.

Received 7 components from MCP server:

drawernavbarmodaldropdownbuttontogglemenu

Perfect! Now we can generate the daisyUI code using these components.

index.html +123-1

index.html file was updated successfully.

index.html

Ask AI...

Agent

daisyUI Blueprint

MCP Prompt

## 5.   Convert Tailwind CSS ➞ daisyUI

Convert existing Tailwind CSS code to daisyUI components effortlessly!

This is a detailed prompt provided by Blueprint MCP server that helps AI to analyze
existing Tailwind CSS code blocks, identify UI components, that can be replaced with
daisyUI components, then it uses daisyUI MCP server to get the required components and
finally generates the updated code with daisyUI components.

This works best with well-structured Tailwind CSS code and clear design specifications.
For really complicated parts of your HTML, adding comments to the code can also help the
AI understand the semantics better and produce more accurate results.

Convert this page from Tailwind CSS to daisyUI

+page.svelte

Using daisyUI Blueprint MCP prompt

Tailwind CSS to daisyUI conversion

You are analyzing a Tailwind CSS page to recreate it using daisyUI components.

Follow below steps strictly. If you miss any step, your code will be rejected.

\## Step By Step Instructions:

1\. Carefully examine the each section of the page...

More

+page.svelte includes a settings UI with a sidebar on the left and various settings options
on the right. Now we need to identify the daisyUI components required to build this UI.

Using daisyUI Blueprint Get Snippet MCP tool to get required
daisyUI components that match the UI from the screenshot.

Received 7 components from MCP server:

drawernavbarmodaldropdownbuttontogglemenu

Perfect! Now we can generate the daisyUI code using these components.

+page.svelte +123-1

Done. All the the parts that could be converted to daisyUI components have been updated. Now
the page is smaller and uses less class names.

index.html

Ask AI...

Agent

daisyUI Blueprint

Convert Tailwind CSS code to daisyUI using Blueprint MCP server - YouTube

[Photo image of Pouya Saadeghi](https://www.youtube.com/channel/UCaWiPNaXynhvv02CV9NG0Eg?embeds_referring_euri=https%3A%2F%2Fdaisyui.com%2F)

Pouya Saadeghi

233 subscribers

[Convert Tailwind CSS code to daisyUI using Blueprint MCP server](https://www.youtube.com/watch?list=TLGG1osyFzwqRswyNDExMjAyNQ&v=S4Xz2iEMaAA)

Pouya Saadeghi

Search

1/1

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

[Previous (SHIFT+p)](https://www.youtube.com/watch?list=TLGG1osyFzwqRswyNDExMjAyNQ&v=S4Xz2iEMaAA "Previous (SHIFT+p)")[Next (SHIFT+n)](https://www.youtube.com/watch?list=TLGG1osyFzwqRswyNDExMjAyNQ&v=S4Xz2iEMaAA "Next (SHIFT+n)")

/

•Live

•

MCP Prompt

## 6.   Convert Bootstrap ➞ daisyUI

Convert existing Bootstrap code to daisyUI components effortlessly!

This is a detailed prompt provided by Blueprint MCP server that helps AI to analyze
existing Bootstrap code blocks, identify UI components, that can be replaced with
daisyUI components, then it uses daisyUI MCP server to get the required components and
finally generates the updated code with daisyUI components.

This works best with well-structured Bootstrap code and clear design specifications. For
really complicated parts of your HTML, adding comments to the code can also help the AI
understand the semantics better and produce more accurate results.

Convert this page from Bootstrap to daisyUI

index.php

Using daisyUI Blueprint MCP prompt

Bootstrap to daisyUI conversion

You are analyzing a Bootstrap page to recreate it using daisyUI components.

Follow below steps strictly. If you miss any step, your code will be rejected.

\## Step By Step Instructions:

1\. Carefully examine the each section of the page...

More

index.php includes a settings UI with a sidebar on the left and various settings options on
the right. Now we need to identify the daisyUI components required to build this UI.

Using daisyUI Blueprint Get Snippet MCP tool to get required
daisyUI components that match the UI from the screenshot.

Received 7 components from MCP server:

drawernavbarmodaldropdownbuttontogglemenu

Perfect! Now we can generate the daisyUI code using these components.

index.php +123-1

Done. All the the parts that could be converted to daisyUI components have been updated. Now
the page is smaller and uses less class names.

index.html

Ask AI...

Agent

daisyUI Blueprint

MCP Prompt

## 7.   Extract Color Palette from a picture to generate daisyUI Theme

Are you bad at color palettes? It was never easier to generate a custom daisyUI theme!

Attach any picture that you like its colors, and the AI will extract the color palette
for you.

Then daisyUI MCP server will generate a custom daisyUI theme based on the extracted
colors.

Generate a dark daisyUI theme based on the colors in this picture

![img](<Base64-Image-Removed>) my-cat.jpg

app.css

Using daisyUI Blueprint MCP prompt

Extract dominant colors from picture

You are analyzing a picture to create a color palette for a daisyUI theme based on
provided syntax.

Follow below steps strictly. If you miss any step, your code will be rejected.

\## Step By Step Instructions:

1\. Carefully examine the picture provided...

More

20 colors were extracted from the picture based on the instructions. Now we need to map the
colors to a daisyUI theme.

Using daisyUI Blueprint Get Snippet MCP tool to get required
daisyUI examples.

Received 2 snippets from MCP server:

colorscustom-theme

Perfect! Now we can generate a custom daisyUI theme with the extracted colors, based on the
instructions.

app.css +27-1

app.css file was updated successfully with a new custom daisyUI.

index.html

Ask AI...

Agent

daisyUI Blueprint

MCP Resource

## 8.   Layouts and code blocks

Blueprint MCP server includes layout examples and code blocks for useful design
patterns.

For example if you're making a dashboard, Blueprint MCP will look into the possible
layout structures and provide you the one that best fits your UI. And then it fills the
layout with the appropriate daisyUI components.

Additonally, there are code blocks for combination of different UI pieces. For example,
a responsive navbar with a button, a menu and a dropdown. It can be challenging to
connect them all together, but Blueprint MCP provides ready-to-use code snippets to help
you.

Create a collapsible daisyUI drawer sidebar. It should be icon only/or expanded on desktop.
I should be off-canvas on mobile. Put a menu inside the sidebar with 4 items: Dashboard,
Settings, Profile, Logout. Add proper icons. Also add a settings button at the bottom of the
sidebar.

Thought for 1s

Using daisyUI Blueprint MCP

Ran daisyUI BlueprintMCP tool

Received required code snippets from MCP:

collapsible sidebarnavbarmenubutton

Reading specs, docs and examples.

Done.

Perfect. Now let's combine these components into a cohesive layout, according to the
instructions provided and the design specs.

index.html +27-1

collapsible drawer sidebar was added to index.html

index.html

Ask AI...

Agent

daisyUI Blueprint

BLUEPRINT

vs. other tools

to generate daisyUI code

|  | daisyUI <br>BLUEPRINT<br> MCP | daisyUI llms.txt | Context7 MCP | GitMCP |
| --- | --- | --- | --- | --- |
| daisyUI Official |  |  |  |  |
| Fine-tuned for daisyUI |  |  | Impossible to fine-tune | Impossible to fine-tune |
| Data source | Authored & verified | Authored & verified | AI generated | AI generated |
| Resource accuracy | 100% accurate | 100% accurate | Confuses random repos | Confuses random pages |
| Includes unwanted context | No | Depends on the LLM | Yes | Yes |
| daisyUI Design system specs |  |  |  |  |
| Converts Figma to daisyUI |  |  |  |  |
| Converts Tailwind CSS to daisyUI |  |  |  |  |
| Converts Bootstrap to daisyUI |  |  |  |  |
| Generates themes from an image |  |  |  |  |
| Provides component pictures to AI |  |  |  |  |
| Generates AI slop | Less likely | depends on the LLM | More likely | More likely |
| Updates | 100% Synced with daisyUI | 100% Synced with daisyUI | Depends on a crawler | Depends on a crawler |
| Token usage efficiency | Super efficient | Not efficient | Wastes token on useless context | Wastes token on useless context |

Get Started with daisyUI

BLUEPRINT

- [Get a Licence](https://daisyui.com/blueprint/checkout/)
- Install MCP server
- Generate daisyUI code


## F.A.Q

If you have any questions before purchase

send me an email to pouya@daisyui.com

I will do my best to help you.

Is this one time payment or a subscription?

Both are possible. You can purchase a monthly licence, yearly license or a lifetime
license.

What happens after I pay?

You will receive an email address with a license key which you can use to activate the
MCP server. If you don't see the email, check your spam folder.

Will I receive updates?

Yes, the package will be updated automatically with latest version of daisyUI. New MCP
tools, MCP resources and MCP prompts will be added automatically.

Do I get customer support?

We offer support via Discord. You can join the server https://daisyui.com/discord and
ask your questions there. We will do our best to help you.

Can I cancel my subscription?

Yes you can cancel your subscription at any time. If you cancel, you will still have
access to the product until the end of your billing cycle.

Can I get a refund?

If there was an issue, send an email to help@daisyui.com so I can help you. I will do
my best to resolve the issue. We don't offer refunds for digital products, however if
there was a mistake in payment, for example if you paid twice, send an email to
help@daisyui.com.

I didn't receive the email

Please check your spam folder. If you still can't find it, send an email to
help@daisyui.com so I can help you.

I bought the wrong package

Send me an email at help@daisyui.com and I will help you get the right package.

There was an issue with the payment

If the payment failed and you didn't receive the product, it usually means the payment
didn't go through. Please try again. If the money was deducted from your account, it
will be refunded automatically within a week or two. If the issue persists, send an
email to help@daisyui.com so I can help you.

Official daisyUI Code Generator MCP Server

## BLUEPRINT

![Cursor](https://img.daisyui.com/images/logos/cursor.webp?2)![VS Code](https://img.daisyui.com/images/logos/vscode.webp)![Claude](https://img.daisyui.com/images/logos/claude.webp)

daisyUI Blueprint MCP server

Install guide [Get the license](https://daisyui.com/blueprint/checkout/)

![Cursor](https://img.daisyui.com/images/logos/cursor.webp?2) Cursor

1\. Get a [Blueprint License](https://daisyui.com/blueprint/checkout/)

2\. Click this button to open the MCP server in Cursor settings

[![Cursor](https://img.daisyui.com/images/logos/cursor.webp?2) Install MCP Server](https://cursor.com/en/install-mcp?name=daisyui-blueprint&config=eyJjb21tYW5kIjoibnB4IiwiYXJncyI6WyIteSIsImRhaXN5dWktYmx1ZXByaW50QGxhdGVzdCJdLCJlbnYiOnsiTElDRU5TRSI6IiIsIkVNQUlMIjoiIiwiRklHTUEiOiIifX0=)

3\. In the MCP settings page, add the following environment variables:

- LICENSE: Your license key
- EMAIL: Your email address

4\. Now tell the LLM to use daisyUI Blueprint MCP to access
the tools on demand.

Read [Cursor docs](https://cursor.com/docs/context/mcp) for more info about using MCP.

![VS Code](https://img.daisyui.com/images/logos/vscode.webp) VS Code

1\. Get a [Blueprint License](https://daisyui.com/blueprint/checkout/)

2\. In VS Code press `⌘ CMD` \+ `⇧ Shift` \+ `P` ( Or `Ctrl` \+ `Shift` \+ `P` )

3\. Search for MCP: Open User Configuration

4\. Add this and set your license key \+ email address in it

```
{
    "servers": {
      "daisyui-blueprint": {
        "type": "stdio",
        "command": "npx",
        "args": ["-y", "daisyui-blueprint@latest"],
        "env": {
          "LICENSE": "",
          "EMAIL": ""
        }
      }
    }
  }
```

5\. Now tell the LLM to use daisyUI Blueprint MCP to access
the tools on demand.

Read [VS Code docs](https://code.visualstudio.com/docs/copilot/customization/mcp-servers) for more info about using MCP.

![Claude](https://img.daisyui.com/images/logos/claude.webp) Claude Code

1\. Get a [Blueprint License](https://daisyui.com/blueprint/checkout/)

2\. Run this command

Figma API Key is optional - Only needed for Figma-to-code conversion

```
claude mcp add daisyui-blueprint
    --env LICENSE=YOUR_LICENSE_KEY
    --env EMAIL=YOUR_EMAIL
    --env FIGMA=YOUR_FIGMA_API_KEY
    -- npx -y daisyui-blueprint@latest
```

3\. Now tell the Claude Code to use daisyUI Blueprint MCP to access the tools on demand.

Read [Claude Code docs](https://docs.claude.com/en/docs/claude-code/mcp) for more info about using MCP.

Manual Setup

1\. Get a [Blueprint License](https://daisyui.com/blueprint/checkout/)

2\. Find and open MCP settings in your LLM tool or code editor

3\. Add this MCP server and put your license key + email address in it

```
"daisyui-blueprint": {
    "type": "stdio",
    "command": "npx",
    "args": ["-y", "daisyui-blueprint@latest"],
    "env": {
      "LICENSE": "",
      "EMAIL": ""
    }
  }
```

4\. Now tell the LLM to use daisyUI Blueprint MCP to access
the tools on demand.

Next: Setup Figma API key for Figma-to-code conversion

close

## Figma API setup guide

How to Figma API and generate daisyUI code from a Figma design file

This is an experimental feature. If results are not accurate, try a smaller section of the
design or simplify the design.

1\. Get a Figma Access Token from

Settings > Security > Personal Access Tokens > Generate new token

Required permissions:

- file\_content:read
- file\_metadata:read
- library\_assets:read
- library\_content:read
- team\_library\_content:read
- file\_dev\_resources:read

2\. Set the Figma API token inFIGMA environment
variable for the Blueprint MCP server

```
"daisyui-blueprint": {
    "type": "stdio",
    "command": "npx",
    "env": {
      "LICENSE": "YOUR LICENSE KEY",
      "EMAIL": "YOUR EMAIL",
      "FIGMA": "YOUR FIGMA API KEY"
    }
  }
```

3\. In Figma, right click on a section, choose Copy/Paste as > Copy link to selection

4\. In your editor, paste the link and ask the LLM to generate daisyUI code for that design.

close

[daisyUI](https://daisyui.com/)

Free Component library

For utility first CSS frameworks

[GitHub](https://github.com/saadeghi/daisyui)[Discord](https://daisyui.com/discord/)[OpenCollective](https://opencollective.com/daisyui)[NPM](https://www.npmjs.com/package/daisyui)[X](https://x.com/daisyui_)[Unpkg CDN](https://unpkg.com/browse/daisyui/)[JSdeliver CDN](https://www.jsdelivr.com/package/npm/daisyui)[StackBlitz](https://daisyui.com/stackblitz/)[CodePen](https://daisyui.com/codepen/)[Tailwind Play](https://daisyui.com/tailwindplay/)

[daisyUI Logo and brand](https://daisyui.com/brand/) [License](https://github.com/saadeghi/daisyui/blob/master/LICENSE) [FAQ](https://daisyui.com/docs/faq/) [Roadmap](https://daisyui.com/docs/roadmap/) [Changelog](https://daisyui.com/docs/changelog/) [Contributing](https://github.com/saadeghi/daisyui/blob/master/.github/CONTRIBUTING.md) [llms.txt](https://daisyui.com/llms.txt)

pages [How to install](https://daisyui.com/docs/install/) [How to use components](https://daisyui.com/docs/use/) [How to customize](https://daisyui.com/docs/customize/) [How to use themes](https://daisyui.com/docs/themes/) [Color system](https://daisyui.com/docs/colors/) [Config](https://daisyui.com/docs/config/) [Resources](https://daisyui.com/resources/) [Blog](https://daisyui.com/blog/) [Store](https://daisyui.com/store/) [daisyUI Figma Library](https://daisyui.com/store/daisyui-figma-library/)

Frameworks [Angular Component Library](https://daisyui.com/angular-component-library/) [Astro Component Library](https://daisyui.com/astro-component-library/) [Django Component Library](https://daisyui.com/django-component-library/) [HTMX Component Library](https://daisyui.com/htmx-component-library/) [Laravel Component Library](https://daisyui.com/laravel-component-library/) [Nextjs Component Library](https://daisyui.com/nextjs-component-library/) [Nuxt Component Library](https://daisyui.com/nuxt-component-library/) [Rails Component Library](https://daisyui.com/rails-component-library/) [React Component Library](https://daisyui.com/react-component-library/) [Svelte Component Library](https://daisyui.com/svelte-component-library/) [Vue Component Library](https://daisyui.com/vue-component-library/)

Compare libraries [MUI vs daisyUI](https://daisyui.com/compare/mui-vs-daisyui/) [shadcn/ui vs daisyUI](https://daisyui.com/compare/shadcn-vs-daisyui/) [Bootstrap vs daisyUI](https://daisyui.com/compare/bootstrap-vs-daisyui/) [Flowbite vs daisyUI](https://daisyui.com/compare/flowbite-vs-daisyui/) [Radix vs daisyUI](https://daisyui.com/compare/radix-vs-daisyui/) [Bulma vs daisyUI](https://daisyui.com/compare/bulma-vs-daisyui/) [NuxtUI vs daisyUI](https://daisyui.com/compare/nuxtui-vs-daisyui/) [HeroUI vs daisyUI](https://daisyui.com/compare/heroui-vs-daisyui/) [Preline UI vs daisyUI](https://daisyui.com/compare/preline-vs-daisyui/) [Chakra UI vs daisyUI](https://daisyui.com/compare/chakra-vs-daisyui/)

related projects [Theme Change](https://github.com/saadeghi/theme-change) [MaryUI (Laravel)](https://mary-ui.com/) [Feliz.DaisyUI (F#)](https://github.com/Dzoukr/Feliz.DaisyUI) [Phcurado (Phoenix)](https://github.com/phcurado/daisy_ui_components) [Laravel Starter Kit](https://github.com/aalaap/laravel-livewire-daisyui-starter-kit) [Tailscan extension](https://tailscan.com/?ref=daisyui)

[![Pouya Saadeghi](https://img.daisyui.com/images/profile/people/pouya-saadeghi.webp)\\
\\
Created by\\
\\
Pouya Saadeghi](https://x.com/saadeghi)

Get the daisyUI updates and news

Subscribe

We don't share your email address with anyone

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