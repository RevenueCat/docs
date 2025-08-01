import SwiftUI
import RevenueCat
import Combine

class PaywallManager: ObservableObject {
    private var cancellables = Set<AnyCancellable>()
    
    func setupCustomerInfoListener() {
        Purchases.shared.customerInfoStream.sink { customerInfo in
            if customerInfo.entitlements["premium"]?.isActive == true {
                dismissPaywall()
            }
        }
        .store(in: &cancellables)
    }
    
    private func dismissPaywall() {
        // Handle paywall dismissal
    }
} 