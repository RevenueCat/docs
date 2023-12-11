// handle logging out
MParticle.getInstance().Identity().logout(identityRequest)
    .addFailureListener(new TaskFailureListener() {
        @Override
        public void onFailure(IdentityHttpResponse identityHttpResponse) {
            // handle error
        }
    })
    .addSuccessListener(new TaskSuccessListener() {
        @Override
        public void onSuccess(IdentityApiResult identityApiResult) {
          Purchases.getSharedInstance().reset();
        }
    });