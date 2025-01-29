import RevenueCat

final class Container {

    func observerModeConfiguration() {
        // MARK: Observer mode configuration
        Purchases.logLevel = .debug
        Purchases.configure(
            with: Configuration.Builder(withAPIKey: Constants.apiKey)
                .with(observerMode: true)
                // Optionally set an app user ID for the user
                .with(appUserID: UserManager.appUserID)
                .build()
        )
        // END
    }

    func getOfferings() {
        // MARK: Displaying products
        Purchases.shared.getOfferings { (offerings, error) in
            if let packages = offerings?.current?.availablePackages {
                self.display(packages)
            }
        }
        // END
        // MARK: Custom Offering identifiers
        Purchases.shared.getOfferings { (offerings, error) in
            if let packages = offerings?.offering(identifier: "experiment_group")?.availablePackages {
                self.display(packages)
            }
        }
        // END
        // MARK: Getting the Product
        Purchases.shared.getOfferings { (offerings, error) in
            // Accessing the monthly product
            if let product = offerings?.current?.monthly?.storeProduct {
                // Display the product information (like price and introductory period)
                self.display(product)
            }
        }
        // END
        let user = User()
        // MARK: Choosing which Offering to display
        Purchases.shared.getOfferings { (offerings, error) in
            var packages: [Package]?

            if user.isPaidDownload {
                packages = offerings?.offering(identifier: "paid_download_offer")?.availablePackages
            } else if user.signedUpOver30DaysAgo {
                packages = offerings?.offering(identifier: "long_term_offer")?.availablePackages
            } else if user.recentlyChurned {
                packages = offerings?.offering(identifier: "ios_subscription_offer")?.availablePackages
            }

            // Present your paywall
            self.display(packages)
        }
        // END
    }

    func display(_ packages: [Package]?) {

    }

    func display(_ product: StoreProduct) {

    }

    func suppressWarning(_ any: Any?) {

    }

    func display(_ offerings: Offerings) {
        // MARK: Displaying packages
        let packages = offerings.offering(identifier: "experiment_group")?.availablePackages
        // --
        let monthlyPackage = offerings.offering(identifier: "experiment_group")?.monthly
        // --
        let packageById = offerings.offering(identifier: "experiment_group")?.package(identifier: "<package_id>")
        // END

        // suppress warnings
        suppressWarning(packages)
        suppressWarning(monthlyPackage)
        suppressWarning(packageById)
    }
}
