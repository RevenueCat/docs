---
title: Apple Retention Messaging API
slug: apple-retention-messaging-api
excerpt: Enable Apple's retention messaging to reduce churn and improve subscription retention
hidden: false
---

:::info Pre-release feature
Apple’s Retention Messaging API is currently available to developers through a pre-release program.
:::

Apple’s Retention Messaging API allows you show messages to customers who are at risk of canceling their subscription. Retention messages help remind customers of the value of their subscription or present them with alternative options to continue their service.

RevenueCat supports the following message types:

1. **Text message:** A simple message highlighting subscription features or benefits.

![](/docs_images/platform-resources/apple/retention-messaging-text-based.png)

2. **Switch-plan message:** Suggests an alternative subscription plan that the customer could switch to, along with a short message.

![](/docs_images/platform-resources/apple/retention-messaging-switch-plan.png)

3. **Promotional-offer message:** Offers a discounted price for continuing the subscription, either at the same tier or a different tier of service, alongside a short message.

![](/docs_images/platform-resources/apple/retention-messaging-offer.png)

:::info Text + image support
Apple supports messages with images, but RevenueCat will initially focus on text-only, switch-plan, and promotional-offer messages. Support for image-based messages may be added in the future.
:::

These messages are shown to users after they tap Cancel Subscription on the subscription details page. On the Confirm Cancellation screen, users can either complete the cancellation, tap Don’t Cancel, or, depending on the message, redeem an offer or switch to a suggested subscription.

## Request access from Apple

Before you're able to start utilizing this feature, you’ll first need to request access from Apple.

1. [Navigate to the Apple's form](https://developer.apple.com/contact/request/retention-messaging-api/). Only the account holder can fill out this form.
2. Fill out the form with the following details:
   - **App Name**: Enter the name of your app.
   - **Apple ID:** You can find your Apple ID in App Store Connect under "App Information".

![](/docs_images/platform-resources/apple/apple_id.png)

- **Endpoint URL:** You can find this URL in your RevenueCat dashboard on the App Store app’s settings page.

![](/docs_images/platform-resources/apple/retention_message_endpoint_url.png)

- On the form, make sure to select **"My app currently has a subscription on the App Store."**

3. Submit the form and wait for Apple's approval
4. Apple will notify you once your request has been approved

Once Apple grants you access, please contact our [support team](https://www.revenuecat.com/support) and we’ll help get you set up.
