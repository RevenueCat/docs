getDoc(doc(db, "${param:REVENUECAT_CUSTOMERS_COLLECTION}", getAuth().currentUser.uid))
  .then((snapshot) => {
    if (snapshot.exists()) {
      snapshot.subscriptions
        .filter(subscription => new Date(subscription.expires_date) >= new Date())
        .forEach(subscription => console.log(JSON.stringify(subscription)));
    }
  });