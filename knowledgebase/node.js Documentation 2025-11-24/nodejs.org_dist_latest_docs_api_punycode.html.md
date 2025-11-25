---
url: "https://nodejs.org/dist/latest/docs/api/punycode.html"
title: "Punycode | Node.js v25.2.1 Documentation"
---

[Skip to content](https://nodejs.org/dist/latest/docs/api/punycode.html#apicontent)

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
- [Table of contents](https://nodejs.org/dist/latest/docs/api/punycode.html#toc-picker)




- [Punycode](https://nodejs.org/dist/latest/docs/api/punycode.html#punycode)
  - [`punycode.decode(string)`](https://nodejs.org/dist/latest/docs/api/punycode.html#punycodedecodestring)
  - [`punycode.encode(string)`](https://nodejs.org/dist/latest/docs/api/punycode.html#punycodeencodestring)
  - [`punycode.toASCII(domain)`](https://nodejs.org/dist/latest/docs/api/punycode.html#punycodetoasciidomain)
  - [`punycode.toUnicode(domain)`](https://nodejs.org/dist/latest/docs/api/punycode.html#punycodetounicodedomain)
  - [`punycode.ucs2`](https://nodejs.org/dist/latest/docs/api/punycode.html#punycodeucs2)
    - [`punycode.ucs2.decode(string)`](https://nodejs.org/dist/latest/docs/api/punycode.html#punycodeucs2decodestring)
    - [`punycode.ucs2.encode(codePoints)`](https://nodejs.org/dist/latest/docs/api/punycode.html#punycodeucs2encodecodepoints)
  - [`punycode.version`](https://nodejs.org/dist/latest/docs/api/punycode.html#punycodeversion)

- [Index](https://nodejs.org/dist/latest/docs/api/punycode.html#gtoc-picker)


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

- [Other versions](https://nodejs.org/dist/latest/docs/api/punycode.html#alt-docs)


01. [25.x](https://nodejs.org/docs/latest-v25.x/api/punycode.html)
02. [24.x **LTS**](https://nodejs.org/docs/latest-v24.x/api/punycode.html)
03. [23.x](https://nodejs.org/docs/latest-v23.x/api/punycode.html)
04. [22.x **LTS**](https://nodejs.org/docs/latest-v22.x/api/punycode.html)
05. [21.x](https://nodejs.org/docs/latest-v21.x/api/punycode.html)
06. [20.x **LTS**](https://nodejs.org/docs/latest-v20.x/api/punycode.html)
07. [19.x](https://nodejs.org/docs/latest-v19.x/api/punycode.html)
08. [18.x](https://nodejs.org/docs/latest-v18.x/api/punycode.html)
09. [17.x](https://nodejs.org/docs/latest-v17.x/api/punycode.html)
10. [16.x](https://nodejs.org/docs/latest-v16.x/api/punycode.html)
11. [15.x](https://nodejs.org/docs/latest-v15.x/api/punycode.html)
12. [14.x](https://nodejs.org/docs/latest-v14.x/api/punycode.html)
13. [13.x](https://nodejs.org/docs/latest-v13.x/api/punycode.html)
14. [12.x](https://nodejs.org/docs/latest-v12.x/api/punycode.html)
15. [11.x](https://nodejs.org/docs/latest-v11.x/api/punycode.html)
16. [10.x](https://nodejs.org/docs/latest-v10.x/api/punycode.html)
17. [9.x](https://nodejs.org/docs/latest-v9.x/api/punycode.html)
18. [8.x](https://nodejs.org/docs/latest-v8.x/api/punycode.html)
19. [7.x](https://nodejs.org/docs/latest-v7.x/api/punycode.html)
20. [6.x](https://nodejs.org/docs/latest-v6.x/api/punycode.html)
21. [5.x](https://nodejs.org/docs/latest-v5.x/api/punycode.html)
22. [4.x](https://nodejs.org/docs/latest-v4.x/api/punycode.html)
23. [0.12.x](https://nodejs.org/docs/latest-v0.12.x/api/punycode.html)
24. [0.10.x](https://nodejs.org/docs/latest-v0.10.x/api/punycode.html)

- [Options](https://nodejs.org/dist/latest/docs/api/punycode.html#options-picker)


- [View on single page](https://nodejs.org/dist/latest/docs/api/all.html)
- [View as JSON](https://nodejs.org/dist/latest/docs/api/punycode.json)
- [Edit on GitHub](https://github.com/nodejs/node/edit/main/doc/api/punycode.md)

* * *

Table of contents

- [Punycode](https://nodejs.org/dist/latest/docs/api/punycode.html#punycode)
  - [`punycode.decode(string)`](https://nodejs.org/dist/latest/docs/api/punycode.html#punycodedecodestring)
  - [`punycode.encode(string)`](https://nodejs.org/dist/latest/docs/api/punycode.html#punycodeencodestring)
  - [`punycode.toASCII(domain)`](https://nodejs.org/dist/latest/docs/api/punycode.html#punycodetoasciidomain)
  - [`punycode.toUnicode(domain)`](https://nodejs.org/dist/latest/docs/api/punycode.html#punycodetounicodedomain)
  - [`punycode.ucs2`](https://nodejs.org/dist/latest/docs/api/punycode.html#punycodeucs2)
    - [`punycode.ucs2.decode(string)`](https://nodejs.org/dist/latest/docs/api/punycode.html#punycodeucs2decodestring)
    - [`punycode.ucs2.encode(codePoints)`](https://nodejs.org/dist/latest/docs/api/punycode.html#punycodeucs2encodecodepoints)
  - [`punycode.version`](https://nodejs.org/dist/latest/docs/api/punycode.html#punycodeversion)

## Punycode[\#](https://nodejs.org/dist/latest/docs/api/punycode.html\#punycode)

Deprecated since: v7.0.0

[Stability: 0](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Deprecated

**Source Code:** [lib/punycode.js](https://github.com/nodejs/node/blob/v25.2.1/lib/punycode.js)

**The version of the punycode module bundled in Node.js is being deprecated.**
In a future major version of Node.js this module will be removed. Users
currently depending on the `punycode` module should switch to using the
userland-provided [Punycode.js](https://github.com/bestiejs/punycode.js) module instead. For punycode-based URL
encoding, see [`url.domainToASCII`](https://nodejs.org/dist/latest/docs/api/url.html#urldomaintoasciidomain) or, more generally, the
[WHATWG URL API](https://nodejs.org/dist/latest/docs/api/url.html#the-whatwg-url-api).

The `punycode` module is a bundled version of the [Punycode.js](https://github.com/bestiejs/punycode.js) module. It
can be accessed using:

```js
const punycode = require('node:punycode'); copy
```

[Punycode](https://tools.ietf.org/html/rfc3492) is a character encoding scheme defined by RFC 3492 that is
primarily intended for use in Internationalized Domain Names. Because host
names in URLs are limited to ASCII characters only, Domain Names that contain
non-ASCII characters must be converted into ASCII using the Punycode scheme.
For instance, the Japanese character that translates into the English word,
`'example'` is `'例'`. The Internationalized Domain Name, `'例.com'` (equivalent
to `'example.com'`) is represented by Punycode as the ASCII string
`'xn--fsq.com'`.

The `punycode` module provides a simple implementation of the Punycode standard.

The `punycode` module is a third-party dependency used by Node.js and
made available to developers as a convenience. Fixes or other modifications to
the module must be directed to the [Punycode.js](https://github.com/bestiejs/punycode.js) project.

### `punycode.decode(string)`[\#](https://nodejs.org/dist/latest/docs/api/punycode.html\#punycodedecodestring)

Added in: v0.5.1

- `string` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

The `punycode.decode()` method converts a [Punycode](https://tools.ietf.org/html/rfc3492) string of ASCII-only
characters to the equivalent string of Unicode codepoints.

```js
punycode.decode('maana-pta'); // 'mañana'
punycode.decode('--dqo34k'); // '☃-⌘' copy
```

### `punycode.encode(string)`[\#](https://nodejs.org/dist/latest/docs/api/punycode.html\#punycodeencodestring)

Added in: v0.5.1

- `string` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

The `punycode.encode()` method converts a string of Unicode codepoints to a
[Punycode](https://tools.ietf.org/html/rfc3492) string of ASCII-only characters.

```js
punycode.encode('mañana'); // 'maana-pta'
punycode.encode('☃-⌘'); // '--dqo34k' copy
```

### `punycode.toASCII(domain)`[\#](https://nodejs.org/dist/latest/docs/api/punycode.html\#punycodetoasciidomain)

Added in: v0.6.1

- `domain` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

The `punycode.toASCII()` method converts a Unicode string representing an
Internationalized Domain Name to [Punycode](https://tools.ietf.org/html/rfc3492). Only the non-ASCII parts of the
domain name will be converted. Calling `punycode.toASCII()` on a string that
already only contains ASCII characters will have no effect.

```js
// encode domain names
punycode.toASCII('mañana.com');  // 'xn--maana-pta.com'
punycode.toASCII('☃-⌘.com');   // 'xn----dqo34k.com'
punycode.toASCII('example.com'); // 'example.com' copy
```

### `punycode.toUnicode(domain)`[\#](https://nodejs.org/dist/latest/docs/api/punycode.html\#punycodetounicodedomain)

Added in: v0.6.1

- `domain` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

The `punycode.toUnicode()` method converts a string representing a domain name
containing [Punycode](https://tools.ietf.org/html/rfc3492) encoded characters into Unicode. Only the [Punycode](https://tools.ietf.org/html/rfc3492)
encoded parts of the domain name are be converted.

```js
// decode domain names
punycode.toUnicode('xn--maana-pta.com'); // 'mañana.com'
punycode.toUnicode('xn----dqo34k.com');  // '☃-⌘.com'
punycode.toUnicode('example.com');       // 'example.com' copy
```

### `punycode.ucs2`[\#](https://nodejs.org/dist/latest/docs/api/punycode.html\#punycodeucs2)

Added in: v0.7.0

#### `punycode.ucs2.decode(string)`[\#](https://nodejs.org/dist/latest/docs/api/punycode.html\#punycodeucs2decodestring)

Added in: v0.7.0

- `string` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

The `punycode.ucs2.decode()` method returns an array containing the numeric
codepoint values of each Unicode symbol in the string.

```js
punycode.ucs2.decode('abc'); // [0x61, 0x62, 0x63]
// surrogate pair for U+1D306 tetragram for centre:
punycode.ucs2.decode('\uD834\uDF06'); // [0x1D306] copy
```

#### `punycode.ucs2.encode(codePoints)`[\#](https://nodejs.org/dist/latest/docs/api/punycode.html\#punycodeucs2encodecodepoints)

Added in: v0.7.0

- `codePoints` [<integer\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The `punycode.ucs2.encode()` method returns a string based on an array of
numeric code point values.

```js
punycode.ucs2.encode([0x61, 0x62, 0x63]); // 'abc'
punycode.ucs2.encode([0x1D306]); // '\uD834\uDF06' copy
```

### `punycode.version`[\#](https://nodejs.org/dist/latest/docs/api/punycode.html\#punycodeversion)

Added in: v0.6.1

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

Returns a string identifying the current [Punycode.js](https://github.com/bestiejs/punycode.js) version number.