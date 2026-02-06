import UIKit
import RevenueCat
import RevenueCatUI

class MyViewController: UIViewController {
    func showPaywall() {
        let controller = PaywallViewController()

        // Set custom variables
        controller.setCustomVariable("John", forKey: "player_name")
        controller.setCustomVariable("42", forKey: "level")

        self.present(controller, animated: true)
    }
}
