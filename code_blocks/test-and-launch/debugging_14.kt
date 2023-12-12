var displayRCDebugMenu by remember { mutableStateOf(false) }

DebugRevenueCatBottomSheet(
    onPurchaseCompleted = { /* Handle purchase completion */ },
    onPurchaseErrored = { error ->
        if (error.userCancelled) { /* Handle purchase cancelled */ }
        else { /* Handle purchase error */ }
    },
    isVisible = displayRCDebugMenu,
    onDismissCallback = { displayRCDebugMenu = false }
)