---
title: Overview (v1)
slug: /api-v1-overview
hidden: false
---

:::info New to RevenueCat?
Welcome! If you're adding subscriptions or other in-app purchases to your app, the RevenueCat SDK will handle most of the heavy-lifting without the need to interact with this API directly. See our [Quickstart](doc:getting-started) for more information on getting started with RevenueCat.
:::

## About RevenueCat’s REST API

RevenueCat provides a REST API for developers to perform customer and transaction related actions from their own server.

Most of this API is geared toward client usage via RevenueCat’s SDK, but there are various endpoints that can be used for refunding purchases, granting promotional entitlements, and other sensitive actions that can only be done via a Secret API key from your server.

## Should I use this REST API or the RevenueCat SDK?

If you’re adding subscriptions or other in-app purchases to your app for the first time or if you don’t have a backend that stores your user’s receipts, you’re probably looking to implement the [RevenueCat SDK](doc:installation).

If you want to start migrating your existing users to RevenueCat and you have your user’s receipts stored on your own server, or you want to check subscription status of your users from your own server, the REST API is a great solution.

## Authentication

Authentication for the RevenueCat REST API is achieved by setting the `Authorization` header with a valid API key. You'll find two types of API keys in your RevenueCat dashboard: _public_ and _secret_.

Certain endpoints require secret keys, which should be kept out of any publicly accessible areas such as GitHub, client-side code, and so forth. See our [Authentication guide](doc:authentication) for more information.

```text title="Authorization Header"
Authorization: Bearer YOUR_REVENUECAT_API_KEY
```

## Request Payload

The body of the `POST` requests should be encoded in JSON and have the 'Content-Type' header set to 'application/json'.

```text title="Content-Type Header"
Content-Type: application/json
```

```json title="Sample Body"
{
  "app_user_id": "user-1456",
  "fetch_token": "MQABC...EFH1234="
}
```

## Params

For URL params, such as the `app_user_id`, make sure you URL encode them before using them.
