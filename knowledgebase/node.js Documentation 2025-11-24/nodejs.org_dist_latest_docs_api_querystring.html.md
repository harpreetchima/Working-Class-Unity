---
url: "https://nodejs.org/dist/latest/docs/api/querystring.html"
title: "Query string | Node.js v25.2.1 Documentation"
---

[Skip to content](https://nodejs.org/dist/latest/docs/api/querystring.html#apicontent)

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
- [Table of contents](https://nodejs.org/dist/latest/docs/api/querystring.html#toc-picker)




- [Query string](https://nodejs.org/dist/latest/docs/api/querystring.html#query-string)
  - [`querystring.decode()`](https://nodejs.org/dist/latest/docs/api/querystring.html#querystringdecode)
  - [`querystring.encode()`](https://nodejs.org/dist/latest/docs/api/querystring.html#querystringencode)
  - [`querystring.escape(str)`](https://nodejs.org/dist/latest/docs/api/querystring.html#querystringescapestr)
  - [`querystring.parse(str[, sep[, eq[, options]]])`](https://nodejs.org/dist/latest/docs/api/querystring.html#querystringparsestr-sep-eq-options)
  - [`querystring.stringify(obj[, sep[, eq[, options]]])`](https://nodejs.org/dist/latest/docs/api/querystring.html#querystringstringifyobj-sep-eq-options)
  - [`querystring.unescape(str)`](https://nodejs.org/dist/latest/docs/api/querystring.html#querystringunescapestr)

- [Index](https://nodejs.org/dist/latest/docs/api/querystring.html#gtoc-picker)


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

- [Other versions](https://nodejs.org/dist/latest/docs/api/querystring.html#alt-docs)


01. [25.x](https://nodejs.org/docs/latest-v25.x/api/querystring.html)
02. [24.x **LTS**](https://nodejs.org/docs/latest-v24.x/api/querystring.html)
03. [23.x](https://nodejs.org/docs/latest-v23.x/api/querystring.html)
04. [22.x **LTS**](https://nodejs.org/docs/latest-v22.x/api/querystring.html)
05. [21.x](https://nodejs.org/docs/latest-v21.x/api/querystring.html)
06. [20.x **LTS**](https://nodejs.org/docs/latest-v20.x/api/querystring.html)
07. [19.x](https://nodejs.org/docs/latest-v19.x/api/querystring.html)
08. [18.x](https://nodejs.org/docs/latest-v18.x/api/querystring.html)
09. [17.x](https://nodejs.org/docs/latest-v17.x/api/querystring.html)
10. [16.x](https://nodejs.org/docs/latest-v16.x/api/querystring.html)
11. [15.x](https://nodejs.org/docs/latest-v15.x/api/querystring.html)
12. [14.x](https://nodejs.org/docs/latest-v14.x/api/querystring.html)
13. [13.x](https://nodejs.org/docs/latest-v13.x/api/querystring.html)
14. [12.x](https://nodejs.org/docs/latest-v12.x/api/querystring.html)
15. [11.x](https://nodejs.org/docs/latest-v11.x/api/querystring.html)
16. [10.x](https://nodejs.org/docs/latest-v10.x/api/querystring.html)
17. [9.x](https://nodejs.org/docs/latest-v9.x/api/querystring.html)
18. [8.x](https://nodejs.org/docs/latest-v8.x/api/querystring.html)
19. [7.x](https://nodejs.org/docs/latest-v7.x/api/querystring.html)
20. [6.x](https://nodejs.org/docs/latest-v6.x/api/querystring.html)
21. [5.x](https://nodejs.org/docs/latest-v5.x/api/querystring.html)
22. [4.x](https://nodejs.org/docs/latest-v4.x/api/querystring.html)
23. [0.12.x](https://nodejs.org/docs/latest-v0.12.x/api/querystring.html)
24. [0.10.x](https://nodejs.org/docs/latest-v0.10.x/api/querystring.html)

- [Options](https://nodejs.org/dist/latest/docs/api/querystring.html#options-picker)


- [View on single page](https://nodejs.org/dist/latest/docs/api/all.html)
- [View as JSON](https://nodejs.org/dist/latest/docs/api/querystring.json)
- [Edit on GitHub](https://github.com/nodejs/node/edit/main/doc/api/querystring.md)

* * *

Table of contents

- [Query string](https://nodejs.org/dist/latest/docs/api/querystring.html#query-string)
  - [`querystring.decode()`](https://nodejs.org/dist/latest/docs/api/querystring.html#querystringdecode)
  - [`querystring.encode()`](https://nodejs.org/dist/latest/docs/api/querystring.html#querystringencode)
  - [`querystring.escape(str)`](https://nodejs.org/dist/latest/docs/api/querystring.html#querystringescapestr)
  - [`querystring.parse(str[, sep[, eq[, options]]])`](https://nodejs.org/dist/latest/docs/api/querystring.html#querystringparsestr-sep-eq-options)
  - [`querystring.stringify(obj[, sep[, eq[, options]]])`](https://nodejs.org/dist/latest/docs/api/querystring.html#querystringstringifyobj-sep-eq-options)
  - [`querystring.unescape(str)`](https://nodejs.org/dist/latest/docs/api/querystring.html#querystringunescapestr)

## Query string[\#](https://nodejs.org/dist/latest/docs/api/querystring.html\#query-string)

[Stability: 2](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Stable

**Source Code:** [lib/querystring.js](https://github.com/nodejs/node/blob/v25.2.1/lib/querystring.js)

The `node:querystring` module provides utilities for parsing and formatting URL
query strings. It can be accessed using:

```js
const querystring = require('node:querystring'); copy
```

`querystring` is more performant than [<URLSearchParams>](https://nodejs.org/dist/latest/docs/api/url.html#class-urlsearchparams) but is not a
standardized API. Use [<URLSearchParams>](https://nodejs.org/dist/latest/docs/api/url.html#class-urlsearchparams) when performance is not critical or
when compatibility with browser code is desirable.

### `querystring.decode()`[\#](https://nodejs.org/dist/latest/docs/api/querystring.html\#querystringdecode)

Added in: v0.1.99

The `querystring.decode()` function is an alias for `querystring.parse()`.

### `querystring.encode()`[\#](https://nodejs.org/dist/latest/docs/api/querystring.html\#querystringencode)

Added in: v0.1.99

The `querystring.encode()` function is an alias for `querystring.stringify()`.

### `querystring.escape(str)`[\#](https://nodejs.org/dist/latest/docs/api/querystring.html\#querystringescapestr)

Added in: v0.1.25

- `str` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

The `querystring.escape()` method performs URL percent-encoding on the given
`str` in a manner that is optimized for the specific requirements of URL
query strings.

The `querystring.escape()` method is used by `querystring.stringify()` and is
generally not expected to be used directly. It is exported primarily to allow
application code to provide a replacement percent-encoding implementation if
necessary by assigning `querystring.escape` to an alternative function.

### `querystring.parse(str[, sep[, eq[, options]]])`[\#](https://nodejs.org/dist/latest/docs/api/querystring.html\#querystringparsestr-sep-eq-options)

History

| Version | Changes |
| --- | --- |
| v8.0.0 | Multiple empty entries are now parsed correctly (e.g. `&=&=`). |
| v6.0.0 | The returned object no longer inherits from `Object.prototype`. |
| v6.0.0, v4.2.4 | The `eq` parameter may now have a length of more than `1`. |
| v0.1.25 | Added in: v0.1.25 |

- `str` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) The URL query string to parse
- `sep` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) The substring used to delimit key and value pairs in the
query string. **Default:**`'&'`.
- `eq` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type). The substring used to delimit keys and values in the
query string. **Default:**`'='`.
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `decodeURIComponent` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The function to use when decoding
    percent-encoded characters in the query string. **Default:**`querystring.unescape()`.
  - `maxKeys` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) Specifies the maximum number of keys to parse.
    Specify `0` to remove key counting limitations. **Default:**`1000`.

The `querystring.parse()` method parses a URL query string (`str`) into a
collection of key and value pairs.

For example, the query string `'foo=bar&abc=xyz&abc=123'` is parsed into:

```json
{
  "foo": "bar",
  "abc": ["xyz", "123"]
} copy
```

The object returned by the `querystring.parse()` method _does not_
prototypically inherit from the JavaScript `Object`. This means that typical
`Object` methods such as `obj.toString()`, `obj.hasOwnProperty()`, and others
are not defined and _will not work_.

By default, percent-encoded characters within the query string will be assumed
to use UTF-8 encoding. If an alternative character encoding is used, then an
alternative `decodeURIComponent` option will need to be specified:

```js
// Assuming gbkDecodeURIComponent function already exists...

querystring.parse('w=%D6%D0%CE%C4&foo=bar', null, null,
                  { decodeURIComponent: gbkDecodeURIComponent }); copy
```

### `querystring.stringify(obj[, sep[, eq[, options]]])`[\#](https://nodejs.org/dist/latest/docs/api/querystring.html\#querystringstringifyobj-sep-eq-options)

Added in: v0.1.25

- `obj` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) The object to serialize into a URL query string
- `sep` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) The substring used to delimit key and value pairs in the
query string. **Default:**`'&'`.
- `eq` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type). The substring used to delimit keys and values in the
query string. **Default:**`'='`.
- `options`
  - `encodeURIComponent` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The function to use when converting
    URL-unsafe characters to percent-encoding in the query string. **Default:**`querystring.escape()`.

The `querystring.stringify()` method produces a URL query string from a
given `obj` by iterating through the object's "own properties".

It serializes the following types of values passed in `obj`:
[<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type) \| [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) \| [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<number\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) \| [<bigint\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type) \| [<boolean\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)
The numeric values must be finite. Any other input values will be coerced to
empty strings.

```js
querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' });
// Returns 'foo=bar&baz=qux&baz=quux&corge='

querystring.stringify({ foo: 'bar', baz: 'qux' }, ';', ':');
// Returns 'foo:bar;baz:qux' copy
```

By default, characters requiring percent-encoding within the query string will
be encoded as UTF-8. If an alternative encoding is required, then an alternative
`encodeURIComponent` option will need to be specified:

```js
// Assuming gbkEncodeURIComponent function already exists,

querystring.stringify({ w: '中文', foo: 'bar' }, null, null,
                      { encodeURIComponent: gbkEncodeURIComponent }); copy
```

### `querystring.unescape(str)`[\#](https://nodejs.org/dist/latest/docs/api/querystring.html\#querystringunescapestr)

Added in: v0.1.25

- `str` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

The `querystring.unescape()` method performs decoding of URL percent-encoded
characters on the given `str`.

The `querystring.unescape()` method is used by `querystring.parse()` and is
generally not expected to be used directly. It is exported primarily to allow
application code to provide a replacement decoding implementation if
necessary by assigning `querystring.unescape` to an alternative function.

By default, the `querystring.unescape()` method will attempt to use the
JavaScript built-in `decodeURIComponent()` method to decode. If that fails,
a safer equivalent that does not throw on malformed URLs will be used.