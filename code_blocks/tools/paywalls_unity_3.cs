using System.Threading.Tasks;
using RevenueCatUI;

public class PaywallOptionsExample : MonoBehaviour
{
    // Present the current offering
    public async Task ShowCurrentOffering()
    {
        var result = await PaywallsPresenter.Present(new PaywallOptions());
        // Handle result...
    }

    // Present from an Offering object
    public void ShowOfferingFromObject()
    {
        var purchases = GetComponent<Purchases>();
        purchases.GetOfferings(async (offerings, error) =>
        {
            if (error != null)
            {
                // Handle error
                return;
            }
            
            var offering = offerings.Current;
            var result = await PaywallsPresenter.Present(new PaywallOptions(offering));
            // Handle result...
        });
    }

    // Display close button (for original template paywalls only)
    public async Task ShowPaywallWithCloseButton()
    {
        var result = await PaywallsPresenter.Present(new PaywallOptions(displayCloseButton: true));
        // Handle result...
    }
}
