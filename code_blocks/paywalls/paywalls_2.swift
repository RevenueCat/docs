import SwiftUI

import RevenueCat
import RevenueCatUI

struct App: View {
    var body: some View {
        ContentView()
            .presentPaywallIfNeeded { customerInfo in
                // Returning `true` will present the paywall
                return customerInfo.entitlements.active.keys.contains("pro")
            } purchaseCompleted: { customerInfo in
                print("Purchase completed: \(customerInfo.entitlements)")
            } restoreCompleted: {
                // Paywall will be dismissed automatically if "pro" is now active.
                print("Purchases restored: \(customerInfo.entitlements)")
            }
    }
}
