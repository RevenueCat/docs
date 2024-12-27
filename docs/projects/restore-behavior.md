---
title: Restore Behavior
---

If an [App User ID](/customers/user-ids) tries to restore transactions that are already associated with a different identified App User ID in RevenueCat, you can configure how RevenueCat should respond by changing the dropdown in **Project Settings > General** in the dashboard:

![](/images/0fd6ec3-image_5078ab1b5e172296341eca8a385c8e15.png)

Note that the behavior set here will affect all apps under the project. Also note that **Share between App User IDs (legacy)** will only be available for legacy projects with this behavior already enabled, not new projects.

:::info Transfer behavior also applies to making purchases
The configured behavior will also apply if an identified App User ID [makes a new purchase](/getting-started/making-purchases) and the device receipt is already associated with a different identified App User ID in RevenueCat.
:::

:::info Transfer behavior only applies to purchases associated with an identified App User ID
The behavior selected in the dropdown only applies to purchases currently associated with an _identified_ App User IDs. If the purchase is currently associated with an anonymous App User ID, that App User ID will be aliased with the new App User ID instead (ie. the purchase is shared between the App User IDs).
:::

### Transfer to new App User ID

**Default ✅**

The default behavior is to transfer purchases between identified App User IDs if needed. This ensures that the customer restoring gets access to any purchased content, but only one customer at a time can have access. For example, if UserA buys a subscription, then UserB logs into your app on the same device and restores transactions, UserB would now have access to the subscription and it would be revoked from UserA.

If an identified App User ID restores and the owner of the receipt is anonymous, the anonymous identifiers will be merged (aliased) into the same customer profile in RevenueCat and treated as the same customer going forward. If an anonymous ID restores and the owner of the receipt is an identified App User ID, we will resort to the specified restore behavior and transfer the receipt to the anonymous user. And finally, if an anonymous ID restores and the owner of the receipt is also anonymous, the anonymous identifiers will be merged (aliased).

### Transfer if there are no active subscriptions

This behavior will transfer the purchases to the new App User ID unless they contain an active subscription. This behavior is especially beneficial if you have strict business logic that associate subscriptions with a given App User ID, but you still want churned subscribers who might later return to your app with a new App User ID to start a new subscription. This is especially relevant on iOS, where a receipt contains all purchases associated with a given Apple Account, so in the case of using the behavior "Keep with original App User ID", the customer would be able to start a new subscription on the store, but they would not be able to gain access because RevenueCat would associate that new subscription with the original App User ID (since it is on the same Apple receipt).

Note that the presence of one-time (non-subscription) purchases does not prevent transfers from happening.

### Keep with original App User ID

**Use with caution 🚧**

Returns an [error](/test-and-launch/errors#-receipt_already_in_use) if the App User ID attempting to restore purchase or make a new purchase is different from the original App User ID that made the purchase. This requires customers to sign in with their original App User ID, and is only allowed for apps that require every customer to create an account before purchasing.

### Share between App User IDs (legacy)

**Legacy ✅**

The legacy behavior is to merge (alias) any App User IDs that restore the same underlying subscription and treat them as the same subscriber moving forward. This applies to both anonymous and identified App user IDs. You can continue to use this legacy behavior as long as you'd like, **but you cannot re-enable the alias behavior if you switch to Transfer Purchases or Block Restores**.

### Example usage

| My app...                                                                                                                                                                  | Restore Behavior                                                                                                                                                                                                    |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Does not have any login mechanism and only relies on RevenueCat anonymous App User IDs.                                                                                    | **Transfer to new App User ID**. Required to allow customers to restore transactions after uninstalling / reinstalling your app.                                                                                    |
| Has an optional login mechanism and / or allows customers to purchase before creating an account in my app.                                                                | **Transfer to new App User ID**. Required to make sure customers that purchase without an account can restore transactions.                                                                                         |
| Requires all customers to create an account before purchasing.                                                                                                             | **Transfer to new App User ID**. Recommended to help customers restore transactions even if they forget previous account information.                                                                               |
| Requires all customers to create an account before purchasing, and has strict business logic that requires purchases to only ever be associated with a single App User ID. | **Keep with original App User ID**. Will make sure that transactions never get transferred between accounts. Your support team should be prepared to guide customers through an account recovery process if needed. |
