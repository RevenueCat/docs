// Get all user IDs and receipts from your database.
const records = ...

for (let record of records) {
  
  // Pull the app user ID, receipt, product ID, and price info from the database record.
  // This is going to vary depending on your database schema.
  const app_user_id = record.user_id;
  const receipt = record.receipt;
  const product_id = record.product_id;
  const price = record.price;
  const currency = record.currency.

  // Build the request headers with your public SDK key.
	var myHeaders = new Headers();
	myHeaders.append("Content-Type", "application/json");
	myHeaders.append("Authorization", "Bearer PUBLIC_SDK_KEY");

  // Build the request body with the app user ID, receipt, and required info.
	const raw = JSON.stringify({
	  product_id: product_id,
	  price: price,
	  currency: currency,
	  is_restore: 'false',
	  app_user_id: app_user_id,
	  fetch_token: receipt
	});

	const requestOptions = {
	  method: 'POST',
	  headers: myHeaders,
	  body: raw,
	  redirect: 'follow'
	};

  // Send the receipt to RevenueCat.
	fetch("https://api.revenuecat.com/v1/receipts", requestOptions)
	  .then(response => response.text())
	  .then(result => console.log(result))
	  .catch(error => console.log('error', error));
  
  // Sleep for one second to remain under the rate limit.
  sleep(1);
}