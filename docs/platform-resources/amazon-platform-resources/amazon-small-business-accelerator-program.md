---
title: Amazon Small Business Accelerator Program
slug: /amazon-small-business-accelerator-program
hidden: false
---

Amazon supports a [Small Business Accelerator Program](https://developer.amazon.com/apps-and-games/blogs/2021/06/small-business-accelerator-program) that reduces fees from app sales from 30% to 20%.

Developers who earn under $1 million in revenue per year are eligible for the program. You can read more about the Small Business Accelerator Program [here](https://developer.amazon.com/apps-and-games/blogs/2021/06/small-business-accelerator-program).

As the reduced rate will affect the data sent for integrations as well as the data displayed in RevenueCat's [charts](/dashboard-and-metrics/charts), it's important to acknowledge membership in the Small Business Accelerator Program in your app settings.

## Informing RevenueCat

The Small Business Accelerator Program is configured on a per-app basis.

Visit your Amazon app settings in the RevenueCat dashboard **(Project Settings > Apps)** and expand the **Amazon Small Business Accelerator Program** dropdown.

![Image](https://files.readme.io/a98c6b9-184212955-3e1a76a5-18fd-448f-9d01-d46f995fe989.png)

#### Entry Date

Enter the effective date of entry for your membership in the Amazon Small Business Accelerator Program. Can be any date in the past or future.

This field is required if you add an **Exit Date**.

#### Exit Date

If you leave or have been removed from the program, enter the effective exit date.

## Considerations

#### Backdating Entry into Amazon Small Business Accelerator Program

You can set your entry date at any time, but please note: if you set it to a date in the past, we won't re-send [webhooks](/integrations/webhooks) and integration events with correct pricing data for transactions that have already occurred. To ensure accurate pricing data is sent to your integrations, set your effective entry date as soon as possible.

#### Charts

Charts will correctly calculate proceeds even if the entry date is in the past, but it will take up to 24 hours for your charts to recalculate past data.
