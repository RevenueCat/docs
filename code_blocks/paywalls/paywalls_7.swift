import SwiftUI

import RevenueCat
import RevenueCatUI

struct App: View {
    var body: some View {
        ContentView()
            .presentPaywallIfNeeded(
                fonts: CustomPaywallFontProvider(fontName: "Arial")
            ) { customerInfo in
                // Returning `true` will present the paywall
                return customerInfo.entitlements.active.keys.contains("pro")
            }
    }
}
