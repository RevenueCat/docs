---
title: Commission Estimation
slug: commission
excerpt: How RevenueCat handles commission for Paddle transactions
hidden: false
---

## Paddle Commission

For Paddle transactions, RevenueCat does not currently calculate the `commission_percentage`. This field will always be `NULL` for Paddle events.

This is because Paddle's fees can vary based on your agreement and transaction type, and we do not receive the final fee amount from Paddle's webhooks.

As a result, Proceeds-based charts in the RevenueCat dashboard cannot accurately reflect net revenue for Paddle and will coalesce to the gross price. To calculate your net proceeds, you will need to apply Paddle's fee structure to the gross revenue data provided by RevenueCat.

For more information on Paddle's pricing, [click here](https://www.paddle.com/pricing).
