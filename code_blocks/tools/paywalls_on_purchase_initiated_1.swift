PaywallView()
    .onPurchaseInitiated({ package, resume in
        print("User is attempting to purchase \(package)")
        Task {
            do {
                try await performAuthentication()
                print("Authentication Complete, presenting purchase flow")
                resume()
            } catch {
                print("Authentication failed… cancel purchase flow")
                resume(shouldProceed: false)
                presentErrorAlertForAuthentication()
            }
        }
    })
    // in iOS we can also intercept offer code redemption flows
    .onOfferCodeRedemptionInitiated({ resume in
        print("Offer code redemption initiated")
        Task {
            do {
                try await performAuthentication()
                print("Authentication Complete, presenting redeem flow")
                resume()
            } catch {
                print("Authentication failed… cancel redeem flow")
                resume(shouldProceed: false)
                presentErrorAlertForAuthentication()
            }
        }
    })