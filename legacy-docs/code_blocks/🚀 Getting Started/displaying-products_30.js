// Accessing the monthly product

func displayUpsellScreen() {
  Purchases.getOfferings(
      offerings => {
        if (offerings.current && offerings.current.monthly) {  
          const product = offerings.current.monthly;
			    // Get the price and introductory period from the PurchasesProduct
        }
      },
      error => {

      }
  );
}