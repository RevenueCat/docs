// handle logging out
[[[MParticle sharedInstance] identity] logoutWithCompletion:^(MPIdentityApiResult *_Nullable apiResult, NSError *_Nullable error) {
    [[RCPurchases sharedPurchases] reset];
}];