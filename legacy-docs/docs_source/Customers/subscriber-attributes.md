---
title: Subscriber Attributes
slug: subscriber-attributes
excerpt: Adding custom properties to users in RevenueCat
hidden: false
---
Subscriber attributes are useful for storing additional, structured information on a user. For example, you could store your user's email address and additional system identifiers directly in RevenueCat. Attributes will not be seen by your users unless you choose to explicitly show them yourself.

> 📘 
> 
> Subscriber attributes are only synced with RevenueCat servers when Purchases.configure() is called, app backgrounded, and when purchases are made or restored.

# Setting Attributes

Subscriber attributes can be set through the SDK by passing a dictionary of strings to the `setAttributes()` method on the shared Purchases instance. 

[block:file]
[
  {
    "language": "swift",
    "name": "Swift",
    "file": "code_blocks/👥 Customers/subscriber-attributes_1.swift"
  },
  {
    "language": "objectivec",
    "name": "Objective-C",
    "file": "code_blocks/👥 Customers/subscriber-attributes_2.m"
  },
  {
    "language": "kotlin",
    "name": "Kotlin",
    "file": "code_blocks/👥 Customers/subscriber-attributes_3.kt"
  },
  {
    "language": "java",
    "name": "Java",
    "file": "code_blocks/👥 Customers/subscriber-attributes_4.java"
  },
  {
    "language": "javascript",
    "name": "Flutter",
    "file": "code_blocks/👥 Customers/subscriber-attributes_5.js"
  },
  {
    "language": "javascript",
    "name": "React Native",
    "file": "code_blocks/👥 Customers/subscriber-attributes_6.js"
  },
  {
    "language": "csharp",
    "name": "Unity",
    "file": "code_blocks/👥 Customers/subscriber-attributes_7.cs"
  }
]
[/block]



> 🚧 
> 
> Since subscriber attributes are writable using a [public key](doc:authentication) they should not be used for managing secure or sensitive information such as subscription status, coins, etc.

## Restrictions

You can specify up to 50 attributes, with key names up to 40 characters long and values up to 500 characters long. Keys cannot start with `$` unless it's for one of the reserved attributes below.

**Attribute key checklist:**  
✅ Key does not contain whitespace  
✅ Key must start with a letter for non-reserved attributes or "$" for reserved attributes  
✅ Key does not include any non-alphanumeric characters except `-` and `_`  
✅ Key is not more than 40 characters  
✅ Value is not more than 500 characters  
✅ No more than 50 custom attributes

## Reserved attributes

Attribute keys beginning with `$` are reserved for RevenueCat. The current list of reserved keys are below:

### General

| Key                      | Description                                                  |
| :----------------------- | :----------------------------------------------------------- |
| `$displayName`           | Name that should be used to reference the user               |
| `$apnsTokens`            | Apple push notification tokens for the user.                 |
| `$fcmTokens`             | Google push notification tokens for the user.                |
| `$attConsentStatus`      | Apple App Tracking Transparency consent status for the user. |
| `$ipAddress`             | Ip Address for the user.                                     |
| `$clevertapId `          | Clever Tap ID for the user.                                  |
| `$idfa`                  | iOS advertising identifier UUID.                             |
| `$idfv`                  | iOS vender identifier UUID.                                  |
| `$gpsAdId`               | The advertising ID that is provided by Google Play services. |
| `$androidId`             | Android device identifier.                                   |
| `$amazonAdId`            | Amazon Advertising ID.                                       |
| `$adjustId`              | The unique Adjust identifier for the user.                   |
| `$amplitudeDeviceId`     | The Amplitude Device ID.                                     |
| `$amplitudeUserId`       | The Amplitude User ID.                                       |
| `$appsflyerId`           | Appsflyer Id. The unique Appsflyer identifier for the user.  |
| `$brazeAliasName`        | The Braze 'alias_name' in User Alias Object.                 |
| `$brazeAliasLabel`       | The Braze 'alias_label' in User Alias Object.                |
| `$clevertapId`           | The CleverTap ID for the user.                               |
| `$fbAnonId`              | The Facebook Anonymous ID for the user.                      |
| `$attConsentStatus`      | Apple App Tracking Transparency consent status for the user. |
| `$mparticleId`           | The unique mParticle user identifier (mpid).                 |
| `$onesignalId`           | The OneSignal Player Id for the user.                        |
| `$airshipChannelId`      | The Airship channel ID for the user.                         |
| `$iterableUserId`        | The Iterable ID for the user.                                |
| `$iterableCampaignId`    | The Iterable campaign ID.                                    |
| `$iterableTemplateId`    | The Iterable template ID.                                    |
| `$firebaseAppInstanceId` | The Firebase instance identifier.                            |
| `$mixpanelDistinctId`    | The Mixpanel user identifier.                                |
| `$ip`                    | The IP address of the device.                                |
| `$email`                 | Email address for the user.                                  |
| `$phoneNumber`           | Phone number for the user.                                   |

> 🚧 attConsentStatus is populated regardless of requesting any permission
> 
> The RevenueCat SDK sends the current ATT status for the `$attConsentStatus` subscriber attribute regardless of if you are or aren't requesting any ATT permission. So just as a heads-up, you can expect to see this attribute filled.
> 
> Note: The RevenueCat SDK reads the current App Tracking Transparency Consent Status for the user, but will not modify it or request for further permission.
> 
> You may see the following as a response from this attribute: 
> 
> - `restricted` - Can be returned if the user is using a mobile device management profile that disallows some aspects of tracking regardless of consent. This might be returned even if you never ask for permissions.
> - `denied` - Can be returned if the user’s phone has set “Ask Apps Not To Track” in OS Settings or denied access for the specific app.
> - `accepted` - Returned if you ask for permission and the permission gets accepted by the user. 
> - `unknown` - The user hasn’t set “Ask Apps Not to Track” in OS Settings, and you have never asked the user for consent to track activity.

### Device Identifiers

| Key          | Description                   |
| :----------- | :---------------------------- |
| `$idfa`      | Apple advertising identifier  |
| `$idfv`      | Apple vendor identifier       |
| `$gpsAdId`   | Google advertising identifier |
| `$androidId` | Android device identifier     |
| `$ip`        | IP Address                    |

> 📘 Device identifiers can't be changed once set
> 
> Once a device identifier is set for a subscriber, it can't be changed in order to keep these identifiers associated with the original installation. This allows RevenueCat to send events generated by a particular device to downstream integrations with a consistent identifier unaffected by uninstalls and reinstalls.

### Third-party Identifiers

| Key                      | Description                                                                                   |
| :----------------------- | :-------------------------------------------------------------------------------------------- |
| `$adjustId`              | [Adjust](https://www.adjust.com/) user identifier                                             |
| `$amplitudeDeviceId`     | [Amplitude](https://amplitude.com/) device identifier                                         |
| `$amplitudeUserId`       | [Amplitude](https://amplitude.com/) user identifier                                           |
| `$appsflyerId`           | [Appsflyer](https://www.appsflyer.com/) user identifier                                       |
| `$fbAnonId`              | [Facebook SDK](https://developers.facebook.com/docs/apis-and-sdks/) anonymous user identifier |
| `$firebaseAppInstanceId` | [Firebase](doc:firebase-integration) instance identifier                                      |
| `$iterableUserId`        | [Iterable](https://iterable.com/) user identifier                                             |
| `$mixpanelDistinctId`    | [Mixpanel](https://mixpanel.com) user identifier                                              |
| `$mparticleId`           | [mParticle](https://www.mparticle.com/) user identifier                                       |
| `$onesignalId`           | [OneSignal](https://onesignal.com/) player identifier                                         |
| `$clevertapId`           | [CleverTap](https://clevertap.com/) user identifier                                           |
| `$airshipChannelId`      | [Airship](https://www.airship.com/) channel identifier                                        |

### Braze User Alias Object

| Key                | Description                                                                                                   |
| :----------------- | :------------------------------------------------------------------------------------------------------------ |
| `$brazeAliasName`  | Braze 'alias_name' in [User Alias Object](https://www.braze.com/docs/api/objects_filters/user_alias_object/)  |
| `$brazeAliasLabel` | Braze 'alias_label' in [User Alias Object](https://www.braze.com/docs/api/objects_filters/user_alias_object/) |

### Iterable Data

| Key                   |
| :-------------------- |
| `$iterableCampaignId` |
| `$iterableTemplateId` |

### Attribution Data

| Key            |
| :------------- |
| `$mediaSource` |
| `$campaign`    |
| `$adGroup`     |
| `$ad`          |
| `$keyword`     |
| `$creative`    |

> 📘 
> 
> If you have access to install attribution data, you can set it using the reserved keys above. RevenueCat itself is not an attribution network and can not automatically populate this information.
> 
> Once attribution data is set for a subscriber, it can't be changed. This way attribution data can be associated with the original installation without getting overwritten.

Reserved attributes can be written directly by setting the key (don't forget the `$` prefix) or with special helper methods:

[block:file]
[
  {
    "language": "swift",
    "name": "Swift",
    "file": "code_blocks/👥 Customers/subscriber-attributes_8.swift"
  },
  {
    "language": "objectivec",
    "name": "Objective-C",
    "file": "code_blocks/👥 Customers/subscriber-attributes_23.m"
  },
  {
    "language": "kotlin",
    "name": "Kotlin",
    "file": "code_blocks/👥 Customers/subscriber-attributes_9.kt"
  },
  {
    "language": "javascript",
    "name": "Flutter",
    "file": "code_blocks/👥 Customers/subscriber-attributes_10.js"
  },
  {
    "language": "javascript",
    "name": "React Native",
    "file": "code_blocks/👥 Customers/subscriber-attributes_11.js"
  },
  {
    "language": "csharp",
    "name": "Unity",
    "file": "code_blocks/👥 Customers/subscriber-attributes_12.cs"
  }
]
[/block]



## Setting push tokens

Push tokens can be used to engage with your users through Apple apns or Google cloud messaging. These can be saved in RevenueCat through system callbacks after the user accepts the push notification permissions in your app.

[block:file]
[
  {
    "language": "swift",
    "name": "Swift",
    "file": "code_blocks/👥 Customers/subscriber-attributes_13.swift"
  },
  {
    "language": "objectivec",
    "name": "Objective-C",
    "file": "code_blocks/👥 Customers/subscriber-attributes_24.m"
  },
  {
    "language": "kotlin",
    "name": "Kotlin",
    "file": "code_blocks/👥 Customers/subscriber-attributes_14.kt"
  },
  {
    "language": "javascript",
    "name": "Flutter",
    "file": "code_blocks/👥 Customers/subscriber-attributes_15.js"
  },
  {
    "language": "javascript",
    "name": "React Native",
    "file": "code_blocks/👥 Customers/subscriber-attributes_16.js"
  },
  {
    "language": "csharp",
    "name": "Unity",
    "file": "code_blocks/👥 Customers/subscriber-attributes_17.cs"
  }
]
[/block]



# Deleting Attributes

Any attribute can be cleared by passing `null` or an empty string as the key value. Individual attributes can also be cleared for a specific user in their [customer view](doc:customers).

[block:file]
[
  {
    "language": "swift",
    "name": "Swift",
    "file": "code_blocks/👥 Customers/subscriber-attributes_18.swift"
  },
  {
    "language": "objectivec",
    "name": "Objective-C",
    "file": "code_blocks/👥 Customers/subscriber-attributes_25.m"
  },
  {
    "language": "kotlin",
    "name": "Kotlin",
    "file": "code_blocks/👥 Customers/subscriber-attributes_19.kt"
  },
  {
    "language": "javascript",
    "name": "Flutter",
    "file": "code_blocks/👥 Customers/subscriber-attributes_20.js"
  },
  {
    "language": "javascript",
    "name": "React Native",
    "file": "code_blocks/👥 Customers/subscriber-attributes_21.js"
  },
  {
    "language": "csharp",
    "name": "Unity",
    "file": "code_blocks/👥 Customers/subscriber-attributes_22.cs"
  }
]
[/block]



# Reading Attributes

You can access subscriber attributes through the [REST API](https://docs.revenuecat.com/reference) using a secret key, in [webhooks](doc:webhooks), and through analytics integrations ([Amplitude](doc:amplitude), [Mixpanel](doc:mixpanel), [Segment](doc:segment)). The [customer view dashboard](doc:customers) will also show a list of attributes for the individual user that you can edit.

![](https://files.readme.io/2413523-app.revenuecat.com_customers_aec1bada_15343510_3.png)



> 📘 
> 
> Subscriber attributes are write-only from the SDK. Reading attributes should only be done server-side through the webhooks or REST API.
> 
> Subscriber attributes are also included with transaction data for [Scheduled Data Exports](https://docs.revenuecat.com/docs/scheduled-data-exports).

# Next Steps

- Enrich your app by [reacting to the user's current subscription status ](doc:purchaserinfo)