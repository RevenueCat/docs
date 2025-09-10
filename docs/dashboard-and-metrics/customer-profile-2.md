---
title: Customer Profile 2
slug: customer-profile-2
hidden: false
---

Use the Customer Profile to discover customer information (identifying information, recent purchases, entitlements, etc.) and perform actions such as granting refunds and adding Customer Attributes.

![Customer details](/docs_images/customers/customer-profile-page.png)

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

![Add customer note](/docs_images/customers/add-customer-note.png)

:::tip Writing a Customer Note
You can use Markdown formatting in a customer note. There is a limit of 255 characters

![Write customer note](/docs_images/customers/write-customer-note.png)
:::

At any time you can edit or delete a customer note by clicking on the action icon next to the note.

![customer note actions](/docs_images/customers/customer-note-actions.png)

:::info Limitations
There is a limit of 10 notes per customer.
:::

## Customer History

The 'Customer History' card shows a timeline of transactions and activity for the selected customer. These can be useful for debugging and triaging support issues by understanding when critical events happened for the customer.

![Customer history](/docs_images/customers/customer-history.png)

<div style={{display: "flex", justifyContent: "center", width: "100%"}}>
<!-- prettier-ignore -->
<Button href="/docs/customers/customer-history">Learn more about Customer History →</Button>
</div>

## Entitlements

The 'Entitlements' card gives you a quick glance at the current entitlement status for a user. You can see which product(s) or [Entitlement(s)](/getting-started/entitlements) have been purchased, and when they'll renew or cancel.

![](/docs_images/customers/customer-entitlements.png)

<div style={{display: "flex", justifyContent: "center", width: "100%"}}>
<!-- prettier-ignore -->
<Button href="/docs/customers/customer-history">Learn more about Entitlements →</Button>
</div>

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
![](/docs_images/customers/add-attribute.png)

:::info All attributes are strings
Remember that all attributes are saved as strings, even if you enter a number. Read more about the restrictions on [Attributes](/customers/customer-attributes#section-restrictions).
:::

### Attribution

If you're sending attribution information to RevenueCat through the Purchases SDK, we will display the latest information from the network in the **Attribution** card for the customer.

![](/docs_images/customers/customer-attributes.png)

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

![Delete customer](/docs_images/customers/manage-customer.png)

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
