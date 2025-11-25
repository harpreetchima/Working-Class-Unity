---
url: "https://nuxt.com/docs/4.x/community/framework-contribution"
title: "Framework · Nuxt Community v4"
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

- [Getting Help](https://nuxt.com/docs/4.x/community/getting-help)
- [Reporting Bugs](https://nuxt.com/docs/4.x/community/reporting-bugs)
- [Contribution](https://nuxt.com/docs/4.x/community/contribution)
- [Framework](https://nuxt.com/docs/4.x/community/framework-contribution)
- [Roadmap](https://nuxt.com/docs/4.x/community/roadmap)
- [Releases](https://nuxt.com/docs/4.x/community/changelog)

1. [Community](https://nuxt.com/docs/4.x/community)

# Framework

Copy page

Some specific points about contributions to the framework repository.

Once you've read the [general contribution guide](https://nuxt.com/docs/4.x/community/contribution), here are some specific points to make about contributions to the [`nuxt/nuxt`](https://github.com/nuxt/nuxt) repository.

## [Monorepo Guide](https://nuxt.com/docs/4.x/community/framework-contribution\#monorepo-guide)

- `packages/kit`: Toolkit for authoring Nuxt Modules, published as [`@nuxt/kit`](https://www.npmjs.com/package/@nuxt/kit).
- `packages/nuxt`: The core of Nuxt, published as [`nuxt`](https://www.npmjs.com/package/nuxt).
- `packages/schema`: Cross-version Nuxt typedefs and defaults, published as [`@nuxt/schema`](https://www.npmjs.com/package/@nuxt/schema).
- `packages/rspack`: The [Rspack](https://rspack.rs/) bundler for Nuxt, published as [`@nuxt/rspack-builder`](https://www.npmjs.com/package/@nuxt/rspack-builder).
- `packages/vite`: The [Vite](https://vite.dev/) bundler for Nuxt, published as [`@nuxt/vite-builder`](https://www.npmjs.com/package/@nuxt/vite-builder).
- `packages/webpack`: The [webpack](https://webpack.js.org/) bundler for Nuxt, published as [`@nuxt/webpack-builder`](https://www.npmjs.com/package/@nuxt/webpack-builder).

## [Setup](https://nuxt.com/docs/4.x/community/framework-contribution\#setup)

To contribute to Nuxt, you need to set up a local environment.

1. [Fork](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo) the [`nuxt/nuxt`](https://github.com/nuxt/nuxt) repository to your own GitHub account and then [clone](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) it to your local device.
2. Ensure using the latest [Node.js](https://nodejs.org/en)
3. Enable [Corepack](https://github.com/nodejs/corepack) to have `pnpm` and `yarn`


Terminal



```bash
corepack enable
```

4. Run `pnpm install --frozen-lockfile` to Install the dependencies with pnpm:



Terminal



```bash
pnpm install --frozen-lockfile
```



If you are adding a dependency, please use `pnpm add`.


The `pnpm-lock.yaml` file is the source of truth for all Nuxt dependencies.

5. Activate the passive development system



Terminal



```bash
pnpm dev:prepare
```

6. Check out a branch where you can work and commit your changes:



Terminal



```bash
git checkout -b my-new-branch
```


Then, test your changes against the [playground](https://nuxt.com/docs/4.x/community/framework-contribution#playground) and [test](https://nuxt.com/docs/4.x/community/framework-contribution#testing) your changes before submitting a pull request.

### [Playground](https://nuxt.com/docs/4.x/community/framework-contribution\#playground)

While working on a pull request, you will likely want to check if your changes are working correctly.

You can modify the example app in `playground/`, and run:

Terminal

```bash
pnpm dev
```

Please make sure not to commit it to your branch, but it could be helpful to add some example code to your PR description. This can help reviewers and other Nuxt users understand the feature you've built in-depth.

### [Testing](https://nuxt.com/docs/4.x/community/framework-contribution\#testing)

Every new feature should have a corresponding unit test (if possible). The `test/` directory in this repository is currently a work in progress, but do your best to create a new test following the example of what's already there.

Before creating a PR or marking it as ready-to-review, ensure that all tests pass by running:

Terminal

```bash
pnpm test
```

### [Linting](https://nuxt.com/docs/4.x/community/framework-contribution\#linting)

You might have noticed already that we use ESLint to enforce a coding standard.

Before committing your changes, to verify that the code style is correct, run:

Terminal

```bash
pnpm lint
```

You can use `pnpm lint --fix` to fix most of the style changes.

If there are still errors left, you must correct them manually.

### [Documentation](https://nuxt.com/docs/4.x/community/framework-contribution\#documentation)

If you are adding a new feature or refactoring or changing the behavior of Nuxt in any other manner, you'll likely want to document the changes. Please include any changes to the docs in the same PR. You don't have to write documentation up on the first commit (but please do so as soon as your pull request is mature enough).

Make sure to make changes according to the [Documentation Style Guide](https://nuxt.com/docs/4.x/community/contribution#documentation-style-guide).

### [Final Checklist](https://nuxt.com/docs/4.x/community/framework-contribution\#final-checklist)

When submitting your PR, there is a simple template that you have to fill out. Please tick all appropriate "answers" in the checklists.

## [Documentation Guide](https://nuxt.com/docs/4.x/community/framework-contribution\#documentation-guide)

If you spot an area where we can improve documentation or error messages, please do open a PR - even if it's just to fix a typo!

Make sure to make changes according to the [Documentation Style Guide](https://nuxt.com/docs/4.x/community/contribution#documentation-style-guide).

### [Quick Edits](https://nuxt.com/docs/4.x/community/framework-contribution\#quick-edits)

If you spot a typo or want to rephrase a sentence, you can click on the **Edit this page** link located on the right aside in the **Community** section.

Make the change directly in the GitHub interface and open a Pull Request.

### [Longer Edits](https://nuxt.com/docs/4.x/community/framework-contribution\#longer-edits)

The documentation content is inside the `docs/` directory of the [nuxt/nuxt](https://github.com/nuxt/nuxt) repository and written in markdown.

To preview the docs locally, follow the steps on [nuxt/nuxt.com](https://github.com/nuxt/nuxt.com) repository.

We recommend that you install the [MDC extension](https://marketplace.visualstudio.com/items?itemName=Nuxt.mdc) for VS Code.

### [Linting Docs](https://nuxt.com/docs/4.x/community/framework-contribution\#linting-docs)

Documentation is linted using [MarkdownLint](https://github.com/DavidAnson/markdownlint) and [case police](https://github.com/antfu/case-police) to keep the documentation cohesive.

Terminal

```bash
pnpm lint:docs
```

You can also run `pnpm lint:docs:fix` to highlight and resolve any lint issues.

### [Open a PR](https://nuxt.com/docs/4.x/community/framework-contribution\#open-a-pr)

Please make sure your PR title adheres to the [conventional commits](https://www.conventionalcommits.org/) guidelines.

Example of PR title

```bash
docs: update the section about the nuxt.config.ts file
```

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/5.community/5.framework-contribution.md)

[Contribution\\
\\
Nuxt is a community project - and so we love contributions of all kinds! ❤️](https://nuxt.com/docs/4.x/community/contribution) [Roadmap\\
\\
Nuxt is constantly evolving, with new features and modules being added all the time.](https://nuxt.com/docs/4.x/community/roadmap)

On this page

On this page

- [Monorepo Guide](https://nuxt.com/docs/4.x/community/framework-contribution#monorepo-guide)
- [Setup](https://nuxt.com/docs/4.x/community/framework-contribution#setup)
  - [Playground](https://nuxt.com/docs/4.x/community/framework-contribution#playground)
  - [Testing](https://nuxt.com/docs/4.x/community/framework-contribution#testing)
  - [Linting](https://nuxt.com/docs/4.x/community/framework-contribution#linting)
  - [Documentation](https://nuxt.com/docs/4.x/community/framework-contribution#documentation)
  - [Final Checklist](https://nuxt.com/docs/4.x/community/framework-contribution#final-checklist)
- [Documentation Guide](https://nuxt.com/docs/4.x/community/framework-contribution#documentation-guide)
  - [Quick Edits](https://nuxt.com/docs/4.x/community/framework-contribution#quick-edits)
  - [Longer Edits](https://nuxt.com/docs/4.x/community/framework-contribution#longer-edits)
  - [Linting Docs](https://nuxt.com/docs/4.x/community/framework-contribution#linting-docs)
  - [Open a PR](https://nuxt.com/docs/4.x/community/framework-contribution#open-a-pr)

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