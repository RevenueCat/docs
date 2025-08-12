import SwiftUI

import RevenueCat
import RevenueCatUI

struct App: View {
    @State
    var displayPaywall = false

    var body: some View {
        ContentView()
            .sheet(isPresented: self.$displayPaywall) {
                // We handle scroll views for you, no need to wrap this in a ScrollView
                PaywallView() 
            }
    }
}   