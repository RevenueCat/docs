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
