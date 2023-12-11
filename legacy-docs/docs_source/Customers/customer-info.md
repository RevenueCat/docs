---
title: Checking Subscription Status
slug: customer-info
excerpt: Determining the subscription status for a user.
hidden: false
---
RevenueCat makes it easy to determine subscription status and more with the _Purchases SDK_ and [REST API](https://docs.revenuecat.com/reference). 

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8aa5ecd-Screen_Shot_2019-08-19_at_8.44.10_AM.png",
        "Screen Shot 2019-08-19 at 8.44.10 AM.png",
        509
      ],
      "align": "center",
      "sizing": "smart"
    }
  ]
}
[/block]

## Get User Information

The <<glossary:CustomerInfo>> object contains all of the purchase and subscription data available about the user. This object is updated whenever a purchase or restore occurs and periodically throughout the lifecycle of your app. The latest information can always be retrieved by calling `getCustomerInfo()`:

[block:file]
[
  {
    "language": "swift",
    "name": "",
    "file": "code_blocks/👥 Customers/customer-info_1.swift"
  },
  {
    "language": "objectivec",
    "name": "",
    "file": "code_blocks/👥 Customers/customer-info_2.m"
  },
  {
    "language": "kotlin",
    "name": "",
    "file": "code_blocks/👥 Customers/customer-info_3.kt"
  },
  {
    "language": "java",
    "name": "",
    "file": "code_blocks/👥 Customers/customer-info_4.java"
  },
  {
    "language": "javascript",
    "name": "Flutter",
    "file": "code_blocks/👥 Customers/customer-info_5.js"
  },
  {
    "language": "javascript",
    "name": "React Native",
    "file": "code_blocks/👥 Customers/customer-info_6.js"
  },
  {
    "language": "javascript",
    "name": "Cordova",
    "file": "code_blocks/👥 Customers/customer-info_7.js"
  },
  {
    "language": "typescript",
    "name": "Capacitor",
    "file": "code_blocks/👥 Customers/customer-info_get_customer_info_capacitor.ts"
  },
  {
    "language": "csharp",
    "name": "Unity",
    "file": "code_blocks/👥 Customers/customer-info_8.cs"
  }
]
[/block]

It's safe to call `getCustomerInfo()` frequently throughout your app. Since the SDK updates and caches the latest <<glossary:CustomerInfo>> when the app becomes active, the completion block won't need to make a network request in most cases. 

> 📘 Working with the cache
> 
> The SDK caches the user's subscription information to reduce your app's reliance on the network. Users who unlock entitlements will be able to access them even without an internet connection. The SDK will update the cache if it's older than 5 minutes, but only if you call `getCustomerInfo()`, make a purchase, or restore purchases, so it's a good idea to call `getCustomerInfo()` any time a user accesses premium content.

The `CustomerInfo` object gives you access to the following information about a user:

[block:parameters]
{
  "data": {
    "h-0": "Name",
    "h-1": "Description",
    "0-0": "Request Date",
    "0-1": "The server date when the current <<glossary:CustomerInfo>> object was fetched. This is affected by the cache on device so you should not use it when you need the current time to calculate info such as time elapsed since purchase date. For that you should use device time.",
    "1-0": "Original App User ID",
    "1-1": "The original App User ID recorded for this user. May be the same as their current App User ID. See our [Identifying Users](doc:user-ids) guide for more information.",
    "2-0": "First Seen",
    "2-1": "The date this user was first seen in RevenueCat. This is the install date in most cases",
    "3-0": "Original Application Version",
    "3-1": "iOS only. The version number for the first version of the app this user downloaded. Will be `nil` unless a receipt has been recorded for the user through a purchase, restore, or import.  \n  \nNote in sandbox this will always be \"1.0\"  \n  \nUseful for [migrating existing apps to subscriptions](doc:migrating-existing-subscriptions).",
    "4-0": "Original Purchase Date",
    "4-1": "iOS only. The date that the app was first purchased/downloaded by the user. Will be `nil` if no receipt is recorded for the user. Useful for [migrating existing apps to subscriptions](doc:migrating-existing-subscriptions).",
    "5-0": "Management URL",
    "5-1": "URL to manage the active subscription of the user. If the user has an active iOS subscription, this will point to the App Store, if the user has an active Play Store subscription it will point there. For Stripe subscriptions, there is no Management URL.  \n  \nIf there are no active subscriptions it will be null.  \n  \nIf the user has multiple active subscriptions for different platforms, this will take the value of the OS in the X-Platform header into consideration:  \n﻿- If the request was made on an OS for which there are active subscriptions, this will return the URL for the store that matches the header.  \n﻿- If the request was made on a different OS or the OS was not included in the X-Platform header, this will return the URL for the store of the subscription with the farthest future expiration date.",
    "6-0": "All Purchased Product Identifiers",
    "6-1": "An array of product identifiers purchased by the user regardless of expiration.",
    "7-0": "Non Consumable Purchases",
    "7-1": "An array of all the non-consumable product identifiers purchased by the user.",
    "8-0": "Active Subscriptions",
    "8-1": "An array of subscription product identifiers that are active. You should be using [entitlement](doc:entitlements) though.",
    "9-0": "Entitlements",
    "9-1": "`EntitlementInfo` objects that contain information about the user's entitlements, such as subscription state. [See more below](doc:customer-info#get-entitlement-information)."
  },
  "cols": 2,
  "rows": 10,
  "align": [
    "left",
    "left"
  ]
}
[/block]

## Get Entitlement Information

The `EntitlementInfo` object gives you access to all of the information about the status of a user's entitlements.

[block:parameters]
{
  "data": {
    "h-0": "Name",
    "h-1": "Description",
    "0-0": "Identifier",
    "0-1": "The entitlement identifier configured in the RevenueCat dashboard.",
    "1-0": "Product Identifier",
    "1-1": "The underlying product identifier that unlocked this entitlement.",
    "2-0": "Is Active",
    "2-1": "Whether or not the user has access to this entitlement.",
    "3-0": "Will Renew",
    "3-1": "Whether or not the entitlement is set to renew at the end of the current period.  \n  \nNote there may be a multiple hour delay between the value of this property and the actual state in the App Store / Play Store.",
    "4-0": "Period Type",
    "4-1": "The period type this entitlement is in, can be one of:  \n- Trial: In a free trial period  \n- Promotional: In a promotional period  \n- Intro: In an introductory price period  \n- Normal: In the default period",
    "5-0": "Latest Purchase Date",
    "5-1": "The latest purchase or renewal date for this entitlement.",
    "6-0": "Original Purchase Date",
    "6-1": "The first date this entitlement was purchased. May be the same as the latest purchase date.",
    "7-0": "Expiration Date",
    "7-1": "The expiration date for the entitlement, can be null for lifetime access. If the period type is trial then this is the trial expiration date.",
    "8-0": "Store",
    "8-1": "The store that unlocked this entitlement, can be one of:  \n- App Store  \n- Mac App Store  \n- Play Store  \n- Amazon Appstore  \n- Stripe  \n- Promotional (RevenueCat)",
    "9-0": "Is Sandbox",
    "9-1": "Whether this entitlement was unlocked from a sandbox or production purchase.",
    "10-0": "Unsubscribe Detected At",
    "10-1": "The date an unsubscribe was detected. An unsubscribe **does not** mean that the entitlement is inactive.  \n  \nNote there may be a multiple hour delay between the value of this property and the actual state in the App Store / Play Store. This delay can be reduced by enabling [Platform Server Notifications](https://docs.revenuecat.com/docs/server-notifications).",
    "11-0": "Billing Issue Detected At",
    "11-1": "The date a billing issue was detected, will be null again once billing issue resolved. A billing issue **does not** mean that the entitlement is inactive.  \n  \nNote there may be a multiple hour delay between the value of this property and the actual state in the App Store / Play Store. This delay can be reduced by enabling [Platform Server Notifications](https://docs.revenuecat.com/docs/server-notifications)."
  },
  "cols": 2,
  "rows": 12,
  "align": [
    "left",
    "left"
  ]
}
[/block]

## Checking If A User Is Subscribed

The subscription status for a user can easily be determined with the `CustomerInfo` and `EntitlementInfo` objects.

For most apps that only have one entitlement, the `isActive` status can be quickly checked for your entitlement ID. 

[block:file]
[
  {
    "language": "swift",
    "name": "",
    "file": "code_blocks/👥 Customers/customer-info_9.swift"
  },
  {
    "language": "objectivec",
    "name": "",
    "file": "code_blocks/👥 Customers/customer-info_10.m"
  },
  {
    "language": "kotlin",
    "name": "",
    "file": "code_blocks/👥 Customers/customer-info_11.kt"
  },
  {
    "language": "java",
    "name": "",
    "file": "code_blocks/👥 Customers/customer-info_12.java"
  },
  {
    "language": "javascript",
    "name": "Flutter",
    "file": "code_blocks/👥 Customers/customer-info_13.js"
  },
  {
    "language": "javascript",
    "name": "React Native",
    "file": "code_blocks/👥 Customers/customer-info_14.js"
  },
  {
    "language": "javascript",
    "name": "Capacitor/Cordova",
    "file": "code_blocks/👥 Customers/customer-info_15.js"
  },
  {
    "language": "csharp",
    "name": "Unity",
    "file": "code_blocks/👥 Customers/customer-info_16.cs"
  }
]
[/block]

If your app has multiple entitlements and you need to check if a user is subscribed to at least one you can also check for the entitlement Id in the `active` dictionary of `EntitlementInfo` objects.

[block:file]
[
  {
    "language": "swift",
    "name": "",
    "file": "code_blocks/👥 Customers/customer-info_17.swift"
  },
  {
    "language": "objectivec",
    "name": "",
    "file": "code_blocks/👥 Customers/customer-info_18.m"
  },
  {
    "language": "kotlin",
    "name": "",
    "file": "code_blocks/👥 Customers/customer-info_19.kt"
  },
  {
    "language": "java",
    "name": "",
    "file": "code_blocks/👥 Customers/customer-info_20.java"
  },
  {
    "language": "javascript",
    "name": "Flutter",
    "file": "code_blocks/👥 Customers/customer-info_21.js"
  },
  {
    "language": "javascript",
    "name": "React Native",
    "file": "code_blocks/👥 Customers/customer-info_22.js"
  },
  {
    "language": "javascript",
    "name": "Capacitor/Cordova",
    "file": "code_blocks/👥 Customers/customer-info_23.js"
  },
  {
    "language": "csharp",
    "name": "Unity",
    "file": "code_blocks/👥 Customers/customer-info_24.cs"
  }
]
[/block]

It's important to note that <<glossary:CustomerInfo>> will be empty if no purchases have been made and no transactions have been synced. This means that entitlements may not exist in CustomerInfo even if they have been set up in the RevenueCat dashboard.

## Listening For CustomerInfo Updates

Since _Purchases_ SDK works seamlessly on any platform, a user's <<glossary:CustomerInfo>> may change from a variety of sources. You can respond to any changes in CustomerInfo by conforming to an optional delegate method, `purchases:receivedUpdated:`. This will fire whenever we receive a _change_ in CustomerInfo _on the current device_ and you should expect it to be called at launch and throughout the life of the app.

CustomerInfo updates are not pushed to your app from the RevenueCat backend, updates can only happen from an outbound network request to RevenueCat.

Depending on your app, it may be sufficient to ignore the delegate and simply handle changes to customer information the next time your app is launched. Or throughout your app as you request new `CustomerInfo` objects.

[block:file]
[
  {
    "language": "swift",
    "name": "",
    "file": "code_blocks/👥 Customers/customer-info_25.swift"
  },
  {
    "language": "objectivec",
    "name": "",
    "file": "code_blocks/👥 Customers/customer-info_26.m"
  },
  {
    "language": "kotlin",
    "name": "",
    "file": "code_blocks/👥 Customers/customer-info_27.kt"
  },
  {
    "language": "java",
    "name": "",
    "file": "code_blocks/👥 Customers/customer-info_28.java"
  },
  {
    "language": "javascript",
    "name": "Flutter",
    "file": "code_blocks/👥 Customers/customer-info_29.js"
  },
  {
    "language": "javascript",
    "name": "React Native",
    "file": "code_blocks/👥 Customers/customer-info_30.js"
  },
  {
    "language": "javascript",
    "name": "Cordova",
    "file": "code_blocks/👥 Customers/customer-info_31.js"
  },
  {
    "language": "typescript",
    "name": "Capacitor",
    "file": "code_blocks/👥 Customers/customer-info_add_listener_capacitor.ts"
  },
  {
    "language": "csharp",
    "name": "Unity",
    "file": "code_blocks/👥 Customers/customer-info_32.cs"
  }
]
[/block]

## Web Apps

If you also have a web app, or need to get a user's subscription status from outside of the _Purchases SDK_, you should use the REST API. You can read the full API reference [here](https://docs.revenuecat.com/reference).

[block:file]
[
  {
    "language": "curl",
    "name": "",
    "file": "code_blocks/👥 Customers/customer-info_33.curl"
  }
]
[/block]

## Handling Refunds

RevenueCat can handle refunds across all platforms for both subscription and non-subscription products. As soon as RevenueCat detects a refund, the <<glossary:CustomerInfo>> will be updated to reflect the correct entitlement status - no action required on your part! If you have questions about refunds, take a look at our [community article](https://community.revenuecat.com/general-questions-7/how-do-i-issue-a-refund-115) covering the topic.


## Next Steps

- Once you're ready to test your integration, you can follow our guides on [testing and debugging ](doc:debugging)
