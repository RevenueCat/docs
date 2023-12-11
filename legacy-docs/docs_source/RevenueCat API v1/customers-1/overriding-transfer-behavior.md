---
title: Overriding transfer behavior
slug: overriding-transfer-behavior
hidden: true
---
It is possible to override the [transfer behavior](doc:restoring-purchases#transferring-purchases-seen-on-multiple-app-user-ids) for individual subscribers using the REST API. Overriding the transfer behavior for subscriber means that if a purchase currently associated with that subscriber is seen on another identified subscriber, the override applies instead of the setting configured on the project level.

To override the behavior on an individual subscriber basis, make a request to the following REST API endpoint:

- Endpoint `https://api.revenuecat.com/v1/subscribers/<app_user_id>/restore_behavior`
- Method: `POST`
- POST body: JSON containing a field `restore_behavior` with the following possible values:
  - `transfer`:  Will transfer the purchases to the new app user ID
  - `error`: Will keep the purchases with this app user ID
  - `transfer_if_no_active_subs`: Will transfer the purchases to the new app user ID unless a subscription is currently active
- The endpoint requires using a secret API key

## Example

[block:file]
[
  {
    "language": "Text",
    "name": "cURL",
    "file": "code_blocks/RevenueCat API v1/customers-1/overriding-transfer-behavior_1.txt"
  }
]
[/block]
