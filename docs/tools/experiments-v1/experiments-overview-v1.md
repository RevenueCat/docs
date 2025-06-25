---
title: Getting Started with Experiments
sidebar_label: Getting Started
slug: experiments-overview-v1
hidden: false
---

Experiments allow you to answer questions about your users' behaviors and app's business by A/B testing two unique paywall configurations in your app and analyzing the full subscription lifecycle to understand which variant is producing more value for your business.

While price testing is one of the most common forms of A/B testing in mobile apps, Experiments are based on RevenueCat Offerings, which means you can A/B test more than just prices, including: trial length, subscription length, different groupings of products, etc.

You can even use our Paywalls or Offering Metadata to remotely control and A/B test any aspect of your paywall. [Learn more](https://www.revenuecat.com/docs/offerings-guide#remotely-control-all-aspects-of-your-paywall).

:::tip
Experiments is available to Pro & Enterprise customers. [Learn more about pricing here](https://www.revenuecat.com/pricing/).
:::

## How does it work?

After configuring the Offerings you want and adding them to an Experiment, RevenueCat will randomly assign users to a test variant. Then, as long as your app is fetching the `current` Offering from the RevenueCat SDK, that value will be updated to reflect the correct Offering for the variant the customer is enrolled in. Everything is done server-side, so no changes to your app are required if you're already displaying the `current` Offering for a given customer in your app!

If you need help making your paywall more dynamic, see [Displaying Products](/getting-started/displaying-products). The [Swift sample app](https://github.com/RevenueCat/purchases-ios/tree/main/Examples) has an example of a [dynamic paywall](https://github.com/RevenueCat/purchases-ios/blob/main/Examples/MagicWeather/MagicWeather/Sources/Controllers/PaywallViewController.swift) that is Experiments-ready. Dynamic paywall examples in other languages can be found within our other [sample apps](https://www.revenuecat.com/docs/sample-apps) as well.

:::info
To learn more about creating a new Offering to test, and some tips to keep in mind when creating new Products on the stores, [check out our guide here](/tools/experiments-v1/creating-offerings-to-test).
:::

![Experiments](/docs_images/experiments/v1/experiments-learn.webp)

As soon as a customer is enrolled in an experiment, they'll be included in the "Customers" count on the Experiment Results page, and you'll see any trial starts, paid conversions, status changes, etc. represented in the corresponding metrics. (Learn more [here](/tools/experiments-v1/experiments-results-v1))

:::info
We recommend identifying customers _before_ they reach your paywall to ensure that one unique person accessing your app from two different devices is not treated as two unique anonymous customers.
:::

## Implementation requirements

**Experiments requires you to use Offerings and have a dynamic paywall in your app that displays the current Offering for a given customer.** While Experiments will work with iOS and Android SDKs 3.0.0+, it is recommended to use these versions:

| SDK          | Version |
| :----------- | :------ |
| iOS          | 3.5.0+  |
| Android      | 3.2.0+  |
| Flutter      | 1.2.0+  |
| React Native | 3.3.0+  |
| Cordova      | 1.2.0+  |
| Unity        | 2.0.0+  |

If you meet these requirements, you can start using Experiments without any app changes! If not, take a look at [Displaying Products](/getting-started/displaying-products). The [Swift sample app](https://github.com/RevenueCat/purchases-ios/tree/master/Examples/SwiftExample) has an example of a dynamic paywall that is Experiments-ready.

**Implementation Overview**

:::warning
Programmatically displaying the `current` Offering in your app when you fetch Offerings is **required** to ensure customers are evenly split between variants.
:::

1. Create the Offerings that you want to test (make sure your app displays the `current` Offering.) You can skip this step if you already have the Offerings you want to test.
2. Create an Experiment and choose the Offerings to test. You can create a new experiment from scratch or duplicate an existing experiment to save time when testing similar configurations. By default you can choose one Offering per variant, but by creating Placements your Experiment can instead have a unique Offering displayed for each paywall location in your app. [Learn more here](https://www.revenuecat.com/docs/tools/experiments-v1/configuring-experiments-v1#using-placements-in-experiments).
3. Run your experiment and monitor the results. There is no time limit on experiments, so stop it when you feel confident choosing an outcome. (Learn more about interpreting your results [here](/tools/experiments-v1/experiments-results-v1))
4. Once you’re satisfied with the results you can set the winning Offering(s), if any, as default manually.
5. Then, you're ready to run a new experiment.

Visit [Configuring Experiments](https://www.revenuecat.com/docs/configuring-experiments-v1) to learn how to setup your first test.

## Tips for Using Experiments

**Pair our paywalls feature with your experiments**

To optimize your Experiments, we recommend using our [Paywalls](https://www.revenuecat.com/docs/tools/paywalls) feature in conjunction with Experiments. Combining these will help ensure the delivery of a dynamic paywall based on the offering generated from the experiment. By integrating these tools, you guarantee that the right paywall is presented to the right audience, which will help you get a better understanding of your experiment along with seeing which paywalls help improve your conversion rates.

**Decide how long you want to run your experiments**

There’s no time limit on tests. Consider the timescales that matter for you. For example, if comparing monthly vs yearly, yearly might outperform in the short term because of the high short term revenue, but monthly might outperform in the long term.

Keep in mind that if the difference in performance between your variants is very small, then the likelihood that you're seeing statistically significant data is lower as well. "No result" from an experiment is still a result: it means your change was likely not impactful enough to help or hurt your performance either way.

:::info
You can't restart a test once it's been stopped.
:::

**Test only one variable at a time**

It's tempting to try to test multiple variables at once, such as free trial length and price; resist that temptation! The results are often clearer when only one variable is tested. You can run more tests for other variables as you further optimize your LTV.

**Run multiple tests simultaneously to isolate variables & audiences**

If you're looking to test the price of a product and it's optimal trial length, you can run 2 tests simultaneously that each target a subset of your total audience. For example, Test #1 can test price with 20% of your audience; and Test #2 can test trial length with a different 20% of your audience.

You can also test different variables with different audiences this way to optimize your Offering by country, app, and more.

**Bigger changes will validate faster**

Small differences ($3 monthly vs $2 monthly) will often show ambiguous results and may take a long time to show clear results. Try bolder changes like $3 monthly vs $10 monthly to start to triangulate your optimal price.

**Running a test with a control**

Sometimes you want to compare a different Offering to the one that is already the default. If so, you can set one of the variants to the Offering that is currently used in your app.

**Run follow-up tests after completing one test**

After you run a test and find that one Offering won over the other, try running another test comparing the winning Offering against another similar Offering. This way, you can continually optimize for lifetime value (LTV). For example, if you were running a price test between a $5 product and a $7 product and the $7 Offering won, try running another test between a $8 product and the $7 winner to find the optimal price for the product that results in the highest LTV.

You can use the **duplicate experiment** feature to quickly set up follow-up tests with similar configurations, making it easy to iterate and optimize your results over time.
