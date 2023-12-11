---
title: Experiments Overview
slug: experiments-overview
hidden: true
---
[block:callout]
{
  "type": "warning",
  "body": "Experiments is currently in private beta. If you're interested in testing this feature, [contact support](doc:scope-of-support#help-with-your-account-billing-or-feature-requests) to learn how to enable Experiments in your RevenueCat project."
}
[/block]
Experiments allow you to answer questions about your users' behaviors and app's business by A/B testing two offerings in your app and computing the LTV of each one based on the revenue generated.

While price testing is one of the most common forms of A/B testing in mobile apps, Experiments are based on RevenueCat Offerings, allowing you A/B test more than just prices, including: trial length, subscription length, different groupings of products, etc.
[block:api-header]
{
  "title": "How does it work?"
}
[/block]
After configuring the two Offerings you want and adding them to an Experiment, RevenueCat will randomly assign users to a cohort where they will only see one of the two Offerings. Everything is done server-side, so no changes to your app are required if you're already displaying the `current` offering in your app! If you need help making your paywall more dynamic, see [Displaying Products](doc:displaying-products). The [Swift sample app](https://github.com/RevenueCat/purchases-ios/tree/master/Examples/SwiftExample) has an example of a dynamic paywall that is Experiments-ready.

[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/8762b45-sample-ab-test-users.png",
        "sample-ab-test-users.png",
        1800,
        1634,
        "#f09397"
      ],
      "caption": "Two different price points are being A/B tested. In this example, this was accomplished by creating two offerings each containing identical products except for the monthly products, which are two different products at different price points. RevenueCat randomly assign users to a cohort and show them one of the two offerings in the experiment by making that offering the `current` offering."
    }
  ]
}
[/block]
After the first purchase or trial start a user makes, RevenueCat will continually incorporate revenue from renewals, conversions, and cancellations to calculate their LTV and predict LTV over time.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/fcffd4c-experimentsflowchart_4.png",
        "experimentsflowchart (4).png",
        3163,
        1363,
        "#f2f0f0"
      ],
      "caption": "First, RevenueCat will randomly assign users to a cohort where they will see only of the two offerings in the experiment when the app requests the current offering. If the user makes an initial purchase or starts a trial, RevenueCat will continually incorporate the following trial conversion, renewals, and cancellations into the LTV model."
    }
  ]
}
[/block]

[block:image]
{
  "images": [
    {
      "image": [],
      "caption": "First, RevenueCat will randomly assign users to a cohort where they will see only of the two offerings in the experiment when the app calls `getOfferings`. If the user makes an initial purchase or starts a trial, RevenueCat will continually incorporate the following trial conversion, renewals, and cancellations into the LTV model."
    }
  ]
}
[/block]

[block:api-header]
{
  "title": "Implementation steps"
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Experiments are available on iOS only during the beta period.",
  "body": "While the Android SDK is updated to support Experiments, data will be collected from iOS only. Experiments on Android will be available at a later date."
}
[/block]
**Experiments requires you to use offerings and have a dynamic paywall in your app that displays the current offering.** While Experiments will work with iOS and Android SDKs 3.0.0+, it is recommended to use these versions:
[block:parameters]
{
  "data": {
    "0-0": "iOS",
    "0-1": "3.5.0+",
    "1-0": "Android",
    "1-1": "3.2.0+",
    "2-0": "Flutter",
    "3-0": "React Native",
    "4-0": "Cordova",
    "5-0": "Unity",
    "3-1": "3.3.0+",
    "4-1": "1.2.0+",
    "2-1": "1.2.0+",
    "5-1": "2.0.0+",
    "h-0": "SDK",
    "h-1": "Version"
  },
  "cols": 2,
  "rows": 6
}
[/block]
If you meet these requirements, you can start using Experiments without any app changes! If not, take a look at [Displaying Products](doc:displaying-products). The [Swift sample app](https://github.com/RevenueCat/purchases-ios/tree/master/Examples/SwiftExample) has an example of a dynamic paywall that is Experiments-ready.

**Implementation Overview**

1. Create two offerings that you want to test (make sure your app displays the `current` offering.) You can skip this step if you already have the offerings you want to test.
2. Create an Experiment and choose the two offerings to test.
3. Run your experiment and monitor the results. There is no time limit on experiments, so stop it when feel confident choosing an outcome.
4. Once you’re satisfied with the results you can set the winning offering, if any, as current manually or run a new experiment
[block:api-header]
{
  "title": "Tips for Using Experiments"
}
[/block]
**Decide how long you want to run your experiments**

There’s no time limit on tests. Consider the timescales that matter for you. For example, if comparing monthly vs yearly, yearly might outperform in the short term because of the high short term revenue, but monthly might outperform in the long term

Keep in mind that if the difference in LTV between two offerings is very small, the test may take a very long time to reach significance. No result is still a result.
[block:callout]
{
  "type": "info",
  "title": "",
  "body": "You can’t restart a test once it's been stopped."
}
[/block]
** A/B testing beta available only on iOS (Android coming later)**

While A/B testing is available on iOS only, offerings can contain products from other platforms in your RevenueCat project. If you decide to make an offering current, make sure it works on all platforms supported by your app. You can use the [Offering Override](doc:offering-override) feature to help you test your dynamic paywall across platforms without changing the current offering for your whole project.

** Test only one variable at a time**

It's tempting to try to test multiple variables at once, such as free trial length and price; resist that temptation! The results are often clearer when only one variable is tested. You can run more tests for other variables as you further optimize your LTV.

** Bigger changes will validate faster**

Small differences ($3 monthly vs $2 monthly) will often show ambiguous results and may take a long time to reach significance. Try bolder changes like $3 monthly vs $10 monthly to start to triangulate your optimal price.

** You can run only one test at a time**

If you want to run another test, you must stop the one currently running. You can, however, create as many tests as you need.

** Running a test with a control**

Sometimes you want to compare a different offering to the one that is already current. If so, you can set one of the variants to the offering that is currently used in your app.

** Run follow-up tests after completing one test**

After you run a test and find that one offering won over the other, try running another test comparing the winning offering against another similar offering. This way, you can continually optimize for LTV. For example, if you were running a price test between a $5 product and a $7 product and the $7 offering won, try running another test between a $8 product and the $7 winner to find the optimal price for the product that results in the highest LTV.