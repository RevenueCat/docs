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
                // User made a purchase
                break;
            case PaywallResultType.Restored:
                // User restored purchases
                break;
            case PaywallResultType.NotPresented:
                // Paywall was not presented
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
