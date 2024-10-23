// Configure Purchases with showStoreMessagesAutomatically set to false
Purchases.configure(
  with: .init(withAPIKey: "${YOUR_API_KEY}")
        .with(showStoreMessagesAutomatically: false)
)

// Later, when you're ready to display the win-back offer sheet:
await Purchases.shared.showStoreMessages()