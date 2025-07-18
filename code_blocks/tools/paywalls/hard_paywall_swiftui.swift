import SwiftUI
import RevenueCat
import RevenueCatUI

struct App: View {
    var body: some View {
        ContentView()
            .presentPaywallIfNeeded(requiredEntitlementIdentifier: "premium")
                .presentationMode(.fullScreenCover)
    }
}
