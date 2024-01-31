// Configure Purchases
Purchases.configure(new PurchasesConfiguration.Builder(this, "public_google_sdk_key").build());

// Initialize Iterable
IterableApi.initialize(context, "<YOUR_API_KEY>", config);

// Setting Iterable email or userId
IterableApi.getInstance().setEmail("user@example.com");
IterableApi.getInstance().setUserId("user123");

// Set $email or $iterableUserId, (optional) $iterableCampaignId, $iterableTemplateId
Map<String, String> attributes = new HashMap<String, String>();
attributes.put("$email", IterableApi.getInstance().getEmail());
attributes.put("$iterableUserId", IterableApi.getInstance().getUserId());
attributes.put("$iterableCampaignId", "123");
attributes.put("$iterableTemplateId", "123");
Purchases.getSharedInstance().setAttributes(attributes);