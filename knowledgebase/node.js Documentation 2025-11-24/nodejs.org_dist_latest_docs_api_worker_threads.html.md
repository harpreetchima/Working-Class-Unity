---
url: "https://nodejs.org/dist/latest/docs/api/worker_threads.html"
title: "Worker threads | Node.js v25.2.1 Documentation"
---

[Skip to content](https://nodejs.org/dist/latest/docs/api/worker_threads.html#apicontent)

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
- [Table of contents](https://nodejs.org/dist/latest/docs/api/worker_threads.html#toc-picker)




- [Worker threads](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker-threads)
  - [`worker_threads.getEnvironmentData(key)`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsgetenvironmentdatakey)
  - [`worker_threads.isInternalThread`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsisinternalthread)
  - [`worker_threads.isMainThread`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsismainthread)
  - [`worker_threads.markAsUntransferable(object)`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsmarkasuntransferableobject)
  - [`worker_threads.isMarkedAsUntransferable(object)`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsismarkedasuntransferableobject)
  - [`worker_threads.markAsUncloneable(object)`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsmarkasuncloneableobject)
  - [`worker_threads.moveMessagePortToContext(port, contextifiedSandbox)`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsmovemessageporttocontextport-contextifiedsandbox)
  - [`worker_threads.parentPort`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsparentport)
  - [`worker_threads.postMessageToThread(threadId, value[, transferList][, timeout])`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadspostmessagetothreadthreadid-value-transferlist-timeout)
  - [`worker_threads.receiveMessageOnPort(port)`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsreceivemessageonportport)
  - [`worker_threads.resourceLimits`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsresourcelimits)
  - [`worker_threads.SHARE_ENV`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsshare_env)
  - [`worker_threads.setEnvironmentData(key[, value])`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadssetenvironmentdatakey-value)
  - [`worker_threads.threadId`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsthreadid)
  - [`worker_threads.threadName`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsthreadname)
  - [`worker_threads.workerData`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsworkerdata)
  - [`worker_threads.locks`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadslocks)
    - [Class: `Lock`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-lock)
      - [`lock.name`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#lockname)
      - [`lock.mode`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#lockmode)
    - [Class: `LockManager`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-lockmanager)
      - [`locks.request(name[, options], callback)`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#locksrequestname-options-callback)
      - [`locks.query()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#locksquery)
  - [Class: `BroadcastChannel extends EventTarget`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-broadcastchannel-extends-eventtarget)
    - [`new BroadcastChannel(name)`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#new-broadcastchannelname)
    - [`broadcastChannel.close()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#broadcastchannelclose)
    - [`broadcastChannel.onmessage`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#broadcastchannelonmessage)
    - [`broadcastChannel.onmessageerror`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#broadcastchannelonmessageerror)
    - [`broadcastChannel.postMessage(message)`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#broadcastchannelpostmessagemessage)
    - [`broadcastChannel.ref()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#broadcastchannelref)
    - [`broadcastChannel.unref()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#broadcastchannelunref)
  - [Class: `MessageChannel`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-messagechannel)
  - [Class: `MessagePort`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-messageport)
    - [Event: `'close'`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-close)
    - [Event: `'message'`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-message)
    - [Event: `'messageerror'`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-messageerror)
    - [`port.close()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#portclose)
    - [`port.postMessage(value[, transferList])`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#portpostmessagevalue-transferlist)
      - [Considerations when transferring TypedArrays and Buffers](https://nodejs.org/dist/latest/docs/api/worker_threads.html#considerations-when-transferring-typedarrays-and-buffers)
      - [Considerations when cloning objects with prototypes, classes, and accessors](https://nodejs.org/dist/latest/docs/api/worker_threads.html#considerations-when-cloning-objects-with-prototypes-classes-and-accessors)
    - [`port.hasRef()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#porthasref)
    - [`port.ref()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#portref)
    - [`port.start()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#portstart)
    - [`port.unref()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#portunref)
  - [Class: `Worker`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-worker)
    - [`new Worker(filename[, options])`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#new-workerfilename-options)
    - [Event: `'error'`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-error)
    - [Event: `'exit'`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-exit)
    - [Event: `'message'`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-message_1)
    - [Event: `'messageerror'`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-messageerror_1)
    - [Event: `'online'`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-online)
    - [`worker.cpuUsage([prev])`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workercpuusageprev)
    - [`worker.getHeapSnapshot([options])`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workergetheapsnapshotoptions)
    - [`worker.getHeapStatistics()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workergetheapstatistics)
    - [`worker.performance`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerperformance)
      - [`performance.eventLoopUtilization([utilization1[, utilization2]])`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#performanceeventlooputilizationutilization1-utilization2)
    - [`worker.postMessage(value[, transferList])`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerpostmessagevalue-transferlist)
    - [`worker.ref()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerref)
    - [`worker.resourceLimits`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerresourcelimits)
    - [`worker.startCpuProfile()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerstartcpuprofile)
    - [`worker.startHeapProfile()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerstartheapprofile)
    - [`worker.stderr`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerstderr)
    - [`worker.stdin`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerstdin)
    - [`worker.stdout`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerstdout)
    - [`worker.terminate()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerterminate)
    - [`worker.threadId`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerthreadid)
    - [`worker.threadName`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerthreadname)
    - [`worker.unref()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerunref)
    - [`worker[Symbol.asyncDispose]()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workersymbolasyncdispose)
  - [Notes](https://nodejs.org/dist/latest/docs/api/worker_threads.html#notes)
    - [Synchronous blocking of stdio](https://nodejs.org/dist/latest/docs/api/worker_threads.html#synchronous-blocking-of-stdio)
    - [Launching worker threads from preload scripts](https://nodejs.org/dist/latest/docs/api/worker_threads.html#launching-worker-threads-from-preload-scripts)

- [Index](https://nodejs.org/dist/latest/docs/api/worker_threads.html#gtoc-picker)


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

- [Other versions](https://nodejs.org/dist/latest/docs/api/worker_threads.html#alt-docs)


01. [25.x](https://nodejs.org/docs/latest-v25.x/api/worker_threads.html)
02. [24.x **LTS**](https://nodejs.org/docs/latest-v24.x/api/worker_threads.html)
03. [23.x](https://nodejs.org/docs/latest-v23.x/api/worker_threads.html)
04. [22.x **LTS**](https://nodejs.org/docs/latest-v22.x/api/worker_threads.html)
05. [21.x](https://nodejs.org/docs/latest-v21.x/api/worker_threads.html)
06. [20.x **LTS**](https://nodejs.org/docs/latest-v20.x/api/worker_threads.html)
07. [19.x](https://nodejs.org/docs/latest-v19.x/api/worker_threads.html)
08. [18.x](https://nodejs.org/docs/latest-v18.x/api/worker_threads.html)
09. [17.x](https://nodejs.org/docs/latest-v17.x/api/worker_threads.html)
10. [16.x](https://nodejs.org/docs/latest-v16.x/api/worker_threads.html)
11. [15.x](https://nodejs.org/docs/latest-v15.x/api/worker_threads.html)
12. [14.x](https://nodejs.org/docs/latest-v14.x/api/worker_threads.html)
13. [13.x](https://nodejs.org/docs/latest-v13.x/api/worker_threads.html)
14. [12.x](https://nodejs.org/docs/latest-v12.x/api/worker_threads.html)
15. [11.x](https://nodejs.org/docs/latest-v11.x/api/worker_threads.html)
16. [10.x](https://nodejs.org/docs/latest-v10.x/api/worker_threads.html)

- [Options](https://nodejs.org/dist/latest/docs/api/worker_threads.html#options-picker)


- [View on single page](https://nodejs.org/dist/latest/docs/api/all.html)
- [View as JSON](https://nodejs.org/dist/latest/docs/api/worker_threads.json)
- [Edit on GitHub](https://github.com/nodejs/node/edit/main/doc/api/worker_threads.md)

* * *

Table of contents

- [Worker threads](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker-threads)
  - [`worker_threads.getEnvironmentData(key)`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsgetenvironmentdatakey)
  - [`worker_threads.isInternalThread`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsisinternalthread)
  - [`worker_threads.isMainThread`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsismainthread)
  - [`worker_threads.markAsUntransferable(object)`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsmarkasuntransferableobject)
  - [`worker_threads.isMarkedAsUntransferable(object)`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsismarkedasuntransferableobject)
  - [`worker_threads.markAsUncloneable(object)`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsmarkasuncloneableobject)
  - [`worker_threads.moveMessagePortToContext(port, contextifiedSandbox)`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsmovemessageporttocontextport-contextifiedsandbox)
  - [`worker_threads.parentPort`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsparentport)
  - [`worker_threads.postMessageToThread(threadId, value[, transferList][, timeout])`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadspostmessagetothreadthreadid-value-transferlist-timeout)
  - [`worker_threads.receiveMessageOnPort(port)`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsreceivemessageonportport)
  - [`worker_threads.resourceLimits`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsresourcelimits)
  - [`worker_threads.SHARE_ENV`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsshare_env)
  - [`worker_threads.setEnvironmentData(key[, value])`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadssetenvironmentdatakey-value)
  - [`worker_threads.threadId`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsthreadid)
  - [`worker_threads.threadName`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsthreadname)
  - [`worker_threads.workerData`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsworkerdata)
  - [`worker_threads.locks`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadslocks)
    - [Class: `Lock`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-lock)
      - [`lock.name`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#lockname)
      - [`lock.mode`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#lockmode)
    - [Class: `LockManager`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-lockmanager)
      - [`locks.request(name[, options], callback)`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#locksrequestname-options-callback)
      - [`locks.query()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#locksquery)
  - [Class: `BroadcastChannel extends EventTarget`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-broadcastchannel-extends-eventtarget)
    - [`new BroadcastChannel(name)`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#new-broadcastchannelname)
    - [`broadcastChannel.close()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#broadcastchannelclose)
    - [`broadcastChannel.onmessage`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#broadcastchannelonmessage)
    - [`broadcastChannel.onmessageerror`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#broadcastchannelonmessageerror)
    - [`broadcastChannel.postMessage(message)`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#broadcastchannelpostmessagemessage)
    - [`broadcastChannel.ref()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#broadcastchannelref)
    - [`broadcastChannel.unref()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#broadcastchannelunref)
  - [Class: `MessageChannel`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-messagechannel)
  - [Class: `MessagePort`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-messageport)
    - [Event: `'close'`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-close)
    - [Event: `'message'`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-message)
    - [Event: `'messageerror'`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-messageerror)
    - [`port.close()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#portclose)
    - [`port.postMessage(value[, transferList])`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#portpostmessagevalue-transferlist)
      - [Considerations when transferring TypedArrays and Buffers](https://nodejs.org/dist/latest/docs/api/worker_threads.html#considerations-when-transferring-typedarrays-and-buffers)
      - [Considerations when cloning objects with prototypes, classes, and accessors](https://nodejs.org/dist/latest/docs/api/worker_threads.html#considerations-when-cloning-objects-with-prototypes-classes-and-accessors)
    - [`port.hasRef()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#porthasref)
    - [`port.ref()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#portref)
    - [`port.start()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#portstart)
    - [`port.unref()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#portunref)
  - [Class: `Worker`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-worker)
    - [`new Worker(filename[, options])`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#new-workerfilename-options)
    - [Event: `'error'`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-error)
    - [Event: `'exit'`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-exit)
    - [Event: `'message'`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-message_1)
    - [Event: `'messageerror'`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-messageerror_1)
    - [Event: `'online'`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-online)
    - [`worker.cpuUsage([prev])`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workercpuusageprev)
    - [`worker.getHeapSnapshot([options])`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workergetheapsnapshotoptions)
    - [`worker.getHeapStatistics()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workergetheapstatistics)
    - [`worker.performance`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerperformance)
      - [`performance.eventLoopUtilization([utilization1[, utilization2]])`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#performanceeventlooputilizationutilization1-utilization2)
    - [`worker.postMessage(value[, transferList])`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerpostmessagevalue-transferlist)
    - [`worker.ref()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerref)
    - [`worker.resourceLimits`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerresourcelimits)
    - [`worker.startCpuProfile()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerstartcpuprofile)
    - [`worker.startHeapProfile()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerstartheapprofile)
    - [`worker.stderr`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerstderr)
    - [`worker.stdin`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerstdin)
    - [`worker.stdout`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerstdout)
    - [`worker.terminate()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerterminate)
    - [`worker.threadId`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerthreadid)
    - [`worker.threadName`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerthreadname)
    - [`worker.unref()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerunref)
    - [`worker[Symbol.asyncDispose]()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workersymbolasyncdispose)
  - [Notes](https://nodejs.org/dist/latest/docs/api/worker_threads.html#notes)
    - [Synchronous blocking of stdio](https://nodejs.org/dist/latest/docs/api/worker_threads.html#synchronous-blocking-of-stdio)
    - [Launching worker threads from preload scripts](https://nodejs.org/dist/latest/docs/api/worker_threads.html#launching-worker-threads-from-preload-scripts)

## Worker threads[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#worker-threads)

[Stability: 2](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Stable

**Source Code:** [lib/worker\_threads.js](https://github.com/nodejs/node/blob/v25.2.1/lib/worker_threads.js)

The `node:worker_threads` module enables the use of threads that execute
JavaScript in parallel. To access it:

```js
import worker_threads from 'node:worker_threads';'use strict';

const worker_threads = require('node:worker_threads');copy
```

Workers (threads) are useful for performing CPU-intensive JavaScript operations.
They do not help much with I/O-intensive work. The Node.js built-in
asynchronous I/O operations are more efficient than Workers can be.

Unlike `child_process` or `cluster`, `worker_threads` can share memory. They do
so by transferring `ArrayBuffer` instances or sharing `SharedArrayBuffer`
instances.

```js
import {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} from 'node:worker_threads';

if (!isMainThread) {
  const { parse } = await import('some-js-parsing-library');
  const script = workerData;
  parentPort.postMessage(parse(script));
}

export default function parseJSAsync(script) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(new URL(import.meta.url), {
      workerData: script,
    });
    worker.on('message', resolve);
    worker.on('error', reject);
    worker.on('exit', (code) => {
      if (code !== 0)
        reject(new Error(`Worker stopped with exit code ${code}`));
    });
  });
};'use strict';

const {
  Worker,
  isMainThread,
  parentPort,
  workerData,
} = require('node:worker_threads');

if (isMainThread) {
  module.exports = function parseJSAsync(script) {
    return new Promise((resolve, reject) => {
      const worker = new Worker(__filename, {
        workerData: script,
      });
      worker.on('message', resolve);
      worker.on('error', reject);
      worker.on('exit', (code) => {
        if (code !== 0)
          reject(new Error(`Worker stopped with exit code ${code}`));
      });
    });
  };
} else {
  const { parse } = require('some-js-parsing-library');
  const script = workerData;
  parentPort.postMessage(parse(script));
}copy
```

The above example spawns a Worker thread for each `parseJSAsync()` call. In
practice, use a pool of Workers for these kinds of tasks. Otherwise, the
overhead of creating Workers would likely exceed their benefit.

When implementing a worker pool, use the [`AsyncResource`](https://nodejs.org/dist/latest/docs/api/async_hooks.html#class-asyncresource) API to inform
diagnostic tools (e.g. to provide asynchronous stack traces) about the
correlation between tasks and their outcomes. See
["Using `AsyncResource` for a `Worker` thread pool"](https://nodejs.org/dist/latest/docs/api/async_context.html#using-asyncresource-for-a-worker-thread-pool)
in the `async_hooks` documentation for an example implementation.

Worker threads inherit non-process-specific options by default. Refer to
[`Worker constructor options`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#new-workerfilename-options) to know how to customize worker thread options,
specifically `argv` and `execArgv` options.

### `worker_threads.getEnvironmentData(key)`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#worker_threadsgetenvironmentdatakey)

History

| Version | Changes |
| --- | --- |
| v17.5.0, v16.15.0 | No longer experimental. |
| v15.12.0, v14.18.0 | Added in: v15.12.0, v14.18.0 |

- `key` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) Any arbitrary, cloneable JavaScript value that can be used as a
[<Map>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) key.
- Returns: [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)

Within a worker thread, `worker.getEnvironmentData()` returns a clone
of data passed to the spawning thread's `worker.setEnvironmentData()`.
Every new `Worker` receives its own copy of the environment data
automatically.

```js
import {
  Worker,
  isMainThread,
  setEnvironmentData,
  getEnvironmentData,
} from 'node:worker_threads';

if (isMainThread) {
  setEnvironmentData('Hello', 'World!');
  const worker = new Worker(new URL(import.meta.url));
} else {
  console.log(getEnvironmentData('Hello'));  // Prints 'World!'.
}'use strict';

const {
  Worker,
  isMainThread,
  setEnvironmentData,
  getEnvironmentData,
} = require('node:worker_threads');

if (isMainThread) {
  setEnvironmentData('Hello', 'World!');
  const worker = new Worker(__filename);
} else {
  console.log(getEnvironmentData('Hello'));  // Prints 'World!'.
}copy
```

### `worker_threads.isInternalThread`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#worker_threadsisinternalthread)

Added in: v23.7.0, v22.14.0

- Type: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)

Is `true` if this code is running inside of an internal [`Worker`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-worker) thread (e.g the loader thread).

```bash
node --experimental-loader ./loader.js main.js copy
```

```js
// loader.js
import { isInternalThread } from 'node:worker_threads';
console.log(isInternalThread);  // true// loader.js
'use strict';

const { isInternalThread } = require('node:worker_threads');
console.log(isInternalThread);  // truecopy
```

```js
// main.js
import { isInternalThread } from 'node:worker_threads';
console.log(isInternalThread);  // false// main.js
'use strict';

const { isInternalThread } = require('node:worker_threads');
console.log(isInternalThread);  // falsecopy
```

### `worker_threads.isMainThread`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#worker_threadsismainthread)

Added in: v10.5.0

- Type: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)

Is `true` if this code is not running inside of a [`Worker`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-worker) thread.

```js
import { Worker, isMainThread } from 'node:worker_threads';

if (isMainThread) {
  // This re-loads the current file inside a Worker instance.
  new Worker(new URL(import.meta.url));
} else {
  console.log('Inside Worker!');
  console.log(isMainThread);  // Prints 'false'.
}'use strict';

const { Worker, isMainThread } = require('node:worker_threads');

if (isMainThread) {
  // This re-loads the current file inside a Worker instance.
  new Worker(__filename);
} else {
  console.log('Inside Worker!');
  console.log(isMainThread);  // Prints 'false'.
}copy
```

### `worker_threads.markAsUntransferable(object)`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#worker_threadsmarkasuntransferableobject)

Added in: v14.5.0, v12.19.0

- `object` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) Any arbitrary JavaScript value.

Mark an object as not transferable. If `object` occurs in the transfer list of
a [`port.postMessage()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#portpostmessagevalue-transferlist) call, an error is thrown. This is a no-op if
`object` is a primitive value.

In particular, this makes sense for objects that can be cloned, rather than
transferred, and which are used by other objects on the sending side.
For example, Node.js marks the `ArrayBuffer`s it uses for its
[`Buffer` pool](https://nodejs.org/dist/latest/docs/api/buffer.html#static-method-bufferallocunsafesize) with this.

This operation cannot be undone.

```js
import { MessageChannel, markAsUntransferable } from 'node:worker_threads';

const pooledBuffer = new ArrayBuffer(8);
const typedArray1 = new Uint8Array(pooledBuffer);
const typedArray2 = new Float64Array(pooledBuffer);

markAsUntransferable(pooledBuffer);

const { port1 } = new MessageChannel();
try {
  // This will throw an error, because pooledBuffer is not transferable.
  port1.postMessage(typedArray1, [ typedArray1.buffer ]);
} catch (error) {
  // error.name === 'DataCloneError'
}

// The following line prints the contents of typedArray1 -- it still owns
// its memory and has not been transferred. Without
// `markAsUntransferable()`, this would print an empty Uint8Array and the
// postMessage call would have succeeded.
// typedArray2 is intact as well.
console.log(typedArray1);
console.log(typedArray2);'use strict';

const { MessageChannel, markAsUntransferable } = require('node:worker_threads');

const pooledBuffer = new ArrayBuffer(8);
const typedArray1 = new Uint8Array(pooledBuffer);
const typedArray2 = new Float64Array(pooledBuffer);

markAsUntransferable(pooledBuffer);

const { port1 } = new MessageChannel();
try {
  // This will throw an error, because pooledBuffer is not transferable.
  port1.postMessage(typedArray1, [ typedArray1.buffer ]);
} catch (error) {
  // error.name === 'DataCloneError'
}

// The following line prints the contents of typedArray1 -- it still owns
// its memory and has not been transferred. Without
// `markAsUntransferable()`, this would print an empty Uint8Array and the
// postMessage call would have succeeded.
// typedArray2 is intact as well.
console.log(typedArray1);
console.log(typedArray2);copy
```

There is no equivalent to this API in browsers.

### `worker_threads.isMarkedAsUntransferable(object)`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#worker_threadsismarkedasuntransferableobject)

Added in: v21.0.0

- `object` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) Any JavaScript value.
- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)

Check if an object is marked as not transferable with
[`markAsUntransferable()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsmarkasuntransferableobject).

```js
import { markAsUntransferable, isMarkedAsUntransferable } from 'node:worker_threads';

const pooledBuffer = new ArrayBuffer(8);
markAsUntransferable(pooledBuffer);

isMarkedAsUntransferable(pooledBuffer);  // Returns true.'use strict';

const { markAsUntransferable, isMarkedAsUntransferable } = require('node:worker_threads');

const pooledBuffer = new ArrayBuffer(8);
markAsUntransferable(pooledBuffer);

isMarkedAsUntransferable(pooledBuffer);  // Returns true.copy
```

There is no equivalent to this API in browsers.

### `worker_threads.markAsUncloneable(object)`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#worker_threadsmarkasuncloneableobject)

Added in: v23.0.0, v22.10.0

- `object` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) Any arbitrary JavaScript value.

Mark an object as not cloneable. If `object` is used as [`message`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-message) in
a [`port.postMessage()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#portpostmessagevalue-transferlist) call, an error is thrown. This is a no-op if `object` is a
primitive value.

This has no effect on `ArrayBuffer`, or any `Buffer` like objects.

This operation cannot be undone.

```js
import { markAsUncloneable } from 'node:worker_threads';

const anyObject = { foo: 'bar' };
markAsUncloneable(anyObject);
const { port1 } = new MessageChannel();
try {
  // This will throw an error, because anyObject is not cloneable.
  port1.postMessage(anyObject);
} catch (error) {
  // error.name === 'DataCloneError'
}'use strict';

const { markAsUncloneable } = require('node:worker_threads');

const anyObject = { foo: 'bar' };
markAsUncloneable(anyObject);
const { port1 } = new MessageChannel();
try {
  // This will throw an error, because anyObject is not cloneable.
  port1.postMessage(anyObject);
} catch (error) {
  // error.name === 'DataCloneError'
}copy
```

There is no equivalent to this API in browsers.

### `worker_threads.moveMessagePortToContext(port, contextifiedSandbox)`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#worker_threadsmovemessageporttocontextport-contextifiedsandbox)

Added in: v11.13.0

- `port` [<MessagePort>](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-messageport) The message port to transfer.

- `contextifiedSandbox` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) A [contextified](https://nodejs.org/dist/latest/docs/api/vm.html#what-does-it-mean-to-contextify-an-object) object as returned by the
`vm.createContext()` method.

- Returns: [<MessagePort>](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-messageport)


Transfer a `MessagePort` to a different [`vm`](https://nodejs.org/dist/latest/docs/api/vm.html) Context. The original `port`
object is rendered unusable, and the returned `MessagePort` instance
takes its place.

The returned `MessagePort` is an object in the target context and
inherits from its global `Object` class. Objects passed to the
[`port.onmessage()`](https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/onmessage) listener are also created in the target context
and inherit from its global `Object` class.

However, the created `MessagePort` no longer inherits from
[<EventTarget>](https://nodejs.org/dist/latest/docs/api/events.html#class-eventtarget), and only [`port.onmessage()`](https://developer.mozilla.org/en-US/docs/Web/API/MessagePort/onmessage) can be used to receive
events using it.

### `worker_threads.parentPort`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#worker_threadsparentport)

Added in: v10.5.0

- Type: [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#null_type) \| [<MessagePort>](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-messageport)

If this thread is a [`Worker`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-worker), this is a [`MessagePort`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-messageport)
allowing communication with the parent thread. Messages sent using
`parentPort.postMessage()` are available in the parent thread
using `worker.on('message')`, and messages sent from the parent thread
using `worker.postMessage()` are available in this thread using
`parentPort.on('message')`.

```js
import { Worker, isMainThread, parentPort } from 'node:worker_threads';

if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url));
  worker.once('message', (message) => {
    console.log(message);  // Prints 'Hello, world!'.
  });
  worker.postMessage('Hello, world!');
} else {
  // When a message from the parent thread is received, send it back:
  parentPort.once('message', (message) => {
    parentPort.postMessage(message);
  });
}'use strict';

const { Worker, isMainThread, parentPort } = require('node:worker_threads');

if (isMainThread) {
  const worker = new Worker(__filename);
  worker.once('message', (message) => {
    console.log(message);  // Prints 'Hello, world!'.
  });
  worker.postMessage('Hello, world!');
} else {
  // When a message from the parent thread is received, send it back:
  parentPort.once('message', (message) => {
    parentPort.postMessage(message);
  });
}copy
```

### `worker_threads.postMessageToThread(threadId, value[, transferList][, timeout])`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#worker_threadspostmessagetothreadthreadid-value-transferlist-timeout)

Added in: v22.5.0, v20.19.0

[Stability: 1.1](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Active development

- `threadId` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The target thread ID. If the thread ID is invalid, a
[`ERR_WORKER_MESSAGING_FAILED`](https://nodejs.org/dist/latest/docs/api/errors.html#err_worker_messaging_failed) error will be thrown. If the target thread ID is the current thread ID,
a [`ERR_WORKER_MESSAGING_SAME_THREAD`](https://nodejs.org/dist/latest/docs/api/errors.html#err_worker_messaging_same_thread) error will be thrown.
- `value` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) The value to send.
- `transferList` [<Object\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) If one or more `MessagePort`-like objects are passed in `value`,
a `transferList` is required for those items or [`ERR_MISSING_MESSAGE_PORT_IN_TRANSFER_LIST`](https://nodejs.org/dist/latest/docs/api/errors.html#err_missing_message_port_in_transfer_list) is thrown.
See [`port.postMessage()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#portpostmessagevalue-transferlist) for more information.
- `timeout` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) Time to wait for the message to be delivered in milliseconds.
By default it's `undefined`, which means wait forever. If the operation times out,
a [`ERR_WORKER_MESSAGING_TIMEOUT`](https://nodejs.org/dist/latest/docs/api/errors.html#err_worker_messaging_timeout) error is thrown.
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) A promise which is fulfilled if the message was successfully processed by destination thread.

Sends a value to another worker, identified by its thread ID.

If the target thread has no listener for the `workerMessage` event, then the operation will throw
a [`ERR_WORKER_MESSAGING_FAILED`](https://nodejs.org/dist/latest/docs/api/errors.html#err_worker_messaging_failed) error.

If the target thread threw an error while processing the `workerMessage` event, then the operation will throw
a [`ERR_WORKER_MESSAGING_ERRORED`](https://nodejs.org/dist/latest/docs/api/errors.html#err_worker_messaging_errored) error.

This method should be used when the target thread is not the direct
parent or child of the current thread.
If the two threads are parent-children, use the [`require('node:worker_threads').parentPort.postMessage()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerpostmessagevalue-transferlist)
and the [`worker.postMessage()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerpostmessagevalue-transferlist) to let the threads communicate.

The example below shows the use of of `postMessageToThread`: it creates 10 nested threads,
the last one will try to communicate with the main thread.

```js
import process from 'node:process';
import {
  postMessageToThread,
  threadId,
  workerData,
  Worker,
} from 'node:worker_threads';

const channel = new BroadcastChannel('sync');
const level = workerData?.level ?? 0;

if (level < 10) {
  const worker = new Worker(new URL(import.meta.url), {
    workerData: { level: level + 1 },
  });
}

if (level === 0) {
  process.on('workerMessage', (value, source) => {
    console.log(`${source} -> ${threadId}:`, value);
    postMessageToThread(source, { message: 'pong' });
  });
} else if (level === 10) {
  process.on('workerMessage', (value, source) => {
    console.log(`${source} -> ${threadId}:`, value);
    channel.postMessage('done');
    channel.close();
  });

  await postMessageToThread(0, { message: 'ping' });
}

channel.onmessage = channel.close;'use strict';

const process = require('node:process');
const {
  postMessageToThread,
  threadId,
  workerData,
  Worker,
} = require('node:worker_threads');

const channel = new BroadcastChannel('sync');
const level = workerData?.level ?? 0;

if (level < 10) {
  const worker = new Worker(__filename, {
    workerData: { level: level + 1 },
  });
}

if (level === 0) {
  process.on('workerMessage', (value, source) => {
    console.log(`${source} -> ${threadId}:`, value);
    postMessageToThread(source, { message: 'pong' });
  });
} else if (level === 10) {
  process.on('workerMessage', (value, source) => {
    console.log(`${source} -> ${threadId}:`, value);
    channel.postMessage('done');
    channel.close();
  });

  postMessageToThread(0, { message: 'ping' });
}

channel.onmessage = channel.close;copy
```

### `worker_threads.receiveMessageOnPort(port)`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#worker_threadsreceivemessageonportport)

History

| Version | Changes |
| --- | --- |
| v15.12.0 | The port argument can also refer to a `BroadcastChannel` now. |
| v12.3.0 | Added in: v12.3.0 |

- `port` [<MessagePort>](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-messageport) \| [<BroadcastChannel>](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-broadcastchannel-extends-eventtarget)

- Returns: [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) \| [<undefined>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type)


Receive a single message from a given `MessagePort`. If no message is available,
`undefined` is returned, otherwise an object with a single `message` property
that contains the message payload, corresponding to the oldest message in the
`MessagePort`'s queue.

```js
import { MessageChannel, receiveMessageOnPort } from 'node:worker_threads';
const { port1, port2 } = new MessageChannel();
port1.postMessage({ hello: 'world' });

console.log(receiveMessageOnPort(port2));
// Prints: { message: { hello: 'world' } }
console.log(receiveMessageOnPort(port2));
// Prints: undefined'use strict';

const { MessageChannel, receiveMessageOnPort } = require('node:worker_threads');
const { port1, port2 } = new MessageChannel();
port1.postMessage({ hello: 'world' });

console.log(receiveMessageOnPort(port2));
// Prints: { message: { hello: 'world' } }
console.log(receiveMessageOnPort(port2));
// Prints: undefinedcopy
```

When this function is used, no `'message'` event is emitted and the
`onmessage` listener is not invoked.

### `worker_threads.resourceLimits`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#worker_threadsresourcelimits)

Added in: v13.2.0, v12.16.0

- Type: [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `maxYoungGenerationSizeMb` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
  - `maxOldGenerationSizeMb` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
  - `codeRangeSizeMb` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
  - `stackSizeMb` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Provides the set of JS engine resource constraints inside this Worker thread.
If the `resourceLimits` option was passed to the [`Worker`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-worker) constructor,
this matches its values.

If this is used in the main thread, its value is an empty object.

### `worker_threads.SHARE_ENV`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#worker_threadsshare_env)

Added in: v11.14.0

- Type: [<symbol>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#symbol_type)

A special value that can be passed as the `env` option of the [`Worker`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-worker)
constructor, to indicate that the current thread and the Worker thread should
share read and write access to the same set of environment variables.

```js
import process from 'node:process';
import { Worker, SHARE_ENV } from 'node:worker_threads';
new Worker('process.env.SET_IN_WORKER = "foo"', { eval: true, env: SHARE_ENV })
  .on('exit', () => {
    console.log(process.env.SET_IN_WORKER);  // Prints 'foo'.
  });'use strict';

const { Worker, SHARE_ENV } = require('node:worker_threads');
new Worker('process.env.SET_IN_WORKER = "foo"', { eval: true, env: SHARE_ENV })
  .on('exit', () => {
    console.log(process.env.SET_IN_WORKER);  // Prints 'foo'.
  });copy
```

### `worker_threads.setEnvironmentData(key[, value])`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#worker_threadssetenvironmentdatakey-value)

History

| Version | Changes |
| --- | --- |
| v17.5.0, v16.15.0 | No longer experimental. |
| v15.12.0, v14.18.0 | Added in: v15.12.0, v14.18.0 |

- `key` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) Any arbitrary, cloneable JavaScript value that can be used as a
[<Map>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) key.
- `value` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) Any arbitrary, cloneable JavaScript value that will be cloned
and passed automatically to all new `Worker` instances. If `value` is passed
as `undefined`, any previously set value for the `key` will be deleted.

The `worker.setEnvironmentData()` API sets the content of
`worker.getEnvironmentData()` in the current thread and all new `Worker`
instances spawned from the current context.

### `worker_threads.threadId`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#worker_threadsthreadid)

Added in: v10.5.0

- Type: [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

An integer identifier for the current thread. On the corresponding worker object
(if there is any), it is available as [`worker.threadId`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerthreadid).
This value is unique for each [`Worker`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-worker) instance inside a single process.

### `worker_threads.threadName`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#worker_threadsthreadname)

Added in: v24.6.0, v22.20.0

- [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#null_type)

A string identifier for the current thread or null if the thread is not running.
On the corresponding worker object (if there is any), it is available as [`worker.threadName`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerthreadname).

### `worker_threads.workerData`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#worker_threadsworkerdata)

Added in: v10.5.0

An arbitrary JavaScript value that contains a clone of the data passed
to this thread's `Worker` constructor.

The data is cloned as if using [`postMessage()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#portpostmessagevalue-transferlist),
according to the [HTML structured clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

```js
import { Worker, isMainThread, workerData } from 'node:worker_threads';

if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url), { workerData: 'Hello, world!' });
} else {
  console.log(workerData);  // Prints 'Hello, world!'.
}'use strict';

const { Worker, isMainThread, workerData } = require('node:worker_threads');

if (isMainThread) {
  const worker = new Worker(__filename, { workerData: 'Hello, world!' });
} else {
  console.log(workerData);  // Prints 'Hello, world!'.
}copy
```

### `worker_threads.locks`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#worker_threadslocks)

Added in: v24.5.0

[Stability: 1](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Experimental

- [<LockManager>](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-lockmanager)

An instance of a [`LockManager`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-lockmanager) that can be used to coordinate
access to resources that may be shared across multiple threads within the same
process. The API mirrors the semantics of the
[browser `LockManager`](https://developer.mozilla.org/en-US/docs/Web/API/LockManager)

#### Class: `Lock`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#class-lock)

Added in: v24.5.0

The `Lock` interface provides information about a lock that has been granted via
[`locks.request()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#locksrequestname-options-callback)

##### `lock.name`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#lockname)

Added in: v24.5.0

- [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

The name of the lock.

##### `lock.mode`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#lockmode)

Added in: v24.5.0

- [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

The mode of the lock. Either `shared` or `exclusive`.

#### Class: `LockManager`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#class-lockmanager)

Added in: v24.5.0

The `LockManager` interface provides methods for requesting and introspecting
locks. To obtain a `LockManager` instance use

```js
import { locks } from 'node:worker_threads';'use strict';

const { locks } = require('node:worker_threads');copy
```

This implementation matches the [browser `LockManager`](https://developer.mozilla.org/en-US/docs/Web/API/LockManager) API.

##### `locks.request(name[, options], callback)`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#locksrequestname-options-callback)

Added in: v24.5.0

- `name` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `mode` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Either `'exclusive'` or `'shared'`. **Default:**`'exclusive'`.
  - `ifAvailable` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) If `true`, the request will only be granted if the
    lock is not already held. If it cannot be granted, `callback` will be
    invoked with `null` instead of a `Lock` instance. **Default:**`false`.
  - `steal` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) If `true`, any existing locks with the same name are
    released and the request is granted immediately, pre-empting any queued
    requests. **Default:**`false`.
  - `signal` [<AbortSignal>](https://nodejs.org/dist/latest/docs/api/globals.html#class-abortsignal) that can be used to abort a
    pending (but not yet granted) lock request.
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Invoked once the lock is granted (or immediately with
`null` if `ifAvailable` is `true` and the lock is unavailable). The lock is
released automatically when the function returns, or—if the function returns
a promise—when that promise settles.
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Resolves once the lock has been released.

```js
import { locks } from 'node:worker_threads';

await locks.request('my_resource', async (lock) => {
  // The lock has been acquired.
});
// The lock has been released here.'use strict';

const { locks } = require('node:worker_threads');

locks.request('my_resource', async (lock) => {
  // The lock has been acquired.
}).then(() => {
  // The lock has been released here.
});copy
```

##### `locks.query()`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#locksquery)

Added in: v24.5.0

- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Resolves with a `LockManagerSnapshot` describing the currently held and pending
locks for the current process.

```js
import { locks } from 'node:worker_threads';

const snapshot = await locks.query();
for (const lock of snapshot.held) {
  console.log(`held lock: name ${lock.name}, mode ${lock.mode}`);
}
for (const pending of snapshot.pending) {
  console.log(`pending lock: name ${pending.name}, mode ${pending.mode}`);
}'use strict';

const { locks } = require('node:worker_threads');

locks.query().then((snapshot) => {
  for (const lock of snapshot.held) {
    console.log(`held lock: name ${lock.name}, mode ${lock.mode}`);
  }
  for (const pending of snapshot.pending) {
    console.log(`pending lock: name ${pending.name}, mode ${pending.mode}`);
  }
});copy
```

### Class: `BroadcastChannel extends EventTarget`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#class-broadcastchannel-extends-eventtarget)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | No longer experimental. |
| v15.4.0 | Added in: v15.4.0 |

Instances of `BroadcastChannel` allow asynchronous one-to-many communication
with all other `BroadcastChannel` instances bound to the same channel name.

```js
import {
  isMainThread,
  BroadcastChannel,
  Worker,
} from 'node:worker_threads';

const bc = new BroadcastChannel('hello');

if (isMainThread) {
  let c = 0;
  bc.onmessage = (event) => {
    console.log(event.data);
    if (++c === 10) bc.close();
  };
  for (let n = 0; n < 10; n++)
    new Worker(new URL(import.meta.url));
} else {
  bc.postMessage('hello from every worker');
  bc.close();
}'use strict';

const {
  isMainThread,
  BroadcastChannel,
  Worker,
} = require('node:worker_threads');

const bc = new BroadcastChannel('hello');

if (isMainThread) {
  let c = 0;
  bc.onmessage = (event) => {
    console.log(event.data);
    if (++c === 10) bc.close();
  };
  for (let n = 0; n < 10; n++)
    new Worker(__filename);
} else {
  bc.postMessage('hello from every worker');
  bc.close();
}copy
```

#### `new BroadcastChannel(name)`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#new-broadcastchannelname)

Added in: v15.4.0

- `name` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) The name of the channel to connect to. Any JavaScript value
that can be converted to a string using ```${name}``` is permitted.

#### `broadcastChannel.close()`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#broadcastchannelclose)

Added in: v15.4.0

Closes the `BroadcastChannel` connection.

#### `broadcastChannel.onmessage`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#broadcastchannelonmessage)

Added in: v15.4.0

- Type: [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Invoked with a single `MessageEvent` argument
when a message is received.

#### `broadcastChannel.onmessageerror`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#broadcastchannelonmessageerror)

Added in: v15.4.0

- Type: [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Invoked with a received message cannot be
deserialized.

#### `broadcastChannel.postMessage(message)`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#broadcastchannelpostmessagemessage)

Added in: v15.4.0

- `message` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) Any cloneable JavaScript value.

#### `broadcastChannel.ref()`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#broadcastchannelref)

Added in: v15.4.0

Opposite of `unref()`. Calling `ref()` on a previously `unref()`ed
BroadcastChannel does _not_ let the program exit if it's the only active handle
left (the default behavior). If the port is `ref()`ed, calling `ref()` again
has no effect.

#### `broadcastChannel.unref()`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#broadcastchannelunref)

Added in: v15.4.0

Calling `unref()` on a BroadcastChannel allows the thread to exit if this
is the only active handle in the event system. If the BroadcastChannel is
already `unref()`ed calling `unref()` again has no effect.

### Class: `MessageChannel`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#class-messagechannel)

Added in: v10.5.0

Instances of the `worker.MessageChannel` class represent an asynchronous,
two-way communications channel.
The `MessageChannel` has no methods of its own. `new MessageChannel()`
yields an object with `port1` and `port2` properties, which refer to linked
[`MessagePort`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-messageport) instances.

```js
import { MessageChannel } from 'node:worker_threads';

const { port1, port2 } = new MessageChannel();
port1.on('message', (message) => console.log('received', message));
port2.postMessage({ foo: 'bar' });
// Prints: received { foo: 'bar' } from the `port1.on('message')` listener'use strict';

const { MessageChannel } = require('node:worker_threads');

const { port1, port2 } = new MessageChannel();
port1.on('message', (message) => console.log('received', message));
port2.postMessage({ foo: 'bar' });
// Prints: received { foo: 'bar' } from the `port1.on('message')` listenercopy
```

### Class: `MessagePort`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#class-messageport)

History

| Version | Changes |
| --- | --- |
| v14.7.0 | This class now inherits from `EventTarget` rather than from `EventEmitter`. |
| v10.5.0 | Added in: v10.5.0 |

- Extends: [<EventTarget>](https://nodejs.org/dist/latest/docs/api/events.html#class-eventtarget)

Instances of the `worker.MessagePort` class represent one end of an
asynchronous, two-way communications channel. It can be used to transfer
structured data, memory regions and other `MessagePort`s between different
[`Worker`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-worker) s.

This implementation matches [browser `MessagePort`](https://developer.mozilla.org/en-US/docs/Web/API/MessagePort) s.

#### Event: `'close'`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#event-close)

Added in: v10.5.0

The `'close'` event is emitted once either side of the channel has been
disconnected.

```js
import { MessageChannel } from 'node:worker_threads';
const { port1, port2 } = new MessageChannel();

// Prints:
//   foobar
//   closed!
port2.on('message', (message) => console.log(message));
port2.on('close', () => console.log('closed!'));

port1.postMessage('foobar');
port1.close();'use strict';

const { MessageChannel } = require('node:worker_threads');
const { port1, port2 } = new MessageChannel();

// Prints:
//   foobar
//   closed!
port2.on('message', (message) => console.log(message));
port2.on('close', () => console.log('closed!'));

port1.postMessage('foobar');
port1.close();copy
```

#### Event: `'message'`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#event-message)

Added in: v10.5.0

- `value` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) The transmitted value

The `'message'` event is emitted for any incoming message, containing the cloned
input of [`port.postMessage()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#portpostmessagevalue-transferlist).

Listeners on this event receive a clone of the `value` parameter as passed
to `postMessage()` and no further arguments.

#### Event: `'messageerror'`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#event-messageerror)

Added in: v14.5.0, v12.19.0

- `error` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) An Error object

The `'messageerror'` event is emitted when deserializing a message failed.

Currently, this event is emitted when there is an error occurring while
instantiating the posted JS object on the receiving end. Such situations
are rare, but can happen, for instance, when certain Node.js API objects
are received in a `vm.Context` (where Node.js APIs are currently
unavailable).

#### `port.close()`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#portclose)

Added in: v10.5.0

Disables further sending of messages on either side of the connection.
This method can be called when no further communication will happen over this
`MessagePort`.

The [`'close'` event](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-close) is emitted on both `MessagePort` instances that
are part of the channel.

#### `port.postMessage(value[, transferList])`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#portpostmessagevalue-transferlist)

History

| Version | Changes |
| --- | --- |
| v21.0.0 | An error is thrown when an untransferable object is in the transfer list. |
| v15.6.0 | Added `X509Certificate` to the list of cloneable types. |
| v15.0.0 | Added `CryptoKey` to the list of cloneable types. |
| v15.14.0, v14.18.0 | Add 'BlockList' to the list of cloneable types. |
| v15.9.0, v14.18.0 | Add 'Histogram' types to the list of cloneable types. |
| v14.5.0, v12.19.0 | Added `KeyObject` to the list of cloneable types. |
| v14.5.0, v12.19.0 | Added `FileHandle` to the list of transferable types. |
| v10.5.0 | Added in: v10.5.0 |

- `value` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)
- `transferList` [<Object\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Sends a JavaScript value to the receiving side of this channel.
`value` is transferred in a way which is compatible with
the [HTML structured clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).

In particular, the significant differences to `JSON` are:

- `value` may contain circular references.
- `value` may contain instances of builtin JS types such as `RegExp`s,
`BigInt`s, `Map`s, `Set`s, etc.
- `value` may contain typed arrays, both using `ArrayBuffer`s
and `SharedArrayBuffer`s.
- `value` may contain [`WebAssembly.Module`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Module) instances.
- `value` may not contain native (C++-backed) objects other than:

  - [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey) s,
  - [<FileHandle>](https://nodejs.org/dist/latest/docs/api/fs.html#class-filehandle) s,
  - [<Histogram>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-histogram) s,
  - [<KeyObject>](https://nodejs.org/dist/latest/docs/api/crypto.html#class-keyobject) s,
  - [<MessagePort>](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-messageport) s,
  - [<net.BlockList>](https://nodejs.org/dist/latest/docs/api/net.html#class-netblocklist) s,
  - [<net.SocketAddress>](https://nodejs.org/dist/latest/docs/api/net.html#class-netsocketaddress) es,
  - [<X509Certificate>](https://nodejs.org/dist/latest/docs/api/crypto.html#class-x509certificate) s.

```js
import { MessageChannel } from 'node:worker_threads';
const { port1, port2 } = new MessageChannel();

port1.on('message', (message) => console.log(message));

const circularData = {};
circularData.foo = circularData;
// Prints: { foo: [Circular] }
port2.postMessage(circularData);'use strict';

const { MessageChannel } = require('node:worker_threads');
const { port1, port2 } = new MessageChannel();

port1.on('message', (message) => console.log(message));

const circularData = {};
circularData.foo = circularData;
// Prints: { foo: [Circular] }
port2.postMessage(circularData);copy
```

`transferList` may be a list of [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer), [`MessagePort`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-messageport), and
[`FileHandle`](https://nodejs.org/dist/latest/docs/api/fs.html#class-filehandle) objects.
After transferring, they are not usable on the sending side of the channel
anymore (even if they are not contained in `value`). Unlike with
[child processes](https://nodejs.org/dist/latest/docs/api/child_process.html), transferring handles such as network sockets is currently
not supported.

If `value` contains [<SharedArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer) instances, those are accessible
from either thread. They cannot be listed in `transferList`.

`value` may still contain `ArrayBuffer` instances that are not in
`transferList`; in that case, the underlying memory is copied rather than moved.

```js
import { MessageChannel } from 'node:worker_threads';
const { port1, port2 } = new MessageChannel();

port1.on('message', (message) => console.log(message));

const uint8Array = new Uint8Array([ 1, 2, 3, 4 ]);
// This posts a copy of `uint8Array`:
port2.postMessage(uint8Array);
// This does not copy data, but renders `uint8Array` unusable:
port2.postMessage(uint8Array, [ uint8Array.buffer ]);

// The memory for the `sharedUint8Array` is accessible from both the
// original and the copy received by `.on('message')`:
const sharedUint8Array = new Uint8Array(new SharedArrayBuffer(4));
port2.postMessage(sharedUint8Array);

// This transfers a freshly created message port to the receiver.
// This can be used, for example, to create communication channels between
// multiple `Worker` threads that are children of the same parent thread.
const otherChannel = new MessageChannel();
port2.postMessage({ port: otherChannel.port1 }, [ otherChannel.port1 ]);'use strict';

const { MessageChannel } = require('node:worker_threads');
const { port1, port2 } = new MessageChannel();

port1.on('message', (message) => console.log(message));

const uint8Array = new Uint8Array([ 1, 2, 3, 4 ]);
// This posts a copy of `uint8Array`:
port2.postMessage(uint8Array);
// This does not copy data, but renders `uint8Array` unusable:
port2.postMessage(uint8Array, [ uint8Array.buffer ]);

// The memory for the `sharedUint8Array` is accessible from both the
// original and the copy received by `.on('message')`:
const sharedUint8Array = new Uint8Array(new SharedArrayBuffer(4));
port2.postMessage(sharedUint8Array);

// This transfers a freshly created message port to the receiver.
// This can be used, for example, to create communication channels between
// multiple `Worker` threads that are children of the same parent thread.
const otherChannel = new MessageChannel();
port2.postMessage({ port: otherChannel.port1 }, [ otherChannel.port1 ]);copy
```

The message object is cloned immediately, and can be modified after
posting without having side effects.

For more information on the serialization and deserialization mechanisms
behind this API, see the [serialization API of the `node:v8` module](https://nodejs.org/dist/latest/docs/api/v8.html#serialization-api).

##### Considerations when transferring TypedArrays and Buffers[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#considerations-when-transferring-typedarrays-and-buffers)

All [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) instances are views over an underlying
[<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer). That is, it is the `ArrayBuffer` that actually stores
the raw data while the `TypedArray` and `Buffer` objects provide a
way of viewing and manipulating the data. It is possible and common
for multiple views to be created over the same `ArrayBuffer` instance.
Great care must be taken when using a transfer list to transfer an
`ArrayBuffer` as doing so causes all `TypedArray` and `Buffer`
instances that share that same `ArrayBuffer` to become unusable.

```js
const ab = new ArrayBuffer(10);

const u1 = new Uint8Array(ab);
const u2 = new Uint16Array(ab);

console.log(u2.length);  // prints 5

port.postMessage(u1, [u1.buffer]);

console.log(u2.length);  // prints 0 copy
```

For `Buffer` instances, specifically, whether the underlying
`ArrayBuffer` can be transferred or cloned depends entirely on how
instances were created, which often cannot be reliably determined.

An `ArrayBuffer` can be marked with [`markAsUntransferable()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsmarkasuntransferableobject) to indicate
that it should always be cloned and never transferred.

Depending on how a `Buffer` instance was created, it may or may
not own its underlying `ArrayBuffer`. An `ArrayBuffer` must not
be transferred unless it is known that the `Buffer` instance
owns it. In particular, for `Buffer`s created from the internal
`Buffer` pool (using, for instance `Buffer.from()` or `Buffer.allocUnsafe()`),
transferring them is not possible and they are always cloned,
which sends a copy of the entire `Buffer` pool.
This behavior may come with unintended higher memory
usage and possible security concerns.

See [`Buffer.allocUnsafe()`](https://nodejs.org/dist/latest/docs/api/buffer.html#static-method-bufferallocunsafesize) for more details on `Buffer` pooling.

The `ArrayBuffer`s for `Buffer` instances created using
`Buffer.alloc()` or `Buffer.allocUnsafeSlow()` can always be
transferred but doing so renders all other existing views of
those `ArrayBuffer`s unusable.

##### Considerations when cloning objects with prototypes, classes, and accessors[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#considerations-when-cloning-objects-with-prototypes-classes-and-accessors)

Because object cloning uses the [HTML structured clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm),
non-enumerable properties, property accessors, and object prototypes are
not preserved. In particular, [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) objects will be read as
plain [<Uint8Array>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) s on the receiving side, and instances of JavaScript
classes will be cloned as plain JavaScript objects.

```js
const b = Symbol('b');

class Foo {
  #a = 1;
  constructor() {
    this[b] = 2;
    this.c = 3;
  }

  get d() { return 4; }
}

const { port1, port2 } = new MessageChannel();

port1.onmessage = ({ data }) => console.log(data);

port2.postMessage(new Foo());

// Prints: { c: 3 } copy
```

This limitation extends to many built-in objects, such as the global `URL`
object:

```js
const { port1, port2 } = new MessageChannel();

port1.onmessage = ({ data }) => console.log(data);

port2.postMessage(new URL('https://example.org'));

// Prints: { } copy
```

#### `port.hasRef()`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#porthasref)

History

| Version | Changes |
| --- | --- |
| v24.0.0, v22.17.0 | Marking the API stable. |
| v18.1.0, v16.17.0 | Added in: v18.1.0, v16.17.0 |

- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)

If true, the `MessagePort` object will keep the Node.js event loop active.

#### `port.ref()`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#portref)

Added in: v10.5.0

Opposite of `unref()`. Calling `ref()` on a previously `unref()`ed port does
_not_ let the program exit if it's the only active handle left (the default
behavior). If the port is `ref()`ed, calling `ref()` again has no effect.

If listeners are attached or removed using `.on('message')`, the port
is `ref()`ed and `unref()`ed automatically depending on whether
listeners for the event exist.

#### `port.start()`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#portstart)

Added in: v10.5.0

Starts receiving messages on this `MessagePort`. When using this port
as an event emitter, this is called automatically once `'message'`
listeners are attached.

This method exists for parity with the Web `MessagePort` API. In Node.js,
it is only useful for ignoring messages when no event listener is present.
Node.js also diverges in its handling of `.onmessage`. Setting it
automatically calls `.start()`, but unsetting it lets messages queue up
until a new handler is set or the port is discarded.

#### `port.unref()`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#portunref)

Added in: v10.5.0

Calling `unref()` on a port allows the thread to exit if this is the only
active handle in the event system. If the port is already `unref()`ed calling
`unref()` again has no effect.

If listeners are attached or removed using `.on('message')`, the port is
`ref()`ed and `unref()`ed automatically depending on whether
listeners for the event exist.

### Class: `Worker`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#class-worker)

Added in: v10.5.0

- Extends: [<EventEmitter>](https://nodejs.org/dist/latest/docs/api/events.html#class-eventemitter)

The `Worker` class represents an independent JavaScript execution thread.
Most Node.js APIs are available inside of it.

Notable differences inside a Worker environment are:

- The [`process.stdin`](https://nodejs.org/dist/latest/docs/api/process.html#processstdin), [`process.stdout`](https://nodejs.org/dist/latest/docs/api/process.html#processstdout), and [`process.stderr`](https://nodejs.org/dist/latest/docs/api/process.html#processstderr)
streams may be redirected by the parent thread.
- The [`require('node:worker_threads').isMainThread`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsismainthread) property is set to `false`.
- The [`require('node:worker_threads').parentPort`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsparentport) message port is available.
- [`process.exit()`](https://nodejs.org/dist/latest/docs/api/process.html#processexitcode) does not stop the whole program, just the single thread,
and [`process.abort()`](https://nodejs.org/dist/latest/docs/api/process.html#processabort) is not available.
- [`process.chdir()`](https://nodejs.org/dist/latest/docs/api/process.html#processchdirdirectory) and `process` methods that set group or user ids
are not available.
- [`process.env`](https://nodejs.org/dist/latest/docs/api/process.html#processenv) is a copy of the parent thread's environment variables,
unless otherwise specified. Changes to one copy are not visible in other
threads, and are not visible to native add-ons (unless
[`worker.SHARE_ENV`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsshare_env) is passed as the `env` option to the
[`Worker`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-worker) constructor). On Windows, unlike the main thread, a copy of the
environment variables operates in a case-sensitive manner.
- [`process.title`](https://nodejs.org/dist/latest/docs/api/process.html#processtitle) cannot be modified.
- Signals are not delivered through [`process.on('...')`](https://nodejs.org/dist/latest/docs/api/process.html#signal-events).
- Execution may stop at any point as a result of [`worker.terminate()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerterminate)
being invoked.
- IPC channels from parent processes are not accessible.
- The [`trace_events`](https://nodejs.org/dist/latest/docs/api/tracing.html) module is not supported.
- Native add-ons can only be loaded from multiple threads if they fulfill
[certain conditions](https://nodejs.org/dist/latest/docs/api/addons.html#worker-support).

Creating `Worker` instances inside of other `Worker`s is possible.

Like [Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API) and the [`node:cluster` module](https://nodejs.org/dist/latest/docs/api/cluster.html), two-way communication
can be achieved through inter-thread message passing. Internally, a `Worker` has
a built-in pair of [`MessagePort`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-messageport) s that are already associated with each
other when the `Worker` is created. While the `MessagePort` object on the parent
side is not directly exposed, its functionalities are exposed through
[`worker.postMessage()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerpostmessagevalue-transferlist) and the [`worker.on('message')`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-message_1) event
on the `Worker` object for the parent thread.

To create custom messaging channels (which is encouraged over using the default
global channel because it facilitates separation of concerns), users can create
a `MessageChannel` object on either thread and pass one of the
`MessagePort`s on that `MessageChannel` to the other thread through a
pre-existing channel, such as the global one.

See [`port.postMessage()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#portpostmessagevalue-transferlist) for more information on how messages are passed,
and what kind of JavaScript values can be successfully transported through
the thread barrier.

```js
import assert from 'node:assert';
import {
  Worker, MessageChannel, MessagePort, isMainThread, parentPort,
} from 'node:worker_threads';
if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url));
  const subChannel = new MessageChannel();
  worker.postMessage({ hereIsYourPort: subChannel.port1 }, [subChannel.port1]);
  subChannel.port2.on('message', (value) => {
    console.log('received:', value);
  });
} else {
  parentPort.once('message', (value) => {
    assert(value.hereIsYourPort instanceof MessagePort);
    value.hereIsYourPort.postMessage('the worker is sending this');
    value.hereIsYourPort.close();
  });
}'use strict';

const assert = require('node:assert');
const {
  Worker, MessageChannel, MessagePort, isMainThread, parentPort,
} = require('node:worker_threads');
if (isMainThread) {
  const worker = new Worker(__filename);
  const subChannel = new MessageChannel();
  worker.postMessage({ hereIsYourPort: subChannel.port1 }, [subChannel.port1]);
  subChannel.port2.on('message', (value) => {
    console.log('received:', value);
  });
} else {
  parentPort.once('message', (value) => {
    assert(value.hereIsYourPort instanceof MessagePort);
    value.hereIsYourPort.postMessage('the worker is sending this');
    value.hereIsYourPort.close();
  });
}copy
```

#### `new Worker(filename[, options])`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#new-workerfilename-options)

History

| Version | Changes |
| --- | --- |
| v19.8.0, v18.16.0 | Added support for a `name` option, which allows adding a name to worker title for debugging. |
| v14.9.0 | The `filename` parameter can be a WHATWG `URL` object using `data:` protocol. |
| v14.9.0 | The `trackUnmanagedFds` option was set to `true` by default. |
| v14.6.0, v12.19.0 | The `trackUnmanagedFds` option was introduced. |
| v13.13.0, v12.17.0 | The `transferList` option was introduced. |
| v13.12.0, v12.17.0 | The `filename` parameter can be a WHATWG `URL` object using `file:` protocol. |
| v13.4.0, v12.16.0 | The `argv` option was introduced. |
| v13.2.0, v12.16.0 | The `resourceLimits` option was introduced. |
| v10.5.0 | Added in: v10.5.0 |

- `filename` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<URL>](https://nodejs.org/dist/latest/docs/api/url.html#the-whatwg-url-api) The path to the Worker's main script or module. Must
be either an absolute path or a relative path (i.e. relative to the
current working directory) starting with `./` or `../`, or a WHATWG `URL`
object using `file:` or `data:` protocol.
When using a [`data:` URL](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URIs), the data is interpreted based on MIME type using
the [ECMAScript module loader](https://nodejs.org/dist/latest/docs/api/esm.html#data-imports).
If `options.eval` is `true`, this is a string containing JavaScript code
rather than a path.
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `argv` [<any\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) List of arguments which would be stringified and appended to
    `process.argv` in the worker. This is mostly similar to the `workerData`
    but the values are available on the global `process.argv` as if they
    were passed as CLI options to the script.
  - `env` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) If set, specifies the initial value of `process.env` inside
    the Worker thread. As a special value, [`worker.SHARE_ENV`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsshare_env) may be used
    to specify that the parent thread and the child thread should share their
    environment variables; in that case, changes to one thread's `process.env`
    object affect the other thread as well. **Default:**`process.env`.
  - `eval` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) If `true` and the first argument is a `string`, interpret
    the first argument to the constructor as a script that is executed once the
    worker is online.
  - `execArgv` [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) List of node CLI options passed to the worker.
    V8 options (such as `--max-old-space-size`) and options that affect the
    process (such as `--title`) are not supported. If set, this is provided
    as [`process.execArgv`](https://nodejs.org/dist/latest/docs/api/process.html#processexecargv) inside the worker. By default, options are
    inherited from the parent thread.
  - `stdin` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) If this is set to `true`, then `worker.stdin`
    provides a writable stream whose contents appear as `process.stdin`
    inside the Worker. By default, no data is provided.
  - `stdout` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) If this is set to `true`, then `worker.stdout` is
    not automatically piped through to `process.stdout` in the parent.
  - `stderr` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) If this is set to `true`, then `worker.stderr` is
    not automatically piped through to `process.stderr` in the parent.
  - `workerData` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) Any JavaScript value that is cloned and made
    available as [`require('node:worker_threads').workerData`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsworkerdata). The cloning
    occurs as described in the [HTML structured clone algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API/Structured_clone_algorithm), and an error
    is thrown if the object cannot be cloned (e.g. because it contains
    `function`s).
  - `trackUnmanagedFds` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) If this is set to `true`, then the Worker
    tracks raw file descriptors managed through [`fs.open()`](https://nodejs.org/dist/latest/docs/api/fs.html#fsopenpath-flags-mode-callback) and
    [`fs.close()`](https://nodejs.org/dist/latest/docs/api/fs.html#fsclosefd-callback), and closes them when the Worker exits, similar to other
    resources like network sockets or file descriptors managed through
    the [`FileHandle`](https://nodejs.org/dist/latest/docs/api/fs.html#class-filehandle) API. This option is automatically inherited by all
    nested `Worker`s. **Default:**`true`.
  - `transferList` [<Object\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) If one or more `MessagePort`-like objects
    are passed in `workerData`, a `transferList` is required for those
    items or [`ERR_MISSING_MESSAGE_PORT_IN_TRANSFER_LIST`](https://nodejs.org/dist/latest/docs/api/errors.html#err_missing_message_port_in_transfer_list) is thrown.
    See [`port.postMessage()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#portpostmessagevalue-transferlist) for more information.
  - `resourceLimits` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) An optional set of resource limits for the new JS
    engine instance. Reaching these limits leads to termination of the `Worker`
    instance. These limits only affect the JS engine, and no external data,
    including no `ArrayBuffer`s. Even if these limits are set, the process may
    still abort if it encounters a global out-of-memory situation.

    - `maxOldGenerationSizeMb` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The maximum size of the main heap in
      MB. If the command-line argument [`--max-old-space-size`](https://nodejs.org/dist/latest/docs/api/cli.html#--max-old-space-sizesize-in-mib) is set, it
      overrides this setting.
    - `maxYoungGenerationSizeMb` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The maximum size of a heap space for
      recently created objects. If the command-line argument
      [`--max-semi-space-size`](https://nodejs.org/dist/latest/docs/api/cli.html#--max-semi-space-sizesize-in-mib) is set, it overrides this setting.
    - `codeRangeSizeMb` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The size of a pre-allocated memory range
      used for generated code.
    - `stackSizeMb` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The default maximum stack size for the thread.
      Small values may lead to unusable Worker instances. **Default:**`4`.
  - `name` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) An optional `name` to be replaced in the thread name
    and to the worker title for debugging/identification purposes,
    making the final title as `[worker ${id}] ${name}`.
    This parameter has a maximum allowed size, depending on the operating
    system. If the provided name exceeds the limit, it will be truncated

    - Maximum sizes:
      - Windows: 32,767 characters
      - macOS: 64 characters
      - Linux: 16 characters
      - NetBSD: limited to `PTHREAD_MAX_NAMELEN_NP`
      - FreeBSD and OpenBSD: limited to `MAXCOMLEN` **Default:**`'WorkerThread'`.

#### Event: `'error'`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#event-error)

Added in: v10.5.0

- `err` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)

The `'error'` event is emitted if the worker thread throws an uncaught
exception. In that case, the worker is terminated.

#### Event: `'exit'`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#event-exit)

Added in: v10.5.0

- `exitCode` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The `'exit'` event is emitted once the worker has stopped. If the worker
exited by calling [`process.exit()`](https://nodejs.org/dist/latest/docs/api/process.html#processexitcode), the `exitCode` parameter is the
passed exit code. If the worker was terminated, the `exitCode` parameter is
`1`.

This is the final event emitted by any `Worker` instance.

#### Event: `'message'`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#event-message_1)

Added in: v10.5.0

- `value` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) The transmitted value

The `'message'` event is emitted when the worker thread has invoked
[`require('node:worker_threads').parentPort.postMessage()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerpostmessagevalue-transferlist).
See the [`port.on('message')`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-message) event for more details.

All messages sent from the worker thread are emitted before the
[`'exit'` event](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-exit) is emitted on the `Worker` object.

#### Event: `'messageerror'`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#event-messageerror_1)

Added in: v14.5.0, v12.19.0

- `error` [<Error>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error) An Error object

The `'messageerror'` event is emitted when deserializing a message failed.

#### Event: `'online'`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#event-online)

Added in: v10.5.0

The `'online'` event is emitted when the worker thread has started executing
JavaScript code.

#### `worker.cpuUsage([prev])`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#workercpuusageprev)

Added in: v24.6.0, v22.19.0

- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

This method returns a `Promise` that will resolve to an object identical to [`process.threadCpuUsage()`](https://nodejs.org/dist/latest/docs/api/process.html#processthreadcpuusagepreviousvalue),
or reject with an [`ERR_WORKER_NOT_RUNNING`](https://nodejs.org/dist/latest/docs/api/errors.html#err_worker_not_running) error if the worker is no longer running.
This methods allows the statistics to be observed from outside the actual thread.

#### `worker.getHeapSnapshot([options])`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#workergetheapsnapshotoptions)

History

| Version | Changes |
| --- | --- |
| v19.1.0 | Support options to configure the heap snapshot. |
| v13.9.0, v12.17.0 | Added in: v13.9.0, v12.17.0 |

- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `exposeInternals` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) If true, expose internals in the heap snapshot.
    **Default:**`false`.
  - `exposeNumericValues` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) If true, expose numeric values in
    artificial fields. **Default:**`false`.
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) A promise for a Readable Stream containing
a V8 heap snapshot

Returns a readable stream for a V8 snapshot of the current state of the Worker.
See [`v8.getHeapSnapshot()`](https://nodejs.org/dist/latest/docs/api/v8.html#v8getheapsnapshotoptions) for more details.

If the Worker thread is no longer running, which may occur before the
[`'exit'` event](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-exit) is emitted, the returned `Promise` is rejected
immediately with an [`ERR_WORKER_NOT_RUNNING`](https://nodejs.org/dist/latest/docs/api/errors.html#err_worker_not_running) error.

#### `worker.getHeapStatistics()`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#workergetheapstatistics)

Added in: v24.0.0, v22.16.0

- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

This method returns a `Promise` that will resolve to an object identical to [`v8.getHeapStatistics()`](https://nodejs.org/dist/latest/docs/api/v8.html#v8getheapstatistics),
or reject with an [`ERR_WORKER_NOT_RUNNING`](https://nodejs.org/dist/latest/docs/api/errors.html#err_worker_not_running) error if the worker is no longer running.
This methods allows the statistics to be observed from outside the actual thread.

#### `worker.performance`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#workerperformance)

Added in: v15.1.0, v14.17.0, v12.22.0

An object that can be used to query performance information from a worker
instance.

##### `performance.eventLoopUtilization([utilization1[, utilization2]])`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#performanceeventlooputilizationutilization1-utilization2)

Added in: v15.1.0, v14.17.0, v12.22.0

- `utilization1` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) The result of a previous call to
`eventLoopUtilization()`.
- `utilization2` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) The result of a previous call to
`eventLoopUtilization()` prior to `utilization1`.
- Returns: [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `idle` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
  - `active` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
  - `utilization` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The same call as [`perf_hooks``eventLoopUtilization()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#perf_hookseventlooputilizationutilization1-utilization2), except the values
of the worker instance are returned.

One difference is that, unlike the main thread, bootstrapping within a worker
is done within the event loop. So the event loop utilization is
immediately available once the worker's script begins execution.

An `idle` time that does not increase does not indicate that the worker is
stuck in bootstrap. The following examples shows how the worker's entire
lifetime never accumulates any `idle` time, but is still be able to process
messages.

```js
import { Worker, isMainThread, parentPort } from 'node:worker_threads';

if (isMainThread) {
  const worker = new Worker(new URL(import.meta.url));
  setInterval(() => {
    worker.postMessage('hi');
    console.log(worker.performance.eventLoopUtilization());
  }, 100).unref();
} else {
  parentPort.on('message', () => console.log('msg')).unref();
  (function r(n) {
    if (--n < 0) return;
    const t = Date.now();
    while (Date.now() - t < 300);
    setImmediate(r, n);
  })(10);
}'use strict';

const { Worker, isMainThread, parentPort } = require('node:worker_threads');

if (isMainThread) {
  const worker = new Worker(__filename);
  setInterval(() => {
    worker.postMessage('hi');
    console.log(worker.performance.eventLoopUtilization());
  }, 100).unref();
} else {
  parentPort.on('message', () => console.log('msg')).unref();
  (function r(n) {
    if (--n < 0) return;
    const t = Date.now();
    while (Date.now() - t < 300);
    setImmediate(r, n);
  })(10);
}copy
```

The event loop utilization of a worker is available only after the [`'online'`\\
event](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-online) emitted, and if called before this, or after the [`'exit'`\\
event](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-exit), then all properties have the value of `0`.

#### `worker.postMessage(value[, transferList])`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#workerpostmessagevalue-transferlist)

Added in: v10.5.0

- `value` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)
- `transferList` [<Object\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

Send a message to the worker that is received via
[`require('node:worker_threads').parentPort.on('message')`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-message).
See [`port.postMessage()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#portpostmessagevalue-transferlist) for more details.

#### `worker.ref()`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#workerref)

Added in: v10.5.0

Opposite of `unref()`, calling `ref()` on a previously `unref()`ed worker does
_not_ let the program exit if it's the only active handle left (the default
behavior). If the worker is `ref()`ed, calling `ref()` again has
no effect.

#### `worker.resourceLimits`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#workerresourcelimits)

Added in: v13.2.0, v12.16.0

- Type: [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `maxYoungGenerationSizeMb` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
  - `maxOldGenerationSizeMb` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
  - `codeRangeSizeMb` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
  - `stackSizeMb` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Provides the set of JS engine resource constraints for this Worker thread.
If the `resourceLimits` option was passed to the [`Worker`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-worker) constructor,
this matches its values.

If the worker has stopped, the return value is an empty object.

#### `worker.startCpuProfile()`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#workerstartcpuprofile)

Added in: v24.8.0

- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Starting a CPU profile then return a Promise that fulfills with an error
or an `CPUProfileHandle` object. This API supports `await using` syntax.

```js
const { Worker } = require('node:worker_threads');

const worker = new Worker(`
  const { parentPort } = require('worker_threads');
  parentPort.on('message', () => {});
  `, { eval: true });

worker.on('online', async () => {
  const handle = await worker.startCpuProfile();
  const profile = await handle.stop();
  console.log(profile);
  worker.terminate();
}); copy
```

`await using` example.

```js
const { Worker } = require('node:worker_threads');

const w = new Worker(`
  const { parentPort } = require('node:worker_threads');
  parentPort.on('message', () => {});
  `, { eval: true });

w.on('online', async () => {
  // Stop profile automatically when return and profile will be discarded
  await using handle = await w.startCpuProfile();
}); copy
```

#### `worker.startHeapProfile()`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#workerstartheapprofile)

Added in: v24.9.0, v22.20.0

- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Starting a Heap profile then return a Promise that fulfills with an error
or an `HeapProfileHandle` object. This API supports `await using` syntax.

```js
const { Worker } = require('node:worker_threads');

const worker = new Worker(`
  const { parentPort } = require('worker_threads');
  parentPort.on('message', () => {});
  `, { eval: true });

worker.on('online', async () => {
  const handle = await worker.startHeapProfile();
  const profile = await handle.stop();
  console.log(profile);
  worker.terminate();
}); copy
```

`await using` example.

```js
const { Worker } = require('node:worker_threads');

const w = new Worker(`
  const { parentPort } = require('node:worker_threads');
  parentPort.on('message', () => {});
  `, { eval: true });

w.on('online', async () => {
  // Stop profile automatically when return and profile will be discarded
  await using handle = await w.startHeapProfile();
}); copy
```

#### `worker.stderr`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#workerstderr)

Added in: v10.5.0

- Type: [<stream.Readable>](https://nodejs.org/dist/latest/docs/api/stream.html#class-streamreadable)

This is a readable stream which contains data written to [`process.stderr`](https://nodejs.org/dist/latest/docs/api/process.html#processstderr)
inside the worker thread. If `stderr: true` was not passed to the
[`Worker`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-worker) constructor, then data is piped to the parent thread's
[`process.stderr`](https://nodejs.org/dist/latest/docs/api/process.html#processstderr) stream.

#### `worker.stdin`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#workerstdin)

Added in: v10.5.0

- Type: [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#null_type) \| [<stream.Writable>](https://nodejs.org/dist/latest/docs/api/stream.html#class-streamwritable)

If `stdin: true` was passed to the [`Worker`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-worker) constructor, this is a
writable stream. The data written to this stream will be made available in
the worker thread as [`process.stdin`](https://nodejs.org/dist/latest/docs/api/process.html#processstdin).

#### `worker.stdout`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#workerstdout)

Added in: v10.5.0

- Type: [<stream.Readable>](https://nodejs.org/dist/latest/docs/api/stream.html#class-streamreadable)

This is a readable stream which contains data written to [`process.stdout`](https://nodejs.org/dist/latest/docs/api/process.html#processstdout)
inside the worker thread. If `stdout: true` was not passed to the
[`Worker`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-worker) constructor, then data is piped to the parent thread's
[`process.stdout`](https://nodejs.org/dist/latest/docs/api/process.html#processstdout) stream.

#### `worker.terminate()`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#workerterminate)

History

| Version | Changes |
| --- | --- |
| v12.5.0 | This function now returns a Promise. Passing a callback is deprecated, and was useless up to this version, as the Worker was actually terminated synchronously. Terminating is now a fully asynchronous operation. |
| v10.5.0 | Added in: v10.5.0 |

- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

Stop all JavaScript execution in the worker thread as soon as possible.
Returns a Promise for the exit code that is fulfilled when the
[`'exit'` event](https://nodejs.org/dist/latest/docs/api/worker_threads.html#event-exit) is emitted.

#### `worker.threadId`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#workerthreadid)

Added in: v10.5.0

- Type: [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

An integer identifier for the referenced thread. Inside the worker thread,
it is available as [`require('node:worker_threads').threadId`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsthreadid).
This value is unique for each `Worker` instance inside a single process.

#### `worker.threadName`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#workerthreadname)

Added in: v24.6.0, v22.20.0

- [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#null_type)

A string identifier for the referenced thread or null if the thread is not running.
Inside the worker thread, it is available as [`require('node:worker_threads').threadName`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker_threadsthreadname).

#### `worker.unref()`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#workerunref)

Added in: v10.5.0

Calling `unref()` on a worker allows the thread to exit if this is the only
active handle in the event system. If the worker is already `unref()`ed calling
`unref()` again has no effect.

#### `worker[Symbol.asyncDispose]()`[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#workersymbolasyncdispose)

Added in: v24.2.0, v22.18.0

Calls [`worker.terminate()`](https://nodejs.org/dist/latest/docs/api/worker_threads.html#workerterminate) when the dispose scope is exited.

```js
async function example() {
  await using worker = new Worker('for (;;) {}', { eval: true });
  // Worker is automatically terminate when the scope is exited.
} copy
```

### Notes[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#notes)

#### Synchronous blocking of stdio[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#synchronous-blocking-of-stdio)

`Worker`s utilize message passing via [<MessagePort>](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-messageport) to implement interactions
with `stdio`. This means that `stdio` output originating from a `Worker` can
get blocked by synchronous code on the receiving end that is blocking the
Node.js event loop.

```js
import {
  Worker,
  isMainThread,
} from 'node:worker_threads';

if (isMainThread) {
  new Worker(new URL(import.meta.url));
  for (let n = 0; n < 1e10; n++) {
    // Looping to simulate work.
  }
} else {
  // This output will be blocked by the for loop in the main thread.
  console.log('foo');
}'use strict';

const {
  Worker,
  isMainThread,
} = require('node:worker_threads');

if (isMainThread) {
  new Worker(__filename);
  for (let n = 0; n < 1e10; n++) {
    // Looping to simulate work.
  }
} else {
  // This output will be blocked by the for loop in the main thread.
  console.log('foo');
}copy
```

#### Launching worker threads from preload scripts[\#](https://nodejs.org/dist/latest/docs/api/worker_threads.html\#launching-worker-threads-from-preload-scripts)

Take care when launching worker threads from preload scripts (scripts loaded
and run using the `-r` command line flag). Unless the `execArgv` option is
explicitly set, new Worker threads automatically inherit the command line flags
from the running process and will preload the same preload scripts as the main
thread. If the preload script unconditionally launches a worker thread, every
thread spawned will spawn another until the application crashes.