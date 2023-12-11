---
title: Get Offerings
slug: get-offerings-old
excerpt: Gets the offerings for your app.
hidden: true
categorySlug: offerings
order: 0
---
[block:callout]
{
  "type": "info",
  "body": "Without it, the API will return an error.",
  "title": "X-Platform is required"
}
[/block]

[block:api-header]
{
  "title": "Response"
}
[/block]
Your app's offerings and packages.
[block:parameters]
{
  "data": {
    "h-0": "Attribute",
    "h-1": "Description",
    "0-0": "`current_offering_id`",
    "0-1": "The [current offering](doc:entitlements#creating-an-offering) for this user. [Offering overrides](ref:override-offering) and [Experiments](doc:experiments) affect this key depending on the app user ID.",
    "1-0": "`offerings`",
    "1-1": "A list of [Offering objects](ref:get-offerings#the-offering-object)."
  },
  "cols": 2,
  "rows": 2
}
[/block]
## The Offering object:
[block:parameters]
{
  "data": {
    "0-0": "`description`",
    "0-1": "The offering's description.",
    "1-1": "The offering's identifier.",
    "1-0": "`identifier`",
    "h-0": "Attribute",
    "h-1": "Description",
    "2-0": "`packages`",
    "2-1": "A list of [Package objects](ref:get-offerings#the-package-object)."
  },
  "cols": 2,
  "rows": 3
}
[/block]
## The Package object:
[block:parameters]
{
  "data": {
    "h-0": "Attribute",
    "h-1": "Description",
    "0-0": "`identifier`",
    "0-1": "The package's identifier. If you used one of RevenueCat's default identifiers, it will be prefixed by `rc_`.",
    "1-0": "`platform_product_identifier`",
    "1-1": "The identifier of the product in the stores. This should be used to fetch the product from Apple, Google, Amazon, or Stripe depending on the platform."
  },
  "cols": 2,
  "rows": 2
}
[/block]

[block:callout]
{
  "type": "success",
  "title": "Public API key only",
  "body": "Since this endpoint is used in the SDKs, only the public API key can be used for this endpoint, even if you're calling it server-side."
}
[/block]