---
title: iOS 18.4 Simulator Fails to Load Products
---

# iOS 18.4 Simulator Fails to Load Products

## Issue Description

When testing in-app purchases on iOS 18.4 Simulator, StoreKit may fail to load products, causing `SKProductsRequest` to return empty results or timeout.

## Affected Versions

- iOS 18.4 Simulator
- Xcode versions that include iOS 18.4 Simulator

## Symptoms

- Products fail to load in the simulator
- `SKProductsRequest` returns empty product arrays
- RevenueCat SDK reports no available products
- Timeout errors when requesting product information

## Workarounds

### Option 1: Use a Different Simulator Version

1. In Xcode, select a different iOS simulator version (e.g., iOS 18.3 or iOS 17.x)
2. Test your in-app purchase implementation on the alternative simulator

### Option 2: Test on Physical Device

1. Use a physical iOS device for testing instead of the simulator
2. Ensure you're using sandbox Apple ID accounts for testing

### Option 3: StoreKit Configuration Files

1. Create a StoreKit Configuration file in Xcode
2. Use local testing instead of App Store Connect sandbox

## Status

This is a known issue with iOS 18.4 Simulator. Apple is aware of the problem and it's expected to be resolved in future Xcode updates.

## Related Links

- [Apple Developer Forums - StoreKit Issues](https://developer.apple.com/forums/tags/storekit)
- [RevenueCat Sandbox Testing Guide](/test-and-launch/sandbox/apple-app-store)
- [StoreKit Testing Documentation](https://developer.apple.com/documentation/storekit/in-app_purchase/testing_in-app_purchases_with_sandbox)

---

_Last updated: [Current Date] - Issue still present in iOS 18.4 Simulator_
