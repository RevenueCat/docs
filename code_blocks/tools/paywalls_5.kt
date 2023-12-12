@OptIn(ExperimentalPreviewRevenueCatUIPurchasesAPI::class)
@Composable
private fun PaywallScreen(dismissRequest: () -> Unit) {
    PaywallFooter(
        options = PaywallOptions.Builder(dismissRequest).build()
    ) {
        CustomPaywallContent()        
    }
}