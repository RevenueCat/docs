// To get the price for your product after all offers

// Old:
Purchases.sharedInstance.getOfferingsWith(
     onError = { /* ... */ }, 
     onSuccess = { offerings ->  
         val price = offerings.current?.annual?.product?.price
         /* Do something with price */
     }
)

// New:
Purchases.sharedInstance.getOfferingsWith(
     onError = { /* ... */ },
     onSuccess = { offerings ->
         val price = offerings.current?.annual?.product?.price?.formatted
         /* Do something with price */
     }
)