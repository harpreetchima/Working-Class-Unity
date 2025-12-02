---
url: "https://formbricks.com/docs/development/standards/qa/testing-methodology"
title: "Testing Methodology - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/development/standards/qa/testing-methodology#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Quality Assurance

Testing Methodology

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

- Quality Assurance

  - [Code Reviews](https://formbricks.com/docs/development/standards/qa/code-reviews)
  - [Testing Methodology](https://formbricks.com/docs/development/standards/qa/testing-methodology)

##### Contributions

- [Contribute to Formbricks](https://formbricks.com/docs/development/contribution/contribution)

##### Guides

- Auth & Provision


##### Support

- [Troubleshooting](https://formbricks.com/docs/development/support/troubleshooting)

On this page

- [Overview](https://formbricks.com/docs/development/standards/qa/testing-methodology#overview)
- [Testing Structure](https://formbricks.com/docs/development/standards/qa/testing-methodology#testing-structure)
- [Unit Testing with Vitest](https://formbricks.com/docs/development/standards/qa/testing-methodology#unit-testing-with-vitest)
- [End-to-End Testing with Playwright](https://formbricks.com/docs/development/standards/qa/testing-methodology#end-to-end-testing-with-playwright)
- [Testing Setup](https://formbricks.com/docs/development/standards/qa/testing-methodology#testing-setup)
- [Configuration](https://formbricks.com/docs/development/standards/qa/testing-methodology#configuration)
- [Test Utilities](https://formbricks.com/docs/development/standards/qa/testing-methodology#test-utilities)
- [Best Practices](https://formbricks.com/docs/development/standards/qa/testing-methodology#best-practices)
- [Quality Assurance Process](https://formbricks.com/docs/development/standards/qa/testing-methodology#quality-assurance-process)

Quality Assurance

# Testing Methodology

How we test Formbricks to ensure reliability, performance, and high-quality code.

## [​](https://formbricks.com/docs/development/standards/qa/testing-methodology\#overview)  Overview

At Formbricks, we maintain a rigorous testing strategy to ensure high-quality code and reliable functionality. Our testing approach is standardized and integrated into our development workflow.

## [​](https://formbricks.com/docs/development/standards/qa/testing-methodology\#testing-structure)  Testing Structure

### [​](https://formbricks.com/docs/development/standards/qa/testing-methodology\#unit-testing-with-vitest)  Unit Testing with Vitest

We use Vitest as our primary testing framework. All unit tests follow these conventions:

1. **File Location and Naming**   - Test files are co-located with the source files they test
   - Test files use the `.test.ts` extension (e.g., `utils.test.ts` tests `utils.ts`)
2. **Test Organization**






Copy











```
import { describe, expect, test } from "vitest";

describe("ComponentName or FeatureName", () => {
     describe("functionName or scenario", () => {
       // We use the `test` function instead of `it` throught our test suite
       test("should describe expected behavior", () => {
         // test implementation
       });
     });
});
```

3. **Coverage Requirements**   - Minimum 85% code coverage requirement
   - Coverage is tracked using V8 provider
   - Coverage reports include:
     - Text summaries
     - HTML reports
     - LCOV reports

### [​](https://formbricks.com/docs/development/standards/qa/testing-methodology\#end-to-end-testing-with-playwright)  End-to-End Testing with Playwright

E2E tests are located in `apps/web/playwright/` and focus on critical user workflows.

## [​](https://formbricks.com/docs/development/standards/qa/testing-methodology\#testing-setup)  Testing Setup

### [​](https://formbricks.com/docs/development/standards/qa/testing-methodology\#configuration)  Configuration

Our Vitest configuration (`vite.config.ts`) includes:

Copy

```
test: {
exclude: ['playwright/', 'node_modules/'],
setupFiles: ['../../packages/lib/vitestSetup.ts'],
coverage: {
provider: 'v8',
reporter: ['text', 'html', 'lcov'],
reportsDirectory: './coverage',
},
}
```

### [​](https://formbricks.com/docs/development/standards/qa/testing-methodology\#test-utilities)  Test Utilities

Common test utilities are available in `vitestSetup.ts`:

- Mock implementations for commonly used functions
- Test lifecycle hooks (beforeEach, afterEach)
- Validation test helpers

## [​](https://formbricks.com/docs/development/standards/qa/testing-methodology\#best-practices)  Best Practices

1. **Test Independence**






Copy











```
beforeEach(() => {
     vi.resetModules();
     vi.resetAllMocks();
});

afterEach(() => {
     vi.clearAllMocks();
});
```

2. **Mocking**

   - Use Vitest’s built-in mocking utilities
   - Mock external dependencies and services
   - Example:

Copy

```
vi.mock("@formbricks/database", () => ({
  prisma: {
    user: {
      create: vi.fn(),
      findUnique: vi.fn(),
    },
  },
}));
```

3. **Assertions**

   - Write clear, specific assertions
   - Test both success and error cases
   - Example:

Copy

```
expect(result.ok).toBe(true);
expect(result.data).toEqual(expectedData);
expect(async () => await invalidCall()).rejects.toThrow(ValidationError);
```

## [​](https://formbricks.com/docs/development/standards/qa/testing-methodology\#quality-assurance-process)  Quality Assurance Process

1. **Continuous Integration**   - Automated test suite execution on pull requests
   - Coverage reports generation
   - Test results reporting
2. **New Features**   - Must include corresponding unit tests
   - Must maintain or improve coverage metrics
   - Must include relevant E2E tests for user-facing features

Was this page helpful?

YesNo

[Code Reviews](https://formbricks.com/docs/development/standards/qa/code-reviews) [Contribute to Formbricks](https://formbricks.com/docs/development/contribution/contribution)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.