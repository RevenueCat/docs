Purchases.configure(this, "my_api_key");


// Automatically collect the $gpsAdId and $ip values
Purchases.getSharedInstance().collectDeviceIdentifiers();

// Set the Adjust Id on app launch if it exists
if (Adjust.getAdid() != Null) {
	Purchases.getSharedInstance().setAdjustID(Adjust.getAdid());
}


// IMPORTANT: - Set the Adjust Id when it becomes available, if it
// didn't exist on app launch
config.setOnAttributionChangedListener(new OnAttributionChangedListener() {
    @Override
    public void onAttributionChanged(AdjustAttribution attribution) {
        Map<String, String> data = new HashMap<String, String>();
      
      	Purchases.getSharedInstance().collectDeviceIdentifiers();
      	Purchases.getSharedInstance().setAdjustID(attribution.adid);
    }
});