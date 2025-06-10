---
title: Sandbox Testing Access
sidebar_label: Sandbox Testing Access
slug: sandbox-access
---

When testing purchases in a sandbox environment, you may want to control whether those purchases grant access to entitlements or add to a customer's virtual currency balance. This setting gives you the flexibility to determine how sandbox behavior should be handled in your app during testing.

If you're testing with real app user IDs or using test app user IDs that overlap with production ones, it can lead to unexpected behavior or data inconsistencies. This setting gives you control over whether sandbox purchases should grant [entitlements](/getting-started/entitlements) or [virtual currencies](/offerings/virtual-currency).

![Sandbox Testing Settings](/docs_images/projects/sandbox_testing_settings.png)

You can configure this setting in the **General** tab of your project settings:

### Allow testing entitlements and virtual currency for

- **Anybody** _(default)_: All sandbox purchases will grant access to entitlements and add virtual currency, as configured. This is the default behavior and is recommended for early development or internal QA testing.
- **Allowed App User IDs only**: Only app user IDs that you’ve added to your allowlist will receive entitlements or virtual currency from sandbox purchases. You can add multiple IDs separated by spaces or line breaks. This may be useful when running restricted tests (e.g: Google Play closed testing).
- **Nobody**: No sandbox purchases will grant entitlements or virtual currency. Use this option if you want to prevent all testing from affecting entitlement access or virtual currency balances.

### Restricting Sandbox Access

If you update this setting to restrict access (e.g., changing from Anybody → Allowed App User IDs or Anybody → Nobody), here’s what to expect:

- ✅ Sandbox purchases will still be recorded.
  - All sandbox purchases continue to be processed and appear in RevenueCat, regardless of this setting.
- ✅ Only customers who meet the new setting will receive access and grants going forward.
  - Entitlements and virtual currency will only be granted to customers who match the current access level you've configured.
- 🔁 Previously granted entitlements will be removed.
  - If a customer no longer qualifies under the updated setting, any active entitlements previously granted from sandbox purchases will be automatically removed.
- 💰 Virtual currency already granted will remain.
  - If a sandbox purchase previously added virtual currency to a customer's balance, that currency will not be removed, even if the customer no longer qualifies under the new setting.
