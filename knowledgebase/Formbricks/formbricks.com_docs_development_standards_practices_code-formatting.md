---
url: "https://formbricks.com/docs/development/standards/practices/code-formatting"
title: "Code Formatting - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/development/standards/practices/code-formatting#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Development Practices

Code Formatting

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

- [Core Configuration](https://formbricks.com/docs/development/standards/practices/code-formatting#core-configuration)
- [Prettier Config](https://formbricks.com/docs/development/standards/practices/code-formatting#prettier-config)
- [Import Order](https://formbricks.com/docs/development/standards/practices/code-formatting#import-order)
- [TypeScript Config](https://formbricks.com/docs/development/standards/practices/code-formatting#typescript-config)
- [JSDoc Comments](https://formbricks.com/docs/development/standards/practices/code-formatting#jsdoc-comments)
- [Error Handling](https://formbricks.com/docs/development/standards/practices/code-formatting#error-handling)
- [Enforcement Tools](https://formbricks.com/docs/development/standards/practices/code-formatting#enforcement-tools)
- [Pre-commit Hooks](https://formbricks.com/docs/development/standards/practices/code-formatting#pre-commit-hooks)
- [ESLint Configuration](https://formbricks.com/docs/development/standards/practices/code-formatting#eslint-configuration)
- [Continuous Integration](https://formbricks.com/docs/development/standards/practices/code-formatting#continuous-integration)
- [VS Code Integration](https://formbricks.com/docs/development/standards/practices/code-formatting#vs-code-integration)
- [Required Extensions](https://formbricks.com/docs/development/standards/practices/code-formatting#required-extensions)
- [Recommended Settings](https://formbricks.com/docs/development/standards/practices/code-formatting#recommended-settings)
- [Best Practices](https://formbricks.com/docs/development/standards/practices/code-formatting#best-practices)

Development Practices

# Code Formatting

Standards for consistent code formatting across the Formbricks project

## [​](https://formbricks.com/docs/development/standards/practices/code-formatting\#core-configuration)  Core Configuration

### [​](https://formbricks.com/docs/development/standards/practices/code-formatting\#prettier-config)  Prettier Config

Formbricks uses a standardized Prettier configuration defined in `@formbricks/config-prettier`:

Copy

```
module.exports = {
  bracketSpacing: true,
  bracketSameLine: true,
  singleQuote: false,
  jsxSingleQuote: false,
  trailingComma: "es5",
  semi: true,
  printWidth: 110,
  arrowParens: "always",
  importOrder: [\
    // Mocks must be at the top as they contain vi.mock calls\
    "(.*)/__mocks__/(.*)",\
    "server-only",\
    "<THIRD_PARTY_MODULES>",\
    "^@formbricks/(.*)$",\
    "^~/(.*)$",\
    "^[./]",\
  ],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
};
```

Key configurations:

- 110 characters line width
- Double quotes for strings
- ES5 trailing commas
- Always use parentheses for arrow functions
- Strict import ordering

### [​](https://formbricks.com/docs/development/standards/practices/code-formatting\#import-order)  Import Order

All imports follow a strict ordering:

1. Mocks (for testing)
2. Server-only imports
3. Third-party modules
4. Internal `@formbricks/*` modules
5. Local aliases (\`~/\*)
6. Relative imports

### [​](https://formbricks.com/docs/development/standards/practices/code-formatting\#typescript-config)  TypeScript Config

- Strict TypeScript checking enabled
- Consistent use of `tsconfig.json` extending from `@formbricks/config-typescript`
- Example configuration:

Copy

```
{
  "compilerOptions": {
    "allowImportingTsExtensions": true,
    "isolatedModules": true,
    "noEmit": true,
    "resolveJsonModule": true,
    "strict": true
  },
  "extends": "@formbricks/config-typescript/js-library.json",
  "include": ["src", "package.json"]
}
```

### [​](https://formbricks.com/docs/development/standards/practices/code-formatting\#jsdoc-comments)  JSDoc Comments

Required for public APIs and complex functions:

Copy

```
/**
 * Creates a new user
 * @param {string} name - User's name
 * @returns {Promise<User>} The created user object
 */
function createUser(name: string): Promise<User> {
  // implementation
}
```

### [​](https://formbricks.com/docs/development/standards/practices/code-formatting\#error-handling)  Error Handling

Standardized error handling using the ErrorHandler class:

Copy

```
export class ErrorHandler {
  private static instance: ErrorHandler | null;
  private handleError: (error: unknown) => void;
  public customized = false;
  public static initialized = false;

  private constructor(errorHandler?: (error: unknown) => void) {
    if (errorHandler) {
      this.handleError = errorHandler;
      this.customized = true;
    } else {
      this.handleError = (error) => {
        Logger.getInstance().error(JSON.stringify(error));
      };
    }
  }

  // ... additional methods
}
```

## [​](https://formbricks.com/docs/development/standards/practices/code-formatting\#enforcement-tools)  Enforcement Tools

### [​](https://formbricks.com/docs/development/standards/practices/code-formatting\#pre-commit-hooks)  Pre-commit Hooks

Using Husky and lint-staged for automated checks:

Copy

```
{
  "lint-staged": {
    "(apps|packages)/**/*.{js,ts,jsx,tsx}": [\
      "prettier --write",\
      "eslint --fix"\
    ],
    "*.json": [\
      "prettier --write"\
    ],
    "packages/database/schema.prisma": [\
      "prisma format"\
    ]
  }
}
```

### [​](https://formbricks.com/docs/development/standards/practices/code-formatting\#eslint-configuration)  ESLint Configuration

Each package extends from `@formbricks/eslint-config` with specific presets:

- `library.js` for packages
- `next.js` for Next.js applications
- `react.js` for React applications

### [​](https://formbricks.com/docs/development/standards/practices/code-formatting\#continuous-integration)  Continuous Integration

- Automated formatting checks in CI/CD pipeline
- SonarCloud integration for code quality analysis
- Coverage requirements for tests

## [​](https://formbricks.com/docs/development/standards/practices/code-formatting\#vs-code-integration)  VS Code Integration

### [​](https://formbricks.com/docs/development/standards/practices/code-formatting\#required-extensions)  Required Extensions

- `esbenp.prettier-vscode` \- Prettier formatting
- `dbaeumer.vscode-eslint` \- ESLint integration
- `bradlc.vscode-tailwindcss` \- Tailwind CSS support

### [​](https://formbricks.com/docs/development/standards/practices/code-formatting\#recommended-settings)  Recommended Settings

Copy

```
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

## [​](https://formbricks.com/docs/development/standards/practices/code-formatting\#best-practices)  Best Practices

1. **Consistent Formatting**   - Always run `pnpm format` before committing
   - Use VS Code’s format on save feature
   - Follow the established import order
2. **Type Safety**   - Enable strict TypeScript checks
   - Use explicit type annotations when necessary
   - Avoid using `any` type
3. **Code Organization**   - Keep files focused and modular
   - Group related functionality
   - Use clear, descriptive names
4. **Documentation**   - Document complex logic
   - Use JSDoc for public APIs
   - Keep comments current with code changes

These standards ensure consistency across the Formbricks codebase while maintaining high code quality and developer productivity.

Was this page helpful?

YesNo

[Modules & Components](https://formbricks.com/docs/development/standards/organization/module-component-structure) [Documentation](https://formbricks.com/docs/development/standards/practices/documentation)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.