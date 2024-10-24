---
title: Setting up RevenueCat
slug: projects
excerpt: Create a free account, add a Project, and invite your team
hidden: false
---

## Register for a free account

RevenueCat accounts are free to set up, all you need is an email address.

<Button href="https://app.revenuecat.com/signup"
target="\_blank">Create an Account →</Button>

### Organizations / Enterprise

We recommend using a company account when registering for RevenueCat and setting up your app within a project. You'll be able to invite the rest of your team as [collaborators](/welcome/projects/collaborators) to your project, but **only the project owner can manage billing**. Project collaborators can't manage billing details.

## Configuring Projects

A project is a set of apps, and apps are paired with a single platform. For example, a typical project might contain one iOS app and one Google Play Store app.

All apps within one project share the same basic setup, including subscription status, integrations, and webhooks.

![Projects](/images/215395e-Screenshot_2023-04-07_at_2.30.53_PM_4d5fdac193f3764e28c217a12a0ac9e5.png)

#### Shared App User ID Namespace

Apps within the same project share the same App User ID namespace, meaning all the apps within the project can "share" purchases and subscription status (entitlements). In other words, the subscription status is tied to the same App User ID regardless of which app it's set in.

This allows customers to use a single subscription across multiple apps within a project. If you don't want your customers to share subscription status across apps, create a separate project for each app.

### Creating a Project

To create a Project, click the '+ Create new project' button in the Projects dropdown panel at the top of the RevenueCat dashboard:

![Screenshot](/images/e8b40b7-Screenshot_2023-03-27_at_9.36.54_AM_8f73d87a407787e30c8f3cbf62da9f59.png)

You can customize your project by setting a name as well as your global [restore behavior](/getting-started/restoring-purchases) for the apps in your Project.

![Screenshot](/images/0556eed-app.revenuecat.com_projects_85ff18c7_api-keys_4_6fcbbe437a19a892d823893c748925ec.png)

### Adding an App to a Project

Once you create a project you'll be prompted to add an app. Select the platform you wish to add and follow the configuration steps for that platform.

The field **App name** is required to add your app to RevenueCat. For iOS apps, the **In-App Purchase Key**(iOS) is also required. To make test and production purchases, the **Bundle ID** (iOS) / **Package Name** (Android) as well as the **Shared Secret**(iOS) / **Service Credentials** (Android) **must be configured**.

See our guides for configuring the [App Store Connect Shared Secret](/service-credentials/itunesconnect-app-specific-shared-secret), [App Store In-App Purchase Key](/service-credentials/itunesconnect-app-specific-shared-secret/in-app-purchase-key-configuration), [Play Service Credentials](/service-credentials/creating-play-service-credentials), and [Amazon Appstore Shared Secret](/service-credentials/amazon-appstore-credentials) for more information.

Note that Play service credentials can take up to **36 hours** to propagate throughout Google's servers.

:::info Here's a tip!
After registering your app, we recommend setting up [Platform Server Notifications](/platform-resources/server-notifications). These notifications aren't required but will speed up [webhooks](/integrations/webhooks) and integration delivery times and reduce lag time updating your subscribers.
:::

The rest of the configuration fields can be added later.

![App configuration page for an Apple App Store app](https://github.com/RevenueCat/revenuecat-docs/assets/5860245/7ddfb6e9-d730-4440-baba-d94bef820288)

:::info Projects can include many apps on the same platform
It's okay to add many apps on the same platform under one project. For example, if you have a suite of productivity apps on iOS that share a common subscription you can add them under the same project in RevenueCat.

However, if you have multiple iOS apps that all function independently and don't plan to have a shared subscription you should add them each under different projects.
:::

If you have multiple apps in RevenueCat but they are a single app in App Store Connect/Google Play Console such as in the case of a development and production app, these should have the same bundle id/package name and in-app purchase/service credentials. If they are different apps, these should have separate identifiers and credentials. 

### Transferring a Project to Another RevenueCat Account

To transfer specific projects from one account to another, [contact RevenueCat support](https://app.revenuecat.com/settings/support) for assistance.

## Invite your team

Collaborators allow you to give team members controlled access to your RevenueCat Project.

Read more about collaborators and permissions in our [Invite your team](/welcome/projects/collaborators) guide.

## Done with this setup?

If you've configured your project in the dashboard, it's time to install the SDK to start making purchases.

<Button href="/docs/getting-started/quickstart">Continue with the Quickstart →</Button>
