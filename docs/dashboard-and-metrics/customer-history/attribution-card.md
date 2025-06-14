---
title: Attribution
slug: attribution-card
hidden: false
---

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

## Next Steps

- [Aliases ](/dashboard-and-metrics/customer-history/aliases-card)
