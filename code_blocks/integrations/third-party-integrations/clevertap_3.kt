// Configure Purchases SDK
Purchases.configure(this, "public_sdk_key", "my_app_user_id")

// Configure CleverTap SDK
cleverTapDefaultInstance = CleverTapAPI.getDefaultInstance(this)

val cleverTapId = cleverTapDefaultInstance?.cleverTapID?.also {
   Purchases.sharedInstance.setAttributes(mapOf("$cleverTapId" to it))
}