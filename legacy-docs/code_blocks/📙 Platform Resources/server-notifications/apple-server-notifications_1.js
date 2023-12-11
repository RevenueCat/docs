app.post('/subscription-update', (req, res) => {
  // - Let Apple know we received the notification
  res.status(200).json();

  // - Forward the request body as-is to RevenueCat
  axios.post(process.env.REVENUECAT_URL, req.body)
  .then(response => {
    // - Successfully forwarded to RevenueCat
    console.log("Successfully forwarded to RevenueCat", response);
  })
  .catch(error => {
    // - Consider a retry to RevenueCat if there's a network error or status code is 5xx
    // - This is optional as RevenueCat should recheck the receipt within a few hours
    console.error("Failed to send notification to RevenueCat", error);
  });

  // - Anything else you want to do with the request can go here
});