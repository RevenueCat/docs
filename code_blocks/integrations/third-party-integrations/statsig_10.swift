import RevenueCat
import Statsig

func setupRevenueCatWithStatsig() {
    Purchases.configure(withAPIKey: "public_sdk_key", appUserID: "your_app_user_id")
    Statsig.start(sdkKey: "STATSIG_CLIENT_KEY", user: StatsigUser(userID: "your_app_user_id"))
    if let stableID = Statsig.getStableID() {
        Purchases.shared.attribution.setAttributes(["$statsigUserID": stableID])
    }
}
