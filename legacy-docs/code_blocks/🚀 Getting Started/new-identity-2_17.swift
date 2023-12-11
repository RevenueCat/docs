// Configure Purchases on app launch
Purchases.configure(withAPIKey: "my_api_key")

// ...

// Later log in provided user Id
Purchases.shared.identify("my_app_user_id") { (purchaserInfo, error) in
    // purchaserInfo updated for my_app_user_id
}
