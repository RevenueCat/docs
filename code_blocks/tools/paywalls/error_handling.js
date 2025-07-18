try {
  const result = await RevenueCatUI.presentPaywall();
  if (result === 'ERROR') {
    Alert.alert("Error loading paywall", "Please check your connection and try again.");
  }
} catch (error) {
  console.error(error);
} 