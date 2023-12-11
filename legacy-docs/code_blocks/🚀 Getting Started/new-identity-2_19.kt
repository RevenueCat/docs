// Configure Purchases on app launch
Purchases.configure(this, "my_api_key")

//...

// Later log in provided user Id
Purchases.sharedInstance.identifyWith("my_app_user_id", ::showError) { purchaserInfo ->
  // purchaserInfo updated for my_app_user_id
}