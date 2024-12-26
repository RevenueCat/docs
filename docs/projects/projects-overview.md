---
title: Projects
sidebar_label: Overview
slug: overview
---

A RevenueCat project is the top-level entity for RevenueCat - it's like a container for your apps, products, and entitlements. Once you've created a project and added your apps, you can implement the RevenueCat SDK in your app to start making purchases.

Within a project, you can also configure integrations like [Webhooks](/integrations/webhooks), run [Experiments](/tools/experiments-v1), and create remotely configurable [Paywalls](/tools/paywalls).

## Creating a Project

To create a Project, click the '+ Create new project' button in the Projects dropdown panel at the top of the RevenueCat dashboard:

![Screenshot](/images/e8b40b7-Screenshot_2023-03-27_at_9.36.54_AM_8f73d87a407787e30c8f3cbf62da9f59.png)

You can customize your project by setting a name as well as your global [restore behavior](/getting-started/restoring-purchases) for the apps in your Project.

![Screenshot](/images/0556eed-app.revenuecat.com_projects_85ff18c7_api-keys_4_6fcbbe437a19a892d823893c748925ec.png)

## Transferring a Project to Another RevenueCat Account

To transfer specific projects from one account to another, [contact RevenueCat support](https://app.revenuecat.com/settings/support) for assistance. At this time only entire projects can be transferred, this cannot be done on an app-level. If the project in question has a Stripe app, you will need to make sure that the receiver has their [Stripe account connected](https://www.revenuecat.com/docs/web/connect-stripe-account) to this project before transfer. And if the project uses [Apple Search Ads](https://www.revenuecat.com/docs/integrations/attribution/apple-search-ads#1-configure-integration) then this will need to be reconfigured after the transfer.

If you are changing the App Store Connect or Google Developer account, this will require credentials to be regenerated for both. For Apple, these are the [app-specific shared secret](https://www.revenuecat.com/docs/service-credentials/itunesconnect-app-specific-shared-secret), the [in-app purchase key](https://www.revenuecat.com/docs/service-credentials/itunesconnect-app-specific-shared-secret/in-app-purchase-key-configuration), and the [App Store Connect API key](https://www.revenuecat.com/docs/service-credentials/itunesconnect-app-specific-shared-secret/app-store-connect-api-key-configuration). The new owner will also want to make sure their Paid Applications Agreement is signed with Apple. For Google, these are the [service credentials](https://www.revenuecat.com/docs/service-credentials/creating-play-service-credentials). To reduce any downtime, we recommend the new owner generate these credentials in advance and test them on a RevenueCat project to make sure they are validated and working before the transfer.

## Next steps

If you've configured your project in the dashboard, it's time to connect to a store by adding your app.

<Button href="/docs/projects/connect-a-store">Connect to a store →</Button>
