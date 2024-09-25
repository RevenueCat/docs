.presentCustomerCenter(isPresented: self.$presentingCustomerCenter,
                       customerCenterActionHandler: { action in
            switch action {
            case .restoreStarted:
            case .restoreFailed(_):
            case .restoreCompleted(_):
            case .showingManageSubscriptions:
            case .refundRequestStarted(_):
            case .refundRequestCompleted(_):
            }
        }) {
            self.presentingCustomerCenter = false
        }