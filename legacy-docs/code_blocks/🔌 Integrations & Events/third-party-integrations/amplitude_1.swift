// Configure Purchases SDK
Purchases.configure(withAPIKey: "public_sdk_key", appUserID: "my_app_user_id")

// Configure Amplitude SDK
Amplitude.instance()?.initializeApiKey("amplitude_api_key", userId: "my_app_user_id")

// Optional User Alias Object attributes
Purchases.shared.attribution.setAttributes(["$amplitudeDeviceId": <AMPLITUDE_DEVICE_ID>])
