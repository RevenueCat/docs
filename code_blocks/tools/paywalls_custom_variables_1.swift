import SwiftUI
import RevenueCat
import RevenueCatUI

struct App: View {
    @State
    var displayPaywall = false

    var body: some View {
        ContentView()
            .sheet(isPresented: self.$displayPaywall) {
                PaywallView()
                    .customPaywallVariables([
                        "player_name": .string("John"),
                        "level": .string("42")
                    ])
            }
    }
}
