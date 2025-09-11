// Configure Purchases on app launch
Purchases.configure(PurchasesConfiguration.Builder(this, <api_key>).build())
  
//...

// Later log in provided user Id
Purchases.sharedInstance.logInWith(<my_app_user_id>, ::showError) { customerInfo, created ->
  // customerInfo updated for my_app_user_id
}