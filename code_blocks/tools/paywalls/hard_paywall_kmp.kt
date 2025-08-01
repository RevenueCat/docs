import com.revenuecat.purchases.ui.revenuecatui.Paywall
import com.revenuecat.purchases.ui.revenuecatui.PaywallOptions

@Composable
fun HardPaywall() {
    val options = remember {
        PaywallOptions(dismissRequest = { 
            // Hard paywall - no dismissal allowed
            // Only dismiss on successful purchase or restore
        }) {
            shouldDisplayDismissButton = false // No dismiss button for hard paywall
        }
    }
    
    Paywall(options)
} 