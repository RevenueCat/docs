---
title: App Store Connect Setup Guide for First-Time Developers
slug: app-store-connect-setup-guide
sidebar_label: App Store Connect Setup Guide
excerpt: A complete walkthrough of setting up your first subscription app in App Store Connect, from developer account to submission.
hidden: false
---

This guide provides a comprehensive, step-by-step walkthrough for first-time developers setting up a subscription-based app in App Store Connect. We cover everything from enrolling in the Apple Developer Program to configuring your first subscription and submitting for review.

While this process can seem daunting, following these steps will ensure you have everything in place for a successful launch.

:::tip Already set up and ready to launch?
This guide is for first-time setup. If you're ready to go live, use our [App Subscription Launch Checklist](/test-and-launch/launch-checklist) to make sure you haven't missed anything.
:::

## 1. Apple Developer Program Enrollment

Before you can do anything else, you must enroll in the Apple Developer Program. This gives you access to App Store Connect, the portal for managing your apps.

### Enrollment Type: Individual vs. Organization

Your first decision is whether to enroll as an individual or an organization. This choice is important because it determines how your seller name appears on the App Store.

| Enrollment Type | Developer Name Displayed | D-U-N-S Number Required | Best For |
| :--- | :--- | :--- | :--- |
| **Individual** | Your personal legal name | No | Solo developers, hobbyists |
| **Organization** | Your company’s legal name | Yes | Businesses, startups, agencies |

:::tip
If you want your company name to appear on the App Store, you **must** enroll as an organization. To do this, you’ll first need a D-U-N-S Number.
:::

### Obtaining a D-U-N-S Number (Organizations Only)

A D-U-N-S Number is a unique nine-digit identifier from Dun & Bradstreet that Apple uses to verify your organization’s identity. 

1. **Check for an existing number:** Use Apple’s [D-U-N-S Number lookup tool](https://developer.apple.com/enroll/duns-lookup/) to see if your organization already has one.
2. **Request a free number:** If not, you can request one through the same tool. Be prepared to provide your legal entity name, address, and contact information.
3. **Wait for verification:** The process can take up to two weeks. D&B will contact you to verify your business details.

### Completing Enrollment

Once you have your D-U-N-S number (if needed), you can complete the enrollment process.

1. **Visit the [enrollment page](https://developer.apple.com/programs/enroll/)** and sign in with your Apple ID.
2. **Provide your information** (personal for individuals, company details for organizations).
3. **Pay the annual fee** of $99 USD (or local equivalent).

Approval is usually quick for individuals but can take a few days for organizations while Apple verifies your D-U-N-S information.


## 2. App Store Connect Initial Setup

With your developer account approved, it's time to configure App Store Connect for sales.

| Task | Description | iOS | Android |
| :--- | :--- | :--- | :--- |
| **Sign Paid Applications Agreement** | Before you can sell anything, you must accept the Paid Applications Agreement in the **Agreements, Tax, and Banking** section of App Store Connect. | ✅ | ❌ |
| **Set Up Banking Information** | Add your bank account details so Apple knows where to send your money. This is also in the **Agreements, Tax, and Banking** section. | ✅ | ❌ |
| **Complete Tax Forms** | Provide the necessary tax forms (like W-9 for U.S. entities) for each territory where you plan to sell your app. | ✅ | ❌ |

### Create a Bundle ID and App Record

1.  **Register a Bundle ID:** In the [Apple Developer Portal](https://developer.apple.com/account/resources/identifiers/list), create a unique Bundle ID for your app (e.g., `com.yourcompany.yourappname`). Enable the **In-App Purchase** capability.
2.  **Create an App Record:** In App Store Connect, go to ‘My Apps’ and click the ‘+’ to add a ‘New App’. Fill in the details, selecting the Bundle ID you just created.


## 3. Subscription Configuration

Now for the most important part: setting up your subscriptions.

### Create a Subscription Group

1. In App Store Connect, navigate to your app and click **Subscriptions** under the ‘Monetization’ section.
2. Click the ‘+’ to create a new **Subscription Group**. A group contains different subscription levels (e.g., Basic, Pro) and durations. Users can only be subscribed to one product within a group at a time.

### Add Subscription Products

For each subscription you want to offer, you’ll need to create a product in App Store Connect.

1.  **Reference Name:** An internal name for the subscription (e.g., "Pro Monthly").
2.  **Product ID:** A unique identifier for this subscription.
3.  **Pricing:** Set the price and duration (e.g., $9.99/month).
4.  **Localization:** Add display names and descriptions for each language you support.

:::tip
For a detailed walkthrough of this process, see our guide on [Configuring Products](/projects/configuring-products).
:::

### Configure Subscription Levels

Within a subscription group, you can rank subscriptions to define upgrade, downgrade, and crossgrade paths. Assign each subscription a level, with Level 1 being the lowest tier.


## 4. Testing and Submission

Before you can launch, you must test your subscriptions and submit everything for review.

### Sandbox Testing

Always test your subscriptions using a [Sandbox Apple ID](/test-and-launch/sandbox) to ensure everything works as expected. You can create sandbox accounts in App Store Connect under **Users and Access > Sandbox Testers**.

### Submitting Your App and In-App Purchases

:::danger 🚨 CRITICAL: Submit In-App Purchases with Your First App Version

When submitting a new app with subscriptions for the first time, you **MUST** include the in-app purchases in the same submission. They will not be reviewed otherwise.

1. In App Store Connect, go to your app version and scroll to the **In-App Purchases and Subscriptions** section.
2. Click **Select In-App Purchases or Subscriptions**.
3. Check the box next to each subscription you want to submit for review.
4. Click **Done**.

Ensure each subscription has a status of **‘Ready to Submit’** before you can add it to a review.

Once your first submission is approved, you can submit new in-app purchases without needing a new app version.
:::

### Final Submission

1. **Upload your app build** from Xcode.
2. **Complete all required metadata** on your app’s product page (description, screenshots, privacy policy, etc.).
3. **Add your subscriptions** to the submission as described above.
4. **Click ‘Submit for Review’**.

Congratulations! You’ve submitted your first subscription app.


## 5. Applying for the Small Business Program

Apple's App Store Small Business Program reduces the commission rate from 30% to 15% for developers earning under $1 million per year. As a first-time developer, you will almost certainly qualify.

### Eligibility

You are eligible if you earned less than $1 million in proceeds across all your apps in the previous calendar year.

### How to Apply

1. Go to the [App Store Small Business Program page](https://developer.apple.com/app-store/small-business-program/).
2. Click **Enroll** and sign in with your Apple Developer account.
3. Declare any associated developer accounts.
4. Submit your application.

You'll receive a confirmation email, and the reduced rate will take effect on the first day of the next month after approval.

### Informing RevenueCat

Once you're enrolled, you should let RevenueCat know so your charts and integrations reflect the correct commission rate. See our guide on [App Store Small Business Program](/platform-resources/apple-platform-resources/app-store-small-business-program) for instructions.

## Quick Reference Checklist

Use this checklist to track your progress through the setup process.

| Step | Task | Status |
| :--- | :--- | :--- |
| 1.1 | Determine enrollment type (Individual or Organization) | ☐ |
| 1.2 | Obtain D-U-N-S Number (if enrolling as Organization) | ☐ |
| 1.3 | Enroll in Apple Developer Program ($99/year) | ☐ |
| 2.1 | Sign Paid Applications Agreement | ☐ |
| 2.2 | Set up banking information | ☐ |
| 2.3 | Complete tax forms | ☐ |
| 2.4 | Create Bundle ID with In-App Purchase capability | ☐ |
| 2.5 | Create app record in App Store Connect | ☐ |
| 3.1 | Create subscription group | ☐ |
| 3.2 | Add subscription products with pricing | ☐ |
| 3.3 | Configure subscription levels | ☐ |
| 4.1 | Create sandbox tester accounts | ☐ |
| 4.2 | Test all subscription flows | ☐ |
| 4.3 | Upload app build from Xcode | ☐ |
| 4.4 | **Add subscriptions to app submission** | ☐ |
| 4.5 | Submit for review | ☐ |
| 5.1 | Apply for Small Business Program | ☐ |
| 5.2 | Inform RevenueCat of enrollment | ☐ |

## Next Steps

- **[App Subscription Launch Checklist](/test-and-launch/launch-checklist):** Our pre-launch checklist to ensure you haven't missed anything.
- **[Configuring Products](/projects/configuring-products):** How to set up your products in RevenueCat.
- **[Apple App Store Rejections](/test-and-launch/app-store-rejections):** Common reasons for rejection and how to avoid them.
