---
url: "https://nodejs.org/dist/latest/docs/api/wasi.html"
title: "WebAssembly System Interface (WASI) | Node.js v25.2.1 Documentation"
---

[Skip to content](https://nodejs.org/dist/latest/docs/api/wasi.html#apicontent)

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
- [Table of contents](https://nodejs.org/dist/latest/docs/api/wasi.html#toc-picker)




- [WebAssembly System Interface (WASI)](https://nodejs.org/dist/latest/docs/api/wasi.html#webassembly-system-interface-wasi)
  - [Security](https://nodejs.org/dist/latest/docs/api/wasi.html#security)
  - [Class: `WASI`](https://nodejs.org/dist/latest/docs/api/wasi.html#class-wasi)
    - [`new WASI([options])`](https://nodejs.org/dist/latest/docs/api/wasi.html#new-wasioptions)
    - [`wasi.getImportObject()`](https://nodejs.org/dist/latest/docs/api/wasi.html#wasigetimportobject)
    - [`wasi.start(instance)`](https://nodejs.org/dist/latest/docs/api/wasi.html#wasistartinstance)
    - [`wasi.initialize(instance)`](https://nodejs.org/dist/latest/docs/api/wasi.html#wasiinitializeinstance)
    - [`wasi.finalizeBindings(instance[, options])`](https://nodejs.org/dist/latest/docs/api/wasi.html#wasifinalizebindingsinstance-options)
    - [`wasi.wasiImport`](https://nodejs.org/dist/latest/docs/api/wasi.html#wasiwasiimport)

- [Index](https://nodejs.org/dist/latest/docs/api/wasi.html#gtoc-picker)


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

- [Other versions](https://nodejs.org/dist/latest/docs/api/wasi.html#alt-docs)


01. [25.x](https://nodejs.org/docs/latest-v25.x/api/wasi.html)
02. [24.x **LTS**](https://nodejs.org/docs/latest-v24.x/api/wasi.html)
03. [23.x](https://nodejs.org/docs/latest-v23.x/api/wasi.html)
04. [22.x **LTS**](https://nodejs.org/docs/latest-v22.x/api/wasi.html)
05. [21.x](https://nodejs.org/docs/latest-v21.x/api/wasi.html)
06. [20.x **LTS**](https://nodejs.org/docs/latest-v20.x/api/wasi.html)
07. [19.x](https://nodejs.org/docs/latest-v19.x/api/wasi.html)
08. [18.x](https://nodejs.org/docs/latest-v18.x/api/wasi.html)
09. [17.x](https://nodejs.org/docs/latest-v17.x/api/wasi.html)
10. [16.x](https://nodejs.org/docs/latest-v16.x/api/wasi.html)
11. [15.x](https://nodejs.org/docs/latest-v15.x/api/wasi.html)
12. [14.x](https://nodejs.org/docs/latest-v14.x/api/wasi.html)
13. [13.x](https://nodejs.org/docs/latest-v13.x/api/wasi.html)
14. [12.x](https://nodejs.org/docs/latest-v12.x/api/wasi.html)

- [Options](https://nodejs.org/dist/latest/docs/api/wasi.html#options-picker)


- [View on single page](https://nodejs.org/dist/latest/docs/api/all.html)
- [View as JSON](https://nodejs.org/dist/latest/docs/api/wasi.json)
- [Edit on GitHub](https://github.com/nodejs/node/edit/main/doc/api/wasi.md)

* * *

Table of contents

- [WebAssembly System Interface (WASI)](https://nodejs.org/dist/latest/docs/api/wasi.html#webassembly-system-interface-wasi)
  - [Security](https://nodejs.org/dist/latest/docs/api/wasi.html#security)
  - [Class: `WASI`](https://nodejs.org/dist/latest/docs/api/wasi.html#class-wasi)
    - [`new WASI([options])`](https://nodejs.org/dist/latest/docs/api/wasi.html#new-wasioptions)
    - [`wasi.getImportObject()`](https://nodejs.org/dist/latest/docs/api/wasi.html#wasigetimportobject)
    - [`wasi.start(instance)`](https://nodejs.org/dist/latest/docs/api/wasi.html#wasistartinstance)
    - [`wasi.initialize(instance)`](https://nodejs.org/dist/latest/docs/api/wasi.html#wasiinitializeinstance)
    - [`wasi.finalizeBindings(instance[, options])`](https://nodejs.org/dist/latest/docs/api/wasi.html#wasifinalizebindingsinstance-options)
    - [`wasi.wasiImport`](https://nodejs.org/dist/latest/docs/api/wasi.html#wasiwasiimport)

## WebAssembly System Interface (WASI)[\#](https://nodejs.org/dist/latest/docs/api/wasi.html\#webassembly-system-interface-wasi)

[Stability: 1](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Experimental

**The `node:wasi` module does not currently provide the**
**comprehensive file system security properties provided by some WASI runtimes.**
**Full support for secure file system sandboxing may or may not be implemented in**
**future. In the mean time, do not rely on it to run untrusted code.**

**Source Code:** [lib/wasi.js](https://github.com/nodejs/node/blob/v25.2.1/lib/wasi.js)

The WASI API provides an implementation of the [WebAssembly System Interface](https://wasi.dev/)
specification. WASI gives WebAssembly applications access to the underlying
operating system via a collection of POSIX-like functions.

```js
import { readFile } from 'node:fs/promises';
import { WASI } from 'node:wasi';
import { argv, env } from 'node:process';

const wasi = new WASI({
  version: 'preview1',
  args: argv,
  env,
  preopens: {
    '/local': '/some/real/path/that/wasm/can/access',
  },
});

const wasm = await WebAssembly.compile(
  await readFile(new URL('./demo.wasm', import.meta.url)),
);
const instance = await WebAssembly.instantiate(wasm, wasi.getImportObject());

wasi.start(instance);'use strict';
const { readFile } = require('node:fs/promises');
const { WASI } = require('node:wasi');
const { argv, env } = require('node:process');
const { join } = require('node:path');

const wasi = new WASI({
  version: 'preview1',
  args: argv,
  env,
  preopens: {
    '/local': '/some/real/path/that/wasm/can/access',
  },
});

(async () => {
  const wasm = await WebAssembly.compile(
    await readFile(join(__dirname, 'demo.wasm')),
  );
  const instance = await WebAssembly.instantiate(wasm, wasi.getImportObject());

  wasi.start(instance);
})();copy
```

To run the above example, create a new WebAssembly text format file named
`demo.wat`:

```text
(module
    ;; Import the required fd_write WASI function which will write the given io vectors to stdout
    ;; The function signature for fd_write is:
    ;; (File Descriptor, *iovs, iovs_len, nwritten) -> Returns number of bytes written
    (import "wasi_snapshot_preview1" "fd_write" (func $fd_write (param i32 i32 i32 i32) (result i32)))

    (memory 1)
    (export "memory" (memory 0))

    ;; Write 'hello world\n' to memory at an offset of 8 bytes
    ;; Note the trailing newline which is required for the text to appear
    (data (i32.const 8) "hello world\n")

    (func $main (export "_start")
        ;; Creating a new io vector within linear memory
        (i32.store (i32.const 0) (i32.const 8))  ;; iov.iov_base - This is a pointer to the start of the 'hello world\n' string
        (i32.store (i32.const 4) (i32.const 12))  ;; iov.iov_len - The length of the 'hello world\n' string

        (call $fd_write
            (i32.const 1) ;; file_descriptor - 1 for stdout
            (i32.const 0) ;; *iovs - The pointer to the iov array, which is stored at memory location 0
            (i32.const 1) ;; iovs_len - We're printing 1 string stored in an iov - so one.
            (i32.const 20) ;; nwritten - A place in memory to store the number of bytes written
        )
        drop ;; Discard the number of bytes written from the top of the stack
    )
) copy
```

Use [wabt](https://github.com/WebAssembly/wabt) to compile `.wat` to `.wasm`

```bash
wat2wasm demo.wat copy
```

### Security[\#](https://nodejs.org/dist/latest/docs/api/wasi.html\#security)

History

| Version | Changes |
| --- | --- |
| v21.2.0, v20.11.0 | Clarify WASI security properties. |
| v21.2.0, v20.11.0 | Added in: v21.2.0, v20.11.0 |

WASI provides a capabilities-based model through which applications are provided
their own custom `env`, `preopens`, `stdin`, `stdout`, `stderr`, and `exit`
capabilities.

**The current Node.js threat model does not provide secure sandboxing as is**
**present in some WASI runtimes.**

While the capability features are supported, they do not form a security model
in Node.js. For example, the file system sandboxing can be escaped with various
techniques. The project is exploring whether these security guarantees could be
added in future.

### Class: `WASI`[\#](https://nodejs.org/dist/latest/docs/api/wasi.html\#class-wasi)

Added in: v13.3.0, v12.16.0

The `WASI` class provides the WASI system call API and additional convenience
methods for working with WASI-based applications. Each `WASI` instance
represents a distinct environment.

#### `new WASI([options])`[\#](https://nodejs.org/dist/latest/docs/api/wasi.html\#new-wasioptions)

History

| Version | Changes |
| --- | --- |
| v20.1.0 | default value of returnOnExit changed to true. |
| v20.0.0 | The version option is now required and has no default value. |
| v19.8.0 | version field added to options. |
| v13.3.0, v12.16.0 | Added in: v13.3.0, v12.16.0 |

- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `args` [<Array>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) An array of strings that the WebAssembly application will
    see as command-line arguments. The first argument is the virtual path to the
    WASI command itself. **Default:**`[]`.
  - `env` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) An object similar to `process.env` that the WebAssembly
    application will see as its environment. **Default:**`{}`.
  - `preopens` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) This object represents the WebAssembly application's
    local directory structure. The string keys of `preopens` are treated as
    directories within the file system. The corresponding values in `preopens`
    are the real paths to those directories on the host machine.
  - `returnOnExit` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) By default, when WASI applications call
    `__wasi_proc_exit()``wasi.start()` will return with the exit code
    specified rather than terminating the process. Setting this option to
    `false` will cause the Node.js process to exit with the specified
    exit code instead. **Default:**`true`.
  - `stdin` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The file descriptor used as standard input in the
    WebAssembly application. **Default:**`0`.
  - `stdout` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The file descriptor used as standard output in the
    WebAssembly application. **Default:**`1`.
  - `stderr` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The file descriptor used as standard error in the
    WebAssembly application. **Default:**`2`.
  - `version` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) The version of WASI requested. Currently the only
    supported versions are `unstable` and `preview1`. This option is
    mandatory.

#### `wasi.getImportObject()`[\#](https://nodejs.org/dist/latest/docs/api/wasi.html\#wasigetimportobject)

Added in: v19.8.0

Return an import object that can be passed to `WebAssembly.instantiate()` if
no other WASM imports are needed beyond those provided by WASI.

If version `unstable` was passed into the constructor it will return:

```json
{ wasi_unstable: wasi.wasiImport } copy
```

If version `preview1` was passed into the constructor or no version was
specified it will return:

```json
{ wasi_snapshot_preview1: wasi.wasiImport } copy
```

#### `wasi.start(instance)`[\#](https://nodejs.org/dist/latest/docs/api/wasi.html\#wasistartinstance)

Added in: v13.3.0, v12.16.0

- `instance` [<WebAssembly.Instance>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance)

Attempt to begin execution of `instance` as a WASI command by invoking its
`_start()` export. If `instance` does not contain a `_start()` export, or if
`instance` contains an `_initialize()` export, then an exception is thrown.

`start()` requires that `instance` exports a [`WebAssembly.Memory`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory) named
`memory`. If `instance` does not have a `memory` export an exception is thrown.

If `start()` is called more than once, an exception is thrown.

#### `wasi.initialize(instance)`[\#](https://nodejs.org/dist/latest/docs/api/wasi.html\#wasiinitializeinstance)

Added in: v14.6.0, v12.19.0

- `instance` [<WebAssembly.Instance>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance)

Attempt to initialize `instance` as a WASI reactor by invoking its
`_initialize()` export, if it is present. If `instance` contains a `_start()`
export, then an exception is thrown.

`initialize()` requires that `instance` exports a [`WebAssembly.Memory`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory) named
`memory`. If `instance` does not have a `memory` export an exception is thrown.

If `initialize()` is called more than once, an exception is thrown.

#### `wasi.finalizeBindings(instance[, options])`[\#](https://nodejs.org/dist/latest/docs/api/wasi.html\#wasifinalizebindingsinstance-options)

Added in: v24.4.0

- `instance` [<WebAssembly.Instance>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `memory` [<WebAssembly.Memory>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory) **Default:**`instance.exports.memory`.

Set up WASI host bindings to `instance` without calling `initialize()`
or `start()`. This method is useful when the WASI module is instantiated in
child threads for sharing the memory across threads.

`finalizeBindings()` requires that either `instance` exports a
[`WebAssembly.Memory`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory) named `memory` or user specify a
[`WebAssembly.Memory`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory) object in `options.memory`. If the `memory` is invalid
an exception is thrown.

`start()` and `initialize()` will call `finalizeBindings()` internally.
If `finalizeBindings()` is called more than once, an exception is thrown.

#### `wasi.wasiImport`[\#](https://nodejs.org/dist/latest/docs/api/wasi.html\#wasiwasiimport)

Added in: v13.3.0, v12.16.0

- Type: [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

`wasiImport` is an object that implements the WASI system call API. This object
should be passed as the `wasi_snapshot_preview1` import during the instantiation
of a [`WebAssembly.Instance`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance).