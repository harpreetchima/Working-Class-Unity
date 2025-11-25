---
url: "https://nodejs.org/dist/latest/docs/api/permissions.html"
title: "Permissions | Node.js v25.2.1 Documentation"
---

[Skip to content](https://nodejs.org/dist/latest/docs/api/permissions.html#apicontent)

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
- [Table of contents](https://nodejs.org/dist/latest/docs/api/permissions.html#toc-picker)




- [Permissions](https://nodejs.org/dist/latest/docs/api/permissions.html#permissions)
  - [Process-based permissions](https://nodejs.org/dist/latest/docs/api/permissions.html#process-based-permissions)
    - [Permission Model](https://nodejs.org/dist/latest/docs/api/permissions.html#permission-model)
      - [Runtime API](https://nodejs.org/dist/latest/docs/api/permissions.html#runtime-api)
        - [`permission.has(scope[, reference])`](https://nodejs.org/dist/latest/docs/api/permissions.html#permissionhasscope-reference)
      - [File System Permissions](https://nodejs.org/dist/latest/docs/api/permissions.html#file-system-permissions)
      - [Using the Permission Model with `npx`](https://nodejs.org/dist/latest/docs/api/permissions.html#using-the-permission-model-with-npx)
      - [Permission Model constraints](https://nodejs.org/dist/latest/docs/api/permissions.html#permission-model-constraints)
      - [Limitations and Known Issues](https://nodejs.org/dist/latest/docs/api/permissions.html#limitations-and-known-issues)

- [Index](https://nodejs.org/dist/latest/docs/api/permissions.html#gtoc-picker)


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

- [Other versions](https://nodejs.org/dist/latest/docs/api/permissions.html#alt-docs)


1. [25.x](https://nodejs.org/docs/latest-v25.x/api/permissions.html)
2. [24.x **LTS**](https://nodejs.org/docs/latest-v24.x/api/permissions.html)
3. [23.x](https://nodejs.org/docs/latest-v23.x/api/permissions.html)
4. [22.x **LTS**](https://nodejs.org/docs/latest-v22.x/api/permissions.html)
5. [21.x](https://nodejs.org/docs/latest-v21.x/api/permissions.html)
6. [20.x **LTS**](https://nodejs.org/docs/latest-v20.x/api/permissions.html)

- [Options](https://nodejs.org/dist/latest/docs/api/permissions.html#options-picker)


- [View on single page](https://nodejs.org/dist/latest/docs/api/all.html)
- [View as JSON](https://nodejs.org/dist/latest/docs/api/permissions.json)
- [Edit on GitHub](https://github.com/nodejs/node/edit/main/doc/api/permissions.md)

* * *

Table of contents

- [Permissions](https://nodejs.org/dist/latest/docs/api/permissions.html#permissions)
  - [Process-based permissions](https://nodejs.org/dist/latest/docs/api/permissions.html#process-based-permissions)
    - [Permission Model](https://nodejs.org/dist/latest/docs/api/permissions.html#permission-model)
      - [Runtime API](https://nodejs.org/dist/latest/docs/api/permissions.html#runtime-api)
        - [`permission.has(scope[, reference])`](https://nodejs.org/dist/latest/docs/api/permissions.html#permissionhasscope-reference)
      - [File System Permissions](https://nodejs.org/dist/latest/docs/api/permissions.html#file-system-permissions)
      - [Using the Permission Model with `npx`](https://nodejs.org/dist/latest/docs/api/permissions.html#using-the-permission-model-with-npx)
      - [Permission Model constraints](https://nodejs.org/dist/latest/docs/api/permissions.html#permission-model-constraints)
      - [Limitations and Known Issues](https://nodejs.org/dist/latest/docs/api/permissions.html#limitations-and-known-issues)

## Permissions[\#](https://nodejs.org/dist/latest/docs/api/permissions.html\#permissions)

Permissions can be used to control what system resources the
Node.js process has access to or what actions the process can take
with those resources.

- [Process-based permissions](https://nodejs.org/dist/latest/docs/api/permissions.html#process-based-permissions) control the Node.js
process's access to resources.
The resource can be entirely allowed or denied, or actions related to it can
be controlled. For example, file system reads can be allowed while denying
writes.
This feature does not protect against malicious code. According to the Node.js
[Security Policy](https://github.com/nodejs/node/blob/main/SECURITY.md), Node.js trusts any code it is asked to run.

The permission model implements a "seat belt" approach, which prevents trusted
code from unintentionally changing files or using resources that access has
not explicitly been granted to. It does not provide security guarantees in the
presence of malicious code. Malicious code can bypass the permission model and
execute arbitrary code without the restrictions imposed by the permission
model.

If you find a potential security vulnerability, please refer to our
[Security Policy](https://github.com/nodejs/node/blob/main/SECURITY.md).

### Process-based permissions[\#](https://nodejs.org/dist/latest/docs/api/permissions.html\#process-based-permissions)

#### Permission Model[\#](https://nodejs.org/dist/latest/docs/api/permissions.html\#permission-model)

History

| Version | Changes |
| --- | --- |
| v23.5.0, v22.13.0 | This feature is no longer experimental. |
| v20.0.0 | Added in: v20.0.0 |

[Stability: 2](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Stable

The Node.js Permission Model is a mechanism for restricting access to specific
resources during execution.
The API exists behind a flag [`--permission`](https://nodejs.org/dist/latest/docs/api/cli.html#--permission) which when enabled,
will restrict access to all available permissions.

The available permissions are documented by the [`--permission`](https://nodejs.org/dist/latest/docs/api/cli.html#--permission)
flag.

When starting Node.js with `--permission`,
the ability to access the file system through the `fs` module, access the network,
spawn processes, use `node:worker_threads`, use native addons, use WASI, and
enable the runtime inspector will be restricted (the listener for SIGUSR1 won't
be created).

```console
$ node --permission index.js

Error: Access to this API has been restricted
    at node:internal/main/run_main_module:23:47 {
  code: 'ERR_ACCESS_DENIED',
  permission: 'FileSystemRead',
  resource: '/home/user/index.js'
} copy
```

Allowing access to spawning a process and creating worker threads can be done
using the [`--allow-child-process`](https://nodejs.org/dist/latest/docs/api/cli.html#--allow-child-process) and [`--allow-worker`](https://nodejs.org/dist/latest/docs/api/cli.html#--allow-worker) respectively.

To allow network access, use [`--allow-net`](https://nodejs.org/dist/latest/docs/api/cli.html#--allow-net) and for allowing native addons
when using permission model, use the [`--allow-addons`](https://nodejs.org/dist/latest/docs/api/cli.html#--allow-addons)
flag. For WASI, use the [`--allow-wasi`](https://nodejs.org/dist/latest/docs/api/cli.html#--allow-wasi) flag.

##### Runtime API[\#](https://nodejs.org/dist/latest/docs/api/permissions.html\#runtime-api)

When enabling the Permission Model through the [`--permission`](https://nodejs.org/dist/latest/docs/api/cli.html#--permission)
flag a new property `permission` is added to the `process` object.
This property contains one function:

###### `permission.has(scope[, reference])`[\#](https://nodejs.org/dist/latest/docs/api/permissions.html\#permissionhasscope-reference)

API call to check permissions at runtime ( [`permission.has()`](https://nodejs.org/dist/latest/docs/api/process.html#processpermissionhasscope-reference))

```js
process.permission.has('fs.write'); // true
process.permission.has('fs.write', '/home/rafaelgss/protected-folder'); // true

process.permission.has('fs.read'); // true
process.permission.has('fs.read', '/home/rafaelgss/protected-folder'); // false copy
```

##### File System Permissions[\#](https://nodejs.org/dist/latest/docs/api/permissions.html\#file-system-permissions)

The Permission Model, by default, restricts access to the file system through the `node:fs` module.
It does not guarantee that users will not be able to access the file system through other means,
such as through the `node:sqlite` module.

To allow access to the file system, use the [`--allow-fs-read`](https://nodejs.org/dist/latest/docs/api/cli.html#--allow-fs-read) and
[`--allow-fs-write`](https://nodejs.org/dist/latest/docs/api/cli.html#--allow-fs-write) flags:

```console
$ node --permission --allow-fs-read=* --allow-fs-write=* index.js
Hello world! copy
```

By default the entrypoints of your application are included
in the allowed file system read list. For example:

```console
$ node --permission index.js copy
```

- `index.js` will be included in the allowed file system read list

```console
$ node -r /path/to/custom-require.js --permission index.js. copy
```

- `/path/to/custom-require.js` will be included in the allowed file system read
list.
- `index.js` will be included in the allowed file system read list.

The valid arguments for both flags are:

- `*` \- To allow all `FileSystemRead` or `FileSystemWrite` operations,
respectively.
- Relative paths to the current working directory.
- Absolute paths.

Example:

- `--allow-fs-read=*` \- It will allow all `FileSystemRead` operations.
- `--allow-fs-write=*` \- It will allow all `FileSystemWrite` operations.
- `--allow-fs-write=/tmp/` \- It will allow `FileSystemWrite` access to the `/tmp/`
folder.
- `--allow-fs-read=/tmp/ --allow-fs-read=/home/.gitignore` \- It allows `FileSystemRead` access
to the `/tmp/` folder **and** the `/home/.gitignore` path.

Wildcards are supported too:

- `--allow-fs-read=/home/test*` will allow read access to everything
that matches the wildcard. e.g: `/home/test/file1` or `/home/test2`

After passing a wildcard character (`*`) all subsequent characters will
be ignored. For example: `/home/*.js` will work similar to `/home/*`.

When the permission model is initialized, it will automatically add a wildcard
(\*) if the specified directory exists. For example, if `/home/test/files`
exists, it will be treated as `/home/test/files/*`. However, if the directory
does not exist, the wildcard will not be added, and access will be limited to
`/home/test/files`. If you want to allow access to a folder that does not exist
yet, make sure to explicitly include the wildcard:
`/my-path/folder-do-not-exist/*`.

##### Using the Permission Model with `npx`[\#](https://nodejs.org/dist/latest/docs/api/permissions.html\#using-the-permission-model-with-npx)

If you're using [`npx`](https://docs.npmjs.com/cli/commands/npx) to execute a Node.js script, you can enable the
Permission Model by passing the `--node-options` flag. For example:

```bash
npx --node-options="--permission" package-name copy
```

This sets the `NODE_OPTIONS` environment variable for all Node.js processes
spawned by [`npx`](https://docs.npmjs.com/cli/commands/npx), without affecting the `npx` process itself.

**FileSystemRead Error with `npx`**

The above command will likely throw a `FileSystemRead` invalid access error
because Node.js requires file system read access to locate and execute the
package. To avoid this:

1. **Using a Globally Installed Package**
Grant read access to the global `node_modules` directory by running:


```bash
npx --node-options="--permission --allow-fs-read=$(npm prefix -g)" package-name copy
```

2. **Using the `npx` Cache**
If you are installing the package temporarily or relying on the `npx` cache,
grant read access to the npm cache directory:


```bash
npx --node-options="--permission --allow-fs-read=$(npm config get cache)" package-name copy
```


Any arguments you would normally pass to `node` (e.g., `--allow-*` flags) can
also be passed through the `--node-options` flag. This flexibility makes it
easy to configure permissions as needed when using `npx`.

##### Permission Model constraints[\#](https://nodejs.org/dist/latest/docs/api/permissions.html\#permission-model-constraints)

There are constraints you need to know before using this system:

- The model does not inherit to a worker thread.
- When using the Permission Model the following features will be restricted:
  - Native modules
  - Network
  - Child process
  - Worker Threads
  - Inspector protocol
  - File system access
  - WASI
- The Permission Model is initialized after the Node.js environment is set up.
However, certain flags such as `--env-file` or `--openssl-config` are designed
to read files before environment initialization. As a result, such flags are
not subject to the rules of the Permission Model. The same applies for V8
flags that can be set via runtime through `v8.setFlagsFromString`.
- OpenSSL engines cannot be requested at runtime when the Permission
Model is enabled, affecting the built-in crypto, https, and tls modules.
- Run-Time Loadable Extensions cannot be loaded when the Permission Model is
enabled, affecting the sqlite module.
- Using existing file descriptors via the `node:fs` module bypasses the
Permission Model.

##### Limitations and Known Issues[\#](https://nodejs.org/dist/latest/docs/api/permissions.html\#limitations-and-known-issues)

- Symbolic links will be followed even to locations outside of the set of paths
that access has been granted to. Relative symbolic links may allow access to
arbitrary files and directories. When starting applications with the
permission model enabled, you must ensure that no paths to which access has
been granted contain relative symbolic links.