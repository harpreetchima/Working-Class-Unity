---
url: "https://formbricks.com/docs/development/standards/practices/error-handling"
title: "Error Handling - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/development/standards/practices/error-handling#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Development Practices

Error Handling

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

  - [Code Formatting](https://formbricks.com/docs/development/standards/practices/code-formatting)
  - [Documentation](https://formbricks.com/docs/development/standards/practices/documentation)
  - [Error Handling](https://formbricks.com/docs/development/standards/practices/error-handling)
- Technical Standards

- Quality Assurance


##### Contributions

- [Contribute to Formbricks](https://formbricks.com/docs/development/contribution/contribution)

##### Guides

- Auth & Provision


##### Support

- [Troubleshooting](https://formbricks.com/docs/development/support/troubleshooting)

On this page

- [Overview](https://formbricks.com/docs/development/standards/practices/error-handling#overview)
- [Core Principles](https://formbricks.com/docs/development/standards/practices/error-handling#core-principles)
- [Standard Error Types](https://formbricks.com/docs/development/standards/practices/error-handling#standard-error-types)
- [Error Handling Patterns](https://formbricks.com/docs/development/standards/practices/error-handling#error-handling-patterns)
- [API Error Handling](https://formbricks.com/docs/development/standards/practices/error-handling#api-error-handling)
- [Client-Side Error Handling](https://formbricks.com/docs/development/standards/practices/error-handling#client-side-error-handling)
- [Best Practices](https://formbricks.com/docs/development/standards/practices/error-handling#best-practices)
- [Testing Error Scenarios](https://formbricks.com/docs/development/standards/practices/error-handling#testing-error-scenarios)

Development Practices

# Error Handling

Standards for handling errors across the Formbricks codebase

## [​](https://formbricks.com/docs/development/standards/practices/error-handling\#overview)  Overview

At Formbricks, we follow consistent error handling patterns to ensure reliability, debuggability, and maintainability across our codebase. This document outlines our standard approaches to error handling.

## [​](https://formbricks.com/docs/development/standards/practices/error-handling\#core-principles)  Core Principles

1. **Type Safety**: Use typed errors and results
2. **Meaningful Messages**: Provide clear, actionable error messages
3. **Proper Propagation**: Handle or propagate errors appropriately
4. **Logging**: Ensure errors are properly logged for debugging
5. **Recovery**: Implement graceful fallbacks where possible

## [​](https://formbricks.com/docs/development/standards/practices/error-handling\#standard-error-types)  Standard Error Types

We maintain a set of standardized error types for different scenarios:

Copy

```
export interface ApiErrorResponse {
code:
| "not_found"
| "gone"
| "bad_request"
| "internal_server_error"
| "unauthorized"
| "method_not_allowed"
| "not_authenticated"
| "forbidden"
| "network_error";
message: string;
status: number;
url: URL;
details?: Record<string, string | string[] | number | number[] | boolean | boolean[]>;
responseMessage?: string;
}
```

## [​](https://formbricks.com/docs/development/standards/practices/error-handling\#error-handling-patterns)  Error Handling Patterns

### [​](https://formbricks.com/docs/development/standards/practices/error-handling\#api-error-handling)  API Error Handling

For API endpoints:

Copy

```
export const GET = async (request: Request) => {
try {
const authentication = await authenticateRequest(request);
if (!authentication) return responses.notAuthenticatedResponse();
const data = await fetchData(authentication.environmentId!);
return responses.successResponse(data);
} catch (error) {
if (error instanceof DatabaseError) {
return responses.badRequestResponse(error.message);
}
throw error;
}
};
```

### [​](https://formbricks.com/docs/development/standards/practices/error-handling\#client-side-error-handling)  Client-Side Error Handling

For client-side operations:

Copy

```
const handleOperation = async () => {
const result = await performAction();
if (!result.ok) {
logger.error(`Operation failed: ${result.error.message}`);
toast.error("Operation failed. Please try again.");
return;
}
// Process successful result
processResult(result.data);
};
```

## [​](https://formbricks.com/docs/development/standards/practices/error-handling\#best-practices)  Best Practices

1. **Never Swallow Errors**   - Always handle or propagate errors
   - Log errors appropriately for debugging
   - Use error boundaries in React components
2. **Type Safety**   - Use typed error responses
   - Leverage TypeScript for compile-time error checking
   - Define clear error interfaces
3. **Error Messages**   - Include relevant context in error messages
   - Make messages actionable for developers
   - Use consistent error formatting
4. **Error Recovery**   - Implement fallback behaviors where appropriate
   - Gracefully degrade functionality when possible
   - Provide user feedback for recoverable errors
5. **Documentation**   - Document expected errors in function JSDoc
   - Include error handling in code examples
   - Keep error handling documentation up to date

## [​](https://formbricks.com/docs/development/standards/practices/error-handling\#testing-error-scenarios)  Testing Error Scenarios

Always include error case testing:

Copy

```
describe("fetchEnvironmentState()", () => {
test("returns err(...) on network error", async () => {
const mockNetworkError = {
code: "network_error",
message: "Timeout",
responseMessage: "Network fail",
};
const result = await fetchEnvironmentState();
expect(result.ok).toBe(false);
if (!result.ok) {
expect(result.error.code).toBe(mockNetworkError.code);
expect(result.error.message).toBe(mockNetworkError.message);
}
});
});
```

These standards ensure consistent, reliable error handling across the Formbricks codebase while maintaining good developer experience and system reliability.

Was this page helpful?

YesNo

[Documentation](https://formbricks.com/docs/development/standards/practices/documentation) [Language-Specific](https://formbricks.com/docs/development/standards/technical/language-specific-conventions)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.