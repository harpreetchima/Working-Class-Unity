---
url: "https://nodejs.org/dist/latest/docs/api/zlib.html"
title: "Zlib | Node.js v25.2.1 Documentation"
---

[Skip to content](https://nodejs.org/dist/latest/docs/api/zlib.html#apicontent)

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
- [Table of contents](https://nodejs.org/dist/latest/docs/api/zlib.html#toc-picker)




- [Zlib](https://nodejs.org/dist/latest/docs/api/zlib.html#zlib)
  - [Threadpool usage and performance considerations](https://nodejs.org/dist/latest/docs/api/zlib.html#threadpool-usage-and-performance-considerations)
  - [Compressing HTTP requests and responses](https://nodejs.org/dist/latest/docs/api/zlib.html#compressing-http-requests-and-responses)
  - [Memory usage tuning](https://nodejs.org/dist/latest/docs/api/zlib.html#memory-usage-tuning)
    - [For zlib-based streams](https://nodejs.org/dist/latest/docs/api/zlib.html#for-zlib-based-streams)
    - [For Brotli-based streams](https://nodejs.org/dist/latest/docs/api/zlib.html#for-brotli-based-streams)
    - [For Zstd-based streams](https://nodejs.org/dist/latest/docs/api/zlib.html#for-zstd-based-streams)
  - [Flushing](https://nodejs.org/dist/latest/docs/api/zlib.html#flushing)
  - [Constants](https://nodejs.org/dist/latest/docs/api/zlib.html#constants)
    - [zlib constants](https://nodejs.org/dist/latest/docs/api/zlib.html#zlib-constants)
    - [Brotli constants](https://nodejs.org/dist/latest/docs/api/zlib.html#brotli-constants)
      - [Flush operations](https://nodejs.org/dist/latest/docs/api/zlib.html#flush-operations)
      - [Compressor options](https://nodejs.org/dist/latest/docs/api/zlib.html#compressor-options)
      - [Decompressor options](https://nodejs.org/dist/latest/docs/api/zlib.html#decompressor-options)
    - [Zstd constants](https://nodejs.org/dist/latest/docs/api/zlib.html#zstd-constants)
      - [Flush operations](https://nodejs.org/dist/latest/docs/api/zlib.html#flush-operations_1)
      - [Compressor options](https://nodejs.org/dist/latest/docs/api/zlib.html#compressor-options_1)
      - [Strategy options](https://nodejs.org/dist/latest/docs/api/zlib.html#strategy-options)
      - [Pledged Source Size](https://nodejs.org/dist/latest/docs/api/zlib.html#pledged-source-size)
      - [Decompressor options](https://nodejs.org/dist/latest/docs/api/zlib.html#decompressor-options_1)
  - [Class: `Options`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-options)
  - [Class: `BrotliOptions`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-brotlioptions)
  - [Class: `zlib.BrotliCompress`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibbrotlicompress)
  - [Class: `zlib.BrotliDecompress`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibbrotlidecompress)
  - [Class: `zlib.Deflate`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibdeflate)
  - [Class: `zlib.DeflateRaw`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibdeflateraw)
  - [Class: `zlib.Gunzip`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibgunzip)
  - [Class: `zlib.Gzip`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibgzip)
  - [Class: `zlib.Inflate`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibinflate)
  - [Class: `zlib.InflateRaw`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibinflateraw)
  - [Class: `zlib.Unzip`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibunzip)
  - [Class: `zlib.ZlibBase`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibzlibbase)
    - [`zlib.bytesWritten`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibbyteswritten)
    - [`zlib.close([callback])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibclosecallback)
    - [`zlib.flush([kind, ]callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibflushkind-callback)
    - [`zlib.params(level, strategy, callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibparamslevel-strategy-callback)
    - [`zlib.reset()`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibreset)
  - [Class: `ZstdOptions`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zstdoptions)
  - [Class: `zlib.ZstdCompress`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibzstdcompress)
  - [Class: `zlib.ZstdDecompress`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibzstddecompress)
  - [`zlib.constants`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibconstants)
  - [`zlib.crc32(data[, value])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibcrc32data-value)
  - [`zlib.createBrotliCompress([options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibcreatebrotlicompressoptions)
  - [`zlib.createBrotliDecompress([options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibcreatebrotlidecompressoptions)
  - [`zlib.createDeflate([options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibcreatedeflateoptions)
  - [`zlib.createDeflateRaw([options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibcreatedeflaterawoptions)
  - [`zlib.createGunzip([options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibcreategunzipoptions)
  - [`zlib.createGzip([options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibcreategzipoptions)
  - [`zlib.createInflate([options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibcreateinflateoptions)
  - [`zlib.createInflateRaw([options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibcreateinflaterawoptions)
  - [`zlib.createUnzip([options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibcreateunzipoptions)
  - [`zlib.createZstdCompress([options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibcreatezstdcompressoptions)
  - [`zlib.createZstdDecompress([options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibcreatezstddecompressoptions)
  - [Convenience methods](https://nodejs.org/dist/latest/docs/api/zlib.html#convenience-methods)
    - [`zlib.brotliCompress(buffer[, options], callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibbrotlicompressbuffer-options-callback)
    - [`zlib.brotliCompressSync(buffer[, options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibbrotlicompresssyncbuffer-options)
    - [`zlib.brotliDecompress(buffer[, options], callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibbrotlidecompressbuffer-options-callback)
    - [`zlib.brotliDecompressSync(buffer[, options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibbrotlidecompresssyncbuffer-options)
    - [`zlib.deflate(buffer[, options], callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibdeflatebuffer-options-callback)
    - [`zlib.deflateSync(buffer[, options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibdeflatesyncbuffer-options)
    - [`zlib.deflateRaw(buffer[, options], callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibdeflaterawbuffer-options-callback)
    - [`zlib.deflateRawSync(buffer[, options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibdeflaterawsyncbuffer-options)
    - [`zlib.gunzip(buffer[, options], callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibgunzipbuffer-options-callback)
    - [`zlib.gunzipSync(buffer[, options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibgunzipsyncbuffer-options)
    - [`zlib.gzip(buffer[, options], callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibgzipbuffer-options-callback)
    - [`zlib.gzipSync(buffer[, options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibgzipsyncbuffer-options)
    - [`zlib.inflate(buffer[, options], callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibinflatebuffer-options-callback)
    - [`zlib.inflateSync(buffer[, options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibinflatesyncbuffer-options)
    - [`zlib.inflateRaw(buffer[, options], callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibinflaterawbuffer-options-callback)
    - [`zlib.inflateRawSync(buffer[, options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibinflaterawsyncbuffer-options)
    - [`zlib.unzip(buffer[, options], callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibunzipbuffer-options-callback)
    - [`zlib.unzipSync(buffer[, options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibunzipsyncbuffer-options)
    - [`zlib.zstdCompress(buffer[, options], callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibzstdcompressbuffer-options-callback)
    - [`zlib.zstdCompressSync(buffer[, options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibzstdcompresssyncbuffer-options)
    - [`zlib.zstdDecompress(buffer[, options], callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibzstddecompressbuffer-options-callback)
    - [`zlib.zstdDecompressSync(buffer[, options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibzstddecompresssyncbuffer-options)

- [Index](https://nodejs.org/dist/latest/docs/api/zlib.html#gtoc-picker)


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

- [Other versions](https://nodejs.org/dist/latest/docs/api/zlib.html#alt-docs)


01. [25.x](https://nodejs.org/docs/latest-v25.x/api/zlib.html)
02. [24.x **LTS**](https://nodejs.org/docs/latest-v24.x/api/zlib.html)
03. [23.x](https://nodejs.org/docs/latest-v23.x/api/zlib.html)
04. [22.x **LTS**](https://nodejs.org/docs/latest-v22.x/api/zlib.html)
05. [21.x](https://nodejs.org/docs/latest-v21.x/api/zlib.html)
06. [20.x **LTS**](https://nodejs.org/docs/latest-v20.x/api/zlib.html)
07. [19.x](https://nodejs.org/docs/latest-v19.x/api/zlib.html)
08. [18.x](https://nodejs.org/docs/latest-v18.x/api/zlib.html)
09. [17.x](https://nodejs.org/docs/latest-v17.x/api/zlib.html)
10. [16.x](https://nodejs.org/docs/latest-v16.x/api/zlib.html)
11. [15.x](https://nodejs.org/docs/latest-v15.x/api/zlib.html)
12. [14.x](https://nodejs.org/docs/latest-v14.x/api/zlib.html)
13. [13.x](https://nodejs.org/docs/latest-v13.x/api/zlib.html)
14. [12.x](https://nodejs.org/docs/latest-v12.x/api/zlib.html)
15. [11.x](https://nodejs.org/docs/latest-v11.x/api/zlib.html)
16. [10.x](https://nodejs.org/docs/latest-v10.x/api/zlib.html)
17. [9.x](https://nodejs.org/docs/latest-v9.x/api/zlib.html)
18. [8.x](https://nodejs.org/docs/latest-v8.x/api/zlib.html)
19. [7.x](https://nodejs.org/docs/latest-v7.x/api/zlib.html)
20. [6.x](https://nodejs.org/docs/latest-v6.x/api/zlib.html)
21. [5.x](https://nodejs.org/docs/latest-v5.x/api/zlib.html)
22. [4.x](https://nodejs.org/docs/latest-v4.x/api/zlib.html)
23. [0.12.x](https://nodejs.org/docs/latest-v0.12.x/api/zlib.html)
24. [0.10.x](https://nodejs.org/docs/latest-v0.10.x/api/zlib.html)

- [Options](https://nodejs.org/dist/latest/docs/api/zlib.html#options-picker)


- [View on single page](https://nodejs.org/dist/latest/docs/api/all.html)
- [View as JSON](https://nodejs.org/dist/latest/docs/api/zlib.json)
- [Edit on GitHub](https://github.com/nodejs/node/edit/main/doc/api/zlib.md)

* * *

Table of contents

- [Zlib](https://nodejs.org/dist/latest/docs/api/zlib.html#zlib)
  - [Threadpool usage and performance considerations](https://nodejs.org/dist/latest/docs/api/zlib.html#threadpool-usage-and-performance-considerations)
  - [Compressing HTTP requests and responses](https://nodejs.org/dist/latest/docs/api/zlib.html#compressing-http-requests-and-responses)
  - [Memory usage tuning](https://nodejs.org/dist/latest/docs/api/zlib.html#memory-usage-tuning)
    - [For zlib-based streams](https://nodejs.org/dist/latest/docs/api/zlib.html#for-zlib-based-streams)
    - [For Brotli-based streams](https://nodejs.org/dist/latest/docs/api/zlib.html#for-brotli-based-streams)
    - [For Zstd-based streams](https://nodejs.org/dist/latest/docs/api/zlib.html#for-zstd-based-streams)
  - [Flushing](https://nodejs.org/dist/latest/docs/api/zlib.html#flushing)
  - [Constants](https://nodejs.org/dist/latest/docs/api/zlib.html#constants)
    - [zlib constants](https://nodejs.org/dist/latest/docs/api/zlib.html#zlib-constants)
    - [Brotli constants](https://nodejs.org/dist/latest/docs/api/zlib.html#brotli-constants)
      - [Flush operations](https://nodejs.org/dist/latest/docs/api/zlib.html#flush-operations)
      - [Compressor options](https://nodejs.org/dist/latest/docs/api/zlib.html#compressor-options)
      - [Decompressor options](https://nodejs.org/dist/latest/docs/api/zlib.html#decompressor-options)
    - [Zstd constants](https://nodejs.org/dist/latest/docs/api/zlib.html#zstd-constants)
      - [Flush operations](https://nodejs.org/dist/latest/docs/api/zlib.html#flush-operations_1)
      - [Compressor options](https://nodejs.org/dist/latest/docs/api/zlib.html#compressor-options_1)
      - [Strategy options](https://nodejs.org/dist/latest/docs/api/zlib.html#strategy-options)
      - [Pledged Source Size](https://nodejs.org/dist/latest/docs/api/zlib.html#pledged-source-size)
      - [Decompressor options](https://nodejs.org/dist/latest/docs/api/zlib.html#decompressor-options_1)
  - [Class: `Options`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-options)
  - [Class: `BrotliOptions`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-brotlioptions)
  - [Class: `zlib.BrotliCompress`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibbrotlicompress)
  - [Class: `zlib.BrotliDecompress`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibbrotlidecompress)
  - [Class: `zlib.Deflate`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibdeflate)
  - [Class: `zlib.DeflateRaw`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibdeflateraw)
  - [Class: `zlib.Gunzip`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibgunzip)
  - [Class: `zlib.Gzip`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibgzip)
  - [Class: `zlib.Inflate`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibinflate)
  - [Class: `zlib.InflateRaw`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibinflateraw)
  - [Class: `zlib.Unzip`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibunzip)
  - [Class: `zlib.ZlibBase`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibzlibbase)
    - [`zlib.bytesWritten`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibbyteswritten)
    - [`zlib.close([callback])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibclosecallback)
    - [`zlib.flush([kind, ]callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibflushkind-callback)
    - [`zlib.params(level, strategy, callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibparamslevel-strategy-callback)
    - [`zlib.reset()`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibreset)
  - [Class: `ZstdOptions`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zstdoptions)
  - [Class: `zlib.ZstdCompress`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibzstdcompress)
  - [Class: `zlib.ZstdDecompress`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibzstddecompress)
  - [`zlib.constants`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibconstants)
  - [`zlib.crc32(data[, value])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibcrc32data-value)
  - [`zlib.createBrotliCompress([options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibcreatebrotlicompressoptions)
  - [`zlib.createBrotliDecompress([options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibcreatebrotlidecompressoptions)
  - [`zlib.createDeflate([options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibcreatedeflateoptions)
  - [`zlib.createDeflateRaw([options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibcreatedeflaterawoptions)
  - [`zlib.createGunzip([options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibcreategunzipoptions)
  - [`zlib.createGzip([options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibcreategzipoptions)
  - [`zlib.createInflate([options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibcreateinflateoptions)
  - [`zlib.createInflateRaw([options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibcreateinflaterawoptions)
  - [`zlib.createUnzip([options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibcreateunzipoptions)
  - [`zlib.createZstdCompress([options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibcreatezstdcompressoptions)
  - [`zlib.createZstdDecompress([options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibcreatezstddecompressoptions)
  - [Convenience methods](https://nodejs.org/dist/latest/docs/api/zlib.html#convenience-methods)
    - [`zlib.brotliCompress(buffer[, options], callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibbrotlicompressbuffer-options-callback)
    - [`zlib.brotliCompressSync(buffer[, options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibbrotlicompresssyncbuffer-options)
    - [`zlib.brotliDecompress(buffer[, options], callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibbrotlidecompressbuffer-options-callback)
    - [`zlib.brotliDecompressSync(buffer[, options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibbrotlidecompresssyncbuffer-options)
    - [`zlib.deflate(buffer[, options], callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibdeflatebuffer-options-callback)
    - [`zlib.deflateSync(buffer[, options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibdeflatesyncbuffer-options)
    - [`zlib.deflateRaw(buffer[, options], callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibdeflaterawbuffer-options-callback)
    - [`zlib.deflateRawSync(buffer[, options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibdeflaterawsyncbuffer-options)
    - [`zlib.gunzip(buffer[, options], callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibgunzipbuffer-options-callback)
    - [`zlib.gunzipSync(buffer[, options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibgunzipsyncbuffer-options)
    - [`zlib.gzip(buffer[, options], callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibgzipbuffer-options-callback)
    - [`zlib.gzipSync(buffer[, options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibgzipsyncbuffer-options)
    - [`zlib.inflate(buffer[, options], callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibinflatebuffer-options-callback)
    - [`zlib.inflateSync(buffer[, options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibinflatesyncbuffer-options)
    - [`zlib.inflateRaw(buffer[, options], callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibinflaterawbuffer-options-callback)
    - [`zlib.inflateRawSync(buffer[, options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibinflaterawsyncbuffer-options)
    - [`zlib.unzip(buffer[, options], callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibunzipbuffer-options-callback)
    - [`zlib.unzipSync(buffer[, options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibunzipsyncbuffer-options)
    - [`zlib.zstdCompress(buffer[, options], callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibzstdcompressbuffer-options-callback)
    - [`zlib.zstdCompressSync(buffer[, options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibzstdcompresssyncbuffer-options)
    - [`zlib.zstdDecompress(buffer[, options], callback)`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibzstddecompressbuffer-options-callback)
    - [`zlib.zstdDecompressSync(buffer[, options])`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibzstddecompresssyncbuffer-options)

## Zlib[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlib)

[Stability: 2](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Stable

**Source Code:** [lib/zlib.js](https://github.com/nodejs/node/blob/v25.2.1/lib/zlib.js)

The `node:zlib` module provides compression functionality implemented using
Gzip, Deflate/Inflate, Brotli, and Zstd.

To access it:

```js
import zlib from 'node:zlib';const zlib = require('node:zlib');copy
```

Compression and decompression are built around the Node.js [Streams API](https://nodejs.org/dist/latest/docs/api/stream.html).

Compressing or decompressing a stream (such as a file) can be accomplished by
piping the source stream through a `zlib``Transform` stream into a destination
stream:

```js
import {
  createReadStream,
  createWriteStream,
} from 'node:fs';
import process from 'node:process';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream';

const gzip = createGzip();
const source = createReadStream('input.txt');
const destination = createWriteStream('input.txt.gz');

pipeline(source, gzip, destination, (err) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
});const {
  createReadStream,
  createWriteStream,
} = require('node:fs');
const process = require('node:process');
const { createGzip } = require('node:zlib');
const { pipeline } = require('node:stream');

const gzip = createGzip();
const source = createReadStream('input.txt');
const destination = createWriteStream('input.txt.gz');

pipeline(source, gzip, destination, (err) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
});copy
```

Or, using the promise `pipeline` API:

```js
import {
  createReadStream,
  createWriteStream,
} from 'node:fs';
import { createGzip } from 'node:zlib';
import { pipeline } from 'node:stream/promises';

async function do_gzip(input, output) {
  const gzip = createGzip();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  await pipeline(source, gzip, destination);
}

await do_gzip('input.txt', 'input.txt.gz');const {
  createReadStream,
  createWriteStream,
} = require('node:fs');
const process = require('node:process');
const { createGzip } = require('node:zlib');
const { pipeline } = require('node:stream/promises');

async function do_gzip(input, output) {
  const gzip = createGzip();
  const source = createReadStream(input);
  const destination = createWriteStream(output);
  await pipeline(source, gzip, destination);
}

do_gzip('input.txt', 'input.txt.gz')
  .catch((err) => {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  });copy
```

It is also possible to compress or decompress data in a single step:

```js
import process from 'node:process';
import { Buffer } from 'node:buffer';
import { deflate, unzip } from 'node:zlib';

const input = '.................................';
deflate(input, (err, buffer) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
  console.log(buffer.toString('base64'));
});

const buffer = Buffer.from('eJzT0yMAAGTvBe8=', 'base64');
unzip(buffer, (err, buffer) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
  console.log(buffer.toString());
});

// Or, Promisified

import { promisify } from 'node:util';
const do_unzip = promisify(unzip);

const unzippedBuffer = await do_unzip(buffer);
console.log(unzippedBuffer.toString());const { deflate, unzip } = require('node:zlib');

const input = '.................................';
deflate(input, (err, buffer) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
  console.log(buffer.toString('base64'));
});

const buffer = Buffer.from('eJzT0yMAAGTvBe8=', 'base64');
unzip(buffer, (err, buffer) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
  console.log(buffer.toString());
});

// Or, Promisified

const { promisify } = require('node:util');
const do_unzip = promisify(unzip);

do_unzip(buffer)
  .then((buf) => console.log(buf.toString()))
  .catch((err) => {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  });copy
```

### Threadpool usage and performance considerations[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#threadpool-usage-and-performance-considerations)

All `zlib` APIs, except those that are explicitly synchronous, use the Node.js
internal threadpool. This can lead to surprising effects and performance
limitations in some applications.

Creating and using a large number of zlib objects simultaneously can cause
significant memory fragmentation.

```js
import zlib from 'node:zlib';
import { Buffer } from 'node:buffer';

const payload = Buffer.from('This is some data');

// WARNING: DO NOT DO THIS!
for (let i = 0; i < 30000; ++i) {
  zlib.deflate(payload, (err, buffer) => {});
}const zlib = require('node:zlib');

const payload = Buffer.from('This is some data');

// WARNING: DO NOT DO THIS!
for (let i = 0; i < 30000; ++i) {
  zlib.deflate(payload, (err, buffer) => {});
}copy
```

In the preceding example, 30,000 deflate instances are created concurrently.
Because of how some operating systems handle memory allocation and
deallocation, this may lead to significant memory fragmentation.

It is strongly recommended that the results of compression
operations be cached to avoid duplication of effort.

### Compressing HTTP requests and responses[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#compressing-http-requests-and-responses)

The `node:zlib` module can be used to implement support for the `gzip`, `deflate`,
`br`, and `zstd` content-encoding mechanisms defined by
[HTTP](https://tools.ietf.org/html/rfc7230#section-4.2).

The HTTP [`Accept-Encoding`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.3) header is used within an HTTP request to identify
the compression encodings accepted by the client. The [`Content-Encoding`](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.11)
header is used to identify the compression encodings actually applied to a
message.

The examples given below are drastically simplified to show the basic concept.
Using `zlib` encoding can be expensive, and the results ought to be cached.
See [Memory usage tuning](https://nodejs.org/dist/latest/docs/api/zlib.html#memory-usage-tuning) for more information on the speed/memory/compression
tradeoffs involved in `zlib` usage.

```js
// Client request example
import fs from 'node:fs';
import zlib from 'node:zlib';
import http from 'node:http';
import process from 'node:process';
import { pipeline } from 'node:stream';

const request = http.get({ host: 'example.com',
                           path: '/',
                           port: 80,
                           headers: { 'Accept-Encoding': 'br,gzip,deflate' } });
request.on('response', (response) => {
  const output = fs.createWriteStream('example.com_index.html');

  const onError = (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  };

  switch (response.headers['content-encoding']) {
    case 'br':
      pipeline(response, zlib.createBrotliDecompress(), output, onError);
      break;
    // Or, just use zlib.createUnzip() to handle both of the following cases:
    case 'gzip':
      pipeline(response, zlib.createGunzip(), output, onError);
      break;
    case 'deflate':
      pipeline(response, zlib.createInflate(), output, onError);
      break;
    default:
      pipeline(response, output, onError);
      break;
  }
});// Client request example
const zlib = require('node:zlib');
const http = require('node:http');
const fs = require('node:fs');
const { pipeline } = require('node:stream');

const request = http.get({ host: 'example.com',
                           path: '/',
                           port: 80,
                           headers: { 'Accept-Encoding': 'br,gzip,deflate,zstd' } });
request.on('response', (response) => {
  const output = fs.createWriteStream('example.com_index.html');

  const onError = (err) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
  };

  switch (response.headers['content-encoding']) {
    case 'br':
      pipeline(response, zlib.createBrotliDecompress(), output, onError);
      break;
    // Or, just use zlib.createUnzip() to handle both of the following cases:
    case 'gzip':
      pipeline(response, zlib.createGunzip(), output, onError);
      break;
    case 'deflate':
      pipeline(response, zlib.createInflate(), output, onError);
      break;
    case 'zstd':
      pipeline(response, zlib.createZstdDecompress(), output, onError);
      break;
    default:
      pipeline(response, output, onError);
      break;
  }
});copy
```

```js
// server example
// Running a gzip operation on every request is quite expensive.
// It would be much more efficient to cache the compressed buffer.
import zlib from 'node:zlib';
import http from 'node:http';
import fs from 'node:fs';
import { pipeline } from 'node:stream';

http.createServer((request, response) => {
  const raw = fs.createReadStream('index.html');
  // Store both a compressed and an uncompressed version of the resource.
  response.setHeader('Vary', 'Accept-Encoding');
  const acceptEncoding = request.headers['accept-encoding'] || '';

  const onError = (err) => {
    if (err) {
      // If an error occurs, there's not much we can do because
      // the server has already sent the 200 response code and
      // some amount of data has already been sent to the client.
      // The best we can do is terminate the response immediately
      // and log the error.
      response.end();
      console.error('An error occurred:', err);
    }
  };

  // Note: This is not a conformant accept-encoding parser.
  // See https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.3
  if (/\bdeflate\b/.test(acceptEncoding)) {
    response.writeHead(200, { 'Content-Encoding': 'deflate' });
    pipeline(raw, zlib.createDeflate(), response, onError);
  } else if (/\bgzip\b/.test(acceptEncoding)) {
    response.writeHead(200, { 'Content-Encoding': 'gzip' });
    pipeline(raw, zlib.createGzip(), response, onError);
  } else if (/\bbr\b/.test(acceptEncoding)) {
    response.writeHead(200, { 'Content-Encoding': 'br' });
    pipeline(raw, zlib.createBrotliCompress(), response, onError);
  } else {
    response.writeHead(200, {});
    pipeline(raw, response, onError);
  }
}).listen(1337);// server example
// Running a gzip operation on every request is quite expensive.
// It would be much more efficient to cache the compressed buffer.
const zlib = require('node:zlib');
const http = require('node:http');
const fs = require('node:fs');
const { pipeline } = require('node:stream');

http.createServer((request, response) => {
  const raw = fs.createReadStream('index.html');
  // Store both a compressed and an uncompressed version of the resource.
  response.setHeader('Vary', 'Accept-Encoding');
  const acceptEncoding = request.headers['accept-encoding'] || '';

  const onError = (err) => {
    if (err) {
      // If an error occurs, there's not much we can do because
      // the server has already sent the 200 response code and
      // some amount of data has already been sent to the client.
      // The best we can do is terminate the response immediately
      // and log the error.
      response.end();
      console.error('An error occurred:', err);
    }
  };

  // Note: This is not a conformant accept-encoding parser.
  // See https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.3
  if (/\bdeflate\b/.test(acceptEncoding)) {
    response.writeHead(200, { 'Content-Encoding': 'deflate' });
    pipeline(raw, zlib.createDeflate(), response, onError);
  } else if (/\bgzip\b/.test(acceptEncoding)) {
    response.writeHead(200, { 'Content-Encoding': 'gzip' });
    pipeline(raw, zlib.createGzip(), response, onError);
  } else if (/\bbr\b/.test(acceptEncoding)) {
    response.writeHead(200, { 'Content-Encoding': 'br' });
    pipeline(raw, zlib.createBrotliCompress(), response, onError);
  } else if (/\bzstd\b/.test(acceptEncoding)) {
    response.writeHead(200, { 'Content-Encoding': 'zstd' });
    pipeline(raw, zlib.createZstdCompress(), response, onError);
  } else {
    response.writeHead(200, {});
    pipeline(raw, response, onError);
  }
}).listen(1337);copy
```

By default, the `zlib` methods will throw an error when decompressing
truncated data. However, if it is known that the data is incomplete, or
the desire is to inspect only the beginning of a compressed file, it is
possible to suppress the default error handling by changing the flushing
method that is used to decompress the last chunk of input data:

```js
// This is a truncated version of the buffer from the above examples
const buffer = Buffer.from('eJzT0yMA', 'base64');

zlib.unzip(
  buffer,
  // For Brotli, the equivalent is zlib.constants.BROTLI_OPERATION_FLUSH.
  // For Zstd, the equivalent is zlib.constants.ZSTD_e_flush.
  { finishFlush: zlib.constants.Z_SYNC_FLUSH },
  (err, buffer) => {
    if (err) {
      console.error('An error occurred:', err);
      process.exitCode = 1;
    }
    console.log(buffer.toString());
  }); copy
```

This will not change the behavior in other error-throwing situations, e.g.
when the input data has an invalid format. Using this method, it will not be
possible to determine whether the input ended prematurely or lacks the
integrity checks, making it necessary to manually check that the
decompressed result is valid.

### Memory usage tuning[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#memory-usage-tuning)

#### For zlib-based streams[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#for-zlib-based-streams)

From `zlib/zconf.h`, modified for Node.js usage:

The memory requirements for deflate are (in bytes):

```js
(1 << (windowBits + 2)) + (1 << (memLevel + 9)) copy
```

That is: 128K for `windowBits` = 15 + 128K for `memLevel` = 8
(default values) plus a few kilobytes for small objects.

For example, to reduce the default memory requirements from 256K to 128K, the
options should be set to:

```js
const options = { windowBits: 14, memLevel: 7 }; copy
```

This will, however, generally degrade compression.

The memory requirements for inflate are (in bytes) `1 << windowBits`.
That is, 32K for `windowBits` = 15 (default value) plus a few kilobytes
for small objects.

This is in addition to a single internal output slab buffer of size
`chunkSize`, which defaults to 16K.

The speed of `zlib` compression is affected most dramatically by the
`level` setting. A higher level will result in better compression, but
will take longer to complete. A lower level will result in less
compression, but will be much faster.

In general, greater memory usage options will mean that Node.js has to make
fewer calls to `zlib` because it will be able to process more data on
each `write` operation. So, this is another factor that affects the
speed, at the cost of memory usage.

#### For Brotli-based streams[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#for-brotli-based-streams)

There are equivalents to the zlib options for Brotli-based streams, although
these options have different ranges than the zlib ones:

- zlib's `level` option matches Brotli's `BROTLI_PARAM_QUALITY` option.
- zlib's `windowBits` option matches Brotli's `BROTLI_PARAM_LGWIN` option.

See [below](https://nodejs.org/dist/latest/docs/api/zlib.html#brotli-constants) for more details on Brotli-specific options.

#### For Zstd-based streams[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#for-zstd-based-streams)

[Stability: 1](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Experimental

There are equivalents to the zlib options for Zstd-based streams, although
these options have different ranges than the zlib ones:

- zlib's `level` option matches Zstd's `ZSTD_c_compressionLevel` option.
- zlib's `windowBits` option matches Zstd's `ZSTD_c_windowLog` option.

See [below](https://nodejs.org/dist/latest/docs/api/zlib.html#zstd-constants) for more details on Zstd-specific options.

### Flushing[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#flushing)

Calling [`.flush()`](https://nodejs.org/dist/latest/docs/api/zlib.html#zlibflushkind-callback) on a compression stream will make `zlib` return as much
output as currently possible. This may come at the cost of degraded compression
quality, but can be useful when data needs to be available as soon as possible.

In the following example, `flush()` is used to write a compressed partial
HTTP response to the client:

```js
import zlib from 'node:zlib';
import http from 'node:http';
import { pipeline } from 'node:stream';

http.createServer((request, response) => {
  // For the sake of simplicity, the Accept-Encoding checks are omitted.
  response.writeHead(200, { 'content-encoding': 'gzip' });
  const output = zlib.createGzip();
  let i;

  pipeline(output, response, (err) => {
    if (err) {
      // If an error occurs, there's not much we can do because
      // the server has already sent the 200 response code and
      // some amount of data has already been sent to the client.
      // The best we can do is terminate the response immediately
      // and log the error.
      clearInterval(i);
      response.end();
      console.error('An error occurred:', err);
    }
  });

  i = setInterval(() => {
    output.write(`The current time is ${Date()}\n`, () => {
      // The data has been passed to zlib, but the compression algorithm may
      // have decided to buffer the data for more efficient compression.
      // Calling .flush() will make the data available as soon as the client
      // is ready to receive it.
      output.flush();
    });
  }, 1000);
}).listen(1337);const zlib = require('node:zlib');
const http = require('node:http');
const { pipeline } = require('node:stream');

http.createServer((request, response) => {
  // For the sake of simplicity, the Accept-Encoding checks are omitted.
  response.writeHead(200, { 'content-encoding': 'gzip' });
  const output = zlib.createGzip();
  let i;

  pipeline(output, response, (err) => {
    if (err) {
      // If an error occurs, there's not much we can do because
      // the server has already sent the 200 response code and
      // some amount of data has already been sent to the client.
      // The best we can do is terminate the response immediately
      // and log the error.
      clearInterval(i);
      response.end();
      console.error('An error occurred:', err);
    }
  });

  i = setInterval(() => {
    output.write(`The current time is ${Date()}\n`, () => {
      // The data has been passed to zlib, but the compression algorithm may
      // have decided to buffer the data for more efficient compression.
      // Calling .flush() will make the data available as soon as the client
      // is ready to receive it.
      output.flush();
    });
  }, 1000);
}).listen(1337);copy
```

### Constants[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#constants)

Added in: v0.5.8

#### zlib constants[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlib-constants)

All of the constants defined in `zlib.h` are also defined on
`require('node:zlib').constants`. In the normal course of operations, it will
not be necessary to use these constants. They are documented so that their
presence is not surprising. This section is taken almost directly from the
[zlib documentation](https://zlib.net/manual.html#Constants).

Previously, the constants were available directly from `require('node:zlib')`,
for instance `zlib.Z_NO_FLUSH`. Accessing the constants directly from the module
is currently still possible but is deprecated.

Allowed flush values.

- `zlib.constants.Z_NO_FLUSH`
- `zlib.constants.Z_PARTIAL_FLUSH`
- `zlib.constants.Z_SYNC_FLUSH`
- `zlib.constants.Z_FULL_FLUSH`
- `zlib.constants.Z_FINISH`
- `zlib.constants.Z_BLOCK`

Return codes for the compression/decompression functions. Negative
values are errors, positive values are used for special but normal
events.

- `zlib.constants.Z_OK`
- `zlib.constants.Z_STREAM_END`
- `zlib.constants.Z_NEED_DICT`
- `zlib.constants.Z_ERRNO`
- `zlib.constants.Z_STREAM_ERROR`
- `zlib.constants.Z_DATA_ERROR`
- `zlib.constants.Z_MEM_ERROR`
- `zlib.constants.Z_BUF_ERROR`
- `zlib.constants.Z_VERSION_ERROR`

Compression levels.

- `zlib.constants.Z_NO_COMPRESSION`
- `zlib.constants.Z_BEST_SPEED`
- `zlib.constants.Z_BEST_COMPRESSION`
- `zlib.constants.Z_DEFAULT_COMPRESSION`

Compression strategy.

- `zlib.constants.Z_FILTERED`
- `zlib.constants.Z_HUFFMAN_ONLY`
- `zlib.constants.Z_RLE`
- `zlib.constants.Z_FIXED`
- `zlib.constants.Z_DEFAULT_STRATEGY`

#### Brotli constants[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#brotli-constants)

Added in: v11.7.0, v10.16.0

There are several options and other constants available for Brotli-based
streams:

##### Flush operations[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#flush-operations)

The following values are valid flush operations for Brotli-based streams:

- `zlib.constants.BROTLI_OPERATION_PROCESS` (default for all operations)
- `zlib.constants.BROTLI_OPERATION_FLUSH` (default when calling `.flush()`)
- `zlib.constants.BROTLI_OPERATION_FINISH` (default for the last chunk)
- `zlib.constants.BROTLI_OPERATION_EMIT_METADATA`
  - This particular operation may be hard to use in a Node.js context,
    as the streaming layer makes it hard to know which data will end up
    in this frame. Also, there is currently no way to consume this data through
    the Node.js API.

##### Compressor options[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#compressor-options)

There are several options that can be set on Brotli encoders, affecting
compression efficiency and speed. Both the keys and the values can be accessed
as properties of the `zlib.constants` object.

The most important options are:

- `BROTLI_PARAM_MODE`
  - `BROTLI_MODE_GENERIC` (default)
  - `BROTLI_MODE_TEXT`, adjusted for UTF-8 text
  - `BROTLI_MODE_FONT`, adjusted for WOFF 2.0 fonts
- `BROTLI_PARAM_QUALITY`
  - Ranges from `BROTLI_MIN_QUALITY` to `BROTLI_MAX_QUALITY`,
    with a default of `BROTLI_DEFAULT_QUALITY`.
- `BROTLI_PARAM_SIZE_HINT`
  - Integer value representing the expected input size;
    defaults to `0` for an unknown input size.

The following flags can be set for advanced control over the compression
algorithm and memory usage tuning:

- `BROTLI_PARAM_LGWIN`
  - Ranges from `BROTLI_MIN_WINDOW_BITS` to `BROTLI_MAX_WINDOW_BITS`,
    with a default of `BROTLI_DEFAULT_WINDOW`, or up to
    `BROTLI_LARGE_MAX_WINDOW_BITS` if the `BROTLI_PARAM_LARGE_WINDOW` flag
    is set.
- `BROTLI_PARAM_LGBLOCK`
  - Ranges from `BROTLI_MIN_INPUT_BLOCK_BITS` to `BROTLI_MAX_INPUT_BLOCK_BITS`.
- `BROTLI_PARAM_DISABLE_LITERAL_CONTEXT_MODELING`
  - Boolean flag that decreases compression ratio in favour of
    decompression speed.
- `BROTLI_PARAM_LARGE_WINDOW`
  - Boolean flag enabling “Large Window Brotli” mode (not compatible with the
    Brotli format as standardized in [RFC 7932](https://www.rfc-editor.org/rfc/rfc7932.txt)).
- `BROTLI_PARAM_NPOSTFIX`
  - Ranges from `0` to `BROTLI_MAX_NPOSTFIX`.
- `BROTLI_PARAM_NDIRECT`
  - Ranges from `0` to `15 << NPOSTFIX` in steps of `1 << NPOSTFIX`.

##### Decompressor options[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#decompressor-options)

These advanced options are available for controlling decompression:

- `BROTLI_DECODER_PARAM_DISABLE_RING_BUFFER_REALLOCATION`
  - Boolean flag that affects internal memory allocation patterns.
- `BROTLI_DECODER_PARAM_LARGE_WINDOW`
  - Boolean flag enabling “Large Window Brotli” mode (not compatible with the
    Brotli format as standardized in [RFC 7932](https://www.rfc-editor.org/rfc/rfc7932.txt)).

#### Zstd constants[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zstd-constants)

[Stability: 1](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Experimental

Added in: v23.8.0, v22.15.0

There are several options and other constants available for Zstd-based
streams:

##### Flush operations[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#flush-operations_1)

The following values are valid flush operations for Zstd-based streams:

- `zlib.constants.ZSTD_e_continue` (default for all operations)
- `zlib.constants.ZSTD_e_flush` (default when calling `.flush()`)
- `zlib.constants.ZSTD_e_end` (default for the last chunk)

##### Compressor options[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#compressor-options_1)

There are several options that can be set on Zstd encoders, affecting
compression efficiency and speed. Both the keys and the values can be accessed
as properties of the `zlib.constants` object.

The most important options are:

- `ZSTD_c_compressionLevel`
  - Set compression parameters according to pre-defined cLevel table. Default
    level is ZSTD\_CLEVEL\_DEFAULT==3.
- `ZSTD_c_strategy`
  - Select the compression strategy.
  - Possible values are listed in the strategy options section below.

##### Strategy options[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#strategy-options)

The following constants can be used as values for the `ZSTD_c_strategy`
parameter:

- `zlib.constants.ZSTD_fast`
- `zlib.constants.ZSTD_dfast`
- `zlib.constants.ZSTD_greedy`
- `zlib.constants.ZSTD_lazy`
- `zlib.constants.ZSTD_lazy2`
- `zlib.constants.ZSTD_btlazy2`
- `zlib.constants.ZSTD_btopt`
- `zlib.constants.ZSTD_btultra`
- `zlib.constants.ZSTD_btultra2`

Example:

```js
const stream = zlib.createZstdCompress({
  params: {
    [zlib.constants.ZSTD_c_strategy]: zlib.constants.ZSTD_btultra,
  },
}); copy
```

##### Pledged Source Size[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#pledged-source-size)

It's possible to specify the expected total size of the uncompressed input via
`opts.pledgedSrcSize`. If the size doesn't match at the end of the input,
compression will fail with the code `ZSTD_error_srcSize_wrong`.

##### Decompressor options[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#decompressor-options_1)

These advanced options are available for controlling decompression:

- `ZSTD_d_windowLogMax`
  - Select a size limit (in power of 2) beyond which the streaming API will
    refuse to allocate memory buffer in order to protect the host from
    unreasonable memory requirements.

### Class: `Options`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#class-options)

History

| Version | Changes |
| --- | --- |
| v14.5.0, v12.19.0 | The `maxOutputLength` option is supported now. |
| v9.4.0 | The `dictionary` option can be an `ArrayBuffer`. |
| v8.0.0 | The `dictionary` option can be an `Uint8Array` now. |
| v5.11.0 | The `finishFlush` option is supported now. |
| v0.11.1 | Added in: v0.11.1 |

Each zlib-based class takes an `options` object. No options are required.

Some options are only relevant when compressing and are
ignored by the decompression classes.

- `flush` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) **Default:**`zlib.constants.Z_NO_FLUSH`
- `finishFlush` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) **Default:**`zlib.constants.Z_FINISH`
- `chunkSize` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) **Default:**`16 * 1024`
- `windowBits` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `level` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) (compression only)
- `memLevel` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) (compression only)
- `strategy` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) (compression only)
- `dictionary` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) (deflate/inflate only,
empty dictionary by default)
- `info` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) (If `true`, returns an object with `buffer` and `engine`.)
- `maxOutputLength` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) Limits output size when using
[convenience methods](https://nodejs.org/dist/latest/docs/api/zlib.html#convenience-methods). **Default:** [`buffer.kMaxLength`](https://nodejs.org/dist/latest/docs/api/buffer.html#bufferkmaxlength)

See the [`deflateInit2` and `inflateInit2`](https://zlib.net/manual.html#Advanced) documentation for more
information.

### Class: `BrotliOptions`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#class-brotlioptions)

History

| Version | Changes |
| --- | --- |
| v14.5.0, v12.19.0 | The `maxOutputLength` option is supported now. |
| v11.7.0 | Added in: v11.7.0 |

Each Brotli-based class takes an `options` object. All options are optional.

- `flush` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) **Default:**`zlib.constants.BROTLI_OPERATION_PROCESS`
- `finishFlush` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) **Default:**`zlib.constants.BROTLI_OPERATION_FINISH`
- `chunkSize` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) **Default:**`16 * 1024`
- `params` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) Key-value object containing indexed [Brotli parameters](https://nodejs.org/dist/latest/docs/api/zlib.html#brotli-constants).
- `maxOutputLength` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) Limits output size when using
[convenience methods](https://nodejs.org/dist/latest/docs/api/zlib.html#convenience-methods). **Default:** [`buffer.kMaxLength`](https://nodejs.org/dist/latest/docs/api/buffer.html#bufferkmaxlength)
- `info` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) If `true`, returns an object with `buffer` and `engine`. **Default:**`false`

For example:

```js
const stream = zlib.createBrotliCompress({
  chunkSize: 32 * 1024,
  params: {
    [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_TEXT,
    [zlib.constants.BROTLI_PARAM_QUALITY]: 4,
    [zlib.constants.BROTLI_PARAM_SIZE_HINT]: fs.statSync(inputFile).size,
  },
}); copy
```

### Class: `zlib.BrotliCompress`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#class-zlibbrotlicompress)

Added in: v11.7.0, v10.16.0

- Extends: [`ZlibBase`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibzlibbase)

Compress data using the Brotli algorithm.

### Class: `zlib.BrotliDecompress`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#class-zlibbrotlidecompress)

Added in: v11.7.0, v10.16.0

- Extends: [`ZlibBase`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibzlibbase)

Decompress data using the Brotli algorithm.

### Class: `zlib.Deflate`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#class-zlibdeflate)

Added in: v0.5.8

- Extends: [`ZlibBase`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibzlibbase)

Compress data using deflate.

### Class: `zlib.DeflateRaw`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#class-zlibdeflateraw)

Added in: v0.5.8

- Extends: [`ZlibBase`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibzlibbase)

Compress data using deflate, and do not append a `zlib` header.

### Class: `zlib.Gunzip`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#class-zlibgunzip)

History

| Version | Changes |
| --- | --- |
| v6.0.0 | Trailing garbage at the end of the input stream will now result in an `'error'` event. |
| v5.9.0 | Multiple concatenated gzip file members are supported now. |
| v5.0.0 | A truncated input stream will now result in an `'error'` event. |
| v0.5.8 | Added in: v0.5.8 |

- Extends: [`ZlibBase`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibzlibbase)

Decompress a gzip stream.

### Class: `zlib.Gzip`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#class-zlibgzip)

Added in: v0.5.8

- Extends: [`ZlibBase`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibzlibbase)

Compress data using gzip.

### Class: `zlib.Inflate`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#class-zlibinflate)

History

| Version | Changes |
| --- | --- |
| v5.0.0 | A truncated input stream will now result in an `'error'` event. |
| v0.5.8 | Added in: v0.5.8 |

- Extends: [`ZlibBase`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibzlibbase)

Decompress a deflate stream.

### Class: `zlib.InflateRaw`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#class-zlibinflateraw)

History

| Version | Changes |
| --- | --- |
| v6.8.0 | Custom dictionaries are now supported by `InflateRaw`. |
| v5.0.0 | A truncated input stream will now result in an `'error'` event. |
| v0.5.8 | Added in: v0.5.8 |

- Extends: [`ZlibBase`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibzlibbase)

Decompress a raw deflate stream.

### Class: `zlib.Unzip`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#class-zlibunzip)

Added in: v0.5.8

- Extends: [`ZlibBase`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibzlibbase)

Decompress either a Gzip- or Deflate-compressed stream by auto-detecting
the header.

### Class: `zlib.ZlibBase`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#class-zlibzlibbase)

History

| Version | Changes |
| --- | --- |
| v11.7.0, v10.16.0 | This class was renamed from `Zlib` to `ZlibBase`. |
| v0.5.8 | Added in: v0.5.8 |

- Extends: [`stream.Transform`](https://nodejs.org/dist/latest/docs/api/stream.html#class-streamtransform)

Not exported by the `node:zlib` module. It is documented here because it is the
base class of the compressor/decompressor classes.

This class inherits from [`stream.Transform`](https://nodejs.org/dist/latest/docs/api/stream.html#class-streamtransform), allowing `node:zlib` objects to
be used in pipes and similar stream operations.

#### `zlib.bytesWritten`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibbyteswritten)

Added in: v10.0.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The `zlib.bytesWritten` property specifies the number of bytes written to
the engine, before the bytes are processed (compressed or decompressed,
as appropriate for the derived class).

#### `zlib.close([callback])`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibclosecallback)

Added in: v0.9.4

- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

Close the underlying handle.

#### `zlib.flush([kind, ]callback)`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibflushkind-callback)

Added in: v0.5.8

- `kind` **Default:**`zlib.constants.Z_FULL_FLUSH` for zlib-based streams,
`zlib.constants.BROTLI_OPERATION_FLUSH` for Brotli-based streams.
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

Flush pending data. Don't call this frivolously, premature flushes negatively
impact the effectiveness of the compression algorithm.

Calling this only flushes data from the internal `zlib` state, and does not
perform flushing of any kind on the streams level. Rather, it behaves like a
normal call to `.write()`, i.e. it will be queued up behind other pending
writes and will only produce output when data is being read from the stream.

#### `zlib.params(level, strategy, callback)`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibparamslevel-strategy-callback)

Added in: v0.11.4

- `level` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `strategy` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

This function is only available for zlib-based streams, i.e. not Brotli.

Dynamically update the compression level and compression strategy.
Only applicable to deflate algorithm.

#### `zlib.reset()`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibreset)

Added in: v0.7.0

Reset the compressor/decompressor to factory defaults. Only applicable to
the inflate and deflate algorithms.

### Class: `ZstdOptions`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#class-zstdoptions)

[Stability: 1](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Experimental

Added in: v23.8.0, v22.15.0

Each Zstd-based class takes an `options` object. All options are optional.

- `flush` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) **Default:**`zlib.constants.ZSTD_e_continue`
- `finishFlush` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) **Default:**`zlib.constants.ZSTD_e_end`
- `chunkSize` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) **Default:**`16 * 1024`
- `params` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) Key-value object containing indexed [Zstd parameters](https://nodejs.org/dist/latest/docs/api/zlib.html#zstd-constants).
- `maxOutputLength` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) Limits output size when using
[convenience methods](https://nodejs.org/dist/latest/docs/api/zlib.html#convenience-methods). **Default:** [`buffer.kMaxLength`](https://nodejs.org/dist/latest/docs/api/buffer.html#bufferkmaxlength)
- `info` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) If `true`, returns an object with `buffer` and `engine`. **Default:**`false`
- `dictionary` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) Optional dictionary used to
improve compression efficiency when compressing or decompressing data that
shares common patterns with the dictionary.

For example:

```js
const stream = zlib.createZstdCompress({
  chunkSize: 32 * 1024,
  params: {
    [zlib.constants.ZSTD_c_compressionLevel]: 10,
    [zlib.constants.ZSTD_c_checksumFlag]: 1,
  },
}); copy
```

### Class: `zlib.ZstdCompress`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#class-zlibzstdcompress)

[Stability: 1](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Experimental

Added in: v23.8.0, v22.15.0

Compress data using the Zstd algorithm.

### Class: `zlib.ZstdDecompress`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#class-zlibzstddecompress)

[Stability: 1](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Experimental

Added in: v23.8.0, v22.15.0

Decompress data using the Zstd algorithm.

### `zlib.constants`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibconstants)

Added in: v7.0.0

Provides an object enumerating Zlib-related constants.

### `zlib.crc32(data[, value])`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibcrc32data-value)

Added in: v22.2.0, v20.15.0

- `data` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) When `data` is a string,
it will be encoded as UTF-8 before being used for computation.
- `value` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) An optional starting value. It must be a 32-bit unsigned
integer. **Default:**`0`
- Returns: [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) A 32-bit unsigned integer containing the checksum.

Computes a 32-bit [Cyclic Redundancy Check](https://en.wikipedia.org/wiki/Cyclic_redundancy_check) checksum of `data`. If
`value` is specified, it is used as the starting value of the checksum,
otherwise, 0 is used as the starting value.

The CRC algorithm is designed to compute checksums and to detect error
in data transmission. It's not suitable for cryptographic authentication.

To be consistent with other APIs, if the `data` is a string, it will
be encoded with UTF-8 before being used for computation. If users only
use Node.js to compute and match the checksums, this works well with
other APIs that uses the UTF-8 encoding by default.

Some third-party JavaScript libraries compute the checksum on a
string based on `str.charCodeAt()` so that it can be run in browsers.
If users want to match the checksum computed with this kind of library
in the browser, it's better to use the same library in Node.js
if it also runs in Node.js. If users have to use `zlib.crc32()` to
match the checksum produced by such a third-party library:

1. If the library accepts `Uint8Array` as input, use `TextEncoder`
in the browser to encode the string into a `Uint8Array` with UTF-8
encoding, and compute the checksum based on the UTF-8 encoded string
in the browser.
2. If the library only takes a string and compute the data based on
`str.charCodeAt()`, on the Node.js side, convert the string into
a buffer using `Buffer.from(str, 'utf16le')`.

```js
import zlib from 'node:zlib';
import { Buffer } from 'node:buffer';

let crc = zlib.crc32('hello');  // 907060870
crc = zlib.crc32('world', crc);  // 4192936109

crc = zlib.crc32(Buffer.from('hello', 'utf16le'));  // 1427272415
crc = zlib.crc32(Buffer.from('world', 'utf16le'), crc);  // 4150509955const zlib = require('node:zlib');
const { Buffer } = require('node:buffer');

let crc = zlib.crc32('hello');  // 907060870
crc = zlib.crc32('world', crc);  // 4192936109

crc = zlib.crc32(Buffer.from('hello', 'utf16le'));  // 1427272415
crc = zlib.crc32(Buffer.from('world', 'utf16le'), crc);  // 4150509955copy
```

### `zlib.createBrotliCompress([options])`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibcreatebrotlicompressoptions)

Added in: v11.7.0, v10.16.0

- `options` [<brotli options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-brotlioptions)

Creates and returns a new [`BrotliCompress`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibbrotlicompress) object.

### `zlib.createBrotliDecompress([options])`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibcreatebrotlidecompressoptions)

Added in: v11.7.0, v10.16.0

- `options` [<brotli options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-brotlioptions)

Creates and returns a new [`BrotliDecompress`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibbrotlidecompress) object.

### `zlib.createDeflate([options])`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibcreatedeflateoptions)

Added in: v0.5.8

- `options` [<zlib options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-options)

Creates and returns a new [`Deflate`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibdeflate) object.

### `zlib.createDeflateRaw([options])`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibcreatedeflaterawoptions)

Added in: v0.5.8

- `options` [<zlib options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-options)

Creates and returns a new [`DeflateRaw`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibdeflateraw) object.

An upgrade of zlib from 1.2.8 to 1.2.11 changed behavior when `windowBits`
is set to 8 for raw deflate streams. zlib would automatically set `windowBits`
to 9 if was initially set to 8. Newer versions of zlib will throw an exception,
so Node.js restored the original behavior of upgrading a value of 8 to 9,
since passing `windowBits = 9` to zlib actually results in a compressed stream
that effectively uses an 8-bit window only.

### `zlib.createGunzip([options])`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibcreategunzipoptions)

Added in: v0.5.8

- `options` [<zlib options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-options)

Creates and returns a new [`Gunzip`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibgunzip) object.

### `zlib.createGzip([options])`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibcreategzipoptions)

Added in: v0.5.8

- `options` [<zlib options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-options)

Creates and returns a new [`Gzip`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibgzip) object.
See [example](https://nodejs.org/dist/latest/docs/api/zlib.html#zlib).

### `zlib.createInflate([options])`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibcreateinflateoptions)

Added in: v0.5.8

- `options` [<zlib options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-options)

Creates and returns a new [`Inflate`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibinflate) object.

### `zlib.createInflateRaw([options])`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibcreateinflaterawoptions)

Added in: v0.5.8

- `options` [<zlib options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-options)

Creates and returns a new [`InflateRaw`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibinflateraw) object.

### `zlib.createUnzip([options])`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibcreateunzipoptions)

Added in: v0.5.8

- `options` [<zlib options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-options)

Creates and returns a new [`Unzip`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibunzip) object.

### `zlib.createZstdCompress([options])`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibcreatezstdcompressoptions)

[Stability: 1](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Experimental

Added in: v23.8.0, v22.15.0

- `options` [<zstd options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zstdoptions)

Creates and returns a new [`ZstdCompress`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibzstdcompress) object.

### `zlib.createZstdDecompress([options])`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibcreatezstddecompressoptions)

[Stability: 1](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Experimental

Added in: v23.8.0, v22.15.0

- `options` [<zstd options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zstdoptions)

Creates and returns a new [`ZstdDecompress`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibzstddecompress) object.

### Convenience methods[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#convenience-methods)

All of these take a [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer), [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView), [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), or string
as the first argument, an optional second argument
to supply options to the `zlib` classes and will call the supplied callback
with `callback(error, result)`.

Every method has a `*Sync` counterpart, which accept the same arguments, but
without a callback.

#### `zlib.brotliCompress(buffer[, options], callback)`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibbrotlicompressbuffer-options-callback)

Added in: v11.7.0, v10.16.0

- `buffer` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `options` [<brotli options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-brotlioptions)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

#### `zlib.brotliCompressSync(buffer[, options])`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibbrotlicompresssyncbuffer-options)

Added in: v11.7.0, v10.16.0

- `buffer` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `options` [<brotli options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-brotlioptions)

Compress a chunk of data with [`BrotliCompress`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibbrotlicompress).

#### `zlib.brotliDecompress(buffer[, options], callback)`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibbrotlidecompressbuffer-options-callback)

Added in: v11.7.0, v10.16.0

- `buffer` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `options` [<brotli options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-brotlioptions)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

#### `zlib.brotliDecompressSync(buffer[, options])`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibbrotlidecompresssyncbuffer-options)

Added in: v11.7.0, v10.16.0

- `buffer` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `options` [<brotli options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-brotlioptions)

Decompress a chunk of data with [`BrotliDecompress`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibbrotlidecompress).

#### `zlib.deflate(buffer[, options], callback)`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibdeflatebuffer-options-callback)

History

| Version | Changes |
| --- | --- |
| v9.4.0 | The `buffer` parameter can be an `ArrayBuffer`. |
| v8.0.0 | The `buffer` parameter can be any `TypedArray` or `DataView`. |
| v8.0.0 | The `buffer` parameter can be an `Uint8Array` now. |
| v0.6.0 | Added in: v0.6.0 |

- `buffer` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `options` [<zlib options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-options)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

#### `zlib.deflateSync(buffer[, options])`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibdeflatesyncbuffer-options)

History

| Version | Changes |
| --- | --- |
| v9.4.0 | The `buffer` parameter can be an `ArrayBuffer`. |
| v8.0.0 | The `buffer` parameter can be any `TypedArray` or `DataView`. |
| v8.0.0 | The `buffer` parameter can be an `Uint8Array` now. |
| v0.11.12 | Added in: v0.11.12 |

- `buffer` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `options` [<zlib options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-options)

Compress a chunk of data with [`Deflate`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibdeflate).

#### `zlib.deflateRaw(buffer[, options], callback)`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibdeflaterawbuffer-options-callback)

History

| Version | Changes |
| --- | --- |
| v8.0.0 | The `buffer` parameter can be any `TypedArray` or `DataView`. |
| v8.0.0 | The `buffer` parameter can be an `Uint8Array` now. |
| v0.6.0 | Added in: v0.6.0 |

- `buffer` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `options` [<zlib options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-options)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

#### `zlib.deflateRawSync(buffer[, options])`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibdeflaterawsyncbuffer-options)

History

| Version | Changes |
| --- | --- |
| v9.4.0 | The `buffer` parameter can be an `ArrayBuffer`. |
| v8.0.0 | The `buffer` parameter can be any `TypedArray` or `DataView`. |
| v8.0.0 | The `buffer` parameter can be an `Uint8Array` now. |
| v0.11.12 | Added in: v0.11.12 |

- `buffer` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `options` [<zlib options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-options)

Compress a chunk of data with [`DeflateRaw`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibdeflateraw).

#### `zlib.gunzip(buffer[, options], callback)`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibgunzipbuffer-options-callback)

History

| Version | Changes |
| --- | --- |
| v9.4.0 | The `buffer` parameter can be an `ArrayBuffer`. |
| v8.0.0 | The `buffer` parameter can be any `TypedArray` or `DataView`. |
| v8.0.0 | The `buffer` parameter can be an `Uint8Array` now. |
| v0.6.0 | Added in: v0.6.0 |

- `buffer` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `options` [<zlib options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-options)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

#### `zlib.gunzipSync(buffer[, options])`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibgunzipsyncbuffer-options)

History

| Version | Changes |
| --- | --- |
| v9.4.0 | The `buffer` parameter can be an `ArrayBuffer`. |
| v8.0.0 | The `buffer` parameter can be any `TypedArray` or `DataView`. |
| v8.0.0 | The `buffer` parameter can be an `Uint8Array` now. |
| v0.11.12 | Added in: v0.11.12 |

- `buffer` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `options` [<zlib options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-options)

Decompress a chunk of data with [`Gunzip`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibgunzip).

#### `zlib.gzip(buffer[, options], callback)`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibgzipbuffer-options-callback)

History

| Version | Changes |
| --- | --- |
| v9.4.0 | The `buffer` parameter can be an `ArrayBuffer`. |
| v8.0.0 | The `buffer` parameter can be any `TypedArray` or `DataView`. |
| v8.0.0 | The `buffer` parameter can be an `Uint8Array` now. |
| v0.6.0 | Added in: v0.6.0 |

- `buffer` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `options` [<zlib options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-options)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

#### `zlib.gzipSync(buffer[, options])`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibgzipsyncbuffer-options)

History

| Version | Changes |
| --- | --- |
| v9.4.0 | The `buffer` parameter can be an `ArrayBuffer`. |
| v8.0.0 | The `buffer` parameter can be any `TypedArray` or `DataView`. |
| v8.0.0 | The `buffer` parameter can be an `Uint8Array` now. |
| v0.11.12 | Added in: v0.11.12 |

- `buffer` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `options` [<zlib options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-options)

Compress a chunk of data with [`Gzip`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibgzip).

#### `zlib.inflate(buffer[, options], callback)`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibinflatebuffer-options-callback)

History

| Version | Changes |
| --- | --- |
| v9.4.0 | The `buffer` parameter can be an `ArrayBuffer`. |
| v8.0.0 | The `buffer` parameter can be any `TypedArray` or `DataView`. |
| v8.0.0 | The `buffer` parameter can be an `Uint8Array` now. |
| v0.6.0 | Added in: v0.6.0 |

- `buffer` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `options` [<zlib options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-options)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

#### `zlib.inflateSync(buffer[, options])`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibinflatesyncbuffer-options)

History

| Version | Changes |
| --- | --- |
| v9.4.0 | The `buffer` parameter can be an `ArrayBuffer`. |
| v8.0.0 | The `buffer` parameter can be any `TypedArray` or `DataView`. |
| v8.0.0 | The `buffer` parameter can be an `Uint8Array` now. |
| v0.11.12 | Added in: v0.11.12 |

- `buffer` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `options` [<zlib options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-options)

Decompress a chunk of data with [`Inflate`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibinflate).

#### `zlib.inflateRaw(buffer[, options], callback)`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibinflaterawbuffer-options-callback)

History

| Version | Changes |
| --- | --- |
| v9.4.0 | The `buffer` parameter can be an `ArrayBuffer`. |
| v8.0.0 | The `buffer` parameter can be any `TypedArray` or `DataView`. |
| v8.0.0 | The `buffer` parameter can be an `Uint8Array` now. |
| v0.6.0 | Added in: v0.6.0 |

- `buffer` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `options` [<zlib options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-options)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

#### `zlib.inflateRawSync(buffer[, options])`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibinflaterawsyncbuffer-options)

History

| Version | Changes |
| --- | --- |
| v9.4.0 | The `buffer` parameter can be an `ArrayBuffer`. |
| v8.0.0 | The `buffer` parameter can be any `TypedArray` or `DataView`. |
| v8.0.0 | The `buffer` parameter can be an `Uint8Array` now. |
| v0.11.12 | Added in: v0.11.12 |

- `buffer` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `options` [<zlib options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-options)

Decompress a chunk of data with [`InflateRaw`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibinflateraw).

#### `zlib.unzip(buffer[, options], callback)`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibunzipbuffer-options-callback)

History

| Version | Changes |
| --- | --- |
| v9.4.0 | The `buffer` parameter can be an `ArrayBuffer`. |
| v8.0.0 | The `buffer` parameter can be any `TypedArray` or `DataView`. |
| v8.0.0 | The `buffer` parameter can be an `Uint8Array` now. |
| v0.6.0 | Added in: v0.6.0 |

- `buffer` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `options` [<zlib options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-options)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

#### `zlib.unzipSync(buffer[, options])`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibunzipsyncbuffer-options)

History

| Version | Changes |
| --- | --- |
| v9.4.0 | The `buffer` parameter can be an `ArrayBuffer`. |
| v8.0.0 | The `buffer` parameter can be any `TypedArray` or `DataView`. |
| v8.0.0 | The `buffer` parameter can be an `Uint8Array` now. |
| v0.11.12 | Added in: v0.11.12 |

- `buffer` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `options` [<zlib options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-options)

Decompress a chunk of data with [`Unzip`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibunzip).

#### `zlib.zstdCompress(buffer[, options], callback)`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibzstdcompressbuffer-options-callback)

[Stability: 1](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Experimental

Added in: v23.8.0, v22.15.0

- `buffer` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `options` [<zstd options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zstdoptions)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

#### `zlib.zstdCompressSync(buffer[, options])`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibzstdcompresssyncbuffer-options)

[Stability: 1](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Experimental

Added in: v23.8.0, v22.15.0

- `buffer` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `options` [<zstd options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zstdoptions)

Compress a chunk of data with [`ZstdCompress`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibzstdcompress).

#### `zlib.zstdDecompress(buffer[, options], callback)`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibzstddecompressbuffer-options-callback)

Added in: v23.8.0, v22.15.0

- `buffer` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `options` [<zstd options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zstdoptions)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)

#### `zlib.zstdDecompressSync(buffer[, options])`[\#](https://nodejs.org/dist/latest/docs/api/zlib.html\#zlibzstddecompresssyncbuffer-options)

[Stability: 1](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Experimental

Added in: v23.8.0, v22.15.0

- `buffer` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `options` [<zstd options>](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zstdoptions)

Decompress a chunk of data with [`ZstdDecompress`](https://nodejs.org/dist/latest/docs/api/zlib.html#class-zlibzstddecompress).