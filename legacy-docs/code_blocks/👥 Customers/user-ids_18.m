// Configure Purchases on app launch
[RCPurchases configureWithAPIKey:@<my_api_key>];

//...

// Later log in provided user Id
[[RCPurchases sharedPurchases] logIn:@<my_app_user_id> completion:^(RCCustomerInfo *customerInfo, BOOL created, NSError *error) {
    // customerInfo updated for my_app_user_id
}];