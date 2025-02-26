import React from "react";

export const CustomerCenterSDKTable: React.FC = () => {
  const sdkData = [
    {
      name: "purchases-ios",
      link: "https://github.com/RevenueCat/purchases-ios",
      version: "5.14.0 and higher",
    },
    {
      name: "purchases-android",
      link: "https://github.com/RevenueCat/purchases-android",
      version: "8.12.1 and higher",
    },
    {
      name: "react-native-purchases-ui",
      link: "https://github.com/RevenueCat/react-native-purchases",
      version: "8.6.0 and higher",
    },
    {
      name: "purchases-flutter",
      link: "https://github.com/RevenueCat/purchases-flutter",
      version: "8.7.0 and higher",
    },
    {
      name: "purchases-kmp",
      link: "https://github.com/RevenueCat/purchases-kmp",
      version: "Coming soon",
    },
  ];

  return (
    <table>
      <thead>
        <tr>
          <th>RevenueCat SDK</th>
          <th>Required Version</th>
        </tr>
      </thead>
      <tbody>
        {sdkData.map(({ name, link, version }) => (
          <tr key={name}>
            <td>
              <a href={link} target="_blank" rel="noopener noreferrer">
                {name}
              </a>
            </td>
            <td>{version}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomerCenterSDKTable;
