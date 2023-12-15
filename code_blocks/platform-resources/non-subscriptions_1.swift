Purchases.shared.getOfferings { (offerings, error) in
	if let coinOffering = offerings?["coins"] {
		let packages = coinOffering.availablePackages
		// `packages` should contain each coin package with an identifier like 'coins-100'
	}
}
