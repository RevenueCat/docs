try {
  CustomerInfo customerInfo = await Purchases.getCustomerInfo();
  // access latest customerInfo
} on PlatformException catch (e) {
  // Error fetching customer info
}