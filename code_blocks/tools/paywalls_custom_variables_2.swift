import UIKit
import RevenueCat
import RevenueCatUI

class MyViewController: UIViewController {
    func showPaywall() {
        let controller = PaywallViewController()

        // Set custom variables
        controller.setCustomVariable(.string("John"), forKey: "player_name")
        controller.setCustomVariable(.string("42"), forKey: "level")

        self.present(controller, animated: true)
    }
}
