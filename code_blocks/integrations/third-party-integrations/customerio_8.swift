import RevenueCat
import CustomerIO

func setupRevenueCatWithCustomerIo() {
    // Configure RevenueCat first
    Purchases.configure(withAPIKey: "public_sdk_key", appUserID: "your_app_user_id")

    // Ensure Customer.io is initialized and identify has been called
    let customerIoId = CustomerIO.shared.identifier

    if let customerIoId = customerIoId {
        Purchases.shared.attribution.setAttributes([
            "$customerioId": customerIoId
        ])
    }
}

