import AdSupport
import iAd
// ...
Purchases.automaticAppleSearchAdsAttributionCollection = true
Purchases.configure(withAPIKey: "public_sdk_key")
// ...
Purchases.shared.attribution.setAttributes([
    "$idfa": ASIdentifierManager.shared().advertisingIdentifier.uuidString
])
