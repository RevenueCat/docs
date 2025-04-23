import com.revenuecat.purchases.kmp.LogLevel
import com.revenuecat.purchases.kmp.Purchases
import com.revenuecat.purchases.kmp.configure

// If you have common initialization logic, call configure() there. If not,
// call it early in the app's lifecycle on the respective platforms.
// Note: make sure you use the correct api key for each platform. You could
// use Kotlin Multiplatform's expect/actual mechanism for this. 

Purchases.logLevel = LogLevel.DEBUG
Purchases.configure(apiKey = "<google_or_apple_api_key>") {
    appUserId = "<app_user_id>"
    // Other configuration options.
}