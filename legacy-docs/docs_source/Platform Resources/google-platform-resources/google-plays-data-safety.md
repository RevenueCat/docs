---
title: Google Play's Data Safety
slug: google-plays-data-safety
excerpt: How to fill out the questionnaire
hidden: false
---
[By July 20, 2022](https://support.google.com/googleplay/android-developer/answer/10787469?hl=en), Google requires all developers to declare how their application collects and handles user data. You'll need to ensure you are properly disclosing to your users the way you are using RevenueCat in regards to their data.

# Data collection and security
![](https://files.readme.io/53e2217-Screen_Shot_2021-11-24_at_11.57.26_AM.png "Screen Shot 2021-11-24 at 11.57.26 AM.png")
### Does your app collect or share any of the required user data types?
Select 'Yes'. RevenueCat collects a customer's purchase history. 

### Is all of the user data collected by your app encrypted in transit?
Select 'Yes'. RevenueCat encrypts data in transit.

### Do you provide a way for users to request that their data is deleted?
If selecting 'Yes', ensure your customers have a way to contact your support team to request a data deletion. You will be able to [delete the customer](doc:manage-users) directly from the RevenueCat dashboard or via [REST API](ref:subscribersapp_user_id).

# Data Types
✅ = Required when using RevenueCat
💡 = May be required when using RevenueCat
❌ = Not required when using RevenueCat
[block:parameters]
{
  "data": {
    "h-0": "Data Type",
    "h-1": "Required?",
    "0-0": "Location",
    "1-0": "Personal info, including name or email address",
    "2-0": "Financial Info",
    "3-0": "Health and fitness",
    "4-0": "Messages",
    "5-0": "Photos or videos",
    "6-0": "Audio Files",
    "7-0": "Files and docs",
    "8-0": "Calendar",
    "9-0": "Contacts",
    "10-0": "App activity",
    "11-0": "Web browsing",
    "12-0": "App info and performance",
    "13-0": "Device and other identifiers",
    "3-1": "❌  RevenueCat does not collect health or fitness data from users",
    "2-1": "✅  RevenueCat collects purchase history from users.",
    "11-1": "❌  RevenueCat does not collect browsing history from users",
    "13-1": "💡 If you are using integrations that utilize an advertising identifier, like `gpsAdId` and `androidId`.",
    "1-1": "💡 If you use subscriber attributes to collect identifiable contact information including name, email address, phone number, etc.",
    "0-1": "❌  RevenueCat does not collect approximate or precise location data, only locale and currency code",
    "4-1": "❌  RevenueCat does not collect information about emails, SMS/MMS messages, or other in-app messages from users",
    "5-1": "❌  RevenueCat does not collect photos or videos from user",
    "6-1": "❌  RevenueCat does not collect video, music, or audio files from users.",
    "7-1": "❌  RevenueCat does not collect files or docs from users",
    "8-1": "❌  RevenueCat does not collect calendar events from users",
    "9-1": "❌  RevenueCat does not collect contacts from users",
    "10-1": "❌  RevenueCat does not collect app activity or other actions performed in the app from users",
    "12-1": "❌  RevenueCat does not collect crash logs or diagnostics."
  },
  "cols": 2,
  "rows": 14
}
[/block]
# Required Data Types
## Type: Financial Info
If you are using RevenueCat, you must disclose that your app collects 'Purchase history' information from the Data types section in Google Play Console. 
![](https://files.readme.io/6652cde-Screen_Shot_2021-11-24_at_11.51.40_AM.png "Screen Shot 2021-11-24 at 11.51.40 AM.png")
### 1. Is this data collected, shared, or both?
This data is collected by RevenueCat. If you are using integrations set up between RevenueCat and third parties that are not considered service providers, you may need to disclose "Shared" here as well. 
![](https://files.readme.io/0951b20-Screen_Shot_2021-11-30_at_2.00.25_PM.png "Screen Shot 2021-11-30 at 2.00.25 PM.png")
### 2. Is this data processed ephemerally?
Select 'No'.
![](https://files.readme.io/ca221b7-Screen_Shot_2021-11-24_at_11.22.03_AM.png "Screen Shot 2021-11-24 at 11.22.03 AM.png")
### Is this data required for your app, or can users choose whether it's collected?
This data collection is required and cannot be turned off.
![](https://files.readme.io/7fc7ea1-Screen_Shot_2021-11-24_at_11.23.20_AM.png "Screen Shot 2021-11-24 at 11.23.20 AM.png")
###Why is this user data collected? / Why is this user data shared?
Select the 'App functionality' and 'Analytics' checkboxes.
![](https://files.readme.io/a45624a-Screen_Shot_2021-11-24_at_11.09.13_AM.png "Screen Shot 2021-11-24 at 11.09.13 AM.png")
# What's Next
After making your data safety selections, Google will show a preview of your app's privacy section. If you have chosen Financial Info as described above, your privacy details should look something like this: 
![](https://files.readme.io/46848c5-Screen_Shot_2021-11-30_at_2.11.47_PM.png "Screen Shot 2021-11-30 at 2.11.47 PM.png")
If you're ready to submit your app to App Review, head over to our [Launch Checklist](doc:launch-checklist)  doc for more information about preparing your app for submission.