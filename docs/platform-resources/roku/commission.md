---
title: Commission Estimation
slug: commission
excerpt: How RevenueCat handles commission for Roku transactions
hidden: false
---

## Roku Commission

For Roku transactions, RevenueCat does not currently calculate the `commission_percentage`. This field will always be `NULL` for Roku events.

This is because we do not have a definitive way to determine the commission rate applied to a given transaction.

As a result, Proceeds-based charts in the RevenueCat dashboard cannot accurately reflect net revenue for Roku and will coalesce to the gross price. To calculate your net proceeds, you will need to apply Roku's fee structure to the gross revenue data provided by RevenueCat.

For more information on Roku's developer fees, please refer to their official documentation.
