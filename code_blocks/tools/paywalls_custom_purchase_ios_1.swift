import SwiftUI
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

    private func performCustomPurchase(_ package: Package) async throws {
        // Your custom purchase implementation
        let transaction = try await package.storeProduct.purchase()

        // Validate with your server if needed
        // try await validateWithYourServer(transaction)

        // Sync with RevenueCat
        await Purchases.shared.syncPurchases()
    }

    private func performCustomRestore() async throws {
        // Restore all purchases
        try await AppStore.sync()

        // Sync with RevenueCat
        await Purchases.shared.syncPurchases()
    }
}
