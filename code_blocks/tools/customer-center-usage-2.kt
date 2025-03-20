import com.revenuecat.purchases.ui.revenuecatui.customercenter.ShowCustomerCenter

class YourActivity : AppCompatActivity() {
    companion object {
        private const val REQUEST_CODE_CUSTOMER_CENTER = 1234
    }

    private fun showCustomerCenter() {
        val intent = ShowCustomerCenter()
            .createIntent(this, Unit)
        startActivityForResult(intent, REQUEST_CODE_CUSTOMER_CENTER)
    }
} 