val options = remember {
    PaywallOptions(dismissRequest = { TODO("Handle dismiss") }) {
        shouldDisplayDismissButton = true
    }
}

PaywallFooter(options) { contentPadding ->
    // Your custom paywall content.
}