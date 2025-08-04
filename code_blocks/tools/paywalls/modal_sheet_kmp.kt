import com.revenuecat.purchases.ui.revenuecatui.Paywall
import com.revenuecat.purchases.ui.revenuecatui.PaywallOptions

@Composable
fun ModalPaywall() {
    val options = remember {
        PaywallOptions(dismissRequest = { 
            // Handle dismiss - this makes it a modal sheet
        }) {
            shouldDisplayDismissButton = true
        }
    }
    
    Paywall(options)
} 