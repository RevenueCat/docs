import SwiftUI

import RevenueCat
import RevenueCatUI

struct App: View {
    var body: some View {
        ContentView()
            .presentPaywallIfNeeded(
                requiredEntitlementIdentifier: "pro",
                purchaseCompleted: { customerInfo in
                    print("Purchase completed: \(customerInfo.entitlements)")
                },
                restoreCompleted: { customerInfo in
                    // Paywall will be dismissed automatically if "pro" is now active.
                    print("Purchases restored: \(customerInfo.entitlements)")
                }
            )
    }
}
