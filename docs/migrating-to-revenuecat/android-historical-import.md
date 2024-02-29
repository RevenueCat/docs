---
title: Google Historical Import
slug: google-historical-import
excerpt: Importing historical Google Play transactions into RevenueCat
hidden: false
---

When migrating to RevenueCat, whether by [forwarding your receipt](doc:observer-mode#option-1-server-side) or enabling [Observer Mode on the SDK](doc:observer-mode#option-2-client-side), your Google Play subscription history may be incomplete. Due to a Google limitation, RevenueCat is not able to ingest Google receipts that have expired more than 90 days ago. For receipts that RevenueCat is able to process, Google receipts only return the current snapshot for your subscription. When combining your migration with Google Historical Imports, RevenueCat will be able to fill in the gaps of your subscription history. **Currently RevenueCat is able to import your Google Play transactions from July 2023 and onwards.**

# Setup
## 0. Prerequisites 
You should make sure you have the following before proceeding with the setup:
- Have an existing Play Store app with Google Play purchases
- Created at least [1 project](doc:projects#configure-a-new-project) with [1 Play Store app](doc:projects#adding-an-app-to-a-project) in RevenueCat
- Created and uploaded your [Google Service Credentials](doc:creating-play-service-credentials) to a Play Store app in RevenueCat. It is imperative you grant Financial Access to RevenueCat. Failure to do so may result in delays importing your Google Play data.
- Enabled [Google Real-Time Developer Notifications](doc:google-server-notifications)
- Uploaded your Google Play package in your RevenueCat Play Store app settings

## 1. Retrieve your bucket ID
Open Google Play Console and navigate to ‘Download reports’ > ‘Financial’ 

![Navigate to Financial tab](/images/bucket-id-1.png)

Select ‘Copy Cloud Storage URI’ next to the ‘Estimated sales reports’ header

![Navigate to Estimated sales report](/images/bucket-id-2.png)

This will copy the entire URI string. For example: `gs://{bucket_id}/sales`. We will just need the `{bucket_id}`  portion, which will look something like: `pubsite_prod_rev_01234567890987654321`.

## 2. Upload your bucket ID to RevenueCat
Navigate to ‘Play Store Financial Reports Bucket ID’ in your RevenueCat Play Store app setting and paste the bucket ID.

![Upload bucket ID](/images/bucket-id-3.png)

Remember to select 'Save Changes'.

## 3. Contact us
- New customers: If you have any questions about migrating to RevenueCat, feel free to [contact sales](https://www.revenuecat.com/book-a-demo/) to see how we can help with the process.
- Existing customers: If you are interested in a one-time import of your historical Google Play data, reach out to RevenueCat Support via the dashboard [Contact Us](https://app.revenuecat.com/settings/support) form in your account settings.

# Limitations
Google Historial Imports pulls information directly from Google Play's Sales report. Sales report may be missing information that we are unable to retrieve. 

## App User IDs
For Google Play purchases that RevenueCat **does not** have a fetch token for, we will generate transactions with a RC anonymous ID.

## Event Data
RevenueCat **will not** dispatch any third-party integration events for historical transactions generated from this import. 

Google Historical Imports will not detect the following:
- Billing issues
- Partial refunds
- Cancelled subscriptions
- Expiration reasons will be `UNKNOWN_DUE_TO_IMPORT`

## Charts
- Active Subscriptions Movement: This chart will not be accurate because our count of 'Churned Actives' may be imcomplete.
- Initial Conversion, Conversion to Paying, Trial Conversion, and Realized LTV per customer: These charts will be incomplete because our count of "New Customers" may be inaccurate, therefore conversion rate may also be inaccurate. However, conversion facts are still correct.
