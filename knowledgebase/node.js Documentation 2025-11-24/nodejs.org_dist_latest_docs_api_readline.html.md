---
url: "https://nodejs.org/dist/latest/docs/api/readline.html"
title: "Readline | Node.js v25.2.1 Documentation"
---

[Skip to content](https://nodejs.org/dist/latest/docs/api/readline.html#apicontent)

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
- [Table of contents](https://nodejs.org/dist/latest/docs/api/readline.html#toc-picker)




- [Readline](https://nodejs.org/dist/latest/docs/api/readline.html#readline)
  - [Class: `InterfaceConstructor`](https://nodejs.org/dist/latest/docs/api/readline.html#class-interfaceconstructor)
    - [Event: `'close'`](https://nodejs.org/dist/latest/docs/api/readline.html#event-close)
    - [Event: `'line'`](https://nodejs.org/dist/latest/docs/api/readline.html#event-line)
    - [Event: `'history'`](https://nodejs.org/dist/latest/docs/api/readline.html#event-history)
    - [Event: `'pause'`](https://nodejs.org/dist/latest/docs/api/readline.html#event-pause)
    - [Event: `'resume'`](https://nodejs.org/dist/latest/docs/api/readline.html#event-resume)
    - [Event: `'SIGCONT'`](https://nodejs.org/dist/latest/docs/api/readline.html#event-sigcont)
    - [Event: `'SIGINT'`](https://nodejs.org/dist/latest/docs/api/readline.html#event-sigint)
    - [Event: `'SIGTSTP'`](https://nodejs.org/dist/latest/docs/api/readline.html#event-sigtstp)
    - [`rl.close()`](https://nodejs.org/dist/latest/docs/api/readline.html#rlclose)
    - [`rl[Symbol.dispose]()`](https://nodejs.org/dist/latest/docs/api/readline.html#rlsymboldispose)
    - [`rl.pause()`](https://nodejs.org/dist/latest/docs/api/readline.html#rlpause)
    - [`rl.prompt([preserveCursor])`](https://nodejs.org/dist/latest/docs/api/readline.html#rlpromptpreservecursor)
    - [`rl.resume()`](https://nodejs.org/dist/latest/docs/api/readline.html#rlresume)
    - [`rl.setPrompt(prompt)`](https://nodejs.org/dist/latest/docs/api/readline.html#rlsetpromptprompt)
    - [`rl.getPrompt()`](https://nodejs.org/dist/latest/docs/api/readline.html#rlgetprompt)
    - [`rl.write(data[, key])`](https://nodejs.org/dist/latest/docs/api/readline.html#rlwritedata-key)
    - [`rl[Symbol.asyncIterator]()`](https://nodejs.org/dist/latest/docs/api/readline.html#rlsymbolasynciterator)
    - [`rl.line`](https://nodejs.org/dist/latest/docs/api/readline.html#rlline)
    - [`rl.cursor`](https://nodejs.org/dist/latest/docs/api/readline.html#rlcursor)
    - [`rl.getCursorPos()`](https://nodejs.org/dist/latest/docs/api/readline.html#rlgetcursorpos)
  - [Promises API](https://nodejs.org/dist/latest/docs/api/readline.html#promises-api)
    - [Class: `readlinePromises.Interface`](https://nodejs.org/dist/latest/docs/api/readline.html#class-readlinepromisesinterface)
      - [`rl.question(query[, options])`](https://nodejs.org/dist/latest/docs/api/readline.html#rlquestionquery-options)
    - [Class: `readlinePromises.Readline`](https://nodejs.org/dist/latest/docs/api/readline.html#class-readlinepromisesreadline)
      - [`new readlinePromises.Readline(stream[, options])`](https://nodejs.org/dist/latest/docs/api/readline.html#new-readlinepromisesreadlinestream-options)
      - [`rl.clearLine(dir)`](https://nodejs.org/dist/latest/docs/api/readline.html#rlclearlinedir)
      - [`rl.clearScreenDown()`](https://nodejs.org/dist/latest/docs/api/readline.html#rlclearscreendown)
      - [`rl.commit()`](https://nodejs.org/dist/latest/docs/api/readline.html#rlcommit)
      - [`rl.cursorTo(x[, y])`](https://nodejs.org/dist/latest/docs/api/readline.html#rlcursortox-y)
      - [`rl.moveCursor(dx, dy)`](https://nodejs.org/dist/latest/docs/api/readline.html#rlmovecursordx-dy)
      - [`rl.rollback()`](https://nodejs.org/dist/latest/docs/api/readline.html#rlrollback)
    - [`readlinePromises.createInterface(options)`](https://nodejs.org/dist/latest/docs/api/readline.html#readlinepromisescreateinterfaceoptions)
      - [Use of the `completer` function](https://nodejs.org/dist/latest/docs/api/readline.html#use-of-the-completer-function)
  - [Callback API](https://nodejs.org/dist/latest/docs/api/readline.html#callback-api)
    - [Class: `readline.Interface`](https://nodejs.org/dist/latest/docs/api/readline.html#class-readlineinterface)
      - [`rl.question(query[, options], callback)`](https://nodejs.org/dist/latest/docs/api/readline.html#rlquestionquery-options-callback)
    - [`readline.clearLine(stream, dir[, callback])`](https://nodejs.org/dist/latest/docs/api/readline.html#readlineclearlinestream-dir-callback)
    - [`readline.clearScreenDown(stream[, callback])`](https://nodejs.org/dist/latest/docs/api/readline.html#readlineclearscreendownstream-callback)
    - [`readline.createInterface(options)`](https://nodejs.org/dist/latest/docs/api/readline.html#readlinecreateinterfaceoptions)
      - [Use of the `completer` function](https://nodejs.org/dist/latest/docs/api/readline.html#use-of-the-completer-function_1)
    - [`readline.cursorTo(stream, x[, y][, callback])`](https://nodejs.org/dist/latest/docs/api/readline.html#readlinecursortostream-x-y-callback)
    - [`readline.moveCursor(stream, dx, dy[, callback])`](https://nodejs.org/dist/latest/docs/api/readline.html#readlinemovecursorstream-dx-dy-callback)
  - [`readline.emitKeypressEvents(stream[, interface])`](https://nodejs.org/dist/latest/docs/api/readline.html#readlineemitkeypresseventsstream-interface)
  - [Example: Tiny CLI](https://nodejs.org/dist/latest/docs/api/readline.html#example-tiny-cli)
  - [Example: Read file stream line-by-Line](https://nodejs.org/dist/latest/docs/api/readline.html#example-read-file-stream-line-by-line)
  - [TTY keybindings](https://nodejs.org/dist/latest/docs/api/readline.html#tty-keybindings)

- [Index](https://nodejs.org/dist/latest/docs/api/readline.html#gtoc-picker)


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

- [Other versions](https://nodejs.org/dist/latest/docs/api/readline.html#alt-docs)


01. [25.x](https://nodejs.org/docs/latest-v25.x/api/readline.html)
02. [24.x **LTS**](https://nodejs.org/docs/latest-v24.x/api/readline.html)
03. [23.x](https://nodejs.org/docs/latest-v23.x/api/readline.html)
04. [22.x **LTS**](https://nodejs.org/docs/latest-v22.x/api/readline.html)
05. [21.x](https://nodejs.org/docs/latest-v21.x/api/readline.html)
06. [20.x **LTS**](https://nodejs.org/docs/latest-v20.x/api/readline.html)
07. [19.x](https://nodejs.org/docs/latest-v19.x/api/readline.html)
08. [18.x](https://nodejs.org/docs/latest-v18.x/api/readline.html)
09. [17.x](https://nodejs.org/docs/latest-v17.x/api/readline.html)
10. [16.x](https://nodejs.org/docs/latest-v16.x/api/readline.html)
11. [15.x](https://nodejs.org/docs/latest-v15.x/api/readline.html)
12. [14.x](https://nodejs.org/docs/latest-v14.x/api/readline.html)
13. [13.x](https://nodejs.org/docs/latest-v13.x/api/readline.html)
14. [12.x](https://nodejs.org/docs/latest-v12.x/api/readline.html)
15. [11.x](https://nodejs.org/docs/latest-v11.x/api/readline.html)
16. [10.x](https://nodejs.org/docs/latest-v10.x/api/readline.html)
17. [9.x](https://nodejs.org/docs/latest-v9.x/api/readline.html)
18. [8.x](https://nodejs.org/docs/latest-v8.x/api/readline.html)
19. [7.x](https://nodejs.org/docs/latest-v7.x/api/readline.html)
20. [6.x](https://nodejs.org/docs/latest-v6.x/api/readline.html)
21. [5.x](https://nodejs.org/docs/latest-v5.x/api/readline.html)
22. [4.x](https://nodejs.org/docs/latest-v4.x/api/readline.html)
23. [0.12.x](https://nodejs.org/docs/latest-v0.12.x/api/readline.html)
24. [0.10.x](https://nodejs.org/docs/latest-v0.10.x/api/readline.html)

- [Options](https://nodejs.org/dist/latest/docs/api/readline.html#options-picker)


- [View on single page](https://nodejs.org/dist/latest/docs/api/all.html)
- [View as JSON](https://nodejs.org/dist/latest/docs/api/readline.json)
- [Edit on GitHub](https://github.com/nodejs/node/edit/main/doc/api/readline.md)

* * *

Table of contents

- [Readline](https://nodejs.org/dist/latest/docs/api/readline.html#readline)
  - [Class: `InterfaceConstructor`](https://nodejs.org/dist/latest/docs/api/readline.html#class-interfaceconstructor)
    - [Event: `'close'`](https://nodejs.org/dist/latest/docs/api/readline.html#event-close)
    - [Event: `'line'`](https://nodejs.org/dist/latest/docs/api/readline.html#event-line)
    - [Event: `'history'`](https://nodejs.org/dist/latest/docs/api/readline.html#event-history)
    - [Event: `'pause'`](https://nodejs.org/dist/latest/docs/api/readline.html#event-pause)
    - [Event: `'resume'`](https://nodejs.org/dist/latest/docs/api/readline.html#event-resume)
    - [Event: `'SIGCONT'`](https://nodejs.org/dist/latest/docs/api/readline.html#event-sigcont)
    - [Event: `'SIGINT'`](https://nodejs.org/dist/latest/docs/api/readline.html#event-sigint)
    - [Event: `'SIGTSTP'`](https://nodejs.org/dist/latest/docs/api/readline.html#event-sigtstp)
    - [`rl.close()`](https://nodejs.org/dist/latest/docs/api/readline.html#rlclose)
    - [`rl[Symbol.dispose]()`](https://nodejs.org/dist/latest/docs/api/readline.html#rlsymboldispose)
    - [`rl.pause()`](https://nodejs.org/dist/latest/docs/api/readline.html#rlpause)
    - [`rl.prompt([preserveCursor])`](https://nodejs.org/dist/latest/docs/api/readline.html#rlpromptpreservecursor)
    - [`rl.resume()`](https://nodejs.org/dist/latest/docs/api/readline.html#rlresume)
    - [`rl.setPrompt(prompt)`](https://nodejs.org/dist/latest/docs/api/readline.html#rlsetpromptprompt)
    - [`rl.getPrompt()`](https://nodejs.org/dist/latest/docs/api/readline.html#rlgetprompt)
    - [`rl.write(data[, key])`](https://nodejs.org/dist/latest/docs/api/readline.html#rlwritedata-key)
    - [`rl[Symbol.asyncIterator]()`](https://nodejs.org/dist/latest/docs/api/readline.html#rlsymbolasynciterator)
    - [`rl.line`](https://nodejs.org/dist/latest/docs/api/readline.html#rlline)
    - [`rl.cursor`](https://nodejs.org/dist/latest/docs/api/readline.html#rlcursor)
    - [`rl.getCursorPos()`](https://nodejs.org/dist/latest/docs/api/readline.html#rlgetcursorpos)
  - [Promises API](https://nodejs.org/dist/latest/docs/api/readline.html#promises-api)
    - [Class: `readlinePromises.Interface`](https://nodejs.org/dist/latest/docs/api/readline.html#class-readlinepromisesinterface)
      - [`rl.question(query[, options])`](https://nodejs.org/dist/latest/docs/api/readline.html#rlquestionquery-options)
    - [Class: `readlinePromises.Readline`](https://nodejs.org/dist/latest/docs/api/readline.html#class-readlinepromisesreadline)
      - [`new readlinePromises.Readline(stream[, options])`](https://nodejs.org/dist/latest/docs/api/readline.html#new-readlinepromisesreadlinestream-options)
      - [`rl.clearLine(dir)`](https://nodejs.org/dist/latest/docs/api/readline.html#rlclearlinedir)
      - [`rl.clearScreenDown()`](https://nodejs.org/dist/latest/docs/api/readline.html#rlclearscreendown)
      - [`rl.commit()`](https://nodejs.org/dist/latest/docs/api/readline.html#rlcommit)
      - [`rl.cursorTo(x[, y])`](https://nodejs.org/dist/latest/docs/api/readline.html#rlcursortox-y)
      - [`rl.moveCursor(dx, dy)`](https://nodejs.org/dist/latest/docs/api/readline.html#rlmovecursordx-dy)
      - [`rl.rollback()`](https://nodejs.org/dist/latest/docs/api/readline.html#rlrollback)
    - [`readlinePromises.createInterface(options)`](https://nodejs.org/dist/latest/docs/api/readline.html#readlinepromisescreateinterfaceoptions)
      - [Use of the `completer` function](https://nodejs.org/dist/latest/docs/api/readline.html#use-of-the-completer-function)
  - [Callback API](https://nodejs.org/dist/latest/docs/api/readline.html#callback-api)
    - [Class: `readline.Interface`](https://nodejs.org/dist/latest/docs/api/readline.html#class-readlineinterface)
      - [`rl.question(query[, options], callback)`](https://nodejs.org/dist/latest/docs/api/readline.html#rlquestionquery-options-callback)
    - [`readline.clearLine(stream, dir[, callback])`](https://nodejs.org/dist/latest/docs/api/readline.html#readlineclearlinestream-dir-callback)
    - [`readline.clearScreenDown(stream[, callback])`](https://nodejs.org/dist/latest/docs/api/readline.html#readlineclearscreendownstream-callback)
    - [`readline.createInterface(options)`](https://nodejs.org/dist/latest/docs/api/readline.html#readlinecreateinterfaceoptions)
      - [Use of the `completer` function](https://nodejs.org/dist/latest/docs/api/readline.html#use-of-the-completer-function_1)
    - [`readline.cursorTo(stream, x[, y][, callback])`](https://nodejs.org/dist/latest/docs/api/readline.html#readlinecursortostream-x-y-callback)
    - [`readline.moveCursor(stream, dx, dy[, callback])`](https://nodejs.org/dist/latest/docs/api/readline.html#readlinemovecursorstream-dx-dy-callback)
  - [`readline.emitKeypressEvents(stream[, interface])`](https://nodejs.org/dist/latest/docs/api/readline.html#readlineemitkeypresseventsstream-interface)
  - [Example: Tiny CLI](https://nodejs.org/dist/latest/docs/api/readline.html#example-tiny-cli)
  - [Example: Read file stream line-by-Line](https://nodejs.org/dist/latest/docs/api/readline.html#example-read-file-stream-line-by-line)
  - [TTY keybindings](https://nodejs.org/dist/latest/docs/api/readline.html#tty-keybindings)

## Readline[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#readline)

[Stability: 2](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Stable

**Source Code:** [lib/readline.js](https://github.com/nodejs/node/blob/v25.2.1/lib/readline.js)

The `node:readline` module provides an interface for reading data from a
[Readable](https://nodejs.org/dist/latest/docs/api/stream.html#readable-streams) stream (such as [`process.stdin`](https://nodejs.org/dist/latest/docs/api/process.html#processstdin)) one line at a time.

To use the promise-based APIs:

```js
import * as readline from 'node:readline/promises';const readline = require('node:readline/promises');copy
```

To use the callback and sync APIs:

```js
import * as readline from 'node:readline';const readline = require('node:readline');copy
```

The following simple example illustrates the basic use of the `node:readline`
module.

```js
import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

const rl = readline.createInterface({ input, output });

const answer = await rl.question('What do you think of Node.js? ');

console.log(`Thank you for your valuable feedback: ${answer}`);

rl.close();const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

rl.question('What do you think of Node.js? ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});copy
```

Once this code is invoked, the Node.js application will not terminate until the
`readline.Interface` is closed because the interface waits for data to be
received on the `input` stream.

### Class: `InterfaceConstructor`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#class-interfaceconstructor)

Added in: v0.1.104

- Extends: [<EventEmitter>](https://nodejs.org/dist/latest/docs/api/events.html#class-eventemitter)

Instances of the `InterfaceConstructor` class are constructed using the
`readlinePromises.createInterface()` or `readline.createInterface()` method.
Every instance is associated with a single `input` [Readable](https://nodejs.org/dist/latest/docs/api/stream.html#readable-streams) stream and a
single `output` [Writable](https://nodejs.org/dist/latest/docs/api/stream.html#writable-streams) stream.
The `output` stream is used to print prompts for user input that arrives on,
and is read from, the `input` stream.

#### Event: `'close'`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#event-close)

Added in: v0.1.98

The `'close'` event is emitted when one of the following occur:

- The `rl.close()` method is called and the `InterfaceConstructor` instance has
relinquished control over the `input` and `output` streams;
- The `input` stream receives its `'end'` event;
- The `input` stream receives `Ctrl` + `D` to signal
end-of-transmission (EOT);
- The `input` stream receives `Ctrl` + `C` to signal `SIGINT`
and there is no `'SIGINT'` event listener registered on the
`InterfaceConstructor` instance.

The listener function is called without passing any arguments.

The `InterfaceConstructor` instance is finished once the `'close'` event is
emitted.

#### Event: `'line'`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#event-line)

Added in: v0.1.98

The `'line'` event is emitted whenever the `input` stream receives an
end-of-line input (`\n`, `\r`, or `\r\n`). This usually occurs when the user
presses `Enter` or `Return`.

The `'line'` event is also emitted if new data has been read from a stream and
that stream ends without a final end-of-line marker.

The listener function is called with a string containing the single line of
received input.

```js
rl.on('line', (input) => {
  console.log(`Received: ${input}`);
}); copy
```

#### Event: `'history'`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#event-history)

Added in: v15.8.0, v14.18.0

The `'history'` event is emitted whenever the history array has changed.

The listener function is called with an array containing the history array.
It will reflect all changes, added lines and removed lines due to
`historySize` and `removeHistoryDuplicates`.

The primary purpose is to allow a listener to persist the history.
It is also possible for the listener to change the history object. This
could be useful to prevent certain lines to be added to the history, like
a password.

```js
rl.on('history', (history) => {
  console.log(`Received: ${history}`);
}); copy
```

#### Event: `'pause'`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#event-pause)

Added in: v0.7.5

The `'pause'` event is emitted when one of the following occur:

- The `input` stream is paused.
- The `input` stream is not paused and receives the `'SIGCONT'` event. (See
events [`'SIGTSTP'`](https://nodejs.org/dist/latest/docs/api/readline.html#event-sigtstp) and [`'SIGCONT'`](https://nodejs.org/dist/latest/docs/api/readline.html#event-sigcont).)

The listener function is called without passing any arguments.

```js
rl.on('pause', () => {
  console.log('Readline paused.');
}); copy
```

#### Event: `'resume'`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#event-resume)

Added in: v0.7.5

The `'resume'` event is emitted whenever the `input` stream is resumed.

The listener function is called without passing any arguments.

```js
rl.on('resume', () => {
  console.log('Readline resumed.');
}); copy
```

#### Event: `'SIGCONT'`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#event-sigcont)

Added in: v0.7.5

The `'SIGCONT'` event is emitted when a Node.js process previously moved into
the background using `Ctrl` + `Z` (i.e. `SIGTSTP`) is then
brought back to the foreground using [`fg(1p)`](http://man7.org/linux/man-pages/man1/fg.1p.html).

If the `input` stream was paused _before_ the `SIGTSTP` request, this event will
not be emitted.

The listener function is invoked without passing any arguments.

```js
rl.on('SIGCONT', () => {
  // `prompt` will automatically resume the stream
  rl.prompt();
}); copy
```

The `'SIGCONT'` event is _not_ supported on Windows.

#### Event: `'SIGINT'`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#event-sigint)

Added in: v0.3.0

The `'SIGINT'` event is emitted whenever the `input` stream receives
a `Ctrl+C` input, known typically as `SIGINT`. If there are no
`'SIGINT'` event listeners registered when the `input` stream receives a
`SIGINT`, the `'pause'` event will be emitted.

The listener function is invoked without passing any arguments.

```js
rl.on('SIGINT', () => {
  rl.question('Are you sure you want to exit? ', (answer) => {
    if (answer.match(/^y(es)?$/i)) rl.pause();
  });
}); copy
```

#### Event: `'SIGTSTP'`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#event-sigtstp)

Added in: v0.7.5

The `'SIGTSTP'` event is emitted when the `input` stream receives
a `Ctrl` + `Z` input, typically known as `SIGTSTP`. If there are
no `'SIGTSTP'` event listeners registered when the `input` stream receives a
`SIGTSTP`, the Node.js process will be sent to the background.

When the program is resumed using [`fg(1p)`](http://man7.org/linux/man-pages/man1/fg.1p.html), the `'pause'` and `'SIGCONT'` events
will be emitted. These can be used to resume the `input` stream.

The `'pause'` and `'SIGCONT'` events will not be emitted if the `input` was
paused before the process was sent to the background.

The listener function is invoked without passing any arguments.

```js
rl.on('SIGTSTP', () => {
  // This will override SIGTSTP and prevent the program from going to the
  // background.
  console.log('Caught SIGTSTP.');
}); copy
```

The `'SIGTSTP'` event is _not_ supported on Windows.

#### `rl.close()`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#rlclose)

Added in: v0.1.98

The `rl.close()` method closes the `InterfaceConstructor` instance and
relinquishes control over the `input` and `output` streams. When called,
the `'close'` event will be emitted.

Calling `rl.close()` does not immediately stop other events (including `'line'`)
from being emitted by the `InterfaceConstructor` instance.

#### `rl[Symbol.dispose]()`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#rlsymboldispose)

Added in: v23.10.0, v22.15.0

Alias for `rl.close()`.

#### `rl.pause()`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#rlpause)

Added in: v0.3.4

The `rl.pause()` method pauses the `input` stream, allowing it to be resumed
later if necessary.

Calling `rl.pause()` does not immediately pause other events (including
`'line'`) from being emitted by the `InterfaceConstructor` instance.

#### `rl.prompt([preserveCursor])`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#rlpromptpreservecursor)

Added in: v0.1.98

- `preserveCursor` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) If `true`, prevents the cursor placement from
being reset to `0`.

The `rl.prompt()` method writes the `InterfaceConstructor` instances configured
`prompt` to a new line in `output` in order to provide a user with a new
location at which to provide input.

When called, `rl.prompt()` will resume the `input` stream if it has been
paused.

If the `InterfaceConstructor` was created with `output` set to `null` or
`undefined` the prompt is not written.

#### `rl.resume()`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#rlresume)

Added in: v0.3.4

The `rl.resume()` method resumes the `input` stream if it has been paused.

#### `rl.setPrompt(prompt)`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#rlsetpromptprompt)

Added in: v0.1.98

- `prompt` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

The `rl.setPrompt()` method sets the prompt that will be written to `output`
whenever `rl.prompt()` is called.

#### `rl.getPrompt()`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#rlgetprompt)

Added in: v15.3.0, v14.17.0

- Returns: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) the current prompt string

The `rl.getPrompt()` method returns the current prompt used by `rl.prompt()`.

#### `rl.write(data[, key])`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#rlwritedata-key)

Added in: v0.1.98

- `data` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)
- `key` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `ctrl` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)`true` to indicate the `Ctrl` key.
  - `meta` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)`true` to indicate the `Meta` key.
  - `shift` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)`true` to indicate the `Shift` key.
  - `name` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) The name of the a key.

The `rl.write()` method will write either `data` or a key sequence identified
by `key` to the `output`. The `key` argument is supported only if `output` is
a [TTY](https://nodejs.org/dist/latest/docs/api/tty.html) text terminal. See [TTY keybindings](https://nodejs.org/dist/latest/docs/api/readline.html#tty-keybindings) for a list of key
combinations.

If `key` is specified, `data` is ignored.

When called, `rl.write()` will resume the `input` stream if it has been
paused.

If the `InterfaceConstructor` was created with `output` set to `null` or
`undefined` the `data` and `key` are not written.

```js
rl.write('Delete this!');
// Simulate Ctrl+U to delete the line written previously
rl.write(null, { ctrl: true, name: 'u' }); copy
```

The `rl.write()` method will write the data to the `readline``Interface`'s
`input` _as if it were provided by the user_.

#### `rl[Symbol.asyncIterator]()`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#rlsymbolasynciterator)

History

| Version | Changes |
| --- | --- |
| v11.14.0, v10.17.0 | Symbol.asyncIterator support is no longer experimental. |
| v11.4.0, v10.16.0 | Added in: v11.4.0, v10.16.0 |

- Returns: [<AsyncIterator>](https://tc39.github.io/ecma262/#sec-asynciterator-interface)

Create an `AsyncIterator` object that iterates through each line in the input
stream as a string. This method allows asynchronous iteration of
`InterfaceConstructor` objects through `for await...of` loops.

Errors in the input stream are not forwarded.

If the loop is terminated with `break`, `throw`, or `return`,
[`rl.close()`](https://nodejs.org/dist/latest/docs/api/readline.html#rlclose) will be called. In other words, iterating over a
`InterfaceConstructor` will always consume the input stream fully.

Performance is not on par with the traditional `'line'` event API. Use `'line'`
instead for performance-sensitive applications.

```js
async function processLineByLine() {
  const rl = readline.createInterface({
    // ...
  });

  for await (const line of rl) {
    // Each line in the readline input will be successively available here as
    // `line`.
  }
} copy
```

`readline.createInterface()` will start to consume the input stream once
invoked. Having asynchronous operations between interface creation and
asynchronous iteration may result in missed lines.

#### `rl.line`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#rlline)

History

| Version | Changes |
| --- | --- |
| v15.8.0, v14.18.0 | Value will always be a string, never undefined. |
| v0.1.98 | Added in: v0.1.98 |

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

The current input data being processed by node.

This can be used when collecting input from a TTY stream to retrieve the
current value that has been processed thus far, prior to the `line` event
being emitted. Once the `line` event has been emitted, this property will
be an empty string.

Be aware that modifying the value during the instance runtime may have
unintended consequences if `rl.cursor` is not also controlled.

**If not using a TTY stream for input, use the [`'line'`](https://nodejs.org/dist/latest/docs/api/readline.html#event-line) event.**

One possible use case would be as follows:

```js
const values = ['lorem ipsum', 'dolor sit amet'];
const rl = readline.createInterface(process.stdin);
const showResults = debounce(() => {
  console.log(
    '\n',
    values.filter((val) => val.startsWith(rl.line)).join(' '),
  );
}, 300);
process.stdin.on('keypress', (c, k) => {
  showResults();
}); copy
```

#### `rl.cursor`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#rlcursor)

Added in: v0.1.98

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) \| [<undefined>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type)

The cursor position relative to `rl.line`.

This will track where the current cursor lands in the input string, when
reading input from a TTY stream. The position of cursor determines the
portion of the input string that will be modified as input is processed,
as well as the column where the terminal caret will be rendered.

#### `rl.getCursorPos()`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#rlgetcursorpos)

Added in: v13.5.0, v12.16.0

- Returns: [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `rows` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) the row of the prompt the cursor currently lands on
  - `cols` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) the screen column the cursor currently lands on

Returns the real position of the cursor in relation to the input
prompt + string. Long input (wrapping) strings, as well as multiple
line prompts are included in the calculations.

### Promises API[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#promises-api)

History

| Version | Changes |
| --- | --- |
| v24.0.0, v22.17.0 | Marking the API stable. |
| v17.0.0 | Added in: v17.0.0 |

#### Class: `readlinePromises.Interface`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#class-readlinepromisesinterface)

Added in: v17.0.0

- Extends: [<readline.InterfaceConstructor>](https://nodejs.org/dist/latest/docs/api/readline.html#class-interfaceconstructor)

Instances of the `readlinePromises.Interface` class are constructed using the
`readlinePromises.createInterface()` method. Every instance is associated with a
single `input` [Readable](https://nodejs.org/dist/latest/docs/api/stream.html#readable-streams) stream and a single `output` [Writable](https://nodejs.org/dist/latest/docs/api/stream.html#writable-streams) stream.
The `output` stream is used to print prompts for user input that arrives on,
and is read from, the `input` stream.

##### `rl.question(query[, options])`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#rlquestionquery-options)

Added in: v17.0.0

- `query` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) A statement or query to write to `output`, prepended to the
prompt.
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `signal` [<AbortSignal>](https://nodejs.org/dist/latest/docs/api/globals.html#class-abortsignal) Optionally allows the `question()` to be canceled
    using an `AbortSignal`.
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) A promise that is fulfilled with the user's
input in response to the `query`.

The `rl.question()` method displays the `query` by writing it to the `output`,
waits for user input to be provided on `input`, then invokes the `callback`
function passing the provided input as the first argument.

When called, `rl.question()` will resume the `input` stream if it has been
paused.

If the `readlinePromises.Interface` was created with `output` set to `null` or
`undefined` the `query` is not written.

If the question is called after `rl.close()`, it returns a rejected promise.

Example usage:

```js
const answer = await rl.question('What is your favorite food? ');
console.log(`Oh, so your favorite food is ${answer}`); copy
```

Using an `AbortSignal` to cancel a question.

```js
const signal = AbortSignal.timeout(10_000);

signal.addEventListener('abort', () => {
  console.log('The food question timed out');
}, { once: true });

const answer = await rl.question('What is your favorite food? ', { signal });
console.log(`Oh, so your favorite food is ${answer}`); copy
```

#### Class: `readlinePromises.Readline`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#class-readlinepromisesreadline)

Added in: v17.0.0

##### `new readlinePromises.Readline(stream[, options])`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#new-readlinepromisesreadlinestream-options)

Added in: v17.0.0

- `stream` [<stream.Writable>](https://nodejs.org/dist/latest/docs/api/stream.html#class-streamwritable) A [TTY](https://nodejs.org/dist/latest/docs/api/tty.html) stream.
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `autoCommit` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) If `true`, no need to call `rl.commit()`.

##### `rl.clearLine(dir)`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#rlclearlinedir)

Added in: v17.0.0

- `dir` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
  - `-1`: to the left from cursor
  - `1`: to the right from cursor
  - `0`: the entire line
- Returns: this

The `rl.clearLine()` method adds to the internal list of pending action an
action that clears current line of the associated `stream` in a specified
direction identified by `dir`.
Call `rl.commit()` to see the effect of this method, unless `autoCommit: true`
was passed to the constructor.

##### `rl.clearScreenDown()`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#rlclearscreendown)

Added in: v17.0.0

- Returns: this

The `rl.clearScreenDown()` method adds to the internal list of pending action an
action that clears the associated stream from the current position of the
cursor down.
Call `rl.commit()` to see the effect of this method, unless `autoCommit: true`
was passed to the constructor.

##### `rl.commit()`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#rlcommit)

Added in: v17.0.0

- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)

The `rl.commit()` method sends all the pending actions to the associated
`stream` and clears the internal list of pending actions.

##### `rl.cursorTo(x[, y])`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#rlcursortox-y)

Added in: v17.0.0

- `x` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `y` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- Returns: this

The `rl.cursorTo()` method adds to the internal list of pending action an action
that moves cursor to the specified position in the associated `stream`.
Call `rl.commit()` to see the effect of this method, unless `autoCommit: true`
was passed to the constructor.

##### `rl.moveCursor(dx, dy)`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#rlmovecursordx-dy)

Added in: v17.0.0

- `dx` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `dy` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- Returns: this

The `rl.moveCursor()` method adds to the internal list of pending action an
action that moves the cursor _relative_ to its current position in the
associated `stream`.
Call `rl.commit()` to see the effect of this method, unless `autoCommit: true`
was passed to the constructor.

##### `rl.rollback()`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#rlrollback)

Added in: v17.0.0

- Returns: this

The `rl.rollback` methods clears the internal list of pending actions without
sending it to the associated `stream`.

#### `readlinePromises.createInterface(options)`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#readlinepromisescreateinterfaceoptions)

Added in: v17.0.0

- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `input` [<stream.Readable>](https://nodejs.org/dist/latest/docs/api/stream.html#class-streamreadable) The [Readable](https://nodejs.org/dist/latest/docs/api/stream.html#readable-streams) stream to listen to. This option
    is _required_.
  - `output` [<stream.Writable>](https://nodejs.org/dist/latest/docs/api/stream.html#class-streamwritable) The [Writable](https://nodejs.org/dist/latest/docs/api/stream.html#writable-streams) stream to write readline data
    to.
  - `completer` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) An optional function used for Tab autocompletion.
  - `terminal` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)`true` if the `input` and `output` streams should be
    treated like a TTY, and have ANSI/VT100 escape codes written to it.
    **Default:** checking `isTTY` on the `output` stream upon instantiation.
  - `history` [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Initial list of history lines. This option makes sense
    only if `terminal` is set to `true` by the user or by an internal `output`
    check, otherwise the history caching mechanism is not initialized at all.
    **Default:**`[]`.
  - `historySize` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) Maximum number of history lines retained. To disable
    the history set this value to `0`. This option makes sense only if
    `terminal` is set to `true` by the user or by an internal `output` check,
    otherwise the history caching mechanism is not initialized at all.
    **Default:**`30`.
  - `removeHistoryDuplicates` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) If `true`, when a new input line added
    to the history list duplicates an older one, this removes the older line
    from the list. **Default:**`false`.
  - `prompt` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) The prompt string to use. **Default:**`'> '`.
  - `crlfDelay` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) If the delay between `\r` and `\n` exceeds
    `crlfDelay` milliseconds, both `\r` and `\n` will be treated as separate
    end-of-line input. `crlfDelay` will be coerced to a number no less than
    `100`. It can be set to `Infinity`, in which case `\r` followed by `\n`
    will always be considered a single newline (which may be reasonable for
    [reading files](https://nodejs.org/dist/latest/docs/api/readline.html#example-read-file-stream-line-by-line) with `\r\n` line delimiter). **Default:**`100`.
  - `escapeCodeTimeout` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The duration `readlinePromises` will wait for a
    character (when reading an ambiguous key sequence in milliseconds one that
    can both form a complete key sequence using the input read so far and can
    take additional input to complete a longer key sequence).
    **Default:**`500`.
  - `tabSize` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The number of spaces a tab is equal to (minimum 1).
    **Default:**`8`.
  - `signal` [<AbortSignal>](https://nodejs.org/dist/latest/docs/api/globals.html#class-abortsignal) Allows closing the interface using an AbortSignal.
- Returns: [<readlinePromises.Interface>](https://nodejs.org/dist/latest/docs/api/readline.html#class-readlinepromisesinterface)

The `readlinePromises.createInterface()` method creates a new `readlinePromises.Interface`
instance.

```js
import { createInterface } from 'node:readline/promises';
import { stdin, stdout } from 'node:process';
const rl = createInterface({
  input: stdin,
  output: stdout,
});const { createInterface } = require('node:readline/promises');
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});copy
```

Once the `readlinePromises.Interface` instance is created, the most common case
is to listen for the `'line'` event:

```js
rl.on('line', (line) => {
  console.log(`Received: ${line}`);
}); copy
```

If `terminal` is `true` for this instance then the `output` stream will get
the best compatibility if it defines an `output.columns` property and emits
a `'resize'` event on the `output` if or when the columns ever change
( [`process.stdout`](https://nodejs.org/dist/latest/docs/api/process.html#processstdout) does this automatically when it is a TTY).

##### Use of the `completer` function[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#use-of-the-completer-function)

The `completer` function takes the current line entered by the user
as an argument, and returns an `Array` with 2 entries:

- An `Array` with matching entries for the completion.
- The substring that was used for the matching.

For instance: `[[substr1, substr2, ...], originalsubstring]`.

```js
function completer(line) {
  const completions = '.help .error .exit .quit .q'.split(' ');
  const hits = completions.filter((c) => c.startsWith(line));
  // Show all completions if none found
  return [hits.length ? hits : completions, line];
} copy
```

The `completer` function can also return a [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise), or be asynchronous:

```js
async function completer(linePartial) {
  await someAsyncWork();
  return [['123'], linePartial];
} copy
```

### Callback API[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#callback-api)

Added in: v0.1.104

#### Class: `readline.Interface`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#class-readlineinterface)

History

| Version | Changes |
| --- | --- |
| v17.0.0 | The class `readline.Interface` now inherits from `Interface`. |
| v0.1.104 | Added in: v0.1.104 |

- Extends: [<readline.InterfaceConstructor>](https://nodejs.org/dist/latest/docs/api/readline.html#class-interfaceconstructor)

Instances of the `readline.Interface` class are constructed using the
`readline.createInterface()` method. Every instance is associated with a
single `input` [Readable](https://nodejs.org/dist/latest/docs/api/stream.html#readable-streams) stream and a single `output` [Writable](https://nodejs.org/dist/latest/docs/api/stream.html#writable-streams) stream.
The `output` stream is used to print prompts for user input that arrives on,
and is read from, the `input` stream.

##### `rl.question(query[, options], callback)`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#rlquestionquery-options-callback)

Added in: v0.3.3

- `query` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) A statement or query to write to `output`, prepended to the
prompt.
- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `signal` [<AbortSignal>](https://nodejs.org/dist/latest/docs/api/globals.html#class-abortsignal) Optionally allows the `question()` to be canceled
    using an `AbortController`.
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) A callback function that is invoked with the user's
input in response to the `query`.

The `rl.question()` method displays the `query` by writing it to the `output`,
waits for user input to be provided on `input`, then invokes the `callback`
function passing the provided input as the first argument.

When called, `rl.question()` will resume the `input` stream if it has been
paused.

If the `readline.Interface` was created with `output` set to `null` or
`undefined` the `query` is not written.

The `callback` function passed to `rl.question()` does not follow the typical
pattern of accepting an `Error` object or `null` as the first argument.
The `callback` is called with the provided answer as the only argument.

An error will be thrown if calling `rl.question()` after `rl.close()`.

Example usage:

```js
rl.question('What is your favorite food? ', (answer) => {
  console.log(`Oh, so your favorite food is ${answer}`);
}); copy
```

Using an `AbortController` to cancel a question.

```js
const ac = new AbortController();
const signal = ac.signal;

rl.question('What is your favorite food? ', { signal }, (answer) => {
  console.log(`Oh, so your favorite food is ${answer}`);
});

signal.addEventListener('abort', () => {
  console.log('The food question timed out');
}, { once: true });

setTimeout(() => ac.abort(), 10000); copy
```

#### `readline.clearLine(stream, dir[, callback])`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#readlineclearlinestream-dir-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v12.7.0 | The stream's write() callback and return value are exposed. |
| v0.7.7 | Added in: v0.7.7 |

- `stream` [<stream.Writable>](https://nodejs.org/dist/latest/docs/api/stream.html#class-streamwritable)
- `dir` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
  - `-1`: to the left from cursor
  - `1`: to the right from cursor
  - `0`: the entire line
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Invoked once the operation completes.
- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)`false` if `stream` wishes for the calling code to wait for
the `'drain'` event to be emitted before continuing to write additional data;
otherwise `true`.

The `readline.clearLine()` method clears current line of given [TTY](https://nodejs.org/dist/latest/docs/api/tty.html) stream
in a specified direction identified by `dir`.

#### `readline.clearScreenDown(stream[, callback])`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#readlineclearscreendownstream-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v12.7.0 | The stream's write() callback and return value are exposed. |
| v0.7.7 | Added in: v0.7.7 |

- `stream` [<stream.Writable>](https://nodejs.org/dist/latest/docs/api/stream.html#class-streamwritable)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Invoked once the operation completes.
- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)`false` if `stream` wishes for the calling code to wait for
the `'drain'` event to be emitted before continuing to write additional data;
otherwise `true`.

The `readline.clearScreenDown()` method clears the given [TTY](https://nodejs.org/dist/latest/docs/api/tty.html) stream from
the current position of the cursor down.

#### `readline.createInterface(options)`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#readlinecreateinterfaceoptions)

History

| Version | Changes |
| --- | --- |
| v15.14.0, v14.18.0 | The `signal` option is supported now. |
| v15.8.0, v14.18.0 | The `history` option is supported now. |
| v13.9.0 | The `tabSize` option is supported now. |
| v8.3.0, v6.11.4 | Remove max limit of `crlfDelay` option. |
| v6.6.0 | The `crlfDelay` option is supported now. |
| v6.3.0 | The `prompt` option is supported now. |
| v6.0.0 | The `historySize` option can be `0` now. |
| v0.1.98 | Added in: v0.1.98 |

- `options` [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)
  - `input` [<stream.Readable>](https://nodejs.org/dist/latest/docs/api/stream.html#class-streamreadable) The [Readable](https://nodejs.org/dist/latest/docs/api/stream.html#readable-streams) stream to listen to. This option
    is _required_.
  - `output` [<stream.Writable>](https://nodejs.org/dist/latest/docs/api/stream.html#class-streamwritable) The [Writable](https://nodejs.org/dist/latest/docs/api/stream.html#writable-streams) stream to write readline data
    to.
  - `completer` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) An optional function used for Tab autocompletion.
  - `terminal` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)`true` if the `input` and `output` streams should be
    treated like a TTY, and have ANSI/VT100 escape codes written to it.
    **Default:** checking `isTTY` on the `output` stream upon instantiation.
  - `history` [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Initial list of history lines. This option makes sense
    only if `terminal` is set to `true` by the user or by an internal `output`
    check, otherwise the history caching mechanism is not initialized at all.
    **Default:**`[]`.
  - `historySize` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) Maximum number of history lines retained. To disable
    the history set this value to `0`. This option makes sense only if
    `terminal` is set to `true` by the user or by an internal `output` check,
    otherwise the history caching mechanism is not initialized at all.
    **Default:**`30`.
  - `removeHistoryDuplicates` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) If `true`, when a new input line added
    to the history list duplicates an older one, this removes the older line
    from the list. **Default:**`false`.
  - `prompt` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) The prompt string to use. **Default:**`'> '`.
  - `crlfDelay` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) If the delay between `\r` and `\n` exceeds
    `crlfDelay` milliseconds, both `\r` and `\n` will be treated as separate
    end-of-line input. `crlfDelay` will be coerced to a number no less than
    `100`. It can be set to `Infinity`, in which case `\r` followed by `\n`
    will always be considered a single newline (which may be reasonable for
    [reading files](https://nodejs.org/dist/latest/docs/api/readline.html#example-read-file-stream-line-by-line) with `\r\n` line delimiter). **Default:**`100`.
  - `escapeCodeTimeout` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The duration `readline` will wait for a
    character (when reading an ambiguous key sequence in milliseconds one that
    can both form a complete key sequence using the input read so far and can
    take additional input to complete a longer key sequence).
    **Default:**`500`.
  - `tabSize` [<integer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The number of spaces a tab is equal to (minimum 1).
    **Default:**`8`.
  - `signal` [<AbortSignal>](https://nodejs.org/dist/latest/docs/api/globals.html#class-abortsignal) Allows closing the interface using an AbortSignal.
    Aborting the signal will internally call `close` on the interface.
- Returns: [<readline.Interface>](https://nodejs.org/dist/latest/docs/api/readline.html#class-readlineinterface)

The `readline.createInterface()` method creates a new `readline.Interface`
instance.

```js
import { createInterface } from 'node:readline';
import { stdin, stdout } from 'node:process';
const rl = createInterface({
  input: stdin,
  output: stdout,
});const { createInterface } = require('node:readline');
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
});copy
```

Once the `readline.Interface` instance is created, the most common case is to
listen for the `'line'` event:

```js
rl.on('line', (line) => {
  console.log(`Received: ${line}`);
}); copy
```

If `terminal` is `true` for this instance then the `output` stream will get
the best compatibility if it defines an `output.columns` property and emits
a `'resize'` event on the `output` if or when the columns ever change
( [`process.stdout`](https://nodejs.org/dist/latest/docs/api/process.html#processstdout) does this automatically when it is a TTY).

When creating a `readline.Interface` using `stdin` as input, the program
will not terminate until it receives an [EOF character](https://en.wikipedia.org/wiki/End-of-file#EOF_character). To exit without
waiting for user input, call `process.stdin.unref()`.

##### Use of the `completer` function[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#use-of-the-completer-function_1)

The `completer` function takes the current line entered by the user
as an argument, and returns an `Array` with 2 entries:

- An `Array` with matching entries for the completion.
- The substring that was used for the matching.

For instance: `[[substr1, substr2, ...], originalsubstring]`.

```js
function completer(line) {
  const completions = '.help .error .exit .quit .q'.split(' ');
  const hits = completions.filter((c) => c.startsWith(line));
  // Show all completions if none found
  return [hits.length ? hits : completions, line];
} copy
```

The `completer` function can be called asynchronously if it accepts two
arguments:

```js
function completer(linePartial, callback) {
  callback(null, [['123'], linePartial]);
} copy
```

#### `readline.cursorTo(stream, x[, y][, callback])`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#readlinecursortostream-x-y-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v12.7.0 | The stream's write() callback and return value are exposed. |
| v0.7.7 | Added in: v0.7.7 |

- `stream` [<stream.Writable>](https://nodejs.org/dist/latest/docs/api/stream.html#class-streamwritable)
- `x` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `y` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Invoked once the operation completes.
- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)`false` if `stream` wishes for the calling code to wait for
the `'drain'` event to be emitted before continuing to write additional data;
otherwise `true`.

The `readline.cursorTo()` method moves cursor to the specified position in a
given [TTY](https://nodejs.org/dist/latest/docs/api/tty.html)`stream`.

#### `readline.moveCursor(stream, dx, dy[, callback])`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#readlinemovecursorstream-dx-dy-callback)

History

| Version | Changes |
| --- | --- |
| v18.0.0 | Passing an invalid callback to the `callback` argument now throws `ERR_INVALID_ARG_TYPE` instead of `ERR_INVALID_CALLBACK`. |
| v12.7.0 | The stream's write() callback and return value are exposed. |
| v0.7.7 | Added in: v0.7.7 |

- `stream` [<stream.Writable>](https://nodejs.org/dist/latest/docs/api/stream.html#class-streamwritable)
- `dx` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `dy` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)
- `callback` [<Function>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function) Invoked once the operation completes.
- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)`false` if `stream` wishes for the calling code to wait for
the `'drain'` event to be emitted before continuing to write additional data;
otherwise `true`.

The `readline.moveCursor()` method moves the cursor _relative_ to its current
position in a given [TTY](https://nodejs.org/dist/latest/docs/api/tty.html)`stream`.

### `readline.emitKeypressEvents(stream[, interface])`[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#readlineemitkeypresseventsstream-interface)

Added in: v0.7.7

- `stream` [<stream.Readable>](https://nodejs.org/dist/latest/docs/api/stream.html#class-streamreadable)
- `interface` [<readline.InterfaceConstructor>](https://nodejs.org/dist/latest/docs/api/readline.html#class-interfaceconstructor)

The `readline.emitKeypressEvents()` method causes the given [Readable](https://nodejs.org/dist/latest/docs/api/stream.html#readable-streams)
stream to begin emitting `'keypress'` events corresponding to received input.

Optionally, `interface` specifies a `readline.Interface` instance for which
autocompletion is disabled when copy-pasted input is detected.

If the `stream` is a [TTY](https://nodejs.org/dist/latest/docs/api/tty.html), then it must be in raw mode.

This is automatically called by any readline instance on its `input` if the
`input` is a terminal. Closing the `readline` instance does not stop
the `input` from emitting `'keypress'` events.

```js
readline.emitKeypressEvents(process.stdin);
if (process.stdin.isTTY)
  process.stdin.setRawMode(true); copy
```

### Example: Tiny CLI[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#example-tiny-cli)

The following example illustrates the use of `readline.Interface` class to
implement a small command-line interface:

```js
import { createInterface } from 'node:readline';
import { exit, stdin, stdout } from 'node:process';
const rl = createInterface({
  input: stdin,
  output: stdout,
  prompt: 'OHAI> ',
});

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log(`Say what? I might have heard '${line.trim()}'`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  exit(0);
});const { createInterface } = require('node:readline');
const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: 'OHAI> ',
});

rl.prompt();

rl.on('line', (line) => {
  switch (line.trim()) {
    case 'hello':
      console.log('world!');
      break;
    default:
      console.log(`Say what? I might have heard '${line.trim()}'`);
      break;
  }
  rl.prompt();
}).on('close', () => {
  console.log('Have a great day!');
  process.exit(0);
});copy
```

### Example: Read file stream line-by-Line[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#example-read-file-stream-line-by-line)

A common use case for `readline` is to consume an input file one line at a
time. The easiest way to do so is leveraging the [`fs.ReadStream`](https://nodejs.org/dist/latest/docs/api/fs.html#class-fsreadstream) API as
well as a `for await...of` loop:

```js
import { createReadStream } from 'node:fs';
import { createInterface } from 'node:readline';

async function processLineByLine() {
  const fileStream = createReadStream('input.txt');

  const rl = createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    console.log(`Line from file: ${line}`);
  }
}

processLineByLine();const { createReadStream } = require('node:fs');
const { createInterface } = require('node:readline');

async function processLineByLine() {
  const fileStream = createReadStream('input.txt');

  const rl = createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    // Each line in input.txt will be successively available here as `line`.
    console.log(`Line from file: ${line}`);
  }
}

processLineByLine();copy
```

Alternatively, one could use the [`'line'`](https://nodejs.org/dist/latest/docs/api/readline.html#event-line) event:

```js
import { createReadStream } from 'node:fs';
import { createInterface } from 'node:readline';

const rl = createInterface({
  input: createReadStream('sample.txt'),
  crlfDelay: Infinity,
});

rl.on('line', (line) => {
  console.log(`Line from file: ${line}`);
});const { createReadStream } = require('node:fs');
const { createInterface } = require('node:readline');

const rl = createInterface({
  input: createReadStream('sample.txt'),
  crlfDelay: Infinity,
});

rl.on('line', (line) => {
  console.log(`Line from file: ${line}`);
});copy
```

Currently, `for await...of` loop can be a bit slower. If `async` / `await`
flow and speed are both essential, a mixed approach can be applied:

```js
import { once } from 'node:events';
import { createReadStream } from 'node:fs';
import { createInterface } from 'node:readline';

(async function processLineByLine() {
  try {
    const rl = createInterface({
      input: createReadStream('big-file.txt'),
      crlfDelay: Infinity,
    });

    rl.on('line', (line) => {
      // Process the line.
    });

    await once(rl, 'close');

    console.log('File processed.');
  } catch (err) {
    console.error(err);
  }
})();const { once } = require('node:events');
const { createReadStream } = require('node:fs');
const { createInterface } = require('node:readline');

(async function processLineByLine() {
  try {
    const rl = createInterface({
      input: createReadStream('big-file.txt'),
      crlfDelay: Infinity,
    });

    rl.on('line', (line) => {
      // Process the line.
    });

    await once(rl, 'close');

    console.log('File processed.');
  } catch (err) {
    console.error(err);
  }
})();copy
```

### TTY keybindings[\#](https://nodejs.org/dist/latest/docs/api/readline.html\#tty-keybindings)

| Keybindings | Description | Notes |
| --- | --- | --- |
| `Ctrl` + `Shift` + `Backspace` | Delete line left | Doesn't work on Linux, Mac and Windows |
| `Ctrl` + `Shift` + `Delete` | Delete line right | Doesn't work on Mac |
| `Ctrl` + `C` | Emit `SIGINT` or close the readline instance |  |
| `Ctrl` + `H` | Delete left |  |
| `Ctrl` + `D` | Delete right or close the readline instance in case the current line is empty / EOF | Doesn't work on Windows |
| `Ctrl` + `U` | Delete from the current position to the line start |  |
| `Ctrl` + `K` | Delete from the current position to the end of line |  |
| `Ctrl` + `Y` | Yank (Recall) the previously deleted text | Only works with text deleted by `Ctrl` + `U` or `Ctrl` + `K` |
| `Meta` + `Y` | Cycle among previously deleted texts | Only available when the last keystroke is `Ctrl` + `Y` or `Meta` + `Y` |
| `Ctrl` + `A` | Go to start of line |  |
| `Ctrl` + `E` | Go to end of line |  |
| `Ctrl` + `B` | Back one character |  |
| `Ctrl` + `F` | Forward one character |  |
| `Ctrl` + `L` | Clear screen |  |
| `Ctrl` + `N` | Next history item |  |
| `Ctrl` + `P` | Previous history item |  |
| `Ctrl` + `-` | Undo previous change | Any keystroke that emits key code `0x1F` will do this action.<br> In many terminals, for example `xterm`,<br> this is bound to `Ctrl` + `-`. |
| `Ctrl` + `6` | Redo previous change | Many terminals don't have a default redo keystroke.<br> We choose key code `0x1E` to perform redo.<br> In `xterm`, it is bound to `Ctrl` + `6`<br> by default. |
| `Ctrl` + `Z` | Moves running process into background. Type<br> `fg` and press `Enter`<br> to return. | Doesn't work on Windows |
| `Ctrl` + `W` or `Ctrl`<br> + `Backspace` | Delete backward to a word boundary | `Ctrl` + `Backspace` Doesn't<br> work on Linux, Mac and Windows |
| `Ctrl` + `Delete` | Delete forward to a word boundary | Doesn't work on Mac |
| `Ctrl` + `Left arrow` or<br> `Meta` + `B` | Word left | `Ctrl` + `Left arrow` Doesn't work<br> on Mac |
| `Ctrl` + `Right arrow` or<br> `Meta` + `F` | Word right | `Ctrl` + `Right arrow` Doesn't work<br> on Mac |
| `Meta` + `D` or `Meta`<br> + `Delete` | Delete word right | `Meta` + `Delete` Doesn't work<br> on windows |
| `Meta` + `Backspace` | Delete word left | Doesn't work on Mac |