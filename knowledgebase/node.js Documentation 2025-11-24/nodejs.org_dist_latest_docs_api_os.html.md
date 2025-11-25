---
url: "https://nodejs.org/dist/latest/docs/api/os.html"
title: "OS | Node.js v25.2.1 Documentation"
---

[Skip to content](https://nodejs.org/dist/latest/docs/api/os.html#apicontent)

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
- [Table of contents](https://nodejs.org/dist/latest/docs/api/os.html#toc-picker)




- [OS](https://nodejs.org/dist/latest/docs/api/os.html#os)
  - [`os.EOL`](https://nodejs.org/dist/latest/docs/api/os.html#oseol)
  - [`os.availableParallelism()`](https://nodejs.org/dist/latest/docs/api/os.html#osavailableparallelism)
  - [`os.arch()`](https://nodejs.org/dist/latest/docs/api/os.html#osarch)
  - [`os.constants`](https://nodejs.org/dist/latest/docs/api/os.html#osconstants)
  - [`os.cpus()`](https://nodejs.org/dist/latest/docs/api/os.html#oscpus)
  - [`os.devNull`](https://nodejs.org/dist/latest/docs/api/os.html#osdevnull)
  - [`os.endianness()`](https://nodejs.org/dist/latest/docs/api/os.html#osendianness)
  - [`os.freemem()`](https://nodejs.org/dist/latest/docs/api/os.html#osfreemem)
  - [`os.getPriority([pid])`](https://nodejs.org/dist/latest/docs/api/os.html#osgetprioritypid)
  - [`os.homedir()`](https://nodejs.org/dist/latest/docs/api/os.html#oshomedir)
  - [`os.hostname()`](https://nodejs.org/dist/latest/docs/api/os.html#oshostname)
  - [`os.loadavg()`](https://nodejs.org/dist/latest/docs/api/os.html#osloadavg)
  - [`os.machine()`](https://nodejs.org/dist/latest/docs/api/os.html#osmachine)
  - [`os.networkInterfaces()`](https://nodejs.org/dist/latest/docs/api/os.html#osnetworkinterfaces)
  - [`os.platform()`](https://nodejs.org/dist/latest/docs/api/os.html#osplatform)
  - [`os.release()`](https://nodejs.org/dist/latest/docs/api/os.html#osrelease)
  - [`os.setPriority([pid, ]priority)`](https://nodejs.org/dist/latest/docs/api/os.html#ossetprioritypid-priority)
  - [`os.tmpdir()`](https://nodejs.org/dist/latest/docs/api/os.html#ostmpdir)
  - [`os.totalmem()`](https://nodejs.org/dist/latest/docs/api/os.html#ostotalmem)
  - [`os.type()`](https://nodejs.org/dist/latest/docs/api/os.html#ostype)
  - [`os.uptime()`](https://nodejs.org/dist/latest/docs/api/os.html#osuptime)
  - [`os.userInfo([options])`](https://nodejs.org/dist/latest/docs/api/os.html#osuserinfooptions)
  - [`os.version()`](https://nodejs.org/dist/latest/docs/api/os.html#osversion)
  - [OS constants](https://nodejs.org/dist/latest/docs/api/os.html#os-constants)
    - [Signal constants](https://nodejs.org/dist/latest/docs/api/os.html#signal-constants)
    - [Error constants](https://nodejs.org/dist/latest/docs/api/os.html#error-constants)
      - [POSIX error constants](https://nodejs.org/dist/latest/docs/api/os.html#posix-error-constants)
      - [Windows-specific error constants](https://nodejs.org/dist/latest/docs/api/os.html#windows-specific-error-constants)
    - [dlopen constants](https://nodejs.org/dist/latest/docs/api/os.html#dlopen-constants)
    - [Priority constants](https://nodejs.org/dist/latest/docs/api/os.html#priority-constants)
    - [libuv constants](https://nodejs.org/dist/latest/docs/api/os.html#libuv-constants)

- [Index](https://nodejs.org/dist/latest/docs/api/os.html#gtoc-picker)


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

- [Other versions](https://nodejs.org/dist/latest/docs/api/os.html#alt-docs)


01. [25.x](https://nodejs.org/docs/latest-v25.x/api/os.html)
02. [24.x **LTS**](https://nodejs.org/docs/latest-v24.x/api/os.html)
03. [23.x](https://nodejs.org/docs/latest-v23.x/api/os.html)
04. [22.x **LTS**](https://nodejs.org/docs/latest-v22.x/api/os.html)
05. [21.x](https://nodejs.org/docs/latest-v21.x/api/os.html)
06. [20.x **LTS**](https://nodejs.org/docs/latest-v20.x/api/os.html)
07. [19.x](https://nodejs.org/docs/latest-v19.x/api/os.html)
08. [18.x](https://nodejs.org/docs/latest-v18.x/api/os.html)
09. [17.x](https://nodejs.org/docs/latest-v17.x/api/os.html)
10. [16.x](https://nodejs.org/docs/latest-v16.x/api/os.html)
11. [15.x](https://nodejs.org/docs/latest-v15.x/api/os.html)
12. [14.x](https://nodejs.org/docs/latest-v14.x/api/os.html)
13. [13.x](https://nodejs.org/docs/latest-v13.x/api/os.html)
14. [12.x](https://nodejs.org/docs/latest-v12.x/api/os.html)
15. [11.x](https://nodejs.org/docs/latest-v11.x/api/os.html)
16. [10.x](https://nodejs.org/docs/latest-v10.x/api/os.html)
17. [9.x](https://nodejs.org/docs/latest-v9.x/api/os.html)
18. [8.x](https://nodejs.org/docs/latest-v8.x/api/os.html)
19. [7.x](https://nodejs.org/docs/latest-v7.x/api/os.html)
20. [6.x](https://nodejs.org/docs/latest-v6.x/api/os.html)
21. [5.x](https://nodejs.org/docs/latest-v5.x/api/os.html)
22. [4.x](https://nodejs.org/docs/latest-v4.x/api/os.html)
23. [0.12.x](https://nodejs.org/docs/latest-v0.12.x/api/os.html)
24. [0.10.x](https://nodejs.org/docs/latest-v0.10.x/api/os.html)

- [Options](https://nodejs.org/dist/latest/docs/api/os.html#options-picker)


- [View on single page](https://nodejs.org/dist/latest/docs/api/all.html)
- [View as JSON](https://nodejs.org/dist/latest/docs/api/os.json)
- [Edit on GitHub](https://github.com/nodejs/node/edit/main/doc/api/os.md)

* * *

Table of contents

- [OS](https://nodejs.org/dist/latest/docs/api/os.html#os)
  - [`os.EOL`](https://nodejs.org/dist/latest/docs/api/os.html#oseol)
  - [`os.availableParallelism()`](https://nodejs.org/dist/latest/docs/api/os.html#osavailableparallelism)
  - [`os.arch()`](https://nodejs.org/dist/latest/docs/api/os.html#osarch)
  - [`os.constants`](https://nodejs.org/dist/latest/docs/api/os.html#osconstants)
  - [`os.cpus()`](https://nodejs.org/dist/latest/docs/api/os.html#oscpus)
  - [`os.devNull`](https://nodejs.org/dist/latest/docs/api/os.html#osdevnull)
  - [`os.endianness()`](https://nodejs.org/dist/latest/docs/api/os.html#osendianness)
  - [`os.freemem()`](https://nodejs.org/dist/latest/docs/api/os.html#osfreemem)
  - [`os.getPriority([pid])`](https://nodejs.org/dist/latest/docs/api/os.html#osgetprioritypid)
  - [`os.homedir()`](https://nodejs.org/dist/latest/docs/api/os.html#oshomedir)
  - [`os.hostname()`](https://nodejs.org/dist/latest/docs/api/os.html#oshostname)
  - [`os.loadavg()`](https://nodejs.org/dist/latest/docs/api/os.html#osloadavg)
  - [`os.machine()`](https://nodejs.org/dist/latest/docs/api/os.html#osmachine)
  - [`os.networkInterfaces()`](https://nodejs.org/dist/latest/docs/api/os.html#osnetworkinterfaces)
  - [`os.platform()`](https://nodejs.org/dist/latest/docs/api/os.html#osplatform)
  - [`os.release()`](https://nodejs.org/dist/latest/docs/api/os.html#osrelease)
  - [`os.setPriority([pid, ]priority)`](https://nodejs.org/dist/latest/docs/api/os.html#ossetprioritypid-priority)
  - [`os.tmpdir()`](https://nodejs.org/dist/latest/docs/api/os.html#ostmpdir)
  - [`os.totalmem()`](https://nodejs.org/dist/latest/docs/api/os.html#ostotalmem)
  - [`os.type()`](https://nodejs.org/dist/latest/docs/api/os.html#ostype)
  - [`os.uptime()`](https://nodejs.org/dist/latest/docs/api/os.html#osuptime)
  - [`os.userInfo([options])`](https://nodejs.org/dist/latest/docs/api/os.html#osuserinfooptions)
  - [`os.version()`](https://nodejs.org/dist/latest/docs/api/os.html#osversion)
  - [OS constants](https://nodejs.org/dist/latest/docs/api/os.html#os-constants)
    - [Signal constants](https://nodejs.org/dist/latest/docs/api/os.html#signal-constants)
    - [Error constants](https://nodejs.org/dist/latest/docs/api/os.html#error-constants)
      - [POSIX error constants](https://nodejs.org/dist/latest/docs/api/os.html#posix-error-constants)
      - [Windows-specific error constants](https://nodejs.org/dist/latest/docs/api/os.html#windows-specific-error-constants)
    - [dlopen constants](https://nodejs.org/dist/latest/docs/api/os.html#dlopen-constants)
    - [Priority constants](https://nodejs.org/dist/latest/docs/api/os.html#priority-constants)
    - [libuv constants](https://nodejs.org/dist/latest/docs/api/os.html#libuv-constants)

## OS[\#](https://nodejs.org/dist/latest/docs/api/os.html\#os)

[Stability: 2](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Stable

**Source Code:** [lib/os.js](https://github.com/nodejs/node/blob/v25.2.1/lib/os.js)

The `node:os` module provides operating system-related utility methods and
properties. It can be accessed using:

```js
import os from 'node:os';const os = require('node:os');copy
```

### `os.EOL`[\#](https://nodejs.org/dist/latest/docs/api/os.html\#oseol)

Added in: v0.7.8

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

The operating system-specific end-of-line marker.

- `\n` on POSIX
- `\r\n` on Windows

### `os.availableParallelism()`[\#](https://nodejs.org/dist/latest/docs/api/os.html\#osavailableparallelism)

Added in: v19.4.0, v18.14.0

- Returns: [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Returns an estimate of the default amount of parallelism a program should use.
Always returns a value greater than zero.

This function is a small wrapper about libuv's [`uv_available_parallelism()`](https://docs.libuv.org/en/v1.x/misc.html#c.uv_available_parallelism).

### `os.arch()`[\#](https://nodejs.org/dist/latest/docs/api/os.html\#osarch)

Added in: v0.5.0

- Returns: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

Returns the operating system CPU architecture for which the Node.js binary was
compiled. Possible values are `'arm'`, `'arm64'`, `'ia32'`, `'loong64'`,
`'mips'`, `'mipsel'`, `'ppc64'`, `'riscv64'`, `'s390x'`, and `'x64'`.

The return value is equivalent to [`process.arch`](https://nodejs.org/dist/latest/docs/api/process.html#processarch).

### `os.constants`[\#](https://nodejs.org/dist/latest/docs/api/os.html\#osconstants)

Added in: v6.3.0

- Type: [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Contains commonly used operating system-specific constants for error codes,
process signals, and so on. The specific constants defined are described in
[OS constants](https://nodejs.org/dist/latest/docs/api/os.html#os-constants).

### `os.cpus()`[\#](https://nodejs.org/dist/latest/docs/api/os.html\#oscpus)

Added in: v0.3.3

- Returns: [<Object\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Returns an array of objects containing information about each logical CPU core.
The array will be empty if no CPU information is available, such as if the
`/proc` file system is unavailable.

The properties included on each object include:

- `model` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `speed` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) (in MHz)
- `times` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `user` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The number of milliseconds the CPU has spent in user mode.
  - `nice` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The number of milliseconds the CPU has spent in nice mode.
  - `sys` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The number of milliseconds the CPU has spent in sys mode.
  - `idle` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The number of milliseconds the CPU has spent in idle mode.
  - `irq` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The number of milliseconds the CPU has spent in irq mode.

```js
[\
  {\
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',\
    speed: 2926,\
    times: {\
      user: 252020,\
      nice: 0,\
      sys: 30340,\
      idle: 1070356870,\
      irq: 0,\
    },\
  },\
  {\
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',\
    speed: 2926,\
    times: {\
      user: 306960,\
      nice: 0,\
      sys: 26980,\
      idle: 1071569080,\
      irq: 0,\
    },\
  },\
  {\
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',\
    speed: 2926,\
    times: {\
      user: 248450,\
      nice: 0,\
      sys: 21750,\
      idle: 1070919370,\
      irq: 0,\
    },\
  },\
  {\
    model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',\
    speed: 2926,\
    times: {\
      user: 256880,\
      nice: 0,\
      sys: 19430,\
      idle: 1070905480,\
      irq: 20,\
    },\
  },\
] copy
```

`nice` values are POSIX-only. On Windows, the `nice` values of all processors
are always 0.

`os.cpus().length` should not be used to calculate the amount of parallelism
available to an application. Use
[`os.availableParallelism()`](https://nodejs.org/dist/latest/docs/api/os.html#osavailableparallelism) for this purpose.

### `os.devNull`[\#](https://nodejs.org/dist/latest/docs/api/os.html\#osdevnull)

Added in: v16.3.0, v14.18.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

The platform-specific file path of the null device.

- `\\.\nul` on Windows
- `/dev/null` on POSIX

### `os.endianness()`[\#](https://nodejs.org/dist/latest/docs/api/os.html\#osendianness)

Added in: v0.9.4

- Returns: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

Returns a string identifying the endianness of the CPU for which the Node.js
binary was compiled.

Possible values are `'BE'` for big endian and `'LE'` for little endian.

### `os.freemem()`[\#](https://nodejs.org/dist/latest/docs/api/os.html\#osfreemem)

Added in: v0.3.3

- Returns: [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Returns the amount of free system memory in bytes as an integer.

### `os.getPriority([pid])`[\#](https://nodejs.org/dist/latest/docs/api/os.html\#osgetprioritypid)

Added in: v10.10.0

- `pid` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The process ID to retrieve scheduling priority for.
**Default:**`0`.
- Returns: [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Returns the scheduling priority for the process specified by `pid`. If `pid` is
not provided or is `0`, the priority of the current process is returned.

### `os.homedir()`[\#](https://nodejs.org/dist/latest/docs/api/os.html\#oshomedir)

Added in: v2.3.0

- Returns: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

Returns the string path of the current user's home directory.

On POSIX, it uses the `$HOME` environment variable if defined. Otherwise it
uses the [effective UID](https://en.wikipedia.org/wiki/User_identifier#Effective_user_ID) to look up the user's home directory.

On Windows, it uses the `USERPROFILE` environment variable if defined.
Otherwise it uses the path to the profile directory of the current user.

### `os.hostname()`[\#](https://nodejs.org/dist/latest/docs/api/os.html\#oshostname)

Added in: v0.3.3

- Returns: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

Returns the host name of the operating system as a string.

### `os.loadavg()`[\#](https://nodejs.org/dist/latest/docs/api/os.html\#osloadavg)

Added in: v0.3.3

- Returns: [<number\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Returns an array containing the 1, 5, and 15 minute load averages.

The load average is a measure of system activity calculated by the operating
system and expressed as a fractional number.

The load average is a Unix-specific concept. On Windows, the return value is
always `[0, 0, 0]`.

### `os.machine()`[\#](https://nodejs.org/dist/latest/docs/api/os.html\#osmachine)

Added in: v18.9.0, v16.18.0

- Returns: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

Returns the machine type as a string, such as `arm`, `arm64`, `aarch64`,
`mips`, `mips64`, `ppc64`, `ppc64le`, `s390x`, `i386`, `i686`, `x86_64`.

On POSIX systems, the machine type is determined by calling
[`uname(3)`](https://linux.die.net/man/3/uname). On Windows, `RtlGetVersion()` is used, and if it is not
available, `GetVersionExW()` will be used. See
[https://en.wikipedia.org/wiki/Uname#Examples](https://en.wikipedia.org/wiki/Uname#Examples) for more information.

### `os.networkInterfaces()`[\#](https://nodejs.org/dist/latest/docs/api/os.html\#osnetworkinterfaces)

History

| Version | Changes |
| --- | --- |
| v18.4.0 | The `family` property now returns a string instead of a number. |
| v18.0.0 | The `family` property now returns a number instead of a string. |
| v0.6.0 | Added in: v0.6.0 |

- Returns: [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Returns an object containing network interfaces that have been assigned a
network address.

Each key on the returned object identifies a network interface. The associated
value is an array of objects that each describe an assigned network address.

The properties available on the assigned network address object include:

- `address` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) The assigned IPv4 or IPv6 address
- `netmask` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) The IPv4 or IPv6 network mask
- `family` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Either `IPv4` or `IPv6`
- `mac` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) The MAC address of the network interface
- `internal` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)`true` if the network interface is a loopback or
similar interface that is not remotely accessible; otherwise `false`
- `scopeid` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The numeric IPv6 scope ID (only specified when `family`
is `IPv6`)
- `cidr` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) The assigned IPv4 or IPv6 address with the routing prefix
in CIDR notation. If the `netmask` is invalid, this property is set
to `null`.

```js
{
  lo: [\
    {\
      address: '127.0.0.1',\
      netmask: '255.0.0.0',\
      family: 'IPv4',\
      mac: '00:00:00:00:00:00',\
      internal: true,\
      cidr: '127.0.0.1/8'\
    },\
    {\
      address: '::1',\
      netmask: 'ffff:ffff:ffff:ffff:ffff:ffff:ffff:ffff',\
      family: 'IPv6',\
      mac: '00:00:00:00:00:00',\
      scopeid: 0,\
      internal: true,\
      cidr: '::1/128'\
    }\
  ],
  eth0: [\
    {\
      address: '192.168.1.108',\
      netmask: '255.255.255.0',\
      family: 'IPv4',\
      mac: '01:02:03:0a:0b:0c',\
      internal: false,\
      cidr: '192.168.1.108/24'\
    },\
    {\
      address: 'fe80::a00:27ff:fe4e:66a1',\
      netmask: 'ffff:ffff:ffff:ffff::',\
      family: 'IPv6',\
      mac: '01:02:03:0a:0b:0c',\
      scopeid: 1,\
      internal: false,\
      cidr: 'fe80::a00:27ff:fe4e:66a1/64'\
    }\
  ]
} copy
```

### `os.platform()`[\#](https://nodejs.org/dist/latest/docs/api/os.html\#osplatform)

Added in: v0.5.0

- Returns: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

Returns a string identifying the operating system platform for which
the Node.js binary was compiled. The value is set at compile time.
Possible values are `'aix'`, `'darwin'`, `'freebsd'`,`'linux'`,
`'openbsd'`, `'sunos'`, and `'win32'`.

The return value is equivalent to [`process.platform`](https://nodejs.org/dist/latest/docs/api/process.html#processplatform).

The value `'android'` may also be returned if Node.js is built on the Android
operating system. [Android support is experimental](https://github.com/nodejs/node/blob/HEAD/BUILDING.md#android).

### `os.release()`[\#](https://nodejs.org/dist/latest/docs/api/os.html\#osrelease)

Added in: v0.3.3

- Returns: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

Returns the operating system as a string.

On POSIX systems, the operating system release is determined by calling
[`uname(3)`](https://linux.die.net/man/3/uname). On Windows, `GetVersionExW()` is used. See
[https://en.wikipedia.org/wiki/Uname#Examples](https://en.wikipedia.org/wiki/Uname#Examples) for more information.

### `os.setPriority([pid, ]priority)`[\#](https://nodejs.org/dist/latest/docs/api/os.html\#ossetprioritypid-priority)

Added in: v10.10.0

- `pid` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The process ID to set scheduling priority for.
**Default:**`0`.
- `priority` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The scheduling priority to assign to the process.

Attempts to set the scheduling priority for the process specified by `pid`. If
`pid` is not provided or is `0`, the process ID of the current process is used.

The `priority` input must be an integer between `-20` (high priority) and `19`
(low priority). Due to differences between Unix priority levels and Windows
priority classes, `priority` is mapped to one of six priority constants in
`os.constants.priority`. When retrieving a process priority level, this range
mapping may cause the return value to be slightly different on Windows. To avoid
confusion, set `priority` to one of the priority constants.

On Windows, setting priority to `PRIORITY_HIGHEST` requires elevated user
privileges. Otherwise the set priority will be silently reduced to
`PRIORITY_HIGH`.

### `os.tmpdir()`[\#](https://nodejs.org/dist/latest/docs/api/os.html\#ostmpdir)

History

| Version | Changes |
| --- | --- |
| v2.0.0 | This function is now cross-platform consistent and no longer returns a path with a trailing slash on any platform. |
| v0.9.9 | Added in: v0.9.9 |

- Returns: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

Returns the operating system's default directory for temporary files as a
string.

On Windows, the result can be overridden by `TEMP` and `TMP` environment variables, and
`TEMP` takes precedence over `TMP`. If neither is set, it defaults to `%SystemRoot%\temp`
or `%windir%\temp`.

On non-Windows platforms, `TMPDIR`, `TMP` and `TEMP` environment variables will be checked
to override the result of this method, in the described order. If none of them is set, it
defaults to `/tmp`.

Some operating system distributions would either configure `TMPDIR` (non-Windows) or
`TEMP` and `TMP` (Windows) by default without additional configurations by the system
administrators. The result of `os.tmpdir()` typically reflects the system preference
unless it's explicitly overridden by the users.

### `os.totalmem()`[\#](https://nodejs.org/dist/latest/docs/api/os.html\#ostotalmem)

Added in: v0.3.3

- Returns: [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Returns the total amount of system memory in bytes as an integer.

### `os.type()`[\#](https://nodejs.org/dist/latest/docs/api/os.html\#ostype)

Added in: v0.3.3

- Returns: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

Returns the operating system name as returned by [`uname(3)`](https://linux.die.net/man/3/uname). For example, it
returns `'Linux'` on Linux, `'Darwin'` on macOS, and `'Windows_NT'` on Windows.

See [https://en.wikipedia.org/wiki/Uname#Examples](https://en.wikipedia.org/wiki/Uname#Examples) for additional information
about the output of running [`uname(3)`](https://linux.die.net/man/3/uname) on various operating systems.

### `os.uptime()`[\#](https://nodejs.org/dist/latest/docs/api/os.html\#osuptime)

History

| Version | Changes |
| --- | --- |
| v10.0.0 | The result of this function no longer contains a fraction component on Windows. |
| v0.3.3 | Added in: v0.3.3 |

- Returns: [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Returns the system uptime in number of seconds.

### `os.userInfo([options])`[\#](https://nodejs.org/dist/latest/docs/api/os.html\#osuserinfooptions)

Added in: v6.0.0

- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Character encoding used to interpret resulting strings.
    If `encoding` is set to `'buffer'`, the `username`, `shell`, and `homedir`
    values will be `Buffer` instances. **Default:**`'utf8'`.
- Returns: [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Returns information about the currently effective user. On POSIX platforms,
this is typically a subset of the password file. The returned object includes
the `username`, `uid`, `gid`, `shell`, and `homedir`. On Windows, the `uid` and
`gid` fields are `-1`, and `shell` is `null`.

The value of `homedir` returned by `os.userInfo()` is provided by the operating
system. This differs from the result of `os.homedir()`, which queries
environment variables for the home directory before falling back to the
operating system response.

Throws a [`SystemError`](https://nodejs.org/dist/latest/docs/api/errors.html#class-systemerror) if a user has no `username` or `homedir`.

### `os.version()`[\#](https://nodejs.org/dist/latest/docs/api/os.html\#osversion)

Added in: v13.11.0, v12.17.0

- Returns: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

Returns a string identifying the kernel version.

On POSIX systems, the operating system release is determined by calling
[`uname(3)`](https://linux.die.net/man/3/uname). On Windows, `RtlGetVersion()` is used, and if it is not
available, `GetVersionExW()` will be used. See
[https://en.wikipedia.org/wiki/Uname#Examples](https://en.wikipedia.org/wiki/Uname#Examples) for more information.

### OS constants[\#](https://nodejs.org/dist/latest/docs/api/os.html\#os-constants)

The following constants are exported by `os.constants`.

Not all constants will be available on every operating system.

#### Signal constants[\#](https://nodejs.org/dist/latest/docs/api/os.html\#signal-constants)

History

| Version | Changes |
| --- | --- |
| v5.11.0 | Added support for `SIGINFO`. |

The following signal constants are exported by `os.constants.signals`.

| Constant | Description |
| --- | --- |
| `SIGHUP` | Sent to indicate when a controlling terminal is closed or a parent<br> process exits. |
| `SIGINT` | Sent to indicate when a user wishes to interrupt a process<br> ( `Ctrl` + `C`). |
| `SIGQUIT` | Sent to indicate when a user wishes to terminate a process and perform a<br> core dump. |
| `SIGILL` | Sent to a process to notify that it has attempted to perform an illegal,<br> malformed, unknown, or privileged instruction. |
| `SIGTRAP` | Sent to a process when an exception has occurred. |
| `SIGABRT` | Sent to a process to request that it abort. |
| `SIGIOT` | Synonym for `SIGABRT` |
| `SIGBUS` | Sent to a process to notify that it has caused a bus error. |
| `SIGFPE` | Sent to a process to notify that it has performed an illegal arithmetic<br> operation. |
| `SIGKILL` | Sent to a process to terminate it immediately. |
| `SIGUSR1``SIGUSR2` | Sent to a process to identify user-defined conditions. |
| `SIGSEGV` | Sent to a process to notify of a segmentation fault. |
| `SIGPIPE` | Sent to a process when it has attempted to write to a disconnected<br> pipe. |
| `SIGALRM` | Sent to a process when a system timer elapses. |
| `SIGTERM` | Sent to a process to request termination. |
| `SIGCHLD` | Sent to a process when a child process terminates. |
| `SIGSTKFLT` | Sent to a process to indicate a stack fault on a coprocessor. |
| `SIGCONT` | Sent to instruct the operating system to continue a paused process. |
| `SIGSTOP` | Sent to instruct the operating system to halt a process. |
| `SIGTSTP` | Sent to a process to request it to stop. |
| `SIGBREAK` | Sent to indicate when a user wishes to interrupt a process. |
| `SIGTTIN` | Sent to a process when it reads from the TTY while in the<br> background. |
| `SIGTTOU` | Sent to a process when it writes to the TTY while in the<br> background. |
| `SIGURG` | Sent to a process when a socket has urgent data to read. |
| `SIGXCPU` | Sent to a process when it has exceeded its limit on CPU usage. |
| `SIGXFSZ` | Sent to a process when it grows a file larger than the maximum<br> allowed. |
| `SIGVTALRM` | Sent to a process when a virtual timer has elapsed. |
| `SIGPROF` | Sent to a process when a system timer has elapsed. |
| `SIGWINCH` | Sent to a process when the controlling terminal has changed its<br> size. |
| `SIGIO` | Sent to a process when I/O is available. |
| `SIGPOLL` | Synonym for `SIGIO` |
| `SIGLOST` | Sent to a process when a file lock has been lost. |
| `SIGPWR` | Sent to a process to notify of a power failure. |
| `SIGINFO` | Synonym for `SIGPWR` |
| `SIGSYS` | Sent to a process to notify of a bad argument. |
| `SIGUNUSED` | Synonym for `SIGSYS` |

#### Error constants[\#](https://nodejs.org/dist/latest/docs/api/os.html\#error-constants)

The following error constants are exported by `os.constants.errno`.

##### POSIX error constants[\#](https://nodejs.org/dist/latest/docs/api/os.html\#posix-error-constants)

| Constant | Description |
| --- | --- |
| `E2BIG` | Indicates that the list of arguments is longer than expected. |
| `EACCES` | Indicates that the operation did not have sufficient permissions. |
| `EADDRINUSE` | Indicates that the network address is already in use. |
| `EADDRNOTAVAIL` | Indicates that the network address is currently unavailable for<br> use. |
| `EAFNOSUPPORT` | Indicates that the network address family is not supported. |
| `EAGAIN` | Indicates that there is no data available and to try the<br> operation again later. |
| `EALREADY` | Indicates that the socket already has a pending connection in<br> progress. |
| `EBADF` | Indicates that a file descriptor is not valid. |
| `EBADMSG` | Indicates an invalid data message. |
| `EBUSY` | Indicates that a device or resource is busy. |
| `ECANCELED` | Indicates that an operation was canceled. |
| `ECHILD` | Indicates that there are no child processes. |
| `ECONNABORTED` | Indicates that the network connection has been aborted. |
| `ECONNREFUSED` | Indicates that the network connection has been refused. |
| `ECONNRESET` | Indicates that the network connection has been reset. |
| `EDEADLK` | Indicates that a resource deadlock has been avoided. |
| `EDESTADDRREQ` | Indicates that a destination address is required. |
| `EDOM` | Indicates that an argument is out of the domain of the function. |
| `EDQUOT` | Indicates that the disk quota has been exceeded. |
| `EEXIST` | Indicates that the file already exists. |
| `EFAULT` | Indicates an invalid pointer address. |
| `EFBIG` | Indicates that the file is too large. |
| `EHOSTUNREACH` | Indicates that the host is unreachable. |
| `EIDRM` | Indicates that the identifier has been removed. |
| `EILSEQ` | Indicates an illegal byte sequence. |
| `EINPROGRESS` | Indicates that an operation is already in progress. |
| `EINTR` | Indicates that a function call was interrupted. |
| `EINVAL` | Indicates that an invalid argument was provided. |
| `EIO` | Indicates an otherwise unspecified I/O error. |
| `EISCONN` | Indicates that the socket is connected. |
| `EISDIR` | Indicates that the path is a directory. |
| `ELOOP` | Indicates too many levels of symbolic links in a path. |
| `EMFILE` | Indicates that there are too many open files. |
| `EMLINK` | Indicates that there are too many hard links to a file. |
| `EMSGSIZE` | Indicates that the provided message is too long. |
| `EMULTIHOP` | Indicates that a multihop was attempted. |
| `ENAMETOOLONG` | Indicates that the filename is too long. |
| `ENETDOWN` | Indicates that the network is down. |
| `ENETRESET` | Indicates that the connection has been aborted by the network. |
| `ENETUNREACH` | Indicates that the network is unreachable. |
| `ENFILE` | Indicates too many open files in the system. |
| `ENOBUFS` | Indicates that no buffer space is available. |
| `ENODATA` | Indicates that no message is available on the stream head read<br> queue. |
| `ENODEV` | Indicates that there is no such device. |
| `ENOENT` | Indicates that there is no such file or directory. |
| `ENOEXEC` | Indicates an exec format error. |
| `ENOLCK` | Indicates that there are no locks available. |
| `ENOLINK` | Indications that a link has been severed. |
| `ENOMEM` | Indicates that there is not enough space. |
| `ENOMSG` | Indicates that there is no message of the desired type. |
| `ENOPROTOOPT` | Indicates that a given protocol is not available. |
| `ENOSPC` | Indicates that there is no space available on the device. |
| `ENOSR` | Indicates that there are no stream resources available. |
| `ENOSTR` | Indicates that a given resource is not a stream. |
| `ENOSYS` | Indicates that a function has not been implemented. |
| `ENOTCONN` | Indicates that the socket is not connected. |
| `ENOTDIR` | Indicates that the path is not a directory. |
| `ENOTEMPTY` | Indicates that the directory is not empty. |
| `ENOTSOCK` | Indicates that the given item is not a socket. |
| `ENOTSUP` | Indicates that a given operation is not supported. |
| `ENOTTY` | Indicates an inappropriate I/O control operation. |
| `ENXIO` | Indicates no such device or address. |
| `EOPNOTSUPP` | Indicates that an operation is not supported on the socket. Although<br> `ENOTSUP` and `EOPNOTSUPP` have the same value<br> on Linux, according to POSIX.1 these error values should be distinct.) |
| `EOVERFLOW` | Indicates that a value is too large to be stored in a given data<br> type. |
| `EPERM` | Indicates that the operation is not permitted. |
| `EPIPE` | Indicates a broken pipe. |
| `EPROTO` | Indicates a protocol error. |
| `EPROTONOSUPPORT` | Indicates that a protocol is not supported. |
| `EPROTOTYPE` | Indicates the wrong type of protocol for a socket. |
| `ERANGE` | Indicates that the results are too large. |
| `EROFS` | Indicates that the file system is read only. |
| `ESPIPE` | Indicates an invalid seek operation. |
| `ESRCH` | Indicates that there is no such process. |
| `ESTALE` | Indicates that the file handle is stale. |
| `ETIME` | Indicates an expired timer. |
| `ETIMEDOUT` | Indicates that the connection timed out. |
| `ETXTBSY` | Indicates that a text file is busy. |
| `EWOULDBLOCK` | Indicates that the operation would block. |
| `EXDEV` | Indicates an improper link. |

##### Windows-specific error constants[\#](https://nodejs.org/dist/latest/docs/api/os.html\#windows-specific-error-constants)

The following error codes are specific to the Windows operating system.

| Constant | Description |
| --- | --- |
| `WSAEINTR` | Indicates an interrupted function call. |
| `WSAEBADF` | Indicates an invalid file handle. |
| `WSAEACCES` | Indicates insufficient permissions to complete the operation. |
| `WSAEFAULT` | Indicates an invalid pointer address. |
| `WSAEINVAL` | Indicates that an invalid argument was passed. |
| `WSAEMFILE` | Indicates that there are too many open files. |
| `WSAEWOULDBLOCK` | Indicates that a resource is temporarily unavailable. |
| `WSAEINPROGRESS` | Indicates that an operation is currently in progress. |
| `WSAEALREADY` | Indicates that an operation is already in progress. |
| `WSAENOTSOCK` | Indicates that the resource is not a socket. |
| `WSAEDESTADDRREQ` | Indicates that a destination address is required. |
| `WSAEMSGSIZE` | Indicates that the message size is too long. |
| `WSAEPROTOTYPE` | Indicates the wrong protocol type for the socket. |
| `WSAENOPROTOOPT` | Indicates a bad protocol option. |
| `WSAEPROTONOSUPPORT` | Indicates that the protocol is not supported. |
| `WSAESOCKTNOSUPPORT` | Indicates that the socket type is not supported. |
| `WSAEOPNOTSUPP` | Indicates that the operation is not supported. |
| `WSAEPFNOSUPPORT` | Indicates that the protocol family is not supported. |
| `WSAEAFNOSUPPORT` | Indicates that the address family is not supported. |
| `WSAEADDRINUSE` | Indicates that the network address is already in use. |
| `WSAEADDRNOTAVAIL` | Indicates that the network address is not available. |
| `WSAENETDOWN` | Indicates that the network is down. |
| `WSAENETUNREACH` | Indicates that the network is unreachable. |
| `WSAENETRESET` | Indicates that the network connection has been reset. |
| `WSAECONNABORTED` | Indicates that the connection has been aborted. |
| `WSAECONNRESET` | Indicates that the connection has been reset by the peer. |
| `WSAENOBUFS` | Indicates that there is no buffer space available. |
| `WSAEISCONN` | Indicates that the socket is already connected. |
| `WSAENOTCONN` | Indicates that the socket is not connected. |
| `WSAESHUTDOWN` | Indicates that data cannot be sent after the socket has been<br> shutdown. |
| `WSAETOOMANYREFS` | Indicates that there are too many references. |
| `WSAETIMEDOUT` | Indicates that the connection has timed out. |
| `WSAECONNREFUSED` | Indicates that the connection has been refused. |
| `WSAELOOP` | Indicates that a name cannot be translated. |
| `WSAENAMETOOLONG` | Indicates that a name was too long. |
| `WSAEHOSTDOWN` | Indicates that a network host is down. |
| `WSAEHOSTUNREACH` | Indicates that there is no route to a network host. |
| `WSAENOTEMPTY` | Indicates that the directory is not empty. |
| `WSAEPROCLIM` | Indicates that there are too many processes. |
| `WSAEUSERS` | Indicates that the user quota has been exceeded. |
| `WSAEDQUOT` | Indicates that the disk quota has been exceeded. |
| `WSAESTALE` | Indicates a stale file handle reference. |
| `WSAEREMOTE` | Indicates that the item is remote. |
| `WSASYSNOTREADY` | Indicates that the network subsystem is not ready. |
| `WSAVERNOTSUPPORTED` | Indicates that the `winsock.dll` version is out of<br> range. |
| `WSANOTINITIALISED` | Indicates that successful WSAStartup has not yet been performed. |
| `WSAEDISCON` | Indicates that a graceful shutdown is in progress. |
| `WSAENOMORE` | Indicates that there are no more results. |
| `WSAECANCELLED` | Indicates that an operation has been canceled. |
| `WSAEINVALIDPROCTABLE` | Indicates that the procedure call table is invalid. |
| `WSAEINVALIDPROVIDER` | Indicates an invalid service provider. |
| `WSAEPROVIDERFAILEDINIT` | Indicates that the service provider failed to initialized. |
| `WSASYSCALLFAILURE` | Indicates a system call failure. |
| `WSASERVICE_NOT_FOUND` | Indicates that a service was not found. |
| `WSATYPE_NOT_FOUND` | Indicates that a class type was not found. |
| `WSA_E_NO_MORE` | Indicates that there are no more results. |
| `WSA_E_CANCELLED` | Indicates that the call was canceled. |
| `WSAEREFUSED` | Indicates that a database query was refused. |

#### dlopen constants[\#](https://nodejs.org/dist/latest/docs/api/os.html\#dlopen-constants)

If available on the operating system, the following constants
are exported in `os.constants.dlopen`. See [`dlopen(3)`](http://man7.org/linux/man-pages/man3/dlopen.3.html) for detailed
information.

| Constant | Description |
| --- | --- |
| `RTLD_LAZY` | Perform lazy binding. Node.js sets this flag by default. |
| `RTLD_NOW` | Resolve all undefined symbols in the library before dlopen(3)<br> returns. |
| `RTLD_GLOBAL` | Symbols defined by the library will be made available for symbol<br> resolution of subsequently loaded libraries. |
| `RTLD_LOCAL` | The converse of `RTLD_GLOBAL`. This is the default behavior<br> if neither flag is specified. |
| `RTLD_DEEPBIND` | Make a self-contained library use its own symbols in preference to<br> symbols from previously loaded libraries. |

#### Priority constants[\#](https://nodejs.org/dist/latest/docs/api/os.html\#priority-constants)

Added in: v10.10.0

The following process scheduling constants are exported by
`os.constants.priority`.

| Constant | Description |
| --- | --- |
| `PRIORITY_LOW` | The lowest process scheduling priority. This corresponds to<br> `IDLE_PRIORITY_CLASS` on Windows, and a nice value of<br> `19` on all other platforms. |
| `PRIORITY_BELOW_NORMAL` | The process scheduling priority above `PRIORITY_LOW` and<br> below `PRIORITY_NORMAL`. This corresponds to<br> `BELOW_NORMAL_PRIORITY_CLASS` on Windows, and a nice value of<br> `10` on all other platforms. |
| `PRIORITY_NORMAL` | The default process scheduling priority. This corresponds to<br> `NORMAL_PRIORITY_CLASS` on Windows, and a nice value of<br> `0` on all other platforms. |
| `PRIORITY_ABOVE_NORMAL` | The process scheduling priority above `PRIORITY_NORMAL` and<br> below `PRIORITY_HIGH`. This corresponds to<br> `ABOVE_NORMAL_PRIORITY_CLASS` on Windows, and a nice value of<br> `-7` on all other platforms. |
| `PRIORITY_HIGH` | The process scheduling priority above `PRIORITY_ABOVE_NORMAL`<br> and below `PRIORITY_HIGHEST`. This corresponds to<br> `HIGH_PRIORITY_CLASS` on Windows, and a nice value of<br> `-14` on all other platforms. |
| `PRIORITY_HIGHEST` | The highest process scheduling priority. This corresponds to<br> `REALTIME_PRIORITY_CLASS` on Windows, and a nice value of<br> `-20` on all other platforms. |

#### libuv constants[\#](https://nodejs.org/dist/latest/docs/api/os.html\#libuv-constants)

| Constant | Description |
| --- | --- |
| `UV_UDP_REUSEADDR` |  |