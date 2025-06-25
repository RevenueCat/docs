---
title: Google Play Quota Increase Request
slug: google-play-quota-increase-request
excerpt: What to do when you hit the Google Play Developer API limit
hidden: false
---

Google Play developers may receive an email from RevenueCat indicating that their Google Play Developer API Quota has been or is at risk of being exceeded, and that you need to request a quota increase from Google.

As RevenueCat uses the Google Play Developer API to refresh your customer's purchases to ensure subscription status is up-to-date, it's critical that we are able to continue accessing the API.

## Default quota

The default quota for each Google Play Developer API is 200k queries per day.

## Prerequisites

Before requesting an increase, ensure you have Real-Time Developer Notifications (RTDN) configured as described in our guide [here](/platform-resources/server-notifications/google-server-notifications). RTDN reduces RevenueCat's usage of the Google Play Developer API, and is recommended to have configured.

## Requesting an increase

To request a quota increase, visit the Google Play Developer API quota request form: https://support.google.com/googleplay/android-developer/contact/apiqr

Your Developer Account account ID can be found in your [Play Console Account details page](https://play.google.com/console/developers/contact-details:):

![Image](/docs_images/platform-resources/google/google-play-quota-increase-request-account-id.png)

Your Google Cloud project ID can be found in your [Google API Console](https://console.developers.google.com/) by clicking on the Project name in the top navigation bar:

![](/docs_images/platform-resources/google/google-play-quota-increase-request-project-id.png)

Enter your account details, and choose the `Subscription & Products Purchase` option.

![Image](/docs_images/platform-resources/google/google-play-quota-increase-request-form.png)

### Justification

The form then requires additional information depending on your use-case, including a justification for needing an increase. To explain to Google Play the need for the increase, you might describe your situation as:

- 'We are using RevenueCat to manage our subscriptions and we have an increase in subscriptions that is causing us to exceed the API quota.'

### RTDN

As described above, RTDN reduce the number of API requests that RevenueCat needs to use to refresh your purchases. If you have RTDN configured, choose `Yes` for both options.

![Image](/docs_images/platform-resources/google/google-play-quota-increase-request-rtdn.png)

### Products API

RevenueCat uses the Products API endpoints to consume purchases and once to validate the purchase.

### Quota

The specific quota value and time length you request may depend on your situation, including:

- Whether you are using the Subscription & Products API from your own backend.
- Whether you can anticipate predictable marketing efforts or seasonal surges in purchases.

Generally, we find requesting **500k** to be suitable for most apps meeting the threshold, but you can view your exact usage in the [Google Cloud Quotas dashboard](https://cloud.google.com/docs/quota#viewing_all_quota_console).
