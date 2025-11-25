---
url: "https://nodejs.org/dist/latest/docs/api/webstreams.html"
title: "Web Streams API | Node.js v25.2.1 Documentation"
---

[Skip to content](https://nodejs.org/dist/latest/docs/api/webstreams.html#apicontent)

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
- [Table of contents](https://nodejs.org/dist/latest/docs/api/webstreams.html#toc-picker)




- [Web Streams API](https://nodejs.org/dist/latest/docs/api/webstreams.html#web-streams-api)
  - [Overview](https://nodejs.org/dist/latest/docs/api/webstreams.html#overview)
    - [Example `ReadableStream`](https://nodejs.org/dist/latest/docs/api/webstreams.html#example-readablestream)
    - [Node.js streams interoperability](https://nodejs.org/dist/latest/docs/api/webstreams.html#nodejs-streams-interoperability)
  - [API](https://nodejs.org/dist/latest/docs/api/webstreams.html#api)
    - [Class: `ReadableStream`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream)
      - [`new ReadableStream([underlyingSource [, strategy]])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#new-readablestreamunderlyingsource--strategy)
      - [`readableStream.locked`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamlocked)
      - [`readableStream.cancel([reason])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamcancelreason)
      - [`readableStream.getReader([options])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamgetreaderoptions)
      - [`readableStream.pipeThrough(transform[, options])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreampipethroughtransform-options)
      - [`readableStream.pipeTo(destination[, options])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreampipetodestination-options)
      - [`readableStream.tee()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamtee)
      - [`readableStream.values([options])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamvaluesoptions)
      - [Async Iteration](https://nodejs.org/dist/latest/docs/api/webstreams.html#async-iteration)
      - [Transferring with `postMessage()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#transferring-with-postmessage)
    - [`ReadableStream.from(iterable)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamfromiterable)
    - [Class: `ReadableStreamDefaultReader`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestreamdefaultreader)
      - [`new ReadableStreamDefaultReader(stream)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#new-readablestreamdefaultreaderstream)
      - [`readableStreamDefaultReader.cancel([reason])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamdefaultreadercancelreason)
      - [`readableStreamDefaultReader.closed`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamdefaultreaderclosed)
      - [`readableStreamDefaultReader.read()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamdefaultreaderread)
      - [`readableStreamDefaultReader.releaseLock()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamdefaultreaderreleaselock)
    - [Class: `ReadableStreamBYOBReader`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestreambyobreader)
      - [`new ReadableStreamBYOBReader(stream)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#new-readablestreambyobreaderstream)
      - [`readableStreamBYOBReader.cancel([reason])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreambyobreadercancelreason)
      - [`readableStreamBYOBReader.closed`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreambyobreaderclosed)
      - [`readableStreamBYOBReader.read(view[, options])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreambyobreaderreadview-options)
      - [`readableStreamBYOBReader.releaseLock()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreambyobreaderreleaselock)
    - [Class: `ReadableStreamDefaultController`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestreamdefaultcontroller)
      - [`readableStreamDefaultController.close()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamdefaultcontrollerclose)
      - [`readableStreamDefaultController.desiredSize`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamdefaultcontrollerdesiredsize)
      - [`readableStreamDefaultController.enqueue([chunk])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamdefaultcontrollerenqueuechunk)
      - [`readableStreamDefaultController.error([error])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamdefaultcontrollererrorerror)
    - [Class: `ReadableByteStreamController`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablebytestreamcontroller)
      - [`readableByteStreamController.byobRequest`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablebytestreamcontrollerbyobrequest)
      - [`readableByteStreamController.close()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablebytestreamcontrollerclose)
      - [`readableByteStreamController.desiredSize`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablebytestreamcontrollerdesiredsize)
      - [`readableByteStreamController.enqueue(chunk)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablebytestreamcontrollerenqueuechunk)
      - [`readableByteStreamController.error([error])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablebytestreamcontrollererrorerror)
    - [Class: `ReadableStreamBYOBRequest`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestreambyobrequest)
      - [`readableStreamBYOBRequest.respond(bytesWritten)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreambyobrequestrespondbyteswritten)
      - [`readableStreamBYOBRequest.respondWithNewView(view)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreambyobrequestrespondwithnewviewview)
      - [`readableStreamBYOBRequest.view`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreambyobrequestview)
    - [Class: `WritableStream`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestream)
      - [`new WritableStream([underlyingSink[, strategy]])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#new-writablestreamunderlyingsink-strategy)
      - [`writableStream.abort([reason])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamabortreason)
      - [`writableStream.close()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamclose)
      - [`writableStream.getWriter()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamgetwriter)
      - [`writableStream.locked`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamlocked)
      - [Transferring with postMessage()](https://nodejs.org/dist/latest/docs/api/webstreams.html#transferring-with-postmessage_1)
    - [Class: `WritableStreamDefaultWriter`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestreamdefaultwriter)
      - [`new WritableStreamDefaultWriter(stream)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#new-writablestreamdefaultwriterstream)
      - [`writableStreamDefaultWriter.abort([reason])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamdefaultwriterabortreason)
      - [`writableStreamDefaultWriter.close()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamdefaultwriterclose)
      - [`writableStreamDefaultWriter.closed`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamdefaultwriterclosed)
      - [`writableStreamDefaultWriter.desiredSize`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamdefaultwriterdesiredsize)
      - [`writableStreamDefaultWriter.ready`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamdefaultwriterready)
      - [`writableStreamDefaultWriter.releaseLock()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamdefaultwriterreleaselock)
      - [`writableStreamDefaultWriter.write([chunk])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamdefaultwriterwritechunk)
    - [Class: `WritableStreamDefaultController`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestreamdefaultcontroller)
      - [`writableStreamDefaultController.error([error])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamdefaultcontrollererrorerror)
      - [`writableStreamDefaultController.signal`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamdefaultcontrollersignal)
    - [Class: `TransformStream`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-transformstream)
      - [`new TransformStream([transformer[, writableStrategy[, readableStrategy]]])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#new-transformstreamtransformer-writablestrategy-readablestrategy)
      - [`transformStream.readable`](https://nodejs.org/dist/latest/docs/api/webstreams.html#transformstreamreadable)
      - [`transformStream.writable`](https://nodejs.org/dist/latest/docs/api/webstreams.html#transformstreamwritable)
      - [Transferring with postMessage()](https://nodejs.org/dist/latest/docs/api/webstreams.html#transferring-with-postmessage_2)
    - [Class: `TransformStreamDefaultController`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-transformstreamdefaultcontroller)
      - [`transformStreamDefaultController.desiredSize`](https://nodejs.org/dist/latest/docs/api/webstreams.html#transformstreamdefaultcontrollerdesiredsize)
      - [`transformStreamDefaultController.enqueue([chunk])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#transformstreamdefaultcontrollerenqueuechunk)
      - [`transformStreamDefaultController.error([reason])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#transformstreamdefaultcontrollererrorreason)
      - [`transformStreamDefaultController.terminate()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#transformstreamdefaultcontrollerterminate)
    - [Class: `ByteLengthQueuingStrategy`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-bytelengthqueuingstrategy)
      - [`new ByteLengthQueuingStrategy(init)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#new-bytelengthqueuingstrategyinit)
      - [`byteLengthQueuingStrategy.highWaterMark`](https://nodejs.org/dist/latest/docs/api/webstreams.html#bytelengthqueuingstrategyhighwatermark)
      - [`byteLengthQueuingStrategy.size`](https://nodejs.org/dist/latest/docs/api/webstreams.html#bytelengthqueuingstrategysize)
    - [Class: `CountQueuingStrategy`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-countqueuingstrategy)
      - [`new CountQueuingStrategy(init)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#new-countqueuingstrategyinit)
      - [`countQueuingStrategy.highWaterMark`](https://nodejs.org/dist/latest/docs/api/webstreams.html#countqueuingstrategyhighwatermark)
      - [`countQueuingStrategy.size`](https://nodejs.org/dist/latest/docs/api/webstreams.html#countqueuingstrategysize)
    - [Class: `TextEncoderStream`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-textencoderstream)
      - [`new TextEncoderStream()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#new-textencoderstream)
      - [`textEncoderStream.encoding`](https://nodejs.org/dist/latest/docs/api/webstreams.html#textencoderstreamencoding)
      - [`textEncoderStream.readable`](https://nodejs.org/dist/latest/docs/api/webstreams.html#textencoderstreamreadable)
      - [`textEncoderStream.writable`](https://nodejs.org/dist/latest/docs/api/webstreams.html#textencoderstreamwritable)
    - [Class: `TextDecoderStream`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-textdecoderstream)
      - [`new TextDecoderStream([encoding[, options]])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#new-textdecoderstreamencoding-options)
      - [`textDecoderStream.encoding`](https://nodejs.org/dist/latest/docs/api/webstreams.html#textdecoderstreamencoding)
      - [`textDecoderStream.fatal`](https://nodejs.org/dist/latest/docs/api/webstreams.html#textdecoderstreamfatal)
      - [`textDecoderStream.ignoreBOM`](https://nodejs.org/dist/latest/docs/api/webstreams.html#textdecoderstreamignorebom)
      - [`textDecoderStream.readable`](https://nodejs.org/dist/latest/docs/api/webstreams.html#textdecoderstreamreadable)
      - [`textDecoderStream.writable`](https://nodejs.org/dist/latest/docs/api/webstreams.html#textdecoderstreamwritable)
    - [Class: `CompressionStream`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-compressionstream)
      - [`new CompressionStream(format)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#new-compressionstreamformat)
      - [`compressionStream.readable`](https://nodejs.org/dist/latest/docs/api/webstreams.html#compressionstreamreadable)
      - [`compressionStream.writable`](https://nodejs.org/dist/latest/docs/api/webstreams.html#compressionstreamwritable)
    - [Class: `DecompressionStream`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-decompressionstream)
      - [`new DecompressionStream(format)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#new-decompressionstreamformat)
      - [`decompressionStream.readable`](https://nodejs.org/dist/latest/docs/api/webstreams.html#decompressionstreamreadable)
      - [`decompressionStream.writable`](https://nodejs.org/dist/latest/docs/api/webstreams.html#decompressionstreamwritable)
    - [Utility Consumers](https://nodejs.org/dist/latest/docs/api/webstreams.html#utility-consumers)
      - [`streamConsumers.arrayBuffer(stream)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#streamconsumersarraybufferstream)
      - [`streamConsumers.blob(stream)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#streamconsumersblobstream)
      - [`streamConsumers.buffer(stream)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#streamconsumersbufferstream)
      - [`streamConsumers.json(stream)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#streamconsumersjsonstream)
      - [`streamConsumers.text(stream)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#streamconsumerstextstream)

- [Index](https://nodejs.org/dist/latest/docs/api/webstreams.html#gtoc-picker)


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

- [Other versions](https://nodejs.org/dist/latest/docs/api/webstreams.html#alt-docs)


01. [25.x](https://nodejs.org/docs/latest-v25.x/api/webstreams.html)
02. [24.x **LTS**](https://nodejs.org/docs/latest-v24.x/api/webstreams.html)
03. [23.x](https://nodejs.org/docs/latest-v23.x/api/webstreams.html)
04. [22.x **LTS**](https://nodejs.org/docs/latest-v22.x/api/webstreams.html)
05. [21.x](https://nodejs.org/docs/latest-v21.x/api/webstreams.html)
06. [20.x **LTS**](https://nodejs.org/docs/latest-v20.x/api/webstreams.html)
07. [19.x](https://nodejs.org/docs/latest-v19.x/api/webstreams.html)
08. [18.x](https://nodejs.org/docs/latest-v18.x/api/webstreams.html)
09. [17.x](https://nodejs.org/docs/latest-v17.x/api/webstreams.html)
10. [16.x](https://nodejs.org/docs/latest-v16.x/api/webstreams.html)

- [Options](https://nodejs.org/dist/latest/docs/api/webstreams.html#options-picker)


- [View on single page](https://nodejs.org/dist/latest/docs/api/all.html)
- [View as JSON](https://nodejs.org/dist/latest/docs/api/webstreams.json)
- [Edit on GitHub](https://github.com/nodejs/node/edit/main/doc/api/webstreams.md)

* * *

Table of contents

- [Web Streams API](https://nodejs.org/dist/latest/docs/api/webstreams.html#web-streams-api)
  - [Overview](https://nodejs.org/dist/latest/docs/api/webstreams.html#overview)
    - [Example `ReadableStream`](https://nodejs.org/dist/latest/docs/api/webstreams.html#example-readablestream)
    - [Node.js streams interoperability](https://nodejs.org/dist/latest/docs/api/webstreams.html#nodejs-streams-interoperability)
  - [API](https://nodejs.org/dist/latest/docs/api/webstreams.html#api)
    - [Class: `ReadableStream`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream)
      - [`new ReadableStream([underlyingSource [, strategy]])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#new-readablestreamunderlyingsource--strategy)
      - [`readableStream.locked`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamlocked)
      - [`readableStream.cancel([reason])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamcancelreason)
      - [`readableStream.getReader([options])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamgetreaderoptions)
      - [`readableStream.pipeThrough(transform[, options])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreampipethroughtransform-options)
      - [`readableStream.pipeTo(destination[, options])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreampipetodestination-options)
      - [`readableStream.tee()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamtee)
      - [`readableStream.values([options])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamvaluesoptions)
      - [Async Iteration](https://nodejs.org/dist/latest/docs/api/webstreams.html#async-iteration)
      - [Transferring with `postMessage()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#transferring-with-postmessage)
    - [`ReadableStream.from(iterable)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamfromiterable)
    - [Class: `ReadableStreamDefaultReader`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestreamdefaultreader)
      - [`new ReadableStreamDefaultReader(stream)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#new-readablestreamdefaultreaderstream)
      - [`readableStreamDefaultReader.cancel([reason])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamdefaultreadercancelreason)
      - [`readableStreamDefaultReader.closed`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamdefaultreaderclosed)
      - [`readableStreamDefaultReader.read()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamdefaultreaderread)
      - [`readableStreamDefaultReader.releaseLock()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamdefaultreaderreleaselock)
    - [Class: `ReadableStreamBYOBReader`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestreambyobreader)
      - [`new ReadableStreamBYOBReader(stream)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#new-readablestreambyobreaderstream)
      - [`readableStreamBYOBReader.cancel([reason])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreambyobreadercancelreason)
      - [`readableStreamBYOBReader.closed`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreambyobreaderclosed)
      - [`readableStreamBYOBReader.read(view[, options])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreambyobreaderreadview-options)
      - [`readableStreamBYOBReader.releaseLock()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreambyobreaderreleaselock)
    - [Class: `ReadableStreamDefaultController`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestreamdefaultcontroller)
      - [`readableStreamDefaultController.close()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamdefaultcontrollerclose)
      - [`readableStreamDefaultController.desiredSize`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamdefaultcontrollerdesiredsize)
      - [`readableStreamDefaultController.enqueue([chunk])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamdefaultcontrollerenqueuechunk)
      - [`readableStreamDefaultController.error([error])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreamdefaultcontrollererrorerror)
    - [Class: `ReadableByteStreamController`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablebytestreamcontroller)
      - [`readableByteStreamController.byobRequest`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablebytestreamcontrollerbyobrequest)
      - [`readableByteStreamController.close()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablebytestreamcontrollerclose)
      - [`readableByteStreamController.desiredSize`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablebytestreamcontrollerdesiredsize)
      - [`readableByteStreamController.enqueue(chunk)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablebytestreamcontrollerenqueuechunk)
      - [`readableByteStreamController.error([error])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablebytestreamcontrollererrorerror)
    - [Class: `ReadableStreamBYOBRequest`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestreambyobrequest)
      - [`readableStreamBYOBRequest.respond(bytesWritten)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreambyobrequestrespondbyteswritten)
      - [`readableStreamBYOBRequest.respondWithNewView(view)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreambyobrequestrespondwithnewviewview)
      - [`readableStreamBYOBRequest.view`](https://nodejs.org/dist/latest/docs/api/webstreams.html#readablestreambyobrequestview)
    - [Class: `WritableStream`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestream)
      - [`new WritableStream([underlyingSink[, strategy]])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#new-writablestreamunderlyingsink-strategy)
      - [`writableStream.abort([reason])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamabortreason)
      - [`writableStream.close()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamclose)
      - [`writableStream.getWriter()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamgetwriter)
      - [`writableStream.locked`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamlocked)
      - [Transferring with postMessage()](https://nodejs.org/dist/latest/docs/api/webstreams.html#transferring-with-postmessage_1)
    - [Class: `WritableStreamDefaultWriter`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestreamdefaultwriter)
      - [`new WritableStreamDefaultWriter(stream)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#new-writablestreamdefaultwriterstream)
      - [`writableStreamDefaultWriter.abort([reason])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamdefaultwriterabortreason)
      - [`writableStreamDefaultWriter.close()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamdefaultwriterclose)
      - [`writableStreamDefaultWriter.closed`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamdefaultwriterclosed)
      - [`writableStreamDefaultWriter.desiredSize`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamdefaultwriterdesiredsize)
      - [`writableStreamDefaultWriter.ready`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamdefaultwriterready)
      - [`writableStreamDefaultWriter.releaseLock()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamdefaultwriterreleaselock)
      - [`writableStreamDefaultWriter.write([chunk])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamdefaultwriterwritechunk)
    - [Class: `WritableStreamDefaultController`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestreamdefaultcontroller)
      - [`writableStreamDefaultController.error([error])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamdefaultcontrollererrorerror)
      - [`writableStreamDefaultController.signal`](https://nodejs.org/dist/latest/docs/api/webstreams.html#writablestreamdefaultcontrollersignal)
    - [Class: `TransformStream`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-transformstream)
      - [`new TransformStream([transformer[, writableStrategy[, readableStrategy]]])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#new-transformstreamtransformer-writablestrategy-readablestrategy)
      - [`transformStream.readable`](https://nodejs.org/dist/latest/docs/api/webstreams.html#transformstreamreadable)
      - [`transformStream.writable`](https://nodejs.org/dist/latest/docs/api/webstreams.html#transformstreamwritable)
      - [Transferring with postMessage()](https://nodejs.org/dist/latest/docs/api/webstreams.html#transferring-with-postmessage_2)
    - [Class: `TransformStreamDefaultController`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-transformstreamdefaultcontroller)
      - [`transformStreamDefaultController.desiredSize`](https://nodejs.org/dist/latest/docs/api/webstreams.html#transformstreamdefaultcontrollerdesiredsize)
      - [`transformStreamDefaultController.enqueue([chunk])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#transformstreamdefaultcontrollerenqueuechunk)
      - [`transformStreamDefaultController.error([reason])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#transformstreamdefaultcontrollererrorreason)
      - [`transformStreamDefaultController.terminate()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#transformstreamdefaultcontrollerterminate)
    - [Class: `ByteLengthQueuingStrategy`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-bytelengthqueuingstrategy)
      - [`new ByteLengthQueuingStrategy(init)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#new-bytelengthqueuingstrategyinit)
      - [`byteLengthQueuingStrategy.highWaterMark`](https://nodejs.org/dist/latest/docs/api/webstreams.html#bytelengthqueuingstrategyhighwatermark)
      - [`byteLengthQueuingStrategy.size`](https://nodejs.org/dist/latest/docs/api/webstreams.html#bytelengthqueuingstrategysize)
    - [Class: `CountQueuingStrategy`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-countqueuingstrategy)
      - [`new CountQueuingStrategy(init)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#new-countqueuingstrategyinit)
      - [`countQueuingStrategy.highWaterMark`](https://nodejs.org/dist/latest/docs/api/webstreams.html#countqueuingstrategyhighwatermark)
      - [`countQueuingStrategy.size`](https://nodejs.org/dist/latest/docs/api/webstreams.html#countqueuingstrategysize)
    - [Class: `TextEncoderStream`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-textencoderstream)
      - [`new TextEncoderStream()`](https://nodejs.org/dist/latest/docs/api/webstreams.html#new-textencoderstream)
      - [`textEncoderStream.encoding`](https://nodejs.org/dist/latest/docs/api/webstreams.html#textencoderstreamencoding)
      - [`textEncoderStream.readable`](https://nodejs.org/dist/latest/docs/api/webstreams.html#textencoderstreamreadable)
      - [`textEncoderStream.writable`](https://nodejs.org/dist/latest/docs/api/webstreams.html#textencoderstreamwritable)
    - [Class: `TextDecoderStream`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-textdecoderstream)
      - [`new TextDecoderStream([encoding[, options]])`](https://nodejs.org/dist/latest/docs/api/webstreams.html#new-textdecoderstreamencoding-options)
      - [`textDecoderStream.encoding`](https://nodejs.org/dist/latest/docs/api/webstreams.html#textdecoderstreamencoding)
      - [`textDecoderStream.fatal`](https://nodejs.org/dist/latest/docs/api/webstreams.html#textdecoderstreamfatal)
      - [`textDecoderStream.ignoreBOM`](https://nodejs.org/dist/latest/docs/api/webstreams.html#textdecoderstreamignorebom)
      - [`textDecoderStream.readable`](https://nodejs.org/dist/latest/docs/api/webstreams.html#textdecoderstreamreadable)
      - [`textDecoderStream.writable`](https://nodejs.org/dist/latest/docs/api/webstreams.html#textdecoderstreamwritable)
    - [Class: `CompressionStream`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-compressionstream)
      - [`new CompressionStream(format)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#new-compressionstreamformat)
      - [`compressionStream.readable`](https://nodejs.org/dist/latest/docs/api/webstreams.html#compressionstreamreadable)
      - [`compressionStream.writable`](https://nodejs.org/dist/latest/docs/api/webstreams.html#compressionstreamwritable)
    - [Class: `DecompressionStream`](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-decompressionstream)
      - [`new DecompressionStream(format)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#new-decompressionstreamformat)
      - [`decompressionStream.readable`](https://nodejs.org/dist/latest/docs/api/webstreams.html#decompressionstreamreadable)
      - [`decompressionStream.writable`](https://nodejs.org/dist/latest/docs/api/webstreams.html#decompressionstreamwritable)
    - [Utility Consumers](https://nodejs.org/dist/latest/docs/api/webstreams.html#utility-consumers)
      - [`streamConsumers.arrayBuffer(stream)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#streamconsumersarraybufferstream)
      - [`streamConsumers.blob(stream)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#streamconsumersblobstream)
      - [`streamConsumers.buffer(stream)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#streamconsumersbufferstream)
      - [`streamConsumers.json(stream)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#streamconsumersjsonstream)
      - [`streamConsumers.text(stream)`](https://nodejs.org/dist/latest/docs/api/webstreams.html#streamconsumerstextstream)

## Web Streams API[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#web-streams-api)

History

| Version | Changes |
| --- | --- |
| v21.0.0 | No longer experimental. |
| v18.0.0 | Use of this API no longer emit a runtime warning. |
| v16.5.0 | Added in: v16.5.0 |

[Stability: 2](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Stable

An implementation of the [WHATWG Streams Standard](https://streams.spec.whatwg.org/).

### Overview[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#overview)

The [WHATWG Streams Standard](https://streams.spec.whatwg.org/) (or "web streams") defines an API for handling
streaming data. It is similar to the Node.js [Streams](https://nodejs.org/dist/latest/docs/api/stream.html) API but emerged later
and has become the "standard" API for streaming data across many JavaScript
environments.

There are three primary types of objects:

- `ReadableStream` \- Represents a source of streaming data.
- `WritableStream` \- Represents a destination for streaming data.
- `TransformStream` \- Represents an algorithm for transforming streaming data.

#### Example `ReadableStream`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#example-readablestream)

This example creates a simple `ReadableStream` that pushes the current
`performance.now()` timestamp once every second forever. An async iterable
is used to read the data from the stream.

```js
import {
  ReadableStream,
} from 'node:stream/web';

import {
  setInterval as every,
} from 'node:timers/promises';

import {
  performance,
} from 'node:perf_hooks';

const SECOND = 1000;

const stream = new ReadableStream({
  async start(controller) {
    for await (const _ of every(SECOND))
      controller.enqueue(performance.now());
  },
});

for await (const value of stream)
  console.log(value);const {
  ReadableStream,
} = require('node:stream/web');

const {
  setInterval: every,
} = require('node:timers/promises');

const {
  performance,
} = require('node:perf_hooks');

const SECOND = 1000;

const stream = new ReadableStream({
  async start(controller) {
    for await (const _ of every(SECOND))
      controller.enqueue(performance.now());
  },
});

(async () => {
  for await (const value of stream)
    console.log(value);
})();copy
```

#### Node.js streams interoperability[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#nodejs-streams-interoperability)

Node.js streams can be converted to web streams and vice versa via the `toWeb` and `fromWeb` methods present on [`stream.Readable`](https://nodejs.org/dist/latest/docs/api/stream.html#class-streamreadable), [`stream.Writable`](https://nodejs.org/dist/latest/docs/api/stream.html#class-streamwritable) and [`stream.Duplex`](https://nodejs.org/dist/latest/docs/api/stream.html#class-streamduplex) objects.

For more details refer to the relevant documentation:

- [`stream.Readable.toWeb`](https://nodejs.org/dist/latest/docs/api/stream.html#streamreadabletowebstreamreadable-options)
- [`stream.Readable.fromWeb`](https://nodejs.org/dist/latest/docs/api/stream.html#streamreadablefromwebreadablestream-options)
- [`stream.Writable.toWeb`](https://nodejs.org/dist/latest/docs/api/stream.html#streamwritabletowebstreamwritable)
- [`stream.Writable.fromWeb`](https://nodejs.org/dist/latest/docs/api/stream.html#streamwritablefromwebwritablestream-options)
- [`stream.Duplex.toWeb`](https://nodejs.org/dist/latest/docs/api/stream.html#streamduplextowebstreamduplex)
- [`stream.Duplex.fromWeb`](https://nodejs.org/dist/latest/docs/api/stream.html#streamduplexfromwebpair-options)

### API[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#api)

#### Class: `ReadableStream`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#class-readablestream)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | This class is now exposed on the global object. |
| v16.5.0 | Added in: v16.5.0 |

##### `new ReadableStream([underlyingSource [, strategy]])`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#new-readablestreamunderlyingsource--strategy)

Added in: v16.5.0

- `underlyingSource` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `start` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) A user-defined function that is invoked immediately when
    the `ReadableStream` is created.

    - `controller` [<ReadableStreamDefaultController>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestreamdefaultcontroller) \| [<ReadableByteStreamController>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablebytestreamcontroller)
    - Returns: `undefined` or a promise fulfilled with `undefined`.
  - `pull` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) A user-defined function that is called repeatedly when the
    `ReadableStream` internal queue is not full. The operation may be sync or
    async. If async, the function will not be called again until the previously
    returned promise is fulfilled.

    - `controller` [<ReadableStreamDefaultController>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestreamdefaultcontroller) \| [<ReadableByteStreamController>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablebytestreamcontroller)
    - Returns: A promise fulfilled with `undefined`.
  - `cancel` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) A user-defined function that is called when the
    `ReadableStream` is canceled.

    - `reason` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)
    - Returns: A promise fulfilled with `undefined`.
  - `type` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be `'bytes'` or `undefined`.
  - `autoAllocateChunkSize` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) Used only when `type` is equal to
    `'bytes'`. When set to a non-zero value a view buffer is automatically
    allocated to `ReadableByteStreamController.byobRequest`. When not set
    one must use stream's internal queues to transfer data via the default
    reader `ReadableStreamDefaultReader`.
- `strategy` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `highWaterMark` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The maximum internal queue size before backpressure
    is applied.
  - `size` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) A user-defined function used to identify the size of each
    chunk of data.

    - `chunk` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)
    - Returns: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

##### `readableStream.locked`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablestreamlocked)

Added in: v16.5.0

- Type: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) Set to `true` if there is an active reader for this
[<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream).

The `readableStream.locked` property is `false` by default, and is
switched to `true` while there is an active reader consuming the
stream's data.

##### `readableStream.cancel([reason])`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablestreamcancelreason)

Added in: v16.5.0

- `reason` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)
- Returns: A promise fulfilled with `undefined` once cancelation has
been completed.

##### `readableStream.getReader([options])`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablestreamgetreaderoptions)

Added in: v16.5.0

- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `mode` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)`'byob'` or `undefined`
- Returns: [<ReadableStreamDefaultReader>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestreamdefaultreader) \| [<ReadableStreamBYOBReader>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestreambyobreader)

```js
import { ReadableStream } from 'node:stream/web';

const stream = new ReadableStream();

const reader = stream.getReader();

console.log(await reader.read());const { ReadableStream } = require('node:stream/web');

const stream = new ReadableStream();

const reader = stream.getReader();

reader.read().then(console.log);copy
```

Causes the `readableStream.locked` to be `true`.

##### `readableStream.pipeThrough(transform[, options])`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablestreampipethroughtransform-options)

Added in: v16.5.0

- `transform` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `readable` [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) The `ReadableStream` to which
    `transform.writable` will push the potentially modified data
    it receives from this `ReadableStream`.
  - `writable` [<WritableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestream) The `WritableStream` to which this
    `ReadableStream`'s data will be written.
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `preventAbort` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) When `true`, errors in this `ReadableStream`
    will not cause `transform.writable` to be aborted.
  - `preventCancel` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) When `true`, errors in the destination
    `transform.writable` do not cause this `ReadableStream` to be
    canceled.
  - `preventClose` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) When `true`, closing this `ReadableStream`
    does not cause `transform.writable` to be closed.
  - `signal` [<AbortSignal>](https://nodejs.org/dist/latest/docs/api/globals.html#class-abortsignal) Allows the transfer of data to be canceled
    using an [<AbortController>](https://nodejs.org/dist/latest/docs/api/globals.html#class-abortcontroller).
- Returns: [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) From `transform.readable`.

Connects this [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) to the pair of [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) and
[<WritableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestream) provided in the `transform` argument such that the
data from this [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) is written in to `transform.writable`,
possibly transformed, then pushed to `transform.readable`. Once the
pipeline is configured, `transform.readable` is returned.

Causes the `readableStream.locked` to be `true` while the pipe operation
is active.

```js
import {
  ReadableStream,
  TransformStream,
} from 'node:stream/web';

const stream = new ReadableStream({
  start(controller) {
    controller.enqueue('a');
  },
});

const transform = new TransformStream({
  transform(chunk, controller) {
    controller.enqueue(chunk.toUpperCase());
  },
});

const transformedStream = stream.pipeThrough(transform);

for await (const chunk of transformedStream)
  console.log(chunk);
  // Prints: Aconst {
  ReadableStream,
  TransformStream,
} = require('node:stream/web');

const stream = new ReadableStream({
  start(controller) {
    controller.enqueue('a');
  },
});

const transform = new TransformStream({
  transform(chunk, controller) {
    controller.enqueue(chunk.toUpperCase());
  },
});

const transformedStream = stream.pipeThrough(transform);

(async () => {
  for await (const chunk of transformedStream)
    console.log(chunk);
    // Prints: A
})();copy
```

##### `readableStream.pipeTo(destination[, options])`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablestreampipetodestination-options)

Added in: v16.5.0

- `destination` [<WritableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestream) A [<WritableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestream) to which this
`ReadableStream`'s data will be written.
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `preventAbort` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) When `true`, errors in this `ReadableStream`
    will not cause `destination` to be aborted.
  - `preventCancel` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) When `true`, errors in the `destination`
    will not cause this `ReadableStream` to be canceled.
  - `preventClose` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) When `true`, closing this `ReadableStream`
    does not cause `destination` to be closed.
  - `signal` [<AbortSignal>](https://nodejs.org/dist/latest/docs/api/globals.html#class-abortsignal) Allows the transfer of data to be canceled
    using an [<AbortController>](https://nodejs.org/dist/latest/docs/api/globals.html#class-abortcontroller).
- Returns: A promise fulfilled with `undefined`

Causes the `readableStream.locked` to be `true` while the pipe operation
is active.

##### `readableStream.tee()`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablestreamtee)

History

| Version | Changes |
| --- | --- |
| v18.10.0, v16.18.0 | Support teeing a readable byte stream. |
| v16.5.0 | Added in: v16.5.0 |

- Returns: [<ReadableStream\[\]>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream)

Returns a pair of new [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) instances to which this
`ReadableStream`'s data will be forwarded. Each will receive the
same data.

Causes the `readableStream.locked` to be `true`.

##### `readableStream.values([options])`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablestreamvaluesoptions)

Added in: v16.5.0

- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `preventCancel` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) When `true`, prevents the [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream)
    from being closed when the async iterator abruptly terminates.
    **Default**: `false`.

Creates and returns an async iterator usable for consuming this
`ReadableStream`'s data.

Causes the `readableStream.locked` to be `true` while the async iterator
is active.

```js
import { Buffer } from 'node:buffer';

const stream = new ReadableStream(getSomeSource());

for await (const chunk of stream.values({ preventCancel: true }))
  console.log(Buffer.from(chunk).toString()); copy
```

##### Async Iteration[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#async-iteration)

The [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) object supports the async iterator protocol using
`for await` syntax.

```js
import { Buffer } from 'node:buffer';

const stream = new ReadableStream(getSomeSource());

for await (const chunk of stream)
  console.log(Buffer.from(chunk).toString()); copy
```

The async iterator will consume the [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) until it terminates.

By default, if the async iterator exits early (via either a `break`,
`return`, or a `throw`), the [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) will be closed. To prevent
automatic closing of the [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream), use the `readableStream.values()`
method to acquire the async iterator and set the `preventCancel` option to
`true`.

The [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) must not be locked (that is, it must not have an existing
active reader). During the async iteration, the [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) will be locked.

##### Transferring with `postMessage()`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#transferring-with-postmessage)

A [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) instance can be transferred using a [<MessagePort>](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-messageport).

```js
const stream = new ReadableStream(getReadableSourceSomehow());

const { port1, port2 } = new MessageChannel();

port1.onmessage = ({ data }) => {
  data.getReader().read().then((chunk) => {
    console.log(chunk);
  });
};

port2.postMessage(stream, [stream]); copy
```

#### `ReadableStream.from(iterable)`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablestreamfromiterable)

Added in: v20.6.0

- `iterable` [<Iterable>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol) Object implementing the `Symbol.asyncIterator` or
`Symbol.iterator` iterable protocol.

A utility method that creates a new [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) from an iterable.

```js
import { ReadableStream } from 'node:stream/web';

async function* asyncIterableGenerator() {
  yield 'a';
  yield 'b';
  yield 'c';
}

const stream = ReadableStream.from(asyncIterableGenerator());

for await (const chunk of stream)
  console.log(chunk); // Prints: 'a', 'b', 'c'const { ReadableStream } = require('node:stream/web');

async function* asyncIterableGenerator() {
  yield 'a';
  yield 'b';
  yield 'c';
}

(async () => {
  const stream = ReadableStream.from(asyncIterableGenerator());

  for await (const chunk of stream)
    console.log(chunk); // Prints: 'a', 'b', 'c'
})();copy
```

To pipe the resulting [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) into a [<WritableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestream) the [<Iterable>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterable_protocol)
should yield a sequence of [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer), [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray), or [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) objects.

```js
import { ReadableStream } from 'node:stream/web';
import { Buffer } from 'node:buffer';

async function* asyncIterableGenerator() {
  yield Buffer.from('a');
  yield Buffer.from('b');
  yield Buffer.from('c');
}

const stream = ReadableStream.from(asyncIterableGenerator());

await stream.pipeTo(createWritableStreamSomehow());const { ReadableStream } = require('node:stream/web');
const { Buffer } = require('node:buffer');

async function* asyncIterableGenerator() {
  yield Buffer.from('a');
  yield Buffer.from('b');
  yield Buffer.from('c');
}

const stream = ReadableStream.from(asyncIterableGenerator());

(async () => {
  await stream.pipeTo(createWritableStreamSomehow());
})();copy
```

#### Class: `ReadableStreamDefaultReader`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#class-readablestreamdefaultreader)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | This class is now exposed on the global object. |
| v16.5.0 | Added in: v16.5.0 |

By default, calling `readableStream.getReader()` with no arguments
will return an instance of `ReadableStreamDefaultReader`. The default
reader treats the chunks of data passed through the stream as opaque
values, which allows the [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) to work with generally any
JavaScript value.

##### `new ReadableStreamDefaultReader(stream)`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#new-readablestreamdefaultreaderstream)

Added in: v16.5.0

- `stream` [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream)

Creates a new [<ReadableStreamDefaultReader>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestreamdefaultreader) that is locked to the
given [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream).

##### `readableStreamDefaultReader.cancel([reason])`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablestreamdefaultreadercancelreason)

Added in: v16.5.0

- `reason` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)
- Returns: A promise fulfilled with `undefined`.

Cancels the [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) and returns a promise that is fulfilled
when the underlying stream has been canceled.

##### `readableStreamDefaultReader.closed`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablestreamdefaultreaderclosed)

Added in: v16.5.0

- Type: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfilled with `undefined` when the associated
[<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) is closed or rejected if the stream errors or the reader's
lock is released before the stream finishes closing.

##### `readableStreamDefaultReader.read()`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablestreamdefaultreaderread)

Added in: v16.5.0

- Returns: A promise fulfilled with an object:
  - `value` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)
  - `done` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)

Requests the next chunk of data from the underlying [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream)
and returns a promise that is fulfilled with the data once it is
available.

##### `readableStreamDefaultReader.releaseLock()`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablestreamdefaultreaderreleaselock)

Added in: v16.5.0

Releases this reader's lock on the underlying [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream).

#### Class: `ReadableStreamBYOBReader`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#class-readablestreambyobreader)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | This class is now exposed on the global object. |
| v16.5.0 | Added in: v16.5.0 |

The `ReadableStreamBYOBReader` is an alternative consumer for
byte-oriented [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) s (those that are created with
`underlyingSource.type` set equal to `'bytes'` when the
`ReadableStream` was created).

The `BYOB` is short for "bring your own buffer". This is a
pattern that allows for more efficient reading of byte-oriented
data that avoids extraneous copying.

```js
import {
  open,
} from 'node:fs/promises';

import {
  ReadableStream,
} from 'node:stream/web';

import { Buffer } from 'node:buffer';

class Source {
  type = 'bytes';
  autoAllocateChunkSize = 1024;

  async start(controller) {
    this.file = await open(new URL(import.meta.url));
    this.controller = controller;
  }

  async pull(controller) {
    const view = controller.byobRequest?.view;
    const {
      bytesRead,
    } = await this.file.read({
      buffer: view,
      offset: view.byteOffset,
      length: view.byteLength,
    });

    if (bytesRead === 0) {
      await this.file.close();
      this.controller.close();
    }
    controller.byobRequest.respond(bytesRead);
  }
}

const stream = new ReadableStream(new Source());

async function read(stream) {
  const reader = stream.getReader({ mode: 'byob' });

  const chunks = [];
  let result;
  do {
    result = await reader.read(Buffer.alloc(100));
    if (result.value !== undefined)
      chunks.push(Buffer.from(result.value));
  } while (!result.done);

  return Buffer.concat(chunks);
}

const data = await read(stream);
console.log(Buffer.from(data).toString()); copy
```

##### `new ReadableStreamBYOBReader(stream)`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#new-readablestreambyobreaderstream)

Added in: v16.5.0

- `stream` [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream)

Creates a new `ReadableStreamBYOBReader` that is locked to the
given [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream).

##### `readableStreamBYOBReader.cancel([reason])`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablestreambyobreadercancelreason)

Added in: v16.5.0

- `reason` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)
- Returns: A promise fulfilled with `undefined`.

Cancels the [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) and returns a promise that is fulfilled
when the underlying stream has been canceled.

##### `readableStreamBYOBReader.closed`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablestreambyobreaderclosed)

Added in: v16.5.0

- Type: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfilled with `undefined` when the associated
[<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) is closed or rejected if the stream errors or the reader's
lock is released before the stream finishes closing.

##### `readableStreamBYOBReader.read(view[, options])`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablestreambyobreaderreadview-options)

History

| Version | Changes |
| --- | --- |
| v21.7.0, v20.17.0 | Added `min` option. |
| v16.5.0 | Added in: v16.5.0 |

- `view` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `min` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) When set, the returned promise will only be
    fulfilled as soon as `min` number of elements are available.
    When not set, the promise fulfills when at least one element
    is available.
- Returns: A promise fulfilled with an object:
  - `value` [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)
  - `done` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)

Requests the next chunk of data from the underlying [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream)
and returns a promise that is fulfilled with the data once it is
available.

Do not pass a pooled [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) object instance in to this method.
Pooled `Buffer` objects are created using `Buffer.allocUnsafe()`,
or `Buffer.from()`, or are often returned by various `node:fs` module
callbacks. These types of `Buffer`s use a shared underlying
[<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) object that contains all of the data from all of
the pooled `Buffer` instances. When a `Buffer`, [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray),
or [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) is passed in to `readableStreamBYOBReader.read()`,
the view's underlying `ArrayBuffer` is _detached_, invalidating
all existing views that may exist on that `ArrayBuffer`. This
can have disastrous consequences for your application.

##### `readableStreamBYOBReader.releaseLock()`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablestreambyobreaderreleaselock)

Added in: v16.5.0

Releases this reader's lock on the underlying [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream).

#### Class: `ReadableStreamDefaultController`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#class-readablestreamdefaultcontroller)

Added in: v16.5.0

Every [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) has a controller that is responsible for
the internal state and management of the stream's queue. The
`ReadableStreamDefaultController` is the default controller
implementation for `ReadableStream`s that are not byte-oriented.

##### `readableStreamDefaultController.close()`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablestreamdefaultcontrollerclose)

Added in: v16.5.0

Closes the [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) to which this controller is associated.

##### `readableStreamDefaultController.desiredSize`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablestreamdefaultcontrollerdesiredsize)

Added in: v16.5.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Returns the amount of data remaining to fill the [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream)'s
queue.

##### `readableStreamDefaultController.enqueue([chunk])`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablestreamdefaultcontrollerenqueuechunk)

Added in: v16.5.0

- `chunk` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)

Appends a new chunk of data to the [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream)'s queue.

##### `readableStreamDefaultController.error([error])`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablestreamdefaultcontrollererrorerror)

Added in: v16.5.0

- `error` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)

Signals an error that causes the [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) to error and close.

#### Class: `ReadableByteStreamController`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#class-readablebytestreamcontroller)

History

| Version | Changes |
| --- | --- |
| v18.10.0 | Support handling a BYOB pull request from a released reader. |
| v16.5.0 | Added in: v16.5.0 |

Every [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) has a controller that is responsible for
the internal state and management of the stream's queue. The
`ReadableByteStreamController` is for byte-oriented `ReadableStream`s.

##### `readableByteStreamController.byobRequest`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablebytestreamcontrollerbyobrequest)

Added in: v16.5.0

- Type: [<ReadableStreamBYOBRequest>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestreambyobrequest)

##### `readableByteStreamController.close()`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablebytestreamcontrollerclose)

Added in: v16.5.0

Closes the [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) to which this controller is associated.

##### `readableByteStreamController.desiredSize`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablebytestreamcontrollerdesiredsize)

Added in: v16.5.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Returns the amount of data remaining to fill the [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream)'s
queue.

##### `readableByteStreamController.enqueue(chunk)`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablebytestreamcontrollerenqueuechunk)

Added in: v16.5.0

- `chunk` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)

Appends a new chunk of data to the [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream)'s queue.

##### `readableByteStreamController.error([error])`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablebytestreamcontrollererrorerror)

Added in: v16.5.0

- `error` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)

Signals an error that causes the [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) to error and close.

#### Class: `ReadableStreamBYOBRequest`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#class-readablestreambyobrequest)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | This class is now exposed on the global object. |
| v16.5.0 | Added in: v16.5.0 |

When using `ReadableByteStreamController` in byte-oriented
streams, and when using the `ReadableStreamBYOBReader`,
the `readableByteStreamController.byobRequest` property
provides access to a `ReadableStreamBYOBRequest` instance
that represents the current read request. The object
is used to gain access to the `ArrayBuffer`/`TypedArray`
that has been provided for the read request to fill,
and provides methods for signaling that the data has
been provided.

##### `readableStreamBYOBRequest.respond(bytesWritten)`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablestreambyobrequestrespondbyteswritten)

Added in: v16.5.0

- `bytesWritten` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Signals that a `bytesWritten` number of bytes have been written
to `readableStreamBYOBRequest.view`.

##### `readableStreamBYOBRequest.respondWithNewView(view)`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablestreambyobrequestrespondwithnewviewview)

Added in: v16.5.0

- `view` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)

Signals that the request has been fulfilled with bytes written
to a new `Buffer`, `TypedArray`, or `DataView`.

##### `readableStreamBYOBRequest.view`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#readablestreambyobrequestview)

Added in: v16.5.0

- Type: [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)

#### Class: `WritableStream`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#class-writablestream)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | This class is now exposed on the global object. |
| v16.5.0 | Added in: v16.5.0 |

The `WritableStream` is a destination to which stream data is sent.

```js
import {
  WritableStream,
} from 'node:stream/web';

const stream = new WritableStream({
  write(chunk) {
    console.log(chunk);
  },
});

await stream.getWriter().write('Hello World'); copy
```

##### `new WritableStream([underlyingSink[, strategy]])`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#new-writablestreamunderlyingsink-strategy)

Added in: v16.5.0

- `underlyingSink` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `start` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) A user-defined function that is invoked immediately when
    the `WritableStream` is created.

    - `controller` [<WritableStreamDefaultController>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestreamdefaultcontroller)
    - Returns: `undefined` or a promise fulfilled with `undefined`.
  - `write` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) A user-defined function that is invoked when a chunk of
    data has been written to the `WritableStream`.

    - `chunk` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)
    - `controller` [<WritableStreamDefaultController>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestreamdefaultcontroller)
    - Returns: A promise fulfilled with `undefined`.
  - `close` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) A user-defined function that is called when the
    `WritableStream` is closed.

    - Returns: A promise fulfilled with `undefined`.
  - `abort` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) A user-defined function that is called to abruptly close
    the `WritableStream`.

    - `reason` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)
    - Returns: A promise fulfilled with `undefined`.
  - `type` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) The `type` option is reserved for future use and _must_ be
    undefined.
- `strategy` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `highWaterMark` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The maximum internal queue size before backpressure
    is applied.
  - `size` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) A user-defined function used to identify the size of each
    chunk of data.

    - `chunk` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)
    - Returns: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

##### `writableStream.abort([reason])`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#writablestreamabortreason)

Added in: v16.5.0

- `reason` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)
- Returns: A promise fulfilled with `undefined`.

Abruptly terminates the `WritableStream`. All queued writes will be
canceled with their associated promises rejected.

##### `writableStream.close()`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#writablestreamclose)

Added in: v16.5.0

- Returns: A promise fulfilled with `undefined`.

Closes the `WritableStream` when no additional writes are expected.

##### `writableStream.getWriter()`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#writablestreamgetwriter)

Added in: v16.5.0

- Returns: [<WritableStreamDefaultWriter>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestreamdefaultwriter)

Creates and returns a new writer instance that can be used to write
data into the `WritableStream`.

##### `writableStream.locked`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#writablestreamlocked)

Added in: v16.5.0

- Type: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)

The `writableStream.locked` property is `false` by default, and is
switched to `true` while there is an active writer attached to this
`WritableStream`.

##### Transferring with postMessage()[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#transferring-with-postmessage_1)

A [<WritableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestream) instance can be transferred using a [<MessagePort>](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-messageport).

```js
const stream = new WritableStream(getWritableSinkSomehow());

const { port1, port2 } = new MessageChannel();

port1.onmessage = ({ data }) => {
  data.getWriter().write('hello');
};

port2.postMessage(stream, [stream]); copy
```

#### Class: `WritableStreamDefaultWriter`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#class-writablestreamdefaultwriter)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | This class is now exposed on the global object. |
| v16.5.0 | Added in: v16.5.0 |

##### `new WritableStreamDefaultWriter(stream)`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#new-writablestreamdefaultwriterstream)

Added in: v16.5.0

- `stream` [<WritableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestream)

Creates a new `WritableStreamDefaultWriter` that is locked to the given
`WritableStream`.

##### `writableStreamDefaultWriter.abort([reason])`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#writablestreamdefaultwriterabortreason)

Added in: v16.5.0

- `reason` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)
- Returns: A promise fulfilled with `undefined`.

Abruptly terminates the `WritableStream`. All queued writes will be
canceled with their associated promises rejected.

##### `writableStreamDefaultWriter.close()`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#writablestreamdefaultwriterclose)

Added in: v16.5.0

- Returns: A promise fulfilled with `undefined`.

Closes the `WritableStream` when no additional writes are expected.

##### `writableStreamDefaultWriter.closed`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#writablestreamdefaultwriterclosed)

Added in: v16.5.0

- Type: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfilled with `undefined` when the associated
[<WritableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestream) is closed or rejected if the stream errors or the writer's
lock is released before the stream finishes closing.

##### `writableStreamDefaultWriter.desiredSize`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#writablestreamdefaultwriterdesiredsize)

Added in: v16.5.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The amount of data required to fill the [<WritableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestream)'s queue.

##### `writableStreamDefaultWriter.ready`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#writablestreamdefaultwriterready)

Added in: v16.5.0

- Type: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfilled with `undefined` when the writer is ready
to be used.

##### `writableStreamDefaultWriter.releaseLock()`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#writablestreamdefaultwriterreleaselock)

Added in: v16.5.0

Releases this writer's lock on the underlying [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream).

##### `writableStreamDefaultWriter.write([chunk])`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#writablestreamdefaultwriterwritechunk)

Added in: v16.5.0

- `chunk` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)
- Returns: A promise fulfilled with `undefined`.

Appends a new chunk of data to the [<WritableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestream)'s queue.

#### Class: `WritableStreamDefaultController`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#class-writablestreamdefaultcontroller)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | This class is now exposed on the global object. |
| v16.5.0 | Added in: v16.5.0 |

The `WritableStreamDefaultController` manages the [<WritableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestream)'s
internal state.

##### `writableStreamDefaultController.error([error])`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#writablestreamdefaultcontrollererrorerror)

Added in: v16.5.0

- `error` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)

Called by user-code to signal that an error has occurred while processing
the `WritableStream` data. When called, the [<WritableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestream) will be aborted,
with currently pending writes canceled.

##### `writableStreamDefaultController.signal`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#writablestreamdefaultcontrollersignal)

- Type: [<AbortSignal>](https://nodejs.org/dist/latest/docs/api/globals.html#class-abortsignal) An `AbortSignal` that can be used to cancel pending
write or close operations when a [<WritableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestream) is aborted.

#### Class: `TransformStream`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#class-transformstream)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | This class is now exposed on the global object. |
| v16.5.0 | Added in: v16.5.0 |

A `TransformStream` consists of a [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) and a [<WritableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestream) that
are connected such that the data written to the `WritableStream` is received,
and potentially transformed, before being pushed into the `ReadableStream`'s
queue.

```js
import {
  TransformStream,
} from 'node:stream/web';

const transform = new TransformStream({
  transform(chunk, controller) {
    controller.enqueue(chunk.toUpperCase());
  },
});

await Promise.all([\
  transform.writable.getWriter().write('A'),\
  transform.readable.getReader().read(),\
]); copy
```

##### `new TransformStream([transformer[, writableStrategy[, readableStrategy]]])`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#new-transformstreamtransformer-writablestrategy-readablestrategy)

Added in: v16.5.0

- `transformer` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `start` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) A user-defined function that is invoked immediately when
    the `TransformStream` is created.

    - `controller` [<TransformStreamDefaultController>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-transformstreamdefaultcontroller)
    - Returns: `undefined` or a promise fulfilled with `undefined`
  - `transform` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) A user-defined function that receives, and
    potentially modifies, a chunk of data written to `transformStream.writable`,
    before forwarding that on to `transformStream.readable`.

    - `chunk` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)
    - `controller` [<TransformStreamDefaultController>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-transformstreamdefaultcontroller)
    - Returns: A promise fulfilled with `undefined`.
  - `flush` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) A user-defined function that is called immediately before
    the writable side of the `TransformStream` is closed, signaling the end of
    the transformation process.

    - `controller` [<TransformStreamDefaultController>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-transformstreamdefaultcontroller)
    - Returns: A promise fulfilled with `undefined`.
  - `readableType` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) the `readableType` option is reserved for future use
    and _must_ be `undefined`.
  - `writableType` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) the `writableType` option is reserved for future use
    and _must_ be `undefined`.
- `writableStrategy` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `highWaterMark` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The maximum internal queue size before backpressure
    is applied.
  - `size` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) A user-defined function used to identify the size of each
    chunk of data.

    - `chunk` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)
    - Returns: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `readableStrategy` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `highWaterMark` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The maximum internal queue size before backpressure
    is applied.
  - `size` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) A user-defined function used to identify the size of each
    chunk of data.

    - `chunk` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)
    - Returns: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

##### `transformStream.readable`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#transformstreamreadable)

Added in: v16.5.0

- Type: [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream)

##### `transformStream.writable`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#transformstreamwritable)

Added in: v16.5.0

- Type: [<WritableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestream)

##### Transferring with postMessage()[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#transferring-with-postmessage_2)

A [<TransformStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-transformstream) instance can be transferred using a [<MessagePort>](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-messageport).

```js
const stream = new TransformStream();

const { port1, port2 } = new MessageChannel();

port1.onmessage = ({ data }) => {
  const { writable, readable } = data;
  // ...
};

port2.postMessage(stream, [stream]); copy
```

#### Class: `TransformStreamDefaultController`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#class-transformstreamdefaultcontroller)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | This class is now exposed on the global object. |
| v16.5.0 | Added in: v16.5.0 |

The `TransformStreamDefaultController` manages the internal state
of the `TransformStream`.

##### `transformStreamDefaultController.desiredSize`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#transformstreamdefaultcontrollerdesiredsize)

Added in: v16.5.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The amount of data required to fill the readable side's queue.

##### `transformStreamDefaultController.enqueue([chunk])`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#transformstreamdefaultcontrollerenqueuechunk)

Added in: v16.5.0

- `chunk` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)

Appends a chunk of data to the readable side's queue.

##### `transformStreamDefaultController.error([reason])`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#transformstreamdefaultcontrollererrorreason)

Added in: v16.5.0

- `reason` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)

Signals to both the readable and writable side that an error has occurred
while processing the transform data, causing both sides to be abruptly
closed.

##### `transformStreamDefaultController.terminate()`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#transformstreamdefaultcontrollerterminate)

Added in: v16.5.0

Closes the readable side of the transport and causes the writable side
to be abruptly closed with an error.

#### Class: `ByteLengthQueuingStrategy`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#class-bytelengthqueuingstrategy)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | This class is now exposed on the global object. |
| v16.5.0 | Added in: v16.5.0 |

##### `new ByteLengthQueuingStrategy(init)`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#new-bytelengthqueuingstrategyinit)

Added in: v16.5.0

- `init` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `highWaterMark` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

##### `byteLengthQueuingStrategy.highWaterMark`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#bytelengthqueuingstrategyhighwatermark)

Added in: v16.5.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

##### `byteLengthQueuingStrategy.size`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#bytelengthqueuingstrategysize)

Added in: v16.5.0

- Type: [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `chunk` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)
  - Returns: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

#### Class: `CountQueuingStrategy`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#class-countqueuingstrategy)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | This class is now exposed on the global object. |
| v16.5.0 | Added in: v16.5.0 |

##### `new CountQueuingStrategy(init)`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#new-countqueuingstrategyinit)

Added in: v16.5.0

- `init` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `highWaterMark` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

##### `countQueuingStrategy.highWaterMark`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#countqueuingstrategyhighwatermark)

Added in: v16.5.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

##### `countQueuingStrategy.size`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#countqueuingstrategysize)

Added in: v16.5.0

- Type: [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `chunk` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)
  - Returns: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

#### Class: `TextEncoderStream`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#class-textencoderstream)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | This class is now exposed on the global object. |
| v16.6.0 | Added in: v16.6.0 |

##### `new TextEncoderStream()`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#new-textencoderstream)

Added in: v16.6.0

Creates a new `TextEncoderStream` instance.

##### `textEncoderStream.encoding`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#textencoderstreamencoding)

Added in: v16.6.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

The encoding supported by the `TextEncoderStream` instance.

##### `textEncoderStream.readable`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#textencoderstreamreadable)

Added in: v16.6.0

- Type: [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream)

##### `textEncoderStream.writable`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#textencoderstreamwritable)

Added in: v16.6.0

- Type: [<WritableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestream)

#### Class: `TextDecoderStream`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#class-textdecoderstream)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | This class is now exposed on the global object. |
| v16.6.0 | Added in: v16.6.0 |

##### `new TextDecoderStream([encoding[, options]])`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#new-textdecoderstreamencoding-options)

Added in: v16.6.0

- `encoding` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Identifies the `encoding` that this `TextDecoder` instance
supports. **Default:**`'utf-8'`.
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `fatal` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)`true` if decoding failures are fatal.
  - `ignoreBOM` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) When `true`, the `TextDecoderStream` will include the
    byte order mark in the decoded result. When `false`, the byte order mark
    will be removed from the output. This option is only used when `encoding` is
    `'utf-8'`, `'utf-16be'`, or `'utf-16le'`. **Default:**`false`.

Creates a new `TextDecoderStream` instance.

##### `textDecoderStream.encoding`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#textdecoderstreamencoding)

Added in: v16.6.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

The encoding supported by the `TextDecoderStream` instance.

##### `textDecoderStream.fatal`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#textdecoderstreamfatal)

Added in: v16.6.0

- Type: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)

The value will be `true` if decoding errors result in a `TypeError` being
thrown.

##### `textDecoderStream.ignoreBOM`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#textdecoderstreamignorebom)

Added in: v16.6.0

- Type: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)

The value will be `true` if the decoding result will include the byte order
mark.

##### `textDecoderStream.readable`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#textdecoderstreamreadable)

Added in: v16.6.0

- Type: [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream)

##### `textDecoderStream.writable`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#textdecoderstreamwritable)

Added in: v16.6.0

- Type: [<WritableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestream)

#### Class: `CompressionStream`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#class-compressionstream)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | This class is now exposed on the global object. |
| v17.0.0 | Added in: v17.0.0 |

##### `new CompressionStream(format)`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#new-compressionstreamformat)

History

| Version | Changes |
| --- | --- |
| v24.7.0, v22.20.0 | format now accepts `brotli` value. |
| v21.2.0, v20.12.0 | format now accepts `deflate-raw` value. |
| v17.0.0 | Added in: v17.0.0 |

- `format` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) One of `'deflate'`, `'deflate-raw'`, `'gzip'`, or `'brotli'`.

##### `compressionStream.readable`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#compressionstreamreadable)

Added in: v17.0.0

- Type: [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream)

##### `compressionStream.writable`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#compressionstreamwritable)

Added in: v17.0.0

- Type: [<WritableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestream)

#### Class: `DecompressionStream`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#class-decompressionstream)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | This class is now exposed on the global object. |
| v17.0.0 | Added in: v17.0.0 |

##### `new DecompressionStream(format)`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#new-decompressionstreamformat)

History

| Version | Changes |
| --- | --- |
| v24.7.0, v22.20.0 | format now accepts `brotli` value. |
| v21.2.0, v20.12.0 | format now accepts `deflate-raw` value. |
| v17.0.0 | Added in: v17.0.0 |

- `format` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) One of `'deflate'`, `'deflate-raw'`, `'gzip'`, or `'brotli'`.

##### `decompressionStream.readable`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#decompressionstreamreadable)

Added in: v17.0.0

- Type: [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream)

##### `decompressionStream.writable`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#decompressionstreamwritable)

Added in: v17.0.0

- Type: [<WritableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-writablestream)

#### Utility Consumers[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#utility-consumers)

Added in: v16.7.0

The utility consumer functions provide common options for consuming
streams.

They are accessed using:

```js
import {
  arrayBuffer,
  blob,
  buffer,
  json,
  text,
} from 'node:stream/consumers';const {
  arrayBuffer,
  blob,
  buffer,
  json,
  text,
} = require('node:stream/consumers');copy
```

##### `streamConsumers.arrayBuffer(stream)`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#streamconsumersarraybufferstream)

Added in: v16.7.0

- `stream` [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) \| [<stream.Readable>](https://nodejs.org/dist/latest/docs/api/stream.html#class-streamreadable) \| [<AsyncIterator>](https://tc39.github.io/ecma262/#sec-asynciterator-interface)
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with an `ArrayBuffer` containing the full
contents of the stream.

```js
import { arrayBuffer } from 'node:stream/consumers';
import { Readable } from 'node:stream';
import { TextEncoder } from 'node:util';

const encoder = new TextEncoder();
const dataArray = encoder.encode('hello world from consumers!');

const readable = Readable.from(dataArray);
const data = await arrayBuffer(readable);
console.log(`from readable: ${data.byteLength}`);
// Prints: from readable: 76const { arrayBuffer } = require('node:stream/consumers');
const { Readable } = require('node:stream');
const { TextEncoder } = require('node:util');

const encoder = new TextEncoder();
const dataArray = encoder.encode('hello world from consumers!');
const readable = Readable.from(dataArray);
arrayBuffer(readable).then((data) => {
  console.log(`from readable: ${data.byteLength}`);
  // Prints: from readable: 76
});copy
```

##### `streamConsumers.blob(stream)`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#streamconsumersblobstream)

Added in: v16.7.0

- `stream` [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) \| [<stream.Readable>](https://nodejs.org/dist/latest/docs/api/stream.html#class-streamreadable) \| [<AsyncIterator>](https://tc39.github.io/ecma262/#sec-asynciterator-interface)
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with a [<Blob>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-blob) containing the full contents
of the stream.

```js
import { blob } from 'node:stream/consumers';

const dataBlob = new Blob(['hello world from consumers!']);

const readable = dataBlob.stream();
const data = await blob(readable);
console.log(`from readable: ${data.size}`);
// Prints: from readable: 27const { blob } = require('node:stream/consumers');

const dataBlob = new Blob(['hello world from consumers!']);

const readable = dataBlob.stream();
blob(readable).then((data) => {
  console.log(`from readable: ${data.size}`);
  // Prints: from readable: 27
});copy
```

##### `streamConsumers.buffer(stream)`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#streamconsumersbufferstream)

Added in: v16.7.0

- `stream` [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) \| [<stream.Readable>](https://nodejs.org/dist/latest/docs/api/stream.html#class-streamreadable) \| [<AsyncIterator>](https://tc39.github.io/ecma262/#sec-asynciterator-interface)
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with a [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) containing the full
contents of the stream.

```js
import { buffer } from 'node:stream/consumers';
import { Readable } from 'node:stream';
import { Buffer } from 'node:buffer';

const dataBuffer = Buffer.from('hello world from consumers!');

const readable = Readable.from(dataBuffer);
const data = await buffer(readable);
console.log(`from readable: ${data.length}`);
// Prints: from readable: 27const { buffer } = require('node:stream/consumers');
const { Readable } = require('node:stream');
const { Buffer } = require('node:buffer');

const dataBuffer = Buffer.from('hello world from consumers!');

const readable = Readable.from(dataBuffer);
buffer(readable).then((data) => {
  console.log(`from readable: ${data.length}`);
  // Prints: from readable: 27
});copy
```

##### `streamConsumers.json(stream)`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#streamconsumersjsonstream)

Added in: v16.7.0

- `stream` [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) \| [<stream.Readable>](https://nodejs.org/dist/latest/docs/api/stream.html#class-streamreadable) \| [<AsyncIterator>](https://tc39.github.io/ecma262/#sec-asynciterator-interface)
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with the contents of the stream parsed as a
UTF-8 encoded string that is then passed through `JSON.parse()`.

```js
import { json } from 'node:stream/consumers';
import { Readable } from 'node:stream';

const items = Array.from(
  {
    length: 100,
  },
  () => ({
    message: 'hello world from consumers!',
  }),
);

const readable = Readable.from(JSON.stringify(items));
const data = await json(readable);
console.log(`from readable: ${data.length}`);
// Prints: from readable: 100const { json } = require('node:stream/consumers');
const { Readable } = require('node:stream');

const items = Array.from(
  {
    length: 100,
  },
  () => ({
    message: 'hello world from consumers!',
  }),
);

const readable = Readable.from(JSON.stringify(items));
json(readable).then((data) => {
  console.log(`from readable: ${data.length}`);
  // Prints: from readable: 100
});copy
```

##### `streamConsumers.text(stream)`[\#](https://nodejs.org/dist/latest/docs/api/webstreams.html\#streamconsumerstextstream)

Added in: v16.7.0

- `stream` [<ReadableStream>](https://nodejs.org/dist/latest/docs/api/webstreams.html#class-readablestream) \| [<stream.Readable>](https://nodejs.org/dist/latest/docs/api/stream.html#class-streamreadable) \| [<AsyncIterator>](https://tc39.github.io/ecma262/#sec-asynciterator-interface)
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with the contents of the stream parsed as a
UTF-8 encoded string.

```js
import { text } from 'node:stream/consumers';
import { Readable } from 'node:stream';

const readable = Readable.from('Hello world from consumers!');
const data = await text(readable);
console.log(`from readable: ${data.length}`);
// Prints: from readable: 27const { text } = require('node:stream/consumers');
const { Readable } = require('node:stream');

const readable = Readable.from('Hello world from consumers!');
text(readable).then((data) => {
  console.log(`from readable: ${data.length}`);
  // Prints: from readable: 27
});copy
```