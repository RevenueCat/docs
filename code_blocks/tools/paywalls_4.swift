import UIKit

import RevenueCat
import RevenueCatUI

class ViewController: UIViewController {

    @IBAction func presentPaywall() {
        let controller = PaywallViewController()
        controller.delegate = self

        present(controller, animated: true, completion: nil)
    }

}

extension ViewController: PaywallViewControllerDelegate {

    func paywallViewController(_ controller: PaywallViewController,
                               didFinishPurchasingWith customerInfo: CustomerInfo) {

    }

}
