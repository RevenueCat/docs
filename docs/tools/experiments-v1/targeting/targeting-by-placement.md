---
title: Targeting by Placement
slug: targeting-by-placement
hidden: true
---

Use Targeting by Placement to define paywall locations in your app so that you can serve unique Offerings at each paywall location to a given customer.

:::tip SDK Compatibility
Targeting by Placement is available on [this list of SDK versions].
:::

![Targeting by Placement Illustration](/images/targeting-by-placement-illustration.png)

To start, you'll need to define a few Placements in your app. To do that, consider the different contexts in your app where you may want to display a paywall, such as:

- At the end of onboarding (e.g. `onboarding_end`)
- When a customer attempts to use a paywalled feature (e.g. `feature_gate`)
- When a sale is running (e.g. `sale_offer`)

:::tip Do I need a placement for \_\_\_?
When deciding which Placements to create, consider how your paywall(s) will compliment your ideal customer journey. For example, when you run a sale, do you want to show a different pitch & offer to onboarded customers vs. those using your app for the first time? If so, define a `Sale Offer` Placement. If not, then skip it.

You can always create additional Placements in future releases of your app.
:::

When your app uses the getOfferingsbyPlacement method, we'll return the Offering to be displayed for that customer at that Placement, letting you display unqiue paywalls based on the customer journey. [Learn more about defining Placements in your app.](/tools/targeting/targeting-by-placement)

To define which Offerings should be served for an audience at each Placement, click **+Add Placement** when creating a new rule or editing an existing one.

![Add Placement](/images/add-placement.png)

Then, select the Offering you want to display, and enter the identifier of the Placement you want to serve that Offering on. If this is your first time using that Placement, you'll need to click _Add_ to add its identifer to your list. Once you've saved this rule, that Placement will be available to select in other Targeting Rules.

![Create a Placement](/images/create-a-placement.png)

:::warning Placement Identifiers
Double check that the Placement strings you've defined in your app and through your Targeting Rules exactly match so that your Targeting Rules are applied correctly.
:::

When using Placements, you'll always need to select an Offering to serve "for all other cases". This Offering will be served:

- For any Placements other than the one(s) specified in this rule
- For any new Placements added in the future
- Or when getting the 'current' offering in any SDK version (such as in older versions of your app, or areas of your app that are not fetching Offerings by Placement)

![Set a Placement for all other cases](/images/for-all-other-cases.png)

### Serving no Offering at a given Placement

You can also choose to serve No Offering at a given Placement, such as when the paywalled feature is not yet available in some region, or when the targeted audience is not eligible to receive a given offer.

Simply select **No Offering** for a given Placement in order to have a null value returned when your app requests Offerings for that Placement for customers matching that Targeting Rule

:::warning Handling a null Offering identifier
Be sure that your app is setup to expect and handle a null value being returned when using the getOfferingsForPlacement method if you expect to use Targeting in this way.
:::

If you've chosen to serve **No Offering** "for all other cases" in a Targeting Rule, then you'll also need to specify an Offering to serve "when not using Placements", so that any calls to getOfferings in your current app or prior app versions still have some Offering identifer returned in case they're not designed to handle a null value.
