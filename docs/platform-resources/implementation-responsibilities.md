---
title: Implementation Responsibilities
slug: implementation-responsibilities
hidden: false
---

## Overview

RevenueCat is the single source-of-truth for your subscription status across iOS, Android, and web. The complicated process surrounding receipt validation and interacting with the various native frameworks like Apple's StoreKit and Google's BillingClient are handled automatically when using RevenueCat's SDK.

Subscription status isn't the only aspect of integrating subscriptions into your app, though. Paywalls, content delivery, and attribution are just some of the elements many developers will encounter in the process.

This document intends to outline the responsibilities between developers integrating the Purchases SDK, RevenueCat itself, and the various app stores (App Store, Google Play, Stripe, and Amazon Appstore).

## RevenueCat Responsibilities

### Backend

RevenueCat's backend will appropriately verify, parse, and validate receipts associated with customers for your app and provides continuously updating subscription status via the API and SDK.

### Client SDK

The SDK will fetch product information from stores, manage purchase logic (including purchase environments), sync receipts, fetch customer subscription status from the backend, and sync attribution data for customers.

For more information about the SDK and how to install it for your platform, check out our [Installation](/docs/getting-started/installation) docs.

### Dashboard / Charts

The RevenueCat Dashboard and Charts will display revenue information based on the production receipts synced with the SDK and processed by the backend.

For more information about the Dashboard and Charts, check out our docs [here](/docs/dashboard-and-metrics/overview).

## General Responsibilities

| Responsibility                                                                            | Developer | RevenueCat | App Store | Google Play |
| ----------------------------------------------------------------------------------------- | --------- | ---------- | --------- | ----------- |
| Fetching product information from store                                                   |           | ✅         | ✅        | ✅          |
| [Presenting products to users for purchase](/docs/getting-started/displaying-products)    | ✅        |            |           |             |
| Managing purchase logic                                                                   |           | ✅         |           |             |
| Processing payments                                                                       |           |            | ✅        | ✅          |
| Managing billing/issuing refunds for subscriptions                                        |           |            | ✅        | ✅          |
| Unlocking gated content and features                                                      | ✅        |            |           |             |
| Unlocking purchases initiated from the App Store / Google Play / Stripe                   | ✅        |            |           |             |
| Syncing, parsing and verifying receipts                                                   |           | ✅         |           |             |
| [Tracking entitlement status](/docs/customers/customer-info)                              |           | ✅         |           |             |
| [Tracking purchase history](/docs/dashboard-and-metrics/customers-group/customer-history) |           | ✅         |           |             |
| Downloading purchased content                                                             | ✅        |            |           |             |
| [Identifying users](/docs/customers/user-ids)                                             | ✅        |            |           |             |
| [Getting attribution data for attribution providers](/docs/integrations/attribution)      | ✅        |            |           |             |
| [Sending attribution data to attribution providers](/docs/integrations/attribution)       |           | ✅         |           |             |
| [Notifying your servers of purchase events](/docs/integrations/webhooks)                  |           | ✅         |           |             |
| [Reporting revenue](/docs/dashboard-and-metrics/charts)                                   |           | ✅         | ✅        | ✅          |
