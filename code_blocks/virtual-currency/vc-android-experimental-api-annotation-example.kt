import com.revenuecat.purchases.ExperimentalPreviewRevenueCatPurchasesAPI

@OptIn(ExperimentalPreviewRevenueCatPurchasesAPI::class)
fun printVirtualCurrencyBalances() {
   for((vcCode, virtualCurrencyInfo) in customerInfo.virtualCurrencies) {
      println("$virtualCurrencyCode: ${virtualCurrencyInfo.balance}")
   }
}
