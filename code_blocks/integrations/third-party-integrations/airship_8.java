@Override
public void onCreate(Bundle savedInstanceState) {
  
  super.onCreate(savedInstanceState);

  // Configure Purchases SDK
  Purchases.configure(this, "public_sdk_key", "my_app_user_id");

  // Airship should already be initialized using Autopilot
  // https://docs.airship.com/platform/android/getting-started/#takeoff

  // Identify the user in Airship
  UAirship.shared().getContact().identify("my_app_user_id");

  // ...
}