// Configure Purchases
Purchases.configure(this, "public_sdk_key", "my_app_user_id")

// Initialize Iterable
IterableAPI.initialize(apiKey: "<YOUR_API_KEY>", launchOptions: launchOptions, config: config)

// Setting Iterable email or userId
IterableAPI.email = "user@example.com"
IterableAPI.userId = "user123"

// Set $email or $iterableUserId, (optional) $iterableCampaignId, $iterableTemplateId
Purchases.shared.attribution.setAttributes(["$email": IterableAPI.email,
                                            "$iterableUserId": IterableAPI.userId,
                                            "$iterableCampaignId": "123",
                                            "$iterableTemplateId": "123"])
