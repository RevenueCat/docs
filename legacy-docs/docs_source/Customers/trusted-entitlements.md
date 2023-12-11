---
title: Trusted Entitlements
slug: trusted-entitlements
excerpt: Protect your purchases from attackers by enabling Response Signature Verification
hidden: false
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

[block:file]
[
  {
    "language": "swift",
    "name": "",
    "file": "code_blocks/👥 Customers/trusted-entitlements.swift"
  },
  {
    "language": "objectivec",
    "name": "",
    "file": "code_blocks/👥 Customers/trusted-entitlements.m"
  },
  {
    "language": "kotlin",
    "name": "",
    "file": "code_blocks/👥 Customers/trusted-entitlements.kt"
  },
  {
    "language": "dart",
    "name": "Flutter",
    "file": "code_blocks/👥 Customers/trusted-entitlements.dart"
  },
  {
    "language": "typescript",
    "name": "React native",
    "file": "code_blocks/👥 Customers/trusted-entitlements-rn.ts"
  },
  {
    "language": "typescript",
    "name": "Capacitor",
    "file": "code_blocks/👥 Customers/trusted-entitlements-capacitor.ts"
  },
  {
    "language": "csharp",
    "name": "Unity",
    "file": "code_blocks/👥 Customers/trusted-entitlements.cs"
  }
]
[/block]

## Verification

When configuring the SDK with `EntitlementVerificationMode.informational`, `EntitlementInfo` contains the verification result:

[block:file]
[
  {
    "language": "swift",
    "name": "",
    "file": "code_blocks/👥 Customers/verification-result.swift"
  },
  {
    "language": "objectivec",
    "name": "",
    "file": "code_blocks/👥 Customers/verification-result.m"
  },
  {
    "language": "kotlin",
    "name": "",
    "file": "code_blocks/👥 Customers/verification-result.kt"
  },
  {
    "language": "dart",
    "name": "Flutter",
    "file": "code_blocks/👥 Customers/verification-result.dart"
  },
  {
    "language": "typescript",
    "name": "React native",
    "file": "code_blocks/👥 Customers/verification-result-rn.ts"
  },
  {
    "language": "typescript",
    "name": "Capacitor",
    "file": "code_blocks/👥 Customers/verification-result-capacitor.ts"
  },
  {
    "language": "csharp",
    "name": "Unity",
    "file": "code_blocks/👥 Customers/verification-result.cs"
  }
]
[/block]

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
