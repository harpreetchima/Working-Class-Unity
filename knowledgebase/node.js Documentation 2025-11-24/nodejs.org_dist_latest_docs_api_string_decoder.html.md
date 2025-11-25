---
url: "https://nodejs.org/dist/latest/docs/api/string_decoder.html"
title: "String decoder | Node.js v25.2.1 Documentation"
---

[Skip to content](https://nodejs.org/dist/latest/docs/api/string_decoder.html#apicontent)

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
- [Table of contents](https://nodejs.org/dist/latest/docs/api/string_decoder.html#toc-picker)




- [String decoder](https://nodejs.org/dist/latest/docs/api/string_decoder.html#string-decoder)
  - [Class: `StringDecoder`](https://nodejs.org/dist/latest/docs/api/string_decoder.html#class-stringdecoder)
    - [`new StringDecoder([encoding])`](https://nodejs.org/dist/latest/docs/api/string_decoder.html#new-stringdecoderencoding)
    - [`stringDecoder.end([buffer])`](https://nodejs.org/dist/latest/docs/api/string_decoder.html#stringdecoderendbuffer)
    - [`stringDecoder.write(buffer)`](https://nodejs.org/dist/latest/docs/api/string_decoder.html#stringdecoderwritebuffer)

- [Index](https://nodejs.org/dist/latest/docs/api/string_decoder.html#gtoc-picker)


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

- [Other versions](https://nodejs.org/dist/latest/docs/api/string_decoder.html#alt-docs)


01. [25.x](https://nodejs.org/docs/latest-v25.x/api/string_decoder.html)
02. [24.x **LTS**](https://nodejs.org/docs/latest-v24.x/api/string_decoder.html)
03. [23.x](https://nodejs.org/docs/latest-v23.x/api/string_decoder.html)
04. [22.x **LTS**](https://nodejs.org/docs/latest-v22.x/api/string_decoder.html)
05. [21.x](https://nodejs.org/docs/latest-v21.x/api/string_decoder.html)
06. [20.x **LTS**](https://nodejs.org/docs/latest-v20.x/api/string_decoder.html)
07. [19.x](https://nodejs.org/docs/latest-v19.x/api/string_decoder.html)
08. [18.x](https://nodejs.org/docs/latest-v18.x/api/string_decoder.html)
09. [17.x](https://nodejs.org/docs/latest-v17.x/api/string_decoder.html)
10. [16.x](https://nodejs.org/docs/latest-v16.x/api/string_decoder.html)
11. [15.x](https://nodejs.org/docs/latest-v15.x/api/string_decoder.html)
12. [14.x](https://nodejs.org/docs/latest-v14.x/api/string_decoder.html)
13. [13.x](https://nodejs.org/docs/latest-v13.x/api/string_decoder.html)
14. [12.x](https://nodejs.org/docs/latest-v12.x/api/string_decoder.html)
15. [11.x](https://nodejs.org/docs/latest-v11.x/api/string_decoder.html)
16. [10.x](https://nodejs.org/docs/latest-v10.x/api/string_decoder.html)
17. [9.x](https://nodejs.org/docs/latest-v9.x/api/string_decoder.html)
18. [8.x](https://nodejs.org/docs/latest-v8.x/api/string_decoder.html)
19. [7.x](https://nodejs.org/docs/latest-v7.x/api/string_decoder.html)
20. [6.x](https://nodejs.org/docs/latest-v6.x/api/string_decoder.html)
21. [5.x](https://nodejs.org/docs/latest-v5.x/api/string_decoder.html)
22. [4.x](https://nodejs.org/docs/latest-v4.x/api/string_decoder.html)
23. [0.12.x](https://nodejs.org/docs/latest-v0.12.x/api/string_decoder.html)
24. [0.10.x](https://nodejs.org/docs/latest-v0.10.x/api/string_decoder.html)

- [Options](https://nodejs.org/dist/latest/docs/api/string_decoder.html#options-picker)


- [View on single page](https://nodejs.org/dist/latest/docs/api/all.html)
- [View as JSON](https://nodejs.org/dist/latest/docs/api/string_decoder.json)
- [Edit on GitHub](https://github.com/nodejs/node/edit/main/doc/api/string_decoder.md)

* * *

Table of contents

- [String decoder](https://nodejs.org/dist/latest/docs/api/string_decoder.html#string-decoder)
  - [Class: `StringDecoder`](https://nodejs.org/dist/latest/docs/api/string_decoder.html#class-stringdecoder)
    - [`new StringDecoder([encoding])`](https://nodejs.org/dist/latest/docs/api/string_decoder.html#new-stringdecoderencoding)
    - [`stringDecoder.end([buffer])`](https://nodejs.org/dist/latest/docs/api/string_decoder.html#stringdecoderendbuffer)
    - [`stringDecoder.write(buffer)`](https://nodejs.org/dist/latest/docs/api/string_decoder.html#stringdecoderwritebuffer)

## String decoder[\#](https://nodejs.org/dist/latest/docs/api/string_decoder.html\#string-decoder)

[Stability: 2](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Stable

**Source Code:** [lib/string\_decoder.js](https://github.com/nodejs/node/blob/v25.2.1/lib/string_decoder.js)

The `node:string_decoder` module provides an API for decoding `Buffer` objects
into strings in a manner that preserves encoded multi-byte UTF-8 and UTF-16
characters. It can be accessed using:

```js
import { StringDecoder } from 'node:string_decoder';const { StringDecoder } = require('node:string_decoder');copy
```

The following example shows the basic use of the `StringDecoder` class.

```js
import { StringDecoder } from 'node:string_decoder';
import { Buffer } from 'node:buffer';
const decoder = new StringDecoder('utf8');

const cent = Buffer.from([0xC2, 0xA2]);
console.log(decoder.write(cent)); // Prints: ¢

const euro = Buffer.from([0xE2, 0x82, 0xAC]);
console.log(decoder.write(euro)); // Prints: €const { StringDecoder } = require('node:string_decoder');
const decoder = new StringDecoder('utf8');

const cent = Buffer.from([0xC2, 0xA2]);
console.log(decoder.write(cent)); // Prints: ¢

const euro = Buffer.from([0xE2, 0x82, 0xAC]);
console.log(decoder.write(euro)); // Prints: €copy
```

When a `Buffer` instance is written to the `StringDecoder` instance, an
internal buffer is used to ensure that the decoded string does not contain
any incomplete multibyte characters. These are held in the buffer until the
next call to `stringDecoder.write()` or until `stringDecoder.end()` is called.

In the following example, the three UTF-8 encoded bytes of the European Euro
symbol (`€`) are written over three separate operations:

```js
import { StringDecoder } from 'node:string_decoder';
import { Buffer } from 'node:buffer';
const decoder = new StringDecoder('utf8');

decoder.write(Buffer.from([0xE2]));
decoder.write(Buffer.from([0x82]));
console.log(decoder.end(Buffer.from([0xAC]))); // Prints: €const { StringDecoder } = require('node:string_decoder');
const decoder = new StringDecoder('utf8');

decoder.write(Buffer.from([0xE2]));
decoder.write(Buffer.from([0x82]));
console.log(decoder.end(Buffer.from([0xAC]))); // Prints: €copy
```

### Class: `StringDecoder`[\#](https://nodejs.org/dist/latest/docs/api/string_decoder.html\#class-stringdecoder)

#### `new StringDecoder([encoding])`[\#](https://nodejs.org/dist/latest/docs/api/string_decoder.html\#new-stringdecoderencoding)

Added in: v0.1.99

- `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) The character [encoding](https://nodejs.org/dist/latest/docs/api/buffer.html#buffers-and-character-encodings) the `StringDecoder` will use.
**Default:**`'utf8'`.

Creates a new `StringDecoder` instance.

#### `stringDecoder.end([buffer])`[\#](https://nodejs.org/dist/latest/docs/api/string_decoder.html\#stringdecoderendbuffer)

Added in: v0.9.3

- `buffer` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) The bytes to decode.
- Returns: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

Returns any remaining input stored in the internal buffer as a string. Bytes
representing incomplete UTF-8 and UTF-16 characters will be replaced with
substitution characters appropriate for the character encoding.

If the `buffer` argument is provided, one final call to `stringDecoder.write()`
is performed before returning the remaining input.
After `end()` is called, the `stringDecoder` object can be reused for new input.

#### `stringDecoder.write(buffer)`[\#](https://nodejs.org/dist/latest/docs/api/string_decoder.html\#stringdecoderwritebuffer)

History

| Version | Changes |
| --- | --- |
| v8.0.0 | Each invalid character is now replaced by a single replacement character instead of one for each individual byte. |
| v0.1.99 | Added in: v0.1.99 |

- `buffer` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) The bytes to decode.
- Returns: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

Returns a decoded string, ensuring that any incomplete multibyte characters at
the end of the `Buffer`, or `TypedArray`, or `DataView` are omitted from the
returned string and stored in an internal buffer for the next call to
`stringDecoder.write()` or `stringDecoder.end()`.