---
title: iOS 18.4 Simulator Fails to Load Products
---

## Resolved

Apple has resolved this issue, and it is not present in iOS 26 and above. The issue is still present in the iOS 18.4-18.5 simulators. We are keeping this page for historical reference.

## Issue Description

In iOS 18.4, 18.4.1, and 18.5 simulators, StoreKit fails to load products and Offerings when using the sandbox environment. This affects RevenueCat SDK's ability to retrieve product information and display Offerings.

## Affected Versions

- iOS 18.4 Simulator
- iOS 18.4.1 Simulator
- iOS 18.5 Simulator
- Xcode versions that include these iOS simulator versions

## Symptoms

- Products fail to load in the simulator when using sandbox environment
- RevenueCat SDK reports no available products or Offerings
- Calls to StoreKit's `StoreKit.products(for:)` and `SKProductsRequest` return empty product arrays
- Timeout errors when requesting product information from App Store Connect sandbox specifically in Simulator

## Workarounds

### Option 1: Test in iOS 26+

Apple has resolved this issue, and it is not present in iOS 26 and above.

### Option 2: Test on Physical Device

1. Use a physical iOS device for testing instead of the simulator
2. Ensure you're using sandbox Apple ID accounts for testing
3. This is the recommended approach as it represents the real user experience

### Option 3: Use StoreKit Configuration Files

1. Create a StoreKit Configuration file in Xcode
2. Use local testing instead of App Store Connect sandbox
3. Configure your products directly in the configuration file

### Option 4: Use iOS 18.3 Simulator

1. In Xcode, select an iOS 18.3 simulator instead
2. Test your in-app purchase implementation on the alternative simulator version

## Apple Feedback

We've filed a Feedback ticket for this issue with Apple. If you create a Feedback ticket for this issue, please consider mentioning our Feedback ticket, FB17105187, to assist Apple's engineers in connecting the tickets.

## Impact on App Store Review

**This bug will not cause app rejections.** The App Store Review team uses physical devices for testing, not simulators, so they will not encounter this issue during the review process.

## Why Physical Device Testing is Important

Physical devices should always be considered the ultimate source of truth for in-app purchase testing because:

- App Store Review team uses physical devices
- End users use physical devices
- Simulators may have limitations or bugs that don't affect real devices

## Status

✅ **Resolved** - Apple has fixed this issue and the fix has been deployed in iOS 26. To resolve the issue, please use a simulator with iOS 26+ and Xcode 26+.

## Status

This is a known issue with iOS 18.4+ simulators when using the sandbox environment. The issue is specific to the simulator and does not affect physical devices.

---
