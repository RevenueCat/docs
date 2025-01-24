string redemptionUrl = 'YOUR_REDEMPTION_URL';

purchases.ParseAsWebPurchaseRedemption(redemptionUrl, (webPurchaseRedemption) => 
{
    if (webPurchaseRedemption != null)
    {
        purchases.RedeemWebPurchase(webPurchaseRedemption, (result) =>
        {
            switch (result) 
            {
                case Purchases.WebPurchaseRedemptionResult.Success success:
                    Purchases.CustomerInfo customerInfo = success.CustomerInfo;
                    // Redemption was successful and entitlements were granted to the user.
                    break;
                case Purchases.WebPurchaseRedemptionResult.RedemptionError error:
                    Purchases.Error error = error.Error;
                    // Redemption failed due to an error.
                    break;
                case Purchases.WebPurchaseRedemptionResult.InvalidToken:
                    // The redemption link is invalid.
                    break;
                case Purchases.WebPurchaseRedemptionResult.PurchaseBelongsToOtherUser:
                    // The purchase associated to the link belongs to a different user and it cannot be redeemed.
                    break;
                case Purchases.WebPurchaseRedemptionResult.Expired expired:
                    string obfuscatedEmail = expired.ObfuscatedEmail;
                    // The redemption link has expired. A new one has been sent to the user to the provided obfuscated email.
                    break;
            }
        });
    }
});
