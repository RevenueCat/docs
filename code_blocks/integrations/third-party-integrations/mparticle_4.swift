// handle logging out
MParticle.sharedInstance().identity.logout(completion: { (result: MPIdentityAPIResult?, error: Error?) in
    Purchases.shared().reset()
})
