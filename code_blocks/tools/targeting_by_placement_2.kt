Purchases.sharedInstance.getOfferingsWith({ error ->
    // An error occurred
}) { offerings ->
    offerings.getCurrentOfferingForPlacement("your-placement-identifier")?.let {
        // TODO: Show paywall
    } ?: run {
        // TODO: Do nothing or continue on to next view
    }
}