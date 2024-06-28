---
title: Bulk Imports
slug: receipt-imports
excerpt: Importing existing customers into RevenueCat
hidden: false
---

:::warning Bulk imports only for large volumes
We only offer bulk imports for very large volumes. For small and moderate migrations, simply [post the receipts/purchase tokens to our API](/migrating-to-revenuecat/migrating-existing-subscriptions#server-side-migration).
:::

For extraordinarily large imports, we offer bulk imports as a service on our plans offered via sales. [Contact sales](https://www.revenuecat.com/demo/) to see how we can help with the process.

Please note that depending on the size, bulk imports can take time to complete, sometimes up to several days or weeks for the largest data sets. Please keep this in consideration as you are planning your launch.

If you already have existing purchases or subscriptions and have been saving the complete raw receipt files or tokens, you can import those purchases into RevenueCat. If you don't have the proper data saved on your server, see the client-side migration section of the [Migrating Subscriptions](/migrating-to-revenuecat/migrating-existing-subscriptions) doc.

Before kicking off an import, it's important that new purchases are being forwarded. This can be achieved by integrating the SDK or forwarding receipts/purchase tokens from your backend via our REST API. 

:::info Bulk imports DO NOT trigger webhooks or integrations
Bulk imports done by RevenueCat will not trigger any webhook or integration events. If this is a requirement, then you'll need to perform an import using the REST API as mentioned above.
:::

### Required data

To do a receipt import we'll need a CSV file for each of the stores you want to import data from (Apple App Store, Google Play Store, Stripe). The CSV needs to contain the columns outlined below.

=======
#### Apple App Store

- app_user_id
- receipt (the raw StoreKit 1 receipt file) OR StoreKit 2 [signed transaction](https://developer.apple.com/documentation/appstoreserverapi/jwstransaction)

In order to accurately detect pricing, upload your App Store Connect API key and configure v2 server notifications, see [here](https://www.revenuecat.com/docs/subscription-guidance/price-changes#price-detection) for more info.

:::warning StoreKit 1: Complete base64 encoded receipt file required
RevenueCat requires the raw base64 encoded Apple receipt to import the subscription properly. Partial receipts, the receipt information from the Apple server-to-server notifications, or the [`latest_receipt_info`](https://developer.apple.com/documentation/appstorereceipts/responsebody/latest_receipt_info) are insufficient as they contain only a subset of the receipt information.
:::

#### Google Play Store

- app_user_id
- product_id
- token

You can find a reference Google Play import csv file [here](https://github.com/RevenueCat-Samples/import-csv-samples/blob/main/Android/android_receipt_import_sample.csv).

**Important:** We need to know your [API quota](https://developers.google.com/android-publisher/quotas) with Google and approximately how many remaining requests per day you have so we don't exceed your quota.

:::warning Limited historical data for Google Play purchases
Google Play receipts that have been expired for more than 90 days ago can't be imported, and only the current status can be retrieved from each receipt. This means that historical data won't be presented accurately in Charts. To fill the gaps in historical data, you can use [Google Historical Imports](/migrating-to-revenuecat/migrating-existing-subscriptions/google-historical-import).
:::

#### Stripe

- app_user_id
- subscription_token (e.g. sub_xxxxxx)

You can find a reference Stripe import csv file [here](https://github.com/RevenueCat-Samples/import-csv-samples/blob/main/Stripe/stripe_receipt_import_sample.csv).

:::warning No historical data for Stripe subscriptions
Stripe subscription tokens contain only the current status can be retrieved from each Stripe subscription token. This means that Charts will not accurately reflect the historical data from migrated Stripe tokens.
:::
