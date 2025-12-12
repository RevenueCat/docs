---
title: Customer Profile
slug: customer-profile
hidden: false
---

Use the Customer Profile to discover customer information (identifying information, recent purchases, entitlements, etc.) and perform actions such as granting refunds and adding Customer Attributes.

## Customer Details

Basic customer information, including their total amount spent in your app, is presented at the top of the page.

![Customer details](/docs_images/customers/customer-details.png)

- **Country:** displays the last seen IP address country for the user. Note that IP address is not persisted in RevenueCat - after the country is determined the IP address is dropped.
- **Total Spent:** displays the total USD equivalent of all purchases for this user and any aliases.
- **Last Opened** displays the last time this user or any aliases made a connection to RevenueCat servers.
- **User Since:** displays the time this App User ID was first created in RevenueCat.

## Customer Notes

Customer Notes allow you to store helpful details and reminders about the customer, including past support interactions.

To create a note, click the `+ Add note` button and enter your note in the modal.

![Customer notes](/docs_images/customers/customer-notes.png)

:::tip Writing a Customer Note
You can use Markdown formatting in a customer note. There is a limit of 255 characters.
:::

At any time you can edit or delete a customer note by clicking on the action icon next to the note.

:::info Limitations
There is a limit of 10 notes per customer.
:::

## Customer History

The 'Customer History' card shows a timeline of transactions and activity for the selected customer. These can be useful for debugging and triaging support issues by understanding when critical events happened for the customer.

The timeline events are generated from changes to the user's purchase receipt. This is the raw purchase data from Apple/Google presented in a more readable form and enhanced with RevenueCat price estimates. If there's no purchase history present, then the user either never sent RevenueCat a receipt or the receipt is empty.

:::info
If the Customer History is empty, it means we haven't received a purchase receipt for the user. If you think this may be a mistake, check out our [community article](https://community.revenuecat.com/dashboard-tools-52/when-a-purchase-isn-t-showing-up-in-revenuecat-105) on re-syncing a user's purchases.
:::

![Customer history](/docs_images/customers/customer-history.png)

### Event Types

Below is a table with all the event types you can expect in the customer history and a description of what they mean.

| Name                                              | User Description                                                                                            | Webhook Event                   |
| :------------------------------------------------ | :---------------------------------------------------------------------------------------------------------- | :------------------------------ |
| Made a purchase                                   | Purchased a non-renewing product                                                                            | `NON_RENEWING_PURCHASE`         |
| Started a subscription                            | Started a subscription without any free trial period.                                                       | `INITIAL_PURCHASE`              |
| Started a trial                                   | Started a subscription with a $0 introductory price.                                                        | `INITIAL_PURCHASE`              |
| Converted from a trial                            | Entered a paid subscription period after previously starting a trial.                                       | `RENEWAL`                       |
| Renewed                                           | Entered a paid subscription period after previously being in a paid period.                                 | `RENEWAL`                       |
| Changed renewal preference                        | Changed the product identifier of an existing subscription.                                                 | `PRODUCT_CHANGE`                |
| Opted out of renewal                              | Disabled the auto-renew status for an active subscription.                                                  | `CANCELLATION`                  |
| Resubscribed                                      | Re-enabled the auto-renew status for an active subscription after previously cancelling.                    | `UNCANCELLATION`                |
| Had a billing issue                               | Apple / Google received an error when attempting to charge the user's credit card.                          | `BILLING_ISSUE`                 |
| Was issued a refund                               | Apple customer support cancelled and refunded a user's subscription, or a Google subscription was refunded. | `CANCELLATION`                  |
| Cancelled due to not agreeing to a price increase | Did not agree to a price increase.                                                                          | `CANCELLATION`                  |
| Cancelled due to a billing error                  | Apple / Google was not able to charge the user's credit card and their subscription failed to renew.        | `CANCELLATION`                  |
| Cancelled due to unknown reasons                  | Apple cancelled the user's subscription and did not provide a cancellation reason.                          | `CANCELLATION`                  |
| Created a new alias                               | Was aliased with another App User Id.                                                                       | `SUBSCRIBER_ALIAS` (deprecated) |
| Was granted the ... Entitlement                   | Was granted an entitlement directly from the RevenueCat dashboard or API                                    | `NON_RENEWING_PURCHASE`         |
| Had their granted Entitlement removed             | A previously granted entitlement was removed from the RevenueCat dashboard or API                           | `CANCELLATION`                  |
| Granted ... [Currency]                            | Virtual currency was added to the customer's balance through a purchase or subscription                     | `VIRTUAL_CURRENCY_TRANSACTION`  |
| Spent ... [Currency]                              | Virtual currency was removed from the customer's balance                                                    | `VIRTUAL_CURRENCY_TRANSACTION`  |
| Enrolled in an experiment                         | Assigned to a variant as part of an [A/B experiment](/tools/experiments-v1).                                | `EXPERIMENT_ENROLLMENT`         |

:::info Missing or incorrect prices
It is possible for prices to be missing or incorrect, especially for apps that have migrated from a different system to RevenueCat. The stores provide very minimal pricing information for developers, so RevenueCat estimates the transaction price based off the data that is available - if you have old products that are no longer available for sale or changed the price of your products before using RevenueCat, you can expect some prices to be missing or incorrect. We do our best to backfill prices over time if more up-to-date information becomes available.
:::

### Event Details

You can click into events in the Customer History to view additional details about the event, including any integrations that may have been triggered as a result of the event.

![Event details](/docs_images/customers/customer-event-details.png)

### Event Timestamps and Ordering

There are a couple important timestamps to pay attention to in events: `purchase_at_ms` and `event_timestamp_ms`.

The `purchase_at_ms` field refers to the time when the transaction was purchased. This is how events on the Customer History overview are ordered.

Ex: Billing issues appear to happen after the renewal

The `event_timestamp_ms` field refers to the time that the event was generated, which is when RevenueCat detects changes to a user's purchase history. This does not necessarily coincide with when the action that triggered the event occurred (purchased, cancelled, etc). You should base when events were received on this value, so if there is any confusion on event order, checking `event_timestamp_ms` is recommended.

Ex: Checking the event_timestamp_ms will show that the renewal occurs after the billing issue. This value gets updated after the app stores backdate this in the receipt

## Entitlements

The 'Entitlements' card gives you a quick glance at the current entitlement status for a user. You can see which product(s) or [Entitlement(s)](/getting-started/entitlements) have been purchased, and when they'll renew or cancel.

Like the 'Customer History' view, this card is generated from current purchase receipt saved for the user.

![](/docs_images/customers/customer-entitlements.png)

:::info Grace periods will extend expiration dates
If the expiration date seems further out then you expect, e.g. 16 days past when your monthly subscription should renew, that indicates the user is in a grace period due to a failed payment. The store will attempt to re-charge the user there's no action to take on your part.
:::

### Transferring entitlements

You can manually [transfer entitlements](/getting-started/restoring-purchases#transfer-purchases) from one customer to another via the dashboard.

1. In the Entitlements section of the customer profile, click **Transfer**.

2. Enter the user to whom you want to transfer the entitlements.

3. Click **Find**. After a few moments the user should appear in the **Destination Customer details** section.

4. Review the transfer details and click **Transfer Entitlements** to perform the transfer. If you want to cancel the transfer use the back button in your browser.

5. Click **Transfer Entitlements** in the confirmation dialog.

6. If the transfer is successful, you will be redirected to the destination customer's profile.

:::info
Transferring an entitlement will:

1. Generate a transfer event in both customer profiles.
2. Send a transfer event to any integrations and webhooks you have configured.

:::

:::info
Transferring entitlements works with the block-restore behavior
:::

### Granted Entitlements

Granted Entitlements allow you to give a user access to premium content for a specific amount of time without requiring them to make a purchase or redeem a promo code. This can be useful for allowing beta users to preview content for free or resolving customer support issues. You must be using RevenueCat [Entitlements](/getting-started/entitlements) to use this functionality.

:::info Granted entitlements won't affect billing
Granted entitlements are a RevenueCat specific feature and work independently of the App Store, Play Store, Amazon, and Stripe billing and will never cancel a user's subscription, charge a user, issue a refund, or convert to a paid subscription.

Granted entitlements don't stack on top of store subscriptions, and are applied alongside them instead.
:::

#### Granting Entitlement access

To grant a customer access to an entitlement, start by clicking the "Grant" button in the "Entitlements" card in the right hand column of the Customer profile.

![Image](/docs_images/customers/granted-entitlement-modal.png)

First choose the [entitlement name](/getting-started/entitlements). Next select a preset duration or **Until date** to choose a custom end date. Finally, click **Grant**. You can grant multiple entitlements if you have different levels of access.

Granting an entitlement from the customer page will go into effect immediately, but you may need to [refresh CustomerInfo](/customers/customer-info) on the client to get the latest active entitlements. The access to the entitlement will automatically be revoked after the selected duration. Note that granted entitlements will work in sandbox and production apps, but the transactions they generate are always considered "production".

:::info
Granted entitlements will be prefixed with `rc_promo` in the customer dashboard and in SDKs. For webhooks, they will be sent as production `NON_RENEWING_PURCHASE` events with their store and period type set to `PROMOTIONAL`.
:::

#### Removing Granted Entitlements

Granted entitlements will automatically be removed after expiration. To remove access to an entitlement early, use the menu next to the granted entitlement in the Entitlements card on the Customer Profile.

![](/docs_images/customers/customer-history-remove-granted-entitlement.png)

:::info
Please note that the "Sandbox data" toggle should be unchecked to remove entitlements for both production and sandbox users.
:::

#### Granting Entitlements through the REST API

Looking to programmatically grant entitlements? View the REST API documentation [here](https://docs.revenuecat.com/reference/grant-a-promotional-entitlement).

### Refunding and Cancelling Purchases

Google Play and Web Billing (formerly RevenueCat Billing) purchases can be refunded directly through the RevenueCat dashboard. Granting a refund will immediately expire the subscription and remove any entitlement access. By refunding directly through RevenueCat you can ensure that refunds are accounted for immediately in all charts and integrations.

Web Billing subscriptions and Google Play subscriptions in the trial period can also be cancelled, which means that they will not renew at the next expiration date.

The entry point for refunding and cancelling purchases is the "..." menu on the subscription in the "Entitlements" card of the customer profile.

Apple doesn’t allow developers to grant refunds themselves, only through Apple customer support. However, Apple refunds are tracked with RevenueCat and accounted for in all charts and integrations.

### Extending Subscription Renewal Dates

You can extend the renewal date of eligible store subscriptions from the Customer Profile by clicking the ellipsis menu of a subscription and selecting "Extend Subscription".

![Extend subscription](/docs_images/customers/extend-apple-subscription.png)

#### Apple Subscription Extensions

Apple App Store subscriptions can be extended for up to 90 days at a time. Please note:

- Apple limits subscription extensions to two per year per customer.
- Apple immediately sends the customer an email notification of the extension.
- The customer is not charged for the extension.

When extending a subscriptions, you must specify the number of days (1-90) to extend the subscription, and the reason for the extension. The reason for the extension can be one of the following:

- Non-declared
- Customer Satisfaction
- Other
- Service Issue or Outage

You can read more about the reason codes in Apple's documentation: [Extend a Subscription Renewal Date](https://developer.apple.com/documentation/appstoreserverapi/extend_a_subscription_renewal_date).

In sandbox, the number of days value equals the number of minutes the subscription will be extended for.

Apple subscriptions can also be extended via the API: [Extend a Subscription Renewal Date](/docs/api-v1#tag/transactions/operation/extend-an-apple-subscription).

#### Google Play Subscription Deferrals

Google refers to subscription extensions as **Deferrals**. Google Play subscription renewals can be deferred via the API: [Defer a Google Play Subscription](/docs/api-v1#tag/transactions/operation/defer-a-google-subscription).

## Next Steps

- [Granted entitlements](/dashboard-and-metrics/customer-profile#entitlements)

## Current Offering

You can override the current offering that displays in your app on a per-user basis by selecting a different offering in the **Current Offering** card. This can be useful for:

- Testing your dynamic paywall in sandbox without affecting your production app by changing the current offering for your own sandbox user. This is especially important for testing your offerings for [Experiments](/tools/experiments-v1).
- Overriding the current offering for a customer in order to give them access to a specific in-app purchase that isn't otherwise available to the rest of your user base, as in the case of offering discounts in a customer support setting.

Choose a new current offering in the customer details sidebar:

![Override current offering](/docs_images/customers/offering-override.png)

## App User IDs

The App User IDs will hold both the Original App User ID and the list of aliases a particular customer has.

If this customer has any [aliases](/customers/user-ids#aliasing), they will appear in the 'Aliases' sub-section.

Aliasing is when two App User IDs are merged together and treated as the same user in RevenueCat - effectively connecting two sets of user data as one. The user can then be referenced by any of their aliases and the same result will be returned.

The most common reasons for aliases are when a RevenueCat anonymous user is identified with a provided App User ID in your system, and when users restore purchases usually after uninstalling/reinstalling your app.

![Aliases](/docs_images/customers/aliases-card.png)

The app_user_id that is sent in events is not necessarily the most recently seen alias, It is whatever is found first according to the following ordering:

1. Last seen identified alias. This is a non-anonymous id.
2. Last seen alias. This ID can be anonymous.
3. Any app user ID. In the case that no last seen data is available, RevenueCat will send any app user id associated with the user. Can be the original app user id or an alias.

The aliases listed in this App User IDs card are not necessarily the order that these aliases were last seen.

:::info
If you see unexpected aliases, you may be incorrectly identifying users. See our [guide on App User IDs](/customers/user-ids) for more information.
:::

## Attributes

The 'Attributes' card displays any [Attributes](/customers/customer-attributes) that have been saved for the user and allows you to add new attributes or edit existing ones.

![Attributes](/docs_images/customers/customer-attributes.png)

### Adding Attributes

To add a new attribute, tap the **+ New** button and enter the key name and value in the popup modal.

Attribute keys must follow certain restrictions, and some key names are reserved for RevenueCat. For a full list of key name requirements refer to the [Customer Attributes](/customers/customer-attributes) guide.

:::info All attributes are strings
Remember that all attributes are saved as strings, even if you enter a number. Read more about the restrictions on [Attributes](/customers/customer-attributes#section-restrictions).
:::

### Attribution

If you're sending attribution information to RevenueCat through the Purchases SDK, we will display the latest information from the network in the **Attribution** card for the customer.

Below are the possible attribution fields that can be displayed. Keep in mind that RevenueCat itself is not an attribution network, and will only display the information that available from the network you're using (e.g. Appsflyer, Adjust, etc.).

| Name     | Description                                             |
| :------- | :------------------------------------------------------ |
| Network  | The ad network, such as Apple Search Ads or Facebook.   |
| Campaign | The campaign name from the network.                     |
| Ad Group | The ad group or ad set name from the network.           |
| Keywords | The keyword(s) from the network.                        |
| Creative | The individual ad/creative name or id from the network. |

See our [attribution integrations](/integrations/attribution) to start sending this information.

## Delete Customer

You can delete a customer under the 'Manage' card at the bottom of the page. Deleting a customer will also remove all their purchase history for sandbox and production data which could change how charts and reports appear. Deleting customers should only be used to remove accounts you may have set up for testing or if the customer requests their data to be deleted.

Deleting customers through the RevenueCat dashboard or API clears out all of their data and is sufficient for GDPR erasure requests.

:::danger Be careful!
Deleting a customer with live purchases may have downstream effects on charts and reporting.
:::

:::info Deleting a customer from RevenueCat won't cancel mobile or Stripe Web Payments subscriptions

- You can cancel a customer's Google Play subscription before deleting them via our [API](https://docs.revenuecat.com/reference#revoke-a-google-subscription).
- It's not possible for you to cancel a customer's Apple subscription; this is a limitation of the App Store.
- Stripe Web Payments subscriptions are not canceled automatically, and should be canceled directly in the [Stripe Dashboard](https://support.stripe.com/questions/how-to-pause-payment-collection-or-cancel-subscriptions).
- Web Billing (formerly RevenueCat Billing) subscriptions are always canceled immediately when the customer is deleted.
  :::
