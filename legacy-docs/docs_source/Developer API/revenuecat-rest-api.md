---
title: Overview (v2)
slug: revenuecat-rest-api
hidden: false
---
> 📘 New to RevenueCat?
> 
> Welcome! If you're adding subscriptions or other in-app purchases to your app, the RevenueCat SDK will handle most of the heavy-lifting without the need to interact with this API directly.
> 
> See our [Quickstart](doc:getting-started) for more information on getting started with RevenueCat.

> 📘 API v2 under development
> 
> REST API v2 is currently under development and does not yet cover all use cases from API v1. For those missing use cases, please use v1 in the meantime.

## About RevenueCat’s REST API

RevenueCat provides a REST API for developers to perform customer and transaction related actions from their own server. 

Most of this API is geared toward client usage via RevenueCat’s SDK, but there are various endpoints that can be used for refunding purchases, granting promotional entitlements, and other sensitive actions that can only be done via a Secret API key from your server.

## Should I use this REST API or the RevenueCat SDK?

If you’re adding subscriptions or other in-app purchases to your app for the first time or if you don’t have a backend that stores your user’s receipts, you’re probably looking to implement the [RevenueCat SDK](doc:installation).

If you want to start migrating your existing users to RevenueCat and you have your user’s receipts stored on your own server, or you want to check subscription status of your users from your own server, the REST API is a great solution.

## Authentication

Authentication for the RevenueCat REST API is achieved by setting the `Authorization` header with a valid API key. You'll find two types of API keys in your RevenueCat dashboard: _public_ and _secret_. 

Certain endpoints require secret keys, which should be kept out of any publicly accessible areas such as GitHub, client-side code, and so forth. See our [Authentication guide](doc:authentication) for more information.

[block:file]
[
  {
    "language": "text",
    "name": "Authorization Header",
    "file": "code_blocks/Developer API/revenuecat-rest-api_1.txt"
  }
]
[/block]

> 🚧 Authorization type `Bearer` required in header
> 
> The RevenueCat REST API v2 requires stating the authorization type `Bearer` in the `Authorization` header before the API key in accordance with [RFC 7235](https://datatracker.ietf.org/doc/html/rfc7235). This is different to the v1 API which allowed passing just the API key as the `Authorization` header.

> 🚧 API v1 keys will not work with REST API v2
> 
> In order to utilize the RevenueCat API v2, please create new v2 secret keys and define your permissions.

## API v2 Permissions

You can create a new secret API key in your project settings page > API keys. Select _+ New_.

![](https://files.readme.io/c640edd-image.png)

Give it a name, select `V2` as the version, and set your permissions. Be sure to select _Generate_ at the top right corner.

![](https://files.readme.io/842f5ae-image.png)

Each endpoint in this documentation will contain a description informing you which permissions are required.

## Request Payload

The body of the `POST` requests should be encoded in JSON and have the 'Content-Type' header set to 'application/json'.

[block:file]
[
  {
    "language": "text",
    "name": "Content-Type Header",
    "file": "code_blocks/Developer API/revenuecat-rest-api_2.txt"
  }
]
[/block]

[block:file]
[
  {
    "language": "json",
    "name": "sample body",
    "file": "code_blocks/Developer API/revenuecat-rest-api_3.json"
  }
]
[/block]

## Params

> 🚧 Encode Your URL Params
> 
> For URL params, such as the `app_user_id`, make sure you URL encode them before using them.

## Beta Interest

Our work on the APIs is not over yet. We are working on supporting a new and more consistent data model that will abstract away differences between the app stores. 

We’re also working on a more RESTful API that will allow GET operations without side effects. For example, being able to read customer information without unintentionally manipulating it. 

This will allow you to use customer endpoints without side effects of creating a new app user ID and provide you the necessary information about a customer’s subscription and purchase lifecycle.

We are looking for interested developers who want to take part in the beta program for our new REST APIs. Some key benefits of participating include:

- Being the first to gain access to our new APIs
- Being able to give feedback before launch

If you’re interested, please fill out this [Typeform](https://form.typeform.com/to/VltVNhW8) to join our waitlist and to share your use cases!