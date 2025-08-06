import com.segment.analytics.Analytics
import com.revenuecat.purchases.Purchases

Purchases.configure(this, "public_sdk_key", appUserID = "my_app_user_id")
Analytics.with(this).identify("my_app_user_id")

