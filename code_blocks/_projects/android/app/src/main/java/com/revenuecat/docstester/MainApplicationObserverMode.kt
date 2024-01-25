package com.revenuecat.docstester

import android.app.Application
import com.revenuecat.purchases.LogLevel
import com.revenuecat.purchases.Purchases
import com.revenuecat.purchases.PurchasesConfiguration
import com.revenuecat.purchases.amazon.AmazonConfiguration

// region Observer mode configuration
class MainApplication : Application() {
    override fun onCreate() {
        super.onCreate()
        Purchases.logLevel = LogLevel.DEBUG

        // If you're building for the Amazon Appstore, you can use flavors to determine
        // which keys to use.
        //
        // Add the following to your build.gradle to create a flavor dimension called "store":
        //
        // flavorDimensions "store"
        // productFlavors {
        //     amazon {
        //         buildConfigField "String", "STORE", "\"amazon\""
        //     }
        //
        //     google {
        //         buildConfigField "String", "STORE", "\"google\""
        //     }
        // }
        if (BuildConfig.STORE == "amazon") {
            val builder = AmazonConfiguration.Builder(this, Constants.amazonApiKey)
                .observerMode(true)
                // Optionally set an app user ID for the user
                .appUserID(UserManager.appUserID)
            Purchases.configure(builder.build())
        } else if (BuildConfig.STORE == "google") {
            val builder = PurchasesConfiguration.Builder(this, Constants.googleApiKey)
                .observerMode(true)
                // Optionally set an app user ID for the user
                .appUserID(UserManager.appUserID)
            Purchases.configure(builder.build())
        }
    }
}
// endregion
