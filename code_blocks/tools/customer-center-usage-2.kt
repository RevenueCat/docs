import com.revenuecat.purchases.ui.revenuecatui.customercenter.ShowCustomerCenter

class MyActivity : ComponentActivity() {
    private val customerCenter = registerForActivityResult(ShowCustomerCenter()) {
        // Handle the dismissal
    }
    
    fun showCustomerCenter() {
        customerCenter.launch()
    }
}