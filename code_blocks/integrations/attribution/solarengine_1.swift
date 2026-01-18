import Purchases

// ...
Purchases.configure(withAPIKey: "public_sdk_key")
// ...

// Collect device identifiers (important for attribution matching)
Purchases.shared.collectDeviceIdentifiers()

// Retrieve the identifiers from the Solar Engine SDK
let distinctId = /* Solar Engine SDK Distinct ID (optional) */
let accountId = /* Solar Engine SDK Account ID (optional) */
let visitorId = /* Solar Engine SDK Visitor ID (optional) */

// Forward them to RevenueCat
Purchases.shared.attribution.setSolarEngineDistinctId(distinctId)
Purchases.shared.attribution.setSolarEngineAccountId(accountId)
Purchases.shared.attribution.setSolarEngineVisitorId(visitorId)
