@OptIn(ExperimentalPreviewRevenueCatUIPurchasesAPI::class)
@Composable
private fun LockedScreen() {
    YourContent()

    PaywallDialog(
        PaywallDialogOptions.Builder()
            .setRequiredEntitlementIdentifier(Constants.ENTITLEMENT_ID)
            .setListener(
                object : PaywallListener {
                    override fun onPurchaseCompleted(customerInfo: CustomerInfo, storeTransaction: StoreTransaction) {}
                    override fun onRestoreCompleted(customerInfo: CustomerInfo) {}
                }
            )
            .build()
    )
}
