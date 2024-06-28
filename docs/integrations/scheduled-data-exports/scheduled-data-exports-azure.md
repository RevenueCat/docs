---
title: Azure Blob Storage
slug: scheduled-data-exports-azure
excerpt: Setting up Azure connection string for data transfer
hidden: false
---

RevenueCat can automatically send data deliveries of all of your apps' transaction data to an Azure Blob Storage container. These are in the form of .csv files delivered daily.

To start receiving these deliveries, you'll need the following details:

1. An Azure Storage Account [connection string](https://learn.microsoft.com/en-us/azure/storage/common/storage-configure-connection-string)
2. Azure blob storage container name

Once you have this information, you can add it to the Azure Blob Storage integration settings for your project in RevenueCat.

![Azure_Blob Storage delivery configuration in RevenueCat dashboard](/images/integrations/scheduled-data-exports/azure/integration-config.png)

:::info Allow 24 hours for initial delivery
Once you've configured the Azure storage integration in RevenueCat, allow up to 24 hours before the first file is delivered.
:::

### Receive new and updated transactions only

When configuring the deliveries, you have the option to receive a full export daily or only new and updated transactions from the last export. The first delivery will _always_ be a full export even if this option is selected.
