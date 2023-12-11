// Configure Purchases SDK
Purchases.configure(this, "public_sdk_key", "my_app_user_id");

// Configure CleverTap SDK
CleverTapAPI clevertapDefaultInstance = CleverTapAPI.getDefaultInstance(this);

String cleverTapId = cleverTapDefaultInstance.getCleverTapId();
if (cleverTapId != null) {
  Map<String, String> attributes = new HashMap<String, String>();
	attributes.put("$cleverTapId", cleverTapId);

	Purchases.getSharedInstance().setAttributes(attributes);
}