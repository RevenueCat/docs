public void OnInitialized(IStoreController controller, IExtensionProvider extensions)
{
   m_StoreController = controller;
   storeExtensionProvider = extensions;
   var purchases = GetComponent<Purchases>();
   purchases.SetDebugLogsEnabled(true);
   foreach (Product product in controller.products.all)
   {
       if (product.hasReceipt) {
           var amazonExtensions = storeExtensionProvider.GetExtension<IAmazonExtensions>();
           var userId = amazonExtensions.amazonUserId;
           purchases.SyncObserverModeAmazonPurchase( 
               product.definition.id,
               product.transactionID,
               userId,
               product.metadata.isoCurrencyCode,
               Decimal.ToDouble(product.metadata.localizedPrice)
           );
       }
   }
}

public PurchaseProcessingResult ProcessPurchase(PurchaseEventArgs e)
{
   var purchases = GetComponent<Purchases>();
   
   var amazonExtensions = storeExtensionProvider.GetExtension<IAmazonExtensions>();
   var userId = amazonExtensions.amazonUserId;
   purchases.SyncObserverModeAmazonPurchase(
       e.purchasedProduct.definition.id,
       e.purchasedProduct.transactionID,
       userId,
       e.purchasedProduct.metadata.isoCurrencyCode,
       Decimal.ToDouble(e.purchasedProduct.metadata.localizedPrice)
   );
   return PurchaseProcessingResult.Complete;
}