if let error = error as? RevenueCat.ErrorCode {
  print(error.errorCode)
  print(error.errorUserInfo)

  switch error {
  case .purchaseNotAllowedError:
    showAlert("Purchases not allowed on this device.")
  case .purchaseInvalidError:
    showAlert("Purchase invalid, check payment source.")
  default: break
  }
} else {
  // Error is a different type
}
