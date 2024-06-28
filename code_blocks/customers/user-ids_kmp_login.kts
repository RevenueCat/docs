// Configure Purchases on app launch
Purchases.configure(apiKey = "<api_key>")

// Later log in with the provided user Id
Purchases.sharedInstance.logIn("<my_app_user_id>", ::showError) { customerInfo, created ->
  // customerInfo updated for my_app_user_id
}