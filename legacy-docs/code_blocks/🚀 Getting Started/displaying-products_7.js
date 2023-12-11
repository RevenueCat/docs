func displayUpsellScreen() {
  Purchases.getOfferings(
      offerings => {
        if (offerings.current !== null && offerings.current.availablePackages.length !== 0) {  
			    // Display packages for sale
        }
      },
      error => {

      }
  );
}