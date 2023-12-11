// If you're targeting only Google Play Store
class MainApplication: Application() {
    override fun onCreate() {
        super.onCreate()
        Purchases.debugLogsEnabled = true
        Purchases.configure(PurchasesConfiguration.Builder(this, "public_google_sdk_key").build())
    }
}

// If you're building for the Amazon Appstore, you can use flavors to determine which keys to use
// In your build.gradle:
flavorDimensions "store"
productFlavors {
    amazon {
        buildConfigField "String", "STORE", "\"amazon\""
    }

    google {
        buildConfigField "String", "STORE", "\"google\""
    }       
}

///...

class MainApplication: Application() {
    override fun onCreate() {
        super.onCreate()
        Purchases.debugLogsEnabled = true
          
        if (BuildConfig.STORE.equals("amazon")) {
            Purchases.configure(AmazonConfiguration.Builder(this, "public_amazon_sdk_key").build())
        } else if (BuildConfig.STORE.equals("google")) {
            Purchases.configure(PurchasesConfiguration.Builder(this, "public_google_sdk_key").build())
        }
    }
}