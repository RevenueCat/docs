import SwiftUI

import RevenueCat
import RevenueCatUI

struct YourPaywall: View {

    let offering: Offering

    var body: some View {
        ScrollView {
            // Your custom paywall design content
        }
        .paywallFooter(offering: offering, condensed: true) { customerInfo in
            // Purchase completed! Thank your user and dismiss your paywall
        }
    }

}
