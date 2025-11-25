---
url: "https://nodejs.org/dist/latest/docs/api/webcrypto.html"
title: "Web Crypto API | Node.js v25.2.1 Documentation"
---

[Skip to content](https://nodejs.org/dist/latest/docs/api/webcrypto.html#apicontent)

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
- [Table of contents](https://nodejs.org/dist/latest/docs/api/webcrypto.html#toc-picker)




- [Web Crypto API](https://nodejs.org/dist/latest/docs/api/webcrypto.html#web-crypto-api)
  - [Modern Algorithms in the Web Cryptography API](https://nodejs.org/dist/latest/docs/api/webcrypto.html#modern-algorithms-in-the-web-cryptography-api)
  - [Secure Curves in the Web Cryptography API](https://nodejs.org/dist/latest/docs/api/webcrypto.html#secure-curves-in-the-web-cryptography-api)
  - [Examples](https://nodejs.org/dist/latest/docs/api/webcrypto.html#examples)
    - [Generating keys](https://nodejs.org/dist/latest/docs/api/webcrypto.html#generating-keys)
      - [AES keys](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aes-keys)
      - [ECDSA key pairs](https://nodejs.org/dist/latest/docs/api/webcrypto.html#ecdsa-key-pairs)
      - [Ed25519/X25519 key pairs](https://nodejs.org/dist/latest/docs/api/webcrypto.html#ed25519x25519-key-pairs)
      - [HMAC keys](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hmac-keys)
      - [RSA key pairs](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsa-key-pairs)
    - [Encryption and decryption](https://nodejs.org/dist/latest/docs/api/webcrypto.html#encryption-and-decryption)
    - [Exporting and importing keys](https://nodejs.org/dist/latest/docs/api/webcrypto.html#exporting-and-importing-keys)
    - [Wrapping and unwrapping keys](https://nodejs.org/dist/latest/docs/api/webcrypto.html#wrapping-and-unwrapping-keys)
    - [Sign and verify](https://nodejs.org/dist/latest/docs/api/webcrypto.html#sign-and-verify)
    - [Deriving bits and keys](https://nodejs.org/dist/latest/docs/api/webcrypto.html#deriving-bits-and-keys)
    - [Digest](https://nodejs.org/dist/latest/docs/api/webcrypto.html#digest)
    - [Checking for runtime algorithm support](https://nodejs.org/dist/latest/docs/api/webcrypto.html#checking-for-runtime-algorithm-support)
  - [Algorithm matrix](https://nodejs.org/dist/latest/docs/api/webcrypto.html#algorithm-matrix)
    - [Key Management APIs](https://nodejs.org/dist/latest/docs/api/webcrypto.html#key-management-apis)
    - [Crypto Operation APIs](https://nodejs.org/dist/latest/docs/api/webcrypto.html#crypto-operation-apis)
  - [Class: `Crypto`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-crypto)
    - [`crypto.subtle`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cryptosubtle)
    - [`crypto.getRandomValues(typedArray)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cryptogetrandomvaluestypedarray)
    - [`crypto.randomUUID()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cryptorandomuuid)
  - [Class: `CryptoKey`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey)
    - [`cryptoKey.algorithm`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cryptokeyalgorithm)
    - [`cryptoKey.extractable`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cryptokeyextractable)
    - [`cryptoKey.type`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cryptokeytype)
    - [`cryptoKey.usages`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cryptokeyusages)
  - [Class: `CryptoKeyPair`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokeypair)
    - [`cryptoKeyPair.privateKey`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cryptokeypairprivatekey)
    - [`cryptoKeyPair.publicKey`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cryptokeypairpublickey)
  - [Class: `SubtleCrypto`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-subtlecrypto)
    - [Static method: `SubtleCrypto.supports(operation, algorithm[, lengthOrAdditionalAlgorithm])`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#static-method-subtlecryptosupportsoperation-algorithm-lengthoradditionalalgorithm)
    - [`subtle.decapsulateBits(decapsulationAlgorithm, decapsulationKey, ciphertext)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtledecapsulatebitsdecapsulationalgorithm-decapsulationkey-ciphertext)
    - [`subtle.decapsulateKey(decapsulationAlgorithm, decapsulationKey, ciphertext, sharedKeyAlgorithm, extractable, usages)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtledecapsulatekeydecapsulationalgorithm-decapsulationkey-ciphertext-sharedkeyalgorithm-extractable-usages)
    - [`subtle.decrypt(algorithm, key, data)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtledecryptalgorithm-key-data)
    - [`subtle.deriveBits(algorithm, baseKey[, length])`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlederivebitsalgorithm-basekey-length)
    - [`subtle.deriveKey(algorithm, baseKey, derivedKeyAlgorithm, extractable, keyUsages)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlederivekeyalgorithm-basekey-derivedkeyalgorithm-extractable-keyusages)
    - [`subtle.digest(algorithm, data)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtledigestalgorithm-data)
    - [`subtle.encapsulateBits(encapsulationAlgorithm, encapsulationKey)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleencapsulatebitsencapsulationalgorithm-encapsulationkey)
    - [`subtle.encapsulateKey(encapsulationAlgorithm, encapsulationKey, sharedKeyAlgorithm, extractable, usages)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleencapsulatekeyencapsulationalgorithm-encapsulationkey-sharedkeyalgorithm-extractable-usages)
    - [`subtle.encrypt(algorithm, key, data)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleencryptalgorithm-key-data)
    - [`subtle.exportKey(format, key)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleexportkeyformat-key)
    - [`subtle.getPublicKey(key, keyUsages)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlegetpublickeykey-keyusages)
    - [`subtle.generateKey(algorithm, extractable, keyUsages)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlegeneratekeyalgorithm-extractable-keyusages)
    - [`subtle.importKey(format, keyData, algorithm, extractable, keyUsages)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleimportkeyformat-keydata-algorithm-extractable-keyusages)
    - [`subtle.sign(algorithm, key, data)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlesignalgorithm-key-data)
    - [`subtle.unwrapKey(format, wrappedKey, unwrappingKey, unwrapAlgo, unwrappedKeyAlgo, extractable, keyUsages)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleunwrapkeyformat-wrappedkey-unwrappingkey-unwrapalgo-unwrappedkeyalgo-extractable-keyusages)
    - [`subtle.verify(algorithm, key, signature, data)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleverifyalgorithm-key-signature-data)
    - [`subtle.wrapKey(format, key, wrappingKey, wrapAlgo)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlewrapkeyformat-key-wrappingkey-wrapalgo)
  - [Algorithm parameters](https://nodejs.org/dist/latest/docs/api/webcrypto.html#algorithm-parameters)
    - [Class: `Algorithm`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm)
      - [`Algorithm.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#algorithmname)
    - [Class: `AeadParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aeadparams)
      - [`aeadParams.additionalData`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aeadparamsadditionaldata)
      - [`aeadParams.iv`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aeadparamsiv)
      - [`aeadParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aeadparamsname)
      - [`aeadParams.tagLength`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aeadparamstaglength)
    - [Class: `AesDerivedKeyParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aesderivedkeyparams)
      - [`aesDerivedKeyParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aesderivedkeyparamsname)
      - [`aesDerivedKeyParams.length`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aesderivedkeyparamslength)
    - [Class: `AesCbcParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aescbcparams)
      - [`aesCbcParams.iv`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aescbcparamsiv)
      - [`aesCbcParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aescbcparamsname)
    - [Class: `AesCtrParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aesctrparams)
      - [`aesCtrParams.counter`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aesctrparamscounter)
      - [`aesCtrParams.length`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aesctrparamslength)
      - [`aesCtrParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aesctrparamsname)
    - [Class: `AesKeyAlgorithm`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aeskeyalgorithm)
      - [`aesKeyAlgorithm.length`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aeskeyalgorithmlength)
      - [`aesKeyAlgorithm.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aeskeyalgorithmname)
    - [Class: `AesKeyGenParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aeskeygenparams)
      - [`aesKeyGenParams.length`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aeskeygenparamslength)
      - [`aesKeyGenParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aeskeygenparamsname)
    - [Class: `Argon2Params`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-argon2params)
      - [`argon2Params.associatedData`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#argon2paramsassociateddata)
      - [`argon2Params.memory`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#argon2paramsmemory)
      - [`argon2Params.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#argon2paramsname)
      - [`argon2Params.nonce`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#argon2paramsnonce)
      - [`argon2Params.parallelism`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#argon2paramsparallelism)
      - [`argon2Params.passes`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#argon2paramspasses)
      - [`argon2Params.secretValue`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#argon2paramssecretvalue)
      - [`argon2Params.version`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#argon2paramsversion)
    - [Class: `ContextParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-contextparams)
      - [`contextParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#contextparamsname)
      - [`contextParams.context`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#contextparamscontext)
    - [Class: `CShakeParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cshakeparams)
      - [`cShakeParams.customization`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cshakeparamscustomization)
      - [`cShakeParams.functionName`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cshakeparamsfunctionname)
      - [`cShakeParams.length`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cshakeparamslength)
      - [`cShakeParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cshakeparamsname)
    - [Class: `EcdhKeyDeriveParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-ecdhkeyderiveparams)
      - [`ecdhKeyDeriveParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#ecdhkeyderiveparamsname)
      - [`ecdhKeyDeriveParams.public`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#ecdhkeyderiveparamspublic)
    - [Class: `EcdsaParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-ecdsaparams)
      - [`ecdsaParams.hash`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#ecdsaparamshash)
      - [`ecdsaParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#ecdsaparamsname)
    - [Class: `EcKeyAlgorithm`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-eckeyalgorithm)
      - [`ecKeyAlgorithm.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#eckeyalgorithmname)
      - [`ecKeyAlgorithm.namedCurve`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#eckeyalgorithmnamedcurve)
    - [Class: `EcKeyGenParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-eckeygenparams)
      - [`ecKeyGenParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#eckeygenparamsname)
      - [`ecKeyGenParams.namedCurve`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#eckeygenparamsnamedcurve)
    - [Class: `EcKeyImportParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-eckeyimportparams)
      - [`ecKeyImportParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#eckeyimportparamsname)
      - [`ecKeyImportParams.namedCurve`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#eckeyimportparamsnamedcurve)
    - [Class: `EncapsulatedBits`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-encapsulatedbits)
      - [`encapsulatedBits.ciphertext`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#encapsulatedbitsciphertext)
      - [`encapsulatedBits.sharedKey`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#encapsulatedbitssharedkey)
    - [Class: `EncapsulatedKey`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-encapsulatedkey)
      - [`encapsulatedKey.ciphertext`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#encapsulatedkeyciphertext)
      - [`encapsulatedKey.sharedKey`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#encapsulatedkeysharedkey)
    - [Class: `HkdfParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-hkdfparams)
      - [`hkdfParams.hash`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hkdfparamshash)
      - [`hkdfParams.info`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hkdfparamsinfo)
      - [`hkdfParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hkdfparamsname)
      - [`hkdfParams.salt`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hkdfparamssalt)
    - [Class: `HmacImportParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-hmacimportparams)
      - [`hmacImportParams.hash`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hmacimportparamshash)
      - [`hmacImportParams.length`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hmacimportparamslength)
      - [`hmacImportParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hmacimportparamsname)
    - [Class: `HmacKeyAlgorithm`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-hmackeyalgorithm)
      - [`hmacKeyAlgorithm.hash`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hmackeyalgorithmhash)
      - [`hmacKeyAlgorithm.length`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hmackeyalgorithmlength)
      - [`hmacKeyAlgorithm.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hmackeyalgorithmname)
    - [Class: `HmacKeyGenParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-hmackeygenparams)
      - [`hmacKeyGenParams.hash`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hmackeygenparamshash)
      - [`hmacKeyGenParams.length`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hmackeygenparamslength)
      - [`hmacKeyGenParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hmackeygenparamsname)
    - [Class: `KeyAlgorithm`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-keyalgorithm)
      - [`keyAlgorithm.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#keyalgorithmname)
    - [Class: `KmacImportParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-kmacimportparams)
      - [`kmacImportParams.length`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#kmacimportparamslength)
      - [`kmacImportParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#kmacimportparamsname)
    - [Class: `KmacKeyAlgorithm`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-kmackeyalgorithm)
      - [`kmacKeyAlgorithm.length`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#kmackeyalgorithmlength)
      - [`kmacKeyAlgorithm.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#kmackeyalgorithmname)
    - [Class: `KmacKeyGenParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-kmackeygenparams)
      - [`kmacKeyGenParams.length`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#kmackeygenparamslength)
      - [`kmacKeyGenParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#kmackeygenparamsname)
    - [Class: `KmacParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-kmacparams)
      - [`kmacParams.algorithm`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#kmacparamsalgorithm)
      - [`kmacParams.customization`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#kmacparamscustomization)
      - [`kmacParams.length`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#kmacparamslength)
    - [Class: `Pbkdf2Params`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-pbkdf2params)
      - [`pbkdf2Params.hash`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#pbkdf2paramshash)
      - [`pbkdf2Params.iterations`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#pbkdf2paramsiterations)
      - [`pbkdf2Params.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#pbkdf2paramsname)
      - [`pbkdf2Params.salt`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#pbkdf2paramssalt)
    - [Class: `RsaHashedImportParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-rsahashedimportparams)
      - [`rsaHashedImportParams.hash`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsahashedimportparamshash)
      - [`rsaHashedImportParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsahashedimportparamsname)
    - [Class: `RsaHashedKeyAlgorithm`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-rsahashedkeyalgorithm)
      - [`rsaHashedKeyAlgorithm.hash`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsahashedkeyalgorithmhash)
      - [`rsaHashedKeyAlgorithm.modulusLength`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsahashedkeyalgorithmmoduluslength)
      - [`rsaHashedKeyAlgorithm.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsahashedkeyalgorithmname)
      - [`rsaHashedKeyAlgorithm.publicExponent`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsahashedkeyalgorithmpublicexponent)
    - [Class: `RsaHashedKeyGenParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-rsahashedkeygenparams)
      - [`rsaHashedKeyGenParams.hash`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsahashedkeygenparamshash)
      - [`rsaHashedKeyGenParams.modulusLength`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsahashedkeygenparamsmoduluslength)
      - [`rsaHashedKeyGenParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsahashedkeygenparamsname)
      - [`rsaHashedKeyGenParams.publicExponent`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsahashedkeygenparamspublicexponent)
    - [Class: `RsaOaepParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-rsaoaepparams)
      - [`rsaOaepParams.label`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsaoaepparamslabel)
      - [`rsaOaepParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsaoaepparamsname)
    - [Class: `RsaPssParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-rsapssparams)
      - [`rsaPssParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsapssparamsname)
      - [`rsaPssParams.saltLength`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsapssparamssaltlength)

- [Index](https://nodejs.org/dist/latest/docs/api/webcrypto.html#gtoc-picker)


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

- [Other versions](https://nodejs.org/dist/latest/docs/api/webcrypto.html#alt-docs)


01. [25.x](https://nodejs.org/docs/latest-v25.x/api/webcrypto.html)
02. [24.x **LTS**](https://nodejs.org/docs/latest-v24.x/api/webcrypto.html)
03. [23.x](https://nodejs.org/docs/latest-v23.x/api/webcrypto.html)
04. [22.x **LTS**](https://nodejs.org/docs/latest-v22.x/api/webcrypto.html)
05. [21.x](https://nodejs.org/docs/latest-v21.x/api/webcrypto.html)
06. [20.x **LTS**](https://nodejs.org/docs/latest-v20.x/api/webcrypto.html)
07. [19.x](https://nodejs.org/docs/latest-v19.x/api/webcrypto.html)
08. [18.x](https://nodejs.org/docs/latest-v18.x/api/webcrypto.html)
09. [17.x](https://nodejs.org/docs/latest-v17.x/api/webcrypto.html)
10. [16.x](https://nodejs.org/docs/latest-v16.x/api/webcrypto.html)
11. [15.x](https://nodejs.org/docs/latest-v15.x/api/webcrypto.html)

- [Options](https://nodejs.org/dist/latest/docs/api/webcrypto.html#options-picker)


- [View on single page](https://nodejs.org/dist/latest/docs/api/all.html)
- [View as JSON](https://nodejs.org/dist/latest/docs/api/webcrypto.json)
- [Edit on GitHub](https://github.com/nodejs/node/edit/main/doc/api/webcrypto.md)

* * *

Table of contents

- [Web Crypto API](https://nodejs.org/dist/latest/docs/api/webcrypto.html#web-crypto-api)
  - [Modern Algorithms in the Web Cryptography API](https://nodejs.org/dist/latest/docs/api/webcrypto.html#modern-algorithms-in-the-web-cryptography-api)
  - [Secure Curves in the Web Cryptography API](https://nodejs.org/dist/latest/docs/api/webcrypto.html#secure-curves-in-the-web-cryptography-api)
  - [Examples](https://nodejs.org/dist/latest/docs/api/webcrypto.html#examples)
    - [Generating keys](https://nodejs.org/dist/latest/docs/api/webcrypto.html#generating-keys)
      - [AES keys](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aes-keys)
      - [ECDSA key pairs](https://nodejs.org/dist/latest/docs/api/webcrypto.html#ecdsa-key-pairs)
      - [Ed25519/X25519 key pairs](https://nodejs.org/dist/latest/docs/api/webcrypto.html#ed25519x25519-key-pairs)
      - [HMAC keys](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hmac-keys)
      - [RSA key pairs](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsa-key-pairs)
    - [Encryption and decryption](https://nodejs.org/dist/latest/docs/api/webcrypto.html#encryption-and-decryption)
    - [Exporting and importing keys](https://nodejs.org/dist/latest/docs/api/webcrypto.html#exporting-and-importing-keys)
    - [Wrapping and unwrapping keys](https://nodejs.org/dist/latest/docs/api/webcrypto.html#wrapping-and-unwrapping-keys)
    - [Sign and verify](https://nodejs.org/dist/latest/docs/api/webcrypto.html#sign-and-verify)
    - [Deriving bits and keys](https://nodejs.org/dist/latest/docs/api/webcrypto.html#deriving-bits-and-keys)
    - [Digest](https://nodejs.org/dist/latest/docs/api/webcrypto.html#digest)
    - [Checking for runtime algorithm support](https://nodejs.org/dist/latest/docs/api/webcrypto.html#checking-for-runtime-algorithm-support)
  - [Algorithm matrix](https://nodejs.org/dist/latest/docs/api/webcrypto.html#algorithm-matrix)
    - [Key Management APIs](https://nodejs.org/dist/latest/docs/api/webcrypto.html#key-management-apis)
    - [Crypto Operation APIs](https://nodejs.org/dist/latest/docs/api/webcrypto.html#crypto-operation-apis)
  - [Class: `Crypto`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-crypto)
    - [`crypto.subtle`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cryptosubtle)
    - [`crypto.getRandomValues(typedArray)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cryptogetrandomvaluestypedarray)
    - [`crypto.randomUUID()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cryptorandomuuid)
  - [Class: `CryptoKey`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey)
    - [`cryptoKey.algorithm`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cryptokeyalgorithm)
    - [`cryptoKey.extractable`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cryptokeyextractable)
    - [`cryptoKey.type`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cryptokeytype)
    - [`cryptoKey.usages`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cryptokeyusages)
  - [Class: `CryptoKeyPair`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokeypair)
    - [`cryptoKeyPair.privateKey`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cryptokeypairprivatekey)
    - [`cryptoKeyPair.publicKey`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cryptokeypairpublickey)
  - [Class: `SubtleCrypto`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-subtlecrypto)
    - [Static method: `SubtleCrypto.supports(operation, algorithm[, lengthOrAdditionalAlgorithm])`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#static-method-subtlecryptosupportsoperation-algorithm-lengthoradditionalalgorithm)
    - [`subtle.decapsulateBits(decapsulationAlgorithm, decapsulationKey, ciphertext)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtledecapsulatebitsdecapsulationalgorithm-decapsulationkey-ciphertext)
    - [`subtle.decapsulateKey(decapsulationAlgorithm, decapsulationKey, ciphertext, sharedKeyAlgorithm, extractable, usages)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtledecapsulatekeydecapsulationalgorithm-decapsulationkey-ciphertext-sharedkeyalgorithm-extractable-usages)
    - [`subtle.decrypt(algorithm, key, data)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtledecryptalgorithm-key-data)
    - [`subtle.deriveBits(algorithm, baseKey[, length])`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlederivebitsalgorithm-basekey-length)
    - [`subtle.deriveKey(algorithm, baseKey, derivedKeyAlgorithm, extractable, keyUsages)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlederivekeyalgorithm-basekey-derivedkeyalgorithm-extractable-keyusages)
    - [`subtle.digest(algorithm, data)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtledigestalgorithm-data)
    - [`subtle.encapsulateBits(encapsulationAlgorithm, encapsulationKey)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleencapsulatebitsencapsulationalgorithm-encapsulationkey)
    - [`subtle.encapsulateKey(encapsulationAlgorithm, encapsulationKey, sharedKeyAlgorithm, extractable, usages)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleencapsulatekeyencapsulationalgorithm-encapsulationkey-sharedkeyalgorithm-extractable-usages)
    - [`subtle.encrypt(algorithm, key, data)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleencryptalgorithm-key-data)
    - [`subtle.exportKey(format, key)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleexportkeyformat-key)
    - [`subtle.getPublicKey(key, keyUsages)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlegetpublickeykey-keyusages)
    - [`subtle.generateKey(algorithm, extractable, keyUsages)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlegeneratekeyalgorithm-extractable-keyusages)
    - [`subtle.importKey(format, keyData, algorithm, extractable, keyUsages)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleimportkeyformat-keydata-algorithm-extractable-keyusages)
    - [`subtle.sign(algorithm, key, data)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlesignalgorithm-key-data)
    - [`subtle.unwrapKey(format, wrappedKey, unwrappingKey, unwrapAlgo, unwrappedKeyAlgo, extractable, keyUsages)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleunwrapkeyformat-wrappedkey-unwrappingkey-unwrapalgo-unwrappedkeyalgo-extractable-keyusages)
    - [`subtle.verify(algorithm, key, signature, data)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleverifyalgorithm-key-signature-data)
    - [`subtle.wrapKey(format, key, wrappingKey, wrapAlgo)`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlewrapkeyformat-key-wrappingkey-wrapalgo)
  - [Algorithm parameters](https://nodejs.org/dist/latest/docs/api/webcrypto.html#algorithm-parameters)
    - [Class: `Algorithm`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm)
      - [`Algorithm.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#algorithmname)
    - [Class: `AeadParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aeadparams)
      - [`aeadParams.additionalData`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aeadparamsadditionaldata)
      - [`aeadParams.iv`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aeadparamsiv)
      - [`aeadParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aeadparamsname)
      - [`aeadParams.tagLength`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aeadparamstaglength)
    - [Class: `AesDerivedKeyParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aesderivedkeyparams)
      - [`aesDerivedKeyParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aesderivedkeyparamsname)
      - [`aesDerivedKeyParams.length`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aesderivedkeyparamslength)
    - [Class: `AesCbcParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aescbcparams)
      - [`aesCbcParams.iv`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aescbcparamsiv)
      - [`aesCbcParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aescbcparamsname)
    - [Class: `AesCtrParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aesctrparams)
      - [`aesCtrParams.counter`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aesctrparamscounter)
      - [`aesCtrParams.length`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aesctrparamslength)
      - [`aesCtrParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aesctrparamsname)
    - [Class: `AesKeyAlgorithm`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aeskeyalgorithm)
      - [`aesKeyAlgorithm.length`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aeskeyalgorithmlength)
      - [`aesKeyAlgorithm.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aeskeyalgorithmname)
    - [Class: `AesKeyGenParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aeskeygenparams)
      - [`aesKeyGenParams.length`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aeskeygenparamslength)
      - [`aesKeyGenParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#aeskeygenparamsname)
    - [Class: `Argon2Params`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-argon2params)
      - [`argon2Params.associatedData`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#argon2paramsassociateddata)
      - [`argon2Params.memory`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#argon2paramsmemory)
      - [`argon2Params.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#argon2paramsname)
      - [`argon2Params.nonce`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#argon2paramsnonce)
      - [`argon2Params.parallelism`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#argon2paramsparallelism)
      - [`argon2Params.passes`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#argon2paramspasses)
      - [`argon2Params.secretValue`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#argon2paramssecretvalue)
      - [`argon2Params.version`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#argon2paramsversion)
    - [Class: `ContextParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-contextparams)
      - [`contextParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#contextparamsname)
      - [`contextParams.context`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#contextparamscontext)
    - [Class: `CShakeParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cshakeparams)
      - [`cShakeParams.customization`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cshakeparamscustomization)
      - [`cShakeParams.functionName`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cshakeparamsfunctionname)
      - [`cShakeParams.length`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cshakeparamslength)
      - [`cShakeParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cshakeparamsname)
    - [Class: `EcdhKeyDeriveParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-ecdhkeyderiveparams)
      - [`ecdhKeyDeriveParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#ecdhkeyderiveparamsname)
      - [`ecdhKeyDeriveParams.public`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#ecdhkeyderiveparamspublic)
    - [Class: `EcdsaParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-ecdsaparams)
      - [`ecdsaParams.hash`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#ecdsaparamshash)
      - [`ecdsaParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#ecdsaparamsname)
    - [Class: `EcKeyAlgorithm`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-eckeyalgorithm)
      - [`ecKeyAlgorithm.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#eckeyalgorithmname)
      - [`ecKeyAlgorithm.namedCurve`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#eckeyalgorithmnamedcurve)
    - [Class: `EcKeyGenParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-eckeygenparams)
      - [`ecKeyGenParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#eckeygenparamsname)
      - [`ecKeyGenParams.namedCurve`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#eckeygenparamsnamedcurve)
    - [Class: `EcKeyImportParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-eckeyimportparams)
      - [`ecKeyImportParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#eckeyimportparamsname)
      - [`ecKeyImportParams.namedCurve`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#eckeyimportparamsnamedcurve)
    - [Class: `EncapsulatedBits`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-encapsulatedbits)
      - [`encapsulatedBits.ciphertext`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#encapsulatedbitsciphertext)
      - [`encapsulatedBits.sharedKey`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#encapsulatedbitssharedkey)
    - [Class: `EncapsulatedKey`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-encapsulatedkey)
      - [`encapsulatedKey.ciphertext`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#encapsulatedkeyciphertext)
      - [`encapsulatedKey.sharedKey`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#encapsulatedkeysharedkey)
    - [Class: `HkdfParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-hkdfparams)
      - [`hkdfParams.hash`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hkdfparamshash)
      - [`hkdfParams.info`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hkdfparamsinfo)
      - [`hkdfParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hkdfparamsname)
      - [`hkdfParams.salt`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hkdfparamssalt)
    - [Class: `HmacImportParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-hmacimportparams)
      - [`hmacImportParams.hash`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hmacimportparamshash)
      - [`hmacImportParams.length`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hmacimportparamslength)
      - [`hmacImportParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hmacimportparamsname)
    - [Class: `HmacKeyAlgorithm`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-hmackeyalgorithm)
      - [`hmacKeyAlgorithm.hash`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hmackeyalgorithmhash)
      - [`hmacKeyAlgorithm.length`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hmackeyalgorithmlength)
      - [`hmacKeyAlgorithm.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hmackeyalgorithmname)
    - [Class: `HmacKeyGenParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-hmackeygenparams)
      - [`hmacKeyGenParams.hash`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hmackeygenparamshash)
      - [`hmacKeyGenParams.length`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hmackeygenparamslength)
      - [`hmacKeyGenParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#hmackeygenparamsname)
    - [Class: `KeyAlgorithm`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-keyalgorithm)
      - [`keyAlgorithm.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#keyalgorithmname)
    - [Class: `KmacImportParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-kmacimportparams)
      - [`kmacImportParams.length`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#kmacimportparamslength)
      - [`kmacImportParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#kmacimportparamsname)
    - [Class: `KmacKeyAlgorithm`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-kmackeyalgorithm)
      - [`kmacKeyAlgorithm.length`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#kmackeyalgorithmlength)
      - [`kmacKeyAlgorithm.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#kmackeyalgorithmname)
    - [Class: `KmacKeyGenParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-kmackeygenparams)
      - [`kmacKeyGenParams.length`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#kmackeygenparamslength)
      - [`kmacKeyGenParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#kmackeygenparamsname)
    - [Class: `KmacParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-kmacparams)
      - [`kmacParams.algorithm`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#kmacparamsalgorithm)
      - [`kmacParams.customization`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#kmacparamscustomization)
      - [`kmacParams.length`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#kmacparamslength)
    - [Class: `Pbkdf2Params`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-pbkdf2params)
      - [`pbkdf2Params.hash`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#pbkdf2paramshash)
      - [`pbkdf2Params.iterations`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#pbkdf2paramsiterations)
      - [`pbkdf2Params.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#pbkdf2paramsname)
      - [`pbkdf2Params.salt`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#pbkdf2paramssalt)
    - [Class: `RsaHashedImportParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-rsahashedimportparams)
      - [`rsaHashedImportParams.hash`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsahashedimportparamshash)
      - [`rsaHashedImportParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsahashedimportparamsname)
    - [Class: `RsaHashedKeyAlgorithm`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-rsahashedkeyalgorithm)
      - [`rsaHashedKeyAlgorithm.hash`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsahashedkeyalgorithmhash)
      - [`rsaHashedKeyAlgorithm.modulusLength`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsahashedkeyalgorithmmoduluslength)
      - [`rsaHashedKeyAlgorithm.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsahashedkeyalgorithmname)
      - [`rsaHashedKeyAlgorithm.publicExponent`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsahashedkeyalgorithmpublicexponent)
    - [Class: `RsaHashedKeyGenParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-rsahashedkeygenparams)
      - [`rsaHashedKeyGenParams.hash`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsahashedkeygenparamshash)
      - [`rsaHashedKeyGenParams.modulusLength`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsahashedkeygenparamsmoduluslength)
      - [`rsaHashedKeyGenParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsahashedkeygenparamsname)
      - [`rsaHashedKeyGenParams.publicExponent`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsahashedkeygenparamspublicexponent)
    - [Class: `RsaOaepParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-rsaoaepparams)
      - [`rsaOaepParams.label`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsaoaepparamslabel)
      - [`rsaOaepParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsaoaepparamsname)
    - [Class: `RsaPssParams`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-rsapssparams)
      - [`rsaPssParams.name`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsapssparamsname)
      - [`rsaPssParams.saltLength`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#rsapssparamssaltlength)

## Web Crypto API[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#web-crypto-api)

History

| Version | Changes |
| --- | --- |
| v24.8.0 | KMAC algorithms are now supported. |
| v24.8.0 | Argon2 algorithms are now supported. |
| v24.7.0 | AES-OCB algorithm is now supported. |
| v24.7.0 | ML-KEM algorithms are now supported. |
| v24.7.0 | ChaCha20-Poly1305 algorithm is now supported. |
| v24.7.0 | SHA-3 algorithms are now supported. |
| v24.7.0 | SHAKE algorithms are now supported. |
| v24.7.0 | ML-DSA algorithms are now supported. |
| v23.5.0, v22.13.0, v20.19.3 | Algorithms `Ed25519` and `X25519` are now stable. |
| v19.0.0 | No longer experimental except for the `Ed25519`, `Ed448`, `X25519`, and `X448` algorithms. |
| v20.0.0, v18.17.0 | Arguments are now coerced and validated as per their WebIDL definitions like in other Web Crypto API implementations. |
| v18.4.0, v16.17.0 | Removed proprietary `'node.keyObject'` import/export format. |
| v18.4.0, v16.17.0 | Removed proprietary `'NODE-DSA'`, `'NODE-DH'`, and `'NODE-SCRYPT'` algorithms. |
| v18.4.0, v16.17.0 | Added `'Ed25519'`, `'Ed448'`, `'X25519'`, and `'X448'` algorithms. |
| v18.4.0, v16.17.0 | Removed proprietary `'NODE-ED25519'` and `'NODE-ED448'` algorithms. |
| v18.4.0, v16.17.0 | Removed proprietary `'NODE-X25519'` and `'NODE-X448'` named curves from the `'ECDH'` algorithm. |

[Stability: 2](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Stable

Node.js provides an implementation of the [Web Crypto API](https://www.w3.org/TR/WebCryptoAPI/) standard.

Use `globalThis.crypto` or `require('node:crypto').webcrypto` to access this
module.

```js
const { subtle } = globalThis.crypto;

(async function() {

  const key = await subtle.generateKey({
    name: 'HMAC',
    hash: 'SHA-256',
    length: 256,
  }, true, ['sign', 'verify']);

  const enc = new TextEncoder();
  const message = enc.encode('I love cupcakes');

  const digest = await subtle.sign({
    name: 'HMAC',
  }, key, message);

})(); copy
```

### Modern Algorithms in the Web Cryptography API[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#modern-algorithms-in-the-web-cryptography-api)

[Stability: 1.1](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Active development

Node.js provides an implementation of the following features from the
[Modern Algorithms in the Web Cryptography API](https://wicg.github.io/webcrypto-modern-algos/)
WICG proposal:

Algorithms:

- `'AES-OCB'`[1](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-openssl30)
- `'Argon2d'`[2](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-openssl32)
- `'Argon2i'`[2](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-openssl32)
- `'Argon2id'`[2](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-openssl32)
- `'ChaCha20-Poly1305'`
- `'cSHAKE128'`
- `'cSHAKE256'`
- `'KMAC128'`[1](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-openssl30)
- `'KMAC256'`[1](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-openssl30)
- `'ML-DSA-44'`[3](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-openssl35)
- `'ML-DSA-65'`[3](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-openssl35)
- `'ML-DSA-87'`[3](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-openssl35)
- `'ML-KEM-512'`[3](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-openssl35)
- `'ML-KEM-768'`[3](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-openssl35)
- `'ML-KEM-1024'`[3](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-openssl35)
- `'SHA3-256'`
- `'SHA3-384'`
- `'SHA3-512'`

Key Formats:

- `'raw-public'`
- `'raw-secret'`
- `'raw-seed'`

Methods:

- [`subtle.decapsulateBits()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtledecapsulatebitsdecapsulationalgorithm-decapsulationkey-ciphertext)
- [`subtle.decapsulateKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtledecapsulatekeydecapsulationalgorithm-decapsulationkey-ciphertext-sharedkeyalgorithm-extractable-usages)
- [`subtle.encapsulateBits()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleencapsulatebitsencapsulationalgorithm-encapsulationkey)
- [`subtle.encapsulateKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleencapsulatekeyencapsulationalgorithm-encapsulationkey-sharedkeyalgorithm-extractable-usages)
- [`subtle.getPublicKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlegetpublickeykey-keyusages)
- [`SubtleCrypto.supports()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#static-method-subtlecryptosupportsoperation-algorithm-lengthoradditionalalgorithm)

### Secure Curves in the Web Cryptography API[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#secure-curves-in-the-web-cryptography-api)

[Stability: 1.1](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Active development

Node.js provides an implementation of the following features from the
[Secure Curves in the Web Cryptography API](https://wicg.github.io/webcrypto-secure-curves/)
WICG proposal:

Algorithms:

- `'Ed448'`
- `'X448'`

### Examples[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#examples)

#### Generating keys[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#generating-keys)

The [<SubtleCrypto>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-subtlecrypto) class can be used to generate symmetric (secret) keys
or asymmetric key pairs (public key and private key).

##### AES keys[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#aes-keys)

```js
const { subtle } = globalThis.crypto;

async function generateAesKey(length = 256) {
  const key = await subtle.generateKey({
    name: 'AES-CBC',
    length,
  }, true, ['encrypt', 'decrypt']);

  return key;
} copy
```

##### ECDSA key pairs[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#ecdsa-key-pairs)

```js
const { subtle } = globalThis.crypto;

async function generateEcKey(namedCurve = 'P-521') {
  const {
    publicKey,
    privateKey,
  } = await subtle.generateKey({
    name: 'ECDSA',
    namedCurve,
  }, true, ['sign', 'verify']);

  return { publicKey, privateKey };
} copy
```

##### Ed25519/X25519 key pairs[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#ed25519x25519-key-pairs)

```js
const { subtle } = globalThis.crypto;

async function generateEd25519Key() {
  return subtle.generateKey({
    name: 'Ed25519',
  }, true, ['sign', 'verify']);
}

async function generateX25519Key() {
  return subtle.generateKey({
    name: 'X25519',
  }, true, ['deriveKey']);
} copy
```

##### HMAC keys[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#hmac-keys)

```js
const { subtle } = globalThis.crypto;

async function generateHmacKey(hash = 'SHA-256') {
  const key = await subtle.generateKey({
    name: 'HMAC',
    hash,
  }, true, ['sign', 'verify']);

  return key;
} copy
```

##### RSA key pairs[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#rsa-key-pairs)

```js
const { subtle } = globalThis.crypto;
const publicExponent = new Uint8Array([1, 0, 1]);

async function generateRsaKey(modulusLength = 2048, hash = 'SHA-256') {
  const {
    publicKey,
    privateKey,
  } = await subtle.generateKey({
    name: 'RSASSA-PKCS1-v1_5',
    modulusLength,
    publicExponent,
    hash,
  }, true, ['sign', 'verify']);

  return { publicKey, privateKey };
} copy
```

#### Encryption and decryption[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#encryption-and-decryption)

```js
const crypto = globalThis.crypto;

async function aesEncrypt(plaintext) {
  const ec = new TextEncoder();
  const key = await generateAesKey();
  const iv = crypto.getRandomValues(new Uint8Array(16));

  const ciphertext = await crypto.subtle.encrypt({
    name: 'AES-CBC',
    iv,
  }, key, ec.encode(plaintext));

  return {
    key,
    iv,
    ciphertext,
  };
}

async function aesDecrypt(ciphertext, key, iv) {
  const dec = new TextDecoder();
  const plaintext = await crypto.subtle.decrypt({
    name: 'AES-CBC',
    iv,
  }, key, ciphertext);

  return dec.decode(plaintext);
} copy
```

#### Exporting and importing keys[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#exporting-and-importing-keys)

```js
const { subtle } = globalThis.crypto;

async function generateAndExportHmacKey(format = 'jwk', hash = 'SHA-512') {
  const key = await subtle.generateKey({
    name: 'HMAC',
    hash,
  }, true, ['sign', 'verify']);

  return subtle.exportKey(format, key);
}

async function importHmacKey(keyData, format = 'jwk', hash = 'SHA-512') {
  const key = await subtle.importKey(format, keyData, {
    name: 'HMAC',
    hash,
  }, true, ['sign', 'verify']);

  return key;
} copy
```

#### Wrapping and unwrapping keys[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#wrapping-and-unwrapping-keys)

```js
const { subtle } = globalThis.crypto;

async function generateAndWrapHmacKey(format = 'jwk', hash = 'SHA-512') {
  const [\
    key,\
    wrappingKey,\
  ] = await Promise.all([\
    subtle.generateKey({\
      name: 'HMAC', hash,\
    }, true, ['sign', 'verify']),\
    subtle.generateKey({\
      name: 'AES-KW',\
      length: 256,\
    }, true, ['wrapKey', 'unwrapKey']),\
  ]);

  const wrappedKey = await subtle.wrapKey(format, key, wrappingKey, 'AES-KW');

  return { wrappedKey, wrappingKey };
}

async function unwrapHmacKey(
  wrappedKey,
  wrappingKey,
  format = 'jwk',
  hash = 'SHA-512') {

  const key = await subtle.unwrapKey(
    format,
    wrappedKey,
    wrappingKey,
    'AES-KW',
    { name: 'HMAC', hash },
    true,
    ['sign', 'verify']);

  return key;
} copy
```

#### Sign and verify[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#sign-and-verify)

```js
const { subtle } = globalThis.crypto;

async function sign(key, data) {
  const ec = new TextEncoder();
  const signature =
    await subtle.sign('RSASSA-PKCS1-v1_5', key, ec.encode(data));
  return signature;
}

async function verify(key, signature, data) {
  const ec = new TextEncoder();
  const verified =
    await subtle.verify(
      'RSASSA-PKCS1-v1_5',
      key,
      signature,
      ec.encode(data));
  return verified;
} copy
```

#### Deriving bits and keys[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#deriving-bits-and-keys)

```js
const { subtle } = globalThis.crypto;

async function pbkdf2(pass, salt, iterations = 1000, length = 256) {
  const ec = new TextEncoder();
  const key = await subtle.importKey(
    'raw',
    ec.encode(pass),
    'PBKDF2',
    false,
    ['deriveBits']);
  const bits = await subtle.deriveBits({
    name: 'PBKDF2',
    hash: 'SHA-512',
    salt: ec.encode(salt),
    iterations,
  }, key, length);
  return bits;
}

async function pbkdf2Key(pass, salt, iterations = 1000, length = 256) {
  const ec = new TextEncoder();
  const keyMaterial = await subtle.importKey(
    'raw',
    ec.encode(pass),
    'PBKDF2',
    false,
    ['deriveKey']);
  const key = await subtle.deriveKey({
    name: 'PBKDF2',
    hash: 'SHA-512',
    salt: ec.encode(salt),
    iterations,
  }, keyMaterial, {
    name: 'AES-GCM',
    length,
  }, true, ['encrypt', 'decrypt']);
  return key;
} copy
```

#### Digest[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#digest)

```js
const { subtle } = globalThis.crypto;

async function digest(data, algorithm = 'SHA-512') {
  const ec = new TextEncoder();
  const digest = await subtle.digest(algorithm, ec.encode(data));
  return digest;
} copy
```

#### Checking for runtime algorithm support[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#checking-for-runtime-algorithm-support)

[`SubtleCrypto.supports()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#static-method-subtlecryptosupportsoperation-algorithm-lengthoradditionalalgorithm) allows feature detection in Web Crypto API,
which can be used to detect whether a given algorithm identifier
(including its parameters) is supported for the given operation.

This example derives a key from a password using Argon2, if available,
or PBKDF2, otherwise; and then encrypts and decrypts some text with it
using AES-OCB, if available, and AES-GCM, otherwise.

```js
const { SubtleCrypto, crypto } = globalThis;

const password = 'correct horse battery staple';
const derivationAlg =
  SubtleCrypto.supports?.('importKey', 'Argon2id') ?
    'Argon2id' :
    'PBKDF2';
const encryptionAlg =
  SubtleCrypto.supports?.('importKey', 'AES-OCB') ?
    'AES-OCB' :
    'AES-GCM';
const passwordKey = await crypto.subtle.importKey(
  derivationAlg === 'Argon2id' ? 'raw-secret' : 'raw',
  new TextEncoder().encode(password),
  derivationAlg,
  false,
  ['deriveKey'],
);
const nonce = crypto.getRandomValues(new Uint8Array(16));
const derivationParams =
  derivationAlg === 'Argon2id' ?
    {
      nonce,
      parallelism: 4,
      memory: 2 ** 21,
      passes: 1,
    } :
    {
      salt: nonce,
      iterations: 100_000,
      hash: 'SHA-256',
    };
const key = await crypto.subtle.deriveKey(
  {
    name: derivationAlg,
    ...derivationParams,
  },
  passwordKey,
  {
    name: encryptionAlg,
    length: 256,
  },
  false,
  ['encrypt', 'decrypt'],
);
const plaintext = 'Hello, world!';
const iv = crypto.getRandomValues(new Uint8Array(16));
const encrypted = await crypto.subtle.encrypt(
  { name: encryptionAlg, iv },
  key,
  new TextEncoder().encode(plaintext),
);
const decrypted = new TextDecoder().decode(await crypto.subtle.decrypt(
  { name: encryptionAlg, iv },
  key,
  encrypted,
)); copy
```

### Algorithm matrix[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#algorithm-matrix)

The tables details the algorithms supported by the Node.js Web Crypto API
implementation and the APIs supported for each:

#### Key Management APIs[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#key-management-apis)

| Algorithm | [`subtle.generateKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlegeneratekeyalgorithm-extractable-keyusages) | [`subtle.exportKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleexportkeyformat-key) | [`subtle.importKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleimportkeyformat-keydata-algorithm-extractable-keyusages) | [`subtle.getPublicKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlegetpublickeykey-keyusages) |
| --- | --- | --- | --- | --- |
| `'AES-CBC'` | ✔ | ✔ | ✔ |  |
| `'AES-CTR'` | ✔ | ✔ | ✔ |  |
| `'AES-GCM'` | ✔ | ✔ | ✔ |  |
| `'AES-KW'` | ✔ | ✔ | ✔ |  |
| `'AES-OCB'` | ✔ | ✔ | ✔ |  |
| `'Argon2d'` |  |  | ✔ |  |
| `'Argon2i'` |  |  | ✔ |  |
| `'Argon2id'` |  |  | ✔ |  |
| `'ChaCha20-Poly1305'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) | ✔ | ✔ | ✔ |  |
| `'ECDH'` | ✔ | ✔ | ✔ | ✔ |
| `'ECDSA'` | ✔ | ✔ | ✔ | ✔ |
| `'Ed25519'` | ✔ | ✔ | ✔ | ✔ |
| `'Ed448'`[5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-secure-curves) | ✔ | ✔ | ✔ | ✔ |
| `'HKDF'` |  |  | ✔ |  |
| `'HMAC'` | ✔ | ✔ | ✔ |  |
| `'KMAC128'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) | ✔ | ✔ | ✔ |  |
| `'KMAC256'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) | ✔ | ✔ | ✔ |  |
| `'ML-DSA-44'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) | ✔ | ✔ | ✔ | ✔ |
| `'ML-DSA-65'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) | ✔ | ✔ | ✔ | ✔ |
| `'ML-DSA-87'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) | ✔ | ✔ | ✔ | ✔ |
| `'ML-KEM-512'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) | ✔ | ✔ | ✔ | ✔ |
| `'ML-KEM-768'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) | ✔ | ✔ | ✔ | ✔ |
| `'ML-KEM-1024'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) | ✔ | ✔ | ✔ | ✔ |
| `'PBKDF2'` |  |  | ✔ |  |
| `'RSA-OAEP'` | ✔ | ✔ | ✔ | ✔ |
| `'RSA-PSS'` | ✔ | ✔ | ✔ | ✔ |
| `'RSASSA-PKCS1-v1_5'` | ✔ | ✔ | ✔ | ✔ |
| `'X25519'` | ✔ | ✔ | ✔ | ✔ |
| `'X448'`[5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-secure-curves) | ✔ | ✔ | ✔ | ✔ |

#### Crypto Operation APIs[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#crypto-operation-apis)

**Column Legend:**

- **Encryption**: [`subtle.encrypt()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleencryptalgorithm-key-data) / [`subtle.decrypt()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtledecryptalgorithm-key-data)
- **Signatures and MAC**: [`subtle.sign()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlesignalgorithm-key-data) / [`subtle.verify()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleverifyalgorithm-key-signature-data)
- **Key or Bits Derivation**: [`subtle.deriveBits()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlederivebitsalgorithm-basekey-length) / [`subtle.deriveKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlederivekeyalgorithm-basekey-derivedkeyalgorithm-extractable-keyusages)
- **Key Wrapping**: [`subtle.wrapKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlewrapkeyformat-key-wrappingkey-wrapalgo) / [`subtle.unwrapKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleunwrapkeyformat-wrappedkey-unwrappingkey-unwrapalgo-unwrappedkeyalgo-extractable-keyusages)
- **Key Encapsulation**: [`subtle.encapsulateBits()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleencapsulatebitsencapsulationalgorithm-encapsulationkey) / [`subtle.decapsulateBits()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtledecapsulatebitsdecapsulationalgorithm-decapsulationkey-ciphertext) /
[`subtle.encapsulateKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleencapsulatekeyencapsulationalgorithm-encapsulationkey-sharedkeyalgorithm-extractable-usages) / [`subtle.decapsulateKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtledecapsulatekeydecapsulationalgorithm-decapsulationkey-ciphertext-sharedkeyalgorithm-extractable-usages)
- **Digest**: [`subtle.digest()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtledigestalgorithm-data)

| Algorithm | Encryption | Signatures and MAC | Key or Bits Derivation | Key Wrapping | Key Encapsulation | Digest |
| --- | --- | --- | --- | --- | --- | --- |
| `'AES-CBC'` | ✔ |  |  | ✔ |  |  |
| `'AES-CTR'` | ✔ |  |  | ✔ |  |  |
| `'AES-GCM'` | ✔ |  |  | ✔ |  |  |
| `'AES-KW'` |  |  |  | ✔ |  |  |
| `'AES-OCB'` | ✔ |  |  | ✔ |  |  |
| `'Argon2d'` |  |  | ✔ |  |  |  |
| `'Argon2i'` |  |  | ✔ |  |  |  |
| `'Argon2id'` |  |  | ✔ |  |  |  |
| `'ChaCha20-Poly1305'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) | ✔ |  |  | ✔ |  |  |
| `'cSHAKE128'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  |  |  |  |  | ✔ |
| `'cSHAKE256'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  |  |  |  |  | ✔ |
| `'ECDH'` |  |  | ✔ |  |  |  |
| `'ECDSA'` |  | ✔ |  |  |  |  |
| `'Ed25519'` |  | ✔ |  |  |  |  |
| `'Ed448'`[5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-secure-curves) |  | ✔ |  |  |  |  |
| `'HKDF'` |  |  | ✔ |  |  |  |
| `'HMAC'` |  | ✔ |  |  |  |  |
| `'KMAC128'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  | ✔ |  |  |  |  |
| `'KMAC256'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  | ✔ |  |  |  |  |
| `'ML-DSA-44'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  | ✔ |  |  |  |  |
| `'ML-DSA-65'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  | ✔ |  |  |  |  |
| `'ML-DSA-87'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  | ✔ |  |  |  |  |
| `'ML-KEM-512'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  |  |  |  | ✔ |  |
| `'ML-KEM-768'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  |  |  |  | ✔ |  |
| `'ML-KEM-1024'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  |  |  |  | ✔ |  |
| `'PBKDF2'` |  |  | ✔ |  |  |  |
| `'RSA-OAEP'` | ✔ |  |  | ✔ |  |  |
| `'RSA-PSS'` |  | ✔ |  |  |  |  |
| `'RSASSA-PKCS1-v1_5'` |  | ✔ |  |  |  |  |
| `'SHA-1'` |  |  |  |  |  | ✔ |
| `'SHA-256'` |  |  |  |  |  | ✔ |
| `'SHA-384'` |  |  |  |  |  | ✔ |
| `'SHA-512'` |  |  |  |  |  | ✔ |
| `'SHA3-256'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  |  |  |  |  | ✔ |
| `'SHA3-384'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  |  |  |  |  | ✔ |
| `'SHA3-512'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  |  |  |  |  | ✔ |
| `'X25519'` |  |  | ✔ |  |  |  |
| `'X448'`[5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-secure-curves) |  |  | ✔ |  |  |  |

### Class: `Crypto`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-crypto)

Added in: v15.0.0

`globalThis.crypto` is an instance of the `Crypto`
class. `Crypto` is a singleton that provides access to the remainder of the
crypto API.

#### `crypto.subtle`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#cryptosubtle)

Added in: v15.0.0

- Type: [<SubtleCrypto>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-subtlecrypto)

Provides access to the `SubtleCrypto` API.

#### `crypto.getRandomValues(typedArray)`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#cryptogetrandomvaluestypedarray)

Added in: v15.0.0

- `typedArray` [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)
- Returns: [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)

Generates cryptographically strong random values. The given `typedArray` is
filled with random values, and a reference to `typedArray` is returned.

The given `typedArray` must be an integer-based instance of [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray),
i.e. `Float32Array` and `Float64Array` are not accepted.

An error will be thrown if the given `typedArray` is larger than 65,536 bytes.

#### `crypto.randomUUID()`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#cryptorandomuuid)

Added in: v16.7.0

- Returns: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

Generates a random [RFC 4122](https://www.rfc-editor.org/rfc/rfc4122.txt) version 4 UUID. The UUID is generated using a
cryptographic pseudorandom number generator.

### Class: `CryptoKey`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-cryptokey)

Added in: v15.0.0

#### `cryptoKey.algorithm`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#cryptokeyalgorithm)

Added in: v15.0.0

- Type: [<KeyAlgorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-keyalgorithm) \| [<RsaHashedKeyAlgorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-rsahashedkeyalgorithm) \| [<EcKeyAlgorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-eckeyalgorithm) \| [<AesKeyAlgorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aeskeyalgorithm) \| [<HmacKeyAlgorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-hmackeyalgorithm) \| [<KmacKeyAlgorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-kmackeyalgorithm)

An object detailing the algorithm for which the key can be used along with
additional algorithm-specific parameters.

Read-only.

#### `cryptoKey.extractable`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#cryptokeyextractable)

Added in: v15.0.0

- Type: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)

When `true`, the [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey) can be extracted using either
[`subtle.exportKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleexportkeyformat-key) or [`subtle.wrapKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlewrapkeyformat-key-wrappingkey-wrapalgo).

Read-only.

#### `cryptoKey.type`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#cryptokeytype)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) One of `'secret'`, `'private'`, or `'public'`.

A string identifying whether the key is a symmetric (`'secret'`) or
asymmetric (`'private'` or `'public'`) key.

#### `cryptoKey.usages`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#cryptokeyusages)

Added in: v15.0.0

- Type: [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

An array of strings identifying the operations for which the
key may be used.

The possible usages are:

- `'encrypt'` \- Enable using the key with [`subtle.encrypt()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleencryptalgorithm-key-data)
- `'decrypt'` \- Enable using the key with [`subtle.decrypt()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtledecryptalgorithm-key-data)
- `'sign'` \- Enable using the key with [`subtle.sign()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlesignalgorithm-key-data)
- `'verify'` \- Enable using the key with [`subtle.verify()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleverifyalgorithm-key-signature-data)
- `'deriveKey'` \- Enable using the key with [`subtle.deriveKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlederivekeyalgorithm-basekey-derivedkeyalgorithm-extractable-keyusages)
- `'deriveBits'` \- Enable using the key with [`subtle.deriveBits()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlederivebitsalgorithm-basekey-length)
- `'encapsulateBits'` \- Enable using the key with [`subtle.encapsulateBits()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleencapsulatebitsencapsulationalgorithm-encapsulationkey)
- `'decapsulateBits'` \- Enable using the key with [`subtle.decapsulateBits()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtledecapsulatebitsdecapsulationalgorithm-decapsulationkey-ciphertext)
- `'encapsulateKey'` \- Enable using the key with [`subtle.encapsulateKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleencapsulatekeyencapsulationalgorithm-encapsulationkey-sharedkeyalgorithm-extractable-usages)
- `'decapsulateKey'` \- Enable using the key with [`subtle.decapsulateKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtledecapsulatekeydecapsulationalgorithm-decapsulationkey-ciphertext-sharedkeyalgorithm-extractable-usages)
- `'wrapKey'` \- Enable using the key with [`subtle.wrapKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlewrapkeyformat-key-wrappingkey-wrapalgo)
- `'unwrapKey'` \- Enable using the key with [`subtle.unwrapKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleunwrapkeyformat-wrappedkey-unwrappingkey-unwrapalgo-unwrappedkeyalgo-extractable-keyusages)

Valid key usages depend on the key algorithm (identified by
`cryptokey.algorithm.name`).

**Column Legend:**

- **Encryption**: [`subtle.encrypt()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleencryptalgorithm-key-data) / [`subtle.decrypt()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtledecryptalgorithm-key-data)
- **Signatures and MAC**: [`subtle.sign()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlesignalgorithm-key-data) / [`subtle.verify()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleverifyalgorithm-key-signature-data)
- **Key or Bits Derivation**: [`subtle.deriveBits()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlederivebitsalgorithm-basekey-length) / [`subtle.deriveKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlederivekeyalgorithm-basekey-derivedkeyalgorithm-extractable-keyusages)
- **Key Wrapping**: [`subtle.wrapKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlewrapkeyformat-key-wrappingkey-wrapalgo) / [`subtle.unwrapKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleunwrapkeyformat-wrappedkey-unwrappingkey-unwrapalgo-unwrappedkeyalgo-extractable-keyusages)
- **Key Encapsulation**: [`subtle.encapsulateBits()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleencapsulatebitsencapsulationalgorithm-encapsulationkey) / [`subtle.decapsulateBits()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtledecapsulatebitsdecapsulationalgorithm-decapsulationkey-ciphertext) /
[`subtle.encapsulateKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleencapsulatekeyencapsulationalgorithm-encapsulationkey-sharedkeyalgorithm-extractable-usages) / [`subtle.decapsulateKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtledecapsulatekeydecapsulationalgorithm-decapsulationkey-ciphertext-sharedkeyalgorithm-extractable-usages)

| Supported Key Algorithm | Encryption | Signatures and MAC | Key or Bits Derivation | Key Wrapping | Key Encapsulation |
| --- | --- | --- | --- | --- | --- |
| `'AES-CBC'` | ✔ |  |  | ✔ |  |
| `'AES-CTR'` | ✔ |  |  | ✔ |  |
| `'AES-GCM'` | ✔ |  |  | ✔ |  |
| `'AES-KW'` |  |  |  | ✔ |  |
| `'AES-OCB'` | ✔ |  |  | ✔ |  |
| `'Argon2d'` |  |  | ✔ |  |  |
| `'Argon2i'` |  |  | ✔ |  |  |
| `'Argon2id'` |  |  | ✔ |  |  |
| `'ChaCha20-Poly1305'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) | ✔ |  |  | ✔ |  |
| `'ECDH'` |  |  | ✔ |  |  |
| `'ECDSA'` |  | ✔ |  |  |  |
| `'Ed25519'` |  | ✔ |  |  |  |
| `'Ed448'`[5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-secure-curves) |  | ✔ |  |  |  |
| `'HDKF'` |  |  | ✔ |  |  |
| `'HMAC'` |  | ✔ |  |  |  |
| `'KMAC128'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  | ✔ |  |  |  |
| `'KMAC256'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  | ✔ |  |  |  |
| `'ML-DSA-44'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  | ✔ |  |  |  |
| `'ML-DSA-65'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  | ✔ |  |  |  |
| `'ML-DSA-87'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  | ✔ |  |  |  |
| `'ML-KEM-512'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  |  |  |  | ✔ |
| `'ML-KEM-768'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  |  |  |  | ✔ |
| `'ML-KEM-1024'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  |  |  |  | ✔ |
| `'PBKDF2'` |  |  | ✔ |  |  |
| `'RSA-OAEP'` | ✔ |  |  | ✔ |  |
| `'RSA-PSS'` |  | ✔ |  |  |  |
| `'RSASSA-PKCS1-v1_5'` |  | ✔ |  |  |  |
| `'X25519'` |  |  | ✔ |  |  |
| `'X448'`[5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-secure-curves) |  |  | ✔ |  |  |

### Class: `CryptoKeyPair`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-cryptokeypair)

Added in: v15.0.0

The `CryptoKeyPair` is a simple dictionary object with `publicKey` and
`privateKey` properties, representing an asymmetric key pair.

#### `cryptoKeyPair.privateKey`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#cryptokeypairprivatekey)

Added in: v15.0.0

- Type: [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey) A [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey) whose `type` will be `'private'`.

#### `cryptoKeyPair.publicKey`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#cryptokeypairpublickey)

Added in: v15.0.0

- Type: [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey) A [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey) whose `type` will be `'public'`.

### Class: `SubtleCrypto`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-subtlecrypto)

Added in: v15.0.0

#### Static method: `SubtleCrypto.supports(operation, algorithm[, lengthOrAdditionalAlgorithm])`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#static-method-subtlecryptosupportsoperation-algorithm-lengthoradditionalalgorithm)

Added in: v24.7.0

[Stability: 1.1](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Active development

- `operation` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) "encrypt", "decrypt", "sign", "verify", "digest", "generateKey", "deriveKey", "deriveBits", "importKey", "exportKey", "getPublicKey", "wrapKey", "unwrapKey", "encapsulateBits", "encapsulateKey", "decapsulateBits", or "decapsulateKey"
- `algorithm` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm)
- `lengthOrAdditionalAlgorithm` [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#null_type) \| [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) \| [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm) \| [<undefined>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type) Depending on the operation this is either ignored, the value of the length argument when operation is "deriveBits", the algorithm of key to be derived when operation is "deriveKey", the algorithm of key to be exported before wrapping when operation is "wrapKey", the algorithm of key to be imported after unwrapping when operation is "unwrapKey", or the algorithm of key to be imported after en/decapsulating a key when operation is "encapsulateKey" or "decapsulateKey". **Default:**`null` when operation is "deriveBits", `undefined` otherwise.
- Returns: [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) Indicating whether the implementation supports the given operation

Allows feature detection in Web Crypto API,
which can be used to detect whether a given algorithm identifier
(including its parameters) is supported for the given operation.

See [Checking for runtime algorithm support](https://nodejs.org/dist/latest/docs/api/webcrypto.html#checking-for-runtime-algorithm-support) for an example use of this method.

#### `subtle.decapsulateBits(decapsulationAlgorithm, decapsulationKey, ciphertext)`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#subtledecapsulatebitsdecapsulationalgorithm-decapsulationkey-ciphertext)

Added in: v24.7.0

[Stability: 1.1](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Active development

- `decapsulationAlgorithm` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm)
- `decapsulationKey` [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey)
- `ciphertext` [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer)
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) upon success.

A message recipient uses their asymmetric private key to decrypt an
"encapsulated key" (ciphertext), thereby recovering a temporary symmetric
key (represented as [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)) which is then used to decrypt a message.

The algorithms currently supported include:

- `'ML-KEM-512'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ML-KEM-768'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ML-KEM-1024'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)

#### `subtle.decapsulateKey(decapsulationAlgorithm, decapsulationKey, ciphertext, sharedKeyAlgorithm, extractable, usages)`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#subtledecapsulatekeydecapsulationalgorithm-decapsulationkey-ciphertext-sharedkeyalgorithm-extractable-usages)

Added in: v24.7.0

[Stability: 1.1](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Active development

- `decapsulationAlgorithm` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm)
- `decapsulationKey` [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey)
- `ciphertext` [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer)
- `sharedKeyAlgorithm` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm) \| [<HmacImportParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-hmacimportparams) \| [<AesDerivedKeyParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aesderivedkeyparams) \| [<KmacImportParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-kmacimportparams)
- `extractable` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)
- `usages` [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) See [Key usages](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cryptokeyusages).
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey) upon success.

A message recipient uses their asymmetric private key to decrypt an
"encapsulated key" (ciphertext), thereby recovering a temporary symmetric
key (represented as [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey)) which is then used to decrypt a message.

The algorithms currently supported include:

- `'ML-KEM-512'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ML-KEM-768'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ML-KEM-1024'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)

#### `subtle.decrypt(algorithm, key, data)`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#subtledecryptalgorithm-key-data)

History

| Version | Changes |
| --- | --- |
| v24.7.0 | AES-OCB algorithm is now supported. |
| v24.7.0 | ChaCha20-Poly1305 algorithm is now supported. |
| v15.0.0 | Added in: v15.0.0 |

- `algorithm` [<RsaOaepParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-rsaoaepparams) \| [<AesCtrParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aesctrparams) \| [<AesCbcParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aescbcparams) \| [<AeadParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aeadparams)
- `key` [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey)
- `data` [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer)
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with an [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) upon success.

Using the method and parameters specified in `algorithm` and the keying
material provided by `key`, this method attempts to decipher the
provided `data`. If successful, the returned promise will be resolved with
an [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) containing the plaintext result.

The algorithms currently supported include:

- `'AES-CBC'`
- `'AES-CTR'`
- `'AES-GCM'`
- `'AES-OCB'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ChaCha20-Poly1305'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'RSA-OAEP'`

#### `subtle.deriveBits(algorithm, baseKey[, length])`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#subtlederivebitsalgorithm-basekey-length)

History

| Version | Changes |
| --- | --- |
| v24.8.0 | Argon2 algorithms are now supported. |
| v22.5.0, v20.17.0, v18.20.5 | The length parameter is now optional for `'ECDH'`, `'X25519'`, and `'X448'`. |
| v18.4.0, v16.17.0 | Added `'X25519'`, and `'X448'` algorithms. |
| v15.0.0 | Added in: v15.0.0 |

- `algorithm` [<EcdhKeyDeriveParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-ecdhkeyderiveparams) \| [<HkdfParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-hkdfparams) \| [<Pbkdf2Params>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-pbkdf2params) \| [<Argon2Params>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-argon2params)
- `baseKey` [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey)
- `length` [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) \| [<null>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#null_type) **Default:**`null`
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with an [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) upon success.

Using the method and parameters specified in `algorithm` and the keying
material provided by `baseKey`, this method attempts to generate
`length` bits.

When `length` is not provided or `null` the maximum number of bits for a given
algorithm is generated. This is allowed for the `'ECDH'`, `'X25519'`, and `'X448'`[5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-secure-curves)
algorithms, for other algorithms `length` is required to be a number.

If successful, the returned promise will be resolved with an [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
containing the generated data.

The algorithms currently supported include:

- `'Argon2d'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'Argon2i'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'Argon2id'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ECDH'`
- `'HKDF'`
- `'PBKDF2'`
- `'X25519'`
- `'X448'`[5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-secure-curves)

#### `subtle.deriveKey(algorithm, baseKey, derivedKeyAlgorithm, extractable, keyUsages)`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#subtlederivekeyalgorithm-basekey-derivedkeyalgorithm-extractable-keyusages)

History

| Version | Changes |
| --- | --- |
| v24.8.0 | Argon2 algorithms are now supported. |
| v18.4.0, v16.17.0 | Added `'X25519'`, and `'X448'` algorithms. |
| v15.0.0 | Added in: v15.0.0 |

- `algorithm` [<EcdhKeyDeriveParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-ecdhkeyderiveparams) \| [<HkdfParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-hkdfparams) \| [<Pbkdf2Params>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-pbkdf2params) \| [<Argon2Params>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-argon2params)
- `baseKey` [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey)
- `derivedKeyAlgorithm` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm) \| [<HmacImportParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-hmacimportparams) \| [<AesDerivedKeyParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aesderivedkeyparams) \| [<KmacImportParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-kmacimportparams)
- `extractable` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)
- `keyUsages` [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) See [Key usages](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cryptokeyusages).
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with a [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey) upon success.

Using the method and parameters specified in `algorithm`, and the keying
material provided by `baseKey`, this method attempts to generate
a new [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey) based on the method and parameters in `derivedKeyAlgorithm`.

Calling this method is equivalent to calling [`subtle.deriveBits()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtlederivebitsalgorithm-basekey-length) to
generate raw keying material, then passing the result into the
[`subtle.importKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleimportkeyformat-keydata-algorithm-extractable-keyusages) method using the `deriveKeyAlgorithm`, `extractable`, and
`keyUsages` parameters as input.

The algorithms currently supported include:

- `'Argon2d'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'Argon2i'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'Argon2id'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ECDH'`
- `'HKDF'`
- `'PBKDF2'`
- `'X25519'`
- `'X448'`[5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-secure-curves)

#### `subtle.digest(algorithm, data)`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#subtledigestalgorithm-data)

History

| Version | Changes |
| --- | --- |
| v24.7.0 | SHA-3 algorithms are now supported. |
| v24.7.0 | SHAKE algorithms are now supported. |
| v15.0.0 | Added in: v15.0.0 |

- `algorithm` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm) \| [<CShakeParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cshakeparams)
- `data` [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer)
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with an [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) upon success.

Using the method identified by `algorithm`, this method attempts to
generate a digest of `data`. If successful, the returned promise is resolved
with an [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) containing the computed digest.

If `algorithm` is provided as a [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type), it must be one of:

- `'cSHAKE128'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'cSHAKE256'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'SHA-1'`
- `'SHA-256'`
- `'SHA-384'`
- `'SHA-512'`
- `'SHA3-256'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'SHA3-384'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'SHA3-512'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)

If `algorithm` is provided as an [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object), it must have a `name` property
whose value is one of the above.

#### `subtle.encapsulateBits(encapsulationAlgorithm, encapsulationKey)`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#subtleencapsulatebitsencapsulationalgorithm-encapsulationkey)

Added in: v24.7.0

[Stability: 1.1](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Active development

- `encapsulationAlgorithm` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm)
- `encapsulationKey` [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey)
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with [<EncapsulatedBits>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-encapsulatedbits) upon success.

Uses a message recipient's asymmetric public key to encrypt a temporary symmetric key.
This encrypted key is the "encapsulated key" represented as [<EncapsulatedBits>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-encapsulatedbits).

The algorithms currently supported include:

- `'ML-KEM-512'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ML-KEM-768'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ML-KEM-1024'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)

#### `subtle.encapsulateKey(encapsulationAlgorithm, encapsulationKey, sharedKeyAlgorithm, extractable, usages)`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#subtleencapsulatekeyencapsulationalgorithm-encapsulationkey-sharedkeyalgorithm-extractable-usages)

Added in: v24.7.0

[Stability: 1.1](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Active development

- `encapsulationAlgorithm` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm)
- `encapsulationKey` [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey)
- `sharedKeyAlgorithm` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm) \| [<HmacImportParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-hmacimportparams) \| [<AesDerivedKeyParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aesderivedkeyparams) \| [<KmacImportParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-kmacimportparams)
- `extractable` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)
- `usages` [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) See [Key usages](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cryptokeyusages).
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with [<EncapsulatedKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-encapsulatedkey) upon success.

Uses a message recipient's asymmetric public key to encrypt a temporary symmetric key.
This encrypted key is the "encapsulated key" represented as [<EncapsulatedKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-encapsulatedkey).

The algorithms currently supported include:

- `'ML-KEM-512'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ML-KEM-768'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ML-KEM-1024'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)

#### `subtle.encrypt(algorithm, key, data)`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#subtleencryptalgorithm-key-data)

History

| Version | Changes |
| --- | --- |
| v24.7.0 | AES-OCB algorithm is now supported. |
| v24.7.0 | ChaCha20-Poly1305 algorithm is now supported. |
| v15.0.0 | Added in: v15.0.0 |

- `algorithm` [<RsaOaepParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-rsaoaepparams) \| [<AesCtrParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aesctrparams) \| [<AesCbcParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aescbcparams) \| [<AeadParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aeadparams)
- `key` [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey)
- `data` [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer)
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with an [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) upon success.

Using the method and parameters specified by `algorithm` and the keying
material provided by `key`, this method attempts to encipher `data`.
If successful, the returned promise is resolved with an [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
containing the encrypted result.

The algorithms currently supported include:

- `'AES-CBC'`
- `'AES-CTR'`
- `'AES-GCM'`
- `'AES-OCB'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ChaCha20-Poly1305'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'RSA-OAEP'`

#### `subtle.exportKey(format, key)`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#subtleexportkeyformat-key)

History

| Version | Changes |
| --- | --- |
| v24.8.0 | KMAC algorithms are now supported. |
| v24.7.0 | ML-KEM algorithms are now supported. |
| v24.7.0 | ChaCha20-Poly1305 algorithm is now supported. |
| v24.7.0 | ML-DSA algorithms are now supported. |
| v18.4.0, v16.17.0 | Added `'Ed25519'`, `'Ed448'`, `'X25519'`, and `'X448'` algorithms. |
| v15.9.0 | Removed `'NODE-DSA'` JWK export. |
| v15.0.0 | Added in: v15.0.0 |

- `format` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be one of `'raw'`, `'pkcs8'`, `'spki'`, `'jwk'`, `'raw-secret'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos),
`'raw-public'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos), or `'raw-seed'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos).
- `key` [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey)
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with an [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object) upon success.

Exports the given key into the specified format, if supported.

If the [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey) is not extractable, the returned promise will reject.

When `format` is either `'pkcs8'` or `'spki'` and the export is successful,
the returned promise will be resolved with an [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) containing the
exported key data.

When `format` is `'jwk'` and the export is successful, the returned promise
will be resolved with a JavaScript object conforming to the [JSON Web Key](https://tools.ietf.org/html/rfc7517)
specification.

| Supported Key Algorithm | `'spki'` | `'pkcs8'` | `'jwk'` | `'raw'` | `'raw-secret'` | `'raw-public'` | `'raw-seed'` |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `'AES-CBC'` |  |  | ✔ | ✔ | ✔ |  |  |
| `'AES-CTR'` |  |  | ✔ | ✔ | ✔ |  |  |
| `'AES-GCM'` |  |  | ✔ | ✔ | ✔ |  |  |
| `'AES-KW'` |  |  | ✔ | ✔ | ✔ |  |  |
| `'AES-OCB'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  |  | ✔ |  | ✔ |  |  |
| `'ChaCha20-Poly1305'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  |  | ✔ |  | ✔ |  |  |
| `'ECDH'` | ✔ | ✔ | ✔ | ✔ |  | ✔ |  |
| `'ECDSA'` | ✔ | ✔ | ✔ | ✔ |  | ✔ |  |
| `'Ed25519'` | ✔ | ✔ | ✔ | ✔ |  | ✔ |  |
| `'Ed448'`[5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-secure-curves) | ✔ | ✔ | ✔ | ✔ |  | ✔ |  |
| `'HMAC'` |  |  | ✔ | ✔ | ✔ |  |  |
| `'KMAC128'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  |  | ✔ |  | ✔ |  |  |
| `'KMAC256'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  |  | ✔ |  | ✔ |  |  |
| `'ML-DSA-44'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) | ✔ | ✔ | ✔ |  |  | ✔ | ✔ |
| `'ML-DSA-65'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) | ✔ | ✔ | ✔ |  |  | ✔ | ✔ |
| `'ML-DSA-87'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) | ✔ | ✔ | ✔ |  |  | ✔ | ✔ |
| `'ML-KEM-512'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) | ✔ | ✔ |  |  |  | ✔ | ✔ |
| `'ML-KEM-768'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) | ✔ | ✔ |  |  |  | ✔ | ✔ |
| `'ML-KEM-1024'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) | ✔ | ✔ |  |  |  | ✔ | ✔ |
| `'RSA-OAEP'` | ✔ | ✔ | ✔ |  |  |  |  |
| `'RSA-PSS'` | ✔ | ✔ | ✔ |  |  |  |  |
| `'RSASSA-PKCS1-v1_5'` | ✔ | ✔ | ✔ |  |  |  |  |

#### `subtle.getPublicKey(key, keyUsages)`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#subtlegetpublickeykey-keyusages)

Added in: v24.7.0

[Stability: 1.1](https://nodejs.org/dist/latest/docs/api/documentation.html#stability-index) \- Active development

- `key` [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey) A private key from which to derive the corresponding public key.
- `keyUsages` [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) See [Key usages](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cryptokeyusages).
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with a [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey) upon success.

Derives the public key from a given private key.

#### `subtle.generateKey(algorithm, extractable, keyUsages)`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#subtlegeneratekeyalgorithm-extractable-keyusages)

History

| Version | Changes |
| --- | --- |
| v24.8.0 | KMAC algorithms are now supported. |
| v24.7.0 | ML-KEM algorithms are now supported. |
| v24.7.0 | ChaCha20-Poly1305 algorithm is now supported. |
| v24.7.0 | ML-DSA algorithms are now supported. |
| v15.0.0 | Added in: v15.0.0 |

- `algorithm` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm) \| [<RsaHashedKeyGenParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-rsahashedkeygenparams) \| [<EcKeyGenParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-eckeygenparams) \| [<HmacKeyGenParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-hmackeygenparams) \| [<AesKeyGenParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aeskeygenparams) \| [<KmacKeyGenParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-kmackeygenparams)

- `extractable` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)
- `keyUsages` [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) See [Key usages](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cryptokeyusages).
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with a [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey) \| [<CryptoKeyPair>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokeypair) upon success.

Using the parameters provided in `algorithm`, this method
attempts to generate new keying material. Depending on the algorithm used
either a single [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey) or a [<CryptoKeyPair>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokeypair) is generated.

The [<CryptoKeyPair>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokeypair) (public and private key) generating algorithms supported
include:

- `'ECDH'`
- `'ECDSA'`
- `'Ed25519'`
- `'Ed448'`[5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-secure-curves)
- `'ML-DSA-44'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ML-DSA-65'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ML-DSA-87'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ML-KEM-512'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ML-KEM-768'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ML-KEM-1024'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'RSA-OAEP'`
- `'RSA-PSS'`
- `'RSASSA-PKCS1-v1_5'`
- `'X25519'`
- `'X448'`[5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-secure-curves)

The [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey) (secret key) generating algorithms supported include:

- `'AES-CBC'`
- `'AES-CTR'`
- `'AES-GCM'`
- `'AES-KW'`
- `'AES-OCB'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ChaCha20-Poly1305'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'HMAC'`
- `'KMAC128'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'KMAC256'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)

#### `subtle.importKey(format, keyData, algorithm, extractable, keyUsages)`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#subtleimportkeyformat-keydata-algorithm-extractable-keyusages)

History

| Version | Changes |
| --- | --- |
| v24.8.0 | KMAC algorithms are now supported. |
| v24.7.0 | ML-KEM algorithms are now supported. |
| v24.7.0 | ChaCha20-Poly1305 algorithm is now supported. |
| v24.7.0 | ML-DSA algorithms are now supported. |
| v18.4.0, v16.17.0 | Added `'Ed25519'`, `'Ed448'`, `'X25519'`, and `'X448'` algorithms. |
| v15.9.0 | Removed `'NODE-DSA'` JWK import. |
| v15.0.0 | Added in: v15.0.0 |

- `format` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be one of `'raw'`, `'pkcs8'`, `'spki'`, `'jwk'`, `'raw-secret'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos),
`'raw-public'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos), or `'raw-seed'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos).
- `keyData` [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<Object>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object)

- `algorithm` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm) \| [<RsaHashedImportParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-rsahashedimportparams) \| [<EcKeyImportParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-eckeyimportparams) \| [<HmacImportParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-hmacimportparams) \| [<KmacImportParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-kmacimportparams)

- `extractable` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)
- `keyUsages` [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) See [Key usages](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cryptokeyusages).
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with a [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey) upon success.

This method attempts to interpret the provided `keyData`
as the given `format` to create a [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey) instance using the provided
`algorithm`, `extractable`, and `keyUsages` arguments. If the import is
successful, the returned promise will be resolved with a [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey)
representation of the key material.

If importing KDF algorithm keys, `extractable` must be `false`.

The algorithms currently supported include:

| Supported Key Algorithm | `'spki'` | `'pkcs8'` | `'jwk'` | `'raw'` | `'raw-secret'` | `'raw-public'` | `'raw-seed'` |
| --- | --- | --- | --- | --- | --- | --- | --- |
| `'AES-CBC'` |  |  | ✔ | ✔ | ✔ |  |  |
| `'AES-CTR'` |  |  | ✔ | ✔ | ✔ |  |  |
| `'AES-GCM'` |  |  | ✔ | ✔ | ✔ |  |  |
| `'AES-KW'` |  |  | ✔ | ✔ | ✔ |  |  |
| `'AES-OCB'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  |  | ✔ |  | ✔ |  |  |
| `'Argon2d'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  |  |  |  | ✔ |  |  |
| `'Argon2i'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  |  |  |  | ✔ |  |  |
| `'Argon2id'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  |  |  |  | ✔ |  |  |
| `'ChaCha20-Poly1305'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  |  | ✔ |  | ✔ |  |  |
| `'ECDH'` | ✔ | ✔ | ✔ | ✔ |  | ✔ |  |
| `'ECDSA'` | ✔ | ✔ | ✔ | ✔ |  | ✔ |  |
| `'Ed25519'` | ✔ | ✔ | ✔ | ✔ |  | ✔ |  |
| `'Ed448'`[5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-secure-curves) | ✔ | ✔ | ✔ | ✔ |  | ✔ |  |
| `'HDKF'` |  |  |  | ✔ | ✔ |  |  |
| `'HMAC'` |  |  | ✔ | ✔ | ✔ |  |  |
| `'KMAC128'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  |  | ✔ |  | ✔ |  |  |
| `'KMAC256'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) |  |  | ✔ |  | ✔ |  |  |
| `'ML-DSA-44'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) | ✔ | ✔ | ✔ |  |  | ✔ | ✔ |
| `'ML-DSA-65'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) | ✔ | ✔ | ✔ |  |  | ✔ | ✔ |
| `'ML-DSA-87'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) | ✔ | ✔ | ✔ |  |  | ✔ | ✔ |
| `'ML-KEM-512'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) | ✔ | ✔ |  |  |  | ✔ | ✔ |
| `'ML-KEM-768'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) | ✔ | ✔ |  |  |  | ✔ | ✔ |
| `'ML-KEM-1024'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) | ✔ | ✔ |  |  |  | ✔ | ✔ |
| `'PBKDF2'` |  |  |  | ✔ | ✔ |  |  |
| `'RSA-OAEP'` | ✔ | ✔ | ✔ |  |  |  |  |
| `'RSA-PSS'` | ✔ | ✔ | ✔ |  |  |  |  |
| `'RSASSA-PKCS1-v1_5'` | ✔ | ✔ | ✔ |  |  |  |  |
| `'X25519'` | ✔ | ✔ | ✔ | ✔ |  | ✔ |  |
| `'X448'`[5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-secure-curves) | ✔ | ✔ | ✔ | ✔ |  | ✔ |  |

#### `subtle.sign(algorithm, key, data)`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#subtlesignalgorithm-key-data)

History

| Version | Changes |
| --- | --- |
| v24.8.0 | KMAC algorithms are now supported. |
| v24.7.0 | ML-DSA algorithms are now supported. |
| v18.4.0, v16.17.0 | Added `'Ed25519'`, and `'Ed448'` algorithms. |
| v15.0.0 | Added in: v15.0.0 |

- `algorithm` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm) \| [<RsaPssParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-rsapssparams) \| [<EcdsaParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-ecdsaparams) \| [<ContextParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-contextparams) \| [<KmacParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-kmacparams)
- `key` [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey)
- `data` [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer)
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with an [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) upon success.

Using the method and parameters given by `algorithm` and the keying material
provided by `key`, this method attempts to generate a cryptographic
signature of `data`. If successful, the returned promise is resolved with
an [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) containing the generated signature.

The algorithms currently supported include:

- `'ECDSA'`
- `'Ed25519'`
- `'Ed448'`[5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-secure-curves)
- `'HMAC'`
- `'KMAC128'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'KMAC256'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ML-DSA-44'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ML-DSA-65'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ML-DSA-87'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'RSA-PSS'`
- `'RSASSA-PKCS1-v1_5'`

#### `subtle.unwrapKey(format, wrappedKey, unwrappingKey, unwrapAlgo, unwrappedKeyAlgo, extractable, keyUsages)`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#subtleunwrapkeyformat-wrappedkey-unwrappingkey-unwrapalgo-unwrappedkeyalgo-extractable-keyusages)

History

| Version | Changes |
| --- | --- |
| v24.7.0 | AES-OCB algorithm is now supported. |
| v24.7.0 | ChaCha20-Poly1305 algorithm is now supported. |
| v15.0.0 | Added in: v15.0.0 |

- `format` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be one of `'raw'`, `'pkcs8'`, `'spki'`, `'jwk'`, `'raw-secret'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos),
`'raw-public'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos), or `'raw-seed'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos).
- `wrappedKey` [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer)
- `unwrappingKey` [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey)

- `unwrapAlgo` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm) \| [<RsaOaepParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-rsaoaepparams) \| [<AesCtrParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aesctrparams) \| [<AesCbcParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aescbcparams) \| [<AeadParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aeadparams)
- `unwrappedKeyAlgo` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm) \| [<RsaHashedImportParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-rsahashedimportparams) \| [<EcKeyImportParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-eckeyimportparams) \| [<HmacImportParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-hmacimportparams) \| [<KmacImportParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-kmacimportparams)

- `extractable` [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type)
- `keyUsages` [<string\[\]>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) See [Key usages](https://nodejs.org/dist/latest/docs/api/webcrypto.html#cryptokeyusages).
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with a [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey) upon success.

In cryptography, "wrapping a key" refers to exporting and then encrypting the
keying material. This method attempts to decrypt a wrapped
key and create a [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey) instance. It is equivalent to calling
[`subtle.decrypt()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtledecryptalgorithm-key-data) first on the encrypted key data (using the `wrappedKey`,
`unwrapAlgo`, and `unwrappingKey` arguments as input) then passing the results
to the [`subtle.importKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleimportkeyformat-keydata-algorithm-extractable-keyusages) method using the `unwrappedKeyAlgo`,
`extractable`, and `keyUsages` arguments as inputs. If successful, the returned
promise is resolved with a [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey) object.

The wrapping algorithms currently supported include:

- `'AES-CBC'`
- `'AES-CTR'`
- `'AES-GCM'`
- `'AES-KW'`
- `'AES-OCB'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ChaCha20-Poly1305'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'RSA-OAEP'`

The unwrapped key algorithms supported include:

- `'AES-CBC'`
- `'AES-CTR'`
- `'AES-GCM'`
- `'AES-KW'`
- `'AES-OCB'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ChaCha20-Poly1305'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ECDH'`
- `'ECDSA'`
- `'Ed25519'`
- `'Ed448'`[5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-secure-curves)
- `'HMAC'`
- `'KMAC128'`[5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-secure-curves)
- `'KMAC256'`[5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-secure-curves)
- `'ML-DSA-44'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ML-DSA-65'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ML-DSA-87'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ML-KEM-512'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ML-KEM-768'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ML-KEM-1024'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)v
- `'RSA-OAEP'`
- `'RSA-PSS'`
- `'RSASSA-PKCS1-v1_5'`
- `'X25519'`
- `'X448'`[5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-secure-curves)

#### `subtle.verify(algorithm, key, signature, data)`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#subtleverifyalgorithm-key-signature-data)

History

| Version | Changes |
| --- | --- |
| v24.8.0 | KMAC algorithms are now supported. |
| v24.7.0 | ML-DSA algorithms are now supported. |
| v18.4.0, v16.17.0 | Added `'Ed25519'`, and `'Ed448'` algorithms. |
| v15.0.0 | Added in: v15.0.0 |

- `algorithm` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm) \| [<RsaPssParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-rsapssparams) \| [<EcdsaParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-ecdsaparams) \| [<ContextParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-contextparams) \| [<KmacParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-kmacparams)
- `key` [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey)
- `signature` [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer)
- `data` [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer)
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with a [<boolean>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#boolean_type) upon success.

Using the method and parameters given in `algorithm` and the keying material
provided by `key`, this method attempts to verify that `signature` is
a valid cryptographic signature of `data`. The returned promise is resolved
with either `true` or `false`.

The algorithms currently supported include:

- `'ECDSA'`
- `'Ed25519'`
- `'Ed448'`[5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-secure-curves)
- `'HMAC'`
- `'KMAC128'`[5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-secure-curves)
- `'KMAC256'`[5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-secure-curves)
- `'ML-DSA-44'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ML-DSA-65'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ML-DSA-87'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'RSA-PSS'`
- `'RSASSA-PKCS1-v1_5'`

#### `subtle.wrapKey(format, key, wrappingKey, wrapAlgo)`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#subtlewrapkeyformat-key-wrappingkey-wrapalgo)

History

| Version | Changes |
| --- | --- |
| v24.7.0 | AES-OCB algorithm is now supported. |
| v24.7.0 | ChaCha20-Poly1305 algorithm is now supported. |
| v15.0.0 | Added in: v15.0.0 |

- `format` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be one of `'raw'`, `'pkcs8'`, `'spki'`, `'jwk'`, `'raw-secret'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos),
`'raw-public'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos), or `'raw-seed'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos).
- `key` [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey)
- `wrappingKey` [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey)
- `wrapAlgo` [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm) \| [<RsaOaepParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-rsaoaepparams) \| [<AesCtrParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aesctrparams) \| [<AesCbcParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aescbcparams) \| [<AeadParams>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-aeadparams)
- Returns: [<Promise>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) Fulfills with an [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) upon success.

In cryptography, "wrapping a key" refers to exporting and then encrypting the
keying material. This method exports the keying material into
the format identified by `format`, then encrypts it using the method and
parameters specified by `wrapAlgo` and the keying material provided by
`wrappingKey`. It is the equivalent to calling [`subtle.exportKey()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleexportkeyformat-key) using
`format` and `key` as the arguments, then passing the result to the
[`subtle.encrypt()`](https://nodejs.org/dist/latest/docs/api/webcrypto.html#subtleencryptalgorithm-key-data) method using `wrappingKey` and `wrapAlgo` as inputs. If
successful, the returned promise will be resolved with an [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)
containing the encrypted key data.

The wrapping algorithms currently supported include:

- `'AES-CBC'`
- `'AES-CTR'`
- `'AES-GCM'`
- `'AES-KW'`
- `'AES-OCB'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'ChaCha20-Poly1305'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'RSA-OAEP'`

### Algorithm parameters[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#algorithm-parameters)

The algorithm parameter objects define the methods and parameters used by
the various [<SubtleCrypto>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-subtlecrypto) methods. While described here as "classes", they
are simple JavaScript dictionary objects.

#### Class: `Algorithm`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-algorithm)

Added in: v15.0.0

##### `Algorithm.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#algorithmname)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

#### Class: `AeadParams`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-aeadparams)

Added in: v15.0.0

##### `aeadParams.additionalData`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#aeadparamsadditionaldata)

Added in: v15.0.0

- Type: [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<undefined>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type)

Extra input that is not encrypted but is included in the authentication
of the data. The use of `additionalData` is optional.

##### `aeadParams.iv`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#aeadparamsiv)

Added in: v15.0.0

- Type: [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer)

The initialization vector must be unique for every encryption operation using a
given key.

##### `aeadParams.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#aeadparamsname)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be `'AES-GCM'`, `'AES-OCB'`, or `'ChaCha20-Poly1305'`.

##### `aeadParams.tagLength`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#aeadparamstaglength)

Added in: v15.0.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The size in bits of the generated authentication tag.

#### Class: `AesDerivedKeyParams`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-aesderivedkeyparams)

Added in: v15.0.0

##### `aesDerivedKeyParams.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#aesderivedkeyparamsname)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be one of `'AES-CBC'`, `'AES-CTR'`, `'AES-GCM'`, `'AES-OCB'`, or `'AES-KW'`

##### `aesDerivedKeyParams.length`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#aesderivedkeyparamslength)

Added in: v15.0.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The length of the AES key to be derived. This must be either `128`, `192`,
or `256`.

#### Class: `AesCbcParams`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-aescbcparams)

Added in: v15.0.0

##### `aesCbcParams.iv`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#aescbcparamsiv)

Added in: v15.0.0

- Type: [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer)

Provides the initialization vector. It must be exactly 16-bytes in length
and should be unpredictable and cryptographically random.

##### `aesCbcParams.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#aescbcparamsname)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be `'AES-CBC'`.

#### Class: `AesCtrParams`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-aesctrparams)

Added in: v15.0.0

##### `aesCtrParams.counter`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#aesctrparamscounter)

Added in: v15.0.0

- Type: [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer)

The initial value of the counter block. This must be exactly 16 bytes long.

The `AES-CTR` method uses the rightmost `length` bits of the block as the
counter and the remaining bits as the nonce.

##### `aesCtrParams.length`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#aesctrparamslength)

Added in: v15.0.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) The number of bits in the `aesCtrParams.counter` that are
to be used as the counter.

##### `aesCtrParams.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#aesctrparamsname)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be `'AES-CTR'`.

#### Class: `AesKeyAlgorithm`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-aeskeyalgorithm)

Added in: v15.0.0

##### `aesKeyAlgorithm.length`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#aeskeyalgorithmlength)

Added in: v15.0.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The length of the AES key in bits.

##### `aesKeyAlgorithm.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#aeskeyalgorithmname)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

#### Class: `AesKeyGenParams`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-aeskeygenparams)

Added in: v15.0.0

##### `aesKeyGenParams.length`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#aeskeygenparamslength)

Added in: v15.0.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The length of the AES key to be generated. This must be either `128`, `192`,
or `256`.

##### `aesKeyGenParams.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#aeskeygenparamsname)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be one of `'AES-CBC'`, `'AES-CTR'`, `'AES-GCM'`, or
`'AES-KW'`

#### Class: `Argon2Params`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-argon2params)

Added in: v24.8.0

##### `argon2Params.associatedData`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#argon2paramsassociateddata)

Added in: v24.8.0

- Type: [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer)

Represents the optional associated data.

##### `argon2Params.memory`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#argon2paramsmemory)

Added in: v24.8.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Represents the memory size in kibibytes. It must be at least 8 times the degree of parallelism.

##### `argon2Params.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#argon2paramsname)

Added in: v24.8.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be one of `'Argon2d'`, `'Argon2i'`, or `'Argon2id'`.

##### `argon2Params.nonce`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#argon2paramsnonce)

Added in: v24.8.0

- Type: [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer)

Represents the nonce, which is a salt for password hashing applications.

##### `argon2Params.parallelism`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#argon2paramsparallelism)

Added in: v24.8.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Represents the degree of parallelism.

##### `argon2Params.passes`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#argon2paramspasses)

Added in: v24.8.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Represents the number of passes.

##### `argon2Params.secretValue`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#argon2paramssecretvalue)

Added in: v24.8.0

- Type: [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer)

Represents the optional secret value.

##### `argon2Params.version`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#argon2paramsversion)

Added in: v24.8.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

Represents the Argon2 version number. The default and currently only defined version is `19` (`0x13`).

#### Class: `ContextParams`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-contextparams)

Added in: v24.7.0

##### `contextParams.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#contextparamsname)

Added in: v24.7.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be `Ed448`[5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-secure-curves), `'ML-DSA-44'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos),
`'ML-DSA-65'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos), or `'ML-DSA-87'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos).

##### `contextParams.context`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#contextparamscontext)

History

| Version | Changes |
| --- | --- |
| v24.8.0 | Non-empty context is now supported. |
| v24.7.0 | Added in: v24.7.0 |

- Type: [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<undefined>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type)

The `context` member represents the optional context data to associate with
the message.

#### Class: `CShakeParams`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-cshakeparams)

Added in: v24.7.0

##### `cShakeParams.customization`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#cshakeparamscustomization)

Added in: v24.7.0

- Type: [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<undefined>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type)

The `customization` member represents the customization string.
The Node.js Web Crypto API implementation only supports zero-length customization
which is equivalent to not providing customization at all.

##### `cShakeParams.functionName`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#cshakeparamsfunctionname)

Added in: v24.7.0

- Type: [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<undefined>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type)

The `functionName` member represents represents the function name, used by NIST to define
functions based on cSHAKE.
The Node.js Web Crypto API implementation only supports zero-length functionName
which is equivalent to not providing functionName at all.

##### `cShakeParams.length`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#cshakeparamslength)

Added in: v24.7.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type) represents the requested output length in bits.

##### `cShakeParams.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#cshakeparamsname)

Added in: v24.7.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be `'cSHAKE128'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos) or `'cSHAKE256'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)

#### Class: `EcdhKeyDeriveParams`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-ecdhkeyderiveparams)

Added in: v15.0.0

##### `ecdhKeyDeriveParams.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#ecdhkeyderiveparamsname)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be `'ECDH'`, `'X25519'`, or `'X448'`[5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-secure-curves).

##### `ecdhKeyDeriveParams.public`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#ecdhkeyderiveparamspublic)

Added in: v15.0.0

- Type: [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey)

ECDH key derivation operates by taking as input one parties private key and
another parties public key -- using both to generate a common shared secret.
The `ecdhKeyDeriveParams.public` property is set to the other parties public
key.

#### Class: `EcdsaParams`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-ecdsaparams)

Added in: v15.0.0

##### `ecdsaParams.hash`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#ecdsaparamshash)

History

| Version | Changes |
| --- | --- |
| v24.7.0 | SHA-3 algorithms are now supported. |
| v15.0.0 | Added in: v15.0.0 |

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm)

If represented as a [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type), the value must be one of:

- `'SHA-1'`
- `'SHA-256'`
- `'SHA-384'`
- `'SHA-512'`
- `'SHA3-256'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'SHA3-384'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'SHA3-512'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)

If represented as an [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm), the object's `name` property
must be one of the above listed values.

##### `ecdsaParams.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#ecdsaparamsname)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be `'ECDSA'`.

#### Class: `EcKeyAlgorithm`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-eckeyalgorithm)

Added in: v15.0.0

##### `ecKeyAlgorithm.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#eckeyalgorithmname)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

##### `ecKeyAlgorithm.namedCurve`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#eckeyalgorithmnamedcurve)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

#### Class: `EcKeyGenParams`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-eckeygenparams)

Added in: v15.0.0

##### `ecKeyGenParams.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#eckeygenparamsname)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be one of `'ECDSA'` or `'ECDH'`.

##### `ecKeyGenParams.namedCurve`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#eckeygenparamsnamedcurve)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be one of `'P-256'`, `'P-384'`, `'P-521'`.

#### Class: `EcKeyImportParams`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-eckeyimportparams)

Added in: v15.0.0

##### `ecKeyImportParams.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#eckeyimportparamsname)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be one of `'ECDSA'` or `'ECDH'`.

##### `ecKeyImportParams.namedCurve`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#eckeyimportparamsnamedcurve)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be one of `'P-256'`, `'P-384'`, `'P-521'`.

#### Class: `EncapsulatedBits`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-encapsulatedbits)

Added in: v24.7.0

A temporary symmetric secret key (represented as [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)) for message encryption
and the ciphertext (that can be transmitted to the message recipient along with the
message) encrypted by this shared key. The recipient uses their private key to determine
what the shared key is which then allows them to decrypt the message.

##### `encapsulatedBits.ciphertext`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#encapsulatedbitsciphertext)

Added in: v24.7.0

- Type: [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)

##### `encapsulatedBits.sharedKey`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#encapsulatedbitssharedkey)

Added in: v24.7.0

- Type: [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)

#### Class: `EncapsulatedKey`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-encapsulatedkey)

Added in: v24.7.0

A temporary symmetric secret key (represented as [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey)) for message encryption
and the ciphertext (that can be transmitted to the message recipient along with the
message) encrypted by this shared key. The recipient uses their private key to determine
what the shared key is which then allows them to decrypt the message.

##### `encapsulatedKey.ciphertext`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#encapsulatedkeyciphertext)

Added in: v24.7.0

- Type: [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)

##### `encapsulatedKey.sharedKey`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#encapsulatedkeysharedkey)

Added in: v24.7.0

- Type: [<CryptoKey>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-cryptokey)

#### Class: `HkdfParams`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-hkdfparams)

Added in: v15.0.0

##### `hkdfParams.hash`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#hkdfparamshash)

History

| Version | Changes |
| --- | --- |
| v24.7.0 | SHA-3 algorithms are now supported. |
| v15.0.0 | Added in: v15.0.0 |

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm)

If represented as a [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type), the value must be one of:

- `'SHA-1'`
- `'SHA-256'`
- `'SHA-384'`
- `'SHA-512'`
- `'SHA3-256'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'SHA3-384'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'SHA3-512'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)

If represented as an [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm), the object's `name` property
must be one of the above listed values.

##### `hkdfParams.info`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#hkdfparamsinfo)

Added in: v15.0.0

- Type: [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer)

Provides application-specific contextual input to the HKDF algorithm.
This can be zero-length but must be provided.

##### `hkdfParams.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#hkdfparamsname)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be `'HKDF'`.

##### `hkdfParams.salt`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#hkdfparamssalt)

Added in: v15.0.0

- Type: [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer)

The salt value significantly improves the strength of the HKDF algorithm.
It should be random or pseudorandom and should be the same length as the
output of the digest function (for instance, if using `'SHA-256'` as the
digest, the salt should be 256-bits of random data).

#### Class: `HmacImportParams`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-hmacimportparams)

Added in: v15.0.0

##### `hmacImportParams.hash`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#hmacimportparamshash)

History

| Version | Changes |
| --- | --- |
| v24.7.0 | SHA-3 algorithms are now supported. |
| v15.0.0 | Added in: v15.0.0 |

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm)

If represented as a [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type), the value must be one of:

- `'SHA-1'`
- `'SHA-256'`
- `'SHA-384'`
- `'SHA-512'`
- `'SHA3-256'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'SHA3-384'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'SHA3-512'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)

If represented as an [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm), the object's `name` property
must be one of the above listed values.

##### `hmacImportParams.length`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#hmacimportparamslength)

Added in: v15.0.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The optional number of bits in the HMAC key. This is optional and should
be omitted for most cases.

##### `hmacImportParams.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#hmacimportparamsname)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be `'HMAC'`.

#### Class: `HmacKeyAlgorithm`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-hmackeyalgorithm)

Added in: v15.0.0

##### `hmacKeyAlgorithm.hash`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#hmackeyalgorithmhash)

Added in: v15.0.0

- Type: [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm)

##### `hmacKeyAlgorithm.length`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#hmackeyalgorithmlength)

Added in: v15.0.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The length of the HMAC key in bits.

##### `hmacKeyAlgorithm.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#hmackeyalgorithmname)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

#### Class: `HmacKeyGenParams`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-hmackeygenparams)

Added in: v15.0.0

##### `hmacKeyGenParams.hash`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#hmackeygenparamshash)

History

| Version | Changes |
| --- | --- |
| v24.7.0 | SHA-3 algorithms are now supported. |
| v15.0.0 | Added in: v15.0.0 |

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm)

If represented as a [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type), the value must be one of:

- `'SHA-1'`
- `'SHA-256'`
- `'SHA-384'`
- `'SHA-512'`
- `'SHA3-256'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'SHA3-384'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'SHA3-512'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)

If represented as an [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm), the object's `name` property
must be one of the above listed values.

##### `hmacKeyGenParams.length`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#hmackeygenparamslength)

Added in: v15.0.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The number of bits to generate for the HMAC key. If omitted,
the length will be determined by the hash algorithm used.
This is optional and should be omitted for most cases.

##### `hmacKeyGenParams.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#hmackeygenparamsname)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be `'HMAC'`.

#### Class: `KeyAlgorithm`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-keyalgorithm)

Added in: v15.0.0

##### `keyAlgorithm.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#keyalgorithmname)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

#### Class: `KmacImportParams`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-kmacimportparams)

Added in: v24.8.0

##### `kmacImportParams.length`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#kmacimportparamslength)

Added in: v24.8.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The optional number of bits in the KMAC key. This is optional and should
be omitted for most cases.

##### `kmacImportParams.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#kmacimportparamsname)

Added in: v24.8.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be `'KMAC128'` or `'KMAC256'`.

#### Class: `KmacKeyAlgorithm`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-kmackeyalgorithm)

Added in: v24.8.0

##### `kmacKeyAlgorithm.length`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#kmackeyalgorithmlength)

Added in: v24.8.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The length of the KMAC key in bits.

##### `kmacKeyAlgorithm.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#kmackeyalgorithmname)

Added in: v24.8.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

#### Class: `KmacKeyGenParams`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-kmackeygenparams)

Added in: v24.8.0

##### `kmacKeyGenParams.length`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#kmackeygenparamslength)

Added in: v24.8.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The number of bits to generate for the KMAC key. If omitted,
the length will be determined by the KMAC algorithm used.
This is optional and should be omitted for most cases.

##### `kmacKeyGenParams.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#kmackeygenparamsname)

Added in: v24.8.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be `'KMAC128'` or `'KMAC256'`.

#### Class: `KmacParams`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-kmacparams)

Added in: v24.8.0

##### `kmacParams.algorithm`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#kmacparamsalgorithm)

Added in: v24.8.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be `'KMAC128'` or `'KMAC256'`.

##### `kmacParams.customization`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#kmacparamscustomization)

Added in: v24.8.0

- Type: [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer) \| [<undefined>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#undefined_type)

The `customization` member represents the optional customization string.

##### `kmacParams.length`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#kmacparamslength)

Added in: v24.8.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The length of the output in bytes. This must be a positive integer.

#### Class: `Pbkdf2Params`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-pbkdf2params)

Added in: v15.0.0

##### `pbkdf2Params.hash`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#pbkdf2paramshash)

History

| Version | Changes |
| --- | --- |
| v24.7.0 | SHA-3 algorithms are now supported. |
| v15.0.0 | Added in: v15.0.0 |

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm)

If represented as a [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type), the value must be one of:

- `'SHA-1'`
- `'SHA-256'`
- `'SHA-384'`
- `'SHA-512'`
- `'SHA3-256'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'SHA3-384'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'SHA3-512'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)

If represented as an [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm), the object's `name` property
must be one of the above listed values.

##### `pbkdf2Params.iterations`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#pbkdf2paramsiterations)

Added in: v15.0.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The number of iterations the PBKDF2 algorithm should make when deriving bits.

##### `pbkdf2Params.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#pbkdf2paramsname)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be `'PBKDF2'`.

##### `pbkdf2Params.salt`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#pbkdf2paramssalt)

Added in: v15.0.0

- Type: [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer)

Should be at least 16 random or pseudorandom bytes.

#### Class: `RsaHashedImportParams`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-rsahashedimportparams)

Added in: v15.0.0

##### `rsaHashedImportParams.hash`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#rsahashedimportparamshash)

History

| Version | Changes |
| --- | --- |
| v24.7.0 | SHA-3 algorithms are now supported. |
| v15.0.0 | Added in: v15.0.0 |

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm)

If represented as a [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type), the value must be one of:

- `'SHA-1'`
- `'SHA-256'`
- `'SHA-384'`
- `'SHA-512'`
- `'SHA3-256'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'SHA3-384'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'SHA3-512'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)

If represented as an [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm), the object's `name` property
must be one of the above listed values.

##### `rsaHashedImportParams.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#rsahashedimportparamsname)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be one of `'RSASSA-PKCS1-v1_5'`, `'RSA-PSS'`, or
`'RSA-OAEP'`.

#### Class: `RsaHashedKeyAlgorithm`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-rsahashedkeyalgorithm)

Added in: v15.0.0

##### `rsaHashedKeyAlgorithm.hash`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#rsahashedkeyalgorithmhash)

Added in: v15.0.0

- Type: [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm)

##### `rsaHashedKeyAlgorithm.modulusLength`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#rsahashedkeyalgorithmmoduluslength)

Added in: v15.0.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The length in bits of the RSA modulus.

##### `rsaHashedKeyAlgorithm.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#rsahashedkeyalgorithmname)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type)

##### `rsaHashedKeyAlgorithm.publicExponent`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#rsahashedkeyalgorithmpublicexponent)

Added in: v15.0.0

- Type: [<Uint8Array>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)

The RSA public exponent.

#### Class: `RsaHashedKeyGenParams`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-rsahashedkeygenparams)

Added in: v15.0.0

##### `rsaHashedKeyGenParams.hash`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#rsahashedkeygenparamshash)

History

| Version | Changes |
| --- | --- |
| v24.7.0 | SHA-3 algorithms are now supported. |
| v15.0.0 | Added in: v15.0.0 |

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) \| [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm)

If represented as a [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type), the value must be one of:

- `'SHA-1'`
- `'SHA-256'`
- `'SHA-384'`
- `'SHA-512'`
- `'SHA3-256'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'SHA3-384'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)
- `'SHA3-512'`[4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fn-modern-algos)

If represented as an [<Algorithm>](https://nodejs.org/dist/latest/docs/api/webcrypto.html#class-algorithm), the object's `name` property
must be one of the above listed values.

##### `rsaHashedKeyGenParams.modulusLength`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#rsahashedkeygenparamsmoduluslength)

Added in: v15.0.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The length in bits of the RSA modulus. As a best practice, this should be
at least `2048`.

##### `rsaHashedKeyGenParams.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#rsahashedkeygenparamsname)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be one of `'RSASSA-PKCS1-v1_5'`, `'RSA-PSS'`, or
`'RSA-OAEP'`.

##### `rsaHashedKeyGenParams.publicExponent`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#rsahashedkeygenparamspublicexponent)

Added in: v15.0.0

- Type: [<Uint8Array>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array)

The RSA public exponent. This must be a [<Uint8Array>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) containing a big-endian,
unsigned integer that must fit within 32-bits. The [<Uint8Array>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array) may contain an
arbitrary number of leading zero-bits. The value must be a prime number. Unless
there is reason to use a different value, use `new Uint8Array([1, 0, 1])`
(65537) as the public exponent.

#### Class: `RsaOaepParams`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-rsaoaepparams)

Added in: v15.0.0

##### `rsaOaepParams.label`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#rsaoaepparamslabel)

Added in: v15.0.0

- Type: [<ArrayBuffer>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) \| [<TypedArray>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray) \| [<DataView>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DataView) \| [<Buffer>](https://nodejs.org/dist/latest/docs/api/buffer.html#class-buffer)

An additional collection of bytes that will not be encrypted, but will be bound
to the generated ciphertext.

The `rsaOaepParams.label` parameter is optional.

##### `rsaOaepParams.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#rsaoaepparamsname)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) must be `'RSA-OAEP'`.

#### Class: `RsaPssParams`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#class-rsapssparams)

Added in: v15.0.0

##### `rsaPssParams.name`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#rsapssparamsname)

Added in: v15.0.0

- Type: [<string>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#string_type) Must be `'RSA-PSS'`.

##### `rsaPssParams.saltLength`[\#](https://nodejs.org/dist/latest/docs/api/webcrypto.html\#rsapssparamssaltlength)

Added in: v15.0.0

- Type: [<number>](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#number_type)

The length (in bytes) of the random salt to use.

### Footnotes

1. Requires OpenSSL >= 3.0 [↩](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-openssl30) [↩2](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-openssl30-2) [↩3](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-openssl30-3)

2. Requires OpenSSL >= 3.2 [↩](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-openssl32) [↩2](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-openssl32-2) [↩3](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-openssl32-3)

3. Requires OpenSSL >= 3.5 [↩](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-openssl35) [↩2](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-openssl35-2) [↩3](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-openssl35-3) [↩4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-openssl35-4) [↩5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-openssl35-5) [↩6](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-openssl35-6)

4. See [Modern Algorithms in the Web Cryptography API](https://nodejs.org/dist/latest/docs/api/webcrypto.html#modern-algorithms-in-the-web-cryptography-api) [↩](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos) [↩2](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-2) [↩3](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-3) [↩4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-4) [↩5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-5) [↩6](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-6) [↩7](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-7) [↩8](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-8) [↩9](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-9) [↩10](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-10) [↩11](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-11) [↩12](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-12) [↩13](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-13) [↩14](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-14) [↩15](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-15) [↩16](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-16) [↩17](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-17) [↩18](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-18) [↩19](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-19) [↩20](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-20) [↩21](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-21) [↩22](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-22) [↩23](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-23) [↩24](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-24) [↩25](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-25) [↩26](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-26) [↩27](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-27) [↩28](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-28) [↩29](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-29) [↩30](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-30) [↩31](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-31) [↩32](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-32) [↩33](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-33) [↩34](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-34) [↩35](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-35) [↩36](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-36) [↩37](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-37) [↩38](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-38) [↩39](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-39) [↩40](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-40) [↩41](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-41) [↩42](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-42) [↩43](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-43) [↩44](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-44) [↩45](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-45) [↩46](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-46) [↩47](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-47) [↩48](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-48) [↩49](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-49) [↩50](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-50) [↩51](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-51) [↩52](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-52) [↩53](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-53) [↩54](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-54) [↩55](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-55) [↩56](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-56) [↩57](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-57) [↩58](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-58) [↩59](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-59) [↩60](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-60) [↩61](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-61) [↩62](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-62) [↩63](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-63) [↩64](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-64) [↩65](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-65) [↩66](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-66) [↩67](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-67) [↩68](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-68) [↩69](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-69) [↩70](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-70) [↩71](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-71) [↩72](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-72) [↩73](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-73) [↩74](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-74) [↩75](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-75) [↩76](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-76) [↩77](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-77) [↩78](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-78) [↩79](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-79) [↩80](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-80) [↩81](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-81) [↩82](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-82) [↩83](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-83) [↩84](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-84) [↩85](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-85) [↩86](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-86) [↩87](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-87) [↩88](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-88) [↩89](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-89) [↩90](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-90) [↩91](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-91) [↩92](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-92) [↩93](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-93) [↩94](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-94) [↩95](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-95) [↩96](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-96) [↩97](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-97) [↩98](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-98) [↩99](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-99) [↩100](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-100) [↩101](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-101) [↩102](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-102) [↩103](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-103) [↩104](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-104) [↩105](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-105) [↩106](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-106) [↩107](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-107) [↩108](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-108) [↩109](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-109) [↩110](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-110) [↩111](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-111) [↩112](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-112) [↩113](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-113) [↩114](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-114) [↩115](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-115) [↩116](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-116) [↩117](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-117) [↩118](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-118) [↩119](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-119) [↩120](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-120) [↩121](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-121) [↩122](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-122) [↩123](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-123) [↩124](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-124) [↩125](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-125) [↩126](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-126) [↩127](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-127) [↩128](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-128) [↩129](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-129) [↩130](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-130) [↩131](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-131) [↩132](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-132) [↩133](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-133) [↩134](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-134) [↩135](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-135) [↩136](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-136) [↩137](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-137) [↩138](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-138) [↩139](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-139) [↩140](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-140) [↩141](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-141) [↩142](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-142) [↩143](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-143) [↩144](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-144) [↩145](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-145) [↩146](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-146) [↩147](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-147) [↩148](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-148) [↩149](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-149) [↩150](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-modern-algos-150)

5. See [Secure Curves in the Web Cryptography API](https://nodejs.org/dist/latest/docs/api/webcrypto.html#secure-curves-in-the-web-cryptography-api) [↩](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-secure-curves) [↩2](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-secure-curves-2) [↩3](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-secure-curves-3) [↩4](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-secure-curves-4) [↩5](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-secure-curves-5) [↩6](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-secure-curves-6) [↩7](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-secure-curves-7) [↩8](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-secure-curves-8) [↩9](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-secure-curves-9) [↩10](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-secure-curves-10) [↩11](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-secure-curves-11) [↩12](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-secure-curves-12) [↩13](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-secure-curves-13) [↩14](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-secure-curves-14) [↩15](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-secure-curves-15) [↩16](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-secure-curves-16) [↩17](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-secure-curves-17) [↩18](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-secure-curves-18) [↩19](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-secure-curves-19) [↩20](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-secure-curves-20) [↩21](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-secure-curves-21) [↩22](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-secure-curves-22) [↩23](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-secure-curves-23) [↩24](https://nodejs.org/dist/latest/docs/api/webcrypto.html#user-content-fnref-secure-curves-24)