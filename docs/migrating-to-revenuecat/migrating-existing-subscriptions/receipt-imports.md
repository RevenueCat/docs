---
title: Importing Receipts
slug: receipt-imports
excerpt: Importing existing customers into RevenueCat
hidden: false
---

# Importing Receipts

If you already have existing purchases or subscriptions and have been saving the complete raw receipt files or tokens, you can import those purchases into RevenueCat. If you don't have the proper data saved on your server, see the client-side migration section of the [Migrating Subscriptions](doc:migrating-existing-subscriptions) doc.

Before kicking off an import, if you do not have the SDK deployed in your app, consider first setting up a server-side [Observer Mode](doc:observer-mode#option-1-server-side) implementation. This ensures that new purchases happening during and after the import are still captured in RevenueCat.

> :warning: **Complete Apple base64 receipt file required**
>
> RevenueCat requires the raw base64 encoded Apple receipt to import the subscription properly. Partial receipts or the receipt information from the Apple server-to-server notifications are insufficient.

## Importing Existing Data

### Using the REST API

If you have the correct data saved already for your customers, you can import them through the REST API `POST /receipts` endpoint. This will create the customer in RevenueCat and start tracking their subscription status.

More info in the [API Reference here](https://docs.revenuecat.com/reference#receipts).

This is the quickest way to get your existing subscribers into RevenueCat.

### Bulk imports

For extraordinarily large imports, we offer batch imports as a service on our plans offered via sales. [Contact sales](https://www.revenuecat.com/demo/) to see how we can help with the process.

Please note that depending on the size, bulk imports can take time to complete, sometimes up to several days or weeks for the largest data sets. Please keep this in consideration as you are planning your launch.

> ℹ️ **Bulk imports DO NOT trigger webhooks or integrations**
>
> Bulk imports done by RevenueCat will not trigger any webhook or integration events. If this is a requirement, then you'll need to perform an import using the REST API as mentioned above.

To do a receipt import we'll need 3 csv files for iOS, Android and Stripe with the following fields:

**iOS:**

- app_user_id
- receipt (the raw receipt file)
- product_id
- price
- introductory_price (if not a free trial)
- currency

You can find a sample iOS reference csv file [here](https://github.com/RevenueCat-Samples/import-csv-samples/blob/main/iOS/ios_receipt_import_sample.csv).

\*If you don't have prices and currency with the transactions we can take a separate file with a mapping of product_id, price, currency as well. If there were any known price changes, those should also be included here. You can find a sample price mapping [here](https://github.com/RevenueCat-Samples/import-csv-samples/blob/main/iOS/ios_product_price_map_sample.csv). Note that the duration and introductory_price_duration fields use the ISO 8601 format for representing durations.

> ℹ️ **Product prices are required for iOS imports**
>
> Whether you include the products and prices with each receipt in the CSV file or attach a separate file of products and prices, the prices of products is required so that RevenueCat can accurately compute your charts and send events with correct revenue data.

> :warning: **`latest_receipt_info` not supported for iOS imports**
>
> The entire iOS receipt file must be used for imports. The [`latest_receipt_info`](https://developer.apple.com/documentation/appstorereceipts/responsebody/latest_receipt_info) is not supported as it's only a subset of the entire receipt.

**Google Play:**

- app_user_id
- product_id
- token

You can find a reference Google Play import csv file [here](https://github.com/RevenueCat-Samples/import-csv-samples/blob/main/Android/android_receipt_import_sample.csv).

**Important: **We need to know your [API quota](https://developers.google.com/android-publisher/quotas) with Google and approximately how many remaining requests per day you have so we don't exceed your quota.

\*Note that Google Play receipts that have been expired for more than 60 days ago can't be imported, and only the current status can be retrieved from each receipt. This means that historical data won't be presented accurately in charts.

**Stripe:**

- app_user_id
- subscription_token (e.g. sub_xxxxxx)

You can find a reference Stripe import csv file [here](https://github.com/RevenueCat-Samples/import-csv-samples/blob/main/Stripe/stripe_receipt_import_sample.csv).

\*Note that Stripe subscription tokens contain only the current status can be retrieved from each Stripe subscription token. This means that Stripe charts for historical data won't be accurate.
