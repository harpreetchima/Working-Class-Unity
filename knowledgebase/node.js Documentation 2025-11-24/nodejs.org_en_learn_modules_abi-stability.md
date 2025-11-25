---
url: "https://nodejs.org/en/learn/modules/abi-stability"
title: "Node.js — ABI Stability"
---

[Home](https://nodejs.org/en)

[Learn](https://nodejs.org/en/learn) [About](https://nodejs.org/en/about) [Download](https://nodejs.org/en/download) [Blog](https://nodejs.org/en/blog) [Docs](https://nodejs.org/docs/latest/api/) [Contribute](https://github.com/nodejs/node/blob/main/CONTRIBUTING.md) [Courses](https://training.linuxfoundation.org/openjs/)

Start typing...
⌘ K

[Node.js Github](https://github.com/nodejs/node)

Change pageABI StabilityGetting Started

[Introduction to Node.js](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs) [How much JavaScript do you need to know to use Node.js?](https://nodejs.org/en/learn/getting-started/how-much-javascript-do-you-need-to-know-to-use-nodejs) [Differences between Node.js and the Browser](https://nodejs.org/en/learn/getting-started/differences-between-nodejs-and-the-browser) [The V8 JavaScript Engine](https://nodejs.org/en/learn/getting-started/the-v8-javascript-engine) [An introduction to the npm package manager](https://nodejs.org/en/learn/getting-started/an-introduction-to-the-npm-package-manager) [ECMAScript 2015 (ES6) and beyond](https://nodejs.org/en/learn/getting-started/ecmascript-2015-es6-and-beyond) [Debugging Node.js](https://nodejs.org/en/learn/getting-started/debugging) [Fetching data with Node.js](https://nodejs.org/en/learn/getting-started/fetch) [WebSocket client with Node.js](https://nodejs.org/en/learn/getting-started/websocket) [Node.js, the difference between development and production](https://nodejs.org/en/learn/getting-started/nodejs-the-difference-between-development-and-production) [Profiling Node.js Applications](https://nodejs.org/en/learn/getting-started/profiling) [Node.js with WebAssembly](https://nodejs.org/en/learn/getting-started/nodejs-with-webassembly) [Security Best Practices](https://nodejs.org/en/learn/getting-started/security-best-practices) [Introduction to Userland Migrations](https://nodejs.org/en/learn/getting-started/userland-migrations)

Command Line

[Run Node.js scripts from the command line](https://nodejs.org/en/learn/command-line/run-nodejs-scripts-from-the-command-line) [How to use the Node.js REPL](https://nodejs.org/en/learn/command-line/how-to-use-the-nodejs-repl) [Output to the command line using Node.js](https://nodejs.org/en/learn/command-line/output-to-the-command-line-using-nodejs) [Accept input from the command line in Node.js](https://nodejs.org/en/learn/command-line/accept-input-from-the-command-line-in-nodejs) [How to read environment variables from Node.js](https://nodejs.org/en/learn/command-line/how-to-read-environment-variables-from-nodejs)

HTTP

[Anatomy of an HTTP Transaction](https://nodejs.org/en/learn/http/anatomy-of-an-http-transaction)

Manipulating Files

[Node.js file stats](https://nodejs.org/en/learn/manipulating-files/nodejs-file-stats) [Node.js File Paths](https://nodejs.org/en/learn/manipulating-files/nodejs-file-paths) [Reading files with Node.js](https://nodejs.org/en/learn/manipulating-files/reading-files-with-nodejs) [Writing files with Node.js](https://nodejs.org/en/learn/manipulating-files/writing-files-with-nodejs) [Working with file descriptors in Node.js](https://nodejs.org/en/learn/manipulating-files/working-with-file-descriptors-in-nodejs) [Working with folders in Node.js](https://nodejs.org/en/learn/manipulating-files/working-with-folders-in-nodejs) [How to work with Different Filesystems](https://nodejs.org/en/learn/manipulating-files/working-with-different-filesystems)

Asynchronous Work

[JavaScript Asynchronous Programming and Callbacks](https://nodejs.org/en/learn/asynchronous-work/javascript-asynchronous-programming-and-callbacks) [Asynchronous flow control](https://nodejs.org/en/learn/asynchronous-work/asynchronous-flow-control) [Discover Promises in Node.js](https://nodejs.org/en/learn/asynchronous-work/discover-promises-in-nodejs) [Discover JavaScript Timers](https://nodejs.org/en/learn/asynchronous-work/discover-javascript-timers) [Overview of Blocking vs Non-Blocking](https://nodejs.org/en/learn/asynchronous-work/overview-of-blocking-vs-non-blocking) [The Node.js Event Loop](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick) [The Node.js Event Emitter](https://nodejs.org/en/learn/asynchronous-work/the-nodejs-event-emitter) [Understanding process.nextTick()](https://nodejs.org/en/learn/asynchronous-work/understanding-processnexttick) [Understanding setImmediate()](https://nodejs.org/en/learn/asynchronous-work/understanding-setimmediate) [Don't Block the Event Loop](https://nodejs.org/en/learn/asynchronous-work/dont-block-the-event-loop)

TypeScript

[Introduction to TypeScript](https://nodejs.org/en/learn/typescript/introduction) [Running TypeScript Natively](https://nodejs.org/en/learn/typescript/run-natively) [Running TypeScript code using transpilation](https://nodejs.org/en/learn/typescript/transpile) [Running TypeScript with a runner](https://nodejs.org/en/learn/typescript/run) [Publishing a TypeScript package](https://nodejs.org/en/learn/typescript/publishing-a-ts-package)

Modules

[How to use streams](https://nodejs.org/en/learn/modules/how-to-use-streams) [Backpressuring in Streams](https://nodejs.org/en/learn/modules/backpressuring-in-streams) [Publishing a package](https://nodejs.org/en/learn/modules/publishing-a-package) [How to publish a Node-API package](https://nodejs.org/en/learn/modules/publishing-node-api-modules) [ABI Stability](https://nodejs.org/en/learn/modules/abi-stability)

Diagnostics

[User Journey](https://nodejs.org/en/learn/diagnostics/user-journey) [Memory](https://nodejs.org/en/learn/diagnostics/memory) [Live Debugging](https://nodejs.org/en/learn/diagnostics/live-debugging) [Poor Performance](https://nodejs.org/en/learn/diagnostics/poor-performance) [Flame Graphs](https://nodejs.org/en/learn/diagnostics/flame-graphs)

Test Runner

[Discovering Node.js's test runner](https://nodejs.org/en/learn/test-runner/introduction) [Using Node.js's test runner](https://nodejs.org/en/learn/test-runner/using-test-runner) [Mocking in tests](https://nodejs.org/en/learn/test-runner/mocking) [Collecting code coverage in Node.js](https://nodejs.org/en/learn/test-runner/collecting-code-coverage)

# [ABI Stability](https://nodejs.org/en/learn/modules/abi-stability\#abi-stability)

## [Introduction](https://nodejs.org/en/learn/modules/abi-stability\#introduction)

An Application Binary Interface (ABI) is a way for programs to call functions
and use data structures from other compiled programs. It is the compiled version
of an Application Programming Interface (API). In other words, the headers files
describing the classes, functions, data structures, enumerations, and constants
which enable an application to perform a desired task correspond by way of
compilation to a set of addresses and expected parameter values and memory
structure sizes and layouts with which the provider of the ABI was compiled.

The application using the ABI must be compiled such that the available
addresses, expected parameter values, and memory structure sizes and layouts
agree with those with which the ABI provider was compiled. This is usually
accomplished by compiling against the headers provided by the ABI provider.

Since the provider of the ABI and the user of the ABI may be compiled at
different times with different versions of the compiler, a portion of the
responsibility for ensuring ABI compatibility lies with the compiler. Different
versions of the compiler, perhaps provided by different vendors, must all
produce the same ABI from a header file with a certain content, and must produce
code for the application using the ABI that accesses the API described in a
given header according to the conventions of the ABI resulting from the
description in the header. Modern compilers have a fairly good track record of
not breaking the ABI compatibility of the applications they compile.

The remaining responsibility for ensuring ABI compatibility lies with the team
maintaining the header files which provide the API that results, upon
compilation, in the ABI that is to remain stable. Changes to the header files
can be made, but the nature of the changes has to be closely tracked to ensure
that, upon compilation, the ABI does not change in a way that will render
existing users of the ABI incompatible with the new version.

## [ABI Stability in Node.js](https://nodejs.org/en/learn/modules/abi-stability\#abi-stability-in-nodejs)

Node.js provides header files maintained by several independent teams. For
example, header files such as `node.h` and `node_buffer.h` are maintained by
the Node.js team. `v8.h` is maintained by the V8 team, which, although in close
co-operation with the Node.js team, is independent, and with its own schedule
and priorities. Thus, the Node.js team has only partial control over the
changes that are introduced in the headers the project provides. As a result,
the Node.js project has adopted [semantic versioning](https://semver.org/).
This ensures that the APIs provided by the project will result in a stable ABI
for all minor and patch versions of Node.js released within one major version.
In practice, this means that the Node.js project has committed itself to
ensuring that a Node.js native addon compiled against a given major version of
Node.js will load successfully when loaded by any Node.js minor or patch version
within the major version against which it was compiled.

## [N-API](https://nodejs.org/en/learn/modules/abi-stability\#n-api)

Demand has arisen for equipping Node.js with an API that results in an ABI that
remains stable across multiple Node.js major versions. The motivation for
creating such an API is as follows:

- The JavaScript language has remained compatible with itself since its very
early days, whereas the ABI of the engine executing the JavaScript code changes
with every major version of Node.js. This means that applications consisting of
Node.js packages written entirely in JavaScript need not be recompiled,
reinstalled, or redeployed as a new major version of Node.js is dropped into
the production environment in which such applications run. In contrast, if an
application depends on a package that contains a native addon, the application
has to be recompiled, reinstalled, and redeployed whenever a new major version
of Node.js is introduced into the production environment. This disparity
between Node.js packages containing native addons and those that are written
entirely in JavaScript has added to the maintenance burden of production
systems which rely on native addons.

- Other projects have started to produce JavaScript interfaces that are
essentially alternative implementations of Node.js. Since these projects are
usually built on a different JavaScript engine than V8, their native addons
necessarily take on a different structure and use a different API. Nevertheless,
using a single API for a native addon across different implementations of the
Node.js JavaScript API would allow these projects to take advantage of the
ecosystem of JavaScript packages that has accrued around Node.js.

- Node.js may contain a different JavaScript engine in the future. This means
that, externally, all Node.js interfaces would remain the same, but the V8
header file would be absent. Such a step would cause the disruption of the
Node.js ecosystem in general, and that of the native addons in particular, if
an API that is JavaScript engine agnostic is not first provided by Node.js and
adopted by native addons.


To these ends Node.js has introduced N-API in version 8.6.0 and marked it as a
stable component of the project as of Node.js 8.12.0. The API is defined in the
headers [`node_api.h`](https://github.com/nodejs/node/blob/main/src/node_api.h) and [`node_api_types.h`](https://github.com/nodejs/node/blob/main/src/node_api_types.h), and provides a forward-
compatibility guarantee that crosses the Node.js major version boundary. The
guarantee can be stated as follows:

**A given version _n_ of N-API will be available in the major version of**
**Node.js in which it was published, and in all subsequent versions of Node.js,**
**including subsequent major versions.**

A native addon author can take advantage of the N-API forward compatibility
guarantee by ensuring that the addon makes use only of APIs defined in
`node_api.h` and data structures and constants defined in `node_api_types.h`.
By doing so, the author facilitates adoption of their addon by indicating to
production users that the maintenance burden for their application will increase
no more by the addition of the native addon to their project than it would by
the addition of a package written purely in JavaScript.

N-API is versioned because new APIs are added from time to time. Unlike
semantic versioning, N-API versioning is cumulative. That is, each version of
N-API conveys the same meaning as a minor version in the semver system, meaning
that all changes made to N-API will be backwards compatible. Additionally, new
N-APIs are added under an experimental flag to give the community an opportunity
to vet them in a production environment. Experimental status means that,
although care has been taken to ensure that the new API will not have to be
modified in an ABI-incompatible way in the future, it has not yet been
sufficiently proven in production to be correct and useful as designed and, as
such, may undergo ABI-incompatible changes before it is finally incorporated
into a forthcoming version of N-API. That is, an experimental N-API is not yet
covered by the forward compatibility guarantee.

[PrevHow to publish a Node-API package](https://nodejs.org/en/learn/modules/publishing-node-api-modules) [NextUser Journey](https://nodejs.org/en/learn/diagnostics/user-journey)

Reading Time5 minContribute[Edit this page](https://github.com/nodejs/nodejs.org/blob/main/apps/site/pages/en/learn/modules/abi-stability.md)Table of Contents

1. [Introduction](https://nodejs.org/en/learn/modules/abi-stability#introduction)
2. [ABI Stability in Node.js](https://nodejs.org/en/learn/modules/abi-stability#abi-stability-in-nodejs)
3. [N-API](https://nodejs.org/en/learn/modules/abi-stability#n-api)

1. [Navigate to Home](https://nodejs.org/en)
2. Modules
3. [ABI Stability](https://nodejs.org/en/learn/modules/abi-stability)

[v24.11.1Latest LTS](https://nodejs.org/blog/release/v24.11.1) [v25.2.1Latest Release](https://nodejs.org/blog/release/v25.2.1)

[Trademark Policy](https://trademark-policy.openjsf.org/) [Privacy Policy](https://privacy-policy.openjsf.org/) [Code of Conduct](https://github.com/openjs-foundation/cross-project-council/blob/main/CODE_OF_CONDUCT.md) [Security Policy](https://github.com/nodejs/node/security/policy)

[© OpenJS Foundation](https://openjsf.org/)