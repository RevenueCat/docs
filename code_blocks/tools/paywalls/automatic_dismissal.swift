import SwiftUI
import RevenueCat
import RevenueCatUI

struct App: View {
    var body: some View {
        ContentView()
            .presentPaywallIfNeeded(requiredEntitlementIdentifier: "premium") { result in
                switch result {
                case .restored(let customerInfo):
                    print("Restored: \(customerInfo)")
                default:
                    break
                }
            }
    }
} 