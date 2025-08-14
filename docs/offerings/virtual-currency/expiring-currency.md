---
title: Expiring Currency
sidebar_label: Expiring Currency
slug: expiring-currency
hidden: true
---

Expiring currencies are portions of a customer's balance that are removed after a period of time. They're ideal for creating urgency, running seasonal campaigns, and encouraging timely engagement. They can also support business logic where unused currencies don’t roll over, similar to a reset.

RevenueCat provides a built-in expiration functionality for virtual currencies. You can configure this directly in the dashboard and RevenueCat will automatically handle currency expiration without requiring a custom backend implementation.

Once configured, RevenueCat automatically handles currency expiration:

1. **Automatic Tracking**: RevenueCat tracks when each currency grant was made and calculates expiration times
2. **Scheduled Processing**: Expired currency is automatically removed from customer balances
3. **Audit Trail**: All expiration events are logged in the customer history

## Configuration

1. **Navigate to Virtual Currencies**: Go to your project's "Product catalog" → "Virtual currencies" section in the RevenueCat dashboard.

2. **Create or Edit Currency**: Either create a new virtual currency or edit an existing one.

3. **Configure Expiration**: In the currency settings, you'll find an "Auto-expire at the end of billing cycle" toggle where you can enable the granted currency to expire at the end of the billing period.

![](/docs_images/virtual-currency/expire-currency.png)

Expiration is currently linked to a product’s billing period and can only be configured in the following ways:

- **Trials**: Currency expires when the trial period ends
- **Normal Billing Periods**: Currency expires when the subscription billing cycle ends

If the toggle is enabled, it applies to both trials and normal billing periods.

4. **Save Configuration**: Select "Save" to apply the expiration rule.

## Customer History

![](/docs_images/virtual-currency/expiring-currency-customer-timeline.png)

All expiration events appear in the customer timeline so you can:

- See exactly when currency expired
- Track how much currency was deducted by the expiration
- Understand expiration in relation to other activities

## Product change behavior

### Deferred downgrades

Deferred downgrades occur when a subscription change is scheduled to take effect at the end of the current billing period. For expiring currencies, this means the original expiration date remains in effect, and no immediate changes occur. The currency will continue to follow the schedule tied to the current subscription until the downgrade takes effect, ensuring a seamless transition without altering existing balances.

### Immediate upgrades

If a product change is set to occur immediately, all remaining currency for that product will expire at once. When a product change triggers a new expiration date, such as during an immediate upgrade, the expiration date for any existing currency tied to the old product is adjusted accordingly. In this case, the old currency’s expiration date is moved up to match the new schedule, which may result in it expiring right away. This ensures that currency expirations remain consistent with the active product’s settings and prevents overlaps between old and new product currencies.

## Best Practices

### Clear Communication

Always let customers know when their currency will expire by providing clear expiration dates and times. Communicate this information early and often, and reinforce it with multiple reminders leading up to the expiration to ensure customers have every opportunity to use their balance. Additionally, consider informing the customer when the currency has expired so they know when their currency has expired.
