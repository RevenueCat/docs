if let discount = package.storeProduct.discounts.first {
    Purchases.shared.getPromotionalOffer(forProductDiscount: discount,
                                         product: package.storeProduct) { (promoOffer, error) in
        if let promoOffer {
            // Promotional Offer validated, show terms of your offer to your customers
        } else {
            // Promotional Offer was not validated, default to normal package terms
        }
    }
}

// OR: if using async/await
let promoOffers = await package.storeProduct.getEligiblePromotionalOffers()
