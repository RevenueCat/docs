import io.branch.referral.Branch
import com.revenuecat.purchases.Purchases

// login
Branch.getInstance().setIdentity("my_app_user_id")

// Optional: Use a different App User ID between Branch and RevenueCat
Purchases.sharedInstance.setAttributes(mapOf("\$branchId" to "<custom_branch_user_id>"))

// logout
Branch.getInstance().logout()
