import RevenueCat

let posthogUserId = "POSTHOG_USER_ID"
Purchases.shared.attribution.setAttributes(["$posthogUserId": posthogUserId])

