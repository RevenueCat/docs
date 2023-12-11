---
title: Implementation Responsibilities
slug: implementation-responsibilities
hidden: false
categorySlug: resources
order: 0
---
# Overview
RevenueCat is the single source-of-truth for your subscription status across iOS, Android, and web. The complicated process surrounding receipt validation and interacting with the various native frameworks like Apple's StoreKit and Google's BillingClient are handled automatically when using RevenueCat's SDK.

Subscription status isn't the only aspect of integrating subscriptions into your app, though. Paywalls, content delivery, and attribution are just some of the elements many developers will encounter in the process.

This document intends to outline the responsibilities between developers integrating the Purchases SDK, RevenueCat itself, and the various app stores (App Store, Google Play, Stripe, and Amazon Appstore).

# RevenueCat Responsibilities

## Backend

RevenueCat's backend will appropriately verify, parse, and validate receipts associated with customers for your app and provides continuously updating subscription status via the API and SDK.

## Client SDK

The SDK will fetch product information from stores, manage purchase logic (including purchase environments), sync receipts, fetch customer subscription status from the backend, and sync attribution data for customers.

For more information about the SDK and how to install it for your platform, check out our [Installation](https://docs.revenuecat.com/docs/installation) docs.

## Dashboard / Charts

The RevenueCat Dashboard and Charts will display revenue information based on the production receipts synced with the SDK and processed by the backend.

For more information about the Dashboard and Charts, check out our docs [here](https://docs.revenuecat.com/docs/overview).

# General Responsibilities
[block:parameters]
{
  "data": {
    "h-1": "Developer",
    "h-2": "RevenueCat",
    "h-3": "App Store",
    "0-0": "Fetching product information from store",
    "0-1": "",
    "0-2": "✅",
    "0-3": "✅",
    "1-0": "[Presenting products to users for purchase](https://docs.revenuecat.com/docs/displaying-products)",
    "1-1": "✅",
    "2-0": "Managing purchase logic",
    "2-2": "✅",
    "3-0": "Processing payments",
    "3-3": "✅",
    "4-0": "Managing billing/issuing refunds for subscriptions",
    "4-3": "✅",
    "3-1": "",
    "4-1": "☑️ (Optional, Android-only, see *[Refunds](https://docs.revenuecat.com/docs/customer-history#refunding-subscriptions)*)",
    "5-0": "Unlocking gated content and features",
    "5-1": "✅",
    "6-0": "Unlocking purchases initiated from the App Store / Google Play / Stripe",
    "6-1": "✅",
    "7-0": "Syncing, parsing and verifying receipts",
    "7-2": "✅",
    "8-0": "[Tracking entitlement status](https://docs.revenuecat.com/docs/purchaserinfo)",
    "8-2": "✅",
    "9-0": "[Tracking purchase history](https://docs.revenuecat.com/docs/customer-history)",
    "9-2": "✅",
    "10-0": "Downloading purchased content",
    "10-1": "✅",
    "11-0": "[Identifying users](https://docs.revenuecat.com/docs/user-ids)",
    "11-1": "✅",
    "12-0": "[Getting attribution data for attribution providers](doc:attribution)",
    "12-1": "✅",
    "13-0": "[Sending attribution data to attribution providers](doc:attribution)",
    "13-2": "✅",
    "14-0": "[Notifying your servers of purchase events](https://docs.revenuecat.com/docs/webhooks)",
    "14-2": "✅",
    "15-0": "[Reporting revenue](https://docs.revenuecat.com/docs/charts)",
    "15-2": "✅",
    "15-3": "✅",
    "1-2": "",
    "1-3": "",
    "2-1": "",
    "2-3": "",
    "3-2": "",
    "4-2": "",
    "5-2": "",
    "5-3": "",
    "6-2": "",
    "6-3": "",
    "7-1": "",
    "7-3": "",
    "8-1": "",
    "8-3": "",
    "9-1": "",
    "9-3": "",
    "10-2": "",
    "10-3": "",
    "11-2": "",
    "11-3": "",
    "12-2": "",
    "12-3": "",
    "13-3": "",
    "14-3": "",
    "13-1": "",
    "14-1": "",
    "15-1": "",
    "h-4": "Google Play",
    "0-4": "✅",
    "3-4": "✅",
    "4-4": "✅",
    "15-4": "✅"
  },
  "cols": 5,
  "rows": 16
}
[/block]