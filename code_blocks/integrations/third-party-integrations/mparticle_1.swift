// Configure Purchases SDK
Purchases.configure(withAPIKey: "public_sdk_key", appUserID: "my_app_user_id")

// Set App User Id in mParticle
let options = MParticleOptions(key: "mParticle_app_key",
                               secret: "mParticle_app_secret")
let identityRequest = MPIdentityApiRequest.withEmptyUser()
identityRequest.email = "user@example.com"
identityRequest.customerId = "123456"
options.identifyRequest = identityRequest
options.onIdentifyComplete = { (result: MPIdentityApiResult?, error: Error?) in
    guard error == nil else {
        // handle error
        return
    }
    guard let result else {
        // handle empty result
        return
    }

    // IMPORTANT: user identified successfully, get the mPID and send to RevenueCat
    let mPid = result.user.userId
    Purchases.shared.attribution.collectDeviceIdentifiers()
    Purchases.shared.attribution.setMparticleID(mPid.stringValue)
}

// Start mParticle
MParticle.sharedInstance().start(with: options)
