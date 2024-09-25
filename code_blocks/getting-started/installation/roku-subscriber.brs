' The subscriber object is returned from different APIs. Here's an example of what it looks like:
{
  activeSubscriptions: ["my_product_id"]
  allExpirationDatesByProduct: {
    "my_product_id": <Component: roDateTime>
  }
  allPurchaseDatesByProduct: {
    "my_product_id": <Component: roDateTime>
  }
  allPurchasedProductIds: ["my_product_id"]
  entitlements: {
    all: {
      billingIssueDetectedAt: invalid
      expirationDate: <Component: roDateTime>
      identifier: "premium"
      isActive: false
      isSandbox: true
      latestPurchaseDate: <Component: roDateTime>
      originalPurchaseDate: <Component: roDateTime>
      ownershipType: "PURCHASED"
      periodType: "normal"
      productIdentifier: "my_product_identifier"
      productPlanIdentifier: invalid
      store: "app_store"
      unsubscribeDetectedAt: invalid
      willRenew: false
    }
    active: {}
  }
  firstSeen: <Component: roDateTime>
  lastSeen: <Component: roDateTime>
  latestExpirationDate: <Component: roDateTime>
  managementUrl: invalid
  nonSubscriptionTransactions: [
    {
        isSandbox: false
        originalPurchaseDate: <Component: roDateTime>
        purchaseDate: <Component: roDateTime>
        store: "roku"
        storeTransactionIdentifier: "XXXXXXX"
        transactionIdentifier: "XXXXXXX"
        productIdentifier: "my_product_id"
    }
  ]
  originalAppUserId: "$RCAnonymousID:XXXXXXXXXXXXXXXX"
  originalApplicationVersion: "1.0"
  originalPurchaseDate: <Component: roDateTime>
  requestDate: <Component: roDateTime>
}