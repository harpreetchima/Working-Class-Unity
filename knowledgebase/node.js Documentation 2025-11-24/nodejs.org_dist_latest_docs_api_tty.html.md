---
url: "https://nodejs.org/dist/latest/docs/api/tty.html"
title: "TTY | Node.js v25.2.1 Documentation"
---

[Skip to content](https://nodejs.org/dist/latest/docs/api/tty.html#apicontent)

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
- [Table of contents](https://nodejs.org/dist/latest/docs/api/tty.html#toc-picker)




- [TTY](https://nodejs.org/dist/latest/docs/api/tty.html#tty)
  - [Class: `tty.ReadStream`](https://nodejs.org/dist/latest/docs/api/tty.html#class-ttyreadstream)
    - [`readStream.isRaw`](https://nodejs.org/dist/latest/docs/api/tty.html#readstreamisraw)
    - [`readStream.isTTY`](https://nodejs.org/dist/latest/docs/api/tty.html#readstreamistty)
    - [`readStream.setRawMode(mode)`](https://nodejs.org/dist/latest/docs/api/tty.html#readstreamsetrawmodemode)
  - [Class: `tty.WriteStream`](https://nodejs.org/dist/latest/docs/api/tty.html#class-ttywritestream)
    - [`new tty.ReadStream(fd[, options])`](https://nodejs.org/dist/latest/docs/api/tty.html#new-ttyreadstreamfd-options)
    - [`new tty.WriteStream(fd)`](https://nodejs.org/dist/latest/docs/api/tty.html#new-ttywritestreamfd)
    - [Event: `'resize'`](https://nodejs.org/dist/latest/docs/api/tty.html#event-resize)
    - [`writeStream.clearLine(dir[, callback])`](https://nodejs.org/dist/latest/docs/api/tty.html#writestreamclearlinedir-callback)
    - [`writeStream.clearScreenDown([callback])`](https://nodejs.org/dist/latest/docs/api/tty.html#writestreamclearscreendowncallback)
    - [`writeStream.columns`](https://nodejs.org/dist/latest/docs/api/tty.html#writestreamcolumns)
    - [`writeStream.cursorTo(x[, y][, callback])`](https://nodejs.org/dist/latest/docs/api/tty.html#writestreamcursortox-y-callback)
    - [`writeStream.getColorDepth([env])`](https://nodejs.org/dist/latest/docs/api/tty.html#writestreamgetcolordepthenv)
    - [`writeStream.getWindowSize()`](https://nodejs.org/dist/latest/docs/api/tty.html#writestreamgetwindowsize)
    - [`writeStream.hasColors([count][, env])`](https://nodejs.org/dist/latest/docs/api/tty.html#writestreamhascolorscount-env)
    - [`writeStream.isTTY`](https://nodejs.org/dist/latest/docs/api/tty.html#writestreamistty)
    - [`writeStream.moveCursor(dx, dy[, callback])`](https://nodejs.org/dist/latest/docs/api/tty.html#writestreammovecursordx-dy-callback)
    - [`writeStream.rows`](https://nodejs.org/dist/latest/docs/api/tty.html#writestreamrows)
  - [`tty.isatty(fd)`](https://nodejs.org/dist/latest/docs/api/tty.html#ttyisattyfd)

- [Index](https://nodejs.org/dist/latest/docs/api/tty.html#gtoc-picker)


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

- [Other versions](https://nodejs.org/dist/latest/docs/api/tty.html#alt-docs)


01. [25.x](https://nodejs.org/docs/latest-v25.x/api/tty.html)
02. [24.x **LTS**](https://nodejs.org/docs/latest-v24.x/api/tty.html)
03. [23.x](https://nodejs.org/docs/latest-v23.x/api/tty.html)
04. [22.x **LTS**](https://nodejs.org/docs/latest-v22.x/api/tty.html)
05. [21.x](https://nodejs.org/docs/latest-v21.x/api/tty.html)
06. [20.x **LTS**](https://nodejs.org/docs/latest-v20.x/api/tty.html)
07. [19.x](https://nodejs.org/docs/latest-v19.x/api/tty.html)
08. [18.x](https://nodejs.org/docs/latest-v18.x/api/tty.html)
09. [17.x](https://nodejs.org/docs/latest-v17.x/api/tty.html)
10. [16.x](https://nodejs.org/docs/latest-v16.x/api/tty.html)
11. [15.x](https://nodejs.org/docs/latest-v15.x/api/tty.html)
12. [14.x](https://nodejs.org/docs/latest-v14.x/api/tty.html)
13. [13.x](https://nodejs.org/docs/latest-v13.x/api/tty.html)
14. [12.x](https://nodejs.org/docs/latest-v12.x/api/tty.html)
15. [11.x](https://nodejs.org/docs/latest-v11.x/api/tty.html)
16. [10.x](https://nodejs.org/docs/latest-v10.x/api/tty.html)
17. [9.x](https://nodejs.org/docs/latest-v9.x/api/tty.html)
18. [8.x](https://nodejs.org/docs/latest-v8.x/api/tty.html)
19. [7.x](https://nodejs.org/docs/latest-v7.x/api/tty.html)
20. [6.x](https://nodejs.org/docs/latest-v6.x/api/tty.html)
21. [5.x](https://nodejs.org/docs/latest-v5.x/api/tty.html)
22. [4.x](https://nodejs.org/docs/latest-v4.x/api/tty.html)
23. [0.12.x](https://nodejs.org/docs/latest-v0.12.x/api/tty.html)
24. [0.10.x](https://nodejs.org/docs/latest-v0.10.x/api/tty.html)

- [Options](https://nodejs.org/dist/latest/docs/api/tty.html#options-picker)


- [View on single page](https://nodejs.org/dist/latest/docs/api/all.html)
- [View as JSON](https://nodejs.org/dist/latest/docs/api/tty.json)
- [Edit on GitHub](https://github.com/nodejs/node/edit/main/doc/api/tty.md)

* * *

Table of contents

- [TTY](https://nodejs.org/dist/latest/docs/api/tty.html#tty)
  - [Class: `tty.ReadStream`](https://nodejs.org/dist/latest/docs/api/tty.html#class-ttyreadstream)
    - [`readStream.isRaw`](https://nodejs.org/dist/latest/docs/api/tty.html#readstreamisraw)
    - [`readStream.isTTY`](https://nodejs.org/dist/latest/docs/api/tty.html#readstreamistty)
    - [`readStream.setRawMode(mode)`](https://nodejs.org/dist/latest/docs/api/tty.html#readstreamsetrawmodemode)
  - [Class: `tty.WriteStream`](https://nodejs.org/dist/latest/docs/api/tty.html#class-ttywritestream)
    - [`new tty.ReadStream(fd[, options])`](https://nodejs.org/dist/latest/docs/api/tty.html#new-ttyreadstreamfd-options)
    - [`new tty.WriteStream(fd)`](https://nodejs.org/dist/latest/docs/api/tty.html#new-ttywritestreamfd)
    - [Event: `'resize'`](https://nodejs.org/dist/latest/docs/api/tty.html#event-resize)
    - [`writeStream.clearLine(dir[, callback])`](https://nodejs.org/dist/latest/docs/api/tty.html#writestreamclearlinedir-callback)
    - [`writeStream.clearScreenDown([callback])`](https://nodejs.org/dist/latest/docs/api/tty.html#writestreamclearscreendowncallback)
    - [`writeStream.columns`](https://nodejs.org/dist/latest/docs/api/tty.html#writestreamcolumns)
    - [`writeStream.cursorTo(x[, y][, callback])`](https://nodejs.org/dist/latest/docs/api/tty.html#writestreamcursortox-y-callback)
    - [`writeStream.getColorDepth([env])`](https://nodejs.org/dist/latest/docs/api/tty.html#writestreamgetcolordepthenv)
    - [`writeStream.getWindowSize()`](https://nodejs.org/dist/latest/docs/api/tty.html#writestreamgetwindowsize)
    - [`writeStream.hasColors([count][, env])`](https://nodejs.org/dist/latest/docs/api/tty.html#writestreamhascolorscount-env)
    - [`writeStream.isTTY`](https://nodejs.org/dist/latest/docs/api/tty.html#writestreamistty)
    - [`writeStream.moveCursor(dx, dy[, callback])`](https://nodejs.org/dist/latest/docs/api/tty.html#writestreammovecursordx-dy-callback)
    - [`writeStream.rows`](https://nodejs.org/dist/latest/docs/api/tty.html#writestreamrows)
  - [`tty.isatty(fd)`](https://nodejs.org/dist/latest/docs/api/tty.html#ttyisattyfd)

## TTY[\#](https://nodejs.org/dist/latest/docs/api/tty.html\#tty)

[Stability: 2](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Stable

**Source Code:** [lib/tty.js](https://github.com/nodejs/node/blob/v25.2.1/lib/tty.js)

The `node:tty` module provides the `tty.ReadStream` and `tty.WriteStream`
classes. In most cases, it will not be necessary or possible to use this module
directly. However, it can be accessed using:

```js
const tty = require('node:tty'); copy
```

When Node.js detects that it is being run with a text terminal ("TTY")
attached, [`process.stdin`](https://nodejs.org/dist/latest/docs/api/process.html#processstdin) will, by default, be initialized as an instance of
`tty.ReadStream` and both [`process.stdout`](https://nodejs.org/dist/latest/docs/api/process.html#processstdout) and [`process.stderr`](https://nodejs.org/dist/latest/docs/api/process.html#processstderr) will, by
default, be instances of `tty.WriteStream`. The preferred method of determining
whether Node.js is being run within a TTY context is to check that the value of
the `process.stdout.isTTY` property is `true`:

```console
$ node -p -e "Boolean(process.stdout.isTTY)"
true
$ node -p -e "Boolean(process.stdout.isTTY)" | cat
false copy
```

In most cases, there should be little to no reason for an application to
manually create instances of the `tty.ReadStream` and `tty.WriteStream`
classes.

### Class: `tty.ReadStream`[\#](https://nodejs.org/dist/latest/docs/api/tty.html\#class-ttyreadstream)

Added in: v0.5.8

- Extends: [<net.Socket>](https://nodejs.org/dist/latest/docs/api/net.html#class-netsocket)

Represents the readable side of a TTY. In normal circumstances
[`process.stdin`](https://nodejs.org/dist/latest/docs/api/process.html#processstdin) will be the only `tty.ReadStream` instance in a Node.js
process and there should be no reason to create additional instances.

#### `readStream.isRaw`[\#](https://nodejs.org/dist/latest/docs/api/tty.html\#readstreamisraw)

Added in: v0.7.7

A `boolean` that is `true` if the TTY is currently configured to operate as a
raw device.

This flag is always `false` when a process starts, even if the terminal is
operating in raw mode. Its value will change with subsequent calls to
`setRawMode`.

#### `readStream.isTTY`[\#](https://nodejs.org/dist/latest/docs/api/tty.html\#readstreamistty)

Added in: v0.5.8

A `boolean` that is always `true` for `tty.ReadStream` instances.

#### `readStream.setRawMode(mode)`[\#](https://nodejs.org/dist/latest/docs/api/tty.html\#readstreamsetrawmodemode)

Added in: v0.7.7

- `mode` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) If `true`, configures the `tty.ReadStream` to operate as a
raw device. If `false`, configures the `tty.ReadStream` to operate in its
default mode. The `readStream.isRaw` property will be set to the resulting
mode.
- Returns: [<this>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this) The read stream instance.

Allows configuration of `tty.ReadStream` so that it operates as a raw device.

When in raw mode, input is always available character-by-character, not
including modifiers. Additionally, all special processing of characters by the
terminal is disabled, including echoing input
characters. `Ctrl` + `C` will no longer cause a `SIGINT` when
in this mode.

### Class: `tty.WriteStream`[\#](https://nodejs.org/dist/latest/docs/api/tty.html\#class-ttywritestream)

Added in: v0.5.8

- Extends: [<net.Socket>](https://nodejs.org/dist/latest/docs/api/net.html#class-netsocket)

Represents the writable side of a TTY. In normal circumstances,
[`process.stdout`](https://nodejs.org/dist/latest/docs/api/process.html#processstdout) and [`process.stderr`](https://nodejs.org/dist/latest/docs/api/process.html#processstderr) will be the only
`tty.WriteStream` instances created for a Node.js process and there
should be no reason to create additional instances.

#### `new tty.ReadStream(fd[, options])`[\#](https://nodejs.org/dist/latest/docs/api/tty.html\#new-ttyreadstreamfd-options)

History

| Version | Changes |
| --- | --- |
| v0.9.4 | The `options` argument is supported. |
| v0.5.8 | Added in: v0.5.8 |

- `fd` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) A file descriptor associated with a TTY.
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) Options passed to parent `net.Socket`,
see `options` of [`net.Socket` constructor](https://nodejs.org/dist/latest/docs/api/net.html#new-netsocketoptions).
- Returns: [<tty.ReadStream>](https://nodejs.org/dist/latest/docs/api/tty.html#class-ttyreadstream)

Creates a `ReadStream` for `fd` associated with a TTY.

#### `new tty.WriteStream(fd)`[\#](https://nodejs.org/dist/latest/docs/api/tty.html\#new-ttywritestreamfd)

Added in: v0.5.8

- `fd` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) A file descriptor associated with a TTY.
- Returns: [<tty.WriteStream>](https://nodejs.org/dist/latest/docs/api/tty.html#class-ttywritestream)

Creates a `WriteStream` for `fd` associated with a TTY.

#### Event: `'resize'`[\#](https://nodejs.org/dist/latest/docs/api/tty.html\#event-resize)

Added in: v0.7.7

The `'resize'` event is emitted whenever either of the `writeStream.columns`
or `writeStream.rows` properties have changed. No arguments are passed to the
listener callback when called.

```js
process.stdout.on('resize', () => {
  console.log('screen size has changed!');
  console.log(`${process.stdout.columns}x${process.stdout.rows}`);
}); copy
```

#### `writeStream.clearLine(dir[, callback])`[\#](https://nodejs.org/dist/latest/docs/api/tty.html\#writestreamclearlinedir-callback)

History

| Version | Changes |
| --- | --- |
| v12.7.0 | The stream's write() callback and return value are exposed. |
| v0.7.7 | Added in: v0.7.7 |

- `dir` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
  - `-1`: to the left from cursor
  - `1`: to the right from cursor
  - `0`: the entire line
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Invoked once the operation completes.
- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)`false` if the stream wishes for the calling code to wait
for the `'drain'` event to be emitted before continuing to write additional
data; otherwise `true`.

`writeStream.clearLine()` clears the current line of this `WriteStream` in a
direction identified by `dir`.

#### `writeStream.clearScreenDown([callback])`[\#](https://nodejs.org/dist/latest/docs/api/tty.html\#writestreamclearscreendowncallback)

History

| Version | Changes |
| --- | --- |
| v12.7.0 | The stream's write() callback and return value are exposed. |
| v0.7.7 | Added in: v0.7.7 |

- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Invoked once the operation completes.
- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)`false` if the stream wishes for the calling code to wait
for the `'drain'` event to be emitted before continuing to write additional
data; otherwise `true`.

`writeStream.clearScreenDown()` clears this `WriteStream` from the current
cursor down.

#### `writeStream.columns`[\#](https://nodejs.org/dist/latest/docs/api/tty.html\#writestreamcolumns)

Added in: v0.7.7

A `number` specifying the number of columns the TTY currently has. This property
is updated whenever the `'resize'` event is emitted.

#### `writeStream.cursorTo(x[, y][, callback])`[\#](https://nodejs.org/dist/latest/docs/api/tty.html\#writestreamcursortox-y-callback)

History

| Version | Changes |
| --- | --- |
| v12.7.0 | The stream's write() callback and return value are exposed. |
| v0.7.7 | Added in: v0.7.7 |

- `x` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `y` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Invoked once the operation completes.
- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)`false` if the stream wishes for the calling code to wait
for the `'drain'` event to be emitted before continuing to write additional
data; otherwise `true`.

`writeStream.cursorTo()` moves this `WriteStream`'s cursor to the specified
position.

#### `writeStream.getColorDepth([env])`[\#](https://nodejs.org/dist/latest/docs/api/tty.html\#writestreamgetcolordepthenv)

Added in: v9.9.0

- `env` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) An object containing the environment variables to check. This
enables simulating the usage of a specific terminal. **Default:**`process.env`.
- Returns: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Returns:

- `1` for 2,
- `4` for 16,
- `8` for 256,
- `24` for 16,777,216 colors supported.

Use this to determine what colors the terminal supports. Due to the nature of
colors in terminals it is possible to either have false positives or false
negatives. It depends on process information and the environment variables that
may lie about what terminal is used.
It is possible to pass in an `env` object to simulate the usage of a specific
terminal. This can be useful to check how specific environment settings behave.

To enforce a specific color support, use one of the below environment settings.

- 2 colors: `FORCE_COLOR = 0` (Disables colors)
- 16 colors: `FORCE_COLOR = 1`
- 256 colors: `FORCE_COLOR = 2`
- 16,777,216 colors: `FORCE_COLOR = 3`

Disabling color support is also possible by using the `NO_COLOR` and
`NODE_DISABLE_COLORS` environment variables.

#### `writeStream.getWindowSize()`[\#](https://nodejs.org/dist/latest/docs/api/tty.html\#writestreamgetwindowsize)

Added in: v0.7.7

- Returns: [<number\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

`writeStream.getWindowSize()` returns the size of the TTY
corresponding to this `WriteStream`. The array is of the type
`[numColumns, numRows]` where `numColumns` and `numRows` represent the number
of columns and rows in the corresponding TTY.

#### `writeStream.hasColors([count][, env])`[\#](https://nodejs.org/dist/latest/docs/api/tty.html\#writestreamhascolorscount-env)

Added in: v11.13.0, v10.16.0

- `count` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The number of colors that are requested (minimum 2).
**Default:** 16.
- `env` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) An object containing the environment variables to check. This
enables simulating the usage of a specific terminal. **Default:**`process.env`.
- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)

Returns `true` if the `writeStream` supports at least as many colors as provided
in `count`. Minimum support is 2 (black and white).

This has the same false positives and negatives as described in
[`writeStream.getColorDepth()`](https://nodejs.org/dist/latest/docs/api/tty.html#writestreamgetcolordepthenv).

```js
process.stdout.hasColors();
// Returns true or false depending on if `stdout` supports at least 16 colors.
process.stdout.hasColors(256);
// Returns true or false depending on if `stdout` supports at least 256 colors.
process.stdout.hasColors({ TMUX: '1' });
// Returns true.
process.stdout.hasColors(2 ** 24, { TMUX: '1' });
// Returns false (the environment setting pretends to support 2 ** 8 colors). copy
```

#### `writeStream.isTTY`[\#](https://nodejs.org/dist/latest/docs/api/tty.html\#writestreamistty)

Added in: v0.5.8

A `boolean` that is always `true`.

#### `writeStream.moveCursor(dx, dy[, callback])`[\#](https://nodejs.org/dist/latest/docs/api/tty.html\#writestreammovecursordx-dy-callback)

History

| Version | Changes |
| --- | --- |
| v12.7.0 | The stream's write() callback and return value are exposed. |
| v0.7.7 | Added in: v0.7.7 |

- `dx` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `dy` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Invoked once the operation completes.
- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)`false` if the stream wishes for the calling code to wait
for the `'drain'` event to be emitted before continuing to write additional
data; otherwise `true`.

`writeStream.moveCursor()` moves this `WriteStream`'s cursor _relative_ to its
current position.

#### `writeStream.rows`[\#](https://nodejs.org/dist/latest/docs/api/tty.html\#writestreamrows)

Added in: v0.7.7

A `number` specifying the number of rows the TTY currently has. This property
is updated whenever the `'resize'` event is emitted.

### `tty.isatty(fd)`[\#](https://nodejs.org/dist/latest/docs/api/tty.html\#ttyisattyfd)

Added in: v0.5.8

- `fd` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) A numeric file descriptor
- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)

The `tty.isatty()` method returns `true` if the given `fd` is associated with
a TTY and `false` if it is not, including whenever `fd` is not a non-negative
integer.