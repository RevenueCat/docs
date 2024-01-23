Purchases.shared.purchase(package: package,
                          promotionalOffer: promoOffer) { transaction, customerInfo, error, userCancelled in
    if customerInfo?.entitlements.all[<your_entitlement_id>]?.isActive == true {
        // Unlock that entitlements content
    }
}
