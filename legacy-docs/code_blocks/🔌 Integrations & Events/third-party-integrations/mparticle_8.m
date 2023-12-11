// handle logging in
[[[MParticle sharedInstance] identity] login:identityRequest
                                  completion:^(MPIdentityApiResult *_Nullable apiResult, NSError *_Nullable error) {
    if (error) {
        // handle error
        return;
    }
    if (apiResult == nil) {
        // handle empty result
        return;
    }
    // user identified successfully, get the mPID and send to RevenueCat
    NSNumber *mPid = [apiResult.user userId];
    [RCPurchases shared] collectDeviceIdentifiers];
    [RCPurchases shared] setMparticleID: [mPid stringValue]];
}];