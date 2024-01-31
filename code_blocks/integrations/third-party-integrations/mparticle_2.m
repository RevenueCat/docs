// Configure Purchases SDK
[RCPurchases configureWithAPIKey:@"public_sdk_key" appUserID:@"my_app_user_id"];


// Set App User Id in mParticle
MParticleOptions *options = [MParticleOptions optionsWithKey:@"mParticle_app_key"
                             secret:@"mParticle_app_secret"];
MPIdentityApiRequest *identityRequest = [MPIdentityApiRequest requestWithEmptyUser];
identityRequest.email = @"user@example.com";
identityRequest.customerId = @"123456";
options.identifyRequest = identityRequest;
options.onIdentifyComplete = ^(MPIdentityApiResult *_Nullable apiResult, NSError *_Nullable error) {
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
    [[RCPurchases sharedPurchases] collectDeviceIdentifiers];
    [[RCPurchases sharedPurchases] setMparticleID:mPid.stringValue];
};


// Start mParticle
[[MParticle sharedInstance] startWithOptions:options];