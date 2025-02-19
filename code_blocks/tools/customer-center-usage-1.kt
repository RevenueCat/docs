import com.revenuecat.purchases.ui.revenuecatui.customercenter.CustomerCenter

...

@Composable
fun YourAppScreen() {
    var isCustomerCenterVisible by remember { mutableStateOf(false) }

    if (isCustomerCenterVisible) {
        CustomerCenter(modifier = Modifier.fillMaxSize(), onDismiss = { isCustomerCenterVisible = false })
        return
    }

    Column(
        modifier = Modifier.fillMaxSize(),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center,
    ) {
        Button(onClick = {
            isCustomerCenterVisible = true
        }) {
            Text(text = "Show customer center")
        }
    }
}