import androidx.compose.runtime.Composable
import com.revenuecat.purchases.CustomerInfo
import com.revenuecat.purchases.ui.revenuecatui.PaywallDialog
import com.revenuecat.purchases.ui.revenuecatui.PaywallOptions
import com.revenuecat.purchases.ui.revenuecatui.CustomVariableValue

@Composable
fun PaywallWithCustomVariables(
    customerInfo: CustomerInfo,
    onDismiss: () -> Unit
) {
    val options = PaywallOptions.Builder { /* dismiss */ }
        .setCustomVariables(
            mapOf(
                "player_name" to CustomVariableValue.String("John"),
                "level" to CustomVariableValue.String("42")
            )
        )
        .build()

    PaywallDialog(
        options = options,
        shouldDisplayBlock = { !customerInfo.entitlements.active.containsKey("pro") }
    )
}
