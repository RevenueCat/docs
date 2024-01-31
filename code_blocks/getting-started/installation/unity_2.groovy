dependencies {
    ...
    
    // ** ADD THIS **
    configurations.all {
        exclude group: 'com.android.billingclient', module: 'billing'
    }
}