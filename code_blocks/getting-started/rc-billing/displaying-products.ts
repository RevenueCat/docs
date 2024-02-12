async function showOffering(
  targetElement: HTMLElement,
  purchases: Purchases,
  appUserId: string
) {
  const offerings = await purchases.getOfferings(appUserId);
  offerings.current?.packages?.forEach((pkg) => {
    const pkgEl = document.createElement("button");
    const product = pkg.rcBillingProduct;
    pkgEl.innerHTML =
      `${(product.currentPrice?.amount ?? 0) / 100} ` +
      `${product.currentPrice?.curency} / ` +
      `${product.normalPeriodDuration}`;
    pkgEl.onclick = () => {
      purchases.purchasePackage(pkg);
    };
    targetElement.appendChild(pkgEl);
  });
}
