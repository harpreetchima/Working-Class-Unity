---
url: "https://formbricks.com/docs/development/standards/technical/language-specific-conventions"
title: "Language-Specific - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/development/standards/technical/language-specific-conventions#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Technical Standards

Language-Specific

[Overview](https://formbricks.com/docs/overview/introduction) [XM & Surveys](https://formbricks.com/docs/xm-and-surveys/overview) [Self Hosting](https://formbricks.com/docs/self-hosting/overview) [Development](https://formbricks.com/docs/development/overview) [API v1 Reference](https://formbricks.com/docs/api-reference/rest-api) [API v2 Reference (Beta)](https://formbricks.com/docs/api-v2-reference/introduction)

##### Development

- [Overview](https://formbricks.com/docs/development/overview)

##### Local Setup

- [Linux](https://formbricks.com/docs/development/local-setup/linux)
- [Mac](https://formbricks.com/docs/development/local-setup/mac)
- [Windows](https://formbricks.com/docs/development/local-setup/windows)
- [Gitpod](https://formbricks.com/docs/development/local-setup/gitpod)
- [GitHub Codespaces](https://formbricks.com/docs/development/local-setup/github-codespaces)

##### Technical Handbook

- [Solution Overview](https://formbricks.com/docs/development/technical-handbook/overview)
- [Database Model](https://formbricks.com/docs/development/technical-handbook/database-model)
- [Tenant Separation](https://formbricks.com/docs/development/technical-handbook/tenant-separation)

##### Standards

- Code Organization

- Development Practices

- Technical Standards

  - [Language-Specific](https://formbricks.com/docs/development/standards/technical/language-specific-conventions)
  - [Framework Usage](https://formbricks.com/docs/development/standards/technical/framework-usage)
- Quality Assurance


##### Contributions

- [Contribute to Formbricks](https://formbricks.com/docs/development/contribution/contribution)

##### Guides

- Auth & Provision


##### Support

- [Troubleshooting](https://formbricks.com/docs/development/support/troubleshooting)

On this page

- [TypeScript](https://formbricks.com/docs/development/standards/technical/language-specific-conventions#typescript)
- [ESLint Configuration](https://formbricks.com/docs/development/standards/technical/language-specific-conventions#eslint-configuration)
- [Key Conventions](https://formbricks.com/docs/development/standards/technical/language-specific-conventions#key-conventions)
- [Code Formatting](https://formbricks.com/docs/development/standards/technical/language-specific-conventions#code-formatting)
- [Swift (iOS SDK)](https://formbricks.com/docs/development/standards/technical/language-specific-conventions#swift-ios-sdk)
- [Swift Configuration](https://formbricks.com/docs/development/standards/technical/language-specific-conventions#swift-configuration)
- [Key Conventions](https://formbricks.com/docs/development/standards/technical/language-specific-conventions#key-conventions-2)
- [Code Formatting](https://formbricks.com/docs/development/standards/technical/language-specific-conventions#code-formatting-2)
- [Kotlin (Android SDK)](https://formbricks.com/docs/development/standards/technical/language-specific-conventions#kotlin-android-sdk)
- [Key Conventions](https://formbricks.com/docs/development/standards/technical/language-specific-conventions#key-conventions-3)
- [Code Formatting](https://formbricks.com/docs/development/standards/technical/language-specific-conventions#code-formatting-3)
- [Data Modeling](https://formbricks.com/docs/development/standards/technical/language-specific-conventions#data-modeling)

Technical Standards

# Language-Specific

This document outlines the language-specific conventions for the Formbricks codebase, providing guidelines for writing code in TypeScript/JavaScript.

## [​](https://formbricks.com/docs/development/standards/technical/language-specific-conventions\#typescript)  TypeScript

Our codebase follows the Vercel Engineering Style Guide conventions.

### [​](https://formbricks.com/docs/development/standards/technical/language-specific-conventions\#eslint-configuration)  ESLint Configuration

We maintain three primary ESLint configurations for different project types:

1. **Library Configuration** (for packages):

Copy

```
extends: [\
"@vercel/style-guide/eslint/node",\
"@vercel/style-guide/eslint/typescript"\
]
```

2. **React Configuration** (for React applications):

Copy

```
extends: [\
"@vercel/style-guide/eslint/node",\
"@vercel/style-guide/eslint/typescript",\
"@vercel/style-guide/eslint/browser",\
"@vercel/style-guide/eslint/react",\
"@vercel/style-guide/eslint/next"\
]
```

3. **Next.js Configuration** (for Next.js applications):

Copy

```
extends: [\
"@vercel/style-guide/eslint/node",\
"@vercel/style-guide/eslint/typescript",\
"@vercel/style-guide/eslint/browser",\
"@vercel/style-guide/eslint/react",\
"@vercel/style-guide/eslint/next"\
]
```

### [​](https://formbricks.com/docs/development/standards/technical/language-specific-conventions\#key-conventions)  Key Conventions

1. **TypeScript Usage**   - Strict TypeScript checking enabled
   - Explicit type annotations when necessary
   - Proper interface and type naming (prefix with T for types, I for interfaces when helpful)
   - No use of `any` type unless absolutely necessary
2. **Imports/Exports**   - Follow strict import ordering:
     1. Mocks (for testing)
     2. Server-only imports
     3. Third-party modules
     4. Internal `@formbricks/*` modules
     5. Local aliases (`~/*`)
     6. Relative imports
3. **Error Handling**   - Use typed error responses
   - Proper error propagation
   - Consistent error message formatting
   - Implement error boundaries in React components
4. **Async/Await**   - Prefer async/await over raw promises
   - Proper error handling in async functions
   - Use Promise.all for parallel operations
5. **React Specific**   - Functional components with TypeScript
   - Proper use of hooks
   - Consistent prop typing
   - Server Components by default in Next.js App Router

### [​](https://formbricks.com/docs/development/standards/technical/language-specific-conventions\#code-formatting)  Code Formatting

We use Prettier with specific configurations:

Copy

```
{
bracketSpacing: true,
bracketSameLine: true,
singleQuote: false,
jsxSingleQuote: false,
trailingComma: "es5",
semi: true,
printWidth: 110,
arrowParens: "always"
}
```

## [​](https://formbricks.com/docs/development/standards/technical/language-specific-conventions\#swift-ios-sdk)  Swift (iOS SDK)

Our iOS SDK follows Swift best practices.

### [​](https://formbricks.com/docs/development/standards/technical/language-specific-conventions\#swift-configuration)  Swift Configuration

The iOS SDK requires the following:

- **Swift Version**: 5.7+
- **Platform**: iOS 16.6+
- **Package Manager**: Swift Package Manager and CocoaPods support
- **ARC**: Automatic Reference Counting enabled

**Package.swift Configuration:**

Copy

```
// swift-tools-version:5.7
platforms: [\
  .iOS(.v16)\
],
```

**CocoaPods Configuration:**

Copy

```
s.platform = :ios, "16.6"
s.swift_version = "5.7"
s.requires_arc = true
```

### [​](https://formbricks.com/docs/development/standards/technical/language-specific-conventions\#key-conventions-2)  Key Conventions

1. **Access Control Strategy**   - `public`: SDK public API surface only
   - `internal`: Internal SDK communication and shared components
   - `private`: Implementation details within specific classes
   - Strategic use of `private(set)` for read-only public properties
2. **Architecture Patterns**   - **Singleton Pattern**: Main SDK class (`Formbricks`) with static interface
   - **Manager Pattern**: Specialized managers (`UserManager`, `SurveyManager`, `PresentSurveyManager`)
   - **Builder Pattern**: Configuration objects (`FormbricksConfig.Builder`)
   - **Protocol-Oriented Programming**: Service protocols for dependency injection and testing
3. **Error Handling**   - Custom error enums with descriptive cases (`FormbricksSDKErrorType`)
   - Error types conform to `LocalizedError` protocol
   - Structured error propagation with completion handlers
   - Defensive programming with guard statements and early returns
4. **Naming Conventions**   - Classes: PascalCase (`FormbricksConfig`, `UserManager`)
   - Properties/Methods: camelCase (`environmentId`, `setUserId`)
   - Constants: camelCase with descriptive names
   - Protocol names: Descriptive with “Protocol” suffix (`FormbricksServiceProtocol`)
5. **Code Organization**   - `// MARK:` comments for logical section separation
   - Extensions for related functionality grouping
   - Consistent file structure with models, managers, networking, and views
6. **Model Design**   - Prefer `struct` for data models and value types
   - Use `class` for reference types and managers
   - Implement `Codable` for JSON serialization/deserialization
   - Immutable properties where possible (`let` over `var`)
7. **Security & Validation**   - HTTPS enforcement for all network requests
   - URL validation before network operations
   - Input validation with descriptive error messages
   - Secure data handling practices
8. **Asynchronous Operations**   - `OperationQueue` for network operations
   - Completion handlers for async operations
   - Network connectivity checking with `NWPathMonitor`
   - Thread-safe operations with proper queue management

### [​](https://formbricks.com/docs/development/standards/technical/language-specific-conventions\#code-formatting-2)  Code Formatting

We follow standard Swift formatting conventions:**Key Formatting Rules:**

Copy

```
// Class definitions
@objc(Formbricks) public class Formbricks: NSObject {

// Property declarations with access control
static internal var isInitialized: Bool = false
private let userManager: UserManager

// Method signatures with clear parameter labels
@objc public static func setup(with config: FormbricksConfig, force: Bool = false)

// Guard statements for early returns
guard !isInitialized else {
    let error = FormbricksSDKError(type: .sdkIsAlreadyInitialized)
    Formbricks.logger?.error(error.message)
    return
}

// Enum cases with descriptive names
public enum FormbricksSDKErrorType: Int {
    case sdkIsNotInitialized
    case invalidAppUrl
    case networkError
}
```

## [​](https://formbricks.com/docs/development/standards/technical/language-specific-conventions\#kotlin-android-sdk)  Kotlin (Android SDK)

Our Android SDK codebase with Kotlin follows modern Android development practices and Kotlin conventions.

### [​](https://formbricks.com/docs/development/standards/technical/language-specific-conventions\#key-conventions-3)  Key Conventions

1. **Package Structure**   - Logical grouping by functionality (api, model, network, manager, webview)
   - Clear separation of concerns across packages
2. **Kotlin Language Features**   - **Object singletons** for stateless utilities and managers (`Formbricks`, `Logger`, `SDKError`)
   - **Data classes** for models with automatic equals/hashCode/toString (`Survey`, `User`)
   - **Sealed classes** for representing restricted hierarchies
   - **Extension functions** for utility methods (`Guard.kt`, `DateExtensions.kt`)
   - **Coroutines** for asynchronous operations with proper context switching
3. **Error Handling**   - Centralized error definitions in `SDKError` object
   - Use of `Result<T>` type for API responses
   - Proper exception propagation with meaningful error messages
   - Consistent error logging through centralized `Logger`
4. **Android-Specific Patterns**   - `@Keep` annotations for ProGuard/R8 compatibility on public APIs
   - Proper lifecycle management in fragments and view models
   - Use of `FragmentManager` for UI components
   - Network security configuration for HTTPS enforcement
5. **Async/Await Pattern**   - Prefer coroutines with `suspend` functions over callbacks
   - Use `withContext(Dispatchers.IO)` for network operations
   - Implement retry logic with `delay()` for robust API calls
   - Proper error handling in async functions
6. **API and Network Layer**   - Retrofit for HTTP client with Gson converter
   - OkHttp interceptors for logging and security
   - Proper timeout configurations
   - Result-based API responses with retry mechanisms

### [​](https://formbricks.com/docs/development/standards/technical/language-specific-conventions\#code-formatting-3)  Code Formatting

We use Android Studio’s default Kotlin formatting

### [​](https://formbricks.com/docs/development/standards/technical/language-specific-conventions\#data-modeling)  Data Modeling

1. **Serialization**   - Kotlinx Serialization for modern JSON handling
   - Gson annotations for backward compatibility: `@SerializedName`
   - Consistent nullable and non-nullable field declarations
2. **Data Classes**   - Immutable data structures where possible
   - Proper use of nullable types (`String?`)
   - Clear property naming and documentation

Was this page helpful?

YesNo

[Error Handling](https://formbricks.com/docs/development/standards/practices/error-handling) [Framework Usage](https://formbricks.com/docs/development/standards/technical/framework-usage)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.