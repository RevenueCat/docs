---
title: Error Types
slug: /api-v2-error-types
hidden: false
---

## `authentication_error`

Authentication is not valid for the given API key. Double check your API key.

## `authorization_error`

The API key does not belong the project you specified. Double check that your API key is associated with the IDs you are passing.

## `invalid_request`

This error can be due to several reasons:

- `Content-Type: application/json` is missing in the request header for `POST`/`PUT`/`PATCH` requests
- Using the incorrect HTTP method on a path (i.e: `GET …/entitlements/<entitlements_id>/actions/attach_products`)

## `parameter_error`

The parameter provided is invalid. Please refer to the `message` field for more information.

- IDs (e.g: `entitlement_id`, `project_id`, etc): 1 to 255 characters
- `display_name`(applies to Entitlements): 1 to 1000 characters
- `lookup_key`(applies to Entitlements): 1 to 200 characters

## `rate_limit_error`

The request has hit the [rate limit](ref:rate-limit) for this endpoint. Refer to the `backoff_ms` field to determine how many milliseconds to wait before making another request to the same endpoint.

## `resource_missing`

The resource with the specific ID does not exist. Double check the IDs (e.g: product ID, entitlement ID, etc) you are passing into the endpoints.

## `resource_already_exists`

The resource with the specific ID already exists. Use a different, unique value for ID and try again.

## `resource_locked_error`

The resource is currently being modified by a concurrent request. Refer to the `backoff_ms` field to determine when to try again.

## `server_error`

Request is not able to be processed due to an internal server error. Refer to the `backoff_ms` field to determine when to try again. Please report this to the RevenueCat team if you are encountering this issue.

## `store_error`

There was a problem with the stores (e.g: Apple App Store, Google Play Store, etc). This typically occurs when the stores are unable to process the request. Refer to the `backoff_ms` field to determine when to try again.

## `unprocessable_entity_error`

Request is not able to be processed. Please refer to the `message` field for more information.
