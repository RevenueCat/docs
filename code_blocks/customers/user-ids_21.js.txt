// Configure Purchases on app launch
await Purchases.configure(PurchasesConfiguration(<public_sdk_key>));

//...

// Later log in provided user Id
LogInResult result = await Purchases.logIn(<my_app_user_id>);