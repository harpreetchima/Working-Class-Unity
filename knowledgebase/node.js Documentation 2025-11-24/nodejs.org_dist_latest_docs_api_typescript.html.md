---
url: "https://nodejs.org/dist/latest/docs/api/typescript.html"
title: "Modules: TypeScript | Node.js v25.2.1 Documentation"
---

[Skip to content](https://nodejs.org/dist/latest/docs/api/typescript.html#apicontent)

[Node.js](https://nodejs.org/ "Go back to the home page")

- [About this documentation](https://nodejs.org/dist/latest/docs/api/documentation.html)
- [Usage and example](https://nodejs.org/dist/latest/docs/api/synopsis.html)

* * *

- [Assertion testing](https://nodejs.org/dist/latest/docs/api/assert.html)
- [Asynchronous context tracking](https://nodejs.org/dist/latest/docs/api/async_context.html)
- [Async hooks](https://nodejs.org/dist/latest/docs/api/async_hooks.html)
- [Buffer](https://nodejs.org/dist/latest/docs/api/buffer.html)
- [C++ addons](https://nodejs.org/dist/latest/docs/api/addons.html)
- [C/C++ addons with Node-API](https://nodejs.org/dist/latest/docs/api/n-api.html)
- [C++ embedder API](https://nodejs.org/dist/latest/docs/api/embedding.html)
- [Child processes](https://nodejs.org/dist/latest/docs/api/child_process.html)
- [Cluster](https://nodejs.org/dist/latest/docs/api/cluster.html)
- [Command-line options](https://nodejs.org/dist/latest/docs/api/cli.html)
- [Console](https://nodejs.org/dist/latest/docs/api/console.html)
- [Crypto](https://nodejs.org/dist/latest/docs/api/crypto.html)
- [Debugger](https://nodejs.org/dist/latest/docs/api/debugger.html)
- [Deprecated APIs](https://nodejs.org/dist/latest/docs/api/deprecations.html)
- [Diagnostics Channel](https://nodejs.org/dist/latest/docs/api/diagnostics_channel.html)
- [DNS](https://nodejs.org/dist/latest/docs/api/dns.html)
- [Domain](https://nodejs.org/dist/latest/docs/api/domain.html)
- [Environment Variables](https://nodejs.org/dist/latest/docs/api/environment_variables.html)
- [Errors](https://nodejs.org/dist/latest/docs/api/errors.html)
- [Events](https://nodejs.org/dist/latest/docs/api/events.html)
- [File system](https://nodejs.org/dist/latest/docs/api/fs.html)
- [Globals](https://nodejs.org/dist/latest/docs/api/globals.html)
- [HTTP](https://nodejs.org/dist/latest/docs/api/http.html)
- [HTTP/2](https://nodejs.org/dist/latest/docs/api/http2.html)
- [HTTPS](https://nodejs.org/dist/latest/docs/api/https.html)
- [Inspector](https://nodejs.org/dist/latest/docs/api/inspector.html)
- [Internationalization](https://nodejs.org/dist/latest/docs/api/intl.html)
- [Modules: CommonJS modules](https://nodejs.org/dist/latest/docs/api/modules.html)
- [Modules: ECMAScript modules](https://nodejs.org/dist/latest/docs/api/esm.html)
- [Modules: `node:module` API](https://nodejs.org/dist/latest/docs/api/module.html)
- [Modules: Packages](https://nodejs.org/dist/latest/docs/api/packages.html)
- [Modules: TypeScript](https://nodejs.org/dist/latest/docs/api/typescript.html)
- [Net](https://nodejs.org/dist/latest/docs/api/net.html)
- [OS](https://nodejs.org/dist/latest/docs/api/os.html)
- [Path](https://nodejs.org/dist/latest/docs/api/path.html)
- [Performance hooks](https://nodejs.org/dist/latest/docs/api/perf_hooks.html)
- [Permissions](https://nodejs.org/dist/latest/docs/api/permissions.html)
- [Process](https://nodejs.org/dist/latest/docs/api/process.html)
- [Punycode](https://nodejs.org/dist/latest/docs/api/punycode.html)
- [Query strings](https://nodejs.org/dist/latest/docs/api/querystring.html)
- [Readline](https://nodejs.org/dist/latest/docs/api/readline.html)
- [REPL](https://nodejs.org/dist/latest/docs/api/repl.html)
- [Report](https://nodejs.org/dist/latest/docs/api/report.html)
- [Single executable applications](https://nodejs.org/dist/latest/docs/api/single-executable-applications.html)
- [SQLite](https://nodejs.org/dist/latest/docs/api/sqlite.html)
- [Stream](https://nodejs.org/dist/latest/docs/api/stream.html)
- [String decoder](https://nodejs.org/dist/latest/docs/api/string_decoder.html)
- [Test runner](https://nodejs.org/dist/latest/docs/api/test.html)
- [Timers](https://nodejs.org/dist/latest/docs/api/timers.html)
- [TLS/SSL](https://nodejs.org/dist/latest/docs/api/tls.html)
- [Trace events](https://nodejs.org/dist/latest/docs/api/tracing.html)
- [TTY](https://nodejs.org/dist/latest/docs/api/tty.html)
- [UDP/datagram](https://nodejs.org/dist/latest/docs/api/dgram.html)
- [URL](https://nodejs.org/dist/latest/docs/api/url.html)
- [Utilities](https://nodejs.org/dist/latest/docs/api/util.html)
- [V8](https://nodejs.org/dist/latest/docs/api/v8.html)
- [VM](https://nodejs.org/dist/latest/docs/api/vm.html)
- [WASI](https://nodejs.org/dist/latest/docs/api/wasi.html)
- [Web Crypto API](https://nodejs.org/dist/latest/docs/api/webcrypto.html)
- [Web Streams API](https://nodejs.org/dist/latest/docs/api/webstreams.html)
- [Worker threads](https://nodejs.org/dist/latest/docs/api/worker_threads.html)
- [Zlib](https://nodejs.org/dist/latest/docs/api/zlib.html)

* * *

- [Code repository and issue tracker](https://github.com/nodejs/node)

# Node.js v25.2.1 documentation

- Node.js v25.2.1
- [Table of contents](https://nodejs.org/dist/latest/docs/api/typescript.html#toc-picker)




- [Modules: TypeScript](https://nodejs.org/dist/latest/docs/api/typescript.html#modules-typescript)
  - [Enabling](https://nodejs.org/dist/latest/docs/api/typescript.html#enabling)
  - [Full TypeScript support](https://nodejs.org/dist/latest/docs/api/typescript.html#full-typescript-support)
  - [Type stripping](https://nodejs.org/dist/latest/docs/api/typescript.html#type-stripping)
    - [Determining module system](https://nodejs.org/dist/latest/docs/api/typescript.html#determining-module-system)
    - [TypeScript features](https://nodejs.org/dist/latest/docs/api/typescript.html#typescript-features)
    - [Importing types without `type` keyword](https://nodejs.org/dist/latest/docs/api/typescript.html#importing-types-without-type-keyword)
    - [Non-file forms of input](https://nodejs.org/dist/latest/docs/api/typescript.html#non-file-forms-of-input)
    - [Source maps](https://nodejs.org/dist/latest/docs/api/typescript.html#source-maps)
    - [Type stripping in dependencies](https://nodejs.org/dist/latest/docs/api/typescript.html#type-stripping-in-dependencies)
    - [Paths aliases](https://nodejs.org/dist/latest/docs/api/typescript.html#paths-aliases)

- [Index](https://nodejs.org/dist/latest/docs/api/typescript.html#gtoc-picker)


- [About this documentation](https://nodejs.org/dist/latest/docs/api/documentation.html)
- [Usage and example](https://nodejs.org/dist/latest/docs/api/synopsis.html)
- [Index](https://nodejs.org/dist/latest/docs/api/index.html)

* * *

- [Assertion testing](https://nodejs.org/dist/latest/docs/api/assert.html)
- [Asynchronous context tracking](https://nodejs.org/dist/latest/docs/api/async_context.html)
- [Async hooks](https://nodejs.org/dist/latest/docs/api/async_hooks.html)
- [Buffer](https://nodejs.org/dist/latest/docs/api/buffer.html)
- [C++ addons](https://nodejs.org/dist/latest/docs/api/addons.html)
- [C/C++ addons with Node-API](https://nodejs.org/dist/latest/docs/api/n-api.html)
- [C++ embedder API](https://nodejs.org/dist/latest/docs/api/embedding.html)
- [Child processes](https://nodejs.org/dist/latest/docs/api/child_process.html)
- [Cluster](https://nodejs.org/dist/latest/docs/api/cluster.html)
- [Command-line options](https://nodejs.org/dist/latest/docs/api/cli.html)
- [Console](https://nodejs.org/dist/latest/docs/api/console.html)
- [Crypto](https://nodejs.org/dist/latest/docs/api/crypto.html)
- [Debugger](https://nodejs.org/dist/latest/docs/api/debugger.html)
- [Deprecated APIs](https://nodejs.org/dist/latest/docs/api/deprecations.html)
- [Diagnostics Channel](https://nodejs.org/dist/latest/docs/api/diagnostics_channel.html)
- [DNS](https://nodejs.org/dist/latest/docs/api/dns.html)
- [Domain](https://nodejs.org/dist/latest/docs/api/domain.html)
- [Environment Variables](https://nodejs.org/dist/latest/docs/api/environment_variables.html)
- [Errors](https://nodejs.org/dist/latest/docs/api/errors.html)
- [Events](https://nodejs.org/dist/latest/docs/api/events.html)
- [File system](https://nodejs.org/dist/latest/docs/api/fs.html)
- [Globals](https://nodejs.org/dist/latest/docs/api/globals.html)
- [HTTP](https://nodejs.org/dist/latest/docs/api/http.html)
- [HTTP/2](https://nodejs.org/dist/latest/docs/api/http2.html)
- [HTTPS](https://nodejs.org/dist/latest/docs/api/https.html)
- [Inspector](https://nodejs.org/dist/latest/docs/api/inspector.html)
- [Internationalization](https://nodejs.org/dist/latest/docs/api/intl.html)
- [Modules: CommonJS modules](https://nodejs.org/dist/latest/docs/api/modules.html)
- [Modules: ECMAScript modules](https://nodejs.org/dist/latest/docs/api/esm.html)
- [Modules: `node:module` API](https://nodejs.org/dist/latest/docs/api/module.html)
- [Modules: Packages](https://nodejs.org/dist/latest/docs/api/packages.html)
- [Modules: TypeScript](https://nodejs.org/dist/latest/docs/api/typescript.html)
- [Net](https://nodejs.org/dist/latest/docs/api/net.html)
- [OS](https://nodejs.org/dist/latest/docs/api/os.html)
- [Path](https://nodejs.org/dist/latest/docs/api/path.html)
- [Performance hooks](https://nodejs.org/dist/latest/docs/api/perf_hooks.html)
- [Permissions](https://nodejs.org/dist/latest/docs/api/permissions.html)
- [Process](https://nodejs.org/dist/latest/docs/api/process.html)
- [Punycode](https://nodejs.org/dist/latest/docs/api/punycode.html)
- [Query strings](https://nodejs.org/dist/latest/docs/api/querystring.html)
- [Readline](https://nodejs.org/dist/latest/docs/api/readline.html)
- [REPL](https://nodejs.org/dist/latest/docs/api/repl.html)
- [Report](https://nodejs.org/dist/latest/docs/api/report.html)
- [Single executable applications](https://nodejs.org/dist/latest/docs/api/single-executable-applications.html)
- [SQLite](https://nodejs.org/dist/latest/docs/api/sqlite.html)
- [Stream](https://nodejs.org/dist/latest/docs/api/stream.html)
- [String decoder](https://nodejs.org/dist/latest/docs/api/string_decoder.html)
- [Test runner](https://nodejs.org/dist/latest/docs/api/test.html)
- [Timers](https://nodejs.org/dist/latest/docs/api/timers.html)
- [TLS/SSL](https://nodejs.org/dist/latest/docs/api/tls.html)
- [Trace events](https://nodejs.org/dist/latest/docs/api/tracing.html)
- [TTY](https://nodejs.org/dist/latest/docs/api/tty.html)
- [UDP/datagram](https://nodejs.org/dist/latest/docs/api/dgram.html)
- [URL](https://nodejs.org/dist/latest/docs/api/url.html)
- [Utilities](https://nodejs.org/dist/latest/docs/api/util.html)
- [V8](https://nodejs.org/dist/latest/docs/api/v8.html)
- [VM](https://nodejs.org/dist/latest/docs/api/vm.html)
- [WASI](https://nodejs.org/dist/latest/docs/api/wasi.html)
- [Web Crypto API](https://nodejs.org/dist/latest/docs/api/webcrypto.html)
- [Web Streams API](https://nodejs.org/dist/latest/docs/api/webstreams.html)
- [Worker threads](https://nodejs.org/dist/latest/docs/api/worker_threads.html)
- [Zlib](https://nodejs.org/dist/latest/docs/api/zlib.html)

* * *

- [Code repository and issue tracker](https://github.com/nodejs/node)

- [Other versions](https://nodejs.org/dist/latest/docs/api/typescript.html#alt-docs)


1. [25.x](https://nodejs.org/docs/latest-v25.x/api/typescript.html)
2. [24.x **LTS**](https://nodejs.org/docs/latest-v24.x/api/typescript.html)
3. [23.x](https://nodejs.org/docs/latest-v23.x/api/typescript.html)
4. [22.x **LTS**](https://nodejs.org/docs/latest-v22.x/api/typescript.html)

- [Options](https://nodejs.org/dist/latest/docs/api/typescript.html#options-picker)


- [View on single page](https://nodejs.org/dist/latest/docs/api/all.html)
- [View as JSON](https://nodejs.org/dist/latest/docs/api/typescript.json)
- [Edit on GitHub](https://github.com/nodejs/node/edit/main/doc/api/typescript.md)

* * *

Table of contents

- [Modules: TypeScript](https://nodejs.org/dist/latest/docs/api/typescript.html#modules-typescript)
  - [Enabling](https://nodejs.org/dist/latest/docs/api/typescript.html#enabling)
  - [Full TypeScript support](https://nodejs.org/dist/latest/docs/api/typescript.html#full-typescript-support)
  - [Type stripping](https://nodejs.org/dist/latest/docs/api/typescript.html#type-stripping)
    - [Determining module system](https://nodejs.org/dist/latest/docs/api/typescript.html#determining-module-system)
    - [TypeScript features](https://nodejs.org/dist/latest/docs/api/typescript.html#typescript-features)
    - [Importing types without `type` keyword](https://nodejs.org/dist/latest/docs/api/typescript.html#importing-types-without-type-keyword)
    - [Non-file forms of input](https://nodejs.org/dist/latest/docs/api/typescript.html#non-file-forms-of-input)
    - [Source maps](https://nodejs.org/dist/latest/docs/api/typescript.html#source-maps)
    - [Type stripping in dependencies](https://nodejs.org/dist/latest/docs/api/typescript.html#type-stripping-in-dependencies)
    - [Paths aliases](https://nodejs.org/dist/latest/docs/api/typescript.html#paths-aliases)

## Modules: TypeScript[\#](https://nodejs.org/dist/latest/docs/api/typescript.html\#modules-typescript)

History

| Version | Changes |
| --- | --- |
| v25.2.0 | Type stripping is now stable. |
| v24.3.0, v22.18.0 | Type stripping no longer emits an experimental warning. |
| v23.6.0, v22.18.0 | Type stripping is enabled by default. |
| v22.7.0 | Added `--experimental-transform-types` flag. |

[Stability: 2](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Stable

### Enabling[\#](https://nodejs.org/dist/latest/docs/api/typescript.html\#enabling)

There are two ways to enable runtime TypeScript support in Node.js:

1. For [full support](https://nodejs.org/dist/latest/docs/api/typescript.html#full-typescript-support) of all of TypeScript's syntax and features, including
using any version of TypeScript, use a third-party package.

2. For lightweight support, you can use the built-in support for
[type stripping](https://nodejs.org/dist/latest/docs/api/typescript.html#type-stripping).


### Full TypeScript support[\#](https://nodejs.org/dist/latest/docs/api/typescript.html\#full-typescript-support)

To use TypeScript with full support for all TypeScript features, including
`tsconfig.json`, you can use a third-party package. These instructions use
[`tsx`](https://tsx.is/) as an example but there are many other similar libraries available.

1. Install the package as a development dependency using whatever package
manager you're using for your project. For example, with `npm`:


```bash
npm install --save-dev tsx copy
```

2. Then you can run your TypeScript code via:


```bash
npx tsx your-file.ts copy
```


Or alternatively, you can run with `node` via:


```bash
node --import=tsx your-file.ts copy
```


### Type stripping[\#](https://nodejs.org/dist/latest/docs/api/typescript.html\#type-stripping)

History

| Version | Changes |
| --- | --- |
| v25.2.0 | Type stripping is now stable. |
| v22.6.0 | Added in: v22.6.0 |

By default Node.js will execute TypeScript files that contains only
erasable TypeScript syntax.
Node.js will replace TypeScript syntax with whitespace,
and no type checking is performed.
To enable the transformation of non erasable TypeScript syntax, which requires JavaScript code generation,
such as `enum` declarations, parameter properties use the flag [`--experimental-transform-types`](https://nodejs.org/dist/latest/docs/api/cli.html#--experimental-transform-types).
To disable this feature, use the flag [`--no-strip-types`](https://nodejs.org/dist/latest/docs/api/cli.html#--no-strip-types).

Node.js ignores `tsconfig.json` files and therefore
features that depend on settings within `tsconfig.json`,
such as paths or converting newer JavaScript syntax to older standards, are
intentionally unsupported. To get full TypeScript support, see [Full TypeScript support](https://nodejs.org/dist/latest/docs/api/typescript.html#full-typescript-support).

The type stripping feature is designed to be lightweight.
By intentionally not supporting syntaxes that require JavaScript code
generation, and by replacing inline types with whitespace, Node.js can run
TypeScript code without the need for source maps.

Type stripping is compatible with most versions of TypeScript
but we recommend version 5.8 or newer with the following `tsconfig.json` settings:

```json
{
  "compilerOptions": {
     "noEmit": true, // Optional - see note below
     "target": "esnext",
     "module": "nodenext",
     "rewriteRelativeImportExtensions": true,
     "erasableSyntaxOnly": true,
     "verbatimModuleSyntax": true
  }
} copy
```

Use the `noEmit` option if you intend to only execute `*.ts` files, for example
a build script. You won't need this flag if you intend to distribute `*.js`
files.

#### Determining module system[\#](https://nodejs.org/dist/latest/docs/api/typescript.html\#determining-module-system)

Node.js supports both [CommonJS](https://nodejs.org/dist/latest/docs/api/modules.html) and [ES Modules](https://nodejs.org/dist/latest/docs/api/esm.html) syntax in TypeScript
files. Node.js will not convert from one module system to another; if you want
your code to run as an ES module, you must use `import` and `export` syntax, and
if you want your code to run as CommonJS you must use `require` and
`module.exports`.

- `.ts` files will have their module system determined [the same way as `.js`\\
files.](https://nodejs.org/dist/latest/docs/api/packages.html#determining-module-system) To use `import` and `export` syntax, add `"type": "module"` to the
nearest parent `package.json`.
- `.mts` files will always be run as ES modules, similar to `.mjs` files.
- `.cts` files will always be run as CommonJS modules, similar to `.cjs` files.
- `.tsx` files are unsupported.

As in JavaScript files, [file extensions are mandatory](https://nodejs.org/dist/latest/docs/api/esm.html#mandatory-file-extensions) in `import` statements
and `import()` expressions: `import './file.ts'`, not `import './file'`. Because
of backward compatibility, file extensions are also mandatory in `require()`
calls: `require('./file.ts')`, not `require('./file')`, similar to how the
`.cjs` extension is mandatory in `require` calls in CommonJS files.

The `tsconfig.json` option `allowImportingTsExtensions` will allow the
TypeScript compiler `tsc` to type-check files with `import` specifiers that
include the `.ts` extension.

#### TypeScript features[\#](https://nodejs.org/dist/latest/docs/api/typescript.html\#typescript-features)

Since Node.js is only removing inline types, any TypeScript features that
involve _replacing_ TypeScript syntax with new JavaScript syntax will error,
unless the flag [`--experimental-transform-types`](https://nodejs.org/dist/latest/docs/api/cli.html#--experimental-transform-types) is passed.

The most prominent features that require transformation are:

- `Enum` declarations
- `namespace` with runtime code
- legacy `module` with runtime code
- parameter properties
- import aliases

`namespaces` and `module` that do not contain runtime code are supported.
This example will work correctly:

```ts
// This namespace is exporting a type
namespace TypeOnly {
   export type A = string;
} copy
```

This will result in [`ERR_UNSUPPORTED_TYPESCRIPT_SYNTAX`](https://nodejs.org/dist/latest/docs/api/errors.html#err_unsupported_typescript_syntax) error:

```ts
// This namespace is exporting a value
namespace A {
   export let x = 1
} copy
```

Since Decorators are currently a [TC39 Stage 3 proposal](https://github.com/tc39/proposal-decorators),
they are not transformed and will result in a parser error.
Node.js does not provide polyfills and thus will not support decorators until
they are supported natively in JavaScript.

In addition, Node.js does not read `tsconfig.json` files and does not support
features that depend on settings within `tsconfig.json`, such as paths or
converting newer JavaScript syntax into older standards.

#### Importing types without `type` keyword[\#](https://nodejs.org/dist/latest/docs/api/typescript.html\#importing-types-without-type-keyword)

Due to the nature of type stripping, the `type` keyword is necessary to
correctly strip type imports. Without the `type` keyword, Node.js will treat the
import as a value import, which will result in a runtime error. The tsconfig
option [`verbatimModuleSyntax`](https://www.typescriptlang.org/tsconfig/#verbatimModuleSyntax) can be used to match this behavior.

This example will work correctly:

```ts
import type { Type1, Type2 } from './module.ts';
import { fn, type FnParams } from './fn.ts'; copy
```

This will result in a runtime error:

```ts
import { Type1, Type2 } from './module.ts';
import { fn, FnParams } from './fn.ts'; copy
```

#### Non-file forms of input[\#](https://nodejs.org/dist/latest/docs/api/typescript.html\#non-file-forms-of-input)

Type stripping can be enabled for `--eval` and STDIN. The module system
will be determined by `--input-type`, as it is for JavaScript.

TypeScript syntax is unsupported in the REPL, `--check`, and
`inspect`.

#### Source maps[\#](https://nodejs.org/dist/latest/docs/api/typescript.html\#source-maps)

Since inline types are replaced by whitespace, source maps are unnecessary for
correct line numbers in stack traces; and Node.js does not generate them.
When [`--experimental-transform-types`](https://nodejs.org/dist/latest/docs/api/cli.html#--experimental-transform-types) is enabled, source-maps
are enabled by default.

#### Type stripping in dependencies[\#](https://nodejs.org/dist/latest/docs/api/typescript.html\#type-stripping-in-dependencies)

To discourage package authors from publishing packages written in TypeScript,
Node.js refuses to handle TypeScript files inside folders under a `node_modules`
path.

#### Paths aliases[\#](https://nodejs.org/dist/latest/docs/api/typescript.html\#paths-aliases)

[`tsconfig` "paths"](https://www.typescriptlang.org/tsconfig/#paths) won't be transformed and therefore produce an error. The closest
feature available is [subpath imports](https://nodejs.org/dist/latest/docs/api/packages.html#subpath-imports) with the limitation that they need to start
with `#`.