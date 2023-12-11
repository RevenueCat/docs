SwiftyStoreKit.restorePurchases(atomically: true) { results in
    if results.restoreFailedPurchases.count > 0 {
        print("Restore Failed: \(results.restoreFailedPurchases)")
    } else if results.restoredPurchases.count > 0 {
        print("Restore Success: \(results.restoredPurchases)")
    } else {
        print("Nothing to Restore")
    }
}
