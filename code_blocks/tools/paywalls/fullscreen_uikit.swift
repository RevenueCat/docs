import UIKit
import RevenueCat
import RevenueCatUI

class ViewController: UIViewController {
    func presentPaywall() {
        let paywallViewController = PaywallViewController(offeringIdentifier: "your_offering")
        present(paywallViewController, animated: true)
    }
} 