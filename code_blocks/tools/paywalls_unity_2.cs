using System.Threading.Tasks;
using RevenueCatUI;

public class ConditionalPaywallExample : MonoBehaviour
{
    public async Task ShowPaywallIfNeeded()
    {
        var result = await PaywallsPresenter.PresentIfNeeded(
            requiredEntitlementIdentifier: "pro"
        );

        switch (result.Result)
        {
            case PaywallResultType.Purchased:
                // User made a purchase
                break;
            case PaywallResultType.Restored:
                // User restored purchases
                break;
            case PaywallResultType.NotPresented:
                // User already has the entitlement
                break;
            case PaywallResultType.Cancelled:
                // User cancelled the paywall
                break;
            case PaywallResultType.Error:
                // An error occurred
                break;
        }
    }
}
