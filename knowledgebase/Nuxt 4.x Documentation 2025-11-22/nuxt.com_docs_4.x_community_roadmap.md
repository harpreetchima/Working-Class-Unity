---
url: "https://nuxt.com/docs/4.x/community/roadmap"
title: "Roadmap · Nuxt Community v4"
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

# Roadmap

Copy page

Nuxt is constantly evolving, with new features and modules being added all the time.

[Blog](https://nuxt.com/blog) See our blog for the latest framework and ecosystem announcements.

## [Status Reports](https://nuxt.com/docs/4.x/community/roadmap\#status-reports)

[https://github.com/nuxt/nuxt/issues/13653](https://github.com/nuxt/nuxt/issues/13653) Documentation Progress

[https://github.com/nuxt/nuxt/discussions/16119](https://github.com/nuxt/nuxt/discussions/16119) Rendering Optimizations: Today and Tomorrow

[https://github.com/nuxt/image/discussions/563](https://github.com/nuxt/image/discussions/563) Nuxt Image: Performance and Status

## [Roadmap](https://nuxt.com/docs/4.x/community/roadmap\#roadmap)

In roadmap below are some features we are planning or working on at the moment.

Check [Discussions](https://github.com/nuxt/nuxt/discussions) and [RFCs](https://github.com/nuxt/nuxt/discussions/categories/rfcs) for more upcoming features and ideas.

| Milestone | Expected date | Notes | Description |
| --- | --- | --- | --- |
| SEO & PWA | 2025 | [nuxt/nuxt#18395](https://github.com/nuxt/nuxt/discussions/18395) | Migrating from [nuxt-community/pwa-module](https://github.com/nuxt-community/pwa-module) for built-in SEO utils and service worker support |
| Assets | 2025 | [nuxt/nuxt#22012](https://github.com/nuxt/nuxt/discussions/22012) | Allow developers and modules to handle loading third-party assets. |
| Translations | - | [nuxt/nuxt.com#1711](https://github.com/nuxt/nuxt.com/issues/1711) | A collaborative project for a stable translation process for Nuxt docs. Currently pending for ideas and documentation tooling support. |

## [Core Modules Roadmap](https://nuxt.com/docs/4.x/community/roadmap\#core-modules-roadmap)

In addition to the Nuxt framework, there are modules that are vital for the ecosystem. Their status will be updated below.

| Module | Status | Nuxt Support | Repository | Description |
| --- | --- | --- | --- | --- |
| [Scripts](https://scripts.nuxt.com/) | Public Beta | 3.x, 4.x | [nuxt/scripts](https://github.com/nuxt/scripts) | Easy 3rd party script management. |
| Auth Utils | Planned | 4.x, 5.x | `nuxt/auth-utils` to be announced | The temporary repository [atinux/nuxt-auth-utils](https://github.com/atinux/nuxt-auth-utils) is available while awaiting its official integration into Nuxt via RFC. |
| A11y | Planned | 4.x, 5.x | `nuxt/a11y` to be announced | Accessibility hinting and utilities [nuxt/nuxt#23255](https://github.com/nuxt/nuxt/issues/23255) |
| [Hints](https://github.com/nuxt/hints) | Public Alpha | 4.x, 5.x | [nuxt/hints](https://github.com/nuxt/hints) | Guidance and suggestions for enhancing development practices. |

## [Release Cycle](https://nuxt.com/docs/4.x/community/roadmap\#release-cycle)

Since January 2023, we've adopted a consistent release cycle for Nuxt, following [semver](https://semver.org/). We aim for major framework releases every year, with an expectation of patch releases every week or so and minor releases every month or so. They should never contain breaking changes except within options clearly marked as `experimental`.

We are planning a slight variation from this plan for Nuxt 4 and Nuxt 5. Nuxt 4 will be a stability-focused release containing all `compatibilityVersion: 4` features, and will be followed shortly by Nuxt 5 which will include an upgrade to Nitro v3 and additional changes.

This approach separates breaking changes into manageable phases, allowing for better ecosystem testing and smoother migrations.

### [Ongoing Support for Nuxt](https://nuxt.com/docs/4.x/community/roadmap\#ongoing-support-for-nuxt)

We commit to support each major version of Nuxt for a minimum of six months after the release of the next major version, and to providing an upgrade path for current users at that point.

### [Current Packages](https://nuxt.com/docs/4.x/community/roadmap\#current-packages)

The current active version of [Nuxt](https://nuxt.com/) is **v4** which is available as `nuxt` on npm with the `latest` tag.

Nuxt 3 will continue to receive maintenance updates (both bug fixes and backports of features from Nuxt 4) until the end of January 2026.

Each active version has its own nightly releases which are generated automatically. For more about enabling the Nuxt nightly release channel, see [the nightly release channel docs](https://nuxt.com/docs/4.x/guide/going-further/nightly-release-channel).

| Release |  | Initial release | End Of Life | Docs |
| --- | --- | --- | --- | --- |
| **5.x** (scheduled) |  | Q4 2025 (estimated) | TBA |  |
| **4.x** (stable) | [![Nuxt latest version](https://img.shields.io/npm/v/nuxt.svg?logo=nuxt&label=&style=flat&colorA=18181B&colorB=28CF8D)](https://www.npmjs.com/package/nuxt?activeTab=versions) | 2025-07-16 | 6 months after 5.x release | [nuxt.com](https://nuxt.com/docs/4.x/getting-started/introduction) |
| **3.x** (maintenance) | [![Nuxt 3.x version](https://img.shields.io/npm/v/nuxt/3x.svg?logo=nuxt&label=&style=flat&colorA=18181B&colorB=28CF8D)](https://www.npmjs.com/package/nuxt?activeTab=versions) | 2022-11-16 | 2026-01-31 | [nuxt.com](https://nuxt.com/docs/3.x/getting-started/introduction) |
| **2.x** (unsupported) | [![Nuxt 2.x version](https://img.shields.io/npm/v/nuxt/2x.svg?logo=nuxt&label=&style=flat&colorA=18181B&colorB=28CF8D)](https://www.npmjs.com/package/nuxt?activeTab=versions) | 2018-09-21 | 2024-06-30 | [v2.nuxt.com](https://v2.nuxt.com/docs/get-started/installation/) |
| **1.x** (unsupported) | [![Nuxt 1.x version](https://img.shields.io/npm/v/nuxt/1x.svg?logo=nuxt&label=&style=flat&colorA=18181B&colorB=28CF8D)](https://www.npmjs.com/package/nuxt?activeTab=versions) | 2018-01-08 | 2019-09-21 |  |

### [Support Status](https://nuxt.com/docs/4.x/community/roadmap\#support-status)

| Status | Description |
| --- | --- |
| Unsupported | This version is not maintained any more and will not receive security patches |
| Maintenance | This version will only receive security patches |
| Stable | This version is being developed for and will receive security patches |
| Development | This version could be unstable |
| Scheduled | This version does not exist yet but is planned |

Was this helpful?

🤩🙂☹️😰

[Report an issue](https://github.com/nuxt/nuxt/issues/new/choose) or [Edit this page on GitHub](https://github.com/nuxt/nuxt/edit/main/docs/5.community/6.roadmap.md)

[Framework\\
\\
Some specific points about contributions to the framework repository.](https://nuxt.com/docs/4.x/community/framework-contribution) [Releases\\
\\
Discover the latest releases of Nuxt & Nuxt official modules.](https://nuxt.com/docs/4.x/community/changelog)

On this page

On this page

- [Status Reports](https://nuxt.com/docs/4.x/community/roadmap#status-reports)
- [Roadmap](https://nuxt.com/docs/4.x/community/roadmap#roadmap)
- [Core Modules Roadmap](https://nuxt.com/docs/4.x/community/roadmap#core-modules-roadmap)
- [Release Cycle](https://nuxt.com/docs/4.x/community/roadmap#release-cycle)
  - [Ongoing Support for Nuxt](https://nuxt.com/docs/4.x/community/roadmap#ongoing-support-for-nuxt)
  - [Current Packages](https://nuxt.com/docs/4.x/community/roadmap#current-packages)
  - [Support Status](https://nuxt.com/docs/4.x/community/roadmap#support-status)

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