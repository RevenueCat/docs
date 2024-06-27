Purchases.sharedInstance.delegate = object : PurchasesDelegate {
    override fun onCustomerInfoUpdated(customerInfo: CustomerInfo) {
        // handle any changes to customerInfo
    }
}