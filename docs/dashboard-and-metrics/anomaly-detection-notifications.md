---
title: Anomaly Detection Notifications
slug: anomaly-detection-notifications
excerpt: Get notified about revenue anomalies with threshold or auto-detection alerts
hidden: false
---

With **Anomaly Detection Notifications**, you can receive alerts about potential revenue anomalies for your projects. Choose between **Threshold Alerts** or **Auto Detection Alerts** to monitor significant changes in revenue. Alerts are sent twice daily, evaluating the last 24 hours of data.

## How can I enable Anomaly Detection Notifications?

1. Click on [**Account**](https://app.revenuecat.com/settings/account) from the RevenueCat Dashboard.
2. Open the **Notifications** section where you'll see the **Anomaly Detection Notifications** option.
3. Select the Projects you want to monitor and choose your preferred alert type:
   - **Threshold Alerts**: Define a percentage change threshold. For example, set 20% to be notified if revenue changes by more than 20% in the last 24 hours.
     ![Screenshot](/images/threshold.png)
   - **Auto Detection Alerts**: Use our machine learning algorithm, which incorporates time series forecasting with weekly and yearly seasonalities, to automatically detect revenue outliers without needing to set a threshold.
     ![Screenshot](/images/autodetect.png)
4. Click **Add New Alert** to save your changes.

:::info
Currently, you can only set one alert (Threshold or Auto Detection) per project. This limitation is something we’re planning to improve in future updates.
:::

## How does Anomaly Detection work?

- **Threshold Alerts**: Alerts are triggered when the revenue change in the last 24 hours exceeds the percentage threshold you set.
- **Auto Detection Alerts**: Revenue data is analyzed using time series forecasting with weekly and yearly seasonalities to identify unexpected deviations or outliers.
- **Alert Frequency**: Anomaly checks are performed twice daily, and alerts are sent based on data from the last 24 hours.

## FAQs

| Question                                                                                      | Answer                                                                                                                                                           |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Can I configure multiple alerts (Threshold and Auto Detection) for the same project?          | Not at this time. Currently, you can only choose one type of alert per project. However, this is a feature we are planning to enhance in the future.             |
| When are the alerts sent?                                                                     | Alerts are sent twice daily after anomaly detection checks are performed.                                                 |
| How does the machine learning algorithm in Auto Detection work?                               | The algorithm uses time series forecasting to account for weekly and yearly seasonalities, identifying unexpected deviations or outliers in revenue data.        |
| Can I receive notifications for multiple projects?                                            | Yes, you can select multiple projects to monitor for anomalies from the **Notifications** section of your account settings.                                     |
| How do I know if an alert was triggered by a false positive?                                  | You can review your revenue trends on the RevenueCat Dashboard to validate alerts. If you encounter consistent false positives, reach out through [Support](https://app.revenuecat.com/settings/support). |

---