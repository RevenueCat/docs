class MainApplication: Application() {

    private lateinit var auth: FirebaseAuth
      
    override fun onCreate() {
        super.onCreate()
          
        // Configure Purchases
        Purchases.configure(this, "public_sdk_key")
    }
}
  
class MainActivity: Activity() {
    public override fun onCreate() {

        // Initialize Firebase Auth
        firebaseAuth = FirebaseAuth.getInstance()  
    }

    public override fun onStart() {
        super.onStart()
        
        val authStateListener = FirebaseAuth.AuthStateListener { auth ->
        
            val user = auth.currentUser

            if(user != null) {

                // identify Purchases with new Firebase user
                Purchases.sharedInstance.loginWith("my_app_user_id", ::showError) { customerInfo, created ->
                    Log.d(TAG, "User signed in.")
                }
                
            }
        }
    
        firebaseAuth.addAuthStateListener(authStateListener)
    }
}



// Purchases Change Listener (Optional)
class UpsellActivity : AppCompatActivity(), UpdatedCustomerInfoListener {
		override fun onReceived(customerInfo: CustomerInfo?) {
        
    // You can optionally react to any changes in customer info
    // such as updating the UI throughout your app
    }
}