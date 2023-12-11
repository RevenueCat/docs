---
title: Expandables
slug: expandables
hidden: false
---
Expandables allow you to retrieve related data along with the request without making additional requests. Fields in the REST API will allow you to request additional information as an expanded response by using the `expand` query parameter. 

For example, a `product` object will have an associated `app_id` field. This `app_id` field can be expanded in the same request with the `expand` query parameter and will include an `app` object in the response. 

### Without `expand` query param

[block:file]
[
  {
    "language": "json",
    "name": "GET /products/prod1a2b3c4d5",
    "file": "code_blocks/Developer API/expandables_1.json"
  }
]
[/block]



### With `expand` query param:

[block:file]
[
  {
    "language": "json",
    "name": "GET /products/prod1a2b3c4d5?expand=app",
    "file": "code_blocks/Developer API/expandables_2.json"
  }
]
[/block]



As you can see from above, the `app_id` field remains the same, but the response contains an additional `app` object. 

Fields that can be expanded into objects are indicated in the endpoint documentation under **Query Params** and will list accepted values.