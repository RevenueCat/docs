@OptIn(ExperimentalPreviewRevenueCatUIPurchasesAPI::class)
@Composable
fun MyComposable() {
    PaywallDialog(
        PaywallDialogOptions.Builder { /* on dismiss */ }
            .setFontProvider(CustomFontProvider(myFontFamily))
            .build()
    )
}