val customerCenterListener = remember { createCustomerCenterListener() }

if (isCustomerCenterVisible) {
    CustomerCenter(
        modifier = Modifier.fillMaxSize(),
        options = CustomerCenterOptions.Builder()
            .setListener(customerCenterListener)
            .build(),
    ) {
        isCustomerCenterVisible = false
    }
    return
} 