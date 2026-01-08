// ...
Purchases.configure(this, "public_sdk_key")
// ...

// Retrieve the identifiers from the Solar Engine SDK
val distinctId = /* Solar Engine SDK Distinct ID */
val accountId = /* Solar Engine SDK Account ID (optional) */
val visitorId = /* Solar Engine SDK Visitor ID (optional) */

// Forward them to RevenueCat
Purchases.sharedInstance.setSolarEngineDistinctId(distinctId)
Purchases.sharedInstance.setSolarEngineAccountId(accountId)
Purchases.sharedInstance.setSolarEngineVisitorId(visitorId)
