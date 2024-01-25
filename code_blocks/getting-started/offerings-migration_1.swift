func fetchOffering() {
    Purchases.shared.offerings { (offerings, error) in

        guard let offering = offerings?.current else {
            print("No current offering configured")
            return
        }

        for package in offering.availablePackages {
            print("Product: \(package.product.localizedDescription)")
            print("Type: \(package.packageType)")
            print("Price: \(package.localizedPriceString)")
        }
    }
}
