@OptIn(ExperimentalPreviewRevenueCatUIPurchasesAPI::class)
class MyActivity : ComponentActivity(), PaywallResultHandler {
    private lateinit var paywallActivityLauncher: PaywallActivityLauncher
    private val fontFamily = PaywallFontFamily(
        fonts = listOf(
            PaywallFont.ResourceFont(R.font.my_font)
        )
    )

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        paywallActivityLauncher = PaywallActivityLauncher(this, this)
    }

    fun launchPaywall(offering: Offering? = null) {
        paywallActivityLauncher.launch(
            offering, 
            CustomParcelizableFontProvider(fontFamily)
        )
    }
}