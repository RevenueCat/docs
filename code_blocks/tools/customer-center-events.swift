CustomerCenterView()
    .onCustomerCenterRestoreStarted {
        // TODO: Handle restore started
    }
    .onCustomerCenterRestoreFailed { error in
        // TODO: Handle error
    }
    .onCustomerCenterRestoreCompleted { customerInfo in
        // TODO: Handle restore completed
    }
    .onCustomerCenterShowingManageSubscriptions {
        // TODO: Handle showing manage subscriptions
    }
    .onCustomerCenterRefundRequestStarted { productId in
        // TODO: Handle refund request started
    }
    .onCustomerCenterRefundRequestCompleted { productId, status in
        // TODO: Handle refund request completed
    }
    .onCustomerCenterFeedbackSurveyCompleted { optionId in
        // TODO: Handle feedback survey completed
    }
    .onCustomerCenterManagementOptionSelected { managementOption in
        // TODO: Handle Customer Center management option selected
    }
    .onCustomerCenterCustomActionSelected { actionIdentifier, purchaseIdentifier in
        // TODO: Handle custom action selected
    }
