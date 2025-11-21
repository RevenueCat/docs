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

    // MARK: - Your StoreKit 2 implementation here. Sample below:

    private func performCustomPurchase(_ package: Package) async throws {
        // 1. Get the StoreKit 2 Product from the package
        let productId = package.storeProduct.productIdentifier
        let products = try await Product.products(for: [productId])

        guard let skProduct = products.first else {
            throw NSError(domain: "ProductNotFound", code: 404)
        }

        // 2. Initiate purchase and handle the result
        let result = try await skProduct.purchase()

        switch result {
        case .success(let verificationResult):
            // 3. Verify the transaction
            let transaction = try checkVerified(verificationResult)

            // 4. Finish the transaction
            await transaction.finish()

            // 5. Sync with RevenueCat
            _ = try? await Purchases.shared.syncPurchases()

        case .userCancelled:
            // User cancelled - don't throw, just return
            break

        case .pending:
            // Handle Ask to Buy or other pending scenarios
            break

        @unknown default:
            throw NSError(domain: "UnknownPurchaseResult", code: 500)
        }
    }

    private func performCustomRestore() async throws {
        // Restore all purchases from the App Store
        try await AppStore.sync()

        // Sync with RevenueCat
        _ = try? await Purchases.shared.syncPurchases()
    }

    // Helper to verify StoreKit 2 transactions
    private func checkVerified<T>(_ result: StoreKit.VerificationResult<T>) throws -> T {
        switch result {
        case .unverified:
            throw NSError(domain: "VerificationFailed", code: 403)
        case .verified(let safe):
            return safe
        }
    }
}
