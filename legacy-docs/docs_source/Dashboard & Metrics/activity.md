---
title: Activity
slug: activity
excerpt: Real-time transaction dashboard
hidden: true
---
[block:callout]
{
  "type": "warning",
  "title": "Deprecated",
  "body": "The Activity page is being deprecated, check out the new [Customer Lists](doc:customer-lists) page for the latest."
}
[/block]
The Activity table is a real-time activity feed of transactions being recorded for your apps. Each row represents a unique transaction. A transaction can be a trial start, trial conversion, renewal, or regular purchase. 

For example, if user123 starts a trial then converts to a paid subscription they will have two rows in the Activity table.
![](https://files.readme.io/56d6827-Screen_Shot_2020-04-07_at_5.45.36_PM.png "Screen Shot 2020-04-07 at 5.45.36 PM.png")
## Available Columns
[block:parameters]
{
  "data": {
    "h-0": "Name",
    "h-1": "Description",
    "0-0": "App User ID",
    "0-1": "The [App User Id](doc:user-ids) that recorded the transaction.",
    "1-0": "Product",
    "2-0": "Revenue",
    "3-0": "Purchased",
    "4-0": "Expiration",
    "5-0": "Renewal",
    "3-1": "Fuzzy time when the transaction was recorded. It's possible for transactions to be recorded with a future timestamp since the stores may charge the user before a renewal date.",
    "4-1": "Fuzzy time of the end of the transaction period. This does not mean the subscription is set to expire at the end of the period (it may still renew).",
    "5-1": "Whether or not the transaction is an initial purchase or a renewal. This is not the auto-renew status of a transaction and doesn't indicate if it will renew or not at the end of the period.",
    "2-1": "The estimated USD conversion of the transaction gross revenue.",
    "1-1": "The product identifier for the transaction."
  },
  "cols": 2,
  "rows": 6
}
[/block]

[block:api-header]
{
  "title": "Finding Specific Transactions or Users"
}
[/block]

![](https://files.readme.io/b5165ef-Screen_Shot_2020-04-07_at_5.46.09_PM.png "Screen Shot 2020-04-07 at 5.46.09 PM.png")
You can drill into a specific customer page by entering either a Store Transaction ID or App User ID into the search field. The search field only supports exact matches.
[block:api-header]
{
  "title": "Applying Filters"
}
[/block]
You can apply one or more filters to the Activity table to view a subset of transactions.
[block:parameters]
{
  "data": {
    "h-0": "Filter",
    "h-1": "Description",
    "1-0": "Is Renewal",
    "1-1": "Allows you to only show Renewal or Initial Purchase transactions.",
    "2-0": "Is Trial Period",
    "2-1": "Allows you to only show Free Trial or Paid Subscription transactions.",
    "3-0": "Product",
    "3-1": "Allows you to only show transactions for specific product identifier(s).",
    "4-0": "Store",
    "4-1": "Allows you to only show transactions for specific store(s). e.g. `App Store`, `Play Store`, `Stripe`",
    "0-0": "App",
    "0-1": "Allows you to only show transactions from specific apps."
  },
  "cols": 2,
  "rows": 5
}
[/block]

[block:api-header]
{
  "title": "Selecting Date Ranges"
}
[/block]
You can apply date restrictions to the Activity table to only show transactions that occurred within a certain date range. Note that it's possible for transactions to be recorded with a future timestamp since the stores may charge the user before a renewal date.
![](https://files.readme.io/54c1e19-Screen_Shot_2020-04-07_at_5.46.22_PM.png "Screen Shot 2020-04-07 at 5.46.22 PM.png")

[block:api-header]
{
  "title": "Pagination"
}
[/block]
You can paginate through historical transactions by clicking the **Older** button. Clicking **Most Recent** button will reset the Activity table to the most recent transactions.
![](https://files.readme.io/28bd63c-Screen_Shot_2020-04-07_at_5.46.27_PM.png "Screen Shot 2020-04-07 at 5.46.27 PM.png")

[block:api-header]
{
  "title": "Exporting Data"
}
[/block]
Exporting data directly from the Activity table is not supported (yet). If you're a [Grow](https://www.revenuecat.com/pricing) customer or interested in custom data deliveries [contact sales](https://www.revenuecat.com/contact).
[block:api-header]
{
  "title": "Sandbox Data"
}
[/block]
The sandbox data toggle will change the Activity table to show either sandbox or purchases. If you don't see any transaction data after making a test purchase, make sure you've enabled the 'View sandbox data' toggle.
![](https://files.readme.io/ef2a134-Screen_Shot_2020-04-06_at_4.29.08_PM.png "Screen Shot 2020-04-06 at 4.29.08 PM.png")