// Configure Purchases SDK
Purchases.configure(this, "public_sdk_key", "my_app_user_id");

// Set App User Id in Segment
Analytics.with(context).identify("my_app_user_id", null, null);