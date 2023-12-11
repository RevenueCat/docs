---
title: Update Subscriber Attributes
slug: update-subscriber-attributes
excerpt: Updates subscriber attributes for a user.
hidden: false
categorySlug: revenuecat-api-v1
order: 3
parentDoc: 649983b4c31b2e000a3c1937
---
## Response

If the request is successful, it will contain an empty response.

If the request is not successful because of invalid attributes, an `attributes_error` dictionary will be included in the response with additional details as to which attributes could not be saved and why (see the example 400 response for an example error body).

> 🚧 Attribute Key Restrictions
> 
> For a full list of reserved attribute keys and restrictions refer to the [Subscriber Attributes guide here](doc:subscriber-attributes). To send reserved attribute keys, prefix the key with `$`.