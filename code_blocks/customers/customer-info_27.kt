class UpsellActivity : AppCompatActivity(), UpdatedCustomerInfoListener {
  override fun onReceived(customerInfo: CustomerInfo) {
    // handle any changes to customerInfo
  }
  
  override fun onCreate(savedInstanceState: Bundle?) {
    super.onCreate(savedInstanceState)
    Purchases.sharedInstance.updatedCustomerInfoListener = this
  }   
}