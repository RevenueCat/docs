---
title: Google Play Quota Increase Request
slug: google-play-quota-increase-request
excerpt: What to do when you hit the Google Play Developer API limit
hidden: false
---

Google Play developers may receive an email from RevenueCat indicating that their Google Play Developer API Quota has been or is at risk of being exceeded, and that you need to request a quota increase from Google.

As RevenueCat uses the Google Play Developer API to refresh your customer's purchases to ensure subscription status is up-to-date, it's critical that we are able to continue accessing the API.

## Default quota

The default quota for each Google Play Developer API is 3,000 queries per minute per bucket, where each bucket's quota is independent of the others. For more information on quota bucket names and corresponding APIs in each bucket, refer to [Google Play Developer API's quota guide](https://developers.google.com/android-publisher/quotas).

## Prerequisites

Before requesting an increase, ensure you have Real-Time Developer Notifications (RTDN) configured as described in our guide [here](/platform-resources/server-notifications/google-server-notifications). RTDN reduces RevenueCat's usage of the Google Play Developer API, and is recommended to have configured.

## Requesting an increase

To request a quota increase, visit the Google Play Developer API quota request form: https://support.google.com/googleplay/android-developer/contact/apiqr

Your Developer Account account ID can be found in your [Play Console Account details page](https://play.google.com/console/developers/contact-details:):

![Image](/docs_images/platform-resources/google/google-play-quota-increase-request-account-id.png)

Your App package name can be found in the [Developer Console](https://play.google.com/apps/publish/) or in your app's build.gradle.

![Image](/docs_images/platform-resources/google/app_package_name.png)

Your Google Cloud project ID can be found in your [Google API Console](https://console.developers.google.com/) by clicking on the Project name in the top navigation bar:

![](/docs_images/platform-resources/google/google-play-quota-increase-request-project-id.png)

Enter your account details, then select the API you'd like to request an increase for. If you received an automated email from RevenueCat, please refer to it to determine which quota bucket needs increasing.

You can check your current quota usage in the [Quotas](https://console.cloud.google.com/iam-admin/quotas?service=androidpublisher.googleapis.com) section of the Google Cloud Console.

![Image](/docs_images/platform-resources/google/google-play-quota-increase-request-form.png)

### Justification

The form then requires additional information depending on your use-case, including a justification for needing an increase. To explain to Google Play the need for the increase, you might describe your situation as:

- 'We are using RevenueCat to manage our subscriptions and we have an increase in subscriptions that is causing us to exceed the API quota.'

### Subscription updates & one-time purchases

RevenueCat uses the Subscription Updates and One-Time Purchases API endpoints to consume purchases and once to validate the purchase.

### Quota

The specific quota value and time length you request may depend on your situation, including:

- Whether you are using the requested increased API from your own backend.
- Whether you can anticipate predictable marketing efforts or seasonal surges in purchases.

Generally, we find requesting **7,500** to be suitable for most apps meeting the threshold, but you can view your exact usage in the [Google Cloud Quotas dashboard](https://cloud.google.com/docs/quota#viewing_all_quota_console).
