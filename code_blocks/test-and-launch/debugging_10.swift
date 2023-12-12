// To display the overlay in UIKit, use the `presentDebugRevenueCatOverlay` method on any UIViewController:
self.presentDebugRevenueCatOverlay()

// or, initialize the DebugViewController and present it manually:
let debugOverlay = RevenueCat.DebugViewController()
self.present(debugOverlay, animated: true)
