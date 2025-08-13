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
                    .onPurchaseCompleted { customerInfo in
                        print("Purchase completed: \(customerInfo.entitlements)")
                    }
                     .onPurchaseFailure { error in
                        print("Purchase error: \(error.localizedDescription)")
                    }
                    .onRestoreCompleted { customerInfo in
                        print("Restore completed: \(customerInfo.entitlements)")
                    }
                    .onRestoreFailure { error in
                        print("Purchase error: \(error.localizedDescription)")
                    }
            }
    }
} 
