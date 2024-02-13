try {
  const { customerInfo } = await purchases.purchasePackage(appUserId, package);
  if (Object.keys(customerInfo.entitlements.active).includes("pro")) {
    // Unlock that great "pro" content
  }
} catch (e) {
  showError(e);
}
