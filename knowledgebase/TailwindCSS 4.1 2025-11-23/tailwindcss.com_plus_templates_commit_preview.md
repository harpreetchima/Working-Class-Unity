---
url: "https://tailwindcss.com/plus/templates/commit/preview"
title: "Commit - Tailwind CSS Changelog Template"
---

# [Commit](https://tailwindcss.com/plus/templates/commit)

·

Changelog template

- Next.js
- Tailwind CSS
- React
- MDX
- TypeScript

[View full screen version of template](https://commit.tailwindui.com/)

[Get template](https://tailwindcss.com/plus/templates/commit#pricing)

Commit - Open-source Git client for macOS minimalists

[Commit](https://commit.tailwindui.com/)

# Open-source Git clientfor macOS minimalists

Commit is a lightweight Git client you can open from anywhere any time you’re ready to commit your work with a single keyboard shortcut. It’s fast, beautiful, and completely unnecessary.

Email addressGet updates→

[Documentation](https://commit.tailwindui.com/#) [GitHub](https://commit.tailwindui.com/#) [RSS](https://commit.tailwindui.com/feed.xml)

Brought to you by [Joe Davola](https://commit.tailwindui.com/#)

Switch to dark theme

[Apr 6, 2023](https://commit.tailwindui.com/#commit-message-suggestions)

[Apr 6, 2023](https://commit.tailwindui.com/#commit-message-suggestions)

![](https://commit.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcommit-suggestions.5cf789bd.png&w=3840&q=75)

## [Commit message suggestions](https://commit.tailwindui.com/\#commit-message-suggestions)

In the latest release, I've added support for commit message and description suggestions via an integration with OpenAI. Commit looks at all of your changes, and feeds that into the machine with a bit of prompt-tuning to get back a commit message that does a surprisingly good job at describing the intent of your changes.

It's also been a pretty helpful way to remind myself what the hell I was working on at the end of the day yesterday when I get back to my computer and realize I didn't commit any of my work.

### Improvements

- Added commit message and description suggestions powered by OpenAI
- Fixed race condition that could sometimes leave you in a broken rebase state
- Improved active project detection to try and ignore file changes triggered by the system instead of the user
- Fixed bug that sometimes reported the wrong number of changed files

[Mar 17, 2023](https://commit.tailwindui.com/#project-configuration-files)

[Mar 17, 2023](https://commit.tailwindui.com/#project-configuration-files)

![](https://commit.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fconfiguration-files.7610785b.png&w=3840&q=75)

## [Project configuration files](https://commit.tailwindui.com/\#project-configuration-files)

I've added support for creating per-project `.commitrc` files that override your global settings for that particular project. Went with YAML for these because personally I'm sick of quoting keys in JSON all the time, or accidentally leaving in a trailing comma.

### Improvements

- Added per-project `.commitrc` configuration files
- Improved performance when working with projects with large binary files
- Fixed a bug that could cause Commit to crash when autocommitting after deleting a recently active branch

[Mar 6, 2023](https://commit.tailwindui.com/#dark-mode-support)

[Mar 6, 2023](https://commit.tailwindui.com/#dark-mode-support)

![](https://commit.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdark-mode.93eb9a82.png&w=3840&q=75)

## [Dark mode support](https://commit.tailwindui.com/\#dark-mode-support)

I released this thing last week hoping a couple of people would say "awesome job" and make me feel good about what I'd built but instead I just got a ton of people shaming me on X for being such a horrible person for only shipping a light UI.

### Improvements

- Added dark mode support
- Improved input field responsiveness when writing a commit message in a project with a large number of changed files
- Made keyboard shortcut for opening the Commit window customizable
- Deleted my X account

[Mar 3, 2023](https://commit.tailwindui.com/#commit-v010)

[Mar 3, 2023](https://commit.tailwindui.com/#commit-v010)

![](https://commit.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffirst-release.c5cb86d1.png&w=3840&q=75)

## [Commit v0.1.0](https://commit.tailwindui.com/\#commit-v010)

Commit is a command palette-style Git client you can pull up from anywhere with a keyboard shortcut that makes it really easy to commit your work. It uses the "last modified" timestamp of the files in all of your projects to automatically know which project you're in the middle of working on, so any time you pull up the UI it's already got the right project selected — you just have to type your commit message, hit `Cmd` \+ `Enter` and your changes are captured.

I'd be lying if I really thought this was that useful but I was looking for an excuse to learn macOS development and here we are. It's open source at least so maybe you can find something interesting in the code even if the app itself is a total waste of hard drive space.