---
title: By Custom Attributes
slug: custom-attributes
hidden: true
---

# Targeting by Custom Attributes

With custom attributes, you can create audiences to target with unique Offerings based on any dimension that's relevant to your business.

<-- header image -->

Continue reading to learn:

1. [How to start setting custom attributes](tools/targeting/custom-attributes#how-to-start-setting-custom-attributes)
2. [How to create Targeting Rules with custom attributes](tools/targeting/custom-attributes#how-to-create-targeting-rules-with-custom-attributes)
3. [How to sync custom attributes to serve fresh paywalls](tools/targeting/custom-attributes#how-to-sync-custom-attributes-to-serve-fresh-paywalls)

## How to start setting custom attributes

Custom attributes can be set through the `setAttributes()` method in our SDKs, or via API. For full implementation details, visit the [Attributes](/customers/customer-attributes) page.

## How to create Targeting Rules with custom attributes

First, navigate to your Project and click on **Targeting** under **Monetization tools**. Then, click **+ New** to begin creating a new rule.

After setting a display name, click on **+ Add condition** to begin defining your Targeting Rule, and click on **Custom attributes** to start with that condition.

First, you'll need to select the key of the custom attribute you want to use. If you've set any custom attributes for customers in this Project already, you'll see them in this list. Otherwise, feel free to add a new key that you intend to begin setting for your customers.

![Custom Attribute Key](/images/custom_attribute_key.png)

After selecting or adding the key you want to use, select whether you want to build an inclusion ("is any of") or exclusion ("is not any of") condition. Last, you'll need to select the set of values to include/exclude in your condition. Just like with keys, you can add values to this list that are not present, just keep in mind that they need to be set for customers in order to impact what Targeting Rule that customer will qualify for.

![Custom Attribute Values](/images/custom_attribute_values.png)

:::info Only 50 sample values will be listed
For keys which have more than 50 unique values that have been set for them, we'll only show 50 in this list. This is just a display limitation -- any other set values can still be entered and used.
:::

## How to sync custom attributes to serve fresh paywalls

By default, we'll sync any attributes that you set during an app session when the app is backgrounded. This works great if you're using the attribute for some future need, but if you're looking to use it to serve a unique paywall via Targeting in that same session this is not sufficient.

Therefore, we offer two options to make attribute sycing nearly immediate when they're being used in Targeting:

1. The syncAttributesAndOfferingsIfNeeded() method
2. Triggered syncing (on supported SDK versions)

### The syncAttributesAndOfferingsIfNeeded() method

You can use the `syncAttributesAndOfferingsIfNeeded()` method to explicitly sync attributes mid-session, which will automatically refresh the cached Offering as well, ensuring your customer sees the correct paywall based on any newly set custom attributes without needing to wait it to load.

We recommend using that method after you've set the last attribute that may be used for a paywall you intend to display in that session.

For example, if during your onboarding you set two attributes which may both be used in Targeting Rules, such as `onboarding_survey_use_case` and `onboarding_survey_experience_level` to track answers to those onboarding survey questions; we recommend calling `syncAttributesAndOfferingsIfNeeded()` once after both attributes have been set.

:::warning `syncAttributesAndOfferingsIfNeeded()` rate limit
Calls to this method have a rate limit of 5 per minute to prevent abuse.
:::

<-- code snippets -->

### Triggered syncing

On supported SDK versions, when you set a custom attribute that is being used in a Live Targeting Rule, we’ll immediately sync it and update the cached Offering if needed. However, if you attempt to get the Offering to serve immediately after setting that custom attribute, there’s a chance that the cached Offering will be stale, since this refresh process cannot be instantaneous.

To protect against this, we **strongly** recommend explicitly calling the `syncAttributesAndOfferingsIfNeeded()` method and waiting for it to complete before getting Offerings to serve, as described above.

:::Supported SDK versions
Triggered syncing is supported on [the SDK versions]
:::
