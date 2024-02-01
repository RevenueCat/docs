---
title: Configuring Experiments
slug: configuring-experiments-v1
hidden: false
---

Before setting up an experiment, make sure you've created the products and Offerings that you want to test and added any new products to the appropriate entitlements in your project (more on this below). You should also test the Offerings you've chosen on any platform your app supports.

## Setting up a new experiment

![Once enabled, you can access the **Experiments** tab under **Product Setup**.](https://files.readme.io/ba143ea-Screen_Shot_2022-11-30_at_3.39.08_PM.png "Screen Shot 2022-11-30 at 3.39.08 PM.png")

Select **+ New** to create a new experiment.

![Creating a new experiment](https://files.readme.io/970b88e-Screen_Shot_2023-04-07_at_11.46.01_AM_1.png "Creating a new experiment")

Then, enter the following details:

- Experiment name
- Enrollment criteria (optional)
- Control variant
  - The Offering that will be used for your Control group
- Treatment variant
  - The Offering that will be used for your Treatment group (the variant in your experiment)

:::info Setting up an Offering for your treatment

If you've not setup multiple Offerings before, you'll be prompted to do so now, since you'll need at least 2 available Offerings to run an experiment.

The treatment Offering represents the hypothesis you're looking to test with your experiment (e.g. higher or lower priced products, products with trials, etc).

For App Store apps, we recommend setting up new products to test as a new Subscription Group so that customers who are offered those products through Experiments will see only that same set of products to select from their subscription settings.
:::

### Enrollment criteria

You may choose to setup custom enrollment criteria for your experiment to target a specific segment of your customers, using any combination of the following enrollment criteria:

| Dimension               | Description                                                                                                                   |
| :---------------------- | :---------------------------------------------------------------------------------------------------------------------------- |
| Apps                    | Which of your RevenueCat apps the experiment will be made available to. Set to **All apps** by default.                       |
| Countries               | Which countries are eligible to have their new customers enrolled in the experiment. Set to **All countries** by default.     |
| New customers to enroll | The percent of new customers meeting the above criteria that will be enrolled in your experiment. Set to **100%** by default. |

Once done, select **CREATE EXPERIMENT** and view your new experiment.

## Starting an experiment

When viewing a new experiment, you can start, edit, or delete the experiment.

![](https://files.readme.io/3e6f895-Screen_Shot_2022-10-20_at_10.30.15_AM.png "Screen Shot 2022-10-20 at 10.30.15 AM.png")

- Start: Starts the experiment. Customer enrollment and data collection begins immediately, but results will take up to 24 hours to begin populating.
- Edit: Change the name, enrollment criteria, or Offerings in an experiment before it's been started. After it's been started, only the percent of new customers to enroll can be edited.
- Delete: Deletes the experiment.

:::warning Sandbox

Test users will be placed into the experiment Offering variants, but sandbox purchases won't be applied to your experiment.

If you want to test your paywall to make sure it can handle displaying the Offerings in your experiment, you can use the [Offering Override](/docs/offering-override) feature to choose a specific Offering to display to a user.
:::

## FAQs

**Can I edit the Offerings in a started experiment?**

Editing an Offering for an active experiment would make the results unusable. Be sure to check before starting your experiment that your chosen Offerings render correctly in your app(s). If you need to make a change to your Offerings, stop the experiment and create a new one with the updated Offerings.

**Can I edit the enrollment criteria of a started experiment?**

Before an experiment has been started, all aspects of enrollment criteria can be edited. However, once an experiment has been started, only new customers to enroll can be edited; since editing the apps or countries that an experiment is exposed to would alter the nature of the test.

**Can I restart an experiment after it's been stopped?**

After you choose to stop an experiment, new customers will no longer be enrolled in it, and it cannot be restarted. If you want to continue a test, create a new experiment and choose the same Offerings as the stopped experiment.
(NOTE: Results for stopped experiments will continue to refresh for 400 days after the experiment has ended)

**What happens to customers that were enrolled in an experiment after it's been stopped?**

New customers will no longer be enrolled in an experiment after it's been stopped, and customers who were already enrolled in the experiment will begin receiving the Default Offering if they reach a paywall again.
Since we continually refresh results for 28 days after an experiment has been ended, you may see renewals from these customers in your results, since they were enrolled as part of the test while it was running; but new subscriptions started by these customers after the experiment ended and one-time purchases made after the experiment ended will not be included in the results.
