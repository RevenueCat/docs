let offerings = try await Purchases.shared.offerings()
if let current = offerings.current {
    let showNewBenefits = current.getMetadataValue(for: "show_new_benefits", default: false)
    let title = current.getMetadataValue(for: "title_strings", default: [:])["en_US"] as? String
    let cta = current.getMetadataValue(for: "cta_strings", default: [:])["en_US"] as? String
}
