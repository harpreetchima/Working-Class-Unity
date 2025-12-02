---
url: "https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/google-tag-manager"
title: "Google Tag Manager - Documentation - Formbricks"
---

[Skip to main content](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/google-tag-manager#content-area)

[Documentation - Formbricks home page![light logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-light.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91d574602867e4341e348d0a6b7c1ca3)![dark logo](https://mintcdn.com/formbricks/FxVXbfRFRc8kmKdj/images/logo-dark.svg?fit=max&auto=format&n=FxVXbfRFRc8kmKdj&q=85&s=91aaa3449f8c84a52b32c02e207d48bf)](https://formbricks.com/docs)

Search...

Ctrl K

- [Support](https://github.com/formbricks/formbricks/discussions)
- [Go to app](https://app.formbricks.com/)
- [Go to app](https://app.formbricks.com/)

Search...

Navigation

Website & App Surveys

Google Tag Manager

[Overview](https://formbricks.com/docs/overview/introduction) [XM & Surveys](https://formbricks.com/docs/xm-and-surveys/overview) [Self Hosting](https://formbricks.com/docs/self-hosting/overview) [Development](https://formbricks.com/docs/development/overview) [API v1 Reference](https://formbricks.com/docs/api-reference/rest-api) [API v2 Reference (Beta)](https://formbricks.com/docs/api-v2-reference/introduction)

##### XM & Surveys

- [XM & Surveys](https://formbricks.com/docs/xm-and-surveys/overview)

##### Surveys

- General Features

- Link Surveys

- Website & App Surveys

  - [Quickstart](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/quickstart)
  - [Framework Guides](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/framework-guides)
  - [Google Tag Manager](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/google-tag-manager)
  - Features
- Question Types


##### Platform Features

- Integrations

- User Management

- [Styling Theme](https://formbricks.com/docs/xm-and-surveys/core-features/styling-theme)
- [Email Branding](https://formbricks.com/docs/xm-and-surveys/core-features/email-customization)
- [Test Environment](https://formbricks.com/docs/xm-and-surveys/core-features/test-environment)

##### XM

- Best Practices


On this page

- [Prerequisites](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/google-tag-manager#prerequisites)
- [Basic Setup](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/google-tag-manager#basic-setup)
- [User Identification](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/google-tag-manager#user-identification)
- [Track Custom Events](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/google-tag-manager#track-custom-events)
- [Troubleshooting](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/google-tag-manager#troubleshooting)
- [Need Help?](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/google-tag-manager#need-help)

Website & App Surveys

# Google Tag Manager

Deploy Formbricks surveys through GTM without modifying your website code.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/google-tag-manager\#prerequisites)  Prerequisites

- [Google Tag Manager](https://tagmanager.google.com/) installed on your website
- Your Formbricks **Environment ID** (Settings > Configuration > Website & App Connection)
- Your **App URL**: `https://app.formbricks.com` (or your self-hosted URL)

Use PUBLIC\_URL for multi-domain setups, WEBAPP\_URL for single-domain setups.

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/google-tag-manager\#basic-setup)  Basic Setup

1

Create a Custom HTML tag in GTM

1. Create a new tag with preferred name e.g. “Formbricks Intercept Surveys”
2. Tag Type: Custom HTML
3. Paste the code from Step 2. Make sure to replace `<your-environment-id>` and if you self-host, replace `<your-app-url>`

2

Add initialization script

Copy

```
<script type="text/javascript">
!function(){
    var appUrl = "https://app.formbricks.com"; // REPLACE ONLY IF YOUR SELF-HOST
    var environmentId = "<your-environment-id>"; // REPLACE
    var t=document.createElement("script");
    t.type="text/javascript";
    t.async=!0;
    t.src=appUrl+"/js/formbricks.umd.cjs";
    t.onload=function(){
        window.formbricks && window.formbricks.setup({
            environmentId: environmentId,
            appUrl: appUrl
        });
    };
    var e=document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(t,e);
}();
</script>
```

![Add GTM Custom HTML tag](https://mintcdn.com/formbricks/gz9Y_q0cHdgc2i5-/images/xm-and-surveys/surveys/website-app-surveys/google-tag-manager/create-a-tag.webp?fit=max&auto=format&n=gz9Y_q0cHdgc2i5-&q=85&s=cfa8b579538b26016fedd29ecdaf44f5)

3

Set trigger

1. Trigger: **All Pages** \- Page View (default) or use case specific event
2. Save and publish
![Add a trigger](https://mintcdn.com/formbricks/gz9Y_q0cHdgc2i5-/images/xm-and-surveys/surveys/website-app-surveys/google-tag-manager/create-a-trigger.webp?fit=max&auto=format&n=gz9Y_q0cHdgc2i5-&q=85&s=071c28b6a6c5b3d247cc6effddee3e2b)

4

Test

1. Use GTM Preview mode
2. Verify the tag fires
3. Add `?formbricksDebug=true` to the URL to see test logs in browser console (see [Debugging Mode](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/framework-guides#debugging-formbricks-integration) for more details)

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/google-tag-manager\#user-identification)  User Identification

Identify users to enable targeting and attributes. Learn more about [user identification](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/user-identification).

User identification is part of the Formbricks [Enterprise Edition](https://formbricks.com/docs/self-hosting/advanced/license).

1

Create GTM variables

1. Go to Variables on GTM dashboard
2. Create new User-defined variable
3. Name it (e.g., “User ID”)
4. Variable Type: Data Layer Variable
5. Data Layer Variable: “userId”
6. Save and publish
7. Repeat for attributes you want to track e.g. “userEmail” and “userPlan” (optional)![Create a variable](https://mintcdn.com/formbricks/gz9Y_q0cHdgc2i5-/images/xm-and-surveys/surveys/website-app-surveys/google-tag-manager/create-a-variable.webp?fit=max&auto=format&n=gz9Y_q0cHdgc2i5-&q=85&s=95ad4100e696d8d04da729254b114846)

2

Create identification tag

New Custom HTML tag named “Formbricks - User”:

Copy

```
<script>
(function() {
    var check = setInterval(function() {
        if (window.formbricks && window.formbricks.setUserId) {
            clearInterval(check);
            var userId = {{User ID}};
            if (userId) {
                window.formbricks.setUserId(userId);
                var attrs = {};
                if ({{User Email}}) attrs.email = {{User Email}};
                if ({{User Plan}}) attrs.plan = {{User Plan}};
                if (Object.keys(attrs).length) {
                    window.formbricks.setAttributes(attrs);
                }
            }
        }
    }, 100);
    setTimeout(function() { clearInterval(check); }, 10000);
})();
</script>
```

3

Set trigger and push data

1. Create a custom event trigger in GTM
2. Trigger Type: Custom Event
3. Event name: `user-login` (or your preferred event name)
4. Attach this trigger to your “Formbricks - User” tag
5. Save and publish![User Login Trigger](https://mintcdn.com/formbricks/gz9Y_q0cHdgc2i5-/images/xm-and-surveys/surveys/website-app-surveys/google-tag-manager/user-login-trigger.webp?fit=max&auto=format&n=gz9Y_q0cHdgc2i5-&q=85&s=87d38ba5be4e04c81a5b5cf459a951c3)
6. In your code, push data with the same event name:

Copy

```
window.dataLayer = window.dataLayer || [];
window.dataLayer.push({
    'event': 'user-login',
    'userId': 'user-123',
    'userEmail': 'user@example.com',
    'userPlan': 'premium'
});
```

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/google-tag-manager\#track-custom-events)  Track Custom Events

1

Create code action in Formbricks

Add code action via Formbricks UI![Add a code action to open source in app survey](https://mintcdn.com/formbricks/Y0_rk27eZSQCDXfm/images/xm-and-surveys/surveys/website-app-surveys/actions/code-action.webp?fit=max&auto=format&n=Y0_rk27eZSQCDXfm&q=85&s=5adf1d306ebe2aaf0f082b0e23287dd6)

2

Create GTM variable for Event Name

1. Go to Variables on GTM dashboard
2. Create new User-defined variable
3. Name it “Event Name”
4. Variable Type: Data Layer Variable
5. Data Layer Variable: “eventName”
6. Save and publish![Create Event Variable](https://mintcdn.com/formbricks/gz9Y_q0cHdgc2i5-/images/xm-and-surveys/surveys/website-app-surveys/google-tag-manager/create-event-variable.webp?fit=max&auto=format&n=gz9Y_q0cHdgc2i5-&q=85&s=fbd317e8947d0cfbf101730f09db8713)

3

Create event tracking tag

New Custom HTML tag:

Copy

```
<script>
if (window.formbricks && window.formbricks.track) {
    window.formbricks.track({{Event Name}});
}
</script>
```

4

Create custom trigger

1. Create a custom event trigger in GTM
2. Trigger Type: Custom Event
3. Event name: `eventName` or name that matches with your event in code.
4. Attach this trigger to your event tracking tag
5. Save and publish![Track Event Trigger](https://mintcdn.com/formbricks/gz9Y_q0cHdgc2i5-/images/xm-and-surveys/surveys/website-app-surveys/google-tag-manager/track-event-trigger.webp?fit=max&auto=format&n=gz9Y_q0cHdgc2i5-&q=85&s=99ffe24faf44922f0f6c45f7e8c331f9)

5

Fire events from your site

Copy

```
// Track button click
window.dataLayer.push({
    'event': 'eventName',
    'eventName': 'code-action'
});
```

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/google-tag-manager\#troubleshooting)  Troubleshooting

**Surveys not showing?**

- Use GTM Preview mode to check tag firing
- Add `?formbricksDebug=true` to your URL
- Check browser console for errors
- Wait 1 minute for the Server Cache to refresh

**User ID not working?**

- Verify Data Layer push syntax
- Check GTM variables are reading correct values
- Ensure user tag fires after initialization

**Events not tracking?**

- Confirm `window.formbricks` exists before calling track
- Match event names exactly with Formbricks action names
- Check timing - Formbricks must be initialized first

## [​](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/google-tag-manager\#need-help)  Need Help?

- [GitHub Discussions](https://github.com/formbricks/formbricks/discussions)
- [Framework Guides](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/framework-guides)
- [Actions](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions)
- [User Identification](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/user-identification)

Was this page helpful?

YesNo

[Framework Guides](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/framework-guides) [Actions](https://formbricks.com/docs/xm-and-surveys/surveys/website-app-surveys/actions)

Ctrl+I

[github](https://github.com/formbricks/formbricks) [linkedin](https://linkedin.com/company/formbricks) [x](https://x.com/formbricks)

[Powered by Mintlify](https://www.mintlify.com/?utm_campaign=poweredBy&utm_medium=referral&utm_source=formbricks)

Assistant

Responses are generated using AI and may contain mistakes.