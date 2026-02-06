import androidx.compose.runtime.Composable
import com.revenuecat.purchases.ui.revenuecatui.PaywallDialog
import com.revenuecat.purchases.ui.revenuecatui.PaywallDialogOptions
import com.revenuecat.purchases.ui.revenuecatui.CustomVariableValue

@Composable
fun PaywallWithCustomVariables(
    onDismiss: () -> Unit
) {
    val options = PaywallDialogOptions.Builder()
        .setCustomVariables(
            mapOf(
                "player_name" to CustomVariableValue.String("John"),
                "level" to CustomVariableValue.String("42")
            )
        )
        .setShouldDisplayBlock { !it.entitlements.active.containsKey("pro") }
        .setDismissRequest(onDismiss)
        .build()

    PaywallDialog(paywallDialogOptions = options)
}
