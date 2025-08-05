// Create a listener to handle custom actions
val customerCenterListener = object : CustomerCenterListener {
    override fun onCustomActionSelected(actionIdentifier: String, purchaseIdentifier: String?) {
        when (actionIdentifier) {
            "contact_support" -> openSupportChat(purchaseIdentifier)
            "delete_account" -> showAccountDeletionDialog()
            "rate_app" -> openAppStoreRating()
        }
    }
}

// Display Customer Center with custom action handling
CustomerCenter(
    modifier = Modifier.fillMaxSize(),
    options = CustomerCenterOptions.Builder()
        .setListener(customerCenterListener)
        .build(),
) {
    // Handle dismissal
}