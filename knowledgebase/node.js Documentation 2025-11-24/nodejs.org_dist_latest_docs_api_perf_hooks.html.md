---
url: "https://nodejs.org/dist/latest/docs/api/perf_hooks.html"
title: "Performance measurement APIs | Node.js v25.2.1 Documentation"
---

[Skip to content](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#apicontent)

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
- [Table of contents](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#toc-picker)




- [Performance measurement APIs](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performance-measurement-apis)
  - [`perf_hooks.performance`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#perf_hooksperformance)
    - [`performance.clearMarks([name])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceclearmarksname)
    - [`performance.clearMeasures([name])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceclearmeasuresname)
    - [`performance.clearResourceTimings([name])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceclearresourcetimingsname)
    - [`performance.eventLoopUtilization([utilization1[, utilization2]])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceeventlooputilizationutilization1-utilization2)
    - [`performance.getEntries()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancegetentries)
    - [`performance.getEntriesByName(name[, type])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancegetentriesbynamename-type)
    - [`performance.getEntriesByType(type)`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancegetentriesbytypetype)
    - [`performance.mark(name[, options])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancemarkname-options)
    - [`performance.markResourceTiming(timingInfo, requestedUrl, initiatorType, global, cacheMode, bodyInfo, responseStatus[, deliveryType])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancemarkresourcetimingtiminginfo-requestedurl-initiatortype-global-cachemode-bodyinfo-responsestatus-deliverytype)
    - [`performance.measure(name[, startMarkOrOptions[, endMark]])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancemeasurename-startmarkoroptions-endmark)
    - [`performance.nodeTiming`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenodetiming)
    - [`performance.now()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenow)
    - [`performance.setResourceTimingBufferSize(maxSize)`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancesetresourcetimingbuffersizemaxsize)
    - [`performance.timeOrigin`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancetimeorigin)
    - [`performance.timerify(fn[, options])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancetimerifyfn-options)
    - [`performance.toJSON()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancetojson)
      - [Event: `'resourcetimingbufferfull'`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#event-resourcetimingbufferfull)
  - [Class: `PerformanceEntry`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceentry)
    - [`performanceEntry.duration`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceentryduration)
    - [`performanceEntry.entryType`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceentryentrytype)
    - [`performanceEntry.name`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceentryname)
    - [`performanceEntry.startTime`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceentrystarttime)
  - [Class: `PerformanceMark`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performancemark)
    - [`performanceMark.detail`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancemarkdetail)
  - [Class: `PerformanceMeasure`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performancemeasure)
    - [`performanceMeasure.detail`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancemeasuredetail)
  - [Class: `PerformanceNodeEntry`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performancenodeentry)
    - [`performanceNodeEntry.detail`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenodeentrydetail)
    - [`performanceNodeEntry.flags`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenodeentryflags)
    - [`performanceNodeEntry.kind`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenodeentrykind)
    - [Garbage Collection ('gc') Details](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#garbage-collection-gc-details)
    - [HTTP ('http') Details](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#http-http-details)
    - [HTTP/2 ('http2') Details](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#http2-http2-details)
    - [Timerify ('function') Details](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#timerify-function-details)
    - [Net ('net') Details](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#net-net-details)
    - [DNS ('dns') Details](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#dns-dns-details)
  - [Class: `PerformanceNodeTiming`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performancenodetiming)
    - [`performanceNodeTiming.bootstrapComplete`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenodetimingbootstrapcomplete)
    - [`performanceNodeTiming.environment`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenodetimingenvironment)
    - [`performanceNodeTiming.idleTime`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenodetimingidletime)
    - [`performanceNodeTiming.loopExit`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenodetimingloopexit)
    - [`performanceNodeTiming.loopStart`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenodetimingloopstart)
    - [`performanceNodeTiming.nodeStart`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenodetimingnodestart)
    - [`performanceNodeTiming.uvMetricsInfo`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenodetiminguvmetricsinfo)
    - [`performanceNodeTiming.v8Start`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenodetimingv8start)
  - [Class: `PerformanceResourceTiming`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceresourcetiming)
    - [`performanceResourceTiming.workerStart`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingworkerstart)
    - [`performanceResourceTiming.redirectStart`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingredirectstart)
    - [`performanceResourceTiming.redirectEnd`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingredirectend)
    - [`performanceResourceTiming.fetchStart`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingfetchstart)
    - [`performanceResourceTiming.domainLookupStart`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingdomainlookupstart)
    - [`performanceResourceTiming.domainLookupEnd`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingdomainlookupend)
    - [`performanceResourceTiming.connectStart`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingconnectstart)
    - [`performanceResourceTiming.connectEnd`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingconnectend)
    - [`performanceResourceTiming.secureConnectionStart`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingsecureconnectionstart)
    - [`performanceResourceTiming.requestStart`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingrequeststart)
    - [`performanceResourceTiming.responseEnd`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingresponseend)
    - [`performanceResourceTiming.transferSize`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingtransfersize)
    - [`performanceResourceTiming.encodedBodySize`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingencodedbodysize)
    - [`performanceResourceTiming.decodedBodySize`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingdecodedbodysize)
    - [`performanceResourceTiming.toJSON()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingtojson)
  - [Class: `PerformanceObserver`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceobserver)
    - [`PerformanceObserver.supportedEntryTypes`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceobserversupportedentrytypes)
    - [`new PerformanceObserver(callback)`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#new-performanceobservercallback)
    - [`performanceObserver.disconnect()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceobserverdisconnect)
    - [`performanceObserver.observe(options)`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceobserverobserveoptions)
    - [`performanceObserver.takeRecords()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceobservertakerecords)
  - [Class: `PerformanceObserverEntryList`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceobserverentrylist)
    - [`performanceObserverEntryList.getEntries()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceobserverentrylistgetentries)
    - [`performanceObserverEntryList.getEntriesByName(name[, type])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceobserverentrylistgetentriesbynamename-type)
    - [`performanceObserverEntryList.getEntriesByType(type)`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceobserverentrylistgetentriesbytypetype)
  - [`perf_hooks.createHistogram([options])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#perf_hookscreatehistogramoptions)
  - [`perf_hooks.eventLoopUtilization([utilization1[, utilization2]])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#perf_hookseventlooputilizationutilization1-utilization2)
  - [`perf_hooks.monitorEventLoopDelay([options])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#perf_hooksmonitoreventloopdelayoptions)
  - [`perf_hooks.timerify(fn[, options])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#perf_hookstimerifyfn-options)
  - [Class: `Histogram`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-histogram)
    - [`histogram.count`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramcount)
    - [`histogram.countBigInt`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramcountbigint)
    - [`histogram.exceeds`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramexceeds)
    - [`histogram.exceedsBigInt`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramexceedsbigint)
    - [`histogram.max`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogrammax)
    - [`histogram.maxBigInt`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogrammaxbigint)
    - [`histogram.mean`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogrammean)
    - [`histogram.min`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogrammin)
    - [`histogram.minBigInt`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramminbigint)
    - [`histogram.percentile(percentile)`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogrampercentilepercentile)
    - [`histogram.percentileBigInt(percentile)`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogrampercentilebigintpercentile)
    - [`histogram.percentiles`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogrampercentiles)
    - [`histogram.percentilesBigInt`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogrampercentilesbigint)
    - [`histogram.reset()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramreset)
    - [`histogram.stddev`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramstddev)
  - [Class: `IntervalHistogram extends Histogram`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-intervalhistogram-extends-histogram)
    - [`histogram.disable()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramdisable)
    - [`histogram.enable()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramenable)
    - [`histogram[Symbol.dispose]()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramsymboldispose)
    - [Cloning an `IntervalHistogram`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#cloning-an-intervalhistogram)
  - [Class: `RecordableHistogram extends Histogram`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-recordablehistogram-extends-histogram)
    - [`histogram.add(other)`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramaddother)
    - [`histogram.record(val)`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramrecordval)
    - [`histogram.recordDelta()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramrecorddelta)
  - [Examples](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#examples)
    - [Measuring the duration of async operations](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#measuring-the-duration-of-async-operations)
    - [Measuring how long it takes to load dependencies](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#measuring-how-long-it-takes-to-load-dependencies)
    - [Measuring how long one HTTP round-trip takes](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#measuring-how-long-one-http-round-trip-takes)
    - [Measuring how long the `net.connect` (only for TCP) takes when the connection is successful](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#measuring-how-long-the-netconnect-only-for-tcp-takes-when-the-connection-is-successful)
    - [Measuring how long the DNS takes when the request is successful](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#measuring-how-long-the-dns-takes-when-the-request-is-successful)

- [Index](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#gtoc-picker)


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

- [Other versions](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#alt-docs)


01. [25.x](https://nodejs.org/docs/latest-v25.x/api/perf_hooks.html)
02. [24.x **LTS**](https://nodejs.org/docs/latest-v24.x/api/perf_hooks.html)
03. [23.x](https://nodejs.org/docs/latest-v23.x/api/perf_hooks.html)
04. [22.x **LTS**](https://nodejs.org/docs/latest-v22.x/api/perf_hooks.html)
05. [21.x](https://nodejs.org/docs/latest-v21.x/api/perf_hooks.html)
06. [20.x **LTS**](https://nodejs.org/docs/latest-v20.x/api/perf_hooks.html)
07. [19.x](https://nodejs.org/docs/latest-v19.x/api/perf_hooks.html)
08. [18.x](https://nodejs.org/docs/latest-v18.x/api/perf_hooks.html)
09. [17.x](https://nodejs.org/docs/latest-v17.x/api/perf_hooks.html)
10. [16.x](https://nodejs.org/docs/latest-v16.x/api/perf_hooks.html)
11. [15.x](https://nodejs.org/docs/latest-v15.x/api/perf_hooks.html)
12. [14.x](https://nodejs.org/docs/latest-v14.x/api/perf_hooks.html)
13. [13.x](https://nodejs.org/docs/latest-v13.x/api/perf_hooks.html)
14. [12.x](https://nodejs.org/docs/latest-v12.x/api/perf_hooks.html)
15. [11.x](https://nodejs.org/docs/latest-v11.x/api/perf_hooks.html)
16. [10.x](https://nodejs.org/docs/latest-v10.x/api/perf_hooks.html)
17. [9.x](https://nodejs.org/docs/latest-v9.x/api/perf_hooks.html)
18. [8.x](https://nodejs.org/docs/latest-v8.x/api/perf_hooks.html)

- [Options](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#options-picker)


- [View on single page](https://nodejs.org/dist/latest/docs/api/all.html)
- [View as JSON](https://nodejs.org/dist/latest/docs/api/perf_hooks.json)
- [Edit on GitHub](https://github.com/nodejs/node/edit/main/doc/api/perf_hooks.md)

* * *

Table of contents

- [Performance measurement APIs](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performance-measurement-apis)
  - [`perf_hooks.performance`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#perf_hooksperformance)
    - [`performance.clearMarks([name])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceclearmarksname)
    - [`performance.clearMeasures([name])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceclearmeasuresname)
    - [`performance.clearResourceTimings([name])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceclearresourcetimingsname)
    - [`performance.eventLoopUtilization([utilization1[, utilization2]])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceeventlooputilizationutilization1-utilization2)
    - [`performance.getEntries()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancegetentries)
    - [`performance.getEntriesByName(name[, type])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancegetentriesbynamename-type)
    - [`performance.getEntriesByType(type)`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancegetentriesbytypetype)
    - [`performance.mark(name[, options])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancemarkname-options)
    - [`performance.markResourceTiming(timingInfo, requestedUrl, initiatorType, global, cacheMode, bodyInfo, responseStatus[, deliveryType])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancemarkresourcetimingtiminginfo-requestedurl-initiatortype-global-cachemode-bodyinfo-responsestatus-deliverytype)
    - [`performance.measure(name[, startMarkOrOptions[, endMark]])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancemeasurename-startmarkoroptions-endmark)
    - [`performance.nodeTiming`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenodetiming)
    - [`performance.now()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenow)
    - [`performance.setResourceTimingBufferSize(maxSize)`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancesetresourcetimingbuffersizemaxsize)
    - [`performance.timeOrigin`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancetimeorigin)
    - [`performance.timerify(fn[, options])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancetimerifyfn-options)
    - [`performance.toJSON()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancetojson)
      - [Event: `'resourcetimingbufferfull'`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#event-resourcetimingbufferfull)
  - [Class: `PerformanceEntry`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceentry)
    - [`performanceEntry.duration`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceentryduration)
    - [`performanceEntry.entryType`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceentryentrytype)
    - [`performanceEntry.name`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceentryname)
    - [`performanceEntry.startTime`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceentrystarttime)
  - [Class: `PerformanceMark`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performancemark)
    - [`performanceMark.detail`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancemarkdetail)
  - [Class: `PerformanceMeasure`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performancemeasure)
    - [`performanceMeasure.detail`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancemeasuredetail)
  - [Class: `PerformanceNodeEntry`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performancenodeentry)
    - [`performanceNodeEntry.detail`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenodeentrydetail)
    - [`performanceNodeEntry.flags`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenodeentryflags)
    - [`performanceNodeEntry.kind`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenodeentrykind)
    - [Garbage Collection ('gc') Details](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#garbage-collection-gc-details)
    - [HTTP ('http') Details](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#http-http-details)
    - [HTTP/2 ('http2') Details](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#http2-http2-details)
    - [Timerify ('function') Details](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#timerify-function-details)
    - [Net ('net') Details](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#net-net-details)
    - [DNS ('dns') Details](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#dns-dns-details)
  - [Class: `PerformanceNodeTiming`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performancenodetiming)
    - [`performanceNodeTiming.bootstrapComplete`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenodetimingbootstrapcomplete)
    - [`performanceNodeTiming.environment`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenodetimingenvironment)
    - [`performanceNodeTiming.idleTime`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenodetimingidletime)
    - [`performanceNodeTiming.loopExit`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenodetimingloopexit)
    - [`performanceNodeTiming.loopStart`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenodetimingloopstart)
    - [`performanceNodeTiming.nodeStart`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenodetimingnodestart)
    - [`performanceNodeTiming.uvMetricsInfo`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenodetiminguvmetricsinfo)
    - [`performanceNodeTiming.v8Start`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performancenodetimingv8start)
  - [Class: `PerformanceResourceTiming`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceresourcetiming)
    - [`performanceResourceTiming.workerStart`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingworkerstart)
    - [`performanceResourceTiming.redirectStart`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingredirectstart)
    - [`performanceResourceTiming.redirectEnd`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingredirectend)
    - [`performanceResourceTiming.fetchStart`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingfetchstart)
    - [`performanceResourceTiming.domainLookupStart`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingdomainlookupstart)
    - [`performanceResourceTiming.domainLookupEnd`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingdomainlookupend)
    - [`performanceResourceTiming.connectStart`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingconnectstart)
    - [`performanceResourceTiming.connectEnd`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingconnectend)
    - [`performanceResourceTiming.secureConnectionStart`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingsecureconnectionstart)
    - [`performanceResourceTiming.requestStart`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingrequeststart)
    - [`performanceResourceTiming.responseEnd`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingresponseend)
    - [`performanceResourceTiming.transferSize`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingtransfersize)
    - [`performanceResourceTiming.encodedBodySize`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingencodedbodysize)
    - [`performanceResourceTiming.decodedBodySize`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingdecodedbodysize)
    - [`performanceResourceTiming.toJSON()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceresourcetimingtojson)
  - [Class: `PerformanceObserver`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceobserver)
    - [`PerformanceObserver.supportedEntryTypes`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceobserversupportedentrytypes)
    - [`new PerformanceObserver(callback)`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#new-performanceobservercallback)
    - [`performanceObserver.disconnect()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceobserverdisconnect)
    - [`performanceObserver.observe(options)`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceobserverobserveoptions)
    - [`performanceObserver.takeRecords()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceobservertakerecords)
  - [Class: `PerformanceObserverEntryList`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceobserverentrylist)
    - [`performanceObserverEntryList.getEntries()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceobserverentrylistgetentries)
    - [`performanceObserverEntryList.getEntriesByName(name[, type])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceobserverentrylistgetentriesbynamename-type)
    - [`performanceObserverEntryList.getEntriesByType(type)`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#performanceobserverentrylistgetentriesbytypetype)
  - [`perf_hooks.createHistogram([options])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#perf_hookscreatehistogramoptions)
  - [`perf_hooks.eventLoopUtilization([utilization1[, utilization2]])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#perf_hookseventlooputilizationutilization1-utilization2)
  - [`perf_hooks.monitorEventLoopDelay([options])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#perf_hooksmonitoreventloopdelayoptions)
  - [`perf_hooks.timerify(fn[, options])`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#perf_hookstimerifyfn-options)
  - [Class: `Histogram`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-histogram)
    - [`histogram.count`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramcount)
    - [`histogram.countBigInt`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramcountbigint)
    - [`histogram.exceeds`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramexceeds)
    - [`histogram.exceedsBigInt`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramexceedsbigint)
    - [`histogram.max`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogrammax)
    - [`histogram.maxBigInt`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogrammaxbigint)
    - [`histogram.mean`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogrammean)
    - [`histogram.min`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogrammin)
    - [`histogram.minBigInt`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramminbigint)
    - [`histogram.percentile(percentile)`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogrampercentilepercentile)
    - [`histogram.percentileBigInt(percentile)`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogrampercentilebigintpercentile)
    - [`histogram.percentiles`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogrampercentiles)
    - [`histogram.percentilesBigInt`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogrampercentilesbigint)
    - [`histogram.reset()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramreset)
    - [`histogram.stddev`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramstddev)
  - [Class: `IntervalHistogram extends Histogram`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-intervalhistogram-extends-histogram)
    - [`histogram.disable()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramdisable)
    - [`histogram.enable()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramenable)
    - [`histogram[Symbol.dispose]()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramsymboldispose)
    - [Cloning an `IntervalHistogram`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#cloning-an-intervalhistogram)
  - [Class: `RecordableHistogram extends Histogram`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-recordablehistogram-extends-histogram)
    - [`histogram.add(other)`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramaddother)
    - [`histogram.record(val)`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramrecordval)
    - [`histogram.recordDelta()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#histogramrecorddelta)
  - [Examples](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#examples)
    - [Measuring the duration of async operations](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#measuring-the-duration-of-async-operations)
    - [Measuring how long it takes to load dependencies](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#measuring-how-long-it-takes-to-load-dependencies)
    - [Measuring how long one HTTP round-trip takes](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#measuring-how-long-one-http-round-trip-takes)
    - [Measuring how long the `net.connect` (only for TCP) takes when the connection is successful](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#measuring-how-long-the-netconnect-only-for-tcp-takes-when-the-connection-is-successful)
    - [Measuring how long the DNS takes when the request is successful](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#measuring-how-long-the-dns-takes-when-the-request-is-successful)

## Performance measurement APIs[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performance-measurement-apis)

[Stability: 2](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Stable

**Source Code:** [lib/perf\_hooks.js](https://github.com/nodejs/node/blob/v25.2.1/lib/perf_hooks.js)

This module provides an implementation of a subset of the W3C
[Web Performance APIs](https://w3c.github.io/perf-timing-primer/) as well as additional APIs for
Node.js-specific performance measurements.

Node.js supports the following [Web Performance APIs](https://w3c.github.io/perf-timing-primer/):

- [High Resolution Time](https://www.w3.org/TR/hr-time-2)
- [Performance Timeline](https://w3c.github.io/performance-timeline/)
- [User Timing](https://www.w3.org/TR/user-timing/)
- [Resource Timing](https://www.w3.org/TR/resource-timing-2/)

```js
import { performance, PerformanceObserver } from 'node:perf_hooks';

const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0].duration);
  performance.clearMarks();
});
obs.observe({ type: 'measure' });
performance.measure('Start to Now');

performance.mark('A');
doSomeLongRunningProcess(() => {
  performance.measure('A to Now', 'A');

  performance.mark('B');
  performance.measure('A to B', 'A', 'B');
});const { PerformanceObserver, performance } = require('node:perf_hooks');

const obs = new PerformanceObserver((items) => {
  console.log(items.getEntries()[0].duration);
});
obs.observe({ type: 'measure' });
performance.measure('Start to Now');

performance.mark('A');
(async function doSomeLongRunningProcess() {
  await new Promise((r) => setTimeout(r, 5000));
  performance.measure('A to Now', 'A');

  performance.mark('B');
  performance.measure('A to B', 'A', 'B');
})();copy
```

### `perf_hooks.performance`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#perf_hooksperformance)

Added in: v8.5.0

An object that can be used to collect performance metrics from the current
Node.js instance. It is similar to [`window.performance`](https://developer.mozilla.org/en-US/docs/Web/API/Window/performance) in browsers.

#### `performance.clearMarks([name])`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceclearmarksname)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This method must be called with the `performance` object as the receiver. |
| v8.5.0 | Added in: v8.5.0 |

- `name` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

If `name` is not provided, removes all `PerformanceMark` objects from the
Performance Timeline. If `name` is provided, removes only the named mark.

#### `performance.clearMeasures([name])`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceclearmeasuresname)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This method must be called with the `performance` object as the receiver. |
| v16.7.0 | Added in: v16.7.0 |

- `name` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

If `name` is not provided, removes all `PerformanceMeasure` objects from the
Performance Timeline. If `name` is provided, removes only the named measure.

#### `performance.clearResourceTimings([name])`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceclearresourcetimingsname)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This method must be called with the `performance` object as the receiver. |
| v18.2.0, v16.17.0 | Added in: v18.2.0, v16.17.0 |

- `name` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

If `name` is not provided, removes all `PerformanceResourceTiming` objects from
the Resource Timeline. If `name` is provided, removes only the named resource.

#### `performance.eventLoopUtilization([utilization1[, utilization2]])`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceeventlooputilizationutilization1-utilization2)

History

| Version | Changes |
| --- | --- |
| v25.2.0 | Added `perf_hooks.eventLoopUtilization` alias. |
| v14.10.0, v12.19.0 | Added in: v14.10.0, v12.19.0 |

- `utilization1` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) The result of a previous call to
`eventLoopUtilization()`.
- `utilization2` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) The result of a previous call to
`eventLoopUtilization()` prior to `utilization1`.
- Returns: [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `idle` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
  - `active` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
  - `utilization` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

This is an alias of [`perf_hooks.eventLoopUtilization()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#perf_hookseventlooputilizationutilization1-utilization2).

_This property is an extension by Node.js. It is not available in Web browsers._

#### `performance.getEntries()`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performancegetentries)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This method must be called with the `performance` object as the receiver. |
| v16.7.0 | Added in: v16.7.0 |

- Returns: [<PerformanceEntry\[\]>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceentry)

Returns a list of `PerformanceEntry` objects in chronological order with
respect to `performanceEntry.startTime`. If you are only interested in
performance entries of certain types or that have certain names, see
`performance.getEntriesByType()` and `performance.getEntriesByName()`.

#### `performance.getEntriesByName(name[, type])`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performancegetentriesbynamename-type)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This method must be called with the `performance` object as the receiver. |
| v16.7.0 | Added in: v16.7.0 |

- `name` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `type` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- Returns: [<PerformanceEntry\[\]>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceentry)

Returns a list of `PerformanceEntry` objects in chronological order
with respect to `performanceEntry.startTime` whose `performanceEntry.name` is
equal to `name`, and optionally, whose `performanceEntry.entryType` is equal to
`type`.

#### `performance.getEntriesByType(type)`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performancegetentriesbytypetype)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This method must be called with the `performance` object as the receiver. |
| v16.7.0 | Added in: v16.7.0 |

- `type` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- Returns: [<PerformanceEntry\[\]>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceentry)

Returns a list of `PerformanceEntry` objects in chronological order
with respect to `performanceEntry.startTime` whose `performanceEntry.entryType`
is equal to `type`.

#### `performance.mark(name[, options])`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performancemarkname-options)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This method must be called with the `performance` object as the receiver. The name argument is no longer optional. |
| v16.0.0 | Updated to conform to the User Timing Level 3 specification. |
| v8.5.0 | Added in: v8.5.0 |

- `name` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `detail` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) Additional optional detail to include with the mark.
  - `startTime` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) An optional timestamp to be used as the mark time.
    **Default**: `performance.now()`.

Creates a new `PerformanceMark` entry in the Performance Timeline. A
`PerformanceMark` is a subclass of `PerformanceEntry` whose
`performanceEntry.entryType` is always `'mark'`, and whose
`performanceEntry.duration` is always `0`. Performance marks are used
to mark specific significant moments in the Performance Timeline.

The created `PerformanceMark` entry is put in the global Performance Timeline
and can be queried with `performance.getEntries`,
`performance.getEntriesByName`, and `performance.getEntriesByType`. When the
observation is performed, the entries should be cleared from the global
Performance Timeline manually with `performance.clearMarks`.

#### `performance.markResourceTiming(timingInfo, requestedUrl, initiatorType, global, cacheMode, bodyInfo, responseStatus[, deliveryType])`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performancemarkresourcetimingtiminginfo-requestedurl-initiatortype-global-cachemode-bodyinfo-responsestatus-deliverytype)

History

| Version | Changes |
| --- | --- |
| v22.2.0 | Added bodyInfo, responseStatus, and deliveryType arguments. |
| v18.2.0, v16.17.0 | Added in: v18.2.0, v16.17.0 |

- `timingInfo` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) [Fetch Timing Info](https://fetch.spec.whatwg.org/#fetch-timing-info)
- `requestedUrl` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) The resource url
- `initiatorType` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) The initiator name, e.g: 'fetch'
- `global` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
- `cacheMode` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) The cache mode must be an empty string ('') or 'local'
- `bodyInfo` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) [Fetch Response Body Info](https://fetch.spec.whatwg.org/#response-body-info)
- `responseStatus` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The response's status code
- `deliveryType` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) The delivery type. **Default:**`''`.

_This property is an extension by Node.js. It is not available in Web browsers._

Creates a new `PerformanceResourceTiming` entry in the Resource Timeline. A
`PerformanceResourceTiming` is a subclass of `PerformanceEntry` whose
`performanceEntry.entryType` is always `'resource'`. Performance resources
are used to mark moments in the Resource Timeline.

The created `PerformanceMark` entry is put in the global Resource Timeline
and can be queried with `performance.getEntries`,
`performance.getEntriesByName`, and `performance.getEntriesByType`. When the
observation is performed, the entries should be cleared from the global
Performance Timeline manually with `performance.clearResourceTimings`.

#### `performance.measure(name[, startMarkOrOptions[, endMark]])`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performancemeasurename-startmarkoroptions-endmark)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This method must be called with the `performance` object as the receiver. |
| v16.0.0 | Updated to conform to the User Timing Level 3 specification. |
| v13.13.0, v12.16.3 | Make `startMark` and `endMark` parameters optional. |
| v8.5.0 | Added in: v8.5.0 |

- `name` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `startMarkOrOptions` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) Optional.

  - `detail` [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types) Additional optional detail to include with the measure.
  - `duration` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) Duration between start and end times.
  - `end` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Timestamp to be used as the end time, or a string
    identifying a previously recorded mark.
  - `start` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Timestamp to be used as the start time, or a string
    identifying a previously recorded mark.
- `endMark` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Optional. Must be omitted if `startMarkOrOptions` is an
[<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).

Creates a new `PerformanceMeasure` entry in the Performance Timeline. A
`PerformanceMeasure` is a subclass of `PerformanceEntry` whose
`performanceEntry.entryType` is always `'measure'`, and whose
`performanceEntry.duration` measures the number of milliseconds elapsed since
`startMark` and `endMark`.

The `startMark` argument may identify any _existing_`PerformanceMark` in the
Performance Timeline, or _may_ identify any of the timestamp properties
provided by the `PerformanceNodeTiming` class. If the named `startMark` does
not exist, an error is thrown.

The optional `endMark` argument must identify any _existing_`PerformanceMark`
in the Performance Timeline or any of the timestamp properties provided by the
`PerformanceNodeTiming` class. `endMark` will be `performance.now()`
if no parameter is passed, otherwise if the named `endMark` does not exist, an
error will be thrown.

The created `PerformanceMeasure` entry is put in the global Performance Timeline
and can be queried with `performance.getEntries`,
`performance.getEntriesByName`, and `performance.getEntriesByType`. When the
observation is performed, the entries should be cleared from the global
Performance Timeline manually with `performance.clearMeasures`.

#### `performance.nodeTiming`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performancenodetiming)

Added in: v8.5.0

- Type: [<PerformanceNodeTiming>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performancenodetiming)

_This property is an extension by Node.js. It is not available in Web browsers._

An instance of the `PerformanceNodeTiming` class that provides performance
metrics for specific Node.js operational milestones.

#### `performance.now()`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performancenow)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This method must be called with the `performance` object as the receiver. |
| v8.5.0 | Added in: v8.5.0 |

- Returns: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Returns the current high resolution millisecond timestamp, where 0 represents
the start of the current `node` process.

#### `performance.setResourceTimingBufferSize(maxSize)`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performancesetresourcetimingbuffersizemaxsize)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This method must be called with the `performance` object as the receiver. |
| v18.8.0 | Added in: v18.8.0 |

Sets the global performance resource timing buffer size to the specified number
of "resource" type performance entry objects.

By default the max buffer size is set to 250.

#### `performance.timeOrigin`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performancetimeorigin)

Added in: v8.5.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The [`timeOrigin`](https://w3c.github.io/hr-time/#dom-performance-timeorigin) specifies the high resolution millisecond timestamp at
which the current `node` process began, measured in Unix time.

#### `performance.timerify(fn[, options])`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performancetimerifyfn-options)

History

| Version | Changes |
| --- | --- |
| v25.2.0 | Added `perf_hooks.timerify` alias. |
| v16.0.0 | Added the histogram option. |
| v16.0.0 | Re-implemented to use pure-JavaScript and the ability to time async functions. |
| v8.5.0 | Added in: v8.5.0 |

- `fn` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `histogram` [<RecordableHistogram>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-recordablehistogram-extends-histogram) A histogram object created using
    `perf_hooks.createHistogram()` that will record runtime durations in
    nanoseconds.

This is an alias of [`perf_hooks.timerify()`](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#perf_hookstimerifyfn-options).

_This property is an extension by Node.js. It is not available in Web browsers._

#### `performance.toJSON()`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performancetojson)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This method must be called with the `performance` object as the receiver. |
| v16.1.0 | Added in: v16.1.0 |

An object which is JSON representation of the `performance` object. It
is similar to [`window.performance.toJSON`](https://developer.mozilla.org/en-US/docs/Web/API/Performance/toJSON) in browsers.

##### Event: `'resourcetimingbufferfull'`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#event-resourcetimingbufferfull)

Added in: v18.8.0

The `'resourcetimingbufferfull'` event is fired when the global performance
resource timing buffer is full. Adjust resource timing buffer size with
`performance.setResourceTimingBufferSize()` or clear the buffer with
`performance.clearResourceTimings()` in the event listener to allow
more entries to be added to the performance timeline buffer.

### Class: `PerformanceEntry`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#class-performanceentry)

Added in: v8.5.0

The constructor of this class is not exposed to users directly.

#### `performanceEntry.duration`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceentryduration)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This property getter must be called with the `PerformanceEntry` object as the receiver. |
| v8.5.0 | Added in: v8.5.0 |

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The total number of milliseconds elapsed for this entry. This value will not
be meaningful for all Performance Entry types.

#### `performanceEntry.entryType`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceentryentrytype)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This property getter must be called with the `PerformanceEntry` object as the receiver. |
| v8.5.0 | Added in: v8.5.0 |

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

The type of the performance entry. It may be one of:

- `'dns'` (Node.js only)
- `'function'` (Node.js only)
- `'gc'` (Node.js only)
- `'http2'` (Node.js only)
- `'http'` (Node.js only)
- `'mark'` (available on the Web)
- `'measure'` (available on the Web)
- `'net'` (Node.js only)
- `'node'` (Node.js only)
- `'resource'` (available on the Web)

#### `performanceEntry.name`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceentryname)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This property getter must be called with the `PerformanceEntry` object as the receiver. |
| v8.5.0 | Added in: v8.5.0 |

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

The name of the performance entry.

#### `performanceEntry.startTime`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceentrystarttime)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This property getter must be called with the `PerformanceEntry` object as the receiver. |
| v8.5.0 | Added in: v8.5.0 |

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The high resolution millisecond timestamp marking the starting time of the
Performance Entry.

### Class: `PerformanceMark`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#class-performancemark)

Added in: v18.2.0, v16.17.0

- Extends: [<PerformanceEntry>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceentry)

Exposes marks created via the `Performance.mark()` method.

#### `performanceMark.detail`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performancemarkdetail)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This property getter must be called with the `PerformanceMark` object as the receiver. |
| v16.0.0 | Added in: v16.0.0 |

- Type: [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)

Additional detail specified when creating with `Performance.mark()` method.

### Class: `PerformanceMeasure`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#class-performancemeasure)

Added in: v18.2.0, v16.17.0

- Extends: [<PerformanceEntry>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceentry)

Exposes measures created via the `Performance.measure()` method.

The constructor of this class is not exposed to users directly.

#### `performanceMeasure.detail`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performancemeasuredetail)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This property getter must be called with the `PerformanceMeasure` object as the receiver. |
| v16.0.0 | Added in: v16.0.0 |

- Type: [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)

Additional detail specified when creating with `Performance.measure()` method.

### Class: `PerformanceNodeEntry`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#class-performancenodeentry)

Added in: v19.0.0

- Extends: [<PerformanceEntry>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceentry)

_This class is an extension by Node.js. It is not available in Web browsers._

Provides detailed Node.js timing data.

The constructor of this class is not exposed to users directly.

#### `performanceNodeEntry.detail`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performancenodeentrydetail)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This property getter must be called with the `PerformanceNodeEntry` object as the receiver. |
| v16.0.0 | Added in: v16.0.0 |

- Type: [<any>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Data_types)

Additional detail specific to the `entryType`.

#### `performanceNodeEntry.flags`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performancenodeentryflags)

History

| Version | Changes |
| --- | --- |
| v16.0.0 | Runtime deprecated. Now moved to the detail property when entryType is 'gc'. |
| v13.9.0, v12.17.0 | Added in: v13.9.0, v12.17.0 |

[Stability: 0](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Deprecated: Use `performanceNodeEntry.detail` instead.

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

When `performanceEntry.entryType` is equal to `'gc'`, the `performance.flags`
property contains additional information about garbage collection operation.
The value may be one of:

- `perf_hooks.constants.NODE_PERFORMANCE_GC_FLAGS_NO`
- `perf_hooks.constants.NODE_PERFORMANCE_GC_FLAGS_CONSTRUCT_RETAINED`
- `perf_hooks.constants.NODE_PERFORMANCE_GC_FLAGS_FORCED`
- `perf_hooks.constants.NODE_PERFORMANCE_GC_FLAGS_SYNCHRONOUS_PHANTOM_PROCESSING`
- `perf_hooks.constants.NODE_PERFORMANCE_GC_FLAGS_ALL_AVAILABLE_GARBAGE`
- `perf_hooks.constants.NODE_PERFORMANCE_GC_FLAGS_ALL_EXTERNAL_MEMORY`
- `perf_hooks.constants.NODE_PERFORMANCE_GC_FLAGS_SCHEDULE_IDLE`

#### `performanceNodeEntry.kind`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performancenodeentrykind)

History

| Version | Changes |
| --- | --- |
| v16.0.0 | Runtime deprecated. Now moved to the detail property when entryType is 'gc'. |
| v8.5.0 | Added in: v8.5.0 |

[Stability: 0](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Deprecated: Use `performanceNodeEntry.detail` instead.

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

When `performanceEntry.entryType` is equal to `'gc'`, the `performance.kind`
property identifies the type of garbage collection operation that occurred.
The value may be one of:

- `perf_hooks.constants.NODE_PERFORMANCE_GC_MAJOR`
- `perf_hooks.constants.NODE_PERFORMANCE_GC_MINOR`
- `perf_hooks.constants.NODE_PERFORMANCE_GC_INCREMENTAL`
- `perf_hooks.constants.NODE_PERFORMANCE_GC_WEAKCB`

#### Garbage Collection ('gc') Details[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#garbage-collection-gc-details)

When `performanceEntry.type` is equal to `'gc'`, the
`performanceNodeEntry.detail` property will be an [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) with two properties:

- `kind` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) One of:

  - `perf_hooks.constants.NODE_PERFORMANCE_GC_MAJOR`
  - `perf_hooks.constants.NODE_PERFORMANCE_GC_MINOR`
  - `perf_hooks.constants.NODE_PERFORMANCE_GC_INCREMENTAL`
  - `perf_hooks.constants.NODE_PERFORMANCE_GC_WEAKCB`
- `flags` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) One of:

  - `perf_hooks.constants.NODE_PERFORMANCE_GC_FLAGS_NO`
  - `perf_hooks.constants.NODE_PERFORMANCE_GC_FLAGS_CONSTRUCT_RETAINED`
  - `perf_hooks.constants.NODE_PERFORMANCE_GC_FLAGS_FORCED`
  - `perf_hooks.constants.NODE_PERFORMANCE_GC_FLAGS_SYNCHRONOUS_PHANTOM_PROCESSING`
  - `perf_hooks.constants.NODE_PERFORMANCE_GC_FLAGS_ALL_AVAILABLE_GARBAGE`
  - `perf_hooks.constants.NODE_PERFORMANCE_GC_FLAGS_ALL_EXTERNAL_MEMORY`
  - `perf_hooks.constants.NODE_PERFORMANCE_GC_FLAGS_SCHEDULE_IDLE`

#### HTTP ('http') Details[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#http-http-details)

When `performanceEntry.type` is equal to `'http'`, the
`performanceNodeEntry.detail` property will be an [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) containing
additional information.

If `performanceEntry.name` is equal to `HttpClient`, the `detail`
will contain the following properties: `req`, `res`. And the `req` property
will be an [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) containing `method`, `url`, `headers`, the `res` property
will be an [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) containing `statusCode`, `statusMessage`, `headers`.

If `performanceEntry.name` is equal to `HttpRequest`, the `detail`
will contain the following properties: `req`, `res`. And the `req` property
will be an [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) containing `method`, `url`, `headers`, the `res` property
will be an [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) containing `statusCode`, `statusMessage`, `headers`.

This could add additional memory overhead and should only be used for
diagnostic purposes, not left turned on in production by default.

#### HTTP/2 ('http2') Details[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#http2-http2-details)

When `performanceEntry.type` is equal to `'http2'`, the
`performanceNodeEntry.detail` property will be an [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) containing
additional performance information.

If `performanceEntry.name` is equal to `Http2Stream`, the `detail`
will contain the following properties:

- `bytesRead` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The number of `DATA` frame bytes received for this
`Http2Stream`.
- `bytesWritten` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The number of `DATA` frame bytes sent for this
`Http2Stream`.
- `id` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The identifier of the associated `Http2Stream`
- `timeToFirstByte` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The number of milliseconds elapsed between the
`PerformanceEntry``startTime` and the reception of the first `DATA` frame.
- `timeToFirstByteSent` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The number of milliseconds elapsed between
the `PerformanceEntry``startTime` and sending of the first `DATA` frame.
- `timeToFirstHeader` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The number of milliseconds elapsed between the
`PerformanceEntry``startTime` and the reception of the first header.

If `performanceEntry.name` is equal to `Http2Session`, the `detail` will
contain the following properties:

- `bytesRead` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The number of bytes received for this `Http2Session`.
- `bytesWritten` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The number of bytes sent for this `Http2Session`.
- `framesReceived` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The number of HTTP/2 frames received by the
`Http2Session`.
- `framesSent` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The number of HTTP/2 frames sent by the `Http2Session`.
- `maxConcurrentStreams` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The maximum number of streams concurrently
open during the lifetime of the `Http2Session`.
- `pingRTT` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The number of milliseconds elapsed since the transmission
of a `PING` frame and the reception of its acknowledgment. Only present if
a `PING` frame has been sent on the `Http2Session`.
- `streamAverageDuration` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The average duration (in milliseconds) for
all `Http2Stream` instances.
- `streamCount` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The number of `Http2Stream` instances processed by
the `Http2Session`.
- `type` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Either `'server'` or `'client'` to identify the type of
`Http2Session`.

#### Timerify ('function') Details[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#timerify-function-details)

When `performanceEntry.type` is equal to `'function'`, the
`performanceNodeEntry.detail` property will be an [<Array>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) listing
the input arguments to the timed function.

#### Net ('net') Details[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#net-net-details)

When `performanceEntry.type` is equal to `'net'`, the
`performanceNodeEntry.detail` property will be an [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) containing
additional information.

If `performanceEntry.name` is equal to `connect`, the `detail`
will contain the following properties: `host`, `port`.

#### DNS ('dns') Details[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#dns-dns-details)

When `performanceEntry.type` is equal to `'dns'`, the
`performanceNodeEntry.detail` property will be an [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) containing
additional information.

If `performanceEntry.name` is equal to `lookup`, the `detail`
will contain the following properties: `hostname`, `family`, `hints`, `verbatim`,
`addresses`.

If `performanceEntry.name` is equal to `lookupService`, the `detail` will
contain the following properties: `host`, `port`, `hostname`, `service`.

If `performanceEntry.name` is equal to `queryxxx` or `getHostByAddr`, the `detail` will
contain the following properties: `host`, `ttl`, `result`. The value of `result` is
same as the result of `queryxxx` or `getHostByAddr`.

### Class: `PerformanceNodeTiming`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#class-performancenodetiming)

Added in: v8.5.0

- Extends: [<PerformanceEntry>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceentry)

_This property is an extension by Node.js. It is not available in Web browsers._

Provides timing details for Node.js itself. The constructor of this class
is not exposed to users.

#### `performanceNodeTiming.bootstrapComplete`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performancenodetimingbootstrapcomplete)

Added in: v8.5.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The high resolution millisecond timestamp at which the Node.js process
completed bootstrapping. If bootstrapping has not yet finished, the property
has the value of -1.

#### `performanceNodeTiming.environment`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performancenodetimingenvironment)

Added in: v8.5.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The high resolution millisecond timestamp at which the Node.js environment was
initialized.

#### `performanceNodeTiming.idleTime`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performancenodetimingidletime)

Added in: v14.10.0, v12.19.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The high resolution millisecond timestamp of the amount of time the event loop
has been idle within the event loop's event provider (e.g. `epoll_wait`). This
does not take CPU usage into consideration. If the event loop has not yet
started (e.g., in the first tick of the main script), the property has the
value of 0.

#### `performanceNodeTiming.loopExit`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performancenodetimingloopexit)

Added in: v8.5.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The high resolution millisecond timestamp at which the Node.js event loop
exited. If the event loop has not yet exited, the property has the value of -1.
It can only have a value of not -1 in a handler of the [`'exit'`](https://nodejs.org/dist/latest/docs/api/process.html#event-exit) event.

#### `performanceNodeTiming.loopStart`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performancenodetimingloopstart)

Added in: v8.5.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The high resolution millisecond timestamp at which the Node.js event loop
started. If the event loop has not yet started (e.g., in the first tick of the
main script), the property has the value of -1.

#### `performanceNodeTiming.nodeStart`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performancenodetimingnodestart)

Added in: v8.5.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The high resolution millisecond timestamp at which the Node.js process was
initialized.

#### `performanceNodeTiming.uvMetricsInfo`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performancenodetiminguvmetricsinfo)

Added in: v22.8.0, v20.18.0

- Returns: [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `loopCount` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) Number of event loop iterations.
  - `events` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) Number of events that have been processed by the event handler.
  - `eventsWaiting` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) Number of events that were waiting to be processed when the event provider was called.

This is a wrapper to the `uv_metrics_info` function.
It returns the current set of event loop metrics.

It is recommended to use this property inside a function whose execution was
scheduled using `setImmediate` to avoid collecting metrics before finishing all
operations scheduled during the current loop iteration.

```js
const { performance } = require('node:perf_hooks');

setImmediate(() => {
  console.log(performance.nodeTiming.uvMetricsInfo);
});import { performance } from 'node:perf_hooks';

setImmediate(() => {
  console.log(performance.nodeTiming.uvMetricsInfo);
});copy
```

#### `performanceNodeTiming.v8Start`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performancenodetimingv8start)

Added in: v8.5.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The high resolution millisecond timestamp at which the V8 platform was
initialized.

### Class: `PerformanceResourceTiming`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#class-performanceresourcetiming)

Added in: v18.2.0, v16.17.0

- Extends: [<PerformanceEntry>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceentry)

Provides detailed network timing data regarding the loading of an application's
resources.

The constructor of this class is not exposed to users directly.

#### `performanceResourceTiming.workerStart`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceresourcetimingworkerstart)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This property getter must be called with the `PerformanceResourceTiming` object as the receiver. |
| v18.2.0, v16.17.0 | Added in: v18.2.0, v16.17.0 |

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The high resolution millisecond timestamp at immediately before dispatching
the `fetch` request. If the resource is not intercepted by a worker the property
will always return 0.

#### `performanceResourceTiming.redirectStart`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceresourcetimingredirectstart)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This property getter must be called with the `PerformanceResourceTiming` object as the receiver. |
| v18.2.0, v16.17.0 | Added in: v18.2.0, v16.17.0 |

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The high resolution millisecond timestamp that represents the start time
of the fetch which initiates the redirect.

#### `performanceResourceTiming.redirectEnd`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceresourcetimingredirectend)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This property getter must be called with the `PerformanceResourceTiming` object as the receiver. |
| v18.2.0, v16.17.0 | Added in: v18.2.0, v16.17.0 |

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The high resolution millisecond timestamp that will be created immediately after
receiving the last byte of the response of the last redirect.

#### `performanceResourceTiming.fetchStart`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceresourcetimingfetchstart)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This property getter must be called with the `PerformanceResourceTiming` object as the receiver. |
| v18.2.0, v16.17.0 | Added in: v18.2.0, v16.17.0 |

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The high resolution millisecond timestamp immediately before the Node.js starts
to fetch the resource.

#### `performanceResourceTiming.domainLookupStart`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceresourcetimingdomainlookupstart)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This property getter must be called with the `PerformanceResourceTiming` object as the receiver. |
| v18.2.0, v16.17.0 | Added in: v18.2.0, v16.17.0 |

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The high resolution millisecond timestamp immediately before the Node.js starts
the domain name lookup for the resource.

#### `performanceResourceTiming.domainLookupEnd`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceresourcetimingdomainlookupend)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This property getter must be called with the `PerformanceResourceTiming` object as the receiver. |
| v18.2.0, v16.17.0 | Added in: v18.2.0, v16.17.0 |

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The high resolution millisecond timestamp representing the time immediately
after the Node.js finished the domain name lookup for the resource.

#### `performanceResourceTiming.connectStart`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceresourcetimingconnectstart)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This property getter must be called with the `PerformanceResourceTiming` object as the receiver. |
| v18.2.0, v16.17.0 | Added in: v18.2.0, v16.17.0 |

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The high resolution millisecond timestamp representing the time immediately
before Node.js starts to establish the connection to the server to retrieve
the resource.

#### `performanceResourceTiming.connectEnd`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceresourcetimingconnectend)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This property getter must be called with the `PerformanceResourceTiming` object as the receiver. |
| v18.2.0, v16.17.0 | Added in: v18.2.0, v16.17.0 |

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The high resolution millisecond timestamp representing the time immediately
after Node.js finishes establishing the connection to the server to retrieve
the resource.

#### `performanceResourceTiming.secureConnectionStart`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceresourcetimingsecureconnectionstart)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This property getter must be called with the `PerformanceResourceTiming` object as the receiver. |
| v18.2.0, v16.17.0 | Added in: v18.2.0, v16.17.0 |

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The high resolution millisecond timestamp representing the time immediately
before Node.js starts the handshake process to secure the current connection.

#### `performanceResourceTiming.requestStart`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceresourcetimingrequeststart)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This property getter must be called with the `PerformanceResourceTiming` object as the receiver. |
| v18.2.0, v16.17.0 | Added in: v18.2.0, v16.17.0 |

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The high resolution millisecond timestamp representing the time immediately
before Node.js receives the first byte of the response from the server.

#### `performanceResourceTiming.responseEnd`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceresourcetimingresponseend)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This property getter must be called with the `PerformanceResourceTiming` object as the receiver. |
| v18.2.0, v16.17.0 | Added in: v18.2.0, v16.17.0 |

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The high resolution millisecond timestamp representing the time immediately
after Node.js receives the last byte of the resource or immediately before
the transport connection is closed, whichever comes first.

#### `performanceResourceTiming.transferSize`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceresourcetimingtransfersize)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This property getter must be called with the `PerformanceResourceTiming` object as the receiver. |
| v18.2.0, v16.17.0 | Added in: v18.2.0, v16.17.0 |

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

A number representing the size (in octets) of the fetched resource. The size
includes the response header fields plus the response payload body.

#### `performanceResourceTiming.encodedBodySize`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceresourcetimingencodedbodysize)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This property getter must be called with the `PerformanceResourceTiming` object as the receiver. |
| v18.2.0, v16.17.0 | Added in: v18.2.0, v16.17.0 |

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

A number representing the size (in octets) received from the fetch
(HTTP or cache), of the payload body, before removing any applied
content-codings.

#### `performanceResourceTiming.decodedBodySize`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceresourcetimingdecodedbodysize)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This property getter must be called with the `PerformanceResourceTiming` object as the receiver. |
| v18.2.0, v16.17.0 | Added in: v18.2.0, v16.17.0 |

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

A number representing the size (in octets) received from the fetch
(HTTP or cache), of the message body, after removing any applied
content-codings.

#### `performanceResourceTiming.toJSON()`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceresourcetimingtojson)

History

| Version | Changes |
| --- | --- |
| v19.0.0 | This method must be called with the `PerformanceResourceTiming` object as the receiver. |
| v18.2.0, v16.17.0 | Added in: v18.2.0, v16.17.0 |

Returns a `object` that is the JSON representation of the
`PerformanceResourceTiming` object

### Class: `PerformanceObserver`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#class-performanceobserver)

Added in: v8.5.0

#### `PerformanceObserver.supportedEntryTypes`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceobserversupportedentrytypes)

Added in: v16.0.0

- Type: [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

Get supported types.

#### `new PerformanceObserver(callback)`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#new-performanceobservercallback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v8.5.0 | Added in: v8.5.0 |

- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
  - `list` [<PerformanceObserverEntryList>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceobserverentrylist)
  - `observer` [<PerformanceObserver>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceobserver)

`PerformanceObserver` objects provide notifications when new
`PerformanceEntry` instances have been added to the Performance Timeline.

```js
import { performance, PerformanceObserver } from 'node:perf_hooks';

const obs = new PerformanceObserver((list, observer) => {
  console.log(list.getEntries());

  performance.clearMarks();
  performance.clearMeasures();
  observer.disconnect();
});
obs.observe({ entryTypes: ['mark'], buffered: true });

performance.mark('test');const {
  performance,
  PerformanceObserver,
} = require('node:perf_hooks');

const obs = new PerformanceObserver((list, observer) => {
  console.log(list.getEntries());

  performance.clearMarks();
  performance.clearMeasures();
  observer.disconnect();
});
obs.observe({ entryTypes: ['mark'], buffered: true });

performance.mark('test');copy
```

Because `PerformanceObserver` instances introduce their own additional
performance overhead, instances should not be left subscribed to notifications
indefinitely. Users should disconnect observers as soon as they are no
longer needed.

The `callback` is invoked when a `PerformanceObserver` is
notified about new `PerformanceEntry` instances. The callback receives a
`PerformanceObserverEntryList` instance and a reference to the
`PerformanceObserver`.

#### `performanceObserver.disconnect()`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceobserverdisconnect)

Added in: v8.5.0

Disconnects the `PerformanceObserver` instance from all notifications.

#### `performanceObserver.observe(options)`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceobserverobserveoptions)

History

| Version | Changes |
| --- | --- |
| v16.7.0 | Updated to conform to Performance Timeline Level 2. The buffered option has been added back. |
| v16.0.0 | Updated to conform to User Timing Level 3. The buffered option has been removed. |
| v8.5.0 | Added in: v8.5.0 |

- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `type` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) A single [<PerformanceEntry>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceentry) type. Must not be given
    if `entryTypes` is already specified.
  - `entryTypes` [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) An array of strings identifying the types of
    [<PerformanceEntry>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceentry) instances the observer is interested in. If not
    provided an error will be thrown.
  - `buffered` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) If true, the observer callback is called with a
    list global `PerformanceEntry` buffered entries. If false, only
    `PerformanceEntry`s created after the time point are sent to the
    observer callback. **Default:**`false`.

Subscribes the [<PerformanceObserver>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceobserver) instance to notifications of new
[<PerformanceEntry>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceentry) instances identified either by `options.entryTypes`
or `options.type`:

```js
import { performance, PerformanceObserver } from 'node:perf_hooks';

const obs = new PerformanceObserver((list, observer) => {
  // Called once asynchronously. `list` contains three items.
});
obs.observe({ type: 'mark' });

for (let n = 0; n < 3; n++)
  performance.mark(`test${n}`);const {
  performance,
  PerformanceObserver,
} = require('node:perf_hooks');

const obs = new PerformanceObserver((list, observer) => {
  // Called once asynchronously. `list` contains three items.
});
obs.observe({ type: 'mark' });

for (let n = 0; n < 3; n++)
  performance.mark(`test${n}`);copy
```

#### `performanceObserver.takeRecords()`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceobservertakerecords)

Added in: v16.0.0

- Returns: [<PerformanceEntry\[\]>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceentry) Current list of entries stored in the performance observer, emptying it out.

### Class: `PerformanceObserverEntryList`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#class-performanceobserverentrylist)

Added in: v8.5.0

The `PerformanceObserverEntryList` class is used to provide access to the
`PerformanceEntry` instances passed to a `PerformanceObserver`.
The constructor of this class is not exposed to users.

#### `performanceObserverEntryList.getEntries()`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceobserverentrylistgetentries)

Added in: v8.5.0

- Returns: [<PerformanceEntry\[\]>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceentry)

Returns a list of `PerformanceEntry` objects in chronological order
with respect to `performanceEntry.startTime`.

```js
import { performance, PerformanceObserver } from 'node:perf_hooks';

const obs = new PerformanceObserver((perfObserverList, observer) => {
  console.log(perfObserverList.getEntries());
  /**
   * [\
   *   PerformanceEntry {\
   *     name: 'test',\
   *     entryType: 'mark',\
   *     startTime: 81.465639,\
   *     duration: 0,\
   *     detail: null\
   *   },\
   *   PerformanceEntry {\
   *     name: 'meow',\
   *     entryType: 'mark',\
   *     startTime: 81.860064,\
   *     duration: 0,\
   *     detail: null\
   *   }\
   * ]
   */

  performance.clearMarks();
  performance.clearMeasures();
  observer.disconnect();
});
obs.observe({ type: 'mark' });

performance.mark('test');
performance.mark('meow');const {
  performance,
  PerformanceObserver,
} = require('node:perf_hooks');

const obs = new PerformanceObserver((perfObserverList, observer) => {
  console.log(perfObserverList.getEntries());
  /**
   * [\
   *   PerformanceEntry {\
   *     name: 'test',\
   *     entryType: 'mark',\
   *     startTime: 81.465639,\
   *     duration: 0,\
   *     detail: null\
   *   },\
   *   PerformanceEntry {\
   *     name: 'meow',\
   *     entryType: 'mark',\
   *     startTime: 81.860064,\
   *     duration: 0,\
   *     detail: null\
   *   }\
   * ]
   */

  performance.clearMarks();
  performance.clearMeasures();
  observer.disconnect();
});
obs.observe({ type: 'mark' });

performance.mark('test');
performance.mark('meow');copy
```

#### `performanceObserverEntryList.getEntriesByName(name[, type])`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceobserverentrylistgetentriesbynamename-type)

Added in: v8.5.0

- `name` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `type` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- Returns: [<PerformanceEntry\[\]>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceentry)

Returns a list of `PerformanceEntry` objects in chronological order
with respect to `performanceEntry.startTime` whose `performanceEntry.name` is
equal to `name`, and optionally, whose `performanceEntry.entryType` is equal to
`type`.

```js
import { performance, PerformanceObserver } from 'node:perf_hooks';

const obs = new PerformanceObserver((perfObserverList, observer) => {
  console.log(perfObserverList.getEntriesByName('meow'));
  /**
   * [\
   *   PerformanceEntry {\
   *     name: 'meow',\
   *     entryType: 'mark',\
   *     startTime: 98.545991,\
   *     duration: 0,\
   *     detail: null\
   *   }\
   * ]
   */
  console.log(perfObserverList.getEntriesByName('nope')); // []

  console.log(perfObserverList.getEntriesByName('test', 'mark'));
  /**
   * [\
   *   PerformanceEntry {\
   *     name: 'test',\
   *     entryType: 'mark',\
   *     startTime: 63.518931,\
   *     duration: 0,\
   *     detail: null\
   *   }\
   * ]
   */
  console.log(perfObserverList.getEntriesByName('test', 'measure')); // []

  performance.clearMarks();
  performance.clearMeasures();
  observer.disconnect();
});
obs.observe({ entryTypes: ['mark', 'measure'] });

performance.mark('test');
performance.mark('meow');const {
  performance,
  PerformanceObserver,
} = require('node:perf_hooks');

const obs = new PerformanceObserver((perfObserverList, observer) => {
  console.log(perfObserverList.getEntriesByName('meow'));
  /**
   * [\
   *   PerformanceEntry {\
   *     name: 'meow',\
   *     entryType: 'mark',\
   *     startTime: 98.545991,\
   *     duration: 0,\
   *     detail: null\
   *   }\
   * ]
   */
  console.log(perfObserverList.getEntriesByName('nope')); // []

  console.log(perfObserverList.getEntriesByName('test', 'mark'));
  /**
   * [\
   *   PerformanceEntry {\
   *     name: 'test',\
   *     entryType: 'mark',\
   *     startTime: 63.518931,\
   *     duration: 0,\
   *     detail: null\
   *   }\
   * ]
   */
  console.log(perfObserverList.getEntriesByName('test', 'measure')); // []

  performance.clearMarks();
  performance.clearMeasures();
  observer.disconnect();
});
obs.observe({ entryTypes: ['mark', 'measure'] });

performance.mark('test');
performance.mark('meow');copy
```

#### `performanceObserverEntryList.getEntriesByType(type)`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#performanceobserverentrylistgetentriesbytypetype)

Added in: v8.5.0

- `type` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- Returns: [<PerformanceEntry\[\]>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-performanceentry)

Returns a list of `PerformanceEntry` objects in chronological order
with respect to `performanceEntry.startTime` whose `performanceEntry.entryType`
is equal to `type`.

```js
import { performance, PerformanceObserver } from 'node:perf_hooks';

const obs = new PerformanceObserver((perfObserverList, observer) => {
  console.log(perfObserverList.getEntriesByType('mark'));
  /**
   * [\
   *   PerformanceEntry {\
   *     name: 'test',\
   *     entryType: 'mark',\
   *     startTime: 55.897834,\
   *     duration: 0,\
   *     detail: null\
   *   },\
   *   PerformanceEntry {\
   *     name: 'meow',\
   *     entryType: 'mark',\
   *     startTime: 56.350146,\
   *     duration: 0,\
   *     detail: null\
   *   }\
   * ]
   */
  performance.clearMarks();
  performance.clearMeasures();
  observer.disconnect();
});
obs.observe({ type: 'mark' });

performance.mark('test');
performance.mark('meow');const {
  performance,
  PerformanceObserver,
} = require('node:perf_hooks');

const obs = new PerformanceObserver((perfObserverList, observer) => {
  console.log(perfObserverList.getEntriesByType('mark'));
  /**
   * [\
   *   PerformanceEntry {\
   *     name: 'test',\
   *     entryType: 'mark',\
   *     startTime: 55.897834,\
   *     duration: 0,\
   *     detail: null\
   *   },\
   *   PerformanceEntry {\
   *     name: 'meow',\
   *     entryType: 'mark',\
   *     startTime: 56.350146,\
   *     duration: 0,\
   *     detail: null\
   *   }\
   * ]
   */
  performance.clearMarks();
  performance.clearMeasures();
  observer.disconnect();
});
obs.observe({ type: 'mark' });

performance.mark('test');
performance.mark('meow');copy
```

### `perf_hooks.createHistogram([options])`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#perf_hookscreatehistogramoptions)

Added in: v15.9.0, v14.18.0

- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `lowest` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type) The lowest discernible value. Must be an integer
    value greater than 0. **Default:**`1`.
  - `highest` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type) The highest recordable value. Must be an integer
    value that is equal to or greater than two times `lowest`.
    **Default:**`Number.MAX_SAFE_INTEGER`.
  - `figures` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The number of accuracy digits. Must be a number between
    `1` and `5`. **Default:**`3`.
- Returns: [<RecordableHistogram>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-recordablehistogram-extends-histogram)

Returns a [<RecordableHistogram>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-recordablehistogram-extends-histogram).

### `perf_hooks.eventLoopUtilization([utilization1[, utilization2]])`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#perf_hookseventlooputilizationutilization1-utilization2)

Added in: v25.2.0

- `utilization1` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) The result of a previous call to
`eventLoopUtilization()`.
- `utilization2` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) The result of a previous call to
`eventLoopUtilization()` prior to `utilization1`.
- Returns: [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `idle` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
  - `active` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
  - `utilization` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The `eventLoopUtilization()` function returns an object that contains the
cumulative duration of time the event loop has been both idle and active as a
high resolution milliseconds timer. The `utilization` value is the calculated
Event Loop Utilization (ELU).

If bootstrapping has not yet finished on the main thread the properties have
the value of `0`. The ELU is immediately available on [Worker threads](https://nodejs.org/dist/latest/docs/api/worker_threads.html#worker-threads) since
bootstrap happens within the event loop.

Both `utilization1` and `utilization2` are optional parameters.

If `utilization1` is passed, then the delta between the current call's `active`
and `idle` times, as well as the corresponding `utilization` value are
calculated and returned (similar to [`process.hrtime()`](https://nodejs.org/dist/latest/docs/api/process.html#processhrtimetime)).

If `utilization1` and `utilization2` are both passed, then the delta is
calculated between the two arguments. This is a convenience option because,
unlike [`process.hrtime()`](https://nodejs.org/dist/latest/docs/api/process.html#processhrtimetime), calculating the ELU is more complex than a
single subtraction.

ELU is similar to CPU utilization, except that it only measures event loop
statistics and not CPU usage. It represents the percentage of time the event
loop has spent outside the event loop's event provider (e.g. `epoll_wait`).
No other CPU idle time is taken into consideration. The following is an example
of how a mostly idle process will have a high ELU.

```js
import { eventLoopUtilization } from 'node:perf_hooks';
import { spawnSync } from 'node:child_process';

setImmediate(() => {
  const elu = eventLoopUtilization();
  spawnSync('sleep', ['5']);
  console.log(eventLoopUtilization(elu).utilization);
});'use strict';
const { eventLoopUtilization } = require('node:perf_hooks');
const { spawnSync } = require('node:child_process');

setImmediate(() => {
  const elu = eventLoopUtilization();
  spawnSync('sleep', ['5']);
  console.log(eventLoopUtilization(elu).utilization);
});copy
```

Although the CPU is mostly idle while running this script, the value of
`utilization` is `1`. This is because the call to
[`child_process.spawnSync()`](https://nodejs.org/dist/latest/docs/api/child_process.html#child_processspawnsynccommand-args-options) blocks the event loop from proceeding.

Passing in a user-defined object instead of the result of a previous call to
`eventLoopUtilization()` will lead to undefined behavior. The return values
are not guaranteed to reflect any correct state of the event loop.

### `perf_hooks.monitorEventLoopDelay([options])`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#perf_hooksmonitoreventloopdelayoptions)

Added in: v11.10.0

- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `resolution` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The sampling rate in milliseconds. Must be greater
    than zero. **Default:**`10`.
- Returns: [<IntervalHistogram>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-intervalhistogram-extends-histogram)

_This property is an extension by Node.js. It is not available in Web browsers._

Creates an `IntervalHistogram` object that samples and reports the event loop
delay over time. The delays will be reported in nanoseconds.

Using a timer to detect approximate event loop delay works because the
execution of timers is tied specifically to the lifecycle of the libuv
event loop. That is, a delay in the loop will cause a delay in the execution
of the timer, and those delays are specifically what this API is intended to
detect.

```js
import { monitorEventLoopDelay } from 'node:perf_hooks';

const h = monitorEventLoopDelay({ resolution: 20 });
h.enable();
// Do something.
h.disable();
console.log(h.min);
console.log(h.max);
console.log(h.mean);
console.log(h.stddev);
console.log(h.percentiles);
console.log(h.percentile(50));
console.log(h.percentile(99));const { monitorEventLoopDelay } = require('node:perf_hooks');
const h = monitorEventLoopDelay({ resolution: 20 });
h.enable();
// Do something.
h.disable();
console.log(h.min);
console.log(h.max);
console.log(h.mean);
console.log(h.stddev);
console.log(h.percentiles);
console.log(h.percentile(50));
console.log(h.percentile(99));copy
```

### `perf_hooks.timerify(fn[, options])`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#perf_hookstimerifyfn-options)

Added in: v25.2.0

- `fn` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function)
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `histogram` [<RecordableHistogram>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-recordablehistogram-extends-histogram) A histogram object created using
    `perf_hooks.createHistogram()` that will record runtime durations in
    nanoseconds.

_This property is an extension by Node.js. It is not available in Web browsers._

Wraps a function within a new function that measures the running time of the
wrapped function. A `PerformanceObserver` must be subscribed to the `'function'`
event type in order for the timing details to be accessed.

```js
import { timerify, performance, PerformanceObserver } from 'node:perf_hooks';

function someFunction() {
  console.log('hello world');
}

const wrapped = timerify(someFunction);

const obs = new PerformanceObserver((list) => {
  console.log(list.getEntries()[0].duration);

  performance.clearMarks();
  performance.clearMeasures();
  obs.disconnect();
});
obs.observe({ entryTypes: ['function'] });

// A performance timeline entry will be created
wrapped();const {
  timerify,
  performance,
  PerformanceObserver,
} = require('node:perf_hooks');

function someFunction() {
  console.log('hello world');
}

const wrapped = timerify(someFunction);

const obs = new PerformanceObserver((list) => {
  console.log(list.getEntries()[0].duration);

  performance.clearMarks();
  performance.clearMeasures();
  obs.disconnect();
});
obs.observe({ entryTypes: ['function'] });

// A performance timeline entry will be created
wrapped();copy
```

If the wrapped function returns a promise, a finally handler will be attached
to the promise and the duration will be reported once the finally handler is
invoked.

### Class: `Histogram`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#class-histogram)

Added in: v11.10.0

#### `histogram.count`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#histogramcount)

Added in: v17.4.0, v16.14.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The number of samples recorded by the histogram.

#### `histogram.countBigInt`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#histogramcountbigint)

Added in: v17.4.0, v16.14.0

- Type: [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type)

The number of samples recorded by the histogram.

#### `histogram.exceeds`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#histogramexceeds)

Added in: v11.10.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The number of times the event loop delay exceeded the maximum 1 hour event
loop delay threshold.

#### `histogram.exceedsBigInt`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#histogramexceedsbigint)

Added in: v17.4.0, v16.14.0

- Type: [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type)

The number of times the event loop delay exceeded the maximum 1 hour event
loop delay threshold.

#### `histogram.max`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#histogrammax)

Added in: v11.10.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The maximum recorded event loop delay.

#### `histogram.maxBigInt`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#histogrammaxbigint)

Added in: v17.4.0, v16.14.0

- Type: [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type)

The maximum recorded event loop delay.

#### `histogram.mean`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#histogrammean)

Added in: v11.10.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The mean of the recorded event loop delays.

#### `histogram.min`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#histogrammin)

Added in: v11.10.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The minimum recorded event loop delay.

#### `histogram.minBigInt`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#histogramminbigint)

Added in: v17.4.0, v16.14.0

- Type: [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type)

The minimum recorded event loop delay.

#### `histogram.percentile(percentile)`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#histogrampercentilepercentile)

Added in: v11.10.0

- `percentile` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) A percentile value in the range (0, 100\].
- Returns: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Returns the value at the given percentile.

#### `histogram.percentileBigInt(percentile)`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#histogrampercentilebigintpercentile)

Added in: v17.4.0, v16.14.0

- `percentile` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) A percentile value in the range (0, 100\].
- Returns: [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type)

Returns the value at the given percentile.

#### `histogram.percentiles`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#histogrampercentiles)

Added in: v11.10.0

- Type: [<Map>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

Returns a `Map` object detailing the accumulated percentile distribution.

#### `histogram.percentilesBigInt`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#histogrampercentilesbigint)

Added in: v17.4.0, v16.14.0

- Type: [<Map>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)

Returns a `Map` object detailing the accumulated percentile distribution.

#### `histogram.reset()`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#histogramreset)

Added in: v11.10.0

Resets the collected histogram data.

#### `histogram.stddev`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#histogramstddev)

Added in: v11.10.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The standard deviation of the recorded event loop delays.

### Class: `IntervalHistogram extends Histogram`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#class-intervalhistogram-extends-histogram)

A `Histogram` that is periodically updated on a given interval.

#### `histogram.disable()`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#histogramdisable)

Added in: v11.10.0

- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)

Disables the update interval timer. Returns `true` if the timer was
stopped, `false` if it was already stopped.

#### `histogram.enable()`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#histogramenable)

Added in: v11.10.0

- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)

Enables the update interval timer. Returns `true` if the timer was
started, `false` if it was already started.

#### `histogram[Symbol.dispose]()`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#histogramsymboldispose)

Added in: v24.2.0

Disables the update interval timer when the histogram is disposed.

```js
const { monitorEventLoopDelay } = require('node:perf_hooks');
{
  using hist = monitorEventLoopDelay({ resolution: 20 });
  hist.enable();
  // The histogram will be disabled when the block is exited.
} copy
```

#### Cloning an `IntervalHistogram`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#cloning-an-intervalhistogram)

[<IntervalHistogram>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-intervalhistogram-extends-histogram) instances can be cloned via [<MessagePort>](https://nodejs.org/dist/latest/docs/api/worker_threads.html#class-messageport). On the receiving
end, the histogram is cloned as a plain [<Histogram>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-histogram) object that does not
implement the `enable()` and `disable()` methods.

### Class: `RecordableHistogram extends Histogram`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#class-recordablehistogram-extends-histogram)

Added in: v15.9.0, v14.18.0

#### `histogram.add(other)`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#histogramaddother)

Added in: v17.4.0, v16.14.0

- `other` [<RecordableHistogram>](https://nodejs.org/dist/latest/docs/api/perf_hooks.html#class-recordablehistogram-extends-histogram)

Adds the values from `other` to this histogram.

#### `histogram.record(val)`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#histogramrecordval)

Added in: v15.9.0, v14.18.0

- `val` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) \| [<bigint>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type) The amount to record in the histogram.

#### `histogram.recordDelta()`[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#histogramrecorddelta)

Added in: v15.9.0, v14.18.0

Calculates the amount of time (in nanoseconds) that has passed since the
previous call to `recordDelta()` and records that amount in the histogram.

### Examples[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#examples)

#### Measuring the duration of async operations[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#measuring-the-duration-of-async-operations)

The following example uses the [Async Hooks](https://nodejs.org/dist/latest/docs/api/async_hooks.html) and Performance APIs to measure
the actual duration of a Timeout operation (including the amount of time it took
to execute the callback).

```js
import { createHook } from 'node:async_hooks';
import { performance, PerformanceObserver } from 'node:perf_hooks';

const set = new Set();
const hook = createHook({
  init(id, type) {
    if (type === 'Timeout') {
      performance.mark(`Timeout-${id}-Init`);
      set.add(id);
    }
  },
  destroy(id) {
    if (set.has(id)) {
      set.delete(id);
      performance.mark(`Timeout-${id}-Destroy`);
      performance.measure(`Timeout-${id}`,
                          `Timeout-${id}-Init`,
                          `Timeout-${id}-Destroy`);
    }
  },
});
hook.enable();

const obs = new PerformanceObserver((list, observer) => {
  console.log(list.getEntries()[0]);
  performance.clearMarks();
  performance.clearMeasures();
  observer.disconnect();
});
obs.observe({ entryTypes: ['measure'], buffered: true });

setTimeout(() => {}, 1000);'use strict';
const async_hooks = require('node:async_hooks');
const {
  performance,
  PerformanceObserver,
} = require('node:perf_hooks');

const set = new Set();
const hook = async_hooks.createHook({
  init(id, type) {
    if (type === 'Timeout') {
      performance.mark(`Timeout-${id}-Init`);
      set.add(id);
    }
  },
  destroy(id) {
    if (set.has(id)) {
      set.delete(id);
      performance.mark(`Timeout-${id}-Destroy`);
      performance.measure(`Timeout-${id}`,
                          `Timeout-${id}-Init`,
                          `Timeout-${id}-Destroy`);
    }
  },
});
hook.enable();

const obs = new PerformanceObserver((list, observer) => {
  console.log(list.getEntries()[0]);
  performance.clearMarks();
  performance.clearMeasures();
  observer.disconnect();
});
obs.observe({ entryTypes: ['measure'] });

setTimeout(() => {}, 1000);copy
```

#### Measuring how long it takes to load dependencies[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#measuring-how-long-it-takes-to-load-dependencies)

The following example measures the duration of `require()` operations to load
dependencies:

```js
import { performance, PerformanceObserver } from 'node:perf_hooks';

// Activate the observer
const obs = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach((entry) => {
    console.log(`import('${entry[0]}')`, entry.duration);
  });
  performance.clearMarks();
  performance.clearMeasures();
  obs.disconnect();
});
obs.observe({ entryTypes: ['function'], buffered: true });

const timedImport = performance.timerify(async (module) => {
  return await import(module);
});

await timedImport('some-module');'use strict';
const {
  performance,
  PerformanceObserver,
} = require('node:perf_hooks');
const mod = require('node:module');

// Monkey patch the require function
mod.Module.prototype.require =
  performance.timerify(mod.Module.prototype.require);
require = performance.timerify(require);

// Activate the observer
const obs = new PerformanceObserver((list) => {
  const entries = list.getEntries();
  entries.forEach((entry) => {
    console.log(`require('${entry[0]}')`, entry.duration);
  });
  performance.clearMarks();
  performance.clearMeasures();
  obs.disconnect();
});
obs.observe({ entryTypes: ['function'] });

require('some-module');copy
```

#### Measuring how long one HTTP round-trip takes[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#measuring-how-long-one-http-round-trip-takes)

The following example is used to trace the time spent by HTTP client
(`OutgoingMessage`) and HTTP request (`IncomingMessage`). For HTTP client,
it means the time interval between starting the request and receiving the
response, and for HTTP request, it means the time interval between receiving
the request and sending the response:

```js
import { PerformanceObserver } from 'node:perf_hooks';
import { createServer, get } from 'node:http';

const obs = new PerformanceObserver((items) => {
  items.getEntries().forEach((item) => {
    console.log(item);
  });
});

obs.observe({ entryTypes: ['http'] });

const PORT = 8080;

createServer((req, res) => {
  res.end('ok');
}).listen(PORT, () => {
  get(`http://127.0.0.1:${PORT}`);
});'use strict';
const { PerformanceObserver } = require('node:perf_hooks');
const http = require('node:http');

const obs = new PerformanceObserver((items) => {
  items.getEntries().forEach((item) => {
    console.log(item);
  });
});

obs.observe({ entryTypes: ['http'] });

const PORT = 8080;

http.createServer((req, res) => {
  res.end('ok');
}).listen(PORT, () => {
  http.get(`http://127.0.0.1:${PORT}`);
});copy
```

#### Measuring how long the `net.connect` (only for TCP) takes when the connection is successful[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#measuring-how-long-the-netconnect-only-for-tcp-takes-when-the-connection-is-successful)

```js
import { PerformanceObserver } from 'node:perf_hooks';
import { connect, createServer } from 'node:net';

const obs = new PerformanceObserver((items) => {
  items.getEntries().forEach((item) => {
    console.log(item);
  });
});
obs.observe({ entryTypes: ['net'] });
const PORT = 8080;
createServer((socket) => {
  socket.destroy();
}).listen(PORT, () => {
  connect(PORT);
});'use strict';
const { PerformanceObserver } = require('node:perf_hooks');
const net = require('node:net');
const obs = new PerformanceObserver((items) => {
  items.getEntries().forEach((item) => {
    console.log(item);
  });
});
obs.observe({ entryTypes: ['net'] });
const PORT = 8080;
net.createServer((socket) => {
  socket.destroy();
}).listen(PORT, () => {
  net.connect(PORT);
});copy
```

#### Measuring how long the DNS takes when the request is successful[\#](https://nodejs.org/dist/latest/docs/api/perf_hooks.html\#measuring-how-long-the-dns-takes-when-the-request-is-successful)

```js
import { PerformanceObserver } from 'node:perf_hooks';
import { lookup, promises } from 'node:dns';

const obs = new PerformanceObserver((items) => {
  items.getEntries().forEach((item) => {
    console.log(item);
  });
});
obs.observe({ entryTypes: ['dns'] });
lookup('localhost', () => {});
promises.resolve('localhost');'use strict';
const { PerformanceObserver } = require('node:perf_hooks');
const dns = require('node:dns');
const obs = new PerformanceObserver((items) => {
  items.getEntries().forEach((item) => {
    console.log(item);
  });
});
obs.observe({ entryTypes: ['dns'] });
dns.lookup('localhost', () => {});
dns.promises.resolve('localhost');copy
```