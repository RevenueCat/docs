// Configure Purchases on app launch
Purchases.configure(new PurchasesConfiguration.Builder(context, <api_key>).build());

//...

// Later log in provided user Id
Purchases.getSharedInstance().logIn(<my_app_user_id>, new LogInCallback() {
	@Override
	public void onReceived(@NotNull CustomerInfo customerInfo, boolean created) {
		// customerInfo updated for my_app_user_id
	}
  
  @Override
  public void onError(@NotNull PurchasesError error) {

  }
});