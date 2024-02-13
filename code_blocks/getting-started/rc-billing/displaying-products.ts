async function showOffering(targetElement, purchases, appUserId) {
  const offerings = await purchases.getOfferings(appUserId);
  (offerings.current?.availablePackages ?? []).forEach((pkg) => {
    const pkgEl = document.createElement("button");
    const product = pkg.rcBillingProduct;
    pkgEl.innerHTML =
      `${pkg.identifier}: ` +
      `${(product.currentPrice?.amount ?? 0) / 100} ` +
      `${product.currentPrice?.currency} / ` +
      `${product.normalPeriodDuration}`;
    pkgEl.onclick = () => {
      try {
        purchases.purchasePackage(appUserId, pkg);
      } catch (e) {
        window.alert(e);
      }
    };
    targetElement.appendChild(pkgEl);
  });
}
