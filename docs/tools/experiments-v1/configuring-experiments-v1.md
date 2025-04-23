---
title: Configuring Experiments
slug: configuring-experiments-v1
hidden: false
---

Before setting up an experiment, make sure you've created the Offerings you want to test. This may include:

- Creating new Products on the stores
- Setting Offering Metadata, and/or
- Creating a RevenueCat Paywall

You should also [test the Offerings you've chosen](https://www.revenuecat.com/docs/offering-override) on any platform your app supports.

## Setting up a new experiment

First, navigate to your Project. Then, click on **Experiments** in the **Monetization tools** section.

![Navigate](/images/c7867f1-Screenshot_2024-01-29_at_10.45.53_AM_17e0a4c0a6bcff7244ee397897c06ca4.png "Navigate")

Select **+ New** to create a new experiment.

![Creating a new experiment](../../../static/images/create_new_experiment_latest.png "Creating a new experiment")

:::info Setting up Offering(s) for your treatment

If you've not setup multiple Offerings before, you'll be prompted to do so now, since you'll need at least 2 available Offerings to run an experiment.

The treatment Offering(s) represents the hypothesis you're looking to test with your experiment (e.g. higher or lower priced products, products with trials, etc).

For App Store apps, we recommend setting up new products to test as a new Subscription Group so that customers who are offered those products through Experiments will see only that same set of products to select from their subscription settings.
:::

## Required fields

To create your experiment, you must first enter the following required fields:

- Experiment name
- Control variant
  - The Offering(s) that will be used for your Control group
- Treatment variant
  - The Offering(s) that will be used for your Treatment group (the variant in your experiment)

## Using Placements in Experiments

Placements allow you to define a unique Offering to serve at each paywall location in your app, so that you can do things like:

1. Show a unique paywall design at the end of onboarding vs. in settings
2. Offer unique prices on the paywall triggered when a customer attempts to access a gated feature vs. the paywall that's triggered after a certain number of app opens

If you've not setup Placements yet, [start here](https://www.revenuecat.com/docs/tools/targeting/placements).

With Experiments, you can create A/B tests that serve unique Offerings at each Placement to your Control group and Treatment group.

![Adding Placements to Experiments](../../../static/images/placements.png "Adding Placements to Experiments")

With Placements, your customers will be served an array of Offerings depending on the paywall location they visit, and with Experiments you can A/B test that experience by changing any element of that array.

:::tip Isolating the impact of each paywall change
If you're looking to isolate the impact of changing just one paywall location, then modify the Offering being served at that Placement in the Treatment group and keep all other Placements the same. But be sure to specify your desired Offering for each Placement that your app uses, even if the Offering for a given Placement should be the same on both the Control and Treatment.
:::

## Audience customization

Then, you can optionally customize the audience who will be enrolled through your experiment through **Customize enrollment criteria** and **New customers to enroll**. Please note: only new customers will be enrolled in Experiments. Existing customers will not be enrolled. 

**Customize enrollment criteria**

Select from any of the available dimensions to filter which new customers are enrolled in your experiment.

| Dimension              | Description                                                                                                                                                                                                                                                             |
| :--------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Country                | Which countries are eligible to have their new customers enrolled in the experiment.                                                                                                                                                                                    |
| App                    | Which of your RevenueCat apps the experiment will be made available to.                                                                                                                                                                                                 |
| App version            | Which app version(s) of the specified apps must a new customer be on to be enrolled in the experiment.                                                                                                                                                                  |
| RevenueCat SDK version | Which RevenueCat SDK version(s) of the specified SDK flavor must a new customer be on to be enrolled in the experiment. _(NOTE: This is most likely to be used in conjunction with features like RevenueCat Paywalls which are only available in certain SDK versions)_ |

| Platform | Which platform(s) that were first used by the customer are eligible for the experiment (e.g. iOS, watchOS, etc). |

**New customers to enroll**

You can modify the % of new customers to enroll in 10% increments based on how much of your audience you want to expose to the test. Keep in mind that the enrolled new customers will be split between the two variants, so a test that enrolls 10% of new customers would yield 5% in the Control group and 5% in the Treatment group.

Once done, select **CREATE EXPERIMENT** to complete the process.

## Starting an experiment

When viewing a new experiment, you can start, edit, or delete the experiment.

![](/images/3e6f895-Screen_Shot_2022-10-20_at_10.30.15_AM_5e45668dae6b1feb452b9cbc844b8c00.png "Screen Shot 2022-10-20 at 10.30.15 AM.png")

- **Start**: Starts the experiment. Customer enrollment and data collection begins immediately, but results will take up to 24 hours to begin populating.
- **Edit**: Change the name, enrollment criteria, or Offerings in an experiment before it's been started. After it's been started, only the percent of new customers to enroll can be edited.
- **Delete**: Deletes the experiment.

:::warning Sandbox

Test users will be placed into the experiment Offering variants, but sandbox purchases won't be applied to your experiment.

If you want to test your paywall to make sure it can handle displaying the Offerings in your experiment, you can use the [Offering Override](/dashboard-and-metrics/customer-history/offering-override) feature to choose a specific Offering to display to a user.
:::

## Running multiple tests simultaneously

You can use Experiments to run multiple test simultaneously as long as:

1. All audiences being enrolled in running tests are mutually exclusive (e.g. either two tests have exactly the same audience, or have fully unique audiences)
2. A given audience has no more than 100% of its new customers enrolled in experiments

If a test that you've created does not meet the above criteria, we'll alert you to that in the Dashboard and you'll be prevented from starting the test, as seen below.

![](/images/6e94d93-Screenshot_2024-01-29_at_11.22.45_AM_ad9a92d744ff985c3e425fa0ab1c46a6.png "Screen Shot 2022-10-20 at 10.30.15 AM.png")

### Examples of valid tests to run simultaneously

**Scenario #1 -- Multiple tests on unique audiences**

1. Test A is running against 100% of new customers for your App Store app
2. Test B, targeting 100% of new customers for your Play Store app, can also be run since its targeted audience is mutually exclusive with Test A, and no more than 100% of each audience's new customers are being enrolled in running experiments

**Scenario #2 -- Multiple tests on identical audiences**

1. Test A is running against 20% of new customers in Brazil
2. Test B, targeting 40% of new customers in Brazil, can also be run since its targeted audience is identical with Test A, and no more than 100% of that audience is being enrolled in running experiments

### Examples of invalid tests to run simultaneously

**Scenario #3 -- Multiple tests on partially overlapping audiences**

1. Test A is running against 100% of new customers for your App Store app
2. Test B, targeting 100% of new customers in Brazil, **cannot** be run because there is partial overlap between the audience of Test and the audience of Test B (new customers using your App Store app in Brazil).
   1. To run Test B, either Test A will need to be paused, or the audience of Test B will need to be modified to exclude new customers from the App Store app.

**Scenario #4 -- Multiple tests on >100% of an identical audience**

1. Test A is running against 20% of new customers in Brazil
2. Test B, targeting 100% of new customers in Brazil, **cannot** be run because the targeted audience would have > 100% of new customers enrolled in experiments, which cannot be possible.
   1. To run Test B, either Test A will need to be paused, or the enrollment percentage of Test B OR Test A will need to be modified so that the total does not exceed 100%.

:::info Editing running experiments

When an experiment is running, only the percent of new customers to enroll can be edited. This is because editing the audience being targeted would change the nature of the test, rendering its results invalid.
:::

## FAQs

| Question | Answer |
|----------|--------|
| Can I edit the Offerings in a started experiment? | Editing an Offering for an active experiment would make the results unusable. Be sure to check before starting your experiment that your chosen Offerings render correctly in your app(s). If you need to make a change to your Offerings, stop the experiment and create a new one with the updated Offerings. |
| Can I run multiple experiments simultaneously? | Yes, as long as they meet the criteria described above. |
| Can I run an experiment targeting different app versions for each app in my project? | No, at this time we don't support setting up an experiment in this way. However, you can certainly create unique experiments for each app, and target them by app version to achieve the same result in independent test. |
| Can I add multiple Treatment groups to a single test? | No, you cannot add multiple Treatment groups to a single test. However, by running multiple tests on the same audience to capture each desired variant you can achieve the same result. |
| Can I edit the enrollment criteria of a started experiment? | Before an experiment has been started, all aspects of enrollment criteria can be edited. However, once an experiment has been started, only new customers to enroll can be edited; since editing the audience that an experiment is exposed to would alter the nature of the test. |
| Can I restart an experiment after it's been stopped? | After you choose to stop an experiment, new customers will no longer be enrolled in it, and it cannot be restarted. If you want to continue a test, create a new experiment and choose the same Offerings as the stopped experiment. _(NOTE: Results for stopped experiments will continue to refresh for 400 days after the experiment has ended)_ |
| What happens to customers that were enrolled in an experiment after it's been stopped? | New customers will no longer be enrolled in an experiment after it's been stopped, and customers who were already enrolled in the experiment will begin receiving the Default Offering if they reach a paywall again. Since we continually refresh results for 400 days after an experiment has been ended, you may see renewals from these customers in your results, since they were enrolled as part of the test while it was running; but new subscriptions started by these customers after the experiment ended and one-time purchases made after the experiment ended will not be included in the results. |

