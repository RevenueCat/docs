import com.revenuecat.purchases.ui.revenuecatui.Paywall
import com.revenuecat.purchases.ui.revenuecatui.PaywallOptions

@Composable
fun FullscreenPaywall() {
    val options = remember {
        PaywallOptions(dismissRequest = { 
            // Handle fullscreen paywall dismissal
            // Navigate away or close the screen
        }) {
            shouldDisplayDismissButton = false // Fullscreen without dismiss button
        }
    }
    
    Paywall(options)
} 