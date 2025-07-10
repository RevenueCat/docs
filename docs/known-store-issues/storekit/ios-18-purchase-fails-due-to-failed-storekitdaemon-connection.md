---
title: iOS 18-18.3.2 Purchases May Fail Due to StoreKit Daemon Connection Issue
---

## Resolved

Apple has resolved this issue, and it is not present in iOS 18.4 and above. The issue is still present in iOS 18.0-18.3.2. We are keeping this page for historical reference.

## Issue Description

iOS 18.0 introduced a bug which sometimes causes purchases to fail on-device, impacting the RevenueCat SDK's ability to display the purchase sheet to end users. When this bug occurs, no money is moved and the RevenueCat SDK's `purchase` functions throw a [STORE_PROBLEM](https://www.revenuecat.com/docs/test-and-launch/errors#---store_problem) error.

## Affected Versions

- iOS 18.0
- iOS 18.0.1
- iOS 18.1
- iOS 18.1.1
- iOS 18.2
- iOS 18.2.1
- iOS 18.3
- iOS 18.3.1
- iOS 18.3.2

## Symptoms

- Calling any of RevenueCat's `purchase` functions to make a purchase on iOS 18.0-18.3.2 may fail.
- StoreKit will log an error message in the following format to the console. The NSCocoaErrorDomain Code will always be 4097.

```
Product purchase for '${PRODUCT_ID}' failed with error:
systemError(Error Domain=NSCocoaErrorDomain Code=4097
"connection to service with pid ${PID} named com.apple.storekitd"
UserInfo={NSDebugDescription=connection to service with pid
${PID} named com.apple.storekitd})
```

## Workarounds

If users encounter this error, instruct them to upgrade their operating system to the most recent version.

## Impact on App Store Review

**This bug should not cause app rejections**, since App Reviewers should no longer be testing on iOS 18.0-18.3.2.

## Status

✅ **Resolved** - Apple has resolved this issue in iOS 18.4. No further action is required for new app releases. If users encounter this bug, instruct them to upgrade their operating system to the latest version and try again.
