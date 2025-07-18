import com.revenuecat.purchases.ui.revenuecatui.Paywall
import com.revenuecat.purchases.ui.revenuecatui.PaywallOptions

@Composable
fun MyScreen() {
    val options = remember {
        PaywallOptions(dismissRequest = { TODO("Handle dismiss") }) {
            shouldDisplayDismissButton = true
        }
    }
    
    Paywall(options)
} 