Purchases.sharedInstance.getOfferingsWith({ error ->
    // An error occurred
}) { offerings ->
    offerings.current?.let {
        val paywallTitle = it.getMetadataString("title", default="Get Pro")
        val paywallSubtitle = it.getMetadataString("title", default="Unlock all the features")
        val paywallButton = it.getMetadataString("title", default="Redeem Trial")
    }
}