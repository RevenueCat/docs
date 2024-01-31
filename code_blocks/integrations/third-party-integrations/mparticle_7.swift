// handle logging in
MParticle.sharedInstance()
         .identity.login(identityRequest, completion: { (result: MPIdentityAPIResult?, error: Error?) in
    guard error == nil else {
        // handle error
        return
    }
    guard let result else {
        // handle empty result
        return
    }
    // user identified successfully, get the mPID and send to RevenueCat
    let mPid = result.user.userId
    Purchases.shared.attribution.collectDeviceIdentifiers()
    Purchases.shared.attribution.setMparticleID(mPid.stringValue)
})
