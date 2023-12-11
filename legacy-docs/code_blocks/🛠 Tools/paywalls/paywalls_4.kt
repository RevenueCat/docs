@OptIn(ExperimentalPreviewRevenueCatUIPurchasesAPI::class)
class MainActivity : AppCompatActivity(), PaywallResultHandler {
    private lateinit var paywallActivityLauncher: PaywallActivityLauncher
    private lateinit var root: View

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        paywallActivityLauncher = PaywallActivityLauncher(this, this)
    }

    private fun performMagic() {
        paywallActivityLauncher.launchIfNeeded(requiredEntitlementIdentifier = Constants.ENTITLEMENT_ID)
    }

    override fun onActivityResult(result: PaywallResult) {}
}