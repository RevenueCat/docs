// Configure Purchases on app launch
await Purchases.setup("public_sdk_key");

//...

// Later log in provided user Id
PurchaserInfo purchaserInfo = await Purchases.identify("my_app_user_id");