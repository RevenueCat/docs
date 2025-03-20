import { RevenueCatUI } from 'react-native-purchases-ui';
import { CustomerInfo, PurchasesError, REFUND_REQUEST_STATUS, CustomerCenterManagementOption } from 'react-native-purchases';

await RevenueCatUI.presentCustomerCenter({
  callbacks: {
    onFeedbackSurveyCompleted: ({ feedbackSurveyOptionId }: { feedbackSurveyOptionId: string }) => {
      // User completed a feedback survey
    },
    onShowingManageSubscriptions: () => {
      // Manage subscriptions screen is displayed
    },
    onRestoreStarted: () => {
      // Restore purchases process started
    },
    onRestoreCompleted: ({ customerInfo }: { customerInfo: CustomerInfo }) => {
      // Restore purchases completed successfully
    },
    onRestoreFailed: ({ error }: { error: PurchasesError }) => {
      // Restore purchases failed
    },
    onRefundRequestStarted: ({ productIdentifier }: { productIdentifier: string }) => {
      // iOS only
      // Refund request initiated
    },
    onRefundRequestCompleted: ({ 
        productIdentifier, 
        refundRequestStatus 
    }: { 
        productIdentifier: string; 
        refundRequestStatus: REFUND_REQUEST_STATUS 
    }) => {
      // iOS only
      // Refund request completed
    },
    onManagementOptionSelected: ({ option, url }: { option: CustomerCenterManagementOption; url: string }) => {
      // User selected a management option
    },
  }
}); 