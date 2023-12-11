---
title: Trusted Entitlements
slug: trusted-entitlements
excerpt: Protect your purchases from attackers by enabling Response Signature Verification
hidden: false
categorySlug: customers-subscription-status
order: 4
---

# Purpose

RevenueCat uses strong SSL to secure communications against interception. But the user is in control of the client device, and, while not an easy process, they can configure it to allow and execute [MiTM](https://en.wikipedia.org/wiki/Man-in-the-middle_attack) attacks to grant themselves entitlements without actually paying you.

To prevent this, in addition to SSL for secure communications, our native (iOS/Android) SDKs, together with our backend, will verify responses integrity by checking a cryptographic signature.

> 📘
>
> Trusted Entitlements is supported in iOS SDK version 4.25.0 and up, and Android SDK version 6.6.0 and up.
>
> Flutter, React Native, Cordova and Unity support coming soon.

# Setup

## Configuration

SDKs can be configured in one of 3 `EntitlementVerificationMode`'s:

- Disabled (*default*): equivalent to no verification. Susceptible to request tampering.
- Informational (*beta*): No behavior change, but the result of verification is included in `EntitlementInfos` / `EntitlementInfo`.
- Enforced (*coming soon*): verification failures result in `ErrorCode.signatureVerificationFailed` error being thrown.

```swift 
Purchases.configure(
    with: Configuration.Builder(withAPIKey: <api_key>)
        .with(entitlementVerificationMode: .informational)
)
```
```objectivec 
[RCPurchases configureWithConfigurationBuilder:[[RCConfiguration builderWithAPIKey:<api_key>]
                        withEntitlementVerificationMode:RCEntitlementVerificationModeInformational]];
```
```kotlin 
Purchases.configure(
    PurchasesConfiguration.Builder(context, apiKey = <api_key>)
        .entitlementVerificationMode(EntitlementVerificationMode.INFORMATIONAL)
        .build()
)
```
```dart Flutter
PurchasesConfiguration configuration = PurchasesConfiguration(<public_api_key>);
configuration.entitlementVerificationMode = EntitlementVerificationMode.informational;
await Purchases.configure(configuration);
```
```typescript React native
await Purchases.configure({ 
    apiKey: <public_api_key>, 
    entitlementVerificationMode: ENTITLEMENT_VERIFICATION_MODE.INFORMATIONAL
});
```
```typescript Capacitor
await Purchases.configure({ 
    apiKey: <public_api_key>, 
    entitlementVerificationMode: ENTITLEMENT_VERIFICATION_MODE.INFORMATIONAL
});
```
```csharp Unity
Purchases.PurchasesConfiguration.Builder builder = Purchases.PurchasesConfiguration.Builder.Init(<public_api_key>);
Purchases.PurchasesConfiguration purchasesConfiguration =
    .SetEntitlementVerificationMode(Purchases.EntitlementVerificationMode.Informational)
    .Build();
purchases.Configure(purchasesConfiguration);
```

## Verification

When configuring the SDK with `EntitlementVerificationMode.informational`, `EntitlementInfo` contains the verification result:

```swift 
let user = try await Purchases.shared.customerInfo()

switch user.entitlements.verificationResult {
/// No verification was done.
///
/// This can happen for multiple reasons:
///  1. Verification is not enabled in ``Configuration``
///  2. Verification can't be performed prior to iOS 13.0
case .notRequested:
    break

/// Entitlements were verified with our server.
case .verified:
    break

/// Entitlements were created and verified on device through `StoreKit 2`.
case .verifiedOnDevice:
    break

/// Entitlement verification failed, possibly due to a MiTM attack.
case .failed:
    break
}
```
```objectivec 
[[RCPurchases sharedPurchases] getCustomerInfoWithCompletion:^(RCPurchaserInfo * customerInfo, NSError * error) {
    switch (customerInfo.entitlements.verificationResult) {
        /// No verification was done.
        ///
        /// This can happen for multiple reasons:
        ///  1. Verification is not enabled in ``Configuration``
        ///  2. Verification can't be performed prior to iOS 13.0
        case RCVerificationResultNotRequested:
            break;

        /// Entitlements were verified with our server.
        case RCVerificationResultVerified:
            break;

        /// Entitlements were created and verified on device through `StoreKit 2`.
        case RCVerificationResultVerifiedOnDevice:
            break;

        /// Entitlement verification failed, possibly due to a MiTM attack.
        case RCVerificationResultFailed:
            break;
    }
}]
```
```kotlin 
Purchases.sharedInstance.getCustomerInfoWith({ error -> /* Optional error handling */ }) { customerInfo ->
    when (customerInfo.entitlements.verificationResult) {
        /// No verification was done.
        ///
        /// This can happen for multiple reasons:
        ///  1. Verification is not enabled in Configuration
        ///  2. Verification can't be performed prior to Android 4.4
        VerificationResult.NOT_REQUESTED

        /// Entitlements were verified with our server.
        VerificationResult.VERIFIED,

        /// Entitlements were verified on device.
        VerificationResult.VERIFIED_ON_DEVICE -> {}

        /// Entitlement verification failed, possibly due to a MiTM attack.
        VerificationResult.FAILED,
        -> {}
    }
}
```
```dart Flutter
final customerInfo = await Purchases.getCustomerInfo();
switch (customerInfo.entitlements.verification) {
  // No verification was done.
  //
  // This can happen for multiple reasons:
  //  1. Verification is not enabled in Configuration
  //  2. Verification can't be performed prior to Android 4.4
  case VerificationResult.notRequested:

  // Entitlements were verified with our server.
  case VerificationResult.verified:

  // Entitlements were verified on device.
  case VerificationResult.verifiedOnDevice:
    // Grant access
    break;

  // Entitlement verification failed, possibly due to a MiTM attack.
  case VerificationResult.failed:
    // Failed verification
    break;
}
```
```typescript React native
const customerInfo = await Purchases.getCustomerInfo();
switch (customerInfo.entitlements.verification) {
    // No verification was done.
    //
    // This can happen for multiple reasons:
    //  1. Verification is not enabled in Configuration
    //  2. Verification can't be performed prior to Android 4.4
    case VERIFICATION_RESULT.NOT_REQUESTED:

    // Entitlements were verified with our server.
    case VERIFICATION_RESULT.VERIFIED:

    // Entitlements were verified on device.
    case VERIFICATION_RESULT.VERIFIED_ON_DEVICE:
        // Grant access
        break;

    case VERIFICATION_RESULT.FAILED:
        // Failed verification
        break;
}
```
```typescript Capacitor
const customerInfo = await Purchases.getCustomerInfo().customerInfo;
switch (customerInfo.entitlements.verification) {
    // No verification was done.
    //
    // This can happen for multiple reasons:
    //  1. Verification is not enabled in Configuration
    //  2. Verification can't be performed prior to Android 4.4
    case VERIFICATION_RESULT.NOT_REQUESTED:

    // Entitlements were verified with our server.
    case VERIFICATION_RESULT.VERIFIED:

    // Entitlements were verified on device.
    case VERIFICATION_RESULT.VERIFIED_ON_DEVICE:
        // Grant access
        break;

    case VERIFICATION_RESULT.FAILED:
        // Failed verification
        break;
}
```
```csharp Unity
purchases.GetCustomerInfo((info, error) =>
{
    switch (info.Entitlements.Verification) {
        // No verification was done.
        //
        // This can happen for multiple reasons:
        //  1. Verification is not enabled in Configuration
        //  2. Verification can't be performed prior to Android 4.4
        case Purchases.VerificationResult.NotRequested:

        // Entitlements were verified with our server.
        case Purchases.VerificationResult.Verified:

        // Entitlements were verified on device.
        case Purchases.VerificationResult.VerifiedOnDevice:
            // Grant access
            break;

        // Entitlement verification failed, possibly due to a MiTM attack.
        case Purchases.VerificationResult.Failed:
            // Verification failed
            break;
    }
});
```

Additionally, verification errors are always forwarded to `Purchases.errorHandler`.

# Edge cases

## Cache invalidation

Transitioning an app from `EntitlementVerificationMode.disabled` to `EntitlementVerificationMode.informational` means that cached data would not be verified. In order for a user to be able to rely on this new behavior, the SDKs invalidate caches when this change is detected, so that all subsequent data requests are guaranteed to have validation information.

## Key replacement

We use intermediate keys that are rotated frequently. These are signed by a root key. In the very unlikely event that the root key is compromised and needs to be replaced, this would be the process:

- The old pair would be considered insecure
- A new version of API endpoints would be added
- A new version of the SDK that uses the new set of endpoints and the new public key would be rolled out

In this way, apps using the old version of the SDK would continue to work, but they would have to be updated to the new set of keys if they want to continue being secure against tampering.

# Compatibility

- Android 4.4+
- iOS 13.x+
