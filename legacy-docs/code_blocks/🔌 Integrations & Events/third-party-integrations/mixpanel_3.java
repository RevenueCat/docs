// Configure Purchases SDK
Purchases.configure(this, "public_sdk_key", "my_app_user_id");

// Set App User Id in Mixpanel
MixpanelAPI mixpanel =
    MixpanelAPI.getInstance(context, MIXPANEL_TOKEN);

mixpanel.identify("my_app_user_id");