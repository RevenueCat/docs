import androidx.compose.material3.MaterialTheme

val isDarkTheme = isSystemInDarkTheme()
val colorScheme = if (isDarkTheme) darkColorScheme() else lightColorScheme()

MaterialTheme(
    colorScheme = colorScheme,
) {
    CustomerCenter(
        modifier = Modifier.fillMaxSize(),
        onDismiss = { isCustomerCenterVisible = false }
    )
} 