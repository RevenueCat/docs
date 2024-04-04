Purchases.sharedInstance.getOfferingsWith({ error ->
    // An error occurred
}) { offerings ->
    offerings.current?.let {
        val showNewBenefits = it.metadata["show_new_benefits"] as? Boolean
        val title = (it.metadata["title_strings"] as? Map<*, *>)?.get("en_US")
        val cta = (it.metadata["cta_strings"] as? Map<*, *>)?.get("en_US")
    }
}