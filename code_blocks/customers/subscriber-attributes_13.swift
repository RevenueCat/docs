func application(_ application: UIApplication, didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) {
    Purchases.shared.attribution.setPushToken(deviceToken)
}
