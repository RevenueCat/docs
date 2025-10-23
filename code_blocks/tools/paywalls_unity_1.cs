using System.Threading.Tasks;
using RevenueCatUI;

public class ShowPaywallExample : MonoBehaviour
{
    public async Task ShowPaywall()
    {
        var result = await PaywallsPresenter.Present();

        switch (result.Result)
        {
            case PaywallResultType.Purchased:
                Debug.Log("User made a purchase");
                break;
            case PaywallResultType.Restored:
                Debug.Log("User restored purchases");
                break;
            case PaywallResultType.NotPresented:
                Debug.Log("Paywall was not presented");
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
