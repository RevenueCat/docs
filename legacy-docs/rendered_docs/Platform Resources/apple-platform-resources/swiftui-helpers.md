---
title: Using RevenueCat with SwiftUI
slug: swiftui-helpers
excerpt: Implementing the Purchases SDK in SwiftUI
hidden: false
categorySlug: resources
order: 2
parentDoc: 649983b4c31b2e000a3c18c4
---

# Debugging

The Purchases SDK includes a debug overlay that allows developers to see various configuration details while running an app. You can read more about the debug overlay in our [Debugging](https://www.revenuecat.com/docs/debugging#debug-ui) guide.

# SwiftUI Previews

SwiftUI Previews allow developers to preview their views directly in Xcode without building and running your app. The Purchases SDK includes convenience types for displaying mock products and offerings to avoid having to build and run your app to test your paywall.

```swift 
struct PaywallView_Previews: PreviewProvider {
    private static let product = TestStoreProduct(
        localizedTitle: "My Test Product",
        price: 4.99,
        localizedPriceString: "$4.99",
        productIdentifier: "my_test_product",
        productType: .autoRenewableSubscription,
        localizedDescription: "A product description."
    )

    private static let offering = Offering(
        identifier: Self.offeringIdentifier,
        serverDescription: "My default offering.",
        metadata: [:],
        availablePackages: [
            .init(
                identifier: "monthly",
                packageType: .monthly,
                storeProduct: Self.product.toStoreProduct(),
                offeringIdentifier: Self.offeringIdentifier
            )
        ]
    )

    private static let offeringIdentifier = "default_offering"

    static var previews: some View {
        PaywallContent(offering: Self.offering)
    }
}
```

# SDK Initialization

We recommend following our [guide](https://www.revenuecat.com/docs/configuring-sdk) for more information on configuring the Purchases SDK. However, we detail multiple methods for configuring the SDK in SwiftUI below.

## Option 1: App Init

For basic initialization without delegate methods, you can implement the App `init` method:

```swift 
import Purchases

@main
struct SampleApp: App {
    init() {
        Purchases.configure(withAPIKey: "api_key")
    }

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
```

## Option 2: App Delegate

Another method of initialization is to use the `@UIApplicationDelegateAdaptor` property wrapper to configure the Purchases SDK. The `@UIApplicationDelegateAdaptor` gives the option of using UIApplicationDelegate methods that are traditionally used in UIKit applications.

### Creating a Delegate

Begin by creating a delegate class and initializing the *Purchases* SDK like the following:

```swift 
import Purchases

class AppDelegate: UIResponder, UIApplicationDelegate {
    func application(_ application: UIApplication,
                     didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {
        Purchases.debugLogsEnabled = true
        Purchases.configure(withAPIKey: "api_key")
        return true
    }
}
```

### Attaching the Delegate

As previously mentioned, the new `@UIApplicationDelegateAdaptor` property attaches the delegate to the new SwiftUI App struct. Add the property wrapper like the following:

```swift 
@main
struct SampleApp: App {
    @UIApplicationDelegateAdaptor(AppDelegate.self) private var appDelegate

    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}
```

Build and run the app, and *Purchases* will be initialized on app launch.

For more information on configuring the SDK, check out the [Configuring SDK](https://docs.revenuecat.com/docs/configuring-sdk) guide.
