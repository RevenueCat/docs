---
title: Handling Refund Requests
slug: handling-refund-requests
hidden: false
---

The Apple App Store evaluates several factors when deciding whether to approve or deny your customer's refund request. RevenueCat can help influence this process by providing Apple additional data about your customer's consumption of the purchase, along with your preferred resolution at the time of their refund request. Apple will use this information to help inform their refund decisions. 

For additional insights in your refund requests, check out our [App Store Refund Requests Chart](/dashboard-and-metrics/charts/app-store-refund-requests-chart).

## Prerequisites
In order for RevenueCat to be notified of refund requests, you must have Apple App Store Server Notifications configured. If you do not have this set up yet, follow our setup instructions [here](/platform-resources/server-notifications/apple-server-notifications). 

Regardless of if you're on V1 or V2 of Apple App Store Server Notifications, RevenueCat supports both versions and we will be able to detect refund requests from Apple. For the best reliability, we recommend using V2 of the notifications.

## Handling of Refund Requests
To allow RevenueCat to send additional data of your customer's purchases to Apple, navigate to your RevenueCat app settings page and expand the **"Handling of refund requests"** section.

![](/images/apple-handling-refunds.png)

The dropdown selector under **"Refund requests handling preference"** allows you to choose your preferred outcome for the refund request. Note that your refund preference is one of the several factors that Apple will use to inform its refund decisions.

For all refund requests, you can select from the following options:
- **Do not handle**: RevenueCat will not respond to Apple's refund request on your behalf.
- **Always prefer granting refunds**: You prefer that Apple grants the refund.
- **Always prefer declining refunds**: You prefer that Apple declines the refund.
- **Submit consumption data and let Apple decide**: You have no preference regarding Apple's decision to grant or decline the refund.

Choose the option that best fits the majority of your use cases.

### Overriding refund preference
If, for example, you chose "Always prefer declining refunds", but have a specific customer or certain conditions under which you'd prefer Apple to grant a refund, you can override this preference before your customer submits their refund request directly to Apple.

To do so, you can use RevenueCat's [customer attributes](/customers/customer-attributes) to set a specific preference for any customer. RevenueCat provides a reserved customer attribute field, `$appleRefundHandlingPreference`, where you can set values such as:
- `GRANT_REFUND`: You prefer that Apple grants the refund for this customer
- `DECLINE_REFUND`: You prefer that Apple declines the refund for this customer
- `LET_APPLE_DECIDE`: You have no preference regarding Apple's decision to grant or decline the refund for this customer

:::info Overriding only applies when feature is enabled
Overriding the customer's refund preference will only apply if you have enabled handling refund requests from the dashboard. If you selected the "Do not handle" option, we will not send additional data over to Apple, regardless of what value the customer's `$appleRefundHandlingPreference` has.
:::

### Obtaining customer consent
By enabling this feature, you confirm that you have obtained consent from your customers to share their consumption data with Apple.

Here's a template to help get you started:

> **Consent to Share Consumption Data with Apple:**
>
> By using our app and making in-app purchases, you consent to our sharing of data regarding your usage and consumption of purchased content with Apple, as part of our efforts to resolve refund requests. This information may include details about how you have accessed and interacted with the purchased content. The purpose of sharing this data is to help Apple make an informed decision regarding refund requests. We ensure that such data sharing is done in compliance with Apple's policies and only as necessary to process your requests.

For general guidelines from Apple, visit their [documentation](https://developer.apple.com/documentation/appstoreserverapi/send_consumption_information#3921151).

If you have a use case where you only update your Terms & Conditions (or an equivalent document) for new customers, while existing customers remain on the original terms, contact [RevenueCat support](https://app.revenuecat.com/settings/support) for assistance.

## Data RevenueCat sends to Apple
Below are the [properties](https://developer.apple.com/documentation/appstoreserverapi/consumptionrequest) and data that RevenueCat will send to Apple when a refund request comes in.

| Property                   | Description                 |          What RevenueCat sends           |
|----------------------------|-----------------------------|------------------------------------------|
| accountTenure              | The age of the customer’s account. | <ul><li>If customer exists in RC: Calculate age based on the creation date of that customer and assess the [range](https://developer.apple.com/documentation/appstoreserverapi/accounttenure). </li><li>If customer does not exist in RC: 0 (*undeclared*)</li></ul> |
| appAccountToken            | The optionally UUID of the in-app user account that completed the in-app purchase transaction. | Empty string |
| consumptionStatus          | A value that indicates the extent to which the customer consumed the in-app purchase. | 0 (*undeclared*) |
| customerConsented          | A Boolean value of true or false that indicates whether the customer consented to provide consumption data. | true, by turning this on this functionality, we assume you are asking your customers for consent. |
| deliveryStatus             | A value that indicates whether the app successfully delivered an in-app purchase that works properly. | <ul><li> If the transaction exists in RC: 0 (*The app delivered the consumable in-app purchase and it’s working properly.*) </li><li>If the transaction does not exist in RC: 5 (*The app didn’t deliver the consumable in-app purchase for other reasons.*)</li></ul> |
| lifetimeDollarsPurchased   | A value that indicates the total amount, in USD, of in-app purchases the customer has made in your app, across all platforms. | Calculate the total of non-refunded transactions in USD and assess the [range](https://developer.apple.com/documentation/appstoreserverapi/lifetimedollarspurchased). |
| lifetimeDollarsRefunded    | A value that indicates the total amount, in USD, of refunds the customer has received, in your app, across all platforms. | Calculate the total of refunded transactions in USD and assess the [range](https://developer.apple.com/documentation/appstoreserverapi/lifetimedollarsrefunded). |
| platform                   | A value that indicates the platform on which the customer consumed the in-app purchase. | <ul><li> If your customer only has transactions from the App Store: 1 (*An Apple platform*) </li><li>If your customer has transactions from multiple stores: 0 (*undeclared*)</li></ul> |
| playTime                   | A value that indicates the amount of time that the customer used the app. | 0 (*undeclared*) |
| refundPreference           | A value that indicates your preference, based on your operational logic, as to whether Apple should grant the refund. | <ul><li> The value for your customer's reserved customer attribute `$appleRefundHandlingPreference` </li><li>Otherwise, we will fall back to the option you chose in the dropdown selector</li></ul> | 
| sampleContentProvided      | A Boolean value of true or false that indicates whether you provided, prior to its purchase, a free sample or trial of the content, or information about its functionality. | true |
| userStatus                 | The status of the customer’s account. | <ul><li> If the transaction exists in RC: 1 (*The customer’s account is active.*)</li><li>If the transaction does not exist in RC: 0 (*undeclared*)</li></ul> |

:::info Share your feedback
If you have any feedback about this feature, please reach out to our [RevenueCat support](https://app.revenuecat.com/settings/support) and we'll be happy to discuss your feedback or feature request!
:::
