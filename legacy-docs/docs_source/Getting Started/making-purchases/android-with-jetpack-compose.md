---
title: Android with Jetpack Compose
slug: android-with-jetpack-compose
excerpt: Process a transaction with an Android app built with Jetpack Compose
hidden: false
---
Jetpack Compose is a new modern toolkit for building native UI for Android. One major difference in Jetpack Compose is the absence of `Activity`.  The `purchasePackage()` and `purchasePackageWith()` functions accept an `Activity` as the first parameter but an `Activity` is not easily accessible in a `@Composable` function.

To get around this, you can create an extension function to recursively find the nearest `Activity` from your Jetpack Compose context.
[block:file]
[
  {
    "language": "kotlin",
    "name": "",
    "file": "code_blocks/🚀 Getting Started/making-purchases/android-with-jetpack-compose_1.kt"
  }
]
[/block]
So example below shows how to check the nullable `Activity?` returned by `LocalContext.current.findActivity()` and pass it into `purchase(package:)`.
[block:file]
[
  {
    "language": "kotlin",
    "name": "",
    "file": "code_blocks/🚀 Getting Started/making-purchases/android-with-jetpack-compose_2.kt"
  }
]
[/block]
