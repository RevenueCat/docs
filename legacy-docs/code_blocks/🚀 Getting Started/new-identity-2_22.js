// Configure Purchases on app launch
Purchases.setup("public_sdk_key");

//...

// Later log in provided user Id
const purchaserInfo = await Purchases.identify("my_app_user_id");
// purchaserInfo updated for my_app_user_id