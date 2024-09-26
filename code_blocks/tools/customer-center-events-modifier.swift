.presentCustomerCenter(
    isPresented: self.$presentingCustomerCenter,
    customerCenterActionHandler: { action in
        switch action {
        case .restoreCompleted(let customerInfo):
        case .restoreStarted:
        case .restoreFailed(let error):
        case .showingManageSubscriptions:
        case .refundRequestStarted(let productId):
        case .refundRequestCompleted(let status):
        case .feedbackSurveyCompleted(let surveyOptionID):
        }
    }
) {
    self.presentingCustomerCenter = false
}
