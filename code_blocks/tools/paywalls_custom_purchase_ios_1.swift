import SwiftUI
import StoreKit
import RevenueCat
import RevenueCatUI

struct ContentView: View {
    @State private var showPaywall = false

    var body: some View {
        VStack {
            Button("Show Paywall") {
                showPaywall = true
            }
        }
        .sheet(isPresented: $showPaywall) {
            PaywallView(
                displayCloseButton: true,
                performPurchase: { package in
                    do {
                        try await performCustomPurchase(package)
                        return (userCancelled: false, error: nil)
                    } catch {
                        return (userCancelled: false, error: error)
                    }
                },
                performRestore: {
                    do {
                        try await performCustomRestore()
                        return (success: true, error: nil)
                    } catch {
                        return (success: false, error: error)
                    }
                }
            )
            .onPurchaseCompleted { customerInfo in
                showPaywall = false
            }
        }
    }

    // MARK: - Your StoreKit Implementation

    private func performCustomPurchase(_ package: Package) async throws {
        // Implement your StoreKit purchase flow here.
        // See Apple's documentation: https://developer.apple.com/documentation/storekit/in-app-purchase

        // Sync with RevenueCat after purchase completes
        _ = try? await Purchases.shared.syncPurchases()
    }

    private func performCustomRestore() async throws {
        // Implement your restore flow here.
        // See: https://developer.apple.com/documentation/storekit/transaction/currententitlements

        // Sync with RevenueCat after restore completes
        _ = try? await Purchases.shared.syncPurchases()
    }
}
