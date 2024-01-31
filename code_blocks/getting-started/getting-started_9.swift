// Using Swift Concurrency
do {
    let offerings = try await Purchases.shared.offerings()
    // Display current offering with offerings.current
} catch let error {
    // handle error
}
// Using Completion Blocks
Purchases.shared.getOfferings { (offerings, error) in
	if let offerings {
	  // Display current offering with offerings.current
  }
}
