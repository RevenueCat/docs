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
        {Object.entries(offerings.current.packages).map(
          ([key, pkg]) =>
            pkg.rcBillingProduct !== null && (
              <li key={key}>
                {key}: {(pkg.rcBillingProduct.currentPrice?.amount ?? 0) / 100}
                {pkg.rcBillingProduct.currentPrice?.currency} /{" "}
                {pkg.rcBillingProduct.normalPeriodDuration}
                <button
                  onClick={() => {
                    purchases
                      .purchasePackage(appUserId, pkg)
                      .then(({ customerInfo }) =>
                        setCustomerInfo(customerInfo)
                      );
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
