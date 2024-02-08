---
title: In-app purchases with Stripe RFA
slug: /in-app-purchases-with-stripe-rfa
excerpt:
  This document provides a standard recommendation for RFA users looking to
  incorporate an IAP channel.
hidden: false
---

## Web First Users

Web first users who are adding a minority share of in-app revenue will bolt on RevenueCat to their existing or new Stripe RFA implementation.

### Entitlements

Stripe is the source of truth for entitlements for Web customers. RevenueCat is the source of truth for entitlements for app store customers. An Entitlements service within the user’s application should determine eligibility by looking at the corresponding system and updating the user’s database with subscription status. Both web and mobile customers can then have their entitlements checked directly at the user’s database.

### Product Catalog

Product offerings for web customers are created within Stripe. Product offerings for app store customers need to be created in the appropriate app store and imported into RevenueCat for entitlements.

### Customer Service

Customer Service admins can perform subscription updates, cancellations, discounts, and refunds for Stripe customers within the Stripe dashboard. Customer service can perform subscription updates, discount, and debug entitlement issues for app store customers in the RevenueCat dashboard. It is typical to see users create an in-house application to consolidate customer service actions for customers in both systems.

### Business Analytics

#### Data Warehouse

In order to have a unified view for business analytics for both web and IAP customers we recommend to use [Stripe Data Pipeline](https://stripe.com/data-pipeline) and [RevenueCat data export](/integrations/scheduled-data-exports) functionality to consolidate data in a data warehouse.

#### 3rd Party Analytics

There are also several third-party analytics solutions that can consolidate data from multiple sources.

#### RevenueCat Analytics

RevenueCat has the ability to provide consolidated [charts](/dashboard-and-metrics/charts) for revenue processed across app stores and on Stripe.

### Financial Reporting

Stripe Revenue Recognition has the ability to do accrual accounting for all Stripe processed invoices. Due to limitations of app store reporting, cash accounting is used for the app store revenue. The lump sum payouts are accounted for separately from the Stripe revenue.

Stripe Revenue Recognition has the ability to import data from external sources. [Data imports](https://stripe.com/docs/revenue-recognition/data-import) allows users to import a CSV from an external source. The data will then be available in Revenue Recognition Reports.

![Image](https://files.readme.io/7fd1cb2-stripe_rfa_1.png)

## Mobile First Users

Mobile first users who are adding a majority of their revenue as in-app purchases or adding a minority share of web purchases will view RevenueCat for the source of truth for entitlements and business analytics.

### Entitlements

RevenueCat is the source of truth for entitlements for app store and web customers.

### Product Catalog

Product offerings for web customers are created within Stripe. Product offerings for app store customers need to be created in the appropriate app store and imported into RevenueCat for entitlements.

### Customer Service

Customer Service admins can perform subscription updates, cancellations, discounts, and refunds for Stripe customers within the Stripe dashboard.

Customer service can perform subscription updates, discount, and debug entitlement issues for app store customers in the RevenueCat dashboard. It is typical to see users create an in-house application to consolidate customer service actions for customers in both systems.

### Business Analytics

#### Data Warehouse

In order to have a unified view for business analytics for both web and IAP customers we recommend to use [Stripe Data Pipeline](https://stripe.com/data-pipeline) and [RevenueCat data export](/integrations/scheduled-data-exports) functionality to consolidate data in a data warehouse.

#### RevenueCat Analytics

RevenueCat has the ability to provide consolidated [charts](/dashboard-and-metrics/charts) for revenue processed across app stores and on Stripe.

### Financial Reporting

Stripe Revenue Recognition has the ability to do accrual accounting for all Stripe processed invoices. Due to limitations of app store reporting, cash accounting is used for the app store revenue. The lump sum payouts are accounted for separately from the Stripe revenue.

Stripe Revenue Recognition has the ability to import data from external sources. [Data imports](https://stripe.com/docs/revenue-recognition/data-import) allows users to import a CSV from an external source. The data will then be available in Revenue Recognition Reports.

![Image](https://files.readme.io/c6fb4f4-stripe_rfa_2.png)
