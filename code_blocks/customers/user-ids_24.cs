// configure the SDK either through the Editor or through 
// programmatic setup (see section above), then:


var purchases = GetComponent<Purchases>();
purchases.LogIn(<myAppUserUD>, (customerInfo, created, error) =>
{
    if (error != null)
    {
        // show error
    }
    else
    {
        // show customerInfo
    }
});