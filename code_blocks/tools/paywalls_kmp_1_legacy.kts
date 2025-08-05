val options = remember {
    PaywallOptions(dismissRequest = { TODO("Handle dismiss") }) {
        shouldDisplayDismissButton = true
    }
}

Paywall(options) 