let offerings = try await Purchases.shared.offerings()
if let offering = offerings?.current {
    let paywallTitle = offering.getMetadataValue(for: "title", default: "Get Pro")
    let paywallSubtitle = offering.getMetadataValue(for: "subtitle", default: "Unlock all the features")
    let paywallButton = offering.getMetadataValue(for: "button", default: "Redeem Trial")
}
