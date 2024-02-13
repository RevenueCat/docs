try {
  const customerInfo = await purchases.getCustomerInfo(appUserId);
  // access latest customerInfo
} catch (e) {
  // Error fetching customer info
}
