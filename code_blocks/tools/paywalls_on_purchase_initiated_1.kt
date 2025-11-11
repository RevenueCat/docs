@OptIn(ExperimentalPreviewRevenueCatUIPurchasesAPI::class)
@Composable
private fun LockedScreen() {
    YourContent()

    PaywallDialog(
        PaywallDialogOptions.Builder()
            .setRequiredEntitlementIdentifier(Constants.ENTITLEMENT_ID)
            .setShouldDisplayDismissButton(false)
            .setListener(
                object : PaywallListener {
                    override fun onPurchasePackageInitiated(rcPackage: Package, resume: Resumable) { 
                        println("on purchase initiated for $rcPackage")
                        performAuthentication { result -> 
                            when (result) {
                                is Success -> resume().also { 
                                    println("Authentication complete, presenting purchase flow")
                                }
                                is Failure -> resume(false).also {
                                    println("Authentication failed, canceling purchase flow")
                                    presentErrorAlert()
                                }
                            }
                        }
                    }
                }
            )
            .build()
    )
}
