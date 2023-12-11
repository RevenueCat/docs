---
title: Get Offerings
slug: get-offerings
excerpt: Gets the offerings for your app.
hidden: false
categorySlug: revenuecat-api-v1
order: 2
parentDoc: 649983b4c31b2e000a3c193a
---
> 📘 X-Platform is required
> 
> Without it, the API will return an error.

## Response

Your app's offerings and packages.

| Attribute             | Description                                                                                                                                                                                               |
| :-------------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `current_offering_id` | The [current offering](doc:entitlements#creating-an-offering) for this user. [Offering overrides](ref:override-offering) and [Experiments](doc:experiments) affect this key depending on the app user ID. |
| `offerings`           | A list of [Offering objects](ref:get-offerings#the-offering-object).                                                                                                                                      |

## The Offering object:

| Attribute     | Description                                                        |
| :------------ | :----------------------------------------------------------------- |
| `description` | The offering's description.                                        |
| `identifier`  | The offering's identifier.                                         |
| `packages`    | A list of [Package objects](ref:get-offerings#the-package-object). |

## The Package object:

| Attribute                     | Description                                                                                                                                            |
| :---------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------- |
| `identifier`                  | The package's identifier. If you used one of RevenueCat's default identifiers, it will be prefixed by `rc_`.                                           |
| `platform_product_identifier` | The identifier of the product in the stores. This should be used to fetch the product from Apple, Google, Amazon, or Stripe depending on the platform. |

> 👍 Public API key only
> 
> Since this endpoint is used in the SDKs, only the public API key can be used for this endpoint, even if you're calling it server-side.