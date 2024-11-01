---
title: Apple App Privacy
slug: apple-app-privacy
excerpt: How to fill out the questionnaire
hidden: false
---

Starting December 8, 2020, Apple requires a privacy disclosure for all new apps and app updates. As RevenueCat is a third-party to your app, you’ll need to ensure you are properly disclosing to your users the ways you are using RevenueCat in regards to their data.

## Data Types

✅ = Required when using RevenueCat  
💡 = May be required when using RevenueCat  
❌ = Not required when using RevenueCat

| Data Type                                                                                      | Required?                                                                                                                                                                                                                 |
| ---------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contact Info, including name or email address                                                  | 💡 If you use customer attributes to collect identifiable contact information including name, email address, or phone number                                                                                              |
| Health & Fitness                                                                               | ❌ RevenueCat does not collect health or fitness data from users                                                                                                                                                          |
| Financial Info                                                                                 | ❌ RevenueCat does not collect payment information from users                                                                                                                                                             |
| Location                                                                                       | ❌ RevenueCat does not collect precise or coarse location data, only locale and currency code                                                                                                                             |
| Sensitive Info                                                                                 | ❌ RevenueCat does not collect sensitive information including racial or ethnic data, political opinions, or biometric data from users                                                                                    |
| Contacts                                                                                       | ❌ RevenueCat does not collect address books or contact lists from users                                                                                                                                                  |
| Browsing History                                                                               | ❌ RevenueCat does not collect browsing history from users                                                                                                                                                                |
| Search History                                                                                 | ❌ RevenueCat does not collect search history from users                                                                                                                                                                  |
| [Identifiers](/platform-resources/apple-platform-resources/apple-app-privacy#type-identifiers) | 💡 If you are identifying users with a custom app user ID, you will need to select 'User ID'<br />💡 If you are using integrations that utilize an advertising identifier, like IDFA, you will need to select 'Device ID' |
| [Purchases](/platform-resources/apple-platform-resources/apple-app-privacy#type-purchases)     | ✅ RevenueCat collects purchase history from users                                                                                                                                                                        |
| Usage Data                                                                                     | 💡 If you are using analytics SDK's such as Mixpanel, Firebase, PostHog, or Amplitude, this may be required                                                                                                               |
| Diagnostics                                                                                    | ❌ RevenueCat does not collect device diagnostic information                                                                                                                                                              |

## Required Data Types

### Type: Purchases

If you are using RevenueCat, you must disclose that your app collects ‘Purchases’ information from the App Privacy tab in App Store Connect.

![Screen Shot 2020-11-10 at 1.18.06 PM.png](/images/2232c73-Screen_Shot_2020-11-10_at_1.18.06_PM_b358ca0644f6c521ffff666d8d3f7206.png)

#### 1. Purchase History Usage

At the **bare minimum**, you must select the following options for 'Purchase History':

![Screen Shot 2020-11-11 at 9.48.00 AM.png](/images/2330c00-Screen_Shot_2020-11-11_at_9.48.00_AM_24c170525027cbac4606aebb0d1aeca8.png)

**All RevenueCat users must select these two options.**

- Selecting ‘Analytics’ ensures compliance for RevenueCat’s dashboard features including Customer History, Charts, and Experiments.
- Selecting ‘App Functionality’ ensures compliance for RevenueCat’s receipt validation in order to prevent fraud, as well as enabling features via Entitlements.

:::info
If you are using RevenueCat for any of the other options listed, such as collecting data for Third-Party Advertising,you will need to select those options as well.
:::

After selecting these options for Purchase History, click ‘Next’.

#### 2. Purchase History Linked to Identity

Apple will now ask if you are linking purchase history to a user’s identity. If you are using RevenueCat’s anonymous app user ID’s, and do not have a way to identify individual users, you can select ‘No’.

If you are using an app user ID that can be tied to a user’s email address or other contact information via your own server or other third-parties, you should select ‘Yes’.

![Screen Shot 2020-11-10 at 1.23.21 PM.png](/images/1520bb4-Screen_Shot_2020-11-10_at_1.23.21_PM_f3e428ea3afe309e1694d915f409e7fc.png)

#### 3. Purchase History User Tracking

Finally, to indicate if purchase history data will be used for tracking purposes, you will need to read Apple’s examples and determine if your app meets their definitions of tracking.

RevenueCat, as a third-party, does not inherently use purchase history to track users across different apps for advertising. If you are using integrations or other SDK’s that do this, you may need to disclose that here.

![Screen Shot 2020-11-10 at 1.40.53 PM.png](/images/e9c42f6-Screen_Shot_2020-11-10_at_1.40.53_PM_c0950e0272874f05f955bd80e868518d.png)

### Type: Identifiers

If you selected 'Yes' to linking purchase history to a user's identity, you will likely need to disclose which user identifiers you use in your app.

![Screen Shot 2020-11-10 at 2.01.59 PM.png](/images/191ea58-Screen_Shot_2020-11-10_at_2.01.59_PM_f5cabe0552bb9055fd9ba9f0afdac68f.png)

If you are [identifying users](/customers/user-ids) with a custom app user ID, you will need to select 'User ID'.

If you are using integrations that utilize an advertising identifier, like IDFA, you will need to select 'Device ID'.

After making your selections, you'll need to indicate how the data is used similar to the Purchases section.

## What's Next

After making your privacy selections, Apple will show a preview of your app's privacy section. If you have chosen Purchases and Identifiers as described above, your privacy details should look something like this:

![Screen Shot 2020-11-11 at 11.30.35 AM.png](/images/8906e83-Screen_Shot_2020-11-11_at_11.30.35_AM_029440ef978daef4e98c0c0c22991b8b.png)

If you're ready to submit your app to App Review, head over to our [Launch Checklist](/test-and-launch/launch-checklist) doc for more information about preparing your app for submission.
