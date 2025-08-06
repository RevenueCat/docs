import com.adjust.sdk.Adjust
import com.adjust.sdk.AdjustConfig
import com.revenuecat.purchases.Purchases

Purchases.configure(this, "public_sdk_key")

// Automatically collect the $gpsAdId and $ip values
Purchases.sharedInstance.collectDeviceIdentifiers()

// Set the Adjust Id on app launch if it exists
Adjust.getAdid()?.let {
    Purchases.sharedInstance.setAdjustID(it)
}

// IMPORTANT: Set the Adjust Id when it becomes available, if it didn't exist on app launch
val config = AdjustConfig(this, "yourAppToken", AdjustConfig.ENVIRONMENT_SANDBOX)
config.onAttributionChangedListener = { attribution ->
    Purchases.sharedInstance.collectDeviceIdentifiers()
    Purchases.sharedInstance.setAdjustID(attribution.adid)
}
