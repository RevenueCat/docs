kotlin {
    // ...
    sourceSets {
        // ...
        commonMain.dependencies {  
            // Add the purchases-kmp dependencies.
            implementation(libs.purchases.core)  
            implementation(libs.purchases.datetime)   // Optional
            implementation(libs.purchases.either)     // Optional
            implementation(libs.purchases.result)     // Optional
        }
    }
}