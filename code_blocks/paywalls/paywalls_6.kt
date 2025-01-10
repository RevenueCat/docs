@OptIn(ExperimentalPreviewRevenueCatUIPurchasesAPI::class)
@Composable
private fun PaywallScreen(offering: Offering, dismissRequest: () -> Unit) {
    PaywallFooter(
        options = PaywallOptions.Builder(
            options = PaywallOptions.Builder(dismissRequest).build()
        )
            .setOffering(offering)
            .build()
    ) {
        CustomPaywallContent()        
    }
}