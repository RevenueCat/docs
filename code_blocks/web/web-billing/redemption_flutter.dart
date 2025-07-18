String redemptionUrl = 'YOUR_REDEMPTION_URL';

final webPurchaseRedemption = await Purchases.parseAsWebPurchaseRedemption(redemptionUrl);

if (webPurchaseRedemption != null) {
  final result = await Purchases.redeemWebPurchase(webPurchaseRedemption);
  switch (result) {
    case WebPurchaseRedemptionSuccess(:final customerInfo):
      // Redemption was successful and entitlements were granted to the user.
      break;
    case WebPurchaseRedemptionError(:final error):
      // Redemption failed due to an error.
      break;
    case WebPurchaseRedemptionPurchaseBelongsToOtherUser():
      // The purchase associated to the link belongs to a different user and it cannot be redeemed.
      break;
    case WebPurchaseRedemptionInvalidToken():
      // The redemption link is invalid.
      break;
    case WebPurchaseRedemptionExpired(:final obfuscatedEmail):
      // The redemption link has expired. A new one has been sent to the user to the provided obfuscated email.
      break;
  };
}