using System.Threading.Tasks;
using RevenueCatUI;

public class CustomerCenterEventsExample : MonoBehaviour
{
    public async Task ShowCustomerCenterWithEvents()
    {
        var callbacks = new CustomerCenterCallbacks
        {
            OnFeedbackSurveyCompleted = (args) =>
            {
                // User completed feedback survey: args.FeedbackSurveyOptionId
            },
            OnShowingManageSubscriptions = () =>
            {
                // Manage subscriptions screen is displayed
            },
            OnRestoreCompleted = (args) =>
            {
                // Restore purchases completed successfully: args.CustomerInfo
            },
            OnRestoreFailed = (args) =>
            {
                // Restore purchases failed: args.Error
            },
            OnRestoreStarted = () =>
            {
                // Restore purchases process started
            },
            OnRefundRequestStarted = (args) =>
            {
                // Refund request started (iOS only): args.ProductIdentifier
            },
            OnRefundRequestCompleted = (args) =>
            {
                // Refund request completed (iOS only): args.ProductIdentifier, args.RefundRequestStatus
            },
            OnManagementOptionSelected = (args) =>
            {
                // User selected management option: args.Option, args.Url (if custom URL)
            },
            OnCustomActionSelected = (args) =>
            {
                // Custom action selected: args.ActionId, args.PurchaseIdentifier
            }
        };

        await CustomerCenterPresenter.Present(callbacks);
    }
}
