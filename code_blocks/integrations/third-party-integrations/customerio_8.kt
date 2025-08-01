import com.revenuecat.purchases.Purchases

val customerIoId = "CUSTOMERIO_ID"
Purchases.sharedInstance.setAttributes(mapOf("\$customerioId" to customerIoId))

