func displayUpsellScreen() {
  Purchases.getOfferings(
      offerings => {
        if (offerings.current !== null) {  
          // Display current offering with offerings.current
        }
      },
      error => {

      }
  );
}