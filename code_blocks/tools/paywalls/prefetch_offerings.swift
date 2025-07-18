import SwiftUI
import RevenueCat

class OfferingsManager: ObservableObject {
    func preloadOfferings() {
        Purchases.shared.getOfferings { offerings, error in
            if let offerings = offerings {
                print("Offerings loaded: \(offerings)")
            }
        }
    }
} 