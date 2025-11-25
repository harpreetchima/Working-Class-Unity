---
url: "https://nodejs.org/dist/latest/docs/api/environment_variables.html"
title: "Environment Variables | Node.js v25.2.1 Documentation"
---

[Skip to content](https://nodejs.org/dist/latest/docs/api/environment_variables.html#apicontent)

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
- [Table of contents](https://nodejs.org/dist/latest/docs/api/environment_variables.html#toc-picker)




- [Environment Variables](https://nodejs.org/dist/latest/docs/api/environment_variables.html#environment-variables)
  - [CLI Environment Variables](https://nodejs.org/dist/latest/docs/api/environment_variables.html#cli-environment-variables)
  - [`process.env`](https://nodejs.org/dist/latest/docs/api/environment_variables.html#processenv)
  - [DotEnv](https://nodejs.org/dist/latest/docs/api/environment_variables.html#dotenv)
    - [.env files](https://nodejs.org/dist/latest/docs/api/environment_variables.html#env-files)
      - [Variable Names](https://nodejs.org/dist/latest/docs/api/environment_variables.html#variable-names)
      - [Variable Values](https://nodejs.org/dist/latest/docs/api/environment_variables.html#variable-values)
      - [Spacing](https://nodejs.org/dist/latest/docs/api/environment_variables.html#spacing)
      - [Comments](https://nodejs.org/dist/latest/docs/api/environment_variables.html#comments)
      - [`export` prefixes](https://nodejs.org/dist/latest/docs/api/environment_variables.html#export-prefixes)
    - [CLI Options](https://nodejs.org/dist/latest/docs/api/environment_variables.html#cli-options)
    - [Programmatic APIs](https://nodejs.org/dist/latest/docs/api/environment_variables.html#programmatic-apis)

- [Index](https://nodejs.org/dist/latest/docs/api/environment_variables.html#gtoc-picker)


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

- [Other versions](https://nodejs.org/dist/latest/docs/api/environment_variables.html#alt-docs)


1. [25.x](https://nodejs.org/docs/latest-v25.x/api/environment_variables.html)
2. [24.x **LTS**](https://nodejs.org/docs/latest-v24.x/api/environment_variables.html)
3. [23.x](https://nodejs.org/docs/latest-v23.x/api/environment_variables.html)
4. [22.x **LTS**](https://nodejs.org/docs/latest-v22.x/api/environment_variables.html)
5. [21.x](https://nodejs.org/docs/latest-v21.x/api/environment_variables.html)
6. [20.x **LTS**](https://nodejs.org/docs/latest-v20.x/api/environment_variables.html)

- [Options](https://nodejs.org/dist/latest/docs/api/environment_variables.html#options-picker)


- [View on single page](https://nodejs.org/dist/latest/docs/api/all.html)
- [View as JSON](https://nodejs.org/dist/latest/docs/api/environment_variables.json)
- [Edit on GitHub](https://github.com/nodejs/node/edit/main/doc/api/environment_variables.md)

* * *

Table of contents

- [Environment Variables](https://nodejs.org/dist/latest/docs/api/environment_variables.html#environment-variables)
  - [CLI Environment Variables](https://nodejs.org/dist/latest/docs/api/environment_variables.html#cli-environment-variables)
  - [`process.env`](https://nodejs.org/dist/latest/docs/api/environment_variables.html#processenv)
  - [DotEnv](https://nodejs.org/dist/latest/docs/api/environment_variables.html#dotenv)
    - [.env files](https://nodejs.org/dist/latest/docs/api/environment_variables.html#env-files)
      - [Variable Names](https://nodejs.org/dist/latest/docs/api/environment_variables.html#variable-names)
      - [Variable Values](https://nodejs.org/dist/latest/docs/api/environment_variables.html#variable-values)
      - [Spacing](https://nodejs.org/dist/latest/docs/api/environment_variables.html#spacing)
      - [Comments](https://nodejs.org/dist/latest/docs/api/environment_variables.html#comments)
      - [`export` prefixes](https://nodejs.org/dist/latest/docs/api/environment_variables.html#export-prefixes)
    - [CLI Options](https://nodejs.org/dist/latest/docs/api/environment_variables.html#cli-options)
    - [Programmatic APIs](https://nodejs.org/dist/latest/docs/api/environment_variables.html#programmatic-apis)

## Environment Variables[\#](https://nodejs.org/dist/latest/docs/api/environment_variables.html\#environment-variables)

Environment variables are variables associated to the environment the Node.js process runs in.

### CLI Environment Variables[\#](https://nodejs.org/dist/latest/docs/api/environment_variables.html\#cli-environment-variables)

There is a set of environment variables that can be defined to customize the behavior of Node.js,
for more details refer to the [CLI Environment Variables documentation](https://nodejs.org/dist/latest/docs/api/cli.html#environment-variables_1).

### `process.env`[\#](https://nodejs.org/dist/latest/docs/api/environment_variables.html\#processenv)

The basic API for interacting with environment variables is `process.env`, it consists of an object
with pre-populated user environment variables that can be modified and expanded.

For more details refer to the [`process.env` documentation](https://nodejs.org/dist/latest/docs/api/process.html#processenv).

### DotEnv[\#](https://nodejs.org/dist/latest/docs/api/environment_variables.html\#dotenv)

Set of utilities for dealing with additional environment variables defined in `.env` files.

[Stability: 2](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Stable

#### .env files[\#](https://nodejs.org/dist/latest/docs/api/environment_variables.html\#env-files)

`.env` files (also known as dotenv files) are files that define environment variables,
which Node.js applications can then interact with (popularized by the [dotenv](https://github.com/motdotla/dotenv) package).

The following is an example of the content of a basic `.env` file:

```text
MY_VAR_A = "my variable A"
MY_VAR_B = "my variable B" copy
```

This type of file is used in various different programming languages and platforms but there
is no formal specification for it, therefore Node.js defines its own specification described below.

A `.env` file is a file that contains key-value pairs, each pair is represented by a variable name
followed by the equal sign (`=`) followed by a variable value.

The name of such files is usually `.env` or it starts with `.env` (like for example `.env.dev` where
`dev` indicates a specific target environment). This is the recommended naming scheme but it is not
mandatory and dotenv files can have any arbitrary file name.

##### Variable Names[\#](https://nodejs.org/dist/latest/docs/api/environment_variables.html\#variable-names)

A valid variable name must contain only letters (uppercase or lowercase), digits and underscores
(`_`) and it can't begin with a digit.

More specifically a valid variable name must match the following regular expression:

```text
^[a-zA-Z_]+[a-zA-Z0-9_]*$ copy
```

The recommended convention is to use capital letters with underscores and digits when necessary,
but any variable name respecting the above definition will work just fine.

For example, the following are some valid variable names: `MY_VAR`, `MY_VAR_1`, `my_var`, `my_var_1`,
`myVar`, `My_Var123`, while these are instead not valid: `1_VAR`, `'my-var'`, `"my var"`, `VAR_#1`.

##### Variable Values[\#](https://nodejs.org/dist/latest/docs/api/environment_variables.html\#variable-values)

Variable values are comprised by any arbitrary text, which can optionally be wrapped inside
single (`'`) or double (`"`) quotes.

Quoted variables can span across multiple lines, while non quoted ones are restricted to a single line.

Noting that when parsed by Node.js all values are interpreted as text, meaning that any value will
result in a JavaScript string inside Node.js. For example the following values: `0`, `true` and
`{ "hello": "world" }` will result in the literal strings `'0'`, `'true'` and `'{ "hello": "world" }'`
instead of the number zero, the boolean `true` and an object with the `hello` property respectively.

Examples of valid variables:

```text
MY_SIMPLE_VAR = a simple single line variable
MY_EQUALS_VAR = "this variable contains an = sign!"
MY_HASH_VAR = 'this variable contains a # symbol!'
MY_MULTILINE_VAR = '
this is a multiline variable containing
two separate lines\nSorry, I meant three lines' copy
```

##### Spacing[\#](https://nodejs.org/dist/latest/docs/api/environment_variables.html\#spacing)

Leading and trailing whitespace characters around variable keys and values are ignored unless they
are enclosed within quotes.

For example:

```text
   MY_VAR_A   =    my variable a
    MY_VAR_B   =    '   my variable b   ' copy
```

will be treated identically to:

```text
MY_VAR_A = my variable a
MY_VAR_B = '   my variable b   ' copy
```

##### Comments[\#](https://nodejs.org/dist/latest/docs/api/environment_variables.html\#comments)

Hash-tag (`#`) characters denote the beginning of a comment, meaning that the rest of the line
will be completely ignored.

Hash-tags found within quotes are however treated as any other standard character.

For example:

```text
# This is a comment
MY_VAR = my variable # This is also a comment
MY_VAR_A = "# this is NOT a comment" copy
```

##### `export` prefixes[\#](https://nodejs.org/dist/latest/docs/api/environment_variables.html\#export-prefixes)

The `export` keyword can optionally be added in front of variable declarations, such keyword will be completely ignored
by all processing done on the file.

This is useful so that the file can be sourced, without modifications, in shell terminals.

Example:

```text
export MY_VAR = my variable copy
```

#### CLI Options[\#](https://nodejs.org/dist/latest/docs/api/environment_variables.html\#cli-options)

`.env` files can be used to populate the `process.env` object via one the following CLI options:

- [`--env-file=file`](https://nodejs.org/dist/latest/docs/api/cli.html#--env-filefile)

- [`--env-file-if-exists=file`](https://nodejs.org/dist/latest/docs/api/cli.html#--env-file-if-existsfile)


#### Programmatic APIs[\#](https://nodejs.org/dist/latest/docs/api/environment_variables.html\#programmatic-apis)

There following two functions allow you to directly interact with `.env` files:

- [`process.loadEnvFile`](https://nodejs.org/dist/latest/docs/api/process.html#processloadenvfilepath) loads an `.env` file and populates `process.env` with its variables

- [`util.parseEnv`](https://nodejs.org/dist/latest/docs/api/util.html#utilparseenvcontent) parses the row content of an `.env` file and returns its value in an object