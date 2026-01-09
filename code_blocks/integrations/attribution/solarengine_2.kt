// ...
Purchases.configure(this, "public_sdk_key")
// ...

// Collect device identifiers (important for attribution matching)
Purchases.sharedInstance.collectDeviceIdentifiers()

// Retrieve the identifiers from the Solar Engine SDK
val distinctId = /* Solar Engine SDK Distinct ID (optional) */
val accountId = /* Solar Engine SDK Account ID (optional) */
val visitorId = /* Solar Engine SDK Visitor ID (optional) */

// Forward them to RevenueCat
Purchases.sharedInstance.setSolarEngineDistinctId(distinctId)
Purchases.sharedInstance.setSolarEngineAccountId(accountId)
Purchases.sharedInstance.setSolarEngineVisitorId(visitorId)
