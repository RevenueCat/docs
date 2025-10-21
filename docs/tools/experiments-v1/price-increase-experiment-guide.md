---
title: Price Increase Experiment Guide
slug: price-increase-experiment-guide
hidden: false
---

Testing price changes is one of the most impactful experiments you can run to optimize your app's monetization. This guide walks you through every step of setting up an experiment to test a +10% price increase, from creating new products in the stores to launching your experiment in RevenueCat.

:::tip Quick overview
Running a price increase experiment requires:
1. Creating new products at the increased price in App Store Connect and Google Play Console
2. Importing those products into RevenueCat and attaching them to your entitlement
3. Creating a new Offering with the higher-priced products
4. Configuring and launching an Experiment to compare the two Offerings
:::

## Prerequisites

Before you begin, make sure you have:

- An active RevenueCat project with at least one app configured
- Existing subscription products set up and selling in your app
- A dynamic paywall that fetches and displays the current Offering (required for Experiments)
- Access to the store(s) where you sell subscriptions. RevenueCat supports:
  - Apple App Store Connect
  - Google Play Console
  - Amazon Appstore
  - Stripe or Paddle for web

If you haven't implemented a dynamic paywall yet, see [Displaying Products](https://www.revenuecat.com/docs/getting-started/displaying-products) for guidance, or try [RevenueCat Paywalls](https://www.revenuecat.com/docs/tools/paywalls).

## Step 1: Create +10% products in the stores

You'll need to create new subscription products at your increased price point in each store where your app is available. These new products will be identical to your existing products except for the price.

### Apple App Store

:::info Prerequisites before creating products
Before you set up your products, make sure you have:
- The latest **Paid Applications Agreement** signed in the "Business" module in App Store Connect. You will not be able to test in-app purchases until this is signed.
- Completed the **Tax** and **Banking** tabs with all required forms signed
- A bank account linked to App Store Connect with status showing "Clear"

**You must complete all of these before you can test in-app purchases.**
:::

#### 1. Create a new subscription group

It's recommended to create a new subscription group for your price test products. Subscription Groups are Apple's way to organize products so users can switch between them. This keeps your test products isolated and ensures customers who are offered the higher-priced products through Experiments will only see those products in their subscription settings.

:::info Learn more about Subscription Groups
For a deeper understanding of how Subscription Groups work, read our [blog post on iOS Subscription Groups](https://www.revenuecat.com/blog/ios-subscription-groups-explained).
:::

1. Open [App Store Connect](https://appstoreconnect.apple.com) and navigate to your app
2. Go to the **Subscriptions** section under Features in the sidebar
3. Click the **+** button and select **Subscription Group**
4. Enter a **Reference Name** like "Premium Subscriptions - Price Test"
   - This name is only visible to you in App Store Connect, not to customers
5. Click **Create**

#### 2. Create the new subscription products

For each subscription duration you currently offer (e.g., monthly, annual), create a corresponding +10% version:

1. Select your new subscription group
2. Click **+** to add a new auto-renewable subscription
3. Enter a **Reference Name** like "Premium Monthly +10%"
   - This is internal only and will be used in App Store Connect and Sales reports
   - Won't be displayed to customers on the App Store
   - Can't be longer than 64 characters
4. Enter a unique **Product ID** like `premium_monthly_test` or `premium_monthly_v2`
   - This must be different from your existing product ID
   - **Product IDs cannot be reused across any of your apps, even if the product is deleted**
   - You'll need this exact ID later when importing to RevenueCat

:::info Tips for creating robust Product IDs
After you use a Product ID in App Store Connect, **it can't be used again across any of your apps, even if the product is deleted**. We recommend using a consistent naming scheme such as:

**`<app>_<price>_<duration>_<intro_duration><intro_price>`**

- **app:** A prefix unique to your app (can't be reused in future apps)
- **price:** The price in your default currency (e.g., 3999 for $39.99)
- **duration:** The subscription duration (e.g., 1y for yearly, 1m for monthly)
- **intro_duration:** The intro period duration, if any (e.g., 1w for one week)
- **intro_price:** The intro price in your default currency, if any (e.g., 0 for free)

Example: `rc_3999_1y_1w0` for a $39.99 yearly subscription with a 1-week free trial
:::

:::tip Pro Tip
Using a consistent naming scheme across product identifiers in App Store Connect can save you time in the future and make it easier to organize and understand your products with only the identifier.
:::

5. Select the **Subscription Duration** (match your existing product)
6. Click **Create**

#### 3. Set the price

1. In the **Subscription Pricing** section, click **Add Subscription Price**
2. Select a price tier that's closest to +10% above your current price
   - Apple uses discrete price tiers, so choose the nearest match
   - You can adjust pricing for specific storefronts if needed
3. Set the price to begin immediately
4. Click **Next** and review your pricing
5. Click **Add**

:::info Matching your current product configuration
To isolate the impact of price, make sure your test products match your control products in every way except price:
- **Introductory offers**: If your current products have free trials or intro pricing, add identical offers to your test products
  - Navigate to the **Introductory Offers** tab and click the **+** icon
  - Match the type (Free, Pay Up Front, or Pay As You Go), duration, and any regional restrictions
  - Learn more about [iOS introductory prices](https://www.revenuecat.com/blog/engineering/ios-introductory-prices/)
- **Promotional offers**: You can add these later if needed
- **Subscription group hierarchy**: Use the same ranking logic you use in your control group
:::

#### 4. Add required metadata

**Localizations:**

1. In the **App Store Information** section, click the **+** icon next to Localization
2. Choose each language/territory where your app is available
3. For each localization, provide:
   - **Subscription Display Name**: Use the same name as your control product
     - This will be visible to customers on the App Store and in subscription settings
     - Keep it short and descriptive (what access it unlocks)
   - **Description**: Use the same description as your control product
     - Also visible to customers on the App Store
4. Click **Save** for each localization

:::tip Pro Tip
Use the same Subscription Display Name and Description for all products that unlock the same level of access. This results in a much cleaner App Store listing as your suite of products grows and reduces customer confusion.
:::

**Review Information:**

1. In the **App Review Information** section, add:
   - **Screenshot**: A screenshot of your paywall showing this product (REQUIRED)
     - You cannot submit your product for review without this
     - Must be 640 x 920 pixels minimum
     - During testing, you can use a placeholder, but use a real paywall screenshot before final submission
   - **Review Notes** (optional): Any clarifications for the App Store reviewer
2. Click **Save**

#### 5. Submit for review

Before you can test or import your products into RevenueCat, they must be approved by Apple:

- Click **Submit for Review** in App Store Connect
- New products must be reviewed and approved before they can be used, even in sandbox testing
- Products typically get approved within 24-48 hours
- You can continue with the rest of the setup while waiting for approval

:::warning Subscription Group Localization Required
Before you can submit your products for review, you must add at least one localization to your subscription group:

1. Navigate to your Subscription Group settings
2. Click **Add localizations**
3. Provide:
   - **Subscription Group Display Name**: Use the same name as your control subscription group
     - This will be visible to customers on the App Store and in subscription settings
   - **App Name**: Choose your app name from the App Store listing or use a Custom Name
4. Click **Save**

**Pro Tip**: Use the same Subscription Group Display Name if you plan on creating multiple Subscription Groups that unlock the same content. This is especially important for price testing strategies.
:::

#### 6. Repeat for all durations

Create a test product for each duration you offer:
- If you sell monthly and annual, create both monthly_test and annual_test products
- If you sell weekly, monthly, annual, and lifetime, create test versions of each

### Google Play

#### 1. Navigate to subscriptions

1. Open [Google Play Console](https://play.google.com/console) and select your app
2. In the sidebar, select the **Products** dropdown, then choose **Subscriptions**

#### 2. Create new subscription products

For a price experiment, you'll create entirely new subscription products (not just new base plans on existing subscriptions). This keeps your test products completely separate from your control products.

1. Click **Create subscription**
2. Enter a **Product ID** like `premium_monthly-test`
   - This must be different from your existing subscription ID
   - Product IDs cannot be reused, even after deletion, so choose carefully
   - Use clear, descriptive IDs that indicate this is a test
3. Enter a **Name** (visible to customers) - use the same name as your control product
4. Enter a **Description** - use the same description as your control product
5. Click **Create**

#### 3. Add a base plan

For Google Play subscriptions, you must add a base plan. Base plans define the billing period, price, and renewal type for your subscription. Customers never purchase a subscription product directly - they always purchase a base plan of a subscription.

1. Click **Add base plan**
2. Set **Base plan ID** to something descriptive like `monthly-autorenewing-test`
   - Since Google introduced multiple base plans with Billing Client 5, it's good practice to be as clear as possible when naming your plans, such as: `<duration>-<renewaltype>`, e.g., `annual-autorenewing`
   - This ID must be unique within the subscription
   - Keep this ID handy - you'll need it for RevenueCat
3. Set the **Billing period** to match your control product (e.g., 1 month, 1 year)
4. Select **Auto-renewing** as the renewal type
5. Set your price at +10% above your control product's price
6. Click **Activate** to make the base plan active

#### 4. Add offers (if applicable)

If your control products include free trials or introductory pricing:

1. Click **Add offer** on your new base plan
2. Configure the offer to match your control product exactly:
   - Same trial duration
   - Same introductory price
   - Same eligibility requirements
3. Set the **Offer ID** to something descriptive
4. **Activate** the offer

#### 5. Repeat for all durations

Create test products (or base plans) for each duration you offer:
- Monthly test
- Annual test  
- Any other durations you sell

## Step 2: Import products to RevenueCat

Now that your higher-priced products exist in the stores, you need to import them into RevenueCat and attach them to your entitlement.

### Import your new products

1. Open your RevenueCat dashboard and navigate to your project
2. Click **Product catalog** in the left sidebar, then select **Products**
3. Click **New product**
4. Select the store (App Store, Google Play, etc.)
5. Click **Import Products** and RevenueCat will display all available products from your connected stores
6. Select all of your new +10% products
7. Click **Import Selected**

:::info Manual import alternative
You can also add products manually:
1. Click **New product**
2. Select the store (App Store, Google Play, etc.)
3. Enter the **Identifier** exactly as it appears in the store:
   - **Apple**: The Product ID from App Store Connect (e.g., `premium_monthly_test`)
   - **Google**: The format `subscription_id:base_plan_id` (e.g., `premium_monthly-test:monthly-autorenewing-test`)
4. Enter a **Display** name for the product, a human readable name for the product that will be shown in the RevenueCat dashboard instead of the product identifier.
5. Select a product type: Subscription, Consumable, Non-consumable, or Non-renewing subscription. 
6. Click **Create Product**
:::

### Attach products to your entitlement

For your price experiment to work correctly, both your control products and test products must be attached to the same entitlement. This ensures that customers get the same access regardless of which variant they're in.

1. Go to **Product catalog** → **Entitlements**
2. Select your existing entitlement (e.g., "pro" or "premium")
3. In the **Products** section, click **Attach**
4. Select all of your new +10% products
5. Click **Attach Products**

Your entitlement should now show both your original products and your new test products attached to it.

:::tip Why attach both?
When a user subscribes to any product attached to an entitlement, that entitlement becomes active for them. By attaching both control and test products to the same entitlement (e.g., "pro"), users in both experiment variants get the same premium access - you're only testing whether the price impacts conversion and revenue.
:::

## Step 3: Create Offerings for Control and Treatment

Offerings are how RevenueCat determines which products to show to each customer. You'll create two Offerings: one with your current prices (Control) and one with your +10% prices (Treatment).

### Create your Control Offering

If you don't already have an Offering for your current products:

1. Go to **Product catalog** → **Offerings**
2. Click **+ New**
3. Enter an identifier like `default`
   - This identifier cannot be changed later, so choose carefully
4. Enter a descriptive name like "Control - Current Pricing"
5. Click **Add**

#### Add packages to your Control Offering

Packages group equivalent products across platforms. For example, a "monthly" package would contain your iOS monthly product and your Android monthly product.

1. Click into your newly created Control Offering
2. Click **+ Add Package**
3. Select a **Package Type**:
   - Use standard types like `$rc_monthly` or `$rc_annual` for common durations
   - Use **Custom** for other types like lifetime purchases
4. Enter a description (optional, but helpful for your team)
5. Click **Add**

Now attach the appropriate products to this package:

1. Click into the package you just created
2. For each platform, click **Attach Product**
3. Select your current-price product for that platform
4. Click **Attach**

Repeat this process for each duration you offer (monthly, annual, etc.).

:::tip Package organization
Your Control Offering should have one package per subscription duration:
- `$rc_monthly` package → Contains your current monthly products
- `$rc_annual` package → Contains your current annual products

This makes it easy to duplicate and modify for your Treatment Offering.
:::

### Create your Treatment Offering

Now create your Treatment Offering with the +10% products:

1. From the **Offerings** page, find your Control Offering
2. Click the **...** menu next to it
3. Select **Duplicate**
4. Update the identifier to something like `treatment_price_increase`
5. Update the name to "Treatment - +10% Price Increase"
6. Click **Create**

#### Update packages with test products

For each package in your Treatment Offering:

1. Click into the package
2. For each platform, click **Remove** to detach the current product
3. Click **Attach Product** and select the corresponding +10% product
4. Click **Attach**

Verify that your Treatment Offering has the same structure as your Control Offering, but with all the higher-priced products.

### Test your Offerings

Before running your experiment, verify that both Offerings display correctly in your app:

1. Use the [Offering Override](https://www.revenuecat.com/docs/offering-override) feature to preview each Offering
2. Check that:
   - All products load correctly
   - Pricing displays as expected
   - Free trial text renders appropriately
   - The purchase flow completes successfully

:::warning Test thoroughly before starting your experiment
Once an experiment is running, you cannot edit the Offerings without invalidating your results. Make sure everything works perfectly before you start collecting data.
:::

## Step 4: Configure and launch your experiment

Now you're ready to create your price increase experiment.

### Create the experiment

1. Navigate to your project in RevenueCat
2. Click **Experiments** in the left sidebar
3. Click **+ New**

### Configure experiment settings

#### Required fields

1. **Experiment name**: Enter a descriptive name like "Monthly +10% Price Increase"
2. **Control variant**: Select your Control Offering
3. **Treatment variant**: Select your Treatment Offering (the +10% version)

:::info Using Placements
If you use [Placements](https://www.revenuecat.com/docs/tools/targeting/placements) to show different Offerings at different paywall locations in your app, you can configure which Offering to show at each Placement for both Control and Treatment variants. If you're not using Placements, skip this section.
:::

#### Audience customization

Control who gets enrolled in your experiment:

1. Under **Customize enrollment criteria**, select filters to refine your audience:
   - **Country**: Test in specific markets first
   - **App**: Include only specific apps in your project
   - **App version**: Target customers on specific app versions
   - **Platform**: Test on iOS only, Android only, or both
   - **SDK version**: If using new SDK features, specify minimum version

2. Under **New customers to enroll**, set the percentage of eligible new customers to enroll in the experiment:
   - This determines what percentage of your new customers will participate in the test
   - Enrolled customers are evenly split between variants
   
### Review and start

1. Review all your experiment settings carefully
2. Click **Create Experiment**
3. On the experiment detail page, verify everything looks correct
4. Click **Start** to begin enrolling customers

## Step 5: Monitor and analyze your experiment

### What to expect

- **Customers**: As soon as a new customer starts using the app for the first time, they'll be randomly assigned to Control or Treatment and counted in the experiment
- **Data collection**: Metrics will begin appearing within 24 hours of starting your experiment
- **Results refresh**: Your results will continue updating as new data comes in

### Key metrics to watch

1. **Initial conversion rate**: Are fewer people converting at the higher price?
2. **Realized LTV per paying customer**: Is the revenue per subscriber higher despite any drop in conversion?
3. **Trial start rate**: Is the higher price affecting how many people start trials?
4. **Net impact**: Is Treatment generating more total revenue than Control?

## Step 6: Implement your results

### If Treatment wins

1. Stop the experiment by clicking **Stop** (not Pause)
2. Navigate to **Product catalog** → **Offerings**
3. Find your Treatment Offering (the +10% version)
4. Click the **...** menu and select **Make Default**
5. Your new prices are now live for all customers!

### If Control wins

1. Stop the experiment
2. Your Control Offering should already be set as default
3. Consider testing a smaller price increase (e.g., +5%) in a follow-up experiment

### After stopping

- New customers will immediately receive the Default Offering
- Customers already enrolled in the experiment will transition to the Default Offering on their next offering view
- Results will continue to refresh for 400 days, allowing you to see long-term impacts

## Best practices and tips

### Test one variable at a time

Only change the price between Control and Treatment. Keep everything else identical:
- Same trial duration (or no trial)
- Same subscription durations
- Same introductory offers
- Same paywall copy and design

This ensures your results cleanly isolate the impact of price.

## Troubleshooting

### Products not showing in my app

If your test products don't appear after creating the Offerings:

1. Verify products are approved and active in the stores (not in draft state)
2. Check that products are properly imported in RevenueCat's **Products** section
3. Confirm products are attached to your entitlement
4. Verify products are added to packages in your Offering
5. Use the SDK debugger or logs to see what's being returned by `getOfferings()`
6. Try the [Offering Override](https://www.revenuecat.com/docs/offering-override) feature to test specific Offerings

See [Troubleshooting Empty Products/Offerings](https://www.revenuecat.com/docs/offerings/troubleshooting-offerings) for more help.

### Experiment won't start due to audience overlap

If you see an error about audience overlap:
- Check if you have another running experiment with the same or overlapping audience
- Pause or stop the conflicting experiment, or
- Adjust your new experiment's audience to be mutually exclusive

## FAQs

| Question | Answer |
|----------|--------|
| Can I test multiple price points simultaneously? | Yes! You can test up to 4 variants in a single experiment. We recommend using one as your Control (current price) and up to 3 Treatment variants (e.g., +10%, +20%, and +30% price increases). Enrolled customers will be split evenly between all variants. However, testing more variants means it will take longer to reach statistical significance since traffic is divided among more groups. If you don't have a high volume of new customers yet, start with a single Treatment variant to get clear results faster. This guide focuses on a simple two-variant test (Control vs Treatment), but you can add additional Treatment variants when creating your experiment. |
| What happens to users enrolled in the experiment after I stop it? | They'll see your Default Offering the next time they see an offering. Their data will continue to be tracked in your results for up to 400 days. |
| Can I test price increases larger than 10%? | Absolutely! This guide uses +10% as an example, but you can test any price point. |
| What if I want to test reducing prices? | This guide works exactly the same way for price decreases. Create products at -10% (or any reduction) and follow the same steps. |

Learn more about analyzing your experiment results in [Experiments Results](https://www.revenuecat.com/docs/tools/experiments-v1/experiments-results-v1).
