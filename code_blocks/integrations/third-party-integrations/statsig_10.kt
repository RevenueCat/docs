import android.content.Context
import com.revenuecat.purchases.Purchases
import com.revenuecat.purchases.PurchasesConfiguration
import com.statsig.androidsdk.Statsig
import com.statsig.androidsdk.StatsigUser

suspend fun setupRevenueCatWithStatsig(context: Context) {
    Purchases.configure(
        PurchasesConfiguration.Builder(context, "public_sdk_key")
            .appUserID("your_app_user_id")
            .build()
    )

    Statsig.start(context, "STATSIG_CLIENT_KEY", StatsigUser(userID = "your_app_user_id"))

    val stableID = Statsig.getStableID()
    Purchases.shared.attribution.setAttributes(mapOf("$statsigUserID" to stableID))
}
