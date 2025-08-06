import android.content.Context
import com.revenuecat.purchases.Purchases
import com.revenuecat.purchases.PurchasesConfiguration
import io.customer.sdk.CustomerIO

fun setupRevenueCatWithCustomerIo(context: Context) {
    // Configure RevenueCat first
    val config = PurchasesConfiguration.Builder(context, "public_sdk_key")
        .appUserID("your_app_user_id")
        .build()
    Purchases.configure(config)

    // Ensure Customer.io is initialized and identify has been called
    val customerIoId = CustomerIO.instance().identifier

    customerIoId?.let {
        Purchases.sharedInstance.setAttributes(mapOf("\$customerioId" to it))
    }
}

