// Configure Purchases on app launch
Purchases.configure(withAPIKey: <my_api_key>)

// ...

// Later log in provided user Id
Purchases.shared.logIn(<my_app_user_id>) { (customerInfo, created, error) in
    // customerInfo updated for my_app_user_id
}
