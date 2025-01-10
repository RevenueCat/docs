import SwiftUI

import RevenueCat
import RevenueCatUI

struct App: View {
    var body: some View {
        ContentView()
            .presentPaywallIfNeeded(
                fonts: RoundedSystemFontProvider()
            ) { customerInfo in
                // Returning `true` will present the paywall
                return customerInfo.entitlements.active.keys.contains("pro")
            }
    }
}

class RoundedSystemFontProvider: PaywallFontProvider {
    func font(for textStyle: Font.TextStyle) -> Font {
        return Font.system(textStyle, design: .rounded)
    }
}
