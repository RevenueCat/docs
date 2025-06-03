try {
  const offerings = await Purchases.getOfferings();
  if (offerings.current !== null) {  
	  // Display current offering with offerings.current
  }
} catch (e) {

}