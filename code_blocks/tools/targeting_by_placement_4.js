Purchases.shared.getOfferings { offerings, error in
    if let offering = offerings?.currentOffering(forPlacement: "your-placement-identifier") {
        // TODO: Show paywall
    } else {
        // TODO: Do nothing
    }
}