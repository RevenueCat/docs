---
title: 15% Reduced Service Fee
slug: 15-reduced-service-fee
excerpt: How to have the reduced commission rate reflected in RevenueCat
hidden: false
---

Google allows developers that earn less than $1,000,000 USD per year to enroll in a reduced service fee tier. The service fee is 15%, instead of the usual 30%. RevenueCat automatically assumes developers are enrolled in the reduced service fee tier.

As of January 1st, 2022, [all Google Play subscription transactions](https://support.google.com/googleplay/android-developer/answer/112622?hl=en) are calculated using a 15% service fee, regardless of how much revenue a developer earns in one year or whether the developer is enrolled in the reduced service fee program. This is automatically reflected in RevenueCat metrics and events.

## How RevenueCat calculates Google Play service fees

For non-subscription transactions (or subscription transactions that occurred in 2021) RevenueCat assumes you are part of the reduced service fee program.

Once you cross $1,000,000 in a calendar year, RevenueCat will automatically switch from the 15% rate to a 30% service fee rate for the rest of the year.

### My service fees are not calculated correctly

There are a few edge cases in which the date we calculate to switch from a 15% to a 30% service fee might be incorrect:

- If you have multiple apps in the same account, our estimate might be incorrect.
- If you transfer apps to another owner, our estimate might be incorrect.

If you find that the service fee displayed on RevenueCat is incorrect, [contact us](https://app.revenuecat.com/settings/support) and we can adjust your project's service fee rate to be 30% for the rest of the calendar year.

## Opting into reduced service fees

To opt-in to Google Play's reduced service fee rate, you'll need to create an account group and link your account. Google has instructions on how to do this [here](https://support.google.com/googleplay/android-developer/answer/10632485).

Once this is done, you'll automatically be opted in to the reduced fee for your first $1,000,000 USD in revenue per year.
