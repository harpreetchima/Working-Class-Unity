---
url: "https://nodejs.org/dist/latest/docs/api/https.html"
title: "HTTPS | Node.js v25.2.1 Documentation"
---

[Skip to content](https://nodejs.org/dist/latest/docs/api/https.html#apicontent)

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
- [Table of contents](https://nodejs.org/dist/latest/docs/api/https.html#toc-picker)




- [HTTPS](https://nodejs.org/dist/latest/docs/api/https.html#https)
  - [Determining if crypto support is unavailable](https://nodejs.org/dist/latest/docs/api/https.html#determining-if-crypto-support-is-unavailable)
  - [Class: `https.Agent`](https://nodejs.org/dist/latest/docs/api/https.html#class-httpsagent)
    - [`new Agent([options])`](https://nodejs.org/dist/latest/docs/api/https.html#new-agentoptions)
      - [Event: `'keylog'`](https://nodejs.org/dist/latest/docs/api/https.html#event-keylog)
  - [Class: `https.Server`](https://nodejs.org/dist/latest/docs/api/https.html#class-httpsserver)
    - [`server.close([callback])`](https://nodejs.org/dist/latest/docs/api/https.html#serverclosecallback)
    - [`server[Symbol.asyncDispose]()`](https://nodejs.org/dist/latest/docs/api/https.html#serversymbolasyncdispose)
    - [`server.closeAllConnections()`](https://nodejs.org/dist/latest/docs/api/https.html#servercloseallconnections)
    - [`server.closeIdleConnections()`](https://nodejs.org/dist/latest/docs/api/https.html#servercloseidleconnections)
    - [`server.headersTimeout`](https://nodejs.org/dist/latest/docs/api/https.html#serverheaderstimeout)
    - [`server.listen()`](https://nodejs.org/dist/latest/docs/api/https.html#serverlisten)
    - [`server.maxHeadersCount`](https://nodejs.org/dist/latest/docs/api/https.html#servermaxheaderscount)
    - [`server.requestTimeout`](https://nodejs.org/dist/latest/docs/api/https.html#serverrequesttimeout)
    - [`server.setTimeout([msecs][, callback])`](https://nodejs.org/dist/latest/docs/api/https.html#serversettimeoutmsecs-callback)
    - [`server.timeout`](https://nodejs.org/dist/latest/docs/api/https.html#servertimeout)
    - [`server.keepAliveTimeout`](https://nodejs.org/dist/latest/docs/api/https.html#serverkeepalivetimeout)
  - [`https.createServer([options][, requestListener])`](https://nodejs.org/dist/latest/docs/api/https.html#httpscreateserveroptions-requestlistener)
  - [`https.get(options[, callback])`](https://nodejs.org/dist/latest/docs/api/https.html#httpsgetoptions-callback)
  - [`https.get(url[, options][, callback])`](https://nodejs.org/dist/latest/docs/api/https.html#httpsgeturl-options-callback)
  - [`https.globalAgent`](https://nodejs.org/dist/latest/docs/api/https.html#httpsglobalagent)
  - [`https.request(options[, callback])`](https://nodejs.org/dist/latest/docs/api/https.html#httpsrequestoptions-callback)
  - [`https.request(url[, options][, callback])`](https://nodejs.org/dist/latest/docs/api/https.html#httpsrequesturl-options-callback)

- [Index](https://nodejs.org/dist/latest/docs/api/https.html#gtoc-picker)


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

- [Other versions](https://nodejs.org/dist/latest/docs/api/https.html#alt-docs)


01. [25.x](https://nodejs.org/docs/latest-v25.x/api/https.html)
02. [24.x **LTS**](https://nodejs.org/docs/latest-v24.x/api/https.html)
03. [23.x](https://nodejs.org/docs/latest-v23.x/api/https.html)
04. [22.x **LTS**](https://nodejs.org/docs/latest-v22.x/api/https.html)
05. [21.x](https://nodejs.org/docs/latest-v21.x/api/https.html)
06. [20.x **LTS**](https://nodejs.org/docs/latest-v20.x/api/https.html)
07. [19.x](https://nodejs.org/docs/latest-v19.x/api/https.html)
08. [18.x](https://nodejs.org/docs/latest-v18.x/api/https.html)
09. [17.x](https://nodejs.org/docs/latest-v17.x/api/https.html)
10. [16.x](https://nodejs.org/docs/latest-v16.x/api/https.html)
11. [15.x](https://nodejs.org/docs/latest-v15.x/api/https.html)
12. [14.x](https://nodejs.org/docs/latest-v14.x/api/https.html)
13. [13.x](https://nodejs.org/docs/latest-v13.x/api/https.html)
14. [12.x](https://nodejs.org/docs/latest-v12.x/api/https.html)
15. [11.x](https://nodejs.org/docs/latest-v11.x/api/https.html)
16. [10.x](https://nodejs.org/docs/latest-v10.x/api/https.html)
17. [9.x](https://nodejs.org/docs/latest-v9.x/api/https.html)
18. [8.x](https://nodejs.org/docs/latest-v8.x/api/https.html)
19. [7.x](https://nodejs.org/docs/latest-v7.x/api/https.html)
20. [6.x](https://nodejs.org/docs/latest-v6.x/api/https.html)
21. [5.x](https://nodejs.org/docs/latest-v5.x/api/https.html)
22. [4.x](https://nodejs.org/docs/latest-v4.x/api/https.html)
23. [0.12.x](https://nodejs.org/docs/latest-v0.12.x/api/https.html)
24. [0.10.x](https://nodejs.org/docs/latest-v0.10.x/api/https.html)

- [Options](https://nodejs.org/dist/latest/docs/api/https.html#options-picker)


- [View on single page](https://nodejs.org/dist/latest/docs/api/all.html)
- [View as JSON](https://nodejs.org/dist/latest/docs/api/https.json)
- [Edit on GitHub](https://github.com/nodejs/node/edit/main/doc/api/https.md)

* * *

Table of contents

- [HTTPS](https://nodejs.org/dist/latest/docs/api/https.html#https)
  - [Determining if crypto support is unavailable](https://nodejs.org/dist/latest/docs/api/https.html#determining-if-crypto-support-is-unavailable)
  - [Class: `https.Agent`](https://nodejs.org/dist/latest/docs/api/https.html#class-httpsagent)
    - [`new Agent([options])`](https://nodejs.org/dist/latest/docs/api/https.html#new-agentoptions)
      - [Event: `'keylog'`](https://nodejs.org/dist/latest/docs/api/https.html#event-keylog)
  - [Class: `https.Server`](https://nodejs.org/dist/latest/docs/api/https.html#class-httpsserver)
    - [`server.close([callback])`](https://nodejs.org/dist/latest/docs/api/https.html#serverclosecallback)
    - [`server[Symbol.asyncDispose]()`](https://nodejs.org/dist/latest/docs/api/https.html#serversymbolasyncdispose)
    - [`server.closeAllConnections()`](https://nodejs.org/dist/latest/docs/api/https.html#servercloseallconnections)
    - [`server.closeIdleConnections()`](https://nodejs.org/dist/latest/docs/api/https.html#servercloseidleconnections)
    - [`server.headersTimeout`](https://nodejs.org/dist/latest/docs/api/https.html#serverheaderstimeout)
    - [`server.listen()`](https://nodejs.org/dist/latest/docs/api/https.html#serverlisten)
    - [`server.maxHeadersCount`](https://nodejs.org/dist/latest/docs/api/https.html#servermaxheaderscount)
    - [`server.requestTimeout`](https://nodejs.org/dist/latest/docs/api/https.html#serverrequesttimeout)
    - [`server.setTimeout([msecs][, callback])`](https://nodejs.org/dist/latest/docs/api/https.html#serversettimeoutmsecs-callback)
    - [`server.timeout`](https://nodejs.org/dist/latest/docs/api/https.html#servertimeout)
    - [`server.keepAliveTimeout`](https://nodejs.org/dist/latest/docs/api/https.html#serverkeepalivetimeout)
  - [`https.createServer([options][, requestListener])`](https://nodejs.org/dist/latest/docs/api/https.html#httpscreateserveroptions-requestlistener)
  - [`https.get(options[, callback])`](https://nodejs.org/dist/latest/docs/api/https.html#httpsgetoptions-callback)
  - [`https.get(url[, options][, callback])`](https://nodejs.org/dist/latest/docs/api/https.html#httpsgeturl-options-callback)
  - [`https.globalAgent`](https://nodejs.org/dist/latest/docs/api/https.html#httpsglobalagent)
  - [`https.request(options[, callback])`](https://nodejs.org/dist/latest/docs/api/https.html#httpsrequestoptions-callback)
  - [`https.request(url[, options][, callback])`](https://nodejs.org/dist/latest/docs/api/https.html#httpsrequesturl-options-callback)

## HTTPS[\#](https://nodejs.org/dist/latest/docs/api/https.html\#https)

[Stability: 2](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Stable

**Source Code:** [lib/https.js](https://github.com/nodejs/node/blob/v25.2.1/lib/https.js)

HTTPS is the HTTP protocol over TLS/SSL. In Node.js this is implemented as a
separate module.

### Determining if crypto support is unavailable[\#](https://nodejs.org/dist/latest/docs/api/https.html\#determining-if-crypto-support-is-unavailable)

It is possible for Node.js to be built without including support for the
`node:crypto` module. In such cases, attempting to `import` from `https` or
calling `require('node:https')` will result in an error being thrown.

When using CommonJS, the error thrown can be caught using try/catch:

```js
let https;
try {
  https = require('node:https');
} catch (err) {
  console.error('https support is disabled!');
} copy
```

When using the lexical ESM `import` keyword, the error can only be
caught if a handler for `process.on('uncaughtException')` is registered
_before_ any attempt to load the module is made (using, for instance,
a preload module).

When using ESM, if there is a chance that the code may be run on a build
of Node.js where crypto support is not enabled, consider using the
[`import()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/import) function instead of the lexical `import` keyword:

```js
let https;
try {
  https = await import('node:https');
} catch (err) {
  console.error('https support is disabled!');
} copy
```

### Class: `https.Agent`[\#](https://nodejs.org/dist/latest/docs/api/https.html\#class-httpsagent)

History

| Version | Changes |
| --- | --- |
| v5.3.0 | support `0``maxCachedSessions` to disable TLS session caching. |
| v2.5.0 | parameter `maxCachedSessions` added to `options` for TLS sessions reuse. |
| v0.4.5 | Added in: v0.4.5 |

An [`Agent`](https://nodejs.org/dist/latest/docs/api/https.html#class-httpsagent) object for HTTPS similar to [`http.Agent`](https://nodejs.org/dist/latest/docs/api/http.html#class-httpagent). See
[`https.request()`](https://nodejs.org/dist/latest/docs/api/https.html#httpsrequestoptions-callback) for more information.

Like `http.Agent`, the `createConnection(options[, callback])` method can be overridden
to customize how TLS connections are established.

> See [`agent.createConnection()`](https://nodejs.org/dist/latest/docs/api/http.html#agentcreateconnectionoptions-callback) for details on overriding this method,
> including asynchronous socket creation with a callback.

#### `new Agent([options])`[\#](https://nodejs.org/dist/latest/docs/api/https.html\#new-agentoptions)

History

| Version | Changes |
| --- | --- |
| v24.5.0 | Add support for `proxyEnv`. |
| v24.5.0 | Add support for `defaultPort` and `protocol`. |
| v12.5.0 | do not automatically set servername if the target host was specified using an IP address. |

- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) Set of configurable options to set on the agent.
Can have the same fields as for [`http.Agent(options)`](https://nodejs.org/dist/latest/docs/api/http.html#new-agentoptions), and

  - `maxCachedSessions` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) maximum number of TLS cached sessions.
    Use `0` to disable TLS session caching. **Default:**`100`.

  - `servername` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) the value of
    [Server Name Indication extension](https://en.wikipedia.org/wiki/Server_Name_Indication) to be sent to the server. Use
    empty string `''` to disable sending the extension.
    **Default:** host name of the target server, unless the target server
    is specified using an IP address, in which case the default is `''` (no
    extension).

    See [`Session Resumption`](https://nodejs.org/dist/latest/docs/api/tls.html#session-resumption) for information about TLS session reuse.

##### Event: `'keylog'`[\#](https://nodejs.org/dist/latest/docs/api/https.html\#event-keylog)

Added in: v13.2.0, v12.16.0

- `line` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) Line of ASCII text, in NSS `SSLKEYLOGFILE` format.
- `tlsSocket` [<tls.TLSSocket>](https://nodejs.org/dist/latest/docs/api/tls.html#class-tlstlssocket) The `tls.TLSSocket` instance on which it was
generated.

The `keylog` event is emitted when key material is generated or received by a
connection managed by this agent (typically before handshake has completed, but
not necessarily). This keying material can be stored for debugging, as it
allows captured TLS traffic to be decrypted. It may be emitted multiple times
for each socket.

A typical use case is to append received lines to a common text file, which is
later used by software (such as Wireshark) to decrypt the traffic:

```js
// ...
https.globalAgent.on('keylog', (line, tlsSocket) => {
  fs.appendFileSync('/tmp/ssl-keys.log', line, { mode: 0o600 });
}); copy
```

### Class: `https.Server`[\#](https://nodejs.org/dist/latest/docs/api/https.html\#class-httpsserver)

Added in: v0.3.4

- Extends: [<tls.Server>](https://nodejs.org/dist/latest/docs/api/tls.html#class-tlsserver)

See [`http.Server`](https://nodejs.org/dist/latest/docs/api/http.html#class-httpserver) for more information.

#### `server.close([callback])`[\#](https://nodejs.org/dist/latest/docs/api/https.html\#serverclosecallback)

Added in: v0.1.90

- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
- Returns: [<https.Server>](https://nodejs.org/dist/latest/docs/api/https.html#class-httpsserver)

See [`server.close()`](https://nodejs.org/dist/latest/docs/api/http.html#serverclosecallback) in the `node:http` module.

#### `server[Symbol.asyncDispose]()`[\#](https://nodejs.org/dist/latest/docs/api/https.html\#serversymbolasyncdispose)

History

| Version | Changes |
| --- | --- |
| v24.2.0 | No longer experimental. |
| v20.4.0 | Added in: v20.4.0 |

Calls [`server.close()`](https://nodejs.org/dist/latest/docs/api/https.html#serverclosecallback) and returns a promise that
fulfills when the server has closed.

#### `server.closeAllConnections()`[\#](https://nodejs.org/dist/latest/docs/api/https.html\#servercloseallconnections)

Added in: v18.2.0

See [`server.closeAllConnections()`](https://nodejs.org/dist/latest/docs/api/http.html#servercloseallconnections) in the `node:http` module.

#### `server.closeIdleConnections()`[\#](https://nodejs.org/dist/latest/docs/api/https.html\#servercloseidleconnections)

Added in: v18.2.0

See [`server.closeIdleConnections()`](https://nodejs.org/dist/latest/docs/api/http.html#servercloseidleconnections) in the `node:http` module.

#### `server.headersTimeout`[\#](https://nodejs.org/dist/latest/docs/api/https.html\#serverheaderstimeout)

Added in: v11.3.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) **Default:**`60000`

See [`server.headersTimeout`](https://nodejs.org/dist/latest/docs/api/http.html#serverheaderstimeout) in the `node:http` module.

#### `server.listen()`[\#](https://nodejs.org/dist/latest/docs/api/https.html\#serverlisten)

Starts the HTTPS server listening for encrypted connections.
This method is identical to [`server.listen()`](https://nodejs.org/dist/latest/docs/api/net.html#serverlisten) from [`net.Server`](https://nodejs.org/dist/latest/docs/api/net.html#class-netserver).

#### `server.maxHeadersCount`[\#](https://nodejs.org/dist/latest/docs/api/https.html\#servermaxheaderscount)

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) **Default:**`2000`

See [`server.maxHeadersCount`](https://nodejs.org/dist/latest/docs/api/http.html#servermaxheaderscount) in the `node:http` module.

#### `server.requestTimeout`[\#](https://nodejs.org/dist/latest/docs/api/https.html\#serverrequesttimeout)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | The default request timeout changed from no timeout to 300s (5 minutes). |
| v14.11.0 | Added in: v14.11.0 |

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) **Default:**`300000`

See [`server.requestTimeout`](https://nodejs.org/dist/latest/docs/api/http.html#serverrequesttimeout) in the `node:http` module.

#### `server.setTimeout([msecs][, callback])`[\#](https://nodejs.org/dist/latest/docs/api/https.html\#serversettimeoutmsecs-callback)

Added in: v0.11.2

- `msecs` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) **Default:**`120000` (2 minutes)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
- Returns: [<https.Server>](https://nodejs.org/dist/latest/docs/api/https.html#class-httpsserver)

See [`server.setTimeout()`](https://nodejs.org/dist/latest/docs/api/http.html#serversettimeoutmsecs-callback) in the `node:http` module.

#### `server.timeout`[\#](https://nodejs.org/dist/latest/docs/api/https.html\#servertimeout)

History

| Version | Changes |
| --- | --- |
| v13.0.0 | The default timeout changed from 120s to 0 (no timeout). |
| v0.11.2 | Added in: v0.11.2 |

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) **Default:** 0 (no timeout)

See [`server.timeout`](https://nodejs.org/dist/latest/docs/api/http.html#servertimeout) in the `node:http` module.

#### `server.keepAliveTimeout`[\#](https://nodejs.org/dist/latest/docs/api/https.html\#serverkeepalivetimeout)

Added in: v8.0.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) **Default:**`5000` (5 seconds)

See [`server.keepAliveTimeout`](https://nodejs.org/dist/latest/docs/api/http.html#serverkeepalivetimeout) in the `node:http` module.

### `https.createServer([options][, requestListener])`[\#](https://nodejs.org/dist/latest/docs/api/https.html\#httpscreateserveroptions-requestlistener)

Added in: v0.3.4

- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) Accepts `options` from [`tls.createServer()`](https://nodejs.org/dist/latest/docs/api/tls.html#tlscreateserveroptions-secureconnectionlistener),
[`tls.createSecureContext()`](https://nodejs.org/dist/latest/docs/api/tls.html#tlscreatesecurecontextoptions) and [`http.createServer()`](https://nodejs.org/dist/latest/docs/api/http.html#httpcreateserveroptions-requestlistener).
- `requestListener` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) A listener to be added to the `'request'` event.
- Returns: [<https.Server>](https://nodejs.org/dist/latest/docs/api/https.html#class-httpsserver)

```js
// curl -k https://localhost:8000/
import { createServer } from 'node:https';
import { readFileSync } from 'node:fs';

const options = {
  key: readFileSync('private-key.pem'),
  cert: readFileSync('certificate.pem'),
};

createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);// curl -k https://localhost:8000/
const https = require('node:https');
const fs = require('node:fs');

const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem'),
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);copy
```

Or

```js
import { createServer } from 'node:https';
import { readFileSync } from 'node:fs';

const options = {
  pfx: readFileSync('test_cert.pfx'),
  passphrase: 'sample',
};

createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);const https = require('node:https');
const fs = require('node:fs');

const options = {
  pfx: fs.readFileSync('test_cert.pfx'),
  passphrase: 'sample',
};

https.createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);copy
```

To generate the certificate and key for this example, run:

```bash
openssl req -x509 -newkey rsa:2048 -nodes -sha256 -subj '/CN=localhost' \
  -keyout private-key.pem -out certificate.pem copy
```

Then, to generate the `pfx` certificate for this example, run:

```bash
openssl pkcs12 -certpbe AES-256-CBC -export -out test_cert.pfx \
  -inkey private-key.pem -in certificate.pem -passout pass:sample copy
```

### `https.get(options[, callback])`[\#](https://nodejs.org/dist/latest/docs/api/https.html\#httpsgetoptions-callback)

### `https.get(url[, options][, callback])`[\#](https://nodejs.org/dist/latest/docs/api/https.html\#httpsgeturl-options-callback)

History

| Version | Changes |
| --- | --- |
| v10.9.0 | The `url` parameter can now be passed along with a separate `options` object. |
| v7.5.0 | The `options` parameter can be a WHATWG `URL` object. |
| v0.3.6 | Added in: v0.3.6 |

- `url` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<URL>](https://nodejs.org/dist/latest/docs/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<URL>](https://nodejs.org/dist/latest/docs/api/url.html#the-whatwg-url-api) Accepts the same `options` as
[`https.request()`](https://nodejs.org/dist/latest/docs/api/https.html#httpsrequestoptions-callback), with the method set to GET by default.
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
- Returns: [<http.ClientRequest>](https://nodejs.org/dist/latest/docs/api/http.html#class-httpclientrequest)

Like [`http.get()`](https://nodejs.org/dist/latest/docs/api/http.html#httpgetoptions-callback) but for HTTPS.

`options` can be an object, a string, or a [`URL`](https://nodejs.org/dist/latest/docs/api/url.html#the-whatwg-url-api) object. If `options` is a
string, it is automatically parsed with [`new URL()`](https://nodejs.org/dist/latest/docs/api/url.html#new-urlinput-base). If it is a [`URL`](https://nodejs.org/dist/latest/docs/api/url.html#the-whatwg-url-api)
object, it will be automatically converted to an ordinary `options` object.

```js
import { get } from 'node:https';
import process from 'node:process';

get('https://encrypted.google.com/', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});const https = require('node:https');

https.get('https://encrypted.google.com/', (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });

}).on('error', (e) => {
  console.error(e);
});copy
```

### `https.globalAgent`[\#](https://nodejs.org/dist/latest/docs/api/https.html\#httpsglobalagent)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | The agent now uses HTTP Keep-Alive and a 5 second timeout by default. |
| v0.5.9 | Added in: v0.5.9 |

Global instance of [`https.Agent`](https://nodejs.org/dist/latest/docs/api/https.html#class-httpsagent) for all HTTPS client requests. Diverges
from a default [`https.Agent`](https://nodejs.org/dist/latest/docs/api/https.html#class-httpsagent) configuration by having `keepAlive` enabled and
a `timeout` of 5 seconds.

### `https.request(options[, callback])`[\#](https://nodejs.org/dist/latest/docs/api/https.html\#httpsrequestoptions-callback)

### `https.request(url[, options][, callback])`[\#](https://nodejs.org/dist/latest/docs/api/https.html\#httpsrequesturl-options-callback)

History

| Version | Changes |
| --- | --- |
| v22.4.0, v20.16.0 | The `clientCertEngine` option depends on custom engine support in OpenSSL which is deprecated in OpenSSL 3. |
| v16.7.0, v14.18.0 | When using a `URL` object parsed username and password will now be properly URI decoded. |
| v14.1.0, v13.14.0 | The `highWaterMark` option is accepted now. |
| v10.9.0 | The `url` parameter can now be passed along with a separate `options` object. |
| v9.3.0 | The `options` parameter can now include `clientCertEngine`. |
| v7.5.0 | The `options` parameter can be a WHATWG `URL` object. |
| v0.3.6 | Added in: v0.3.6 |

- `url` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<URL>](https://nodejs.org/dist/latest/docs/api/url.html#the-whatwg-url-api)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<URL>](https://nodejs.org/dist/latest/docs/api/url.html#the-whatwg-url-api) Accepts all `options` from
[`http.request()`](https://nodejs.org/dist/latest/docs/api/http.html#httprequestoptions-callback), with some differences in default values:

  - `protocol` **Default:**`'https:'`
  - `port` **Default:**`443`
  - `agent` **Default:**`https.globalAgent`
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
- Returns: [<http.ClientRequest>](https://nodejs.org/dist/latest/docs/api/http.html#class-httpclientrequest)

Makes a request to a secure web server.

The following additional `options` from [`tls.connect()`](https://nodejs.org/dist/latest/docs/api/tls.html#tlsconnectoptions-callback) are also accepted:
`ca`, `cert`, `ciphers`, `clientCertEngine` (deprecated), `crl`, `dhparam`, `ecdhCurve`,
`honorCipherOrder`, `key`, `passphrase`, `pfx`, `rejectUnauthorized`,
`secureOptions`, `secureProtocol`, `servername`, `sessionIdContext`,
`highWaterMark`.

`options` can be an object, a string, or a [`URL`](https://nodejs.org/dist/latest/docs/api/url.html#the-whatwg-url-api) object. If `options` is a
string, it is automatically parsed with [`new URL()`](https://nodejs.org/dist/latest/docs/api/url.html#new-urlinput-base). If it is a [`URL`](https://nodejs.org/dist/latest/docs/api/url.html#the-whatwg-url-api)
object, it will be automatically converted to an ordinary `options` object.

`https.request()` returns an instance of the [`http.ClientRequest`](https://nodejs.org/dist/latest/docs/api/http.html#class-httpclientrequest)
class. The `ClientRequest` instance is a writable stream. If one needs to
upload a file with a POST request, then write to the `ClientRequest` object.

```js
import { request } from 'node:https';
import process from 'node:process';

const options = {
  hostname: 'encrypted.google.com',
  port: 443,
  path: '/',
  method: 'GET',
};

const req = request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();const https = require('node:https');

const options = {
  hostname: 'encrypted.google.com',
  port: 443,
  path: '/',
  method: 'GET',
};

const req = https.request(options, (res) => {
  console.log('statusCode:', res.statusCode);
  console.log('headers:', res.headers);

  res.on('data', (d) => {
    process.stdout.write(d);
  });
});

req.on('error', (e) => {
  console.error(e);
});
req.end();copy
```

Example using options from [`tls.connect()`](https://nodejs.org/dist/latest/docs/api/tls.html#tlsconnectoptions-callback):

```js
const options = {
  hostname: 'encrypted.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem'),
};
options.agent = new https.Agent(options);

const req = https.request(options, (res) => {
  // ...
}); copy
```

Alternatively, opt out of connection pooling by not using an [`Agent`](https://nodejs.org/dist/latest/docs/api/https.html#class-httpsagent).

```js
const options = {
  hostname: 'encrypted.google.com',
  port: 443,
  path: '/',
  method: 'GET',
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem'),
  agent: false,
};

const req = https.request(options, (res) => {
  // ...
}); copy
```

Example using a [`URL`](https://nodejs.org/dist/latest/docs/api/url.html#the-whatwg-url-api) as `options`:

```js
const options = new URL('https://abc:xyz@example.com');

const req = https.request(options, (res) => {
  // ...
}); copy
```

Example pinning on certificate fingerprint, or the public key (similar to
`pin-sha256`):

```js
import { checkServerIdentity } from 'node:tls';
import { Agent, request } from 'node:https';
import { createHash } from 'node:crypto';

function sha256(s) {
  return createHash('sha256').update(s).digest('base64');
}
const options = {
  hostname: 'github.com',
  port: 443,
  path: '/',
  method: 'GET',
  checkServerIdentity: function(host, cert) {
    // Make sure the certificate is issued to the host we are connected to
    const err = checkServerIdentity(host, cert);
    if (err) {
      return err;
    }

    // Pin the public key, similar to HPKP pin-sha256 pinning
    const pubkey256 = 'SIXvRyDmBJSgatgTQRGbInBaAK+hZOQ18UmrSwnDlK8=';
    if (sha256(cert.pubkey) !== pubkey256) {
      const msg = 'Certificate verification error: ' +
        `The public key of '${cert.subject.CN}' ` +
        'does not match our pinned fingerprint';
      return new Error(msg);
    }

    // Pin the exact certificate, rather than the pub key
    const cert256 = 'FD:6E:9B:0E:F3:98:BC:D9:04:C3:B2:EC:16:7A:7B:' +
      '0F:DA:72:01:C9:03:C5:3A:6A:6A:E5:D0:41:43:63:EF:65';
    if (cert.fingerprint256 !== cert256) {
      const msg = 'Certificate verification error: ' +
        `The certificate of '${cert.subject.CN}' ` +
        'does not match our pinned fingerprint';
      return new Error(msg);
    }

    // This loop is informational only.
    // Print the certificate and public key fingerprints of all certs in the
    // chain. Its common to pin the public key of the issuer on the public
    // internet, while pinning the public key of the service in sensitive
    // environments.
    let lastprint256;
    do {
      console.log('Subject Common Name:', cert.subject.CN);
      console.log('  Certificate SHA256 fingerprint:', cert.fingerprint256);

      const hash = createHash('sha256');
      console.log('  Public key ping-sha256:', sha256(cert.pubkey));

      lastprint256 = cert.fingerprint256;
      cert = cert.issuerCertificate;
    } while (cert.fingerprint256 !== lastprint256);

  },
};

options.agent = new Agent(options);
const req = request(options, (res) => {
  console.log('All OK. Server matched our pinned cert or public key');
  console.log('statusCode:', res.statusCode);

  res.on('data', (d) => {});
});

req.on('error', (e) => {
  console.error(e.message);
});
req.end();const tls = require('node:tls');
const https = require('node:https');
const crypto = require('node:crypto');

function sha256(s) {
  return crypto.createHash('sha256').update(s).digest('base64');
}
const options = {
  hostname: 'github.com',
  port: 443,
  path: '/',
  method: 'GET',
  checkServerIdentity: function(host, cert) {
    // Make sure the certificate is issued to the host we are connected to
    const err = tls.checkServerIdentity(host, cert);
    if (err) {
      return err;
    }

    // Pin the public key, similar to HPKP pin-sha256 pinning
    const pubkey256 = 'SIXvRyDmBJSgatgTQRGbInBaAK+hZOQ18UmrSwnDlK8=';
    if (sha256(cert.pubkey) !== pubkey256) {
      const msg = 'Certificate verification error: ' +
        `The public key of '${cert.subject.CN}' ` +
        'does not match our pinned fingerprint';
      return new Error(msg);
    }

    // Pin the exact certificate, rather than the pub key
    const cert256 = 'FD:6E:9B:0E:F3:98:BC:D9:04:C3:B2:EC:16:7A:7B:' +
      '0F:DA:72:01:C9:03:C5:3A:6A:6A:E5:D0:41:43:63:EF:65';
    if (cert.fingerprint256 !== cert256) {
      const msg = 'Certificate verification error: ' +
        `The certificate of '${cert.subject.CN}' ` +
        'does not match our pinned fingerprint';
      return new Error(msg);
    }

    // This loop is informational only.
    // Print the certificate and public key fingerprints of all certs in the
    // chain. Its common to pin the public key of the issuer on the public
    // internet, while pinning the public key of the service in sensitive
    // environments.
    do {
      console.log('Subject Common Name:', cert.subject.CN);
      console.log('  Certificate SHA256 fingerprint:', cert.fingerprint256);

      hash = crypto.createHash('sha256');
      console.log('  Public key ping-sha256:', sha256(cert.pubkey));

      lastprint256 = cert.fingerprint256;
      cert = cert.issuerCertificate;
    } while (cert.fingerprint256 !== lastprint256);

  },
};

options.agent = new https.Agent(options);
const req = https.request(options, (res) => {
  console.log('All OK. Server matched our pinned cert or public key');
  console.log('statusCode:', res.statusCode);

  res.on('data', (d) => {});
});

req.on('error', (e) => {
  console.error(e.message);
});
req.end();copy
```

Outputs for example:

```text
Subject Common Name: github.com
  Certificate SHA256 fingerprint: FD:6E:9B:0E:F3:98:BC:D9:04:C3:B2:EC:16:7A:7B:0F:DA:72:01:C9:03:C5:3A:6A:6A:E5:D0:41:43:63:EF:65
  Public key ping-sha256: SIXvRyDmBJSgatgTQRGbInBaAK+hZOQ18UmrSwnDlK8=
Subject Common Name: Sectigo ECC Domain Validation Secure Server CA
  Certificate SHA256 fingerprint: 61:E9:73:75:E9:F6:DA:98:2F:F5:C1:9E:2F:94:E6:6C:4E:35:B6:83:7C:E3:B9:14:D2:24:5C:7F:5F:65:82:5F
  Public key ping-sha256: Eep0p/AsSa9lFUH6KT2UY+9s1Z8v7voAPkQ4fGknZ2g=
Subject Common Name: USERTrust ECC Certification Authority
  Certificate SHA256 fingerprint: A6:CF:64:DB:B4:C8:D5:FD:19:CE:48:89:60:68:DB:03:B5:33:A8:D1:33:6C:62:56:A8:7D:00:CB:B3:DE:F3:EA
  Public key ping-sha256: UJM2FOhG9aTNY0Pg4hgqjNzZ/lQBiMGRxPD5Y2/e0bw=
Subject Common Name: AAA Certificate Services
  Certificate SHA256 fingerprint: D7:A7:A0:FB:5D:7E:27:31:D7:71:E9:48:4E:BC:DE:F7:1D:5F:0C:3E:0A:29:48:78:2B:C8:3E:E0:EA:69:9E:F4
  Public key ping-sha256: vRU+17BDT2iGsXvOi76E7TQMcTLXAqj0+jGPdW7L1vM=
All OK. Server matched our pinned cert or public key
statusCode: 200 copy
```