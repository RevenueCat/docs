---
title: Targeting
slug: targeting
hidden: false
categorySlug: tools
order: 999
---
Targeting allows you to create rules for serving distinct audiences their own Offering. Instead of having a single Default Offering that all customers receive, you can instead create a cascading sequence of rules to deliver different Offerings to each audience that you define.

This allows you to create paywall experiences that are tailored to each of your audiences so you can make an effective pitch for your product and maximize lifetime value.

> 📘 
> 
> Targeting is available on Pro, Scale, and Enterprise plans. [Click here](https://app.revenuecat.com/settings/billing) to review your plan and consider upgrading.

[block:embed]
{
  "html": "<iframe class=\"embedly-embed\" src=\"//cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2FNLNp_q7_RAQ%3Ffeature%3Doembed&display_name=YouTube&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DNLNp_q7_RAQ&image=https%3A%2F%2Fi.ytimg.com%2Fvi%2FNLNp_q7_RAQ%2Fhqdefault.jpg&key=7788cb384c9f4d5dbbdbeffd9fe4b92f&type=text%2Fhtml&schema=youtube\" width=\"854\" height=\"480\" scrolling=\"no\" title=\"YouTube embed\" frameborder=\"0\" allow=\"autoplay; fullscreen; encrypted-media; picture-in-picture;\" allowfullscreen=\"true\"></iframe>",
  "url": "https://www.youtube.com/watch?v=NLNp_q7_RAQ",
  "title": "Introducing Targeting: Customize Your Offerings for Every Audience",
  "favicon": "https://www.google.com/favicon.ico",
  "image": "https://i.ytimg.com/vi/NLNp_q7_RAQ/hqdefault.jpg",
  "provider": "youtube.com",
  "href": "https://www.youtube.com/watch?v=NLNp_q7_RAQ",
  "typeOfEmbed": "youtube"
}
[/block]

## Terminology

| Term             | Definition                                                                                                                                                                                                             |
| :--------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Offering         | The set of Packages, metadata, and an optional paywall UI you can create to remotely control your paywall experience.                                                                                                  |
| Default Offering | The Offering that is set as "Default" in the RevenueCat Dashboard for your Project. We recommend designing your app so that the paywall always shows a customer's Current Offering, which will be your Project's Default Offering if no other conditions apply. |
| Targeting        | The ability to assign a distinct Offering to a distinct audience of customers based on Targeting Rules you create.                                                                                                     |
| Targeting Rule   | A collection of conditions that, when they are true for a given customer, will result in that customer matching the rule and being served the corresponding Offering.                                                  |
| Conditions       | The filters such as App, Country, and App Version that can be used to construct a Targeting Rule.                                                                                                                      |
| Audience         | The customers who would be included in a Targeting Rule due to matching its conditions.                                                                                                                                |
| Live             | The Targeting Rules that are actively being used to determine which customers which receive Offerings, as determined by their conditions, assessed in order from top to bottom.                                        |
| Inactive         | The Targeting Rules that are not actively being used. These may be drafts, rules you previously used,  rules you intend to set live in the future, etc.                                                                |

## How Targeting works

Before you setup any Targeting Rules, if you use Offerings, here's how they're returned in your app:

1. RevenueCat is initialized
2. Offerings are fetched
3. Your list of Offerings is returned, along with the identifier of the **Current Offering** for a given customer

As long as your app is setup to display a customer's Current Offering on your paywall, then you can change the Default Offering that gets provided for a customer at any time from our Dashboard, or run an Experiment to serve two different Offerings to specific audiences.

Once you setup Targeting Rules, you unlock an additional level of customization, because the **Current Offering** that gets returned for each customer will be based on the Rule they qualify for. For example:

1. RevenueCat is initialized
2. Offerings are fetched
3. Your list of Offerings is returned, along with the identifier of the Offering for the first rule that the customer matched as the **Current Offering** for that customer
   1. If the customer does not match any specified rules, they'll receive the **Default Offering** for your Project.
  
> 🚧
>
> In December 2023 we began referring to a Project's current Offering as it's default Offering. Learn more [here](https://www.revenuecat.com/docs/displaying-products#fetching-offerings).

When determining which (if any) Targeting Rule a customer matches, we'll assess them from top to bottom as you've ordered them in the Dashboard.

## Creating Targeting Rules

First, navigate to "Targeting" in the "Monetization tools" section of your Project Settings. Then click on "Create a New Rule" to begin.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8fa325b-Create_a_new_rule_w_highlight.png",
        null,
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


Then, create your rule by:

1. Entering a Display name
2. Selecting your desired conditions (learn more about conditions here)
3. Selecting an Offering to display when those conditions are met
4. Selecting your desired State for the rule

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bce5dfd-Ready_to_save_w_highlight.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


Once you've entered all of the required fields for your rule, click "Save" and it will be added to the list of rules in State you've selected.

## Ordering Targeting Rules

### How Live rules are added to the list

When a rule is newly set Live (either when it's created or when an Inactive rule is set Live), it'll be ordered at the bottom of that list so that if its targeted audience has any overlap with other Live rules, the existing Live rules will "outrank" the new rule when determining what a customer receives.

> 📘 
> 
> Live rules can be reordered at any time.

### Ordering Live rules

1. Click "Order rules" to enter the ordering mode
2. Drag the rules you wish to reorder to their correct location in the list
3. Click "Save order" when you've set them in the order you'd like them to be evaluated in

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/f18a508-Ordering.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


> 📘 
> 
> Ordering only applies to cases where 1 customer may match multiple Live rules. If your Live rules are mutually exclusive, their order will have no impact on how customers are assigned to them.

## Editing, deleting, and more

Rules can also be edited, deleted, or made inactive at any time if you need to modify how Offerings are being served to your customers.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/41120c1-Rule_actions.png",
        "",
        ""
      ],
      "align": "center"
    }
  ]
}
[/block]


In addition, if you're looking to add a new rule that's similar to an existing one, you can start by duplicating that rule and then making the desired modifications to the rule conditions.

## Learn more about conditions

### Definitions

[block:parameters]
{
  "data": {
    "h-0": "Dimension",
    "h-1": "Definition",
    "0-0": "Country",
    "0-1": "The storefront a customer is currently using on supported SDK versions\\*, or their geolocation otherwise.  \n  \n\\*Available on iOS SDK Versions >= 4.30.4 with support on other SDKs coming soon",
    "1-0": "App",
    "1-1": "The App that your customer is currently using. Commonly used to target by platform.",
    "2-0": "App Version",
    "2-1": "The App Version of a specified App that your customer is currently using. When assessing App Versions using more than or less than operators, we apply semantic versioning logic.",
    "3-0": "RC SDK Version",
    "3-1": "The RC SDK Version of a specified SDK flavor of the App Versions that your customer is currently using. Commonly used to target RevenueCat Paywalls only to RC SDK Versions that explicitly support them. "
  },
  "cols": 2,
  "rows": 4,
  "align": [
    "left",
    "left"
  ]
}
[/block]


### How conditions interact with each other

- Dimensions like Country and App which have a defined set of possible values can be added with an "is any of" or  "is not any of" to select individual values or sets of values to include/exclude
- Dimensions like App Version and RC SDK Version which have an ever expanding set of possible values can be added with is/is not or more than/less than operators.
- Multiple conditions can be added for each dimension with an AND relationship, to create rules such as:
  - App version is more than or equal to 1.1.0
  - App version is less than 1.2.0
- App Version and RC SDK Version must always have a specified App or SDK (respectively), since the intended version to target may be different between the App or RC SDK flavor you're targeting.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/bb9ce00-App_version_filter.png",
        "",
        "When filtering by App version, select the App that the filter applies to first."
      ],
      "align": "center",
      "caption": "When filtering by App version, select the App that the filter applies to first."
    }
  ]
}
[/block]


## FAQs

[block:parameters]
{
  "data": {
    "h-0": "Question",
    "h-1": "Answer",
    "0-0": "How do Targeting and Experiments interact?",
    "0-1": "**TL;DR** Experiment enrollment is checked before Targeting Rules are assessed  \n  \nWhen any Experiment is running, customer enrollment will occur before Offerings are fetched. When Offerings are fetched, we'll first check to see if a customer is enrolled in a running Experiment. If they are, their variant's Offering will be returned. If they are not, then any existing Targeting Rules will be assessed.",
    "1-0": "How can I test Targeting in my app?",
    "1-1": "The easiest way to test Targeting is to create a Targeting Rule for an app version that has not yet been released (e.g. only available in TestFlight), and serve a unique Offering to that Targeting Rule. Then, check to confirm whether your app in production displays a different Offering than your app version in TestFlight does."
  },
  "cols": 2,
  "rows": 2,
  "align": [
    "left",
    "left"
  ]
}
[/block]
