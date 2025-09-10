---
title: Google Play's Data Safety
slug: google-plays-data-safety
excerpt: How to fill out the questionnaire
hidden: false
---

[By July 20, 2022](https://support.google.com/googleplay/android-developer/answer/10787469?hl=en), Google requires all developers to declare how their application collects and handles user data. You'll need to ensure you are properly disclosing to your users the way you are using RevenueCat in regards to their data.

## Data collection and security

![](/docs_images/platform-resources/google/google-plays-data-safety-1.png)

### Does your app collect or share any of the required user data types?

Select 'Yes'. RevenueCat collects a customer's purchase history.

### Is all of the user data collected by your app encrypted in transit?

Select 'Yes'. RevenueCat encrypts data in transit.

### Do you provide a way for users to request that their data is deleted?

If selecting 'Yes', ensure your customers have a way to contact your support team to request a data deletion. You will be able to [delete the customer](/dashboard-and-metrics/customer-profile#delete-customer) directly from the RevenueCat dashboard or via [REST API](ref:subscribersapp_user_id).

## Data Types

✅ = Required when using RevenueCat
💡 = May be required when using RevenueCat
❌ = Not required when using RevenueCat
| Data Type | Required? |
| ---------------------------------------------- | -------------------------------------------------------- |
| Location | ❌ RevenueCat does not collect approximate or precise location data, only locale and currency code |
| Personal info, including name or email address | 💡 If you use customer attributes to collect identifiable contact information including name, email address, phone number, etc. |
| Financial Info | ✅ RevenueCat collects purchase history from users. |
| Health and fitness | ❌ RevenueCat does not collect health or fitness data from users |
| Messages | ❌ RevenueCat does not collect information about emails, SMS/MMS messages, or other in-app messages from users |
| Photos or videos | ❌ RevenueCat does not collect photos or videos from users |
| Audio Files | ❌ RevenueCat does not collect video, music, or audio files from users. |
| Files and docs | ❌ RevenueCat does not collect files or docs from users |
| Calendar | ❌ RevenueCat does not collect calendar events from users |
| Contacts | ❌ RevenueCat does not collect contacts from users |
| App activity | ❌ RevenueCat does not collect app activity or other actions performed in the app from users |
| Web browsing | ❌ RevenueCat does not collect browsing history from users |
| App info and performance | ❌ RevenueCat does not collect crash logs or diagnostics. |
| Device and other identifiers | 💡 If you are using integrations that utilize an advertising identifier, like `gpsAdId` and `androidId`. |

## Required Data Types

### Type: Financial Info

If you are using RevenueCat, you must disclose that your app collects 'Purchase history' information from the Data types section in Google Play Console.

![](/docs_images/platform-resources/google/google-plays-data-safety-2.png)

#### 1. Is this data collected, shared, or both?

This data is collected by RevenueCat. If you are using integrations set up between RevenueCat and third parties that are not considered service providers, you may need to disclose "Shared" here as well.

![](/docs_images/platform-resources/google/google-plays-data-safety-3.png)

#### 2. Is this data processed ephemerally?

Select 'No'.

![](/docs_images/platform-resources/google/google-plays-data-safety-4.png)

#### Is this data required for your app, or can users choose whether it's collected?

This data collection is required and cannot be turned off.

![](/docs_images/platform-resources/google/google-plays-data-safety-5.png)

### Why is this user data collected? / Why is this user data shared?

Select the 'App functionality' and 'Analytics' checkboxes.

![](/docs_images/platform-resources/google/google-plays-data-safety-6.png)

## What's Next

After making your data safety selections, Google will show a preview of your app's privacy section. If you have chosen Financial Info as described above, your privacy details should look something like this:

![](/docs_images/platform-resources/google/google-plays-data-safety-7.png)

If you're ready to submit your app to App Review, head over to our [Launch Checklist](/test-and-launch/launch-checklist) doc for more information about preparing your app for submission.
