// Configure Purchases
if (Platform.OS === 'ios') {
	await Purchases.configure({apiKey: <public_ios_sdk_key>});
} else if (Platform.OS === 'android') {
	await Purchases.configure({apiKey: <public_google_sdk_key>});
	// OR: if building for Amazon, be sure to follow the installation instructions then:
	await Purchases.configure({apiKey: <public_amazon_sdk_key>, useAmazon: true });
}

// Initialize Iterable
Iterable.initialize(<YOUR_API_KEY>, config);

// Setting Iterable email or userId
Iterable.setEmail("user@example.com");
Iterable.setUserId("user123");

// Set $email or $iterableUserId, (optional) $iterableCampaignId, $iterableTemplateId
Iterable.getEmail().then(email => {
	console.log("Current email: " + email);
  	Purchases.setAttributes({ "$email" : email });
});

Iterable.getUserId().then(userId => {
	console.log("Current userId: " + userId);
  	Purchases.setAttributes({ "$iterableUserId" : userId });
});

Purchases.setAttributes({ "$iterableCampaignId" : "123", "$iterableTemplateId" : "123" });