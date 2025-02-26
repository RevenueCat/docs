import React from "react";

export const CustomerCenterSDKTable: React.FC = () => {
  const sdkData = [
    {
      name: "Native iOS",
      sdk: "RevenueCatUI",
      link: "https://github.com/RevenueCat/purchases-ios",
      version: "5.14.0 and higher",
    },
    {
      name: "Native Android",
      sdk: "com.revenuecat.purchases:purchases-ui",
      link: "https://github.com/RevenueCat/purchases-android",
      version: "8.12.1 and higher",
    },
    {
      name: "React Native",
      sdk: "react-native-purchases-ui",
      link: "https://github.com/RevenueCat/react-native-purchases",
      version: "8.6.0 and higher",
    },
    {
      name: "Flutter",
      sdk: "purchases_ui_flutter",
      link: "https://github.com/RevenueCat/purchases-flutter",
      version: "8.7.0 and higher",
    },
    {
      name: "Kotlin Multiplatform",
      sdk: "com.revenuecat.purchases:purchases-kmp-ui",
      link: "https://github.com/RevenueCat/purchases-kmp",
      version: "Coming soon",
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
