kotlin {
    // ...
    cocoapods {  
        // Your existing Cocoapods options are here. 

        // Add the PurchasesHybridCommon dependency.
        pod("PurchasesHybridCommon") {  
            version = libs.versions.purchases.common.get()  
            extraOpts += listOf("-compiler-option", "-fmodules")  
        }  
    }   
}