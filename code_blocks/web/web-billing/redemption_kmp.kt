val webPurchaseRedemption = Purchases.parseAsWebPurchaseRedemption(urlString)

if (webPurchaseRedemption != null && Purchases.isConfigured) {
    Purchases.sharedInstance.redeemWebPurchase(webPurchaseRedemption) { result ->
        when (result) {
            is RedeemWebPurchaseListener.Result.Error -> {
                val error: PurchasesError = result.error
                // Redemption failed due to an error.
            }
            is RedeemWebPurchaseListener.Result.Expired -> {
                val obfuscatedEmail: String = result.obfuscatedEmail
                // The redemption link has expired. A new one has been sent to the user to the provided obfuscated email.
            }
            RedeemWebPurchaseListener.Result.InvalidToken -> {
                // The redemption link is invalid.
            }
            RedeemWebPurchaseListener.Result.PurchaseBelongsToOtherUser -> {
                // The purchase associated to the link belongs to a different user and it cannot be redeemed.
            }
            is RedeemWebPurchaseListener.Result.Success -> {
                val customerInfo: CustomerInfo = result.customerInfo
                // Redemption was successful and entitlements were granted to the user.
            }
        }
    }
}
