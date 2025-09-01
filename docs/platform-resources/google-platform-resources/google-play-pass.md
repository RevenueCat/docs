---
title: Google Play Pass
slug: google-play-pass
hidden: false
---

[Google Play Pass](https://developer.android.com/google-play/guides/play-pass) is a program that gives subscribers access to hundreds of apps and games, free of ads and in-app purchases.

## How to Apply

Play Pass is currently an invitation only program, however you can express interest [here](https://docs.google.com/forms/d/e/1FAIpQLSdmL0YkKrklqZHTcb6sVZLnSXA7Tf5TELppa0mx7tAn1x3AJA/viewform).

## Entitlement Tracking

RevenueCat will accurately track entitlement access for users who gain access to your apps' in-app purchases through Play Pass.

## Revenue Tracking

Revenue tracking from Play Pass in RevenueCat may not be accurate since developers earn money based on a royalty. This is calculated by Google's internal algorithmic methods that determine the value of all types of content and not solely based on engagement.

In addition, a Play Pass subscription allows customers to unlock in-app purchases that would normally be an additional cost. Since there is not an accurate way to distinguish Play Pass transactions from regular transactions, RevenueCat will count the 'revenue' generated from in-app purchases unlocked by Play Pass.

:::warning
The Play Store product you configure as Play Pass must be a one-time product (previously referred as in-app product), not a subscription product.
If you don't currently have a one-time product, you can create a new one in the Play Store Console, and then configure it in the RevenueCat dashboard, attaching it to the Entitlement you want to track.
:::