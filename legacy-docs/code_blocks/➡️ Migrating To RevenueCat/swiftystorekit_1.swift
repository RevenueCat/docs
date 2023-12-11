func application(application: UIApplication,
                 didFinishLaunchingWithOptions launchOptions: [NSObject: AnyObject]?) -> Bool {

    SwiftyStoreKit.completeTransactions(atomically: true) { purchases in
	    for purchase in purchases {
	        switch purchase.transaction.transactionState {
	        case .purchased, .restored:
	            if purchase.needsFinishTransaction {
	                // Deliver content from server, then:
	                SwiftyStoreKit.finishTransaction(purchase.transaction)
	            }
	            // Unlock content
	        case .failed, .purchasing, .deferred:
	            break // do nothing
	        }
	    }
	}
    return true
}
