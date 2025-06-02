---
title: iOS 18.2.X Purchase Sheet May Fail to Appear
---

# iOS 18.2.X Purchase Sheet May Fail to Appear

## Resolved
Apple has resolved this issue, and it is not present in iOS 18.3 and above. The issue is still present in iOS 18.2.X. We are keeping this page for historical reference.

## Issue Description

iOS 18.2 introduced a bug which prevents the payment sheet from being displayed if the current scene's key window root view controller is not a part of the view hierarchy, thus impacting the RevenueCat SDK's ability to display the purchase sheet to end users.

## Affected Versions

- iOS 18.2
- iOS 18.2.1

## Symptoms
- Calling any of RevenueCat's `purchase` functions on iOS 18.2.X will fail to present a purchase sheet.
- StoreKit prints the following error message in the console when the purchase sheet fails to appear: `Could not get confirmation scene ID for`

## Workarounds

This bug can occur if your app is currently presenting a modal view controller with:

- `modalPresentationStyle = .fullScreen` on UIKit
- `fullScreenCover(isPresented:onDismiss:content:)` in SwiftUI

To work around the issue:

- Use `modalPresentationStyle = .overFullScreen` on UIKit
- Use `sheet(isPresented:onDismiss:content:)` on SwiftUI

If your app manifests the issue but these workarounds do not apply to your view structure, make sure your root view controller is part of the view hierarchy when initiating a purchase.

## Impact on App Store Review

**This bug should not cause app rejections**, since App Reviewers should no longer be testing on iOS 18.2.X.

## Status

✅ **Resolved** - Apple has resolved this issue in iOS 18.3. No further action is required for new app releases. If users enounter this bug, instruct them to upgrade their iOS version and try again.
