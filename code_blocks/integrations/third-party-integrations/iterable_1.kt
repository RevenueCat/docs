import com.iterable.iterableapi.IterableApi
import com.revenuecat.purchases.Purchases

Purchases.configure(this, "public_sdk_key", appUserID = "my_app_user_id")
IterableApi.initialize(this, "<YOUR_API_KEY>")

IterableApi.setEmail("user@example.com")
IterableApi.setUserId("user123")

Purchases.sharedInstance.setAttributes(mapOf(
    "\$email" to "user@example.com",
    "\$iterableUserId" to "user123",
    "\$iterableCampaignId" to "123",
    "\$iterableTemplateId" to "123"
))

