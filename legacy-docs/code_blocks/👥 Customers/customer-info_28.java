public class UpsellActivity extends AppCompatActivity implements UpdatedCustomerInfoListener {
  @Override public void onReceived(CustomerInfo customerInfo) {
    // handle any changes to customerInfo
  } 
  
  @Override public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
		Purchases.getSharedInstance().setUpdatedCustomerInfoListener(this);
  }   
}