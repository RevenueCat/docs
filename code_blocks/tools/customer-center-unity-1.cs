using System.Threading.Tasks;
using RevenueCatUI;

public class CustomerCenterExample : MonoBehaviour
{
    public async Task ShowCustomerCenter()
    {
        await CustomerCenterPresenter.Present();
    }
}
