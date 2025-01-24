String redemptionUrl = 'YOUR_REDEMPTION_URL';

final webPurchaseRedemption = await Purchases.parseAsWebPurchaseRedemption(redemptionUrl);

if (webPurchaseRedemption != null) {
    final result = await Purchases.redeemWebPurchase(webPurchaseRedemption);
    result.when(
        success: (customerInfo) {
          // Redemption was successful and entitlements were granted to the user.
        },
        error: (error) {
          // Redemption failed due to an error.
        },
        purchaseBelongsToOtherUser: () {
          // The purchase associated to the link belongs to a different user and it cannot be redeemed.
        },
        invalidToken: () {
          // The redemption link is invalid.
        },
        expired: (obfuscatedEmail) {
          // The redemption link has expired. A new one has been sent to the user to the provided obfuscated email.
        }
    );
}