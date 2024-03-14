---
title: Targeting
slug: targeting
hidden: false
---

Targeting allows you to maximize customer lifetime value & paywall effectiveness by creating rules to serve distinct audiences their own Offerings. Instead of having a single Default Offering that all customers receive, you can instead create rules to define an audience and serve them distinct Offerings for each Placement in your app. Plus, you can even schedule new rules to start and end at future dates.

:::tip
Targeting is available on Pro, Scale, and Enterprise plans. [Click here](https://app.revenuecat.com/settings/billing) to review your plan and consider upgrading.
:::

import YouTubeEmbed from "@site/src/components/YouTubeEmbed";

<YouTubeEmbed videoId="NLNp_q7_RAQ" title="Targeting" />

## Terminology

| Term             | Definition                                                                                                                                                                                                                                                      |
| :--------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Offering         | The set of Packages, metadata, and an optional paywall UI you can create to remotely control your paywall experience.                                                                                                                                           |
| Default Offering | The Offering that is set as "Default" in the RevenueCat Dashboard for your Project. We recommend designing your app so that the paywall always shows a customer's Current Offering, which will be your Project's Default Offering if no other conditions apply. |
| Placement        | A custom paywall location you can define in your app to serve an Offering in. (e.g. an `onboarding_end` Placement and a `feature_gate` Placement)                                                                                                               |
| Targeting        | The ability to assign distinct Offerings to a distinct audience of customers based on Targeting Rules you create.                                                                                                                                               |
| Targeting Rule   | A collection of conditions that, when they are true for a given customer, will result in that customer matching the rule and being served the corresponding Offerings.                                                                                          |
| Conditions       | The filters such as App, Country, and App Version that can be used to construct a Targeting Rule.                                                                                                                                                               |
| Audience         | The customers who would be included in a Targeting Rule due to matching its conditions.                                                                                                                                                                         |
| Live             | The Targeting Rules that are actively being used to determine which customers which receive Offerings, as determined by their conditions, assessed in order from top to bottom.                                                                                 |
| Scheduled        | The Targeting Rules that are scheduled to be automatically made Live at their scheduled Start Date.                                                                                                                                                             |
| Inactive         | The Targeting Rules that are not actively being used. These may be drafts, rules you previously used, rules you intend to set live in the future, etc.                                                                                                          |

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

:::warning
In December 2023 we began referring to a Project's current Offering as it's default Offering. Learn more [here](/getting-started/displaying-products#fetching-offerings).
:::

When determining which (if any) Targeting Rule a customer matches, we'll assess them from top to bottom as you've ordered them in the Dashboard.

## Creating Targeting Rules

First, navigate to "Targeting" in the "Monetization tools" section of your Project Settings. Then click on "Create a New Rule" to begin.

![Create a new rule](/images/d499c34-Empty_State_15456d587aaa0eba0dddeb003842e704.png)

Then, create your rule by:

1. Entering a Display name
2. Selecting your desired conditions (learn more about conditions here)
3. Selecting an Offering to display when those conditions are met
4. Selecting your desired State for the rule

![Ready to save](/images/create-a-new-rule.png)

Once you've entered all of the required fields for your rule, click "Save" and it will be added to the list of rules in the State you've selected.

## Targeting by Placement

:::tip SDK Compatibility
Targeting by Placement is available on iOS 4.38.1 and up, and Android 7.7.0 and up, with support for additional SDKs coming very soon.
:::

You may also choose to setup unique Placements in your app for each paywall location so that a given customer can be served distinct Offerings at each Placement using Targeting.

![Targeting by Placement Illustration](/images/targeting-by-placement-illustration.png)

[Get started with Placements.](/tools/targeting/placements)

## Scheduling Targeting Rules

When creating a new Rule or editing an Inactive Rule, you can choose to schedule a Start Time and End Time for that Rule to become Live in the future. This is especially useful for running promotions, holiday offers, or other sales that have a time-limited component to them.

![Screenshot](/images/4b11583-Screenshot_2023-12-22_at_10.30.34_AM_a13311e22dea2db1aa234400d73abb20.png)

To Schedule a Rule, just:

1. Select `Scheduled` as the State for the Rule
2. And enter a `Start time` and `End time` for the Rule to be made Live
3. Click `Save` to save your changes

:::warning Scheduled times are in UTC
Double check that you've entered your desired time in UTC to make sure it's scheduled correctly
:::

## Ordering Targeting Rules

### How Live & Scheduled rules are added to the list

When a rule is newly set Live (either when it's created or when an Inactive rule is set Live), or newly Scheduled, it'll be ordered at the bottom of that list so that if its targeted audience has any overlap with other Live rules or Scheduled rules, the existing rules will "outrank" the new rule when determining what a customer receives.

:::info
Live & Scheduled rules can be reordered at any time.
:::

### Ordering Live & Scheduled rules

1. Click "Order rules" to enter the ordering mode
2. Drag the rules you wish to reorder to their correct location in the list
3. Click "Save order" when you've set them in the order you'd like them to be evaluated in

![Ordering](/images/403f610-Ordering_Rules_8817b46019f93fedd99f148b7b51b51f.png)

:::info
Ordering only applies to cases where 1 customer may match multiple Live rules. If your Live rules are mutually exclusive, their order will have no impact on how customers are assigned to them.

Scheduled rules have no impact on what Offerings are served until they become Live. Ordering them together with your Live rules ensures that they are in the correct order once they become Live.
:::

## Editing, deleting, and more

Rules can also be edited, deleted, or made inactive at any time if you need to modify how Offerings are being served to your customers.

![Rule actions](/images/292656b-Editing_Rules_064dced88e1fc6e1cf12d864ab86c9fc.png)

In addition, if you're looking to add a new rule that's similar to an existing one, you can start by duplicating that rule and then making the desired modifications to the rule conditions.

## Learn more about conditions

### Definitions

**Country**:

The storefront a customer is currently using on supported SDK versions\*, or their geolocation otherwise.
\*Available on iOS SDK Versions >= 4.30.4 with support on other SDKs coming soon

**App**:

The App that your customer is currently using. Commonly used to target by platform.

**App Version**:

The App Version of a specified App that your customer is currently using. When assessing App Versions using more than or less than operators, we apply semantic versioning logic.

**RC SDK Version**:

The RC SDK Version of a specified SDK flavor of the App Versions that your customer is currently using. Commonly used to target RevenueCat Paywalls only to RC SDK Versions that explicitly support them.

### How conditions interact with each other

- Dimensions like Country and App which have a defined set of possible values can be added with an "is any of" or "is not any of" to select individual values or sets of values to include/exclude
- Dimensions like App Version and RC SDK Version which have an ever expanding set of possible values can be added with is/is not or more than/less than operators.
- Multiple conditions can be added for each dimension with an AND relationship, to create rules such as:
  - App version is more than or equal to 1.1.0
  - App version is less than 1.2.0
- App Version and RC SDK Version must always have a specified App or SDK (respectively), since the intended version to target may be different between the App or RC SDK flavor you're targeting.

![When filtering by App version, select the App that the filter applies to first.](/images/bb9ce00-App_version_filter_55349032fe4ebd446375b98f5871f74b.png)

## FAQs

**How do Targeting and Experiments interact?**

**TL;DR** Experiment enrollment is checked before Targeting Rules are assessed

When any Experiment is running, customer enrollment will occur before Offerings are fetched. When Offerings are fetched, we'll first check to see if a customer is enrolled in a running Experiment. If they are, their variant's Offering will be returned. If they are not, then any existing Targeting Rules will be assessed.

**How can I testing Targeting in my app?**

The easiest way to test Targeting is to create a Targeting Rule for an app version that has not yet been released (e.g. only available in TestFlight), and serve a unique Offering to that Targeting Rule. Then, check to confirm whether your app in production displays a different Offering than your app version in TestFlight does.

**Why are Placements not a condition of the Targeting Rule?**
The Targeting Rule's conditions are what determine whether a given customer matches that audience or not. Placements are the various Offerings they may get based on how that customer navigates through your app. So conditions are for defining who the customer is, and Placements are for determining what the customer gets.

**Can I add other custom fields to target my customers by?**

Not yet, but this is something we're exploring. If you have a specific use case in mind that's not yet covered, [let us know about it](https://form.typeform.com/to/s8RrwpFs).
