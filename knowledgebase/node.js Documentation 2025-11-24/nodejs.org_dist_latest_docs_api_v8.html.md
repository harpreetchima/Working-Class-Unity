---
url: "https://nodejs.org/dist/latest/docs/api/v8.html"
title: "V8 | Node.js v25.2.1 Documentation"
---

[Skip to content](https://nodejs.org/dist/latest/docs/api/v8.html#apicontent)

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
- [Table of contents](https://nodejs.org/dist/latest/docs/api/v8.html#toc-picker)




- [V8](https://nodejs.org/dist/latest/docs/api/v8.html#v8)
  - [`v8.cachedDataVersionTag()`](https://nodejs.org/dist/latest/docs/api/v8.html#v8cacheddataversiontag)
  - [`v8.getHeapCodeStatistics()`](https://nodejs.org/dist/latest/docs/api/v8.html#v8getheapcodestatistics)
  - [`v8.getHeapSnapshot([options])`](https://nodejs.org/dist/latest/docs/api/v8.html#v8getheapsnapshotoptions)
  - [`v8.getHeapSpaceStatistics()`](https://nodejs.org/dist/latest/docs/api/v8.html#v8getheapspacestatistics)
  - [`v8.getHeapStatistics()`](https://nodejs.org/dist/latest/docs/api/v8.html#v8getheapstatistics)
  - [`v8.getCppHeapStatistics([detailLevel])`](https://nodejs.org/dist/latest/docs/api/v8.html#v8getcppheapstatisticsdetaillevel)
  - [`v8.queryObjects(ctor[, options])`](https://nodejs.org/dist/latest/docs/api/v8.html#v8queryobjectsctor-options)
  - [`v8.setFlagsFromString(flags)`](https://nodejs.org/dist/latest/docs/api/v8.html#v8setflagsfromstringflags)
  - [`v8.stopCoverage()`](https://nodejs.org/dist/latest/docs/api/v8.html#v8stopcoverage)
  - [`v8.takeCoverage()`](https://nodejs.org/dist/latest/docs/api/v8.html#v8takecoverage)
  - [`v8.writeHeapSnapshot([filename[,options]])`](https://nodejs.org/dist/latest/docs/api/v8.html#v8writeheapsnapshotfilenameoptions)
  - [`v8.setHeapSnapshotNearHeapLimit(limit)`](https://nodejs.org/dist/latest/docs/api/v8.html#v8setheapsnapshotnearheaplimitlimit)
  - [Serialization API](https://nodejs.org/dist/latest/docs/api/v8.html#serialization-api)
    - [`v8.serialize(value)`](https://nodejs.org/dist/latest/docs/api/v8.html#v8serializevalue)
    - [`v8.deserialize(buffer)`](https://nodejs.org/dist/latest/docs/api/v8.html#v8deserializebuffer)
    - [Class: `v8.Serializer`](https://nodejs.org/dist/latest/docs/api/v8.html#class-v8serializer)
      - [`new Serializer()`](https://nodejs.org/dist/latest/docs/api/v8.html#new-serializer)
      - [`serializer.writeHeader()`](https://nodejs.org/dist/latest/docs/api/v8.html#serializerwriteheader)
      - [`serializer.writeValue(value)`](https://nodejs.org/dist/latest/docs/api/v8.html#serializerwritevaluevalue)
      - [`serializer.releaseBuffer()`](https://nodejs.org/dist/latest/docs/api/v8.html#serializerreleasebuffer)
      - [`serializer.transferArrayBuffer(id, arrayBuffer)`](https://nodejs.org/dist/latest/docs/api/v8.html#serializertransferarraybufferid-arraybuffer)
      - [`serializer.writeUint32(value)`](https://nodejs.org/dist/latest/docs/api/v8.html#serializerwriteuint32value)
      - [`serializer.writeUint64(hi, lo)`](https://nodejs.org/dist/latest/docs/api/v8.html#serializerwriteuint64hi-lo)
      - [`serializer.writeDouble(value)`](https://nodejs.org/dist/latest/docs/api/v8.html#serializerwritedoublevalue)
      - [`serializer.writeRawBytes(buffer)`](https://nodejs.org/dist/latest/docs/api/v8.html#serializerwriterawbytesbuffer)
      - [`serializer._writeHostObject(object)`](https://nodejs.org/dist/latest/docs/api/v8.html#serializer_writehostobjectobject)
      - [`serializer._getDataCloneError(message)`](https://nodejs.org/dist/latest/docs/api/v8.html#serializer_getdatacloneerrormessage)
      - [`serializer._getSharedArrayBufferId(sharedArrayBuffer)`](https://nodejs.org/dist/latest/docs/api/v8.html#serializer_getsharedarraybufferidsharedarraybuffer)
      - [`serializer._setTreatArrayBufferViewsAsHostObjects(flag)`](https://nodejs.org/dist/latest/docs/api/v8.html#serializer_settreatarraybufferviewsashostobjectsflag)
    - [Class: `v8.Deserializer`](https://nodejs.org/dist/latest/docs/api/v8.html#class-v8deserializer)
      - [`new Deserializer(buffer)`](https://nodejs.org/dist/latest/docs/api/v8.html#new-deserializerbuffer)
      - [`deserializer.readHeader()`](https://nodejs.org/dist/latest/docs/api/v8.html#deserializerreadheader)
      - [`deserializer.readValue()`](https://nodejs.org/dist/latest/docs/api/v8.html#deserializerreadvalue)
      - [`deserializer.transferArrayBuffer(id, arrayBuffer)`](https://nodejs.org/dist/latest/docs/api/v8.html#deserializertransferarraybufferid-arraybuffer)
      - [`deserializer.getWireFormatVersion()`](https://nodejs.org/dist/latest/docs/api/v8.html#deserializergetwireformatversion)
      - [`deserializer.readUint32()`](https://nodejs.org/dist/latest/docs/api/v8.html#deserializerreaduint32)
      - [`deserializer.readUint64()`](https://nodejs.org/dist/latest/docs/api/v8.html#deserializerreaduint64)
      - [`deserializer.readDouble()`](https://nodejs.org/dist/latest/docs/api/v8.html#deserializerreaddouble)
      - [`deserializer.readRawBytes(length)`](https://nodejs.org/dist/latest/docs/api/v8.html#deserializerreadrawbyteslength)
      - [`deserializer._readHostObject()`](https://nodejs.org/dist/latest/docs/api/v8.html#deserializer_readhostobject)
    - [Class: `v8.DefaultSerializer`](https://nodejs.org/dist/latest/docs/api/v8.html#class-v8defaultserializer)
    - [Class: `v8.DefaultDeserializer`](https://nodejs.org/dist/latest/docs/api/v8.html#class-v8defaultdeserializer)
  - [Promise hooks](https://nodejs.org/dist/latest/docs/api/v8.html#promise-hooks)
    - [`promiseHooks.onInit(init)`](https://nodejs.org/dist/latest/docs/api/v8.html#promisehooksoninitinit)
    - [`promiseHooks.onSettled(settled)`](https://nodejs.org/dist/latest/docs/api/v8.html#promisehooksonsettledsettled)
    - [`promiseHooks.onBefore(before)`](https://nodejs.org/dist/latest/docs/api/v8.html#promisehooksonbeforebefore)
    - [`promiseHooks.onAfter(after)`](https://nodejs.org/dist/latest/docs/api/v8.html#promisehooksonafterafter)
    - [`promiseHooks.createHook(callbacks)`](https://nodejs.org/dist/latest/docs/api/v8.html#promisehookscreatehookcallbacks)
    - [Hook callbacks](https://nodejs.org/dist/latest/docs/api/v8.html#hook-callbacks)
      - [`init(promise, parent)`](https://nodejs.org/dist/latest/docs/api/v8.html#initpromise-parent)
      - [`before(promise)`](https://nodejs.org/dist/latest/docs/api/v8.html#beforepromise)
      - [`after(promise)`](https://nodejs.org/dist/latest/docs/api/v8.html#afterpromise)
      - [`settled(promise)`](https://nodejs.org/dist/latest/docs/api/v8.html#settledpromise)
  - [Startup Snapshot API](https://nodejs.org/dist/latest/docs/api/v8.html#startup-snapshot-api)
    - [`v8.startupSnapshot.addSerializeCallback(callback[, data])`](https://nodejs.org/dist/latest/docs/api/v8.html#v8startupsnapshotaddserializecallbackcallback-data)
    - [`v8.startupSnapshot.addDeserializeCallback(callback[, data])`](https://nodejs.org/dist/latest/docs/api/v8.html#v8startupsnapshotadddeserializecallbackcallback-data)
    - [`v8.startupSnapshot.setDeserializeMainFunction(callback[, data])`](https://nodejs.org/dist/latest/docs/api/v8.html#v8startupsnapshotsetdeserializemainfunctioncallback-data)
    - [`v8.startupSnapshot.isBuildingSnapshot()`](https://nodejs.org/dist/latest/docs/api/v8.html#v8startupsnapshotisbuildingsnapshot)
  - [Class: `v8.GCProfiler`](https://nodejs.org/dist/latest/docs/api/v8.html#class-v8gcprofiler)
    - [`new v8.GCProfiler()`](https://nodejs.org/dist/latest/docs/api/v8.html#new-v8gcprofiler)
    - [`profiler.start()`](https://nodejs.org/dist/latest/docs/api/v8.html#profilerstart)
    - [`profiler.stop()`](https://nodejs.org/dist/latest/docs/api/v8.html#profilerstop)
  - [Class: `SyncCPUProfileHandle`](https://nodejs.org/dist/latest/docs/api/v8.html#class-synccpuprofilehandle)
    - [`syncCpuProfileHandle.stop()`](https://nodejs.org/dist/latest/docs/api/v8.html#synccpuprofilehandlestop)
    - [`syncCpuProfileHandle[Symbol.dispose]()`](https://nodejs.org/dist/latest/docs/api/v8.html#synccpuprofilehandlesymboldispose)
  - [Class: `CPUProfileHandle`](https://nodejs.org/dist/latest/docs/api/v8.html#class-cpuprofilehandle)
    - [`cpuProfileHandle.stop()`](https://nodejs.org/dist/latest/docs/api/v8.html#cpuprofilehandlestop)
    - [`cpuProfileHandle[Symbol.asyncDispose]()`](https://nodejs.org/dist/latest/docs/api/v8.html#cpuprofilehandlesymbolasyncdispose)
  - [Class: `HeapProfileHandle`](https://nodejs.org/dist/latest/docs/api/v8.html#class-heapprofilehandle)
    - [`heapProfileHandle.stop()`](https://nodejs.org/dist/latest/docs/api/v8.html#heapprofilehandlestop)
    - [`heapProfileHandle[Symbol.asyncDispose]()`](https://nodejs.org/dist/latest/docs/api/v8.html#heapprofilehandlesymbolasyncdispose)
  - [`v8.isStringOneByteRepresentation(content)`](https://nodejs.org/dist/latest/docs/api/v8.html#v8isstringonebyterepresentationcontent)
  - [`v8.startCpuProfile()`](https://nodejs.org/dist/latest/docs/api/v8.html#v8startcpuprofile)

- [Index](https://nodejs.org/dist/latest/docs/api/v8.html#gtoc-picker)


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

- [Other versions](https://nodejs.org/dist/latest/docs/api/v8.html#alt-docs)


01. [25.x](https://nodejs.org/docs/latest-v25.x/api/v8.html)
02. [24.x **LTS**](https://nodejs.org/docs/latest-v24.x/api/v8.html)
03. [23.x](https://nodejs.org/docs/latest-v23.x/api/v8.html)
04. [22.x **LTS**](https://nodejs.org/docs/latest-v22.x/api/v8.html)
05. [21.x](https://nodejs.org/docs/latest-v21.x/api/v8.html)
06. [20.x **LTS**](https://nodejs.org/docs/latest-v20.x/api/v8.html)
07. [19.x](https://nodejs.org/docs/latest-v19.x/api/v8.html)
08. [18.x](https://nodejs.org/docs/latest-v18.x/api/v8.html)
09. [17.x](https://nodejs.org/docs/latest-v17.x/api/v8.html)
10. [16.x](https://nodejs.org/docs/latest-v16.x/api/v8.html)
11. [15.x](https://nodejs.org/docs/latest-v15.x/api/v8.html)
12. [14.x](https://nodejs.org/docs/latest-v14.x/api/v8.html)
13. [13.x](https://nodejs.org/docs/latest-v13.x/api/v8.html)
14. [12.x](https://nodejs.org/docs/latest-v12.x/api/v8.html)
15. [11.x](https://nodejs.org/docs/latest-v11.x/api/v8.html)
16. [10.x](https://nodejs.org/docs/latest-v10.x/api/v8.html)
17. [9.x](https://nodejs.org/docs/latest-v9.x/api/v8.html)
18. [8.x](https://nodejs.org/docs/latest-v8.x/api/v8.html)
19. [7.x](https://nodejs.org/docs/latest-v7.x/api/v8.html)
20. [6.x](https://nodejs.org/docs/latest-v6.x/api/v8.html)
21. [5.x](https://nodejs.org/docs/latest-v5.x/api/v8.html)
22. [4.x](https://nodejs.org/docs/latest-v4.x/api/v8.html)

- [Options](https://nodejs.org/dist/latest/docs/api/v8.html#options-picker)


- [View on single page](https://nodejs.org/dist/latest/docs/api/all.html)
- [View as JSON](https://nodejs.org/dist/latest/docs/api/v8.json)
- [Edit on GitHub](https://github.com/nodejs/node/edit/main/doc/api/v8.md)

* * *

Table of contents

- [V8](https://nodejs.org/dist/latest/docs/api/v8.html#v8)
  - [`v8.cachedDataVersionTag()`](https://nodejs.org/dist/latest/docs/api/v8.html#v8cacheddataversiontag)
  - [`v8.getHeapCodeStatistics()`](https://nodejs.org/dist/latest/docs/api/v8.html#v8getheapcodestatistics)
  - [`v8.getHeapSnapshot([options])`](https://nodejs.org/dist/latest/docs/api/v8.html#v8getheapsnapshotoptions)
  - [`v8.getHeapSpaceStatistics()`](https://nodejs.org/dist/latest/docs/api/v8.html#v8getheapspacestatistics)
  - [`v8.getHeapStatistics()`](https://nodejs.org/dist/latest/docs/api/v8.html#v8getheapstatistics)
  - [`v8.getCppHeapStatistics([detailLevel])`](https://nodejs.org/dist/latest/docs/api/v8.html#v8getcppheapstatisticsdetaillevel)
  - [`v8.queryObjects(ctor[, options])`](https://nodejs.org/dist/latest/docs/api/v8.html#v8queryobjectsctor-options)
  - [`v8.setFlagsFromString(flags)`](https://nodejs.org/dist/latest/docs/api/v8.html#v8setflagsfromstringflags)
  - [`v8.stopCoverage()`](https://nodejs.org/dist/latest/docs/api/v8.html#v8stopcoverage)
  - [`v8.takeCoverage()`](https://nodejs.org/dist/latest/docs/api/v8.html#v8takecoverage)
  - [`v8.writeHeapSnapshot([filename[,options]])`](https://nodejs.org/dist/latest/docs/api/v8.html#v8writeheapsnapshotfilenameoptions)
  - [`v8.setHeapSnapshotNearHeapLimit(limit)`](https://nodejs.org/dist/latest/docs/api/v8.html#v8setheapsnapshotnearheaplimitlimit)
  - [Serialization API](https://nodejs.org/dist/latest/docs/api/v8.html#serialization-api)
    - [`v8.serialize(value)`](https://nodejs.org/dist/latest/docs/api/v8.html#v8serializevalue)
    - [`v8.deserialize(buffer)`](https://nodejs.org/dist/latest/docs/api/v8.html#v8deserializebuffer)
    - [Class: `v8.Serializer`](https://nodejs.org/dist/latest/docs/api/v8.html#class-v8serializer)
      - [`new Serializer()`](https://nodejs.org/dist/latest/docs/api/v8.html#new-serializer)
      - [`serializer.writeHeader()`](https://nodejs.org/dist/latest/docs/api/v8.html#serializerwriteheader)
      - [`serializer.writeValue(value)`](https://nodejs.org/dist/latest/docs/api/v8.html#serializerwritevaluevalue)
      - [`serializer.releaseBuffer()`](https://nodejs.org/dist/latest/docs/api/v8.html#serializerreleasebuffer)
      - [`serializer.transferArrayBuffer(id, arrayBuffer)`](https://nodejs.org/dist/latest/docs/api/v8.html#serializertransferarraybufferid-arraybuffer)
      - [`serializer.writeUint32(value)`](https://nodejs.org/dist/latest/docs/api/v8.html#serializerwriteuint32value)
      - [`serializer.writeUint64(hi, lo)`](https://nodejs.org/dist/latest/docs/api/v8.html#serializerwriteuint64hi-lo)
      - [`serializer.writeDouble(value)`](https://nodejs.org/dist/latest/docs/api/v8.html#serializerwritedoublevalue)
      - [`serializer.writeRawBytes(buffer)`](https://nodejs.org/dist/latest/docs/api/v8.html#serializerwriterawbytesbuffer)
      - [`serializer._writeHostObject(object)`](https://nodejs.org/dist/latest/docs/api/v8.html#serializer_writehostobjectobject)
      - [`serializer._getDataCloneError(message)`](https://nodejs.org/dist/latest/docs/api/v8.html#serializer_getdatacloneerrormessage)
      - [`serializer._getSharedArrayBufferId(sharedArrayBuffer)`](https://nodejs.org/dist/latest/docs/api/v8.html#serializer_getsharedarraybufferidsharedarraybuffer)
      - [`serializer._setTreatArrayBufferViewsAsHostObjects(flag)`](https://nodejs.org/dist/latest/docs/api/v8.html#serializer_settreatarraybufferviewsashostobjectsflag)
    - [Class: `v8.Deserializer`](https://nodejs.org/dist/latest/docs/api/v8.html#class-v8deserializer)
      - [`new Deserializer(buffer)`](https://nodejs.org/dist/latest/docs/api/v8.html#new-deserializerbuffer)
      - [`deserializer.readHeader()`](https://nodejs.org/dist/latest/docs/api/v8.html#deserializerreadheader)
      - [`deserializer.readValue()`](https://nodejs.org/dist/latest/docs/api/v8.html#deserializerreadvalue)
      - [`deserializer.transferArrayBuffer(id, arrayBuffer)`](https://nodejs.org/dist/latest/docs/api/v8.html#deserializertransferarraybufferid-arraybuffer)
      - [`deserializer.getWireFormatVersion()`](https://nodejs.org/dist/latest/docs/api/v8.html#deserializergetwireformatversion)
      - [`deserializer.readUint32()`](https://nodejs.org/dist/latest/docs/api/v8.html#deserializerreaduint32)
      - [`deserializer.readUint64()`](https://nodejs.org/dist/latest/docs/api/v8.html#deserializerreaduint64)
      - [`deserializer.readDouble()`](https://nodejs.org/dist/latest/docs/api/v8.html#deserializerreaddouble)
      - [`deserializer.readRawBytes(length)`](https://nodejs.org/dist/latest/docs/api/v8.html#deserializerreadrawbyteslength)
      - [`deserializer._readHostObject()`](https://nodejs.org/dist/latest/docs/api/v8.html#deserializer_readhostobject)
    - [Class: `v8.DefaultSerializer`](https://nodejs.org/dist/latest/docs/api/v8.html#class-v8defaultserializer)
    - [Class: `v8.DefaultDeserializer`](https://nodejs.org/dist/latest/docs/api/v8.html#class-v8defaultdeserializer)
  - [Promise hooks](https://nodejs.org/dist/latest/docs/api/v8.html#promise-hooks)
    - [`promiseHooks.onInit(init)`](https://nodejs.org/dist/latest/docs/api/v8.html#promisehooksoninitinit)
    - [`promiseHooks.onSettled(settled)`](https://nodejs.org/dist/latest/docs/api/v8.html#promisehooksonsettledsettled)
    - [`promiseHooks.onBefore(before)`](https://nodejs.org/dist/latest/docs/api/v8.html#promisehooksonbeforebefore)
    - [`promiseHooks.onAfter(after)`](https://nodejs.org/dist/latest/docs/api/v8.html#promisehooksonafterafter)
    - [`promiseHooks.createHook(callbacks)`](https://nodejs.org/dist/latest/docs/api/v8.html#promisehookscreatehookcallbacks)
    - [Hook callbacks](https://nodejs.org/dist/latest/docs/api/v8.html#hook-callbacks)
      - [`init(promise, parent)`](https://nodejs.org/dist/latest/docs/api/v8.html#initpromise-parent)
      - [`before(promise)`](https://nodejs.org/dist/latest/docs/api/v8.html#beforepromise)
      - [`after(promise)`](https://nodejs.org/dist/latest/docs/api/v8.html#afterpromise)
      - [`settled(promise)`](https://nodejs.org/dist/latest/docs/api/v8.html#settledpromise)
  - [Startup Snapshot API](https://nodejs.org/dist/latest/docs/api/v8.html#startup-snapshot-api)
    - [`v8.startupSnapshot.addSerializeCallback(callback[, data])`](https://nodejs.org/dist/latest/docs/api/v8.html#v8startupsnapshotaddserializecallbackcallback-data)
    - [`v8.startupSnapshot.addDeserializeCallback(callback[, data])`](https://nodejs.org/dist/latest/docs/api/v8.html#v8startupsnapshotadddeserializecallbackcallback-data)
    - [`v8.startupSnapshot.setDeserializeMainFunction(callback[, data])`](https://nodejs.org/dist/latest/docs/api/v8.html#v8startupsnapshotsetdeserializemainfunctioncallback-data)
    - [`v8.startupSnapshot.isBuildingSnapshot()`](https://nodejs.org/dist/latest/docs/api/v8.html#v8startupsnapshotisbuildingsnapshot)
  - [Class: `v8.GCProfiler`](https://nodejs.org/dist/latest/docs/api/v8.html#class-v8gcprofiler)
    - [`new v8.GCProfiler()`](https://nodejs.org/dist/latest/docs/api/v8.html#new-v8gcprofiler)
    - [`profiler.start()`](https://nodejs.org/dist/latest/docs/api/v8.html#profilerstart)
    - [`profiler.stop()`](https://nodejs.org/dist/latest/docs/api/v8.html#profilerstop)
  - [Class: `SyncCPUProfileHandle`](https://nodejs.org/dist/latest/docs/api/v8.html#class-synccpuprofilehandle)
    - [`syncCpuProfileHandle.stop()`](https://nodejs.org/dist/latest/docs/api/v8.html#synccpuprofilehandlestop)
    - [`syncCpuProfileHandle[Symbol.dispose]()`](https://nodejs.org/dist/latest/docs/api/v8.html#synccpuprofilehandlesymboldispose)
  - [Class: `CPUProfileHandle`](https://nodejs.org/dist/latest/docs/api/v8.html#class-cpuprofilehandle)
    - [`cpuProfileHandle.stop()`](https://nodejs.org/dist/latest/docs/api/v8.html#cpuprofilehandlestop)
    - [`cpuProfileHandle[Symbol.asyncDispose]()`](https://nodejs.org/dist/latest/docs/api/v8.html#cpuprofilehandlesymbolasyncdispose)
  - [Class: `HeapProfileHandle`](https://nodejs.org/dist/latest/docs/api/v8.html#class-heapprofilehandle)
    - [`heapProfileHandle.stop()`](https://nodejs.org/dist/latest/docs/api/v8.html#heapprofilehandlestop)
    - [`heapProfileHandle[Symbol.asyncDispose]()`](https://nodejs.org/dist/latest/docs/api/v8.html#heapprofilehandlesymbolasyncdispose)
  - [`v8.isStringOneByteRepresentation(content)`](https://nodejs.org/dist/latest/docs/api/v8.html#v8isstringonebyterepresentationcontent)
  - [`v8.startCpuProfile()`](https://nodejs.org/dist/latest/docs/api/v8.html#v8startcpuprofile)

## V8[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#v8)

**Source Code:** [lib/v8.js](https://github.com/nodejs/node/blob/v25.2.1/lib/v8.js)

The `node:v8` module exposes APIs that are specific to the version of [V8](https://developers.google.com/v8/)
built into the Node.js binary. It can be accessed using:

```js
const v8 = require('node:v8'); copy
```

### `v8.cachedDataVersionTag()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#v8cacheddataversiontag)

Added in: v8.0.0

- Returns: [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Returns an integer representing a version tag derived from the V8 version,
command-line flags, and detected CPU features. This is useful for determining
whether a [`vm.Script`](https://nodejs.org/dist/latest/docs/api/vm.html#new-vmscriptcode-options)`cachedData` buffer is compatible with this instance
of V8.

```js
console.log(v8.cachedDataVersionTag()); // 3947234607
// The value returned by v8.cachedDataVersionTag() is derived from the V8
// version, command-line flags, and detected CPU features. Test that the value
// does indeed update when flags are toggled.
v8.setFlagsFromString('--allow_natives_syntax');
console.log(v8.cachedDataVersionTag()); // 183726201 copy
```

### `v8.getHeapCodeStatistics()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#v8getheapcodestatistics)

Added in: v12.8.0

- Returns: [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Get statistics about code and its metadata in the heap, see V8
[`GetHeapCodeAndMetadataStatistics`](https://v8docs.nodesource.com/node-13.2/d5/dda/classv8_1_1_isolate.html#a6079122af17612ef54ef3348ce170866) API. Returns an object with the
following properties:

- `code_and_metadata_size` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `bytecode_and_metadata_size` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `external_script_source_size` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `cpu_profiler_metadata_size` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

```js
{
  code_and_metadata_size: 212208,
  bytecode_and_metadata_size: 161368,
  external_script_source_size: 1410794,
  cpu_profiler_metadata_size: 0,
} copy
```

### `v8.getHeapSnapshot([options])`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#v8getheapsnapshotoptions)

History

| Version | Changes |
| --- | --- |
| v19.1.0 | Support options to configure the heap snapshot. |
| v11.13.0 | Added in: v11.13.0 |

- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `exposeInternals` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) If true, expose internals in the heap snapshot.
    **Default:**`false`.
  - `exposeNumericValues` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) If true, expose numeric values in
    artificial fields. **Default:**`false`.
- Returns: [<stream.Readable>](https://nodejs.org/dist/latest/docs/api/stream.html#class-streamreadable) A Readable containing the V8 heap snapshot.


Generates a snapshot of the current V8 heap and returns a Readable
Stream that may be used to read the JSON serialized representation.
This JSON stream format is intended to be used with tools such as
Chrome DevTools. The JSON schema is undocumented and specific to the
V8 engine. Therefore, the schema may change from one version of V8 to the next.

Creating a heap snapshot requires memory about twice the size of the heap at
the time the snapshot is created. This results in the risk of OOM killers
terminating the process.

Generating a snapshot is a synchronous operation which blocks the event loop
for a duration depending on the heap size.

```js
// Print heap snapshot to the console
const v8 = require('node:v8');
const stream = v8.getHeapSnapshot();
stream.pipe(process.stdout); copy
```

### `v8.getHeapSpaceStatistics()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#v8getheapspacestatistics)

History

| Version | Changes |
| --- | --- |
| v7.5.0 | Support values exceeding the 32-bit unsigned integer range. |
| v6.0.0 | Added in: v6.0.0 |

- Returns: [<Object\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Returns statistics about the V8 heap spaces, i.e. the segments which make up
the V8 heap. Neither the ordering of heap spaces, nor the availability of a
heap space can be guaranteed as the statistics are provided via the V8
[`GetHeapSpaceStatistics`](https://v8docs.nodesource.com/node-13.2/d5/dda/classv8_1_1_isolate.html#ac673576f24fdc7a33378f8f57e1d13a4) function and may change from one V8 version to the
next.

The value returned is an array of objects containing the following properties:

- `space_name` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `space_size` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `space_used_size` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `space_available_size` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `physical_space_size` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

```json
[\
  {\
    "space_name": "new_space",\
    "space_size": 2063872,\
    "space_used_size": 951112,\
    "space_available_size": 80824,\
    "physical_space_size": 2063872\
  },\
  {\
    "space_name": "old_space",\
    "space_size": 3090560,\
    "space_used_size": 2493792,\
    "space_available_size": 0,\
    "physical_space_size": 3090560\
  },\
  {\
    "space_name": "code_space",\
    "space_size": 1260160,\
    "space_used_size": 644256,\
    "space_available_size": 960,\
    "physical_space_size": 1260160\
  },\
  {\
    "space_name": "map_space",\
    "space_size": 1094160,\
    "space_used_size": 201608,\
    "space_available_size": 0,\
    "physical_space_size": 1094160\
  },\
  {\
    "space_name": "large_object_space",\
    "space_size": 0,\
    "space_used_size": 0,\
    "space_available_size": 1490980608,\
    "physical_space_size": 0\
  }\
] copy
```

### `v8.getHeapStatistics()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#v8getheapstatistics)

History

| Version | Changes |
| --- | --- |
| v7.5.0 | Support values exceeding the 32-bit unsigned integer range. |
| v7.2.0 | Added `malloced_memory`, `peak_malloced_memory`, and `does_zap_garbage`. |
| v1.0.0 | Added in: v1.0.0 |

- Returns: [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Returns an object with the following properties:

- `total_heap_size` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `total_heap_size_executable` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `total_physical_size` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `total_available_size` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `used_heap_size` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `heap_size_limit` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `malloced_memory` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `peak_malloced_memory` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `does_zap_garbage` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `number_of_native_contexts` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `number_of_detached_contexts` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `total_global_handles_size` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `used_global_handles_size` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `external_memory` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `total_allocated_bytes` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

`total_heap_size` The value of total\_heap\_size is the number of bytes V8 has
allocated for the heap. This can grow if used\_heap needs more memory.

`total_heap_size_executable` The value of total\_heap\_size\_executable is the
portion of the heap that can contain executable code, in bytes. This includes
memory used by JIT-compiled code and any memory that must be kept executable.

`total_physical_size` The value of total\_physical\_size is the actual physical memory
used by the V8 heap, in bytes. This is the amount of memory that is committed
(or in use) rather than reserved.

`total_available_size` The value of total\_available\_size is the number of
bytes of memory available to the V8 heap. This value represents how much
more memory V8 can use before it exceeds the heap limit.

`used_heap_size` The value of used\_heap\_size is number of bytes currently
being used by V8’s JavaScript objects. This is the actual memory in use and
does not include memory that has been allocated but not yet used.

`heap_size_limit` The value of heap\_size\_limit is the maximum size of the V8
heap, in bytes (either the default limit, determined by system resources, or
the value passed to the `--max_old_space_size` option).

`malloced_memory` The value of malloced\_memory is the number of bytes allocated
through `malloc` by V8.

`peak_malloced_memory` The value of peak\_malloced\_memory is the peak number of
bytes allocated through `malloc` by V8 during the lifetime of the process.

`does_zap_garbage` is a 0/1 boolean, which signifies whether the
`--zap_code_space` option is enabled or not. This makes V8 overwrite heap
garbage with a bit pattern. The RSS footprint (resident set size) gets bigger
because it continuously touches all heap pages and that makes them less likely
to get swapped out by the operating system.

`number_of_native_contexts` The value of native\_context is the number of the
top-level contexts currently active. Increase of this number over time indicates
a memory leak.

`number_of_detached_contexts` The value of detached\_context is the number
of contexts that were detached and not yet garbage collected. This number
being non-zero indicates a potential memory leak.

`total_global_handles_size` The value of total\_global\_handles\_size is the
total memory size of V8 global handles.

`used_global_handles_size` The value of used\_global\_handles\_size is the
used memory size of V8 global handles.

`external_memory` The value of external\_memory is the memory size of array
buffers and external strings.

`total_allocated_bytes` The value of total allocated bytes since the Isolate
creation

```js
{
  total_heap_size: 7326976,
  total_heap_size_executable: 4194304,
  total_physical_size: 7326976,
  total_available_size: 1152656,
  used_heap_size: 3476208,
  heap_size_limit: 1535115264,
  malloced_memory: 16384,
  peak_malloced_memory: 1127496,
  does_zap_garbage: 0,
  number_of_native_contexts: 1,
  number_of_detached_contexts: 0,
  total_global_handles_size: 8192,
  used_global_handles_size: 3296,
  external_memory: 318824
} copy
```

### `v8.getCppHeapStatistics([detailLevel])`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#v8getcppheapstatisticsdetaillevel)

Retrieves [CppHeap](https://v8docs.nodesource.com/node-22.4/d9/dc4/classv8_1_1_cpp_heap.html) statistics regarding memory consumption and
utilization using the V8 [`CollectStatistics()`](https://v8docs.nodesource.com/node-22.4/d9/dc4/classv8_1_1_cpp_heap.html#a3a5d09567758e608fffde50eeabc2feb) function which
may change from one V8 version to the
next.

- `detailLevel` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<undefined>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type): **Default:**`'detailed'`.
Specifies the level of detail in the returned statistics.
Accepted values are:

  - `'brief'`: Brief statistics contain only the top-level
    allocated and used
    memory statistics for the entire heap.
  - `'detailed'`: Detailed statistics also contain a break
    down per space and page, as well as freelist statistics
    and object type histograms.

It returns an object with a structure similar to the
[`cppgc::HeapStatistics`](https://v8docs.nodesource.com/node-22.4/d7/d51/heap-statistics_8h_source.html) object. See the [V8 documentation](https://v8docs.nodesource.com/node-22.4/df/d2f/structcppgc_1_1_heap_statistics.html)
for more information about the properties of the object.

```js
// Detailed
({
  committed_size_bytes: 131072,
  resident_size_bytes: 131072,
  used_size_bytes: 152,
  space_statistics: [\
    {\
      name: 'NormalPageSpace0',\
      committed_size_bytes: 0,\
      resident_size_bytes: 0,\
      used_size_bytes: 0,\
      page_stats: [{}],\
      free_list_stats: {},\
    },\
    {\
      name: 'NormalPageSpace1',\
      committed_size_bytes: 131072,\
      resident_size_bytes: 131072,\
      used_size_bytes: 152,\
      page_stats: [{}],\
      free_list_stats: {},\
    },\
    {\
      name: 'NormalPageSpace2',\
      committed_size_bytes: 0,\
      resident_size_bytes: 0,\
      used_size_bytes: 0,\
      page_stats: [{}],\
      free_list_stats: {},\
    },\
    {\
      name: 'NormalPageSpace3',\
      committed_size_bytes: 0,\
      resident_size_bytes: 0,\
      used_size_bytes: 0,\
      page_stats: [{}],\
      free_list_stats: {},\
    },\
    {\
      name: 'LargePageSpace',\
      committed_size_bytes: 0,\
      resident_size_bytes: 0,\
      used_size_bytes: 0,\
      page_stats: [{}],\
      free_list_stats: {},\
    },\
  ],
  type_names: [],
  detail_level: 'detailed',
}); copy
```

```js
// Brief
({
  committed_size_bytes: 131072,
  resident_size_bytes: 131072,
  used_size_bytes: 128864,
  space_statistics: [],
  type_names: [],
  detail_level: 'brief',
}); copy
```

### `v8.queryObjects(ctor[, options])`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#v8queryobjectsctor-options)

Added in: v22.0.0, v20.13.0

[Stability: 1.1](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Active development

- `ctor` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The constructor that can be used to search on the
prototype chain in order to filter target objects in the heap.
- `options` [<undefined>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `format` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) If it's `'count'`, the count of matched objects
    is returned. If it's `'summary'`, an array with summary strings
    of the matched objects is returned.
- Returns: {number\|Array}

This is similar to the [`queryObjects()` console API](https://developer.chrome.com/docs/devtools/console/utilities#queryObjects-function) provided by the
Chromium DevTools console. It can be used to search for objects that
have the matching constructor on its prototype chain in the heap after
a full garbage collection, which can be useful for memory leak
regression tests. To avoid surprising results, users should avoid using
this API on constructors whose implementation they don't control, or on
constructors that can be invoked by other parties in the application.

To avoid accidental leaks, this API does not return raw references to
the objects found. By default, it returns the count of the objects
found. If `options.format` is `'summary'`, it returns an array
containing brief string representations for each object. The visibility
provided in this API is similar to what the heap snapshot provides,
while users can save the cost of serialization and parsing and directly
filter the target objects during the search.

Only objects created in the current execution context are included in the
results.

```js
const { queryObjects } = require('node:v8');
class A { foo = 'bar'; }
console.log(queryObjects(A)); // 0
const a = new A();
console.log(queryObjects(A)); // 1
// [ "A { foo: 'bar' }" ]
console.log(queryObjects(A, { format: 'summary' }));

class B extends A { bar = 'qux'; }
const b = new B();
console.log(queryObjects(B)); // 1
// [ "B { foo: 'bar', bar: 'qux' }" ]
console.log(queryObjects(B, { format: 'summary' }));

// Note that, when there are child classes inheriting from a constructor,
// the constructor also shows up in the prototype chain of the child
// classes's prototype, so the child classes's prototype would also be
// included in the result.
console.log(queryObjects(A));  // 3
// [ "B { foo: 'bar', bar: 'qux' }", 'A {}', "A { foo: 'bar' }" ]
console.log(queryObjects(A, { format: 'summary' }));import { queryObjects } from 'node:v8';
class A { foo = 'bar'; }
console.log(queryObjects(A)); // 0
const a = new A();
console.log(queryObjects(A)); // 1
// [ "A { foo: 'bar' }" ]
console.log(queryObjects(A, { format: 'summary' }));

class B extends A { bar = 'qux'; }
const b = new B();
console.log(queryObjects(B)); // 1
// [ "B { foo: 'bar', bar: 'qux' }" ]
console.log(queryObjects(B, { format: 'summary' }));

// Note that, when there are child classes inheriting from a constructor,
// the constructor also shows up in the prototype chain of the child
// classes's prototype, so the child classes's prototype would also be
// included in the result.
console.log(queryObjects(A));  // 3
// [ "B { foo: 'bar', bar: 'qux' }", 'A {}', "A { foo: 'bar' }" ]
console.log(queryObjects(A, { format: 'summary' }));copy
```

### `v8.setFlagsFromString(flags)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#v8setflagsfromstringflags)

Added in: v1.0.0

- `flags` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

The `v8.setFlagsFromString()` method can be used to programmatically set
V8 command-line flags. This method should be used with care. Changing settings
after the VM has started may result in unpredictable behavior, including
crashes and data loss; or it may simply do nothing.

The V8 options available for a version of Node.js may be determined by running
`node --v8-options`.

Usage:

```js
// Print GC events to stdout for one minute.
const v8 = require('node:v8');
v8.setFlagsFromString('--trace_gc');
setTimeout(() => { v8.setFlagsFromString('--notrace_gc'); }, 60e3); copy
```

### `v8.stopCoverage()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#v8stopcoverage)

Added in: v15.1.0, v14.18.0, v12.22.0

The `v8.stopCoverage()` method allows the user to stop the coverage collection
started by [`NODE_V8_COVERAGE`](https://nodejs.org/dist/latest/docs/api/cli.html#node_v8_coveragedir), so that V8 can release the execution count
records and optimize code. This can be used in conjunction with
[`v8.takeCoverage()`](https://nodejs.org/dist/latest/docs/api/v8.html#v8takecoverage) if the user wants to collect the coverage on demand.

### `v8.takeCoverage()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#v8takecoverage)

Added in: v15.1.0, v14.18.0, v12.22.0

The `v8.takeCoverage()` method allows the user to write the coverage started by
[`NODE_V8_COVERAGE`](https://nodejs.org/dist/latest/docs/api/cli.html#node_v8_coveragedir) to disk on demand. This method can be invoked multiple
times during the lifetime of the process. Each time the execution counter will
be reset and a new coverage report will be written to the directory specified
by [`NODE_V8_COVERAGE`](https://nodejs.org/dist/latest/docs/api/cli.html#node_v8_coveragedir).

When the process is about to exit, one last coverage will still be written to
disk unless [`v8.stopCoverage()`](https://nodejs.org/dist/latest/docs/api/v8.html#v8stopcoverage) is invoked before the process exits.

### `v8.writeHeapSnapshot([filename[,options]])`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#v8writeheapsnapshotfilenameoptions)

History

| Version | Changes |
| --- | --- |
| v19.1.0 | Support options to configure the heap snapshot. |
| v18.0.0 | An exception will now be thrown if the file could not be written. |
| v18.0.0 | Make the returned error codes consistent across all platforms. |
| v11.13.0 | Added in: v11.13.0 |

- `filename` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) The file path where the V8 heap snapshot is to be
saved. If not specified, a file name with the pattern
`'Heap-${yyyymmdd}-${hhmmss}-${pid}-${thread_id}.heapsnapshot'` will be
generated, where `{pid}` will be the PID of the Node.js process,
`{thread_id}` will be `0` when `writeHeapSnapshot()` is called from
the main Node.js thread or the id of a worker thread.
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `exposeInternals` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) If true, expose internals in the heap snapshot.
    **Default:**`false`.
  - `exposeNumericValues` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) If true, expose numeric values in
    artificial fields. **Default:**`false`.
- Returns: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) The filename where the snapshot was saved.

Generates a snapshot of the current V8 heap and writes it to a JSON
file. This file is intended to be used with tools such as Chrome
DevTools. The JSON schema is undocumented and specific to the V8
engine, and may change from one version of V8 to the next.

A heap snapshot is specific to a single V8 isolate. When using
[worker threads](https://nodejs.org/dist/latest/docs/api/worker_threads.html), a heap snapshot generated from the main thread will
not contain any information about the workers, and vice versa.

Creating a heap snapshot requires memory about twice the size of the heap at
the time the snapshot is created. This results in the risk of OOM killers
terminating the process.

Generating a snapshot is a synchronous operation which blocks the event loop
for a duration depending on the heap size.

```js
const { writeHeapSnapshot } = require('node:v8');
const {
  Worker,
  isMainThread,
  parentPort,
} = require('node:worker_threads');

if (isMainThread) {
  const worker = new Worker(__filename);

  worker.once('message', (filename) => {
    console.log(`worker heapdump: ${filename}`);
    // Now get a heapdump for the main thread.
    console.log(`main thread heapdump: ${writeHeapSnapshot()}`);
  });

  // Tell the worker to create a heapdump.
  worker.postMessage('heapdump');
} else {
  parentPort.once('message', (message) => {
    if (message === 'heapdump') {
      // Generate a heapdump for the worker
      // and return the filename to the parent.
      parentPort.postMessage(writeHeapSnapshot());
    }
  });
} copy
```

### `v8.setHeapSnapshotNearHeapLimit(limit)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#v8setheapsnapshotnearheaplimitlimit)

History

| Version | Changes |
| --- | --- |
| v24.0.0, v22.17.0 | Marking the API stable. |
| v18.10.0, v16.18.0 | Added in: v18.10.0, v16.18.0 |

- `limit` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The API is a no-op if `--heapsnapshot-near-heap-limit` is already set from the
command line or the API is called more than once. `limit` must be a positive
integer. See [`--heapsnapshot-near-heap-limit`](https://nodejs.org/dist/latest/docs/api/cli.html#--heapsnapshot-near-heap-limitmax_count) for more information.

### Serialization API[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#serialization-api)

The serialization API provides means of serializing JavaScript values in a way
that is compatible with the [HTML structured clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

The format is backward-compatible (i.e. safe to store to disk).
Equal JavaScript values may result in different serialized output.

#### `v8.serialize(value)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#v8serializevalue)

Added in: v8.0.0

- `value` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)
- Returns: [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer)

Uses a [`DefaultSerializer`](https://nodejs.org/dist/latest/docs/api/v8.html#class-v8defaultserializer) to serialize `value` into a buffer.

[`ERR_BUFFER_TOO_LARGE`](https://nodejs.org/dist/latest/docs/api/errors.html#err_buffer_too_large) will be thrown when trying to
serialize a huge object which requires buffer
larger than [`buffer.constants.MAX_LENGTH`](https://nodejs.org/dist/latest/docs/api/buffer.html#bufferconstantsmax_length).

#### `v8.deserialize(buffer)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#v8deserializebuffer)

Added in: v8.0.0

- `buffer` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) A buffer returned by [`serialize()`](https://nodejs.org/dist/latest/docs/api/v8.html#v8serializevalue).

Uses a [`DefaultDeserializer`](https://nodejs.org/dist/latest/docs/api/v8.html#class-v8defaultdeserializer) with default options to read a JS value
from a buffer.

#### Class: `v8.Serializer`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#class-v8serializer)

Added in: v8.0.0

##### `new Serializer()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#new-serializer)

Creates a new `Serializer` object.

##### `serializer.writeHeader()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#serializerwriteheader)

Writes out a header, which includes the serialization format version.

##### `serializer.writeValue(value)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#serializerwritevaluevalue)

- `value` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)

Serializes a JavaScript value and adds the serialized representation to the
internal buffer.

This throws an error if `value` cannot be serialized.

##### `serializer.releaseBuffer()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#serializerreleasebuffer)

- Returns: [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer)

Returns the stored internal buffer. This serializer should not be used once
the buffer is released. Calling this method results in undefined behavior
if a previous write has failed.

##### `serializer.transferArrayBuffer(id, arrayBuffer)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#serializertransferarraybufferid-arraybuffer)

- `id` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) A 32-bit unsigned integer.
- `arrayBuffer` [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) An `ArrayBuffer` instance.

Marks an `ArrayBuffer` as having its contents transferred out of band.
Pass the corresponding `ArrayBuffer` in the deserializing context to
[`deserializer.transferArrayBuffer()`](https://nodejs.org/dist/latest/docs/api/v8.html#deserializertransferarraybufferid-arraybuffer).

##### `serializer.writeUint32(value)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#serializerwriteuint32value)

- `value` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Write a raw 32-bit unsigned integer.
For use inside of a custom [`serializer._writeHostObject()`](https://nodejs.org/dist/latest/docs/api/v8.html#serializer_writehostobjectobject).

##### `serializer.writeUint64(hi, lo)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#serializerwriteuint64hi-lo)

- `hi` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `lo` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Write a raw 64-bit unsigned integer, split into high and low 32-bit parts.
For use inside of a custom [`serializer._writeHostObject()`](https://nodejs.org/dist/latest/docs/api/v8.html#serializer_writehostobjectobject).

##### `serializer.writeDouble(value)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#serializerwritedoublevalue)

- `value` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Write a JS `number` value.
For use inside of a custom [`serializer._writeHostObject()`](https://nodejs.org/dist/latest/docs/api/v8.html#serializer_writehostobjectobject).

##### `serializer.writeRawBytes(buffer)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#serializerwriterawbytesbuffer)

- `buffer` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView)

Write raw bytes into the serializer's internal buffer. The deserializer
will require a way to compute the length of the buffer.
For use inside of a custom [`serializer._writeHostObject()`](https://nodejs.org/dist/latest/docs/api/v8.html#serializer_writehostobjectobject).

##### `serializer._writeHostObject(object)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#serializer_writehostobjectobject)

- `object` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

This method is called to write some kind of host object, i.e. an object created
by native C++ bindings. If it is not possible to serialize `object`, a suitable
exception should be thrown.

This method is not present on the `Serializer` class itself but can be provided
by subclasses.

##### `serializer._getDataCloneError(message)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#serializer_getdatacloneerrormessage)

- `message` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

This method is called to generate error objects that will be thrown when an
object can not be cloned.

This method defaults to the [`Error`](https://nodejs.org/dist/latest/docs/api/errors.html#class-error) constructor and can be overridden on
subclasses.

##### `serializer._getSharedArrayBufferId(sharedArrayBuffer)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#serializer_getsharedarraybufferidsharedarraybuffer)

- `sharedArrayBuffer` [<SharedArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer)

This method is called when the serializer is going to serialize a
`SharedArrayBuffer` object. It must return an unsigned 32-bit integer ID for
the object, using the same ID if this `SharedArrayBuffer` has already been
serialized. When deserializing, this ID will be passed to
[`deserializer.transferArrayBuffer()`](https://nodejs.org/dist/latest/docs/api/v8.html#deserializertransferarraybufferid-arraybuffer).

If the object cannot be serialized, an exception should be thrown.

This method is not present on the `Serializer` class itself but can be provided
by subclasses.

##### `serializer._setTreatArrayBufferViewsAsHostObjects(flag)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#serializer_settreatarraybufferviewsashostobjectsflag)

- `flag` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) **Default:**`false`

Indicate whether to treat `TypedArray` and `DataView` objects as
host objects, i.e. pass them to [`serializer._writeHostObject()`](https://nodejs.org/dist/latest/docs/api/v8.html#serializer_writehostobjectobject).

#### Class: `v8.Deserializer`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#class-v8deserializer)

Added in: v8.0.0

##### `new Deserializer(buffer)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#new-deserializerbuffer)

- `buffer` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) A buffer returned by
[`serializer.releaseBuffer()`](https://nodejs.org/dist/latest/docs/api/v8.html#serializerreleasebuffer).

Creates a new `Deserializer` object.

##### `deserializer.readHeader()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#deserializerreadheader)

Reads and validates a header (including the format version).
May, for example, reject an invalid or unsupported wire format. In that case,
an `Error` is thrown.

##### `deserializer.readValue()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#deserializerreadvalue)

Deserializes a JavaScript value from the buffer and returns it.

##### `deserializer.transferArrayBuffer(id, arrayBuffer)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#deserializertransferarraybufferid-arraybuffer)

- `id` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) A 32-bit unsigned integer.
- `arrayBuffer` [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<SharedArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) An `ArrayBuffer` instance.

Marks an `ArrayBuffer` as having its contents transferred out of band.
Pass the corresponding `ArrayBuffer` in the serializing context to
[`serializer.transferArrayBuffer()`](https://nodejs.org/dist/latest/docs/api/v8.html#serializertransferarraybufferid-arraybuffer) (or return the `id` from
[`serializer._getSharedArrayBufferId()`](https://nodejs.org/dist/latest/docs/api/v8.html#serializer_getsharedarraybufferidsharedarraybuffer) in the case of `SharedArrayBuffer`s).

##### `deserializer.getWireFormatVersion()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#deserializergetwireformatversion)

- Returns: [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Reads the underlying wire format version. Likely mostly to be useful to
legacy code reading old wire format versions. May not be called before
`.readHeader()`.

##### `deserializer.readUint32()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#deserializerreaduint32)

- Returns: [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Read a raw 32-bit unsigned integer and return it.
For use inside of a custom [`deserializer._readHostObject()`](https://nodejs.org/dist/latest/docs/api/v8.html#deserializer_readhostobject).

##### `deserializer.readUint64()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#deserializerreaduint64)

- Returns: [<integer\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Read a raw 64-bit unsigned integer and return it as an array `[hi, lo]`
with two 32-bit unsigned integer entries.
For use inside of a custom [`deserializer._readHostObject()`](https://nodejs.org/dist/latest/docs/api/v8.html#deserializer_readhostobject).

##### `deserializer.readDouble()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#deserializerreaddouble)

- Returns: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Read a JS `number` value.
For use inside of a custom [`deserializer._readHostObject()`](https://nodejs.org/dist/latest/docs/api/v8.html#deserializer_readhostobject).

##### `deserializer.readRawBytes(length)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#deserializerreadrawbyteslength)

- `length` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- Returns: [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer)

Read raw bytes from the deserializer's internal buffer. The `length` parameter
must correspond to the length of the buffer that was passed to
[`serializer.writeRawBytes()`](https://nodejs.org/dist/latest/docs/api/v8.html#serializerwriterawbytesbuffer).
For use inside of a custom [`deserializer._readHostObject()`](https://nodejs.org/dist/latest/docs/api/v8.html#deserializer_readhostobject).

##### `deserializer._readHostObject()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#deserializer_readhostobject)

This method is called to read some kind of host object, i.e. an object that is
created by native C++ bindings. If it is not possible to deserialize the data,
a suitable exception should be thrown.

This method is not present on the `Deserializer` class itself but can be
provided by subclasses.

#### Class: `v8.DefaultSerializer`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#class-v8defaultserializer)

Added in: v8.0.0

A subclass of [`Serializer`](https://nodejs.org/dist/latest/docs/api/v8.html#class-v8serializer) that serializes `TypedArray`
(in particular [`Buffer`](https://nodejs.org/dist/latest/docs/api/buffer.html)) and `DataView` objects as host objects, and only
stores the part of their underlying `ArrayBuffer`s that they are referring to.

#### Class: `v8.DefaultDeserializer`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#class-v8defaultdeserializer)

Added in: v8.0.0

A subclass of [`Deserializer`](https://nodejs.org/dist/latest/docs/api/v8.html#class-v8deserializer) corresponding to the format written by
[`DefaultSerializer`](https://nodejs.org/dist/latest/docs/api/v8.html#class-v8defaultserializer).

### Promise hooks[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#promise-hooks)

The `promiseHooks` interface can be used to track promise lifecycle events.
To track _all_ async activity, see [`async_hooks`](https://nodejs.org/dist/latest/docs/api/async_hooks.html) which internally uses this
module to produce promise lifecycle events in addition to events for other
async resources. For request context management, see [`AsyncLocalStorage`](https://nodejs.org/dist/latest/docs/api/async_context.html#class-asynclocalstorage).

```js
import { promiseHooks } from 'node:v8';

// There are four lifecycle events produced by promises:

// The `init` event represents the creation of a promise. This could be a
// direct creation such as with `new Promise(...)` or a continuation such
// as `then()` or `catch()`. It also happens whenever an async function is
// called or does an `await`. If a continuation promise is created, the
// `parent` will be the promise it is a continuation from.
function init(promise, parent) {
  console.log('a promise was created', { promise, parent });
}

// The `settled` event happens when a promise receives a resolution or
// rejection value. This may happen synchronously such as when using
// `Promise.resolve()` on non-promise input.
function settled(promise) {
  console.log('a promise resolved or rejected', { promise });
}

// The `before` event runs immediately before a `then()` or `catch()` handler
// runs or an `await` resumes execution.
function before(promise) {
  console.log('a promise is about to call a then handler', { promise });
}

// The `after` event runs immediately after a `then()` handler runs or when
// an `await` begins after resuming from another.
function after(promise) {
  console.log('a promise is done calling a then handler', { promise });
}

// Lifecycle hooks may be started and stopped individually
const stopWatchingInits = promiseHooks.onInit(init);
const stopWatchingSettleds = promiseHooks.onSettled(settled);
const stopWatchingBefores = promiseHooks.onBefore(before);
const stopWatchingAfters = promiseHooks.onAfter(after);

// Or they may be started and stopped in groups
const stopHookSet = promiseHooks.createHook({
  init,
  settled,
  before,
  after,
});

// To stop a hook, call the function returned at its creation.
stopWatchingInits();
stopWatchingSettleds();
stopWatchingBefores();
stopWatchingAfters();
stopHookSet(); copy
```

#### `promiseHooks.onInit(init)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#promisehooksoninitinit)

Added in: v17.1.0, v16.14.0

- `init` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The [`init` callback](https://nodejs.org/dist/latest/docs/api/v8.html#initpromise-parent) to call when a promise is created.
- Returns: [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Call to stop the hook.

**The `init` hook must be a plain function. Providing an async function will**
**throw as it would produce an infinite microtask loop.**

```js
import { promiseHooks } from 'node:v8';

const stop = promiseHooks.onInit((promise, parent) => {});const { promiseHooks } = require('node:v8');

const stop = promiseHooks.onInit((promise, parent) => {});copy
```

#### `promiseHooks.onSettled(settled)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#promisehooksonsettledsettled)

Added in: v17.1.0, v16.14.0

- `settled` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The [`settled` callback](https://nodejs.org/dist/latest/docs/api/v8.html#settledpromise) to call when a promise
is resolved or rejected.
- Returns: [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Call to stop the hook.

**The `settled` hook must be a plain function. Providing an async function will**
**throw as it would produce an infinite microtask loop.**

```js
import { promiseHooks } from 'node:v8';

const stop = promiseHooks.onSettled((promise) => {});const { promiseHooks } = require('node:v8');

const stop = promiseHooks.onSettled((promise) => {});copy
```

#### `promiseHooks.onBefore(before)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#promisehooksonbeforebefore)

Added in: v17.1.0, v16.14.0

- `before` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The [`before` callback](https://nodejs.org/dist/latest/docs/api/v8.html#beforepromise) to call before a promise
continuation executes.
- Returns: [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Call to stop the hook.

**The `before` hook must be a plain function. Providing an async function will**
**throw as it would produce an infinite microtask loop.**

```js
import { promiseHooks } from 'node:v8';

const stop = promiseHooks.onBefore((promise) => {});const { promiseHooks } = require('node:v8');

const stop = promiseHooks.onBefore((promise) => {});copy
```

#### `promiseHooks.onAfter(after)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#promisehooksonafterafter)

Added in: v17.1.0, v16.14.0

- `after` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The [`after` callback](https://nodejs.org/dist/latest/docs/api/v8.html#afterpromise) to call after a promise
continuation executes.
- Returns: [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Call to stop the hook.

**The `after` hook must be a plain function. Providing an async function will**
**throw as it would produce an infinite microtask loop.**

```js
import { promiseHooks } from 'node:v8';

const stop = promiseHooks.onAfter((promise) => {});const { promiseHooks } = require('node:v8');

const stop = promiseHooks.onAfter((promise) => {});copy
```

#### `promiseHooks.createHook(callbacks)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#promisehookscreatehookcallbacks)

Added in: v17.1.0, v16.14.0

- `callbacks` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) The [Hook Callbacks](https://nodejs.org/dist/latest/docs/api/v8.html#hook-callbacks) to register

  - `init` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The [`init` callback](https://nodejs.org/dist/latest/docs/api/v8.html#initpromise-parent).
  - `before` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The [`before` callback](https://nodejs.org/dist/latest/docs/api/v8.html#beforepromise).
  - `after` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The [`after` callback](https://nodejs.org/dist/latest/docs/api/v8.html#afterpromise).
  - `settled` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) The [`settled` callback](https://nodejs.org/dist/latest/docs/api/v8.html#settledpromise).
- Returns: [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Used for disabling hooks

**The hook callbacks must be plain functions. Providing async functions will**
**throw as it would produce an infinite microtask loop.**

Registers functions to be called for different lifetime events of each promise.

The callbacks `init()`/`before()`/`after()`/`settled()` are called for the
respective events during a promise's lifetime.

All callbacks are optional. For example, if only promise creation needs to
be tracked, then only the `init` callback needs to be passed. The
specifics of all functions that can be passed to `callbacks` is in the
[Hook Callbacks](https://nodejs.org/dist/latest/docs/api/v8.html#hook-callbacks) section.

```js
import { promiseHooks } from 'node:v8';

const stopAll = promiseHooks.createHook({
  init(promise, parent) {},
});const { promiseHooks } = require('node:v8');

const stopAll = promiseHooks.createHook({
  init(promise, parent) {},
});copy
```

#### Hook callbacks[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#hook-callbacks)

Key events in the lifetime of a promise have been categorized into four areas:
creation of a promise, before/after a continuation handler is called or around
an await, and when the promise resolves or rejects.

While these hooks are similar to those of [`async_hooks`](https://nodejs.org/dist/latest/docs/api/async_hooks.html) they lack a
`destroy` hook. Other types of async resources typically represent sockets or
file descriptors which have a distinct "closed" state to express the `destroy`
lifecycle event while promises remain usable for as long as code can still
reach them. Garbage collection tracking is used to make promises fit into the
`async_hooks` event model, however this tracking is very expensive and they may
not necessarily ever even be garbage collected.

Because promises are asynchronous resources whose lifecycle is tracked
via the promise hooks mechanism, the `init()`, `before()`, `after()`, and
`settled()` callbacks _must not_ be async functions as they create more
promises which would produce an infinite loop.

While this API is used to feed promise events into [`async_hooks`](https://nodejs.org/dist/latest/docs/api/async_hooks.html), the
ordering between the two is undefined. Both APIs are multi-tenant
and therefore could produce events in any order relative to each other.

##### `init(promise, parent)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#initpromise-parent)

- `promise` [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) The promise being created.
- `parent` [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) The promise continued from, if applicable.

Called when a promise is constructed. This _does not_ mean that corresponding
`before`/`after` events will occur, only that the possibility exists. This will
happen if a promise is created without ever getting a continuation.

##### `before(promise)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#beforepromise)

- `promise` [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Called before a promise continuation executes. This can be in the form of
`then()`, `catch()`, or `finally()` handlers or an `await` resuming.

The `before` callback will be called 0 to N times. The `before` callback
will typically be called 0 times if no continuation was ever made for the
promise. The `before` callback may be called many times in the case where
many continuations have been made from the same promise.

##### `after(promise)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#afterpromise)

- `promise` [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Called immediately after a promise continuation executes. This may be after a
`then()`, `catch()`, or `finally()` handler or before an `await` after another
`await`.

##### `settled(promise)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#settledpromise)

- `promise` [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Called when the promise receives a resolution or rejection value. This may
occur synchronously in the case of `Promise.resolve()` or `Promise.reject()`.

### Startup Snapshot API[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#startup-snapshot-api)

History

| Version | Changes |
| --- | --- |
| v24.0.0, v22.17.0 | Marking the API stable. |
| v18.6.0, v16.17.0 | Added in: v18.6.0, v16.17.0 |

The `v8.startupSnapshot` interface can be used to add serialization and
deserialization hooks for custom startup snapshots.

```console
$ node --snapshot-blob snapshot.blob --build-snapshot entry.js
# This launches a process with the snapshot
$ node --snapshot-blob snapshot.blob copy
```

In the example above, `entry.js` can use methods from the `v8.startupSnapshot`
interface to specify how to save information for custom objects in the snapshot
during serialization and how the information can be used to synchronize these
objects during deserialization of the snapshot. For example, if the `entry.js`
contains the following script:

```js
'use strict';

const fs = require('node:fs');
const zlib = require('node:zlib');
const path = require('node:path');
const assert = require('node:assert');

const v8 = require('node:v8');

class BookShelf {
  storage = new Map();

  // Reading a series of files from directory and store them into storage.
  constructor(directory, books) {
    for (const book of books) {
      this.storage.set(book, fs.readFileSync(path.join(directory, book)));
    }
  }

  static compressAll(shelf) {
    for (const [ book, content ] of shelf.storage) {
      shelf.storage.set(book, zlib.gzipSync(content));
    }
  }

  static decompressAll(shelf) {
    for (const [ book, content ] of shelf.storage) {
      shelf.storage.set(book, zlib.gunzipSync(content));
    }
  }
}

// __dirname here is where the snapshot script is placed
// during snapshot building time.
const shelf = new BookShelf(__dirname, [\
  'book1.en_US.txt',\
  'book1.es_ES.txt',\
  'book2.zh_CN.txt',\
]);

assert(v8.startupSnapshot.isBuildingSnapshot());
// On snapshot serialization, compress the books to reduce size.
v8.startupSnapshot.addSerializeCallback(BookShelf.compressAll, shelf);
// On snapshot deserialization, decompress the books.
v8.startupSnapshot.addDeserializeCallback(BookShelf.decompressAll, shelf);
v8.startupSnapshot.setDeserializeMainFunction((shelf) => {
  // process.env and process.argv are refreshed during snapshot
  // deserialization.
  const lang = process.env.BOOK_LANG || 'en_US';
  const book = process.argv[1];
  const name = `${book}.${lang}.txt`;
  console.log(shelf.storage.get(name));
}, shelf); copy
```

The resulted binary will get print the data deserialized from the snapshot
during start up, using the refreshed `process.env` and `process.argv` of
the launched process:

```console
$ BOOK_LANG=es_ES node --snapshot-blob snapshot.blob book1
# Prints content of book1.es_ES.txt deserialized from the snapshot. copy
```

Currently the application deserialized from a user-land snapshot cannot
be snapshotted again, so these APIs are only available to applications
that are not deserialized from a user-land snapshot.

#### `v8.startupSnapshot.addSerializeCallback(callback[, data])`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#v8startupsnapshotaddserializecallbackcallback-data)

Added in: v18.6.0, v16.17.0

- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Callback to be invoked before serialization.
- `data` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) Optional data that will be passed to the `callback` when it
gets called.

Add a callback that will be called when the Node.js instance is about to
get serialized into a snapshot and exit. This can be used to release
resources that should not or cannot be serialized or to convert user data
into a form more suitable for serialization.

Callbacks are run in the order in which they are added.

#### `v8.startupSnapshot.addDeserializeCallback(callback[, data])`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#v8startupsnapshotadddeserializecallbackcallback-data)

Added in: v18.6.0, v16.17.0

- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Callback to be invoked after the snapshot is
deserialized.
- `data` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) Optional data that will be passed to the `callback` when it
gets called.

Add a callback that will be called when the Node.js instance is deserialized
from a snapshot. The `callback` and the `data` (if provided) will be
serialized into the snapshot, they can be used to re-initialize the state
of the application or to re-acquire resources that the application needs
when the application is restarted from the snapshot.

Callbacks are run in the order in which they are added.

#### `v8.startupSnapshot.setDeserializeMainFunction(callback[, data])`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#v8startupsnapshotsetdeserializemainfunctioncallback-data)

Added in: v18.6.0, v16.17.0

- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Callback to be invoked as the entry point after the
snapshot is deserialized.
- `data` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) Optional data that will be passed to the `callback` when it
gets called.

This sets the entry point of the Node.js application when it is deserialized
from a snapshot. This can be called only once in the snapshot building
script. If called, the deserialized application no longer needs an additional
entry point script to start up and will simply invoke the callback along with
the deserialized data (if provided), otherwise an entry point script still
needs to be provided to the deserialized application.

#### `v8.startupSnapshot.isBuildingSnapshot()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#v8startupsnapshotisbuildingsnapshot)

Added in: v18.6.0, v16.17.0

- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)

Returns true if the Node.js instance is run to build a snapshot.

### Class: `v8.GCProfiler`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#class-v8gcprofiler)

Added in: v19.6.0, v18.15.0

This API collects GC data in current thread.

#### `new v8.GCProfiler()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#new-v8gcprofiler)

Added in: v19.6.0, v18.15.0

Create a new instance of the `v8.GCProfiler` class.

#### `profiler.start()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#profilerstart)

Added in: v19.6.0, v18.15.0

Start collecting GC data.

#### `profiler.stop()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#profilerstop)

Added in: v19.6.0, v18.15.0

Stop collecting GC data and return an object.The content of object
is as follows.

```json
{
  "version": 1,
  "startTime": 1674059033862,
  "statistics": [\
    {\
      "gcType": "Scavenge",\
      "beforeGC": {\
        "heapStatistics": {\
          "totalHeapSize": 5005312,\
          "totalHeapSizeExecutable": 524288,\
          "totalPhysicalSize": 5226496,\
          "totalAvailableSize": 4341325216,\
          "totalGlobalHandlesSize": 8192,\
          "usedGlobalHandlesSize": 2112,\
          "usedHeapSize": 4883840,\
          "heapSizeLimit": 4345298944,\
          "mallocedMemory": 254128,\
          "externalMemory": 225138,\
          "peakMallocedMemory": 181760\
        },\
        "heapSpaceStatistics": [\
          {\
            "spaceName": "read_only_space",\
            "spaceSize": 0,\
            "spaceUsedSize": 0,\
            "spaceAvailableSize": 0,\
            "physicalSpaceSize": 0\
          }\
        ]\
      },\
      "cost": 1574.14,\
      "afterGC": {\
        "heapStatistics": {\
          "totalHeapSize": 6053888,\
          "totalHeapSizeExecutable": 524288,\
          "totalPhysicalSize": 5500928,\
          "totalAvailableSize": 4341101384,\
          "totalGlobalHandlesSize": 8192,\
          "usedGlobalHandlesSize": 2112,\
          "usedHeapSize": 4059096,\
          "heapSizeLimit": 4345298944,\
          "mallocedMemory": 254128,\
          "externalMemory": 225138,\
          "peakMallocedMemory": 181760\
        },\
        "heapSpaceStatistics": [\
          {\
            "spaceName": "read_only_space",\
            "spaceSize": 0,\
            "spaceUsedSize": 0,\
            "spaceAvailableSize": 0,\
            "physicalSpaceSize": 0\
          }\
        ]\
      }\
    }\
  ],
  "endTime": 1674059036865
} copy
```

Here's an example.

```js
const { GCProfiler } = require('node:v8');
const profiler = new GCProfiler();
profiler.start();
setTimeout(() => {
  console.log(profiler.stop());
}, 1000); copy
```

### Class: `SyncCPUProfileHandle`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#class-synccpuprofilehandle)

Added in: v25.0.0

#### `syncCpuProfileHandle.stop()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#synccpuprofilehandlestop)

Added in: v25.0.0

- Returns: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

Stopping collecting the profile and return the profile data.

#### `syncCpuProfileHandle[Symbol.dispose]()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#synccpuprofilehandlesymboldispose)

Added in: v25.0.0

Stopping collecting the profile and the profile will be discarded.

### Class: `CPUProfileHandle`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#class-cpuprofilehandle)

Added in: v24.8.0

#### `cpuProfileHandle.stop()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#cpuprofilehandlestop)

Added in: v24.8.0

- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Stopping collecting the profile, then return a Promise that fulfills with an error or the
profile data.

#### `cpuProfileHandle[Symbol.asyncDispose]()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#cpuprofilehandlesymbolasyncdispose)

Added in: v24.8.0

- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Stopping collecting the profile and the profile will be discarded.

### Class: `HeapProfileHandle`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#class-heapprofilehandle)

Added in: v24.9.0

#### `heapProfileHandle.stop()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#heapprofilehandlestop)

Added in: v24.9.0

- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Stopping collecting the profile, then return a Promise that fulfills with an error or the
profile data.

#### `heapProfileHandle[Symbol.asyncDispose]()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#heapprofilehandlesymbolasyncdispose)

Added in: v24.9.0

- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Stopping collecting the profile and the profile will be discarded.

### `v8.isStringOneByteRepresentation(content)`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#v8isstringonebyterepresentationcontent)

Added in: v23.10.0, v22.15.0

- `content` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)

V8 only supports `Latin-1/ISO-8859-1` and `UTF16` as the underlying representation of a string.
If the `content` uses `Latin-1/ISO-8859-1` as the underlying representation, this function will return true;
otherwise, it returns false.

If this method returns false, that does not mean that the string contains some characters not in `Latin-1/ISO-8859-1`.
Sometimes a `Latin-1` string may also be represented as `UTF16`.

```js
const { isStringOneByteRepresentation } = require('node:v8');

const Encoding = {
  latin1: 1,
  utf16le: 2,
};
const buffer = Buffer.alloc(100);
function writeString(input) {
  if (isStringOneByteRepresentation(input)) {
    buffer.writeUint8(Encoding.latin1);
    buffer.writeUint32LE(input.length, 1);
    buffer.write(input, 5, 'latin1');
  } else {
    buffer.writeUint8(Encoding.utf16le);
    buffer.writeUint32LE(input.length * 2, 1);
    buffer.write(input, 5, 'utf16le');
  }
}
writeString('hello');
writeString('你好'); copy
```

### `v8.startCpuProfile()`[\#](https://nodejs.org/dist/latest/docs/api/v8.html\#v8startcpuprofile)

Added in: v25.0.0

- Returns: [<SyncCPUProfileHandle>](https://nodejs.org/dist/latest/docs/api/v8.html#class-synccpuprofilehandle)

Starting a CPU profile then return a `SyncCPUProfileHandle` object.
This API supports `using` syntax.

```js
const handle = v8.startCpuProfile();
const profile = handle.stop();
console.log(profile); copy
```