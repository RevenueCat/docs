---
title: Events Overview
slug: /integrations
excerpt: Learn about events and integrations from RevenueCat
hidden: false
---

Events notify you in near real-time to any changes that occur to a customer's subscription and can automatically be sent into a variety of [third-party tools](/integrations/third-party-integrations) and [attribution networks](/integrations/attribution) to get clean, consistent, and trustworthy data in all of your systems.

RevenueCat events work by connecting directly to the app stores to detect changes to the customer's subscription. This means events are not dependent on any in-app usage or activity and are always sent from RevenueCat's servers. Server-side event detection is crucial for subscription apps since most interesting events occur when your app is inactive (e.g. trial conversions, renewals, cancellations, etc.).

![](https://files.readme.io/647d2a5-Screenshot_2023-04-12_at_10.45.13_AM.png)

## Setting up Events and Integrations

In order for events to properly work, information about the purchase along with the App User ID must be sent to RevenueCat and the integration configured in the RevenueCat dashboard. Integrations are configured on a per-Project basis, meaning all apps under the same project share the same integration configurations.

### 1. Send purchase information into RevenueCat

Purchase information, along with an App User ID, need to be sent to RevenueCat. This can be done 1 of 3 ways:

1. Making purchases through any of the RevenueCat SDKs will automatically collect this information.
2. Running any of the RevenueCat SDKs in [Observer Mode](/migrating-to-revenuecat/observer-mode#option-2-client-side) will automatically collect this information.
3. Create a subscription through the [POST /receipts](https://www.revenuecat.com/reference/receipts) REST API. This is typically done server-side and only if you're **not** using the RevenueCat SDK.

:::info
Purchase information only needs to be sent to RevenueCat once to initially create the subscription, and all future events will be automatically detected.
:::

#### Collect integration specific data

Some integrations require certain device specific data to properly function. Be sure to review each integration specific guide here to ensure all required data is captured. Any device specific data is sent to RevenueCat as a [Subscriber Attribute](/customers/subscriber-attributes), which can be set via the RevenueCat SDK or REST API.

### 2. Configure integration in the RevenueCat dashboard

Integrations are configured from the RevenueCat dashboard by navigating to your project, and tapping '**+ New**' under the Integrations menu in the side bar. Be sure to read each integration specific guide for complete setup details.

![](https://files.readme.io/4c8b15e-Screenshot_2023-04-12_at_2.01.00_PM.png)

## Historical Events

Although RevenueCat can parse historical subscription data for charts and data exports, **historical subscription changes do not generate events into any integrations**. If a historical subscription is sent to RevenueCat, an event will be generated for the latest event that occurred only. This way, any downstream systems can have the latest subscription state synced even if the complete subscription event history is not present.

## Debugging Integrations

Each integration configuration page in the RevenueCat dashboard will display a realtime feed of the most recently dispatched events. Expanding an event here will display the request body sent by RevenueCat along with the response code and message received from the destination.

If you're receiving errors, inspect the response message to troubleshoot.

If you don't see any events dispatched, ensure that you're capturing any device specific information required by that integration and that you've recorded a recent purchase to RevenueCat.

### Integrations FAQs

| Question                                                       | Answer                                                                                                                                                                                                                                       |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| What does it mean if my event returns with a negative revenue? | Events with negative revenue, most often a cancellation event, indicate that a refund has taken place. Not all integrations support negative revenue, and some may indicate refunds with a revenue of zero instead.                          |
| Are any event types optional to send to integrations?          | This will vary by integration, and can be found on the specific integration details page. If an event type is optional, leaving the event name blank is your settings will indicate that you do not want RevenueCat to send that event type. |
