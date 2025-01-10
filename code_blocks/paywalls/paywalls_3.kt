@OptIn(ExperimentalPreviewRevenueCatUIPurchasesAPI::class)
@Composable
private fun NavGraph(navController: NavHostController) {
    NavHost(
        navController = navController,
        startDestination = Screen.Main.route,
    ) {
        composable(route = Screen.Main.route) {
            MainScreen()
        }

        composable(route = Screen.Paywall.route) {
            Paywall(
                options = PaywallOptions.Builder(
                    onDismiss = { navController.popBackStack() }
                )
                    .setListener(
                        object : PaywallListener {
                            override fun onPurchaseCompleted(customerInfo: CustomerInfo, storeTransaction: StoreTransaction) {}
                            override fun onRestoreCompleted(customerInfo: CustomerInfo) {}
                        }
                    )
                    .build()
            )
        }
    }
}