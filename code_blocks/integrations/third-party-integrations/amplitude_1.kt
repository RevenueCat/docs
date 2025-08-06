import com.amplitude.api.Amplitude
import com.revenuecat.purchases.Purchases

// Configure Purchases SDK
Purchases.configure(this, "public_sdk_key", appUserID = "my_app_user_id")

// Configure Amplitude SDK
val amplitude = Amplitude.getInstance()
amplitude.initialize(this, "amplitude_api_key")
amplitude.userId = "my_app_user_id"

// Optional User Alias Object attributes
Purchases.sharedInstance.setAttributes(mapOf("\$amplitudeDeviceId" to amplitude.deviceId))
