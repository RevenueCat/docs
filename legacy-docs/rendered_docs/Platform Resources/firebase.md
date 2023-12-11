---
title: Firebase Apps
slug: firebase
excerpt: Integrate your Firebase app with RevenueCat
hidden: true
categorySlug: resources
order: 4
---
# What is RevenueCat?

RevenueCat is a scalable backend for in-app subscriptions and purchases. With RevenueCat, you can build and manage your mobile app business without having to set up or maintain any purchase infrastructure. Here you can read more about [how RevenueCat fits into your app](https://www.revenuecat.com/blog/where-does-revenuecat-fit-in-your-app).
[block:callout]
{
  "type": "warning",
  "body": "We recommend checking out our official [Firebase integration](doc:firebase-integration) for a more seamless integration between RevenueCat and Firebase.",
  "title": "Deprecated"
}
[/block]
Firebase is a popular backend-as-a-service by Google for building mobile apps.

# Keeping User IDs In Sync

Firebase has a well documented authentication mechanism that works with Email/Password, Github, Google Sign-In, anonymous authentication and more. 

It's simple to keep your user IDs from Firebase in sync with the RevenueCat backend by listening to authentication state change notifications posted by Firebase.

Below are practical examples of setting this up in your application:

## iOS
```swift 
import Firebase
import RevenueCat

func application(_ application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey: Any]?) -> Bool {

    // Configure Purchases before Firebase
    Purchases.configure(withAPIKey: "public_sdk_key")
    Purchases.shared.delegate = self

    // Configure Firebase
    FirebaseApp.configure()

    // Add state change listener for Firebase Authentication
    Auth.auth().addStateDidChangeListener { (auth, user) in

        if let uid = user?.uid {

            // identify Purchases SDK with new Firebase user
            Purchases.shared.logIn(uid, { (info, created, error) in
                if let error {
                    print("Sign in error: \(error.localizedDescription)")
                } else {
                    print("User \(uid) signed in")
                }
            })
        }
    }

    return true
}

// MARK: - Purchases delegate (optional)
func purchases(_ purchases: Purchases, receivedUpdated customerInfo: CustomerInfo) {

    // You can optionally post to the notification center whenever
    // customer info changes.

    // You can subscribe to this notification throughout your app
    // to refresh tableViews or change the UI based on the user's
    // subscription status
    let notificationName = Notification.Name(rawValue: "com.RevenueCat.customerInfoUpdatedNotification")
    NotificationCenter.default.post(name: notificationName, object: nil)
}
```
## Android
```kotlin 
class MainApplication: Application() {

    private lateinit var auth: FirebaseAuth
      
    override fun onCreate() {
        super.onCreate()
          
        // Configure Purchases
        Purchases.configure(this, "public_sdk_key")
    }
}
  
class MainActivity: Activity() {
    public override fun onCreate() {

        // Initialize Firebase Auth
        firebaseAuth = FirebaseAuth.getInstance()  
    }

    public override fun onStart() {
        super.onStart()
        
        val authStateListener = FirebaseAuth.AuthStateListener { auth ->
        
            val user = auth.currentUser

            if(user != null) {

                // identify Purchases with new Firebase user
                Purchases.sharedInstance.loginWith("my_app_user_id", ::showError) { customerInfo, created ->
                    Log.d(TAG, "User signed in.")
                }
                
            }
        }
    
        firebaseAuth.addAuthStateListener(authStateListener)
    }
}



// Purchases Change Listener (Optional)
class UpsellActivity : AppCompatActivity(), UpdatedCustomerInfoListener {
		override fun onReceived(customerInfo: CustomerInfo?) {
        
    // You can optionally react to any changes in customer info
    // such as updating the UI throughout your app
    }
}
```

[block:callout]
{
  "type": "info",
  "body": "Always test authentication in your own app and make sure everything is working as expected. Since every app is different, the above helpers can get you started but may need to be modified to work with the authentication flow specific to your app."
}
[/block]
# Handling Events With Cloud Functions

Firebase Cloud Functions are a great way to run server-side code without having to manage your own server. This makes them excellent for things like catching webhooks.

Below is an example that uses a combination of HTTP triggers and Pub/Sub triggers to handle webhook events from RevenueCat.

The URL of the `incomingWebhook` function should be pasted into the RevenueCat dashboard along with a secret auth key that the function will use to verify it is actually RevenueCat that's sending the event.

## Setup
![](https://files.readme.io/376d572-Screen_Shot_2021-12-02_at_10.53.29_AM.png "Screen Shot 2021-12-02 at 10.53.29 AM.png")
## Function Code
```javascript index.js
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
```

[block:callout]
{
  "type": "info",
  "title": "Write idempotent functions",
  "body": "Firebase PubSub functions should be idempotent, that is, they should produce the same result even if they are called multiple times. See Firebase guides for more information"
}
[/block]