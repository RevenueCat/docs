// Configure Purchases SDK
Purchases.configure(this, "my_api_key", "my_app_user_id");


// Set App User Id in mParticle
IdentityApiRequest identityRequest = IdentityApiRequest.withEmptyUser()
    .email("user@example.com")
    .customerId("123456")
    .build();

BaseIdentityTask identifyTask = new BaseIdentityTask()
    .addFailureListener(new TaskFailureListener() {
      @Override
      public void onFailure(IdentityHttpResponse identityHttpResponse) {
        // handle failure
      }
    }).addSuccessListener(new TaskSuccessListener() {
      @Override
      public void onSuccess(IdentityApiResult identityApiResult) {
        // user identified successfully, get the mPID and send to RevenueCat
        long mPid = identityApiResult.getUser().getId();
        Purchases.getSharedInstance().collectDeviceIdentifiers();
        Purchases.getSharedInstance().setMparticleID(String.valueOf(mPid));
      }
    });

MParticleOptions options = MParticleOptions.builder(this)
    .credentials("mParticle_app_key", "mParticle_app_secret")
    .identify(identityRequest)
    .identifyTask(identifyTask)
    .build();


// Start mParticle
MParticle.start(options);