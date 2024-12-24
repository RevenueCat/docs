target 'iosApp' do
  use_frameworks!
  platform :ios, '16.0'
  pod 'shared', :path => '../shared', :platforms => :ios

  # Add the following post_install script:
  post_install do |installer|
    installer.pods_project.targets.each do |target|
      if target.name == 'shared'
        target.build_configurations.each do |config|
          config.build_settings.delete('ASSETCATALOG_COMPILER_APPICON_NAME')
        end
      end
    end
  end
end 