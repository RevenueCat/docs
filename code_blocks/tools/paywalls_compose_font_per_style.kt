@OptIn(ExperimentalPreviewRevenueCatUIPurchasesAPI::class)
@Composable
fun MyComposable() {
    PaywallDialog(
        PaywallDialogOptions.Builder { /* on dismiss */ }
            .setFontProvider(object : FontProvider {
                override fun getFont(type: TypographyType): FontFamily? {
                    return when (type) {
                        TypographyType.HEADLINE_LARGE -> headlineFontFamily
                        TypographyType.BODY_LARGE -> bodyFontFamily
                        else -> null // Will use default font
                    }
                }
            })
            .build()
    )
}