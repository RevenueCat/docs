import SwiftUI

import RevenueCat
import RevenueCatUI

struct App: View {
    @State
    var displayPaywall = false

    var body: some View {
        ContentView()
            .sheet(isPresented: self.$displayPaywall) {
                PaywallView(displayCloseButton: true)
            }
    }
}
