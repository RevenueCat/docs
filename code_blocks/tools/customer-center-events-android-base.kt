private fun createCustomerCenterListener(): CustomerCenterListener {
    return object : CustomerCenterListener {
        override fun onManagementOptionSelected(action: CustomerCenterManagementOption) {
            when (action) {
                CustomerCenterManagementOption.MissingPurchase -> {
                    // User selected missing purchase option
                }
                CustomerCenterManagementOption.Cancel -> {
                    // User selected cancel option
                }
                is CustomerCenterManagementOption.CustomUrl -> {
                    val uri: Uri = action.uri
                    // User selected a custom URL option
                }
            }
        }

        override fun onRestoreStarted() {
            // Restore purchases process started
        }

        override fun onRestoreCompleted(customerInfo: CustomerInfo) {
            // Restore purchases completed successfully
        }

        override fun onRestoreFailed(error: PurchasesError) {
            // Restore purchases failed
        }

        override fun onShowingManageSubscriptions() {
            // Manage subscriptions screen is displayed
        }

        override fun onFeedbackSurveyCompleted(feedbackSurveyOptionId: String) {
            // User completed a feedback survey
        }
    }
} 