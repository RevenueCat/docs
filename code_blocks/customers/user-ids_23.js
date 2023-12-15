// Configure Purchases on app launch
Purchases.configureWith({ apiKey: <public_sdk_key> });

//...

// Later log in provided user Id

Purchases.logIn(
  <my_app_user_id>, 
  ({ customerInfo, created }) => {
    // customerInfo updated for my_app_user_id
  },
  error => {
  }
);