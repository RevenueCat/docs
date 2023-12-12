@OptIn(ExperimentalPreviewRevenueCatUIPurchasesAPI::class)
class MyActivity : ComponentActivity(), PaywallResultHandler {
    private lateinit var paywallActivityLauncher: PaywallActivityLauncher
    private val googleFontProvider = GoogleFontProvider(R.array.com_google_android_gms_fonts_certs)
    private val fontFamily = PaywallFontFamily(
        fonts = listOf(
            PaywallFont.GoogleFont("GOOGLE_FONT_NAME", googleFontProvider)
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