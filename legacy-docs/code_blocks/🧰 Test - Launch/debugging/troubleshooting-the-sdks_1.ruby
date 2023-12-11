post_install do |installer|
    react_native_post_install(installer)

    installer.pods_project.targets.each do |target|
      unless ['RevenueCat', 'PurchasesHybridCommon', 'RNPurchases'].include?(target.name)
        target.build_configurations.each do |config|
          config.build_settings['BUILD_LIBRARY_FOR_DISTRIBUTION'] = 'YES'
          config.build_settings['ENABLE_BITCODE'] = 'NO'
        end
      end
    end
  end