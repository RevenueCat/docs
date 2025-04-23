import React from "react";

export const sdkVersions = {
  ios: "5.14.0",
  android: "8.12.2",
  reactNative: "8.7.0",
  flutter: "8.6.0",
  kmp: "1.7.0",
};

export const CustomerCenterSDKTable: React.FC = () => {
  const sdkData = [
    {
      name: "Native iOS",
      sdk: "RevenueCatUI",
      link: "https://github.com/RevenueCat/purchases-ios",
      version: `${sdkVersions.ios} and higher`,
    },
    {
      name: "Native Android",
      sdk: "com.revenuecat.purchases:purchases-ui",
      link: "https://github.com/RevenueCat/purchases-android",
      version: `${sdkVersions.android} and higher`,
    },
    {
      name: "React Native",
      sdk: "react-native-purchases-ui",
      link: "https://github.com/RevenueCat/react-native-purchases",
      version: `${sdkVersions.reactNative} and higher`,
    },
    {
      name: "Flutter",
      sdk: "purchases_ui_flutter",
      link: "https://github.com/RevenueCat/purchases-flutter",
      version: `${sdkVersions.flutter} and higher`,
    },
    {
      name: "Kotlin Multiplatform",
      sdk: "com.revenuecat.purchases:purchases-kmp-ui",
      link: "https://github.com/RevenueCat/purchases-kmp",
      version: `${sdkVersions.kmp} and higher`,
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>Platform</th>
          <th>Package</th>
          <th>Required Version</th>
        </tr>
      </thead>
      <tbody>
        {sdkData.map(({ name, sdk, link, version }) => (
          <tr key={name}>
            <td>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            </td>
            <td>{sdk}</td>
            <td>{version}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerCenterSDKTable;
