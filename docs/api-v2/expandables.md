---
title: Expandables
slug: expandables
hidden: false
---

Expandables allow you to retrieve related data along with the request without making additional requests. Fields in the REST API will allow you to request additional information as an expanded response by using the `expand` query parameter.

For example, a `product` object will have an associated `app_id` field. This `app_id` field can be expanded in the same request with the `expand` query parameter and will include an `app` object in the response.

### Without `expand` query param

```json title="GET /products/prod1a2b3c4d5"
{
  "object": "product",
  "id": "prod1a2b3c4d5e",
  "store_identifier": "rc_1w_199",
  "type": "subscription",
  "subscription": {
    "duration": "P1M",
    "grace_period_duration": "P3D",
    "trial_duration": "P1W"
  },
  "created_at": 1658399423658,
  "app_id": "app1a2b3c4"
}
```

### With `expand` query param:

```json title="GET /products/prod1a2b3c4d5?expand=app"
{
  "object": "product",
  "id": "prod1a2b3c4d5e",
  "store_identifier": "rc_1w_199",
  "type": "subscription",
  "subscription": {
    "duration": "P1M",
    "grace_period_duration": "P3D",
    "trial_duration": "P1W"
  },
  "created_at": 1658399423658,
  "app_id": "app1a2b3c4",
  "app": {
    "id": "app1a2b3c4",
    "name": "string",
    "created_at": 1658399423658,
    "type": "amazon",
    "project_id": "proj1a2b3c4"
  }
}
```

As you can see from above, the `app_id` field remains the same, but the response contains an additional `app` object.

Fields that can be expanded into objects are indicated in the endpoint documentation under **Query Params** and will list accepted values.
