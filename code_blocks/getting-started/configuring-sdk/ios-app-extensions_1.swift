Purchases.configure(
  with: Configuration.Builder(withAPIKey: <your_api_key)
    .with(appUserID: <app_user_id>)
    .with(userDefaults: .init(suiteName: <group.your.bundle.here>))
    .build()
)
