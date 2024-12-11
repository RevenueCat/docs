class MainActivity : Activity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        handleWebPurchaseRedemption(intent)
    }

    // This allows to respond to the intent if setting certain launch modes in the AndroidManifest.xml.
    override fun onNewIntent(intent: Intent) {
        super.onNewIntent(intent)
        handleWebPurchaseRedemption(intent)
    }

    @OptIn(ExperimentalPreviewRevenueCatPurchasesAPI::class)
    private fun handleWebPurchaseRedemption(intent: Intent) {
        // This allows to obtain the Redemption Link from the intent if any.
        val webPurchaseRedemption = intent.asWebPurchaseRedemption()

        if (webPurchaseRedemption != null) {
            // This will perform the actual redemption and return a result you can use to update your UI.
            Purchases.sharedInstance.redeemWebPurchase(webPurchaseRedemption) { result ->
                when (result) {
                    is RedeemWebPurchaseListener.Result.Success -> {
                        // Redemption was successful and entitlements were granted to the user.
                        updateUI(result.customerInfo)
                    }
                    is RedeemWebPurchaseListener.Result.Error -> {
                        // Redemption failed due to an error.
                        displayError(result.error)
                    }
                    RedeemWebPurchaseListener.Result.InvalidToken -> {
                        // The redemption link is invalid.
                        displayInvalidLinkError()
                    }
                    RedeemWebPurchaseListener.Result.PurchaseBelongsToOtherUser -> {
                        // The purchase associated to the link belongs to a different user and it cannot be redeemed.
                        displayBelongsToOtherUserError()
                    }
                    is RedeemWebPurchaseListener.Result.Expired -> {
                        // The redemption link has expired. A new one has been sent to the user to the provided obfuscated email.
                        displayExpiredMessage(result.obfuscatedEmail)
                    }
                }
            }
        }
    }
}
