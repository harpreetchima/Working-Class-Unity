---
url: "https://daisyui.com/docs/install/django/"
title: "Install daisyUI for Django — daisyUI Tailwind CSS Component UI Library"
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

Django

Django is a Python framework for building web applications

[Website](https://www.djangoproject.com/) [GitHub](https://github.com/django/django)

# Install daisyUI for Django

How to install Tailwind CSS and daisyUI in a Django project, without Node.js

### [Link to heading](https://daisyui.com/docs/install/django/\#1-create-a-new-django-project) 1\. Create a new Django project

Install Python according to the [official Python docs](https://www.python.org/)

Install Django

Terminal

```
python -m pip install Django
```

Create a new Django project called `myapp` and navigate into the project directory

Terminal

```
django-admin startproject myapp
cd myapp
```

### [Link to heading](https://daisyui.com/docs/install/django/\#2-create-a-homepage-in-django) 2\. Create a homepage in Django

Create a template file

myapp/templates/index.html

```
<!DOCTYPE html>
<html>
<head>
    <title>My Django App</title>
    {% load static %}
    <link href="{% static 'css/output.css' %}" rel="stylesheet" type="text/css" />
</head>
<body>
    <button class="btn btn-primary">Hello daisyUI</button>
</body>
</html>
```

Create a myapp/views.py file

myapp/views.py

```
from django.shortcuts import render

def home(request):
    return render(request, 'index.html')
```

Add the view to the myapp/urls.py file

myapp/urls.py

```
  from django.contrib import admin
  from django.urls import path
+ from . import views

  urlpatterns = [\
      path("admin/", admin.site.urls),\
+     path("", views.home, name="home"),\
  ]
```

Add the app name to myapp/settings.py

myapp/settings.py

```
  INSTALLED_APPS = [\
      "django.contrib.admin",\
      "django.contrib.auth",\
      "django.contrib.contenttypes",\
      "django.contrib.sessions",\
      "django.contrib.messages",\
      "django.contrib.staticfiles",\
+     "myapp",\
  ]
```

### [Link to heading](https://daisyui.com/docs/install/django/\#3-add-tailwind-css-and-daisyui) 3\. Add Tailwind CSS and daisyUI

Fast install

The command below,

- Downloads latest version of Tailwind CSS Standalone executable file for your OS, [from GitHub](https://github.com/tailwindlabs/tailwindcss/releases/latest)
- Downloads latest version of daisyUI bundle file [from GitHub](https://github.com/saadeghi/daisyui/releases/latest)
- Creates `input.css` file with Tailwind CSS and daisyUI
- Generates `output.css` file for the first time

**Linux** or **MacOS**: (see the [install script](https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/docs/static/fast))

Terminal

```
cd myapp/static/css && curl -sL daisyui.com/fast | bash
```

**Windows**: (see the [install script](https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/docs/static/fast.ps1))

PowerShell

```
cd myapp/static/css && powershell -c "irm daisyui.com/fast.ps1 | iex"
```

Manual install

#### [Link to heading](https://daisyui.com/docs/install/django/\#get-tailwind-css-executable) Get Tailwind CSS executable

Follow [Tailwind CSS guide](https://tailwindcss.com/blog/standalone-cli) and get the latest version of Tailwind CSS executable for your OS.

For example:

Terminal

```
# Run the corresponding command for your OS

# Linux
curl -sLo myapp/static/css/tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-arm64
curl -sLo myapp/static/css/tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-arm64-musl
curl -sLo myapp/static/css/tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64
curl -sLo myapp/static/css/tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-linux-x64-musl

# MacOS
curl -sLo myapp/static/css/tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-arm64
curl -sLo myapp/static/css/tailwindcss https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-macos-x64

# Windows
curl -sLo myapp/static/css/tailwindcss.exe https://github.com/tailwindlabs/tailwindcss/releases/latest/download/tailwindcss-windows-x64.exe
```

Make the file executable (For Linux and MacOS):

Terminal

```
chmod +x myapp/static/css/tailwindcss
```

#### [Link to heading](https://daisyui.com/docs/install/django/\#get-daisyui-bundle-js-file) Get daisyUI bundle JS file

Run this code to download latest version of daisyUI as a single js file and put it next to Tailwind's executable file.

Terminal

```
curl -sLO myapp/static/css/daisyui.mjs https://github.com/saadeghi/daisyui/releases/latest/download/daisyui.mjs
curl -sLO myapp/static/css/daisyui-theme.mjs https://github.com/saadeghi/daisyui/releases/latest/download/daisyui-theme.mjs
```

#### [Link to heading](https://daisyui.com/docs/install/django/\#add-tailwind-css-and-daisyui) Add Tailwind CSS and daisyUI

Add Tailwind CSS and daisyUI to your CSS file.

Address your HTML and other markup files in the `source` function.

myapp/static/css/input.css

```
@import "tailwindcss";

@source not "./tailwindcss";
@source not "./daisyui{,*}.mjs";

@plugin "./daisyui.mjs";

/* Optional for custom themes – Docs: https://daisyui.com/docs/themes/#how-to-add-a-new-custom-theme */
@plugin "./daisyui-theme.mjs"{
  /* custom theme here */
}
```

### [Link to heading](https://daisyui.com/docs/install/django/\#4-run-the-tailwind-css-executable-to-generate-outputcss) 4\. Run the Tailwind CSS executable to generate output.css

Using `--watch` will automatically update the output.css file when you change the input.css file.

For CI/CD, run the command without `--watch` to generate the output.css file once.

Terminal

```
myapp/static/css/tailwindcss -i myapp/static/css/input.css -o myapp/static/css/output.css --watch
# For Windows
myappstaticcss\tailwindcss.exe -i myapp/static/css/input.css -o myapp/static/css/output.css --watch
```

### [Link to heading](https://daisyui.com/docs/install/django/\#7-run-the-django-server) 7\. Run the Django server

Run the Django server on another terminal tab

Terminal

```
python manage.py runserver
```

Now you can use daisyUI class names!

[NextUse](https://daisyui.com/docs/use/)

Do you have a question? [Ask on GitHub](https://github.com/saadeghi/daisyui/discussions) or [Discord server](https://daisyui.com/discord/)

Do you like daisyUI? [Post about it!](https://x.com/intent/post?text=daisyUI%20%0D%0AComponents%20for%20Tailwind%20CSS%20%0D%0Ahttps://daisyui.com)

Support daisyUI's development: [Open Collective](https://opencollective.com/daisyui)

[Edit this page on GitHub](https://github.com/saadeghi/daisyui/blob/master/packages/docs/src/routes/(routes)/docs/install/django/+page.md?plain=1)

[Text version for AI prompts](https://raw.githubusercontent.com/saadeghi/daisyui/refs/heads/master/packages/docs/src/routes/(routes)/docs/install/django/+page.md?plain=1)

![daisyUI store](https://img.daisyui.com/images/store/nexus.webp)

## NEXUS  Official daisyUI Dashboard Template

## Available on daisyUI store

[More details](https://daisyui.com/store/)

[![Official daisyUI](https://img.daisyui.com/images/store/banner/figma.webp)\\
\\
Official daisyUI\\
\\
Figma Library](https://daisyui.com/store/daisyui-figma-library/)

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