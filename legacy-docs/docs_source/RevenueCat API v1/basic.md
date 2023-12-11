---
title: Overview (v1)
slug: basic
hidden: false
---
[block:callout]
{
  "type": "info",
  "title": "New to RevenueCat?",
  "body": "Welcome! If you're adding subscriptions or other in-app purchases to your app, the RevenueCat SDK will handle most of the heavy-lifting without the need to interact with this API directly.\n\nSee our [Quickstart](doc:getting-started) for more information on getting started with RevenueCat."
}
[/block]
## About RevenueCat’s REST API

RevenueCat provides a REST API for developers to perform customer and transaction related actions from their own server. 

Most of this API is geared toward client usage via RevenueCat’s SDK, but there are various endpoints that can be used for refunding purchases, granting promotional entitlements, and other sensitive actions that can only be done via a Secret API key from your server.

## Should I use this REST API or the RevenueCat SDK?

If you’re adding subscriptions or other in-app purchases to your app for the first time or if you don’t have a backend that stores your user’s receipts, you’re probably looking to implement the [RevenueCat SDK](doc:installation).

If you want to start migrating your existing users to RevenueCat and you have your user’s receipts stored on your own server, or you want to check subscription status of your users from your own server, the REST API is a great solution.

## Authentication

Authentication for the RevenueCat REST API is achieved by setting the `Authorization` header with a valid API key. You'll find two types of API keys in your RevenueCat dashboard: *public* and *secret*.

Certain endpoints require secret keys, which should be kept out of any publicly accessible areas such as GitHub, client-side code, and so forth. See our [Authentication guide](doc:authentication) for more information.
[block:file]
[
  {
    "language": "text",
    "name": "Authorization Header",
    "file": "code_blocks/RevenueCat API v1/basic_1.txt"
  }
]
[/block]
## Request Payload

The body of the `POST` requests should be encoded in JSON and have the 'Content-Type' header set to 'application/json'.
[block:file]
[
  {
    "language": "text",
    "name": "Content-Type Header",
    "file": "code_blocks/RevenueCat API v1/basic_2.txt"
  }
]
[/block]

[block:file]
[
  {
    "language": "json",
    "name": "sample body",
    "file": "code_blocks/RevenueCat API v1/basic_3.json"
  }
]
[/block]

[block:api-header]
{
  "title": "Params"
}
[/block]

[block:callout]
{
  "type": "warning",
  "title": "Encode Your URL Params",
  "body": "For URL params, such as the `app_user_id`, make sure you URL encode them before using them."
}
[/block]