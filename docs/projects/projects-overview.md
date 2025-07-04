---
title: Projects
sidebar_label: Overview
slug: overview
---

A RevenueCat project is the top-level entity for RevenueCat - it's like a container for your apps, products, and entitlements. Once you've created a project and added your apps, you can implement the RevenueCat SDK in your app to start making purchases.

Within a project, you can also configure integrations like [Webhooks](/integrations/webhooks), run [Experiments](/tools/experiments-v1), and create remotely configurable [Paywalls](/tools/paywalls).

## Creating a Project

To create a Project, click the **'+ Create new project'** button in the Projects dropdown panel at the top of the RevenueCat dashboard.

You can customize your project by setting a name as well as your global [restore behavior](/getting-started/restoring-purchases) for the apps in your Project.

![Screenshot](/docs_images/projects/project-settings.png)

## Project Settings

### General Settings

- **Project Name**: The name of your project.
- **Project ID**: The unique identifier for your project, used in the v2 API.
- **Restore Behavior**: The behavior of the SDK when a user restores their purchases. [Learn more](/projects/restore-behavior).

### Transferring Ownership

:::note Requirements

1. Only the project's owner can transfer ownership
2. Only a collaborator with the [administrator role](/projects/collaborators#administrator) can receive project ownership
3. If the project has a Stripe app, the recipient must have their [Stripe account connected](/web/connect-stripe-account) to the project before the transfer
4. If the project uses the [Apple Search Ads integration](/integrations/attribution/apple-search-ads#1-configure-integration), it will need to be reconfigured after the transfer
   :::

#### Sending a transfer request

Because a [project's owner is responsible for billing](/welcome/set-up-revenuecat/account-management#where-to-find-invoices), a project transfer request must be accepted by the recipient.

To send a transfer request to a collaborator, navigate to your project's Settings page, then click the `Collaborators` tab. Find the collaborator you want to transfer the project to, click the `Actions` icon, and click `Transfer project ownership`:

![transfer project action button](/docs_images/projects/transfer-project-button.png)

Click `Transfer project ownership` in the confirmation modal:

![confirm project transfer request](/docs_images/projects/transfer-project-confirmation-modal.png)

The recipient will receive an email notification to accept ownership of the project.

#### Accepting a transfer request

Navigate to your project's Settings page, then click the `Collaborators` tab. Find your email address in the table and click the `Accept project ownership` link in the Status column:

![accept a project transfer request link](/docs_images/projects/accept-transfer-link.png)

Both the project owner and the recipient will see the Status as `Transfer pending` until the project transfer is complete.

_If you run into any issues, or the project transfer takes more than 1-2 business days, please [contact RevenueCat support](https://app.revenuecat.com/settings/support)._

<details>
<summary>Transferring apps between App Store Connect and Google Developer accounts</summary>

If you are changing the App Store Connect or Google Developer account, this will require credentials to be regenerated for both.

- For Apple, these are the [app-specific shared secret](https://www.revenuecat.com/docs/service-credentials/itunesconnect-app-specific-shared-secret), the [in-app purchase key](https://www.revenuecat.com/docs/service-credentials/itunesconnect-app-specific-shared-secret/in-app-purchase-key-configuration), and the [App Store Connect API key](https://www.revenuecat.com/docs/service-credentials/itunesconnect-app-specific-shared-secret/app-store-connect-api-key-configuration). The new owner will also want to make sure their Paid Applications Agreement is signed with Apple.

- For Google, these are the [service credentials](https://www.revenuecat.com/docs/service-credentials/creating-play-service-credentials). To reduce any downtime, we recommend the new owner generate these credentials in advance and test them on a RevenueCat project to make sure they are validated and working before the transfer.
</details>

## Next steps

If you've configured your project in the dashboard, it's time to connect to a store by adding your app.

<Button href="/docs/projects/connect-a-store">Connect to a store →</Button>
