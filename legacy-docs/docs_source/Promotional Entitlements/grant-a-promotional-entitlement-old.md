---
title: Grant a Promotional Entitlement
slug: grant-a-promotional-entitlement-old
excerpt: Grants a user a promotional entitlement. Does not override or defer a store
  transaction, applied simultaneously.
hidden: true
---
[block:callout]
{
  "type": "warning",
  "title": "Secret API Key Required",
  "body": "This endpoint requires a [secret API key](doc:authentication) to be used."
}
[/block]
### Duration Values
The `duration` parameter must be one of the following supported durations:

[block:parameters]
{
  "data": {
    "h-0": "Value",
    "h-1": "Description",
    "0-0": "`daily`",
    "0-1": "24 hour access",
    "2-0": "`weekly`",
    "2-1": "7 day access",
    "3-0": "`monthly`",
    "3-1": "1 month (31-day) access",
    "4-0": "`two_month`",
    "5-0": "`three_month`",
    "6-0": "`six_month`",
    "7-0": "`yearly`",
    "4-1": "2 month (61-day) access",
    "5-1": "3 month (92-day) access",
    "6-1": "6 month (183-day) access",
    "7-1": "1 year (365-day) access",
    "8-0": "`lifetime`",
    "8-1": "200 year access",
    "1-0": "`three_day`",
    "1-1": "72 hour access"
  },
  "cols": 2,
  "rows": 9
}
[/block]

[block:api-header]
{
  "title": "Response"
}
[/block]
If the response is successful, it will contain the updated [Subscriber object](ref:subscribers#the-subscriber-object).