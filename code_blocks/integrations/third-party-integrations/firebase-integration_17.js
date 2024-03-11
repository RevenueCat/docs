getAuth().currentUser.getIdTokenResult()
  .then((idTokenResult) => {
     // Confirm the user has a premium entitlement.
     if (!!idTokenResult.claims.revenueCatEntitlements.includes("premium")) {
       // Show premium UI.
       showPremiumUI();
     } else {
       // Show regular user UI.
       showFreeUI();
     }
  })
  .catch((error) => {
    console.log(error);
  });
