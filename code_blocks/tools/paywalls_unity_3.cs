using System.Threading.Tasks;
using RevenueCatUI;

public class PaywallOptionsExample : MonoBehaviour
{
    public async Task ShowPaywallWithOptions()
    {
        // Present the current offering
        var result1 = await PaywallsPresenter.Present(new PaywallOptions());

        // Present a specific offering by identifier
        var result2 = await PaywallsPresenter.Present(new PaywallOptions("my_offering_id"));

        // Present from an Offering object
        var offerings = await Purchases.GetOfferings();
        var offering = offerings.Current;
        var result3 = await PaywallsPresenter.Present(new PaywallOptions(offering));

        // Display close button (for original template paywalls only)
        var result4 = await PaywallsPresenter.Present(new PaywallOptions(displayCloseButton: true));
    }
}
