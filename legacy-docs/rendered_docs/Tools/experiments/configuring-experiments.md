---
title: Configuring Experiments
slug: configuring-experiments
hidden: true
categorySlug: tools
order: 1
parentDoc: 649983b4c31b2e000a3c18ad
---
[block:callout]
{
  "type": "warning",
  "body": "Experiments is currently in private beta. If you're interested in testing this feature, [contact support](doc:scope-of-support#help-with-your-account-billing-or-feature-requests) to learn how to enable Experiments in your RevenueCat project."
}
[/block]
Before setting up an experiment, make sure you've created the products and offerings that you want to test and added any new products to the appropriate entitlements in your project. You should also test the offerings you've chosen on any platform your app supports.

# Setting up a new experiment
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/845f113-Screen_Shot_2021-12-07_at_8.48.35_PM.png",
        "Screen Shot 2021-12-07 at 8.48.35 PM.png",
        2500,
        1080,
        "#f8f9f9"
      ],
      "caption": "Once enabled, you can access the **Experiments** tab under **Product Setup**."
    }
  ]
}
[/block]
Select **+ New** and enter the following details:

- Experiment name
- Variant A - first offering
- Variant B - second offering
[block:callout]
{
  "type": "info",
  "title": "",
  "body": "The order of the variants doesn't matter. The experiment will try to test each offering equally."
}
[/block]
Once done, select **Add** and view your new experiment.
[block:image]
{
  "images": [
    {
      "image": [
        "https://files.readme.io/af68208-Screen_Shot_2021-12-07_at_8.53.19_PM.png",
        "Screen Shot 2021-12-07 at 8.53.19 PM.png",
        1964,
        1194,
        "#f3f4f4"
      ],
      "caption": "Creating a new experiment"
    }
  ]
}
[/block]
# Starting an experiment

When viewing a new experiment, you can start, edit, or delete the experiment.

- Start: Starts the experiment. Data collection and LTV begins immediately, but how quickly results start showing up depends on how active your users are.
- Edit: Choose different offerings for the experiment.
- Delete: Deletes the experiment.
[block:callout]
{
  "type": "warning",
  "title": "An experiment that has been started should not be edited.",
  "body": "Double check that your offerings work on all platforms your app supports. Editing an Offering that's part of an active Experiment will result in missing data for any changed products."
}
[/block]

[block:callout]
{
  "type": "info",
  "title": "Once an experiment is stopped, it can't be restarted.",
  "body": "If you want to continue a test, create a new experiment and choose the same offerings as the stopped experiment."
}
[/block]

![](https://files.readme.io/39cfaaa-Screen_Shot_2021-12-07_at_8.54.59_PM.png "Screen Shot 2021-12-07 at 8.54.59 PM.png")

[block:callout]
{
  "type": "warning",
  "title": "Sandbox",
  "body": "Test users will be placed into the experiment offering variants, but sandbox purchases won't be applied to your experiment.\n\nIf you want to test your paywall to make sure it can handle displaying the offerings in your experiment, you can use the [Offering Override](doc:offering-override) feature to choose a specific offering to display to a user."
}
[/block]