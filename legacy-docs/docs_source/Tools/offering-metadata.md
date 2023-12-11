---
title: Offering metadata
slug: offering-metadata
hidden: false
---
Metadata allows you to attach a custom JSON object to your Offering that can be used to control how to display your products inside your app, determine the Offering to show based on provided attributes, and much more. The metadata you configure in an Offering is available from the RevenueCat SDK. For example, you could use it to remotely configure strings on your paywall, or even URLs of images shown on the paywall.

## Offering metadata is supported in the following SDK versions:
| RevenueCat SDK           | Version required for Offering Metadata | 
| :----------------------- | :--------------------------------------------- |
| purchases-ios            | 4.20.0 and up                                  |
| purchases-android        | 6.3.0 and up                                   |
| react-native-purchases   | 6.0.0 and up                                   | 
| purchases-flutter        | 5.0.0 and up                                   | 
| cordova-plugin-purchases | 4.0.0 and up                                   |
| purchases-unity          | 5.0.0 and up                                   |

## Benefits of using Offering metadata

Using Offering metadata has several advantages: 

- You can remotely configure aspects of your paywall and upsell messaging and make changes without deploying any code, creating a new app build, or going through app review.
- You can use offering metadata together with [Offering Override](doc:offering-override) to display messaging for special offers and discounts. For example, you could create a key `discount_message` that, if present, shows a special message about the applied discount on the paywall, and set that on a discounted Offering that you apply as an override to customers who are eligible for the specific discount.
- You can use [Experiments](doc:experiments-v1) in conjunction with Offering metadata to not only A/B test different products and prices, but also to test changes to the paywall. To do that, you would create a second Offering with the same products as your default offering, but have different values for the metadata keys in the second Offering.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/febdc0b-Screen_Shot_2023-05-19_at_4.35.53_PM.png",
        null,
        "Example response where metadata is used to control additional paywall variables"
      ],
      "align": "center",
      "sizing": "450px",
      "caption": "Example response where metadata is used to control additional paywall variables"
    }
  ]
}
[/block]

## How to add metadata to your Offering

First, navigate to the Offering you'd like to add metadata to and click **Edit**.

<img width="600" alt="No Metadata" src="https://files.readme.io/129070e-No_Metadata.png">

Then begin adding valid JSON in the **Metadata** field for your Offering.

<img width="600" alt="Editing" src="https://files.readme.io/09d62d4-Editing_Final.png">

Once you've entered your desired JSON object, click **Save** to save your changes.

<img width="600" alt="Saving" src="https://files.readme.io/3aec146-175995e-Saving_Final.png">

After saving your changes, you'll be navigated back to the summary page for your Offering, where the new metadata JSON object you've created will be displayed. (NOTE: Objects will be alphabetically ordered)

<img width="600" alt="Saved" src="https://files.readme.io/e434090-Saved_Final.png">

> 📘 
> 
> When creating a new Offering, you'll be able to define a JSON object directly from the creation form.

## Creating a JSON object

* Offering metadata will automatically detect and support any valid JSON data type (booleans, strings, arrays, etc).
* Nested objects can be used to group together similar keys.

## Accessing metadata from your app

You can access metadata directly from the Offering object in the RevenueCat SDKs.

[block:file]
[
  {
    "language": "swift",
    "name": "",
    "file": "code_blocks/🚀 Getting Started/displaying-products/offering-metadata_1.swift"
  },
  {
    "language": "kotlin",
    "name": "",
    "file": "code_blocks/🚀 Getting Started/displaying-products/offering-metadata_2.kt"
  }
]
[/block]

## Offering metadata limits

- Offering metadata has a max limit of 4000 characters for the JSON object. If you reach that limit, you'll see an error when you attempt to save the Offering.

## Offering metadata use case examples

You can find some example use cases in action in our [Offering Metadata example use cases](doc:offering-metadata-examples) doc.
