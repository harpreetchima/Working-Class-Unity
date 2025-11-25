---
url: "https://nodejs.org/dist/latest/docs/api/debugger.html"
title: "Debugger | Node.js v25.2.1 Documentation"
---

[Skip to content](https://nodejs.org/dist/latest/docs/api/debugger.html#apicontent)

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
- [Table of contents](https://nodejs.org/dist/latest/docs/api/debugger.html#toc-picker)




- [Debugger](https://nodejs.org/dist/latest/docs/api/debugger.html#debugger)
  - [Watchers](https://nodejs.org/dist/latest/docs/api/debugger.html#watchers)
  - [Command reference](https://nodejs.org/dist/latest/docs/api/debugger.html#command-reference)
    - [Stepping](https://nodejs.org/dist/latest/docs/api/debugger.html#stepping)
    - [Breakpoints](https://nodejs.org/dist/latest/docs/api/debugger.html#breakpoints)
    - [Information](https://nodejs.org/dist/latest/docs/api/debugger.html#information)
    - [Execution control](https://nodejs.org/dist/latest/docs/api/debugger.html#execution-control)
    - [Various](https://nodejs.org/dist/latest/docs/api/debugger.html#various)
  - [Advanced usage](https://nodejs.org/dist/latest/docs/api/debugger.html#advanced-usage)
    - [V8 inspector integration for Node.js](https://nodejs.org/dist/latest/docs/api/debugger.html#v8-inspector-integration-for-nodejs)

- [Index](https://nodejs.org/dist/latest/docs/api/debugger.html#gtoc-picker)


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

- [Other versions](https://nodejs.org/dist/latest/docs/api/debugger.html#alt-docs)


01. [25.x](https://nodejs.org/docs/latest-v25.x/api/debugger.html)
02. [24.x **LTS**](https://nodejs.org/docs/latest-v24.x/api/debugger.html)
03. [23.x](https://nodejs.org/docs/latest-v23.x/api/debugger.html)
04. [22.x **LTS**](https://nodejs.org/docs/latest-v22.x/api/debugger.html)
05. [21.x](https://nodejs.org/docs/latest-v21.x/api/debugger.html)
06. [20.x **LTS**](https://nodejs.org/docs/latest-v20.x/api/debugger.html)
07. [19.x](https://nodejs.org/docs/latest-v19.x/api/debugger.html)
08. [18.x](https://nodejs.org/docs/latest-v18.x/api/debugger.html)
09. [17.x](https://nodejs.org/docs/latest-v17.x/api/debugger.html)
10. [16.x](https://nodejs.org/docs/latest-v16.x/api/debugger.html)
11. [15.x](https://nodejs.org/docs/latest-v15.x/api/debugger.html)
12. [14.x](https://nodejs.org/docs/latest-v14.x/api/debugger.html)
13. [13.x](https://nodejs.org/docs/latest-v13.x/api/debugger.html)
14. [12.x](https://nodejs.org/docs/latest-v12.x/api/debugger.html)
15. [11.x](https://nodejs.org/docs/latest-v11.x/api/debugger.html)
16. [10.x](https://nodejs.org/docs/latest-v10.x/api/debugger.html)
17. [9.x](https://nodejs.org/docs/latest-v9.x/api/debugger.html)
18. [8.x](https://nodejs.org/docs/latest-v8.x/api/debugger.html)
19. [7.x](https://nodejs.org/docs/latest-v7.x/api/debugger.html)
20. [6.x](https://nodejs.org/docs/latest-v6.x/api/debugger.html)
21. [5.x](https://nodejs.org/docs/latest-v5.x/api/debugger.html)
22. [4.x](https://nodejs.org/docs/latest-v4.x/api/debugger.html)
23. [0.12.x](https://nodejs.org/docs/latest-v0.12.x/api/debugger.html)
24. [0.10.x](https://nodejs.org/docs/latest-v0.10.x/api/debugger.html)

- [Options](https://nodejs.org/dist/latest/docs/api/debugger.html#options-picker)


- [View on single page](https://nodejs.org/dist/latest/docs/api/all.html)
- [View as JSON](https://nodejs.org/dist/latest/docs/api/debugger.json)
- [Edit on GitHub](https://github.com/nodejs/node/edit/main/doc/api/debugger.md)

* * *

Table of contents

- [Debugger](https://nodejs.org/dist/latest/docs/api/debugger.html#debugger)
  - [Watchers](https://nodejs.org/dist/latest/docs/api/debugger.html#watchers)
  - [Command reference](https://nodejs.org/dist/latest/docs/api/debugger.html#command-reference)
    - [Stepping](https://nodejs.org/dist/latest/docs/api/debugger.html#stepping)
    - [Breakpoints](https://nodejs.org/dist/latest/docs/api/debugger.html#breakpoints)
    - [Information](https://nodejs.org/dist/latest/docs/api/debugger.html#information)
    - [Execution control](https://nodejs.org/dist/latest/docs/api/debugger.html#execution-control)
    - [Various](https://nodejs.org/dist/latest/docs/api/debugger.html#various)
  - [Advanced usage](https://nodejs.org/dist/latest/docs/api/debugger.html#advanced-usage)
    - [V8 inspector integration for Node.js](https://nodejs.org/dist/latest/docs/api/debugger.html#v8-inspector-integration-for-nodejs)

## Debugger[\#](https://nodejs.org/dist/latest/docs/api/debugger.html\#debugger)

[Stability: 2](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Stable

Node.js includes a command-line debugging utility. The Node.js debugger client
is not a full-featured debugger, but simple stepping and inspection are
possible.

To use it, start Node.js with the `inspect` argument followed by the path to the
script to debug.

```console
$ node inspect myscript.js
< Debugger listening on ws://127.0.0.1:9229/621111f9-ffcb-4e82-b718-48a145fa5db8
< For help, see: https://nodejs.org/en/docs/inspector
<
connecting to 127.0.0.1:9229 ... ok
< Debugger attached.
<
 ok
Break on start in myscript.js:2
  1 // myscript.js
> 2 global.x = 5;
  3 setTimeout(() => {
  4   debugger;
debug> copy
```

The debugger automatically breaks on the first executable line. To instead
run until the first breakpoint (specified by a [`debugger`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/debugger) statement), set
the `NODE_INSPECT_RESUME_ON_START` environment variable to `1`.

```console
$ cat myscript.js
// myscript.js
global.x = 5;
setTimeout(() => {
  debugger;
  console.log('world');
}, 1000);
console.log('hello');
$ NODE_INSPECT_RESUME_ON_START=1 node inspect myscript.js
< Debugger listening on ws://127.0.0.1:9229/f1ed133e-7876-495b-83ae-c32c6fc319c2
< For help, see: https://nodejs.org/en/docs/inspector
<
connecting to 127.0.0.1:9229 ... ok
< Debugger attached.
<
< hello
<
break in myscript.js:4
  2 global.x = 5;
  3 setTimeout(() => {
> 4   debugger;
  5   console.log('world');
  6 }, 1000);
debug> next
break in myscript.js:5
  3 setTimeout(() => {
  4   debugger;
> 5   console.log('world');
  6 }, 1000);
  7 console.log('hello');
debug> repl
Press Ctrl+C to leave debug repl
> x
5
> 2 + 2
4
debug> next
< world
<
break in myscript.js:6
  4   debugger;
  5   console.log('world');
> 6 }, 1000);
  7 console.log('hello');
  8
debug> .exit
$ copy
```

The `repl` command allows code to be evaluated remotely. The `next` command
steps to the next line. Type `help` to see what other commands are available.

Pressing `enter` without typing a command will repeat the previous debugger
command.

### Watchers[\#](https://nodejs.org/dist/latest/docs/api/debugger.html\#watchers)

It is possible to watch expression and variable values while debugging. On
every breakpoint, each expression from the watchers list will be evaluated
in the current context and displayed immediately before the breakpoint's
source code listing.

To begin watching an expression, type `watch('my_expression')`. The command
`watchers` will print the active watchers. To remove a watcher, type
`unwatch('my_expression')`.

### Command reference[\#](https://nodejs.org/dist/latest/docs/api/debugger.html\#command-reference)

#### Stepping[\#](https://nodejs.org/dist/latest/docs/api/debugger.html\#stepping)

- `cont`, `c`: Continue execution
- `next`, `n`: Step next
- `step`, `s`: Step in
- `out`, `o`: Step out
- `pause`: Pause running code (like pause button in Developer Tools)

#### Breakpoints[\#](https://nodejs.org/dist/latest/docs/api/debugger.html\#breakpoints)

- `setBreakpoint()`, `sb()`: Set breakpoint on current line
- `setBreakpoint(line)`, `sb(line)`: Set breakpoint on specific line
- `setBreakpoint('fn()')`, `sb(...)`: Set breakpoint on a first statement in
function's body
- `setBreakpoint('script.js', 1)`, `sb(...)`: Set breakpoint on first line of
`script.js`
- `setBreakpoint('script.js', 1, 'num < 4')`, `sb(...)`: Set conditional
breakpoint on first line of `script.js` that only breaks when `num < 4`
evaluates to `true`
- `clearBreakpoint('script.js', 1)`, `cb(...)`: Clear breakpoint in `script.js`
on line 1

It is also possible to set a breakpoint in a file (module) that
is not loaded yet:

```console
$ node inspect main.js
< Debugger listening on ws://127.0.0.1:9229/48a5b28a-550c-471b-b5e1-d13dd7165df9
< For help, see: https://nodejs.org/en/docs/inspector
<
connecting to 127.0.0.1:9229 ... ok
< Debugger attached.
<
Break on start in main.js:1
> 1 const mod = require('./mod.js');
  2 mod.hello();
  3 mod.hello();
debug> setBreakpoint('mod.js', 22)
Warning: script 'mod.js' was not loaded yet.
debug> c
break in mod.js:22
 20 // USE OR OTHER DEALINGS IN THE SOFTWARE.
 21
>22 exports.hello = function() {
 23   return 'hello from module';
 24 };
debug> copy
```

It is also possible to set a conditional breakpoint that only breaks when a
given expression evaluates to `true`:

```console
$ node inspect main.js
< Debugger listening on ws://127.0.0.1:9229/ce24daa8-3816-44d4-b8ab-8273c8a66d35
< For help, see: https://nodejs.org/en/docs/inspector
<
connecting to 127.0.0.1:9229 ... ok
< Debugger attached.
Break on start in main.js:7
  5 }
  6
> 7 addOne(10);
  8 addOne(-1);
  9
debug> setBreakpoint('main.js', 4, 'num < 0')
  1 'use strict';
  2
  3 function addOne(num) {
> 4   return num + 1;
  5 }
  6
  7 addOne(10);
  8 addOne(-1);
  9
debug> cont
break in main.js:4
  2
  3 function addOne(num) {
> 4   return num + 1;
  5 }
  6
debug> exec('num')
-1
debug> copy
```

#### Information[\#](https://nodejs.org/dist/latest/docs/api/debugger.html\#information)

- `backtrace`, `bt`: Print backtrace of current execution frame
- `list(5)`: List scripts source code with 5 line context (5 lines before and
after)
- `watch(expr)`: Add expression to watch list
- `unwatch(expr)`: Remove expression from watch list
- `unwatch(index)`: Remove expression at specific index from watch list
- `watchers`: List all watchers and their values (automatically listed on each
breakpoint)
- `repl`: Open debugger's repl for evaluation in debugging script's context
- `exec expr`, `p expr`: Execute an expression in debugging script's context and
print its value
- `profile`: Start CPU profiling session
- `profileEnd`: Stop current CPU profiling session
- `profiles`: List all completed CPU profiling sessions
- `profiles[n].save(filepath = 'node.cpuprofile')`: Save CPU profiling session
to disk as JSON
- `takeHeapSnapshot(filepath = 'node.heapsnapshot')`: Take a heap snapshot
and save to disk as JSON

#### Execution control[\#](https://nodejs.org/dist/latest/docs/api/debugger.html\#execution-control)

- `run`: Run script (automatically runs on debugger's start)
- `restart`: Restart script
- `kill`: Kill script

#### Various[\#](https://nodejs.org/dist/latest/docs/api/debugger.html\#various)

- `scripts`: List all loaded scripts
- `version`: Display V8's version

### Advanced usage[\#](https://nodejs.org/dist/latest/docs/api/debugger.html\#advanced-usage)

#### V8 inspector integration for Node.js[\#](https://nodejs.org/dist/latest/docs/api/debugger.html\#v8-inspector-integration-for-nodejs)

V8 Inspector integration allows attaching Chrome DevTools to Node.js
instances for debugging and profiling. It uses the
[Chrome DevTools Protocol](https://chromedevtools.github.io/devtools-protocol/).

V8 Inspector can be enabled by passing the `--inspect` flag when starting a
Node.js application. It is also possible to supply a custom port with that flag,
e.g. `--inspect=9222` will accept DevTools connections on port 9222.

Using the `--inspect` flag will execute the code immediately before debugger is connected.
This means that the code will start running before you can start debugging, which might
not be ideal if you want to debug from the very beginning.

In such cases, you have two alternatives:

1. `--inspect-wait` flag: This flag will wait for debugger to be attached before executing the code.
This allows you to start debugging right from the beginning of the execution.
2. `--inspect-brk` flag: Unlike `--inspect`, this flag will break on the first line of the code
as soon as debugger is attached. This is useful when you want to debug the code step by step
from the very beginning, without any code execution prior to debugging.

So, when deciding between `--inspect`, `--inspect-wait`, and `--inspect-brk`, consider whether you want
the code to start executing immediately, wait for debugger to be attached before execution,
or break on the first line for step-by-step debugging.

```console
$ node --inspect index.js
Debugger listening on ws://127.0.0.1:9229/dc9010dd-f8b8-4ac5-a510-c1a114ec7d29
For help, see: https://nodejs.org/en/docs/inspector copy
```

(In the example above, the UUID dc9010dd-f8b8-4ac5-a510-c1a114ec7d29
at the end of the URL is generated on the fly, it varies in different
debugging sessions.)

If the Chrome browser is older than 66.0.3345.0,
use `inspector.html` instead of `js_app.html` in the above URL.

Chrome DevTools doesn't support debugging [worker threads](https://nodejs.org/dist/latest/docs/api/worker_threads.html) yet.
[ndb](https://github.com/GoogleChromeLabs/ndb/) can be used to debug them.