---
title: Setting up RevenueCat
slug: projects
excerpt: Create a free account, add a Project, and invite your team
hidden: false
---

## Register for a free account

RevenueCat accounts are free to set up, all you need is an email address.

<a class="cta" href="https://app.revenuecat.com/signup" target="_blank">Create an Account →</a>

## Configure a new Project

A Project is a set of Apps, and Apps are paired with a single platform. For example, a typical Project might contain one iOS App and one Google Play Store App. All Apps within one Project share the same basic setup, including subscription status, integrations, and webhooks.

![Projects](https://files.readme.io/215395e-Screenshot_2023-04-07_at_2.30.53_PM.png)

## Creating a Project

To create a Project, click the '+ Create new project' button in the Projects dropdown panel at the top of the RevenueCat dashboard:

![Screenshot](https://files.readme.io/e8b40b7-Screenshot_2023-03-27_at_9.36.54_AM.png)

You can customize your project by setting a name as well as your global [restore behavior](/getting-started/restoring-purchases) for the apps in your Project.

![Screenshot](https://files.readme.io/0556eed-app.revenuecat.com_projects_85ff18c7_api-keys_4.png)

## Adding an App to a Project

Once you create a project you'll be prompted to add an App. Select the platform you wish to add and follow the configuration steps for that platform.

:::info Projects can include many apps on the same platform
It's okay to add many Apps on the same platform under one Project. For example, if you have a suite of productivity apps on iOS that share a common subscription you can add them under the same Project in RevenueCat. However, if you have multiple iOS apps that all function independently and don't plan to have a shared subscription you should add them each under different Projects.
:::

### Shared App User ID Namespace

Apps within the same Project share the same App User ID namespace, meaning all the apps can "share" purchases and subscription status. In other words, the subscription status is tied to the same App User ID regardless of which app it's set in.

### Transferring a Project to Another RevenueCat Account

To transfer specific projects from one account to another, [contact RevenueCat support](https://app.revenuecat.com/settings/support) for assistance.
