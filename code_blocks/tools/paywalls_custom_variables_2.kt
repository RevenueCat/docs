import com.revenuecat.purchases.CustomerInfo
import com.revenuecat.purchases.Offering
import com.revenuecat.purchases.ui.revenuecatui.activity.PaywallActivityLauncher
import com.revenuecat.purchases.ui.revenuecatui.CustomVariableValue

class MyActivity : ComponentActivity() {
    private val paywallActivityLauncher = PaywallActivityLauncher(this)

    fun showPaywall(offering: Offering) {
        paywallActivityLauncher.launch(
            offering = offering,
            customVariables = mapOf(
                "player_name" to CustomVariableValue.String("John"),
                "level" to CustomVariableValue.String("42")
            )
        )
    }
}
