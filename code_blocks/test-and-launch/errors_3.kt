with(error) {
    // log error details
    print("Error: $code")
    print("Message: $message")
    print("Underlying Error: $underlyingErrorMessage")
    when (code) {
        PurchasesErrorCode.PurchaseNotAllowedError -> {
            showAlert("Purchases not allowed on this device.")
        }
        PurchasesErrorCode.PurchaseInvalidError -> {
            showAlert("Purchase invalid, check payment source.")
        }
        else -> {}
    }
}