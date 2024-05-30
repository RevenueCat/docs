---
title: Google Historical Import
slug: google-historical-import
excerpt: Importing historical Google Play transactions into RevenueCat
hidden: false
---

## Google Historical Import

Doing a Google historical import overcomes some limitations of the Play Store receipts and allows RevenueCat to ingest subscription history dating back to July 2023. When migrating to RevenueCat, whether by [forwarding your receipt](/migrating-to-revenuecat/sdk-or-not/sdk-less-integration) or installing the SDK, your Google Play subscription history may be incomplete, because Google does nto provide status information for purchase tokens that have expired more than 90 days ago, and for newer tokens, Google only provides the current state, not the history. By combining your migration with Google Historical Imports, RevenueCat will be able to fill in the gaps in your subscription history.

## Setup

### 0. Prerequisites

You should make sure you have the following before proceeding with the setup:

- An existing Play Store app with Google Play purchases
- Created at least [1 project](/welcome/projects#configure-a-new-project) with [1 Play Store app](/welcome/projects#adding-an-app-to-a-project) in RevenueCat
- Uploaded your Google Play package in your RevenueCat Play Store app settings
- Created and uploaded your [Google Service Credentials](/service-credentials/creating-play-service-credentials) to a Play Store app in RevenueCat. It is imperative you grant Financial Access to RevenueCat. Failure to do so may result in delays importing your Google Play data.
- Enabled [Google Real-Time Developer Notifications](/platform-resources/server-notifications/google-server-notifications)

### 1. Retrieve your bucket ID

Open Google Play Console and navigate to ‘Download reports’ > ‘Financial’

![Navigate to Financial tab](/images/bucket-id-1.png)

Select ‘Copy Cloud Storage URI’ next to the ‘Estimated sales reports’ header

![Navigate to Estimated sales report](/images/bucket-id-2.png)

This will copy the entire URI string. For example: `gs://{bucket_id}/sales`. We will just need the `{bucket_id}` portion, which will look something like: `pubsite_prod_rev_01234567890987654321`.

### 2. Upload your bucket ID to RevenueCat

Navigate to ‘Play Store Financial Reports Bucket ID’ in your RevenueCat Play Store app setting and paste the bucket ID.

![Upload bucket ID](/images/bucket-id-3.png)

Remember to select 'Save Changes'.

### 3. Contact us

- New customers: If you have any questions about migrating to RevenueCat, feel free to [contact sales](https://www.revenuecat.com/book-a-demo/) to see how we can help with the process.
- Existing customers: If you are interested in a one-time import of your historical Google Play data, reach out to RevenueCat Support via the dashboard [Contact Us](https://app.revenuecat.com/settings/support) form in your account settings.

## Limitations

Google Historical Imports pulls information directly from Google Play's sales reports. Though unlikely, these sales reports may contain incomplete information, leading to an incomplete data import.

### App User IDs

For Google Play purchases that RevenueCat **is not** already tracking, we will generate transactions with a RC anonymous ID.

### Event Data

RevenueCat **will not** dispatch any third-party integration events for historical transactions generated from this import.

Google Historical Imports will not detect the following:

- Billing issues
- Partial refunds
- Auto renewal status
- Expiration reason will be `UNKNOWN_DUE_TO_IMPORT`

### Charts

- Active Subscriptions Movement: This chart may not be accurate because our count of 'Churned Actives' may be incomplete.
- Initial Conversion, Conversion to Paying, Trial Conversion, and Realized LTV per customer: These charts may not be accurate because our count of "New Customers" may be incomplete, leading to conversion rates being incomplete.
