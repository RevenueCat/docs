String redemptionUrl = 'YOUR_REDEMPTION_URL';

const webPurchaseRedemption = await Purchases.parseAsWebPurchaseRedemption(redemptionUrl);
if (webPurchaseRedemption) {
  const result = await Purchases.redeemWebPurchase(webPurchaseRedemption);
  switch (result.result) {
    case WebPurchaseRedemptionResultType.SUCCESS:
      const customerInfo: CustomerInfo = result.customerInfo;
      // Redemption was successful and entitlements were granted to the user.
      break;
    case WebPurchaseRedemptionResultType.ERROR:
      const error: PurchasesError = result.error;
      // Redemption failed due to an error.
      break;
    case WebPurchaseRedemptionResultType.PURCHASE_BELONGS_TO_OTHER_USER:
      // The purchase associated to the link belongs to a different user and it cannot be redeemed.
      break;
    case WebPurchaseRedemptionResultType.INVALID_TOKEN:
      // The redemption link is invalid.
      break;
    case WebPurchaseRedemptionResultType.EXPIRED:
      const obfuscatedEmail: string = result.obfuscatedEmail;
      // The redemption link has expired. A new one has been sent to the user to the provided obfuscated email.
      break;
  }
}