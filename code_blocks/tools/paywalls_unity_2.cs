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
                Debug.Log("User made a purchase");
                break;
            case PaywallResultType.Restored:
                Debug.Log("User restored purchases");
                break;
            case PaywallResultType.NotPresented:
                Debug.Log("User already has the entitlement");
                break;
            case PaywallResultType.Cancelled:
                Debug.Log("User cancelled the paywall");
                break;
            case PaywallResultType.Error:
                Debug.Log("An error occurred");
                break;
        }
    }
}
