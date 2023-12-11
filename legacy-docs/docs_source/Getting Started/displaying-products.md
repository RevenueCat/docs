---
title: Displaying Products
slug: displaying-products
excerpt: Build dynamic paywalls and control available products remotely
hidden: false
---
If you've [configured Offerings](doc:entitlements) in RevenueCat, you can control which products are shown to users without requiring an app update. Building paywalls that are dynamic and can react to different product configurations gives you maximum flexibility to make remote updates.

![](https://files.readme.io/edbe93c-Screen_Shot_2019-09-20_at_8.42.23_AM.png "Screen Shot 2019-09-20 at 8.42.23 AM.png")



> 📘 
> 
> Before products and offerings can be fetched from RevenueCat, be sure to initialize the Purchases SDK by following our [Quickstart](doc:getting-started) guide.

# Fetching Offerings

Offerings are fetched through the SDK based on their [configuration](doc:entitlements) in the RevenueCat dashboard.

The `getOfferings` method will fetch the Offerings from RevenueCat. These are pre-fetched in most cases on app launch, so the completion block to get offerings won't need to make a network request in most cases. 

[block:file]
[
  {
    "language": "swift",
    "name": "Swift",
    "file": "projects/iOS/DocsTester/Sources/DocsTester/DocsTester.swift",
    "region": "Displaying products"
  },
  {
    "language": "objectivec",
    "name": "Objective-C",
    "file": "code_blocks/🚀 Getting Started/displaying-products_2.m"
  },
  {
    "language": "kotlin",
    "name": "",
    "file": "code_blocks/🚀 Getting Started/displaying-products_3.kt"
  },
  {
    "language": "java",
    "name": "",
    "file": "code_blocks/🚀 Getting Started/displaying-products_4.java"
  },
  {
    "language": "javascript",
    "name": "Flutter",
    "file": "code_blocks/🚀 Getting Started/displaying-products_5.js"
  },
  {
    "language": "javascript",
    "name": "React Native",
    "file": "code_blocks/🚀 Getting Started/displaying-products_6.js"
  },
  {
    "language": "javascript",
    "name": "Cordova",
    "file": "code_blocks/🚀 Getting Started/displaying-products_7.js"
  },
  {
    "language": "typescript",
    "name": "Capacitor",
    "file": "code_blocks/🚀 Getting Started/displaying-products_get_offerings_capacitor.ts"
  },
  {
    "language": "csharp",
    "name": "Unity",
    "file": "code_blocks/🚀 Getting Started/displaying-products_8.cs"
  }
]
[/block]



> 📘 Offerings, products or available packages empty
> 
> If your offerings, products, or available packages are empty, it's due to some configuration issue in App Store Connect or the Play Console. 
> 
> The most common reasons for this in App Store Connect are an out-of-date 'Paid Applications Agreement' or products not at least in the 'Ready To Submit' state. For Google Play, this usually occurs when the app is not published on a closed track and a valid test user added.
> 
> You can find more info about trouble shooting this issue in our [Help Center](https://support.revenuecat.com/hc/en-us/articles/360041793174).

You must choose one Offering that is the "Default Offering" - which can easily be accessed via the `current` property of the returned offerings for a given customer.

> 📘 What's the difference between a current Offering and a default Offering?
>
> The current Offering for a given customer may change based on the experiment they're enrolled in, any targeting rules they match, or the default Offering of your Project. Your Project's default Offering is the Offering that will be served as "current" when no other conditions apply for that customer.

To change the default Offering of your Project, navigate to the Offerings tab for that Project in the RevenueCat dashboard, and find the Offering you'd like to make default. Then, click on the icon in the Actions column of that Offering to reveal the available options, and click **Make Default** to make the change.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/7508f4b-Screenshot_2023-12-05_at_10.17.25_PM.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


Offerings can be updated at any time, and the changes will go into effect for all users right away.

## Custom Offering identifiers

It's also possible to access other Offerings besides the Default Offering directly by its identifier.

[block:file]
[
  {
    "language": "swift",
    "name": "Swift",
    "file": "projects/iOS/DocsTester/Sources/DocsTester/DocsTester.swift",
    "region": "Custom Offering identifiers"
  },
  {
    "language": "objectivec",
    "name": "Objective-C",
    "file": "code_blocks/🚀 Getting Started/displaying-products_10.m"
  },
  {
    "language": "kotlin",
    "name": "",
    "file": "code_blocks/🚀 Getting Started/displaying-products_11.kt"
  },
  {
    "language": "java",
    "name": "",
    "file": "code_blocks/🚀 Getting Started/displaying-products_12.java"
  },
  {
    "language": "javascript",
    "name": "Flutter",
    "file": "code_blocks/🚀 Getting Started/displaying-products_13.js"
  },
  {
    "language": "javascript",
    "name": "React Native",
    "file": "code_blocks/🚀 Getting Started/displaying-products_14.js"
  },
  {
    "language": "javascript",
    "name": "Cordova",
    "file": "code_blocks/🚀 Getting Started/displaying-products_15.js"
  },
  {
    "language": "typescript",
    "name": "Capacitor",
    "file": "code_blocks/🚀 Getting Started/displaying-products_get_offerings_custom_id_capacitor.ts"
  },
  {
    "language": "csharp",
    "name": "Unity",
    "file": "code_blocks/🚀 Getting Started/displaying-products_16.cs"
  }
]
[/block]



# Displaying Packages

Packages help abstract platform-specific products by grouping equivalent products across iOS, Android, and web. A package is made up of three parts: identifier, type, and underlying store product.

[block:parameters]
{
  "data": {
    "h-0": "Name",
    "h-1": "Description",
    "0-0": "Identifier",
    "0-1": "The package identifier (e.g. `com.revenuecat.app.monthly`)",
    "1-0": "Type",
    "1-1": "The type of the package:  \n- `UNKNOWN`  \n- `CUSTOM`  \n- `LIFETIME`  \n- `ANNUAL`  \n- `SIX_MONTH`  \n- `THREE_MONTH`  \n- `TWO_MONTH`  \n- `MONTHLY`  \n- `WEEKLY`",
    "2-0": "Product",
    "2-1": "The underlying product that is mapped to this package which includes details about the price and duration."
  },
  "cols": 2,
  "rows": 3,
  "align": [
    "left",
    "left"
  ]
}
[/block]

Packages can be access in a few different ways:

1. via the `.availablePackages` property on an Offering.
2. via the duration convenience property on an Offering
3. via the package identifier directly

[block:file]
[
  {
    "language": "swift",
    "name": "Swift",
    "file": "projects/iOS/DocsTester/Sources/DocsTester/DocsTester.swift",
    "region": " Displaying packages"
  },
  {
    "language": "objectivec",
    "name": "",
    "file": "code_blocks/🚀 Getting Started/displaying-products_18.m"
  },
  {
    "language": "kotlin",
    "name": "",
    "file": "code_blocks/🚀 Getting Started/displaying-products_19.kt"
  },
  {
    "language": "javascript",
    "name": "Flutter",
    "file": "code_blocks/🚀 Getting Started/displaying-products_20.js"
  },
  {
    "language": "javascript",
    "name": "React Native",
    "file": "code_blocks/🚀 Getting Started/displaying-products_21.js"
  },
  {
    "language": "javascript",
    "name": "Capacitor/Cordova",
    "file": "code_blocks/🚀 Getting Started/displaying-products_22.js"
  },
  {
    "language": "csharp",
    "name": "Unity",
    "file": "code_blocks/🚀 Getting Started/displaying-products_23.cs"
  }
]
[/block]



### Getting the Product from the Package

Each Package includes an underlying product that includes more information about the price, duration, and other metadata. You can access the product via the `storeProduct` property:

[block:file]
[
  {
    "language": "swift",
    "name": "Swift",
    "file": "projects/iOS/DocsTester/Sources/DocsTester/DocsTester.swift",
    "region": "Getting the Product"
  },
  {
    "language": "objectivec",
    "name": "Objective-C",
    "file": "code_blocks/🚀 Getting Started/displaying-products_25.m"
  },
  {
    "language": "kotlin",
    "name": "Kotlin",
    "file": "code_blocks/🚀 Getting Started/displaying-products_26.kt"
  },
  {
    "language": "java",
    "name": "Java",
    "file": "code_blocks/🚀 Getting Started/displaying-products_27.java"
  },
  {
    "language": "javascript",
    "name": "Flutter",
    "file": "code_blocks/🚀 Getting Started/displaying-products_28.js"
  },
  {
    "language": "javascript",
    "name": "React Native",
    "file": "code_blocks/🚀 Getting Started/displaying-products_29.js"
  },
  {
    "language": "javascript",
    "name": "Cordova",
    "file": "code_blocks/🚀 Getting Started/displaying-products_30.js"
  },
  {
    "language": "typescript",
    "name": "Capacitor",
    "file": "code_blocks/🚀 Getting Started/displaying-products_get_offerings_product_capacitor.ts"
  },
  {
    "language": "csharp",
    "name": "Unity",
    "file": "code_blocks/🚀 Getting Started/displaying-products_31.cs"
  }
]
[/block]



# Choosing which Offering to display

In practice, you may not want to display the default current Offering to every user and instead have a specific cohort that see a different Offering.

For example, displaying a higher priced Offering to users that came from [paid acquisition](doc:attribution) to help recover ad costs, or a specific Offering designed to show [iOS Subscription Offers](doc:ios-subscription-offers) when a user has [cancelled their subscription](doc:purchaserinfo#section-get-entitlement-information). 

This can be accomplished with custom Offering identifiers for each of these "cohorts".

[block:file]
[
  {
    "language": "swift",
    "name": "Swift",
    "file": "projects/iOS/DocsTester/Sources/DocsTester/DocsTester.swift",
    "region": "Choosing which Offering to display"
  },
  {
    "language": "objectivec",
    "name": "Objective-C",
    "file": "code_blocks/🚀 Getting Started/displaying-products_33.m"
  },
  {
    "language": "kotlin",
    "name": "",
    "file": "code_blocks/🚀 Getting Started/displaying-products_34.kt"
  },
  {
    "language": "java",
    "name": "",
    "file": "code_blocks/🚀 Getting Started/displaying-products_35.java"
  },
  {
    "language": "javascript",
    "name": "Flutter",
    "file": "code_blocks/🚀 Getting Started/displaying-products_36.js"
  },
  {
    "language": "javascript",
    "name": "React Native",
    "file": "code_blocks/🚀 Getting Started/displaying-products_37.js"
  },
  {
    "language": "javascript",
    "name": "Cordova",
    "file": "code_blocks/🚀 Getting Started/displaying-products_38.js"
  },
  {
    "language": "typescript",
    "name": "Capacitor",
    "file": "code_blocks/🚀 Getting Started/displaying-products_38.js"
  },
  {
    "language": "csharp",
    "name": "Unity",
    "file": "code_blocks/🚀 Getting Started/displaying-products_39.cs"
  }
]
[/block]



> 📘 
> 
> As of now, cohort logic needs to be managed outside of RevenueCat.

# Best Practices

| Do                                                                         | Don't                                                         |
| :------------------------------------------------------------------------- | :------------------------------------------------------------ |
| ✅ Make paywalls dynamic by minimizing or eliminating any hardcoded strings | ❌ Make static paywalls hardcoded with specific product IDs    |
| ✅ Use default package types                                                | ❌ Use custom package identifiers in place of a default option |
| ✅ Allow for any number of product choices                                  | ❌ Support only a fixed number of products                     |
| ✅ Support for different free trial durations, or no free trial             | ❌ Hardcode free trial text                                    |

# Next Steps

- Now that you've shown the correct products to users, time to [make a purchase ](doc:making-purchases)
- Check out our [sample apps ](doc:sample-apps) for examples of how to display products.
