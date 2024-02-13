const PaywallPage: React.FC<{
  purchases: Purchases;
  appUserId: string;
}> = ({ purchases, appUserId }) => {
  const [offerings, setOfferings] = useState<Offerings | null>(null);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfo | null>(null);

  useEffect(() => {
    purchases
      .getOfferings(appUserId)
      .then((offerings) => setOfferings(offerings));
    purchases
      .getCustomerInfo(appUserId)
      .then((customerInfo) => setCustomerInfo(customerInfo));
  }, [purchases, appUserId]);

  if (
    !customerInfo ||
    !offerings ||
    !offerings.current ||
    Object.keys(offerings.current.packages).length === 0
  ) {
    return null;
  }

  if (Object.keys(customerInfo.entitlements.active).length > 0) {
    return <h2>You are subscribed!</h2>;
  }

  return (
    <>
      <h2>Available packages</h2>
      <ul>
        {offerings.current.availablePackages.map(
          (pkg) =>
            pkg.rcBillingProduct !== null && (
              <li key={pkg.identifier}>
                {pkg.identifier}:{" "}
                {(pkg.rcBillingProduct.currentPrice?.amount ?? 0) / 100}
                {pkg.rcBillingProduct.currentPrice?.currency} /{" "}
                {pkg.rcBillingProduct.normalPeriodDuration}
                <button
                  onClick={() => {
                    try {
                      purchases
                        .purchasePackage(appUserId, pkg)
                        .then(({ customerInfo }) =>
                          setCustomerInfo(customerInfo)
                        );
                    } catch (e) {
                      window.alert(e);
                    }
                  }}
                >
                  Buy
                </button>
              </li>
            )
        )}
      </ul>
    </>
  );
};
