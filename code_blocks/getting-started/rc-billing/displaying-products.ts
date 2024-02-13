async function showOffering(
  targetElement: HTMLElement,
  purchases: Purchases,
  appUserId: string
) {
  const offerings = await purchases.getOfferings(appUserId);
  Object.entries(offerings.current?.packages ?? {}).forEach((value) => {
    const [key, pkg] = value;
    const pkgEl = document.createElement("button");
    const product = pkg.rcBillingProduct;
    pkgEl.innerHTML =
      `${key}: ` +
      `${(product.currentPrice?.amount ?? 0) / 100} ` +
      `${product.currentPrice?.currency} / ` +
      `${product.normalPeriodDuration}`;
    pkgEl.onclick = () => {
      purchases.purchasePackage(appUserId, pkg);
    };
    targetElement.appendChild(pkgEl);
  });
}
