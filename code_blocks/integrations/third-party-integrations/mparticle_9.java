// handle logging in
MParticle.getInstance().Identity().login(identityRequest)
    .addFailureListener(new TaskFailureListener() {
        @Override
        public void onFailure(IdentityHttpResponse identityHttpResponse) {
            // handle error
        }
    })
    .addSuccessListener(new TaskSuccessListener() {
        @Override
        public void onSuccess(IdentityApiResult identityApiResult) {
          // user identified successfully, get the mPID and send to RevenueCat
        	long mPid = identityApiResult.getUser().getId();
        	Purchases.getSharedInstance().collectDeviceIdentifiers();
          Purchases.getSharedInstance().setMparticleID(String.valueOf(mPid));
        }
    });