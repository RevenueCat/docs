// Configure Purchases on app launch
Purchases.configure({apiKey: <public_sdk_key>});

//...

// Later log in provided user Id
const { customerInfo, created } = await Purchases.logIn(<my_app_user_id>);
// customerInfo updated for my_app_user_id