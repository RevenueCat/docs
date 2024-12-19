YourContent()
    .onOpenURL { url in
        if let webPurchaseRedemption = url.asWebPurchaseRedemption {
            Task {
                let result = await Purchases.shared.redeemWebPurchase(webPurchaseRedemption)
                // Handle result
            }
        }
    }
