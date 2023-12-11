// login
Branch.getInstance().setIdentity("my_app_user_id")

// Optional: Use a different App User ID between Branch and RevenueCat
Purchases.shared.attribution.setAttributes(["$branchId": "<custom_branch_user_id"])

// logout
Branch.getInstance().logout()
