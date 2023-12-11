Purchases.shared.getOfferings { (offerings, error) in
    if let error {
        print(error.localizedDescription)
    }

    guard let offering = offerings?.current else {
        print("No current offering configured")
        return
    }

    for package in offering.availablePackages {
        print("Product: \(package.product.localizedDescription), price: \(package.localizedPriceString())")
    }
}
