import com.revenuecat.purchases.Purchases

val posthogUserId = "POSTHOG_USER_ID"
Purchases.sharedInstance.setAttributes(mapOf("\$posthogUserId" to posthogUserId))

