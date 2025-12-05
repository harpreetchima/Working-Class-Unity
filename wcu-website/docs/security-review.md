# Security Review Report

**Date:** 2025-01-XX  
**Application:** WCU Website (Nuxt 4)  
**Reviewer:** Security Audit

## Executive Summary

This document outlines the security review performed on the WCU Website application. The review covered multiple security domains including dependency vulnerabilities, configuration security, external link security, Content Security Policy, Docker security, and best practices.

## Security Reviews Performed

### 1. Dependency Vulnerability Assessment ✅

**Review:** Checked for known vulnerabilities in npm dependencies using `npm audit`.

**Result:** No moderate or high severity vulnerabilities found in the dependency tree.

**Recommendation:** Continue to run `npm audit` regularly and update dependencies as security patches are released.

---

### 2. External Link Security ✅

**Review:** Audited all external links (`target="_blank"`) to ensure proper security attributes.

**Issues Found:**
- One external link in `app/pages/join.vue` (line 252) was missing `rel="noopener noreferrer"` attributes.

**Fix Applied:**
- Added `rel="noopener noreferrer"` to the Cal.com link in the FAQ section.

**Status:** ✅ Fixed

**Why This Matters:**
- `noopener` prevents the new page from accessing `window.opener`, protecting against tabnabbing attacks.
- `noreferrer` prevents the referrer header from being sent, improving privacy.

**Other Links Reviewed:**
- All other external links in the codebase already had proper security attributes.
- `EventCard.vue` component properly handles external links with security attributes.
- `CampaignCard.vue` component properly handles external links.

---

### 3. Environment Variables and Secrets Management ✅

**Review:** Checked for hardcoded secrets, API keys, and sensitive configuration values.

**Issues Found:**
- Formbricks environment ID was hardcoded in `app/plugins/formbricks.client.ts`.
- Formbricks app URL was hardcoded.

**Fix Applied:**
- Moved Formbricks configuration to `runtimeConfig.public` in `nuxt.config.ts`.
- Configuration now uses environment variables:
  - `NUXT_PUBLIC_FORMBRICKS_ENVIRONMENT_ID`
  - `NUXT_PUBLIC_FORMBRICKS_APP_URL`
- Updated `formbricks.client.ts` to use `useRuntimeConfig()`.

**Status:** ✅ Fixed

**Note:** These values are in `public` because Formbricks SDK requires client-side access. While not secret, using environment variables allows for environment-specific configuration (dev/staging/prod).

---

### 4. Content Security Policy (CSP) ✅

**Review:** Checked for CSP headers configuration.

**Issues Found:**
- No Content Security Policy headers were configured.

**Fix Applied:**
- Added comprehensive CSP headers via Nitro `routeRules` in `nuxt.config.ts`.
- CSP policy includes:
  - `default-src 'self'` - Default to same-origin only
  - `script-src` - Allows Cal.com and Formbricks scripts
  - `style-src` - Allows inline styles and Google Fonts
  - `font-src` - Allows fonts from self, data URIs, and Google Fonts
  - `img-src` - Allows images from self, data URIs, blobs, and HTTPS
  - `connect-src` - Allows API connections to Cal.com and Formbricks
  - `frame-src` - Allows Cal.com iframes
  - `object-src 'none'` - Blocks plugins
  - `upgrade-insecure-requests` - Forces HTTPS

**Status:** ✅ Implemented

**Recommendation:** Monitor CSP violations in production and adjust policy as needed. Consider using `report-uri` for CSP violation reporting.

---

### 5. Security Headers ✅

**Review:** Checked for standard security headers.

**Issues Found:**
- No security headers were configured.

**Fix Applied:**
- Added the following security headers via Nitro `routeRules`:
  - `X-Frame-Options: SAMEORIGIN` - Prevents clickjacking
  - `X-Content-Type-Options: nosniff` - Prevents MIME type sniffing
  - `X-XSS-Protection: 1; mode=block` - Legacy XSS protection
  - `Referrer-Policy: strict-origin-when-cross-origin` - Controls referrer information
  - `Permissions-Policy: geolocation=(), microphone=(), camera=()` - Restricts browser features

**Status:** ✅ Implemented

---

### 6. Docker Security ✅

**Review:** Analyzed Dockerfile for security best practices.

**Issues Found:**
- Container was running as root user (security risk).

**Fix Applied:**
- Created non-root user (`nuxt`) with UID 1001.
- Changed ownership of `/app` directory to non-root user.
- Container now runs as `USER nuxt` instead of root.

**Status:** ✅ Fixed

**Additional Security Measures:**
- Using Alpine Linux base image (minimal attack surface).
- Multi-stage build to reduce final image size.
- Only copying necessary files (`.output` directory).

---

### 7. XSS Prevention Review ✅

**Review:** Checked for unsafe HTML rendering and user input handling.

**Findings:**
- ✅ No `v-html` directives found (except safe `innerHTML = ''` in `useCalEmbed.ts` for clearing content).
- ✅ Vue automatically escapes template interpolations.
- ✅ No user-provided content is rendered as HTML.
- ✅ All data in `events.ts` and `campaigns.ts` is static and controlled.

**Status:** ✅ No issues found

**Note:** The application does not currently accept user input that would be rendered. If user-generated content is added in the future, ensure proper sanitization.

---

### 8. URL Validation Review ✅

**Review:** Checked for URL injection vulnerabilities.

**Findings:**
- ✅ External links in data files (`events.ts`, `campaigns.ts`) are static and controlled.
- ✅ `EventCard.vue` component properly detects external links and adds security attributes.
- ✅ No user-provided URLs are used without validation.

**Status:** ✅ No issues found

---

### 9. Third-Party Script Security ✅

**Review:** Analyzed third-party script integrations (Cal.com, Formbricks).

**Findings:**
- ✅ Cal.com embed uses dedicated composable (`useCalEmbed.ts`) with proper cleanup.
- ✅ Formbricks uses client-side plugin with proper initialization.
- ✅ Both scripts are loaded from trusted domains (app.cal.com, form.workingclassunity.com).
- ✅ CSP policy allows these specific domains.

**Status:** ✅ Properly configured

**Recommendations:**
- Monitor third-party script updates for security advisories.
- Consider using Subresource Integrity (SRI) if available for third-party scripts.

---

### 10. i18n Security Review ✅

**Review:** Checked internationalization implementation for injection risks.

**Findings:**
- ✅ Translation files are JSON (no code execution).
- ✅ Translations are loaded from controlled files (`i18n/locales/*.json`).
- ✅ No user-provided translations are accepted.
- ✅ Vue's template system automatically escapes i18n values.

**Status:** ✅ No issues found

---

### 11. SSR/Hydration Security ✅

**Review:** Reviewed server-side rendering security considerations.

**Findings:**
- ✅ No sensitive data exposed in SSR payloads.
- ✅ Browser-only APIs properly wrapped in `<ClientOnly>`.
- ✅ No hydration mismatches that could expose sensitive data.

**Status:** ✅ No issues found

---

## Security Best Practices Implemented

1. ✅ **External Links:** All external links use `rel="noopener noreferrer"`.
2. ✅ **Security Headers:** Comprehensive security headers configured.
3. ✅ **CSP:** Content Security Policy implemented.
4. ✅ **Docker:** Non-root user in container.
5. ✅ **Environment Variables:** Sensitive config moved to runtime config.
6. ✅ **Dependency Management:** Regular audits recommended.

## Recommendations for Future

### High Priority
1. **HTTPS Enforcement:** Ensure production deployment uses HTTPS (CSP already includes `upgrade-insecure-requests`).
2. **Environment Variables:** Document required environment variables in deployment guide.
3. **CSP Monitoring:** Set up CSP violation reporting in production.

### Medium Priority
1. **Subresource Integrity (SRI):** Add SRI hashes for third-party scripts if supported.
2. **Rate Limiting:** Consider adding rate limiting if API endpoints are added.
3. **Security.txt:** Add `/security.txt` file for security researchers.

### Low Priority
1. **Security Headers Testing:** Use tools like [SecurityHeaders.com](https://securityheaders.com) to verify headers.
2. **Dependency Updates:** Set up automated dependency update checks (e.g., Dependabot).
3. **Security Audit Automation:** Consider adding security scanning to CI/CD pipeline.

## Testing Recommendations

1. **Manual Testing:**
   - Verify all external links open with proper security attributes.
   - Test CSP in browser DevTools (Console should show no violations).
   - Verify security headers using browser DevTools Network tab.

2. **Automated Testing:**
   - Add security header tests to CI/CD.
   - Use tools like `npm audit` in CI pipeline.
   - Consider using OWASP ZAP or similar for automated security scanning.

## Conclusion

The security review identified and fixed several security issues:
- ✅ Fixed missing `rel` attributes on external links
- ✅ Moved hardcoded configuration to environment variables
- ✅ Implemented Content Security Policy
- ✅ Added comprehensive security headers
- ✅ Improved Docker security with non-root user

The application now follows security best practices for a Nuxt 4 SSR application. Regular security audits and dependency updates are recommended to maintain security posture.

---

## Appendix: Environment Variables

The following environment variables can be configured:

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `NUXT_PUBLIC_FORMBRICKS_ENVIRONMENT_ID` | Formbricks environment ID | `cminsehli0009o8015hjuzkuz` | No |
| `NUXT_PUBLIC_FORMBRICKS_APP_URL` | Formbricks app URL | `https://form.workingclassunity.com` | No |

**Note:** These are public variables (exposed to client) as they're needed by the Formbricks SDK.
