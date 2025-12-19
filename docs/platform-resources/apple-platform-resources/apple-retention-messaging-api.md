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

1. **Text-based message:** A simple message highlighting subscription features or benefits.

![](/docs_images/platform-resources/apple/retention-messaging-api/light_-_message-based.png)

2. **Switch-plan message:** Suggests an alternative subscription plan that the customer could switch to, along with a short message.

![](/docs_images/platform-resources/apple/retention-messaging-api/light_-_switch-plan.png)

3. **Promotional-offer message:** Offers a discounted price for continuing the subscription, either at the same tier or a different tier of service, alongside a short message.

![](/docs_images/platform-resources/apple/retention-messaging-api/light_-_promotional_offer.png)

:::info Text + image support
Apple supports messages with images, but RevenueCat's support for image-based messages will be added soon.
:::

These messages are shown to customers after they tap Cancel Subscription on the subscription details page. On the Confirm Cancellation screen, customers can either complete the cancellation, tap Don’t Cancel, or, depending on the message, redeem an offer or switch to a suggested product.

:::info Supported OS versions
Retention messages are visible only to devices running iOS 15.1 or later, iPadOS 15.1 or later, visionOS 1 or later, or macOS 14 or later.
:::

## Prerequisites

Before you can configure retention messages, you’ll first need to request access from Apple.

1. [Navigate to the Apple's form](https://developer.apple.com/contact/request/retention-messaging-api/). Only the account holder can fill out this form.
2. Fill out the form with the following details:
   - **App Name**: Enter the name of your app.
   - **Apple ID:** You can find your Apple ID in App Store Connect under "App Information".

![](/docs_images/platform-resources/apple/retention-messaging-api/apple_id.png)

- **Endpoint URL:** You can find this URL in your RevenueCat dashboard on the App Store app’s settings page.

![](/docs_images/platform-resources/apple/retention-messaging-api/retention_message_endpoint_url.png)

- On the form, make sure to select **"My app currently has a subscription on the App Store."**

3. Submit the form and wait for Apple's approval
4. Apple will notify you once your request has been approved

Once Apple grants you access, please contact our [support team](https://www.revenuecat.com/support) and we’ll help get you set up.

## Configuration

For each product you offer, you'll need to consider whether you'll want to show a message in the confirm cancellation screen or not, and whether you'll show a promotional offer or an alternate product.

Every product needs to be configured with a default message that will be displayed as a fallback in case the realtime message with the promotional offer or alternate product fails.

The text displayed to customers is static and needs to be pre-approved by Apple. This means it needs to be generic and not contain any user-specific information. The promotional offer or alternate product can be selected dynamically.

RevenueCat allows you to configure both in Sandbox or Production. We recommend starting with sandbox to test before moving your messages to production. See [sandbox vs production](/platform-resources/apple-platform-resources/apple-retention-messaging-api#sandbox-vs-production) for more information.

### Creating a default message

In order to configure promotional-offer or switch-plan message, you'll need to first configure a default message to act as a fallback message.

1. Go to **Customer Center** → **Retention** tab
2. Find your app in the **Apple Retention Messaging API** section
3. Select the **Add default** button (for **+ Create default message** if no messages exist)

![](/docs_images/platform-resources/apple/retention-messaging-api/retention-messaging-api-default-1.png)

![](/docs_images/platform-resources/apple/retention-messaging-api/retention-messaging-api-default-2.png)

4. **Reference**: Enter a descriptive name for this message (for your internal reference)
5. **Products**: Select which products this default message applies to
   - If no products are selected, the message applies to all products
   - You can select multiple products
   - These products should be overlapping with the products you're planning on configuring for either your promotional offer or switch-plan message
6. **Customer-facing message**: Add messages for each locale you want this default message to be enabled for. For each locale, provide:
   - **Header**: The main message title (displayed prominently). Max length 66 characters
   - **Body**: The detailed message text. Maximum length 144 characters

You can also select **Auto translate** to utilize RevenueCat's translation feature. This will automatically translate empty locales from the English (United States) text. It only fills missing cells and will not overwrite existing translations.

:::info Important information
![](/docs_images/platform-resources/apple/retention-messaging-api/product-image.png)

- Product images are automatically pulled from App Store Connect
- Ensure your product images are properly configured in App Store Connect
- Messages must be approved by Apple before they can be displayed
  :::

7. Select **Save** to create your default message. The message will then be automatically submitted to Apple for review.

### Creating a message

Be sure that you have at least one default message created before you promotional-offer or switch-plan message.

1. Go to **Customer Center** → **Retention** tab
2. Find your app in the **Apple Retention Messaging API** section
3. Select **+ New message** or the **+ Create message** button (only selectable after a default message exists)

![](/docs_images/platform-resources/apple/retention-messaging-api/retention-messaging-api-promotional-1.png)

![](/docs_images/platform-resources/apple/retention-messaging-api/retention-messaging-api-promotional-2.png)

4. **Reference**: Enter a descriptive name for this message (for your internal reference)
5. **Eligibility requirements (optional)**: This is an optional setting where you can have custom targeting. We currently offer the following eligibility criterias:
   - First seen more than N days ago
   - First purchase more than N days ago
   - Storefront in list
   - Is in intro offer period

You can add multiple eligibility rules. All rules must be satisfied for the message to be shown. For customers that are not eligible, they will be shown the default message instead.

Add one or more associated offers that will be presented with this message.

![](/docs_images/platform-resources/apple/retention-messaging-api/retention-messaging-api-promotional-3.png)

6. **Associated offers**: This is the main differentiation between whether your message will be a promotional-offer, switch-plan, or text-based message.
   - **Active product**: This is the product the customer currently has
   - **Offered product**: Select the product that you want to present to the customer (the product that you want to suggest switching to)
     - Leave blank if you're creating a text-based message
   - **Promotional offer**: Select the promotional offer you'd like to offer to the customer
     - Leave blank if you're creating a switch-plan plan (no promotional offer)

You can add multiple associated offers. Make sure that the customer-facing message would be appropriate for all offers configured on the same page.

7. **Customer-facing message**: Add messages for each locale you want this message to be enabled for. For each locale, provide:
   - **Header**: The main message title (displayed prominently). Max length 66 characters
   - **Body**: The detailed message text. Maximum length 144 characters

You can also select **Auto translate** to utilize RevenueCat's translation feature. This will automatically translate empty locales from the English (United States) text. It only fills missing cells and will not overwrite existing translations.

:::info Message approval
Messages must be approved by Apple before they can be displayed
:::

8. Select **Save** to create your message. The message will then be automatically submitted to Apple for review.

## Managing messages

### Viewing messages

![](/docs_images/platform-resources/apple/retention-messaging-api/retention-messaging-api-overview-cards.png)

1. Go to **Customer Center** → **Retention** tab
2. Find your app in the **Apple Retention Messaging API** section
3. All messages are displayed as cards showing:
   - **Reference name**
   - **Type**: Default message, Promotional-offer, switch-plan, or text-based
   - **Status**: Active, Inactive, or review statuses
   - **Products**: Which active products the message applies to

### Message Status

Messages can have the following statuses:

- **Active**: Message is enabled and all locale messages are approved by Apple
- **Inactive**: Message is disabled
- **Active, with messages in review**: Some locale messages are pending Apple's approval
- **Active, with rejected messages**: Some locale messages were rejected by Apple. You should review the rejected messages and submit a new message for the rejected locale.

Messages are reviewed per locale, so different locales may have different approval statuses.

## Sandbox vs production

The Retention Messaging API supports both sandbox and production environments:

- **Sandbox**: Use for testing your messages before going live
- **Production**: Use for live messages shown to actual customers

### Using the Sandbox Mode Switch

![](/docs_images/platform-resources/apple/retention-messaging-api/retention-messaging-api-sandbox.png)

The sandbox mode switch is located in the **Apple Retention Messaging API** section header, in the top-right corner of the collapsible panel. When enabled, you'll see a **"SANDBOX DATA"** badge next to the section title

**What the switch does:**

- **When OFF (Production mode)**: Shows and edits production retention messaging configurations
- **When ON (Sandbox mode)**: Shows and edits sandbox retention messaging configurations
- All messages, configurations, and data displayed will be from the selected environment

### Testing in Sandbox Mode

To test this feature in Sandbox, we recommend using a Testflight build of your app. Make sure you have a button to open the “manage subscriptions” sheet from inside your app so you can test the cancellation flow. Remember subscription renewal date is 1 day regardless of the subscription period of the product you purchased.

To test with a more accelerated renewal rate, you can use your Sandbox account in Testflight. Check [Apple’s documentation](https://developer.apple.com/help/app-store-connect/test-a-beta-version/testing-subscriptions-and-in-app-purchases-in-testflight/) on how to set up your device.

:::info Manage subscription button
You must have a button in your TestFlight app to open up the "manage subscriptions" sheet, otherwise you will not be able to see the Confirm Cancellation screen. Please see our [SDK reference](<https://revenuecat.github.io/purchases-ios-docs/5.41.0/documentation/revenuecat/purchases/showmanagesubscriptions()/>) for more information.
:::

**Why use sandbox mode:**

- Messages are approved instantly, making it easier for you to test configurations without affecting production
- Preview messages before submitting to production
- Iterate on message content and design safely

**Best practices for sandbox testing:**

- **Start with simple rules**: Begin with basic eligibility criteria. This would be important unless you already have existing sandbox customers that will meet your eligibility criteria.
- **Test all locales**: Ensure messages work correctly in all target languages
- **Verify product associations**: Make sure promotional offers and alternate products are correctly linked

**Important**:

- Sandbox and production configurations are completely separate
- Messages must be configured and approved separately for each environment. Sandbox messages are typically approved instantly.
- Changes made in sandbox mode do not affect production configurations
- When you're ready to go live, recreate your messages in production mode

## Activate/deactivate messages

![](/docs_images/platform-resources/apple/retention-messaging-api/retention-messaging-api-activate.png)

Under each message type, you can use the activate/deactivate button in the upper right to enable or disable messages. Inactive messages won't be displayed to customers.
