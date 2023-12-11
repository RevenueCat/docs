// Configure Purchases on app launch
Purchases.setup("public_sdk_key");

//...

// Later log in provided user Id

Purchases.identify(
  "my_app_user_id", 
  info => {
    // purchaserInfo updated for my_app_user_id
  },
  error => {
  }
);