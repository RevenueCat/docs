const functions = require('firebase-functions');
const {PubSub} = require('@google-cloud/pubsub');

// Your Firebase project ID
const projectId = '<YOUR_FIREBASE_PROJECT_ID>';

// Instantiates a client
const pubsubClient = new PubSub({
  projectId: projectId,
});


function isAuthorized(req) {
  // Check authorization header
  if (!req.headers.authorization || !req.headers.authorization.startsWith('Bearer ')) {
    return false;
  }
  const authToken = req.headers.authorization.split('Bearer ')[1];
  if (authToken !== '<YOUR_REVENUECAT_WEBHOOK_AUTH_TOKEN>') {
    return false;
  }

  return true;
}


// Respond to incoming message
exports.incomingWebhook = functions.https.onRequest((req, res) => {
  
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(403).send('Forbidden');
  }

  // Make sure the authorization key matches what we
  // set in the RevenueCat dashboard
  if (!isAuthorized(req)) {
    return res.status(401).send('Unauthorized'); 
  }

  const event = req.body.event;
  
  var topic = '';


  // Check for the event types that you want to respond to
  // You may only need a subset of these events 
  switch(event.type) {
    case 'INITIAL_PURCHASE':
      topic = 'rc-initial-purchase';
      break;
    case 'NON_RENEWING_PURCHASE':
      topic = 'rc-non-renewing-purchase';
      break;
    case 'RENEWAL':
      topic = 'rc-renewal';
      break;
    case 'PRODUCT_CHANGE':
      topic = 'rc-product-change';
      break;
    case 'CANCELLATION':
      topic = 'rc-cancellation';
      break;
    case 'BILLING_ISSUE':
      topic = 'rc-billing-issue';
      break;
    case 'SUBSCRIBER_ALIAS':
      topic = 'rc-subscriber-alias';
      break;
    default:
      console.log('Unhandled event type: ', event.type);
      return res.sendStatus(200);
  }

  // Set the pub/sub data to the event body
  const dataBuffer = Buffer.from(JSON.stringify(event));

  // Publishes a message
  return pubsubClient.topic(topic)
    .publish(dataBuffer)
    .then(() => res.sendStatus(200))
    .catch(err => {
      console.error(err);
      res.sendStatus(500);
      return Promise.reject(err);
   });
});

exports.handleInitialPurchase = functions.pubsub.topic('rc-initial-purchase').onPublish((message, context) => {
  
  // Handle initial purchases of subscription products
  console.log('INITIAL_PURCHASE: ', message.json);
  return null;
});

exports.handleNonRenewingPurchase = functions.pubsub.topic('rc-non-renewing-purchase').onPublish((message, context) => {
  
  // Handle a non-subscription purchase
  console.log('NON_RENEWING_PURCHASE: ', message.json);
  return null;
});

exports.handleRenewal = functions.pubsub.topic('rc-renewal').onPublish((message, context) => {
  
  // Handle subscription renewal
  console.log('RENEWAL: ', message.json);
  return null;
});

exports.handleProductChange = functions.pubsub.topic('rc-product-change').onPublish((message, context) => {
  
  // Handle subscription product change
  console.log('PRODUCT_CHANGE: ', message.json);
  return null;
});

exports.handleCancellation = functions.pubsub.topic('rc-cancellation').onPublish((message, context) => {
  
  // Handle subscription cancellations. Note that
  // a subscription may still be active depending
  // on the cancellation type and you shouldn't
  // automatically cut off access.
  console.log('CANCELLATION: ', message.json);
  return null;
});

exports.handleBillingIssue = functions.pubsub.topic('rc-billing-issue').onPublish((message, context) => {
  
  // Handle billing issues with subscription renewals
  console.log('BILLING_ISSUE: ', message.json);
  return null;
});

exports.handleSubscriberAlias = functions.pubsub.topic('rc-subscriber-alias').onPublish((message, context) => {
  
  // Handle subscriber alias events
  console.log('SUBSCRIBER_ALIAS: ', message.json);
  return null;
});