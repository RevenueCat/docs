const redirects = {
  redirects: [
    {
      from: "/api-v1-spec",
      to: "/api-v1",
    },
    {
      from: "/api-v1/overview",
      to: "/api-v1",
    },
    {
      from: "/api-v2-spec",
      to: "/api-v2",
    },
    {
      from: "/api-v2/overview",
      to: "/api-v2",
    },
    {
      from: "/api-v2/pagination",
      to: "/api-v2#tag/Pagination",
    },
    {
      from: "/api-v2/rate-limit",
      to: "/api-v2#tag/Rate-Limit",
    },
    {
      from: "/api-v2/expandables",
      to: "/api-v2#tag/Expandables",
    },
    {
      from: "/api-v2/error-handling",
      to: "/api-v2#tag/Error-Handling",
    },
    {
      from: "/api-v2/error-handling/error-codes",
      to: "/api-v2#tag/Error-Handling/Error-Codes",
    },
    {
      from: "/api-v2/error-handling/error-types",
      to: "/api-v2#tag/Error-Handling/Error-Types",
    },
    {
      to: "/web/integrations/stripe",
      from: "/getting-started/stripe/in-app-purchases-with-stripe-rfa",
    },
    {
      to: "/web/integrations/stripe",
      from: "/getting-started/stripe",
    },
    {
      to: "/customers/customer-info",
      from: "/customer-info",
    },
    {
      to: "/customers/customer-attributes",
      from: "/subscriber-attributes",
    },
    {
      to: "/customers/customer-attributes",
      from: "/customers/subscriber-attributes",
    },
    {
      to: "/customers/trusted-entitlements",
      from: "/trusted-entitlements",
    },
    {
      to: "/customers/user-ids",
      from: "/user-ids",
    },
    {
      to: "/dashboard-and-metrics/charts/active-subscriptions-chart",
      from: "/active-subscriptions-chart",
    },
    {
      to: "/dashboard-and-metrics/charts/active-subscriptions-movement-chart",
      from: "/active-subscriptions-movement-chart",
    },
    {
      to: "/dashboard-and-metrics/charts/active-trials-chart",
      from: "/active-trials-chart",
    },
    {
      to: "/dashboard-and-metrics/charts/active-trials-movement-chart",
      from: "/active-trials-movement-chart",
    },
    {
      to: "/dashboard-and-metrics/charts/annual-recurring-revenue-arr-chart",
      from: "/annual-recurring-revenue-arr-chart",
    },
    {
      to: "/dashboard-and-metrics/charts/charts-feature-incomplete-periods",
      from: "/charts-feature-incomplete-periods",
    },
    {
      to: "/dashboard-and-metrics/charts/churn-chart",
      from: "/churn-chart",
    },
    {
      to: "/dashboard-and-metrics/charts/conversion-to-paying-chart",
      from: "/conversion-to-paying-chart",
    },
    {
      to: "/dashboard-and-metrics/charts/initial-conversion-chart",
      from: "/initial-conversion-chart",
    },
    {
      to: "/dashboard-and-metrics/charts/monthly-recurring-revenue-movement-chart",
      from: "/monthly-recurring-revenue-movement-chart",
    },
    {
      to: "/dashboard-and-metrics/charts/monthly-recurring-revenue-mrr-chart",
      from: "/monthly-recurring-revenue-mrr-chart",
    },
    {
      to: "/dashboard-and-metrics/charts/realized-ltv-per-customer-chart",
      from: "/realized-ltv-per-customer-chart",
    },
    {
      to: "/dashboard-and-metrics/charts/realized-ltv-per-paying-customer-chart",
      from: "/realized-ltv-per-paying-customer-chart",
    },
    {
      to: "/dashboard-and-metrics/charts/refund-rate-chart",
      from: "/refund-rate-chart",
    },
    {
      to: "/dashboard-and-metrics/charts/revenue-chart",
      from: "/revenue-chart",
    },
    {
      to: "/dashboard-and-metrics/charts/subscription-retention-chart",
      from: "/subscription-retention-chart",
    },
    {
      to: "/dashboard-and-metrics/charts/trial-conversion-chart",
      from: "/trial-conversion-chart",
    },
    {
      to: "/dashboard-and-metrics/charts",
      from: "/charts",
    },
    {
      to: "/dashboard-and-metrics/customer-lists",
      from: "/customer-lists",
    },
    {
      to: "/dashboard-and-metrics/customer-history",
      from: "/dashboard-and-metrics/customers-group",
    },
    {
      to: "/dashboard-and-metrics/customer-history/active-entitlements",
      from: "/active-entitlements",
    },
    {
      to: "/dashboard-and-metrics/customer-history/aliases-card",
      from: "/aliases-card",
    },
    {
      to: "/dashboard-and-metrics/customer-history/attributes",
      from: "/attributes",
    },
    {
      to: "/dashboard-and-metrics/customer-history/attribution-card",
      from: "/attribution-card",
    },
    {
      to: "/dashboard-and-metrics/customer-history/basic-information",
      from: "/basic-information",
    },
    {
      to: "/dashboard-and-metrics/customer-history",
      from: "/customer-history",
    },
    {
      to: "/dashboard-and-metrics/customer-history/manage-users",
      from: "/manage-users",
    },
    {
      to: "/dashboard-and-metrics/customer-history/offering-override",
      from: "/offering-override",
    },
    {
      to: "/dashboard-and-metrics/customer-history/promotionals",
      from: "/promotionals",
    },
    {
      to: "/dashboard-and-metrics/overview",
      from: "/overview",
    },
    {
      to: "/dashboard-and-metrics/performance-summaries",
      from: "/performance-summaries",
    },
    {
      to: "/dashboard-and-metrics/anomaly-detection-notifications",
      from: "/anomaly-detection",
    },
    {
      to: "/dashboard-and-metrics/anomaly-detection-notifications",
      from: "/anomaly-detection-notifications",
    },
    {
      to: "/dashboard-and-metrics/taxes-and-commissions",
      from: "/taxes-and-commissions",
    },
    {
      to: "/getting-started/configuring-sdk/ios-app-extensions",
      from: "/ios-app-extensions",
    },
    {
      to: "/getting-started/configuring-sdk",
      from: "/configuring-sdk",
    },
    {
      to: "/getting-started/displaying-products",
      from: "/displaying-products",
    },
    {
      to: "/getting-started/entitlements/amazon-product-setup",
      from: "/amazon-product-setup",
    },
    {
      to: "/getting-started/entitlements/android-products",
      from: "/android-products",
    },
    {
      to: "/getting-started/entitlements/google-subscriptions-and-backwards-compatibility",
      from: "/google-subscriptions-and-backwards-compatibility",
    },
    {
      to: "/getting-started/entitlements/ios-products",
      from: "/ios-products",
    },
    {
      to: "/getting-started/entitlements/stripe-products",
      from: "/stripe-products",
    },
    {
      to: "/getting-started/entitlements",
      from: "/entitlements",
    },
    {
      to: "/getting-started/entitlements",
      from: "/legacy-entitlements",
    },
    {
      to: "/getting-started/quickstart",
      from: "/getting-started",
    },
    {
      to: "/customers/user-ids",
      from: "/identifying-users",
    },
    {
      to: "/getting-started/installation/android",
      from: "/android",
    },
    {
      to: "/getting-started/installation/app-builders",
      from: "/app-builders",
    },
    {
      to: "/getting-started/installation/cordova",
      from: "/cordova",
    },
    {
      to: "/getting-started/installation/flutter",
      from: "/flutter",
    },
    {
      to: "/getting-started/installation/capacitor",
      from: "/ionic",
    },
    {
      to: "/getting-started/installation/capacitor",
      from: "/getting-started/installation/ionic",
    },
    {
      to: "/getting-started/installation/ios",
      from: "/ios",
    },
    {
      to: "/getting-started/installation/macos",
      from: "/macos",
    },
    {
      to: "/getting-started/installation/reactnative",
      from: "/reactnative",
    },
    {
      to: "/getting-started/installation/unity",
      from: "/unity",
    },
    {
      to: "/getting-started/installation",
      from: "/installation",
    },
    {
      to: "/getting-started/making-purchases/android-with-jetpack-compose",
      from: "/android-with-jetpack-compose",
    },
    {
      to: "/getting-started/making-purchases",
      from: "/making-purchases",
    },
    {
      to: "/getting-started/restoring-purchases",
      from: "/restoring-purchases",
    },
    {
      to: "/web/integrations/stripe",
      from: "/in-app-purchases-with-stripe-rfa",
    },
    {
      to: "/web/integrations/stripe",
      from: "/stripe",
    },
    {
      to: "/integrations/attribution/adjust",
      from: "/adjust",
    },
    {
      to: "/integrations/attribution/apple-search-ads",
      from: "/apple-search-ads",
    },
    {
      to: "/integrations/attribution/appsflyer",
      from: "/appsflyer",
    },
    {
      to: "/integrations/attribution/branch",
      from: "/branch",
    },
    {
      to: "/integrations/attribution/meta-ads",
      from: "/facebook-ads",
    },
    {
      to: "/integrations/attribution/singular",
      from: "/singular",
    },
    {
      to: "/integrations/attribution/splitmetrics-acquire",
      from: "/splitmetrics-acquire",
    },
    {
      to: "/integrations/attribution/tenjin",
      from: "/tenjin",
    },
    {
      to: "/integrations/attribution",
      from: "/attribution",
    },
    {
      to: "/integrations/integrations",
      from: "/integrations",
    },
    {
      to: "/integrations/partner-built-integrations",
      from: "/partner-built-integrations",
    },
    {
      to: "/integrations/scheduled-data-exports/data-export-version-3",
      from: "/data-export-version-3",
    },
    {
      to: "/integrations/scheduled-data-exports/data-export-version-4",
      from: "/data-export-version-4",
    },
    {
      to: "/integrations/scheduled-data-exports/data-export-version-5",
      from: "/data-export-version-5",
    },
    {
      to: "/integrations/scheduled-data-exports/scheduled-data-exports-azure",
      from: "/scheduled-data-exports-azure",
    },
    {
      to: "/integrations/scheduled-data-exports/scheduled-data-exports-gcp",
      from: "/scheduled-data-exports-gcp",
    },
    {
      to: "/integrations/scheduled-data-exports/scheduled-data-exports-s3",
      from: "/scheduled-data-exports-s3",
    },
    {
      to: "/integrations/scheduled-data-exports",
      from: "/scheduled-data-exports",
    },
    {
      to: "/integrations/stripe-app",
      from: "/stripe-app",
    },
    {
      to: "/integrations/third-party-integrations/airship",
      from: "/airship",
    },
    {
      to: "/integrations/third-party-integrations/amplitude",
      from: "/amplitude",
    },
    {
      to: "/integrations/third-party-integrations/braze",
      from: "/braze",
    },
    {
      to: "/integrations/third-party-integrations/clevertap",
      from: "/clevertap",
    },
    {
      to: "/integrations/third-party-integrations/discord",
      from: "/discord",
    },
    {
      to: "/integrations/third-party-integrations/firebase-integration",
      from: "/firebase-integration",
    },
    {
      to: "/integrations/third-party-integrations/intercom",
      from: "/intercom",
    },
    {
      to: "/integrations/third-party-integrations/iterable",
      from: "/iterable",
    },
    {
      to: "/integrations/third-party-integrations/mixpanel",
      from: "/mixpanel",
    },
    {
      to: "/integrations/third-party-integrations/mparticle",
      from: "/mparticle",
    },
    {
      to: "/integrations/third-party-integrations/onesignal",
      from: "/onesignal",
    },
    {
      to: "/integrations/third-party-integrations/segment",
      from: "/segment",
    },
    {
      to: "/integrations/third-party-integrations/slack",
      from: "/slack",
    },
    {
      to: "/integrations/third-party-integrations/statsig",
      from: "/statsig",
    },
    {
      to: "/integrations/third-party-integrations/superwall",
      from: "/superwall",
    },
    {
      to: "/integrations/third-party-integrations",
      from: "/third-party-integrations",
    },
    {
      to: "/integrations/webhooks/event-flows",
      from: "/event-flows",
    },
    {
      to: "/integrations/webhooks/event-types-and-fields",
      from: "/event-types-and-fields",
    },
    {
      to: "/integrations/webhooks/sample-events",
      from: "/sample-events",
    },
    {
      to: "/integrations/webhooks",
      from: "/webhooks",
    },
    {
      to: "/migrating-to-revenuecat/migrating-existing-subscriptions/receipt-imports",
      from: "/receipt-imports",
    },
    {
      to: "/migrating-to-revenuecat/migrating-existing-subscriptions/google-historical-import",
      from: "/google-historical-import",
    },
    {
      to: "/migrating-to-revenuecat/migrating-existing-subscriptions",
      from: "/migrating-existing-subscriptions",
    },
    {
      to: "/migrating-to-revenuecat/sdk-or-not/finishing-transactions",
      from: "/observer-mode",
    },
    {
      to: "/migrating-to-revenuecat/swiftystorekit",
      from: "/swiftystorekit",
    },
    {
      to: "/platform-resources/amazon-platform-resources/amazon-small-business-accelerator-program",
      from: "/amazon-small-business-accelerator-program",
    },
    {
      to: "/platform-resources/amazon-platform-resources",
      from: "/amazon-platform-resources",
    },
    {
      to: "/platform-resources/apple-platform-resources/app-store-small-business-program",
      from: "/app-store-small-business-program",
    },
    {
      to: "/platform-resources/apple-platform-resources/apple-app-privacy",
      from: "/apple-app-privacy",
    },
    {
      to: "/platform-resources/apple-platform-resources/apple-family-sharing",
      from: "/apple-family-sharing",
    },
    {
      to: "/platform-resources/apple-platform-resources/legacy-mac-apps",
      from: "/legacy-mac-apps",
    },
    {
      to: "/platform-resources/apple-platform-resources/swiftui-helpers",
      from: "/swiftui-helpers",
    },
    {
      to: "/platform-resources/apple-platform-resources",
      from: "/apple-platform-resources",
    },
    {
      to: "/platform-resources/google-platform-resources/15-reduced-service-fee",
      from: "/15-reduced-service-fee",
    },
    {
      to: "/platform-resources/google-platform-resources/google-play-pass",
      from: "/google-play-pass",
    },
    {
      to: "/platform-resources/google-platform-resources/google-play-quota-increase-request",
      from: "/google-play-quota-increase-request",
    },
    {
      to: "/platform-resources/google-platform-resources/google-plays-data-safety",
      from: "/google-plays-data-safety",
    },
    {
      to: "/platform-resources/google-platform-resources",
      from: "/google-platform-resources",
    },
    {
      to: "/platform-resources/implementation-responsibilities",
      from: "/implementation-responsibilities",
    },
    {
      to: "/platform-resources/non-subscriptions",
      from: "/non-subscriptions",
    },
    {
      to: "/platform-resources/sample-apps",
      from: "/sample-apps",
    },
    {
      to: "/platform-resources/server-notifications/apple-server-notifications",
      from: "/apple-server-notifications",
    },
    {
      to: "/platform-resources/server-notifications/google-server-notifications",
      from: "/google-server-notifications",
    },
    {
      to: "/platform-resources/server-notifications/stripe-server-notifications",
      from: "/stripe-server-notifications",
    },
    {
      to: "/platform-resources/server-notifications",
      from: "/server-notifications",
    },
    {
      to: "/revenuecat-support/support-first-steps",
      from: "/support-first-steps",
    },
    {
      to: "/sdk-guides/android-native-4x-to-5x-migration",
      from: "/android-native-4x-to-5x-migration",
    },
    {
      to: "/sdk-guides/android-native-5x-to-6x-migration",
      from: "/android-native-5x-to-6x-migration",
    },
    {
      to: "/sdk-guides/android-native-6x-to-7x-migration",
      from: "/android-native-6x-to-7x-migration",
    },
    {
      to: "/sdk-guides/ios-native-3x-to-4x-migration",
      from: "/ios-native-3x-to-4x-migration",
    },
    {
      to: "/service-credentials/amazon-appstore-credentials",
      from: "/amazon-appstore-credentials",
    },
    {
      to: "/service-credentials/creating-play-service-credentials/google-play-checklists",
      from: "/google-play-checklists",
    },
    {
      to: "/service-credentials/creating-play-service-credentials",
      from: "/creating-play-service-credentials",
    },
    {
      to: "/service-credentials/itunesconnect-app-specific-shared-secret/app-store-connect-api-key-configuration",
      from: "/app-store-connect-api-key-configuration",
    },
    {
      to: "/service-credentials/itunesconnect-app-specific-shared-secret/in-app-purchase-key-configuration",
      from: "/in-app-purchase-key-configuration",
    },
    {
      to: "/service-credentials/itunesconnect-app-specific-shared-secret",
      from: "/itunesconnect-app-specific-shared-secret",
    },
    {
      to: "/subscription-guidance/google-prepaid-plans",
      from: "/google-prepaid-plans",
    },
    {
      to: "/subscription-guidance/how-grace-periods-work",
      from: "/how-grace-periods-work",
    },
    {
      to: "/subscription-guidance/managing-subscriptions",
      from: "/managing-subscriptions",
    },
    {
      to: "/subscription-guidance/price-changes",
      from: "/price-changes",
    },
    {
      to: "/subscription-guidance/refunds",
      from: "/refunds",
    },
    {
      to: "/subscription-guidance/subscription-offers/google-play-offers",
      from: "/google-play-offers",
    },
    {
      to: "/subscription-guidance/subscription-offers/ios-subscription-offers",
      from: "/ios-subscription-offers",
    },
    {
      to: "/subscription-guidance/subscription-offers/stripe-free-trials",
      from: "/stripe-free-trials",
    },
    {
      to: "/subscription-guidance/subscription-offers",
      from: "/subscription-offers",
    },
    {
      to: "/test-and-launch/app-store-rejections",
      from: "/app-store-rejections",
    },
    {
      to: "/test-and-launch/debugging/caching",
      from: "/caching",
    },
    {
      to: "/test-and-launch/debugging/troubleshooting-the-sdks",
      from: "/troubleshooting-the-sdks",
    },
    {
      to: "/test-and-launch/debugging",
      from: "/debugging",
    },
    {
      to: "/test-and-launch/errors",
      from: "/errors",
    },
    {
      to: "/test-and-launch/launch-checklist",
      from: "/launch-checklist",
    },
    {
      to: "/test-and-launch/sandbox/amazon-store-sandbox-testing",
      from: "/amazon-store-sandbox-testing",
    },
    {
      to: "/test-and-launch/sandbox/apple-app-store",
      from: "/apple-app-store",
    },
    {
      to: "/test-and-launch/sandbox/google-play-store",
      from: "/google-play-store",
    },
    {
      to: "/test-and-launch/sandbox",
      from: "/sandbox",
    },
    {
      to: "/tools/experiments-v1/configuring-experiments-v1",
      from: "/configuring-experiments-v1",
    },
    {
      to: "/tools/experiments-v1/creating-offerings-to-test",
      from: "/creating-offerings-to-test",
    },
    {
      to: "/tools/experiments-v1/experiments-overview-v1",
      from: "/experiments-overview-v1",
    },
    {
      to: "/tools/experiments-v1/experiments-results-v1",
      from: "/experiments-results-v1",
    },
    {
      to: "/tools/experiments-v1",
      from: "/experiments-v1",
    },
    {
      to: "/tools/offering-metadata/offering-metadata-examples",
      from: "/offering-metadata-examples",
    },
    {
      to: "/tools/offering-metadata",
      from: "/offering-metadata",
    },
    {
      to: "/tools/offerings-guide",
      from: "/offerings-guide",
    },
    {
      to: "/tools/paywalls/creating-paywalls",
      from: "/creating-paywalls",
    },
    {
      to: "/tools/paywalls/displaying-paywalls",
      from: "/displaying-paywalls",
    },
    {
      to: "/tools/paywalls",
      from: "/paywalls",
    },
    {
      to: "/tools/paywalls-v2",
      from: "/tools/paywalls/creating-paywalls-v2",
    },
    {
      to: "/tools/paywalls-v2",
      from: "/paywalls-v2",
    },
    {
      to: "/tools/targeting",
      from: "/targeting",
    },
    {
      to: "/projects/authentication",
      from: "/authentication",
    },
    {
      to: "/projects/authentication",
      from: "/welcome/authentication",
    },
    {
      to: "/welcome/building-new",
      from: "/building-new",
    },
    {
      to: "/welcome/existing-apps",
      from: "/existing-apps",
    },
    {
      to: "/welcome/set-up-revenuecat/account-management",
      from: "/account-management",
    },
    {
      to: "/welcome/set-up-revenuecat/account-management",
      from: "/welcome/projects/account-management",
    },
    {
      to: "/projects/collaborators",
      from: "/collaborators",
    },
    {
      to: "/projects/collaborators",
      from: "/welcome/projects/collaborators",
    },
    {
      to: "/welcome/set-up-revenuecat/security",
      from: "/security",
    },
    {
      to: "/welcome/set-up-revenuecat/security",
      from: "/welcome/projects/security",
    },
    {
      to: "/projects/overview",
      from: "/projects",
    },
    {
      to: "/projects/overview",
      from: "/welcome/projects",
    },
    {
      to: "/welcome/overview",
      from: "/welcome",
    },
    /*
     * Duplicated from above but with ".html" in the path because static generated builds in S3
     */
    {
      to: "/customers/customer-info",
      from: "/customer-info.html",
    },
    {
      to: "/customers/customer-attributes",
      from: "/subscriber-attributes.html",
    },
    {
      to: "/customers/trusted-entitlements",
      from: "/trusted-entitlements.html",
    },
    {
      to: "/customers/user-ids",
      from: "/user-ids.html",
    },
    {
      to: "/dashboard-and-metrics/charts/active-subscriptions-chart",
      from: "/active-subscriptions-chart.html",
    },
    {
      to: "/dashboard-and-metrics/charts/active-subscriptions-movement-chart",
      from: "/active-subscriptions-movement-chart.html",
    },
    {
      to: "/dashboard-and-metrics/charts/active-trials-chart",
      from: "/active-trials-chart.html",
    },
    {
      to: "/dashboard-and-metrics/charts/active-trials-movement-chart",
      from: "/active-trials-movement-chart.html",
    },
    {
      to: "/dashboard-and-metrics/charts/annual-recurring-revenue-arr-chart",
      from: "/annual-recurring-revenue-arr-chart.html",
    },
    {
      to: "/dashboard-and-metrics/charts/charts-feature-incomplete-periods",
      from: "/charts-feature-incomplete-periods.html",
    },
    {
      to: "/dashboard-and-metrics/charts/churn-chart",
      from: "/churn-chart.html",
    },
    {
      to: "/dashboard-and-metrics/charts/conversion-to-paying-chart",
      from: "/conversion-to-paying-chart.html",
    },
    {
      to: "/dashboard-and-metrics/charts/initial-conversion-chart",
      from: "/initial-conversion-chart.html",
    },
    {
      to: "/dashboard-and-metrics/charts/monthly-recurring-revenue-movement-chart",
      from: "/monthly-recurring-revenue-movement-chart.html",
    },
    {
      to: "/dashboard-and-metrics/charts/monthly-recurring-revenue-mrr-chart",
      from: "/monthly-recurring-revenue-mrr-chart.html",
    },
    {
      to: "/dashboard-and-metrics/charts/realized-ltv-per-customer-chart",
      from: "/realized-ltv-per-customer-chart.html",
    },
    {
      to: "/dashboard-and-metrics/charts/realized-ltv-per-paying-customer-chart",
      from: "/realized-ltv-per-paying-customer-chart.html",
    },
    {
      to: "/dashboard-and-metrics/charts/refund-rate-chart",
      from: "/refund-rate-chart.html",
    },
    {
      to: "/dashboard-and-metrics/charts/revenue-chart",
      from: "/revenue-chart.html",
    },
    {
      to: "/dashboard-and-metrics/charts/subscription-retention-chart",
      from: "/subscription-retention-chart.html",
    },
    {
      to: "/dashboard-and-metrics/charts/trial-conversion-chart",
      from: "/trial-conversion-chart.html",
    },
    {
      to: "/dashboard-and-metrics/charts",
      from: "/charts.html",
    },
    {
      to: "/dashboard-and-metrics/customer-lists",
      from: "/customer-lists.html",
    },
    {
      to: "/dashboard-and-metrics/customer-history",
      from: "/dashboard-and-metrics/customers-group.html",
    },
    {
      to: "/dashboard-and-metrics/customer-history/active-entitlements",
      from: "/active-entitlements.html",
    },
    {
      to: "/dashboard-and-metrics/customer-history/aliases-card",
      from: "/aliases-card.html",
    },
    {
      to: "/dashboard-and-metrics/customer-history/attributes",
      from: "/attributes.html",
    },
    {
      to: "/dashboard-and-metrics/customer-history/attribution-card",
      from: "/attribution-card.html",
    },
    {
      to: "/dashboard-and-metrics/customer-history/basic-information",
      from: "/basic-information.html",
    },
    {
      to: "/dashboard-and-metrics/customer-history",
      from: "/customer-history.html",
    },
    {
      to: "/dashboard-and-metrics/customer-history/manage-users",
      from: "/manage-users.html",
    },
    {
      to: "/dashboard-and-metrics/customer-history/offering-override",
      from: "/offering-override.html",
    },
    {
      to: "/dashboard-and-metrics/customer-history/promotionals",
      from: "/promotionals.html",
    },
    {
      to: "/dashboard-and-metrics/overview",
      from: "/overview.html",
    },
    {
      to: "/dashboard-and-metrics/performance-summaries",
      from: "/performance-summaries.html",
    },
    {
      to: "/dashboard-and-metrics/taxes-and-commissions",
      from: "/taxes-and-commissions.html",
    },
    {
      to: "/getting-started/configuring-sdk/ios-app-extensions",
      from: "/ios-app-extensions.html",
    },
    {
      to: "/getting-started/configuring-sdk",
      from: "/configuring-sdk.html",
    },
    {
      to: "/getting-started/displaying-products",
      from: "/displaying-products.html",
    },
    {
      to: "/getting-started/entitlements/amazon-product-setup",
      from: "/amazon-product-setup.html",
    },
    {
      to: "/getting-started/entitlements/android-products",
      from: "/android-products.html",
    },
    {
      to: "/getting-started/entitlements/google-subscriptions-and-backwards-compatibility",
      from: "/google-subscriptions-and-backwards-compatibility.html",
    },
    {
      to: "/getting-started/entitlements/ios-products",
      from: "/ios-products.html",
    },
    {
      to: "/getting-started/entitlements/stripe-products",
      from: "/stripe-products.html",
    },
    {
      to: "/getting-started/entitlements",
      from: "/entitlements.html",
    },
    {
      to: "/getting-started/quickstart",
      from: "/getting-started.html",
    },
    {
      to: "/customers/user-ids",
      from: "/identifying-users.html",
    },
    {
      to: "/getting-started/installation/android",
      from: "/android.html",
    },
    {
      to: "/getting-started/installation/app-builders",
      from: "/app-builders.html",
    },
    {
      to: "/getting-started/installation/cordova",
      from: "/cordova.html",
    },
    {
      to: "/getting-started/installation/flutter",
      from: "/flutter.html",
    },
    {
      to: "/getting-started/installation/capacitor",
      from: "/ionic.html",
    },
    {
      to: "/getting-started/installation/ios",
      from: "/ios.html",
    },
    {
      to: "/getting-started/installation/macos",
      from: "/macos.html",
    },
    {
      to: "/getting-started/installation/reactnative",
      from: "/reactnative.html",
    },
    {
      to: "/getting-started/installation/unity",
      from: "/unity.html",
    },
    {
      to: "/getting-started/installation",
      from: "/installation.html",
    },
    {
      to: "/getting-started/making-purchases/android-with-jetpack-compose",
      from: "/android-with-jetpack-compose.html",
    },
    {
      to: "/getting-started/making-purchases",
      from: "/making-purchases.html",
    },
    {
      to: "/getting-started/restoring-purchases",
      from: "/restoring-purchases.html",
    },
    {
      to: "/web/integrations/stripe",
      from: "/in-app-purchases-with-stripe-rfa.html",
    },
    {
      to: "/web/integrations/stripe",
      from: "/stripe.html",
    },
    {
      to: "/integrations/attribution/adjust",
      from: "/adjust.html",
    },
    {
      to: "/integrations/attribution/apple-search-ads",
      from: "/apple-search-ads.html",
    },
    {
      to: "/integrations/attribution/appsflyer",
      from: "/appsflyer.html",
    },
    {
      to: "/integrations/attribution/branch",
      from: "/branch.html",
    },
    {
      to: "/integrations/attribution/meta-ads",
      from: "/facebook-ads.html",
    },
    {
      to: "/integrations/attribution/meta-ads",
      from: "/integrations/attribution/facebook-ads",
    },
    {
      to: "/integrations/attribution/singular",
      from: "/singular.html",
    },
    {
      to: "/integrations/attribution/splitmetrics-acquire",
      from: "/splitmetrics-acquire.html",
    },
    {
      to: "/integrations/attribution/tenjin",
      from: "/tenjin.html",
    },
    {
      to: "/integrations/attribution",
      from: "/attribution.html",
    },
    {
      to: "/integrations/integrations",
      from: "/integrations.html",
    },
    {
      to: "/integrations/partner-built-integrations",
      from: "/partner-built-integrations.html",
    },
    {
      to: "/integrations/scheduled-data-exports/data-export-version-3",
      from: "/data-export-version-3.html",
    },
    {
      to: "/integrations/scheduled-data-exports/data-export-version-4",
      from: "/data-export-version-4.html",
    },
    {
      to: "/integrations/scheduled-data-exports/data-export-version-5",
      from: "/data-export-version-5.html",
    },
    {
      to: "/integrations/scheduled-data-exports/scheduled-data-exports-azure",
      from: "/scheduled-data-exports-azure.html",
    },
    {
      to: "/integrations/scheduled-data-exports/scheduled-data-exports-gcp",
      from: "/scheduled-data-exports-gcp.html",
    },
    {
      to: "/integrations/scheduled-data-exports/scheduled-data-exports-s3",
      from: "/scheduled-data-exports-s3.html",
    },
    {
      to: "/integrations/scheduled-data-exports",
      from: "/scheduled-data-exports.html",
    },
    {
      to: "/integrations/stripe-app",
      from: "/stripe-app.html",
    },
    {
      to: "/integrations/third-party-integrations/airship",
      from: "/airship.html",
    },
    {
      to: "/integrations/third-party-integrations/amplitude",
      from: "/amplitude.html",
    },
    {
      to: "/integrations/third-party-integrations/braze",
      from: "/braze.html",
    },
    {
      to: "/integrations/third-party-integrations/clevertap",
      from: "/clevertap.html",
    },
    {
      to: "/integrations/third-party-integrations/discord",
      from: "/discord.html",
    },
    {
      to: "/integrations/third-party-integrations/firebase-integration",
      from: "/firebase-integration.html",
    },
    {
      to: "/integrations/third-party-integrations/intercom",
      from: "/intercom.html",
    },
    {
      to: "/integrations/third-party-integrations/iterable",
      from: "/iterable.html",
    },
    {
      to: "/integrations/third-party-integrations/mixpanel",
      from: "/mixpanel.html",
    },
    {
      to: "/integrations/third-party-integrations/mparticle",
      from: "/mparticle.html",
    },
    {
      to: "/integrations/third-party-integrations/onesignal",
      from: "/onesignal.html",
    },
    {
      to: "/integrations/third-party-integrations/segment",
      from: "/segment.html",
    },
    {
      to: "/integrations/third-party-integrations/slack",
      from: "/slack.html",
    },
    {
      to: "/integrations/third-party-integrations/statsig",
      from: "/statsig.html",
    },
    {
      to: "/integrations/third-party-integrations/superwall",
      from: "/superwall.html",
    },
    {
      to: "/integrations/third-party-integrations",
      from: "/third-party-integrations.html",
    },
    {
      to: "/integrations/webhooks/event-flows",
      from: "/event-flows.html",
    },
    {
      to: "/integrations/webhooks/event-types-and-fields",
      from: "/event-types-and-fields.html",
    },
    {
      to: "/integrations/webhooks/sample-events",
      from: "/sample-events.html",
    },
    {
      to: "/integrations/webhooks",
      from: "/webhooks.html",
    },
    {
      to: "/migrating-to-revenuecat/migrating-existing-subscriptions/receipt-imports",
      from: "/receipt-imports.html",
    },
    {
      to: "/migrating-to-revenuecat/migrating-existing-subscriptions/google-historical-import",
      from: "/google-historical-import.html",
    },
    {
      to: "/migrating-to-revenuecat/migrating-existing-subscriptions",
      from: "/migrating-existing-subscriptions.html",
    },
    {
      to: "/migrating-to-revenuecat/sdk-or-not/finishing-transactions",
      from: "/observer-mode.html",
    },
    {
      to: "/migrating-to-revenuecat/swiftystorekit",
      from: "/swiftystorekit.html",
    },
    {
      to: "/platform-resources/amazon-platform-resources/amazon-small-business-accelerator-program",
      from: "/amazon-small-business-accelerator-program.html",
    },
    {
      to: "/platform-resources/amazon-platform-resources",
      from: "/amazon-platform-resources.html",
    },
    {
      to: "/platform-resources/apple-platform-resources/app-store-small-business-program",
      from: "/app-store-small-business-program.html",
    },
    {
      to: "/platform-resources/apple-platform-resources/apple-app-privacy",
      from: "/apple-app-privacy.html",
    },
    {
      to: "/platform-resources/apple-platform-resources/apple-family-sharing",
      from: "/apple-family-sharing.html",
    },
    {
      to: "/platform-resources/apple-platform-resources/legacy-mac-apps",
      from: "/legacy-mac-apps.html",
    },
    {
      to: "/platform-resources/apple-platform-resources/swiftui-helpers",
      from: "/swiftui-helpers.html",
    },
    {
      to: "/platform-resources/apple-platform-resources",
      from: "/apple-platform-resources.html",
    },
    {
      to: "/platform-resources/google-platform-resources/15-reduced-service-fee",
      from: "/15-reduced-service-fee.html",
    },
    {
      to: "/platform-resources/google-platform-resources/google-play-pass",
      from: "/google-play-pass.html",
    },
    {
      to: "/platform-resources/google-platform-resources/google-play-quota-increase-request",
      from: "/google-play-quota-increase-request.html",
    },
    {
      to: "/platform-resources/google-platform-resources/google-plays-data-safety",
      from: "/google-plays-data-safety.html",
    },
    {
      to: "/platform-resources/google-platform-resources",
      from: "/google-platform-resources.html",
    },
    {
      to: "/platform-resources/implementation-responsibilities",
      from: "/implementation-responsibilities.html",
    },
    {
      to: "/platform-resources/non-subscriptions",
      from: "/non-subscriptions.html",
    },
    {
      to: "/platform-resources/sample-apps",
      from: "/sample-apps.html",
    },
    {
      to: "/platform-resources/server-notifications/apple-server-notifications",
      from: "/apple-server-notifications.html",
    },
    {
      to: "/platform-resources/server-notifications/google-server-notifications",
      from: "/google-server-notifications.html",
    },
    {
      to: "/platform-resources/server-notifications/stripe-server-notifications",
      from: "/stripe-server-notifications.html",
    },
    {
      to: "/platform-resources/server-notifications",
      from: "/server-notifications.html",
    },
    {
      to: "/revenuecat-support/support-first-steps",
      from: "/support-first-steps.html",
    },
    {
      to: "/sdk-guides/android-native-4x-to-5x-migration",
      from: "/android-native-4x-to-5x-migration.html",
    },
    {
      to: "/sdk-guides/android-native-5x-to-6x-migration",
      from: "/android-native-5x-to-6x-migration.html",
    },
    {
      to: "/sdk-guides/android-native-6x-to-7x-migration",
      from: "/android-native-6x-to-7x-migration.html",
    },
    {
      to: "/sdk-guides/ios-native-3x-to-4x-migration",
      from: "/ios-native-3x-to-4x-migration.html",
    },
    {
      to: "/service-credentials/amazon-appstore-credentials",
      from: "/amazon-appstore-credentials.html",
    },
    {
      to: "/service-credentials/creating-play-service-credentials/google-play-checklists",
      from: "/google-play-checklists.html",
    },
    {
      to: "/service-credentials/creating-play-service-credentials",
      from: "/creating-play-service-credentials.html",
    },
    {
      to: "/service-credentials/itunesconnect-app-specific-shared-secret/app-store-connect-api-key-configuration",
      from: "/app-store-connect-api-key-configuration.html",
    },
    {
      to: "/service-credentials/itunesconnect-app-specific-shared-secret/in-app-purchase-key-configuration",
      from: "/in-app-purchase-key-configuration.html",
    },
    {
      to: "/service-credentials/itunesconnect-app-specific-shared-secret",
      from: "/itunesconnect-app-specific-shared-secret.html",
    },
    {
      to: "/subscription-guidance/google-prepaid-plans",
      from: "/google-prepaid-plans.html",
    },
    {
      to: "/subscription-guidance/how-grace-periods-work",
      from: "/how-grace-periods-work.html",
    },
    {
      to: "/subscription-guidance/managing-subscriptions",
      from: "/managing-subscriptions.html",
    },
    {
      to: "/subscription-guidance/price-changes",
      from: "/price-changes.html",
    },
    {
      to: "/subscription-guidance/refunds",
      from: "/refunds.html",
    },
    {
      to: "/subscription-guidance/subscription-offers/google-play-offers",
      from: "/google-play-offers.html",
    },
    {
      to: "/subscription-guidance/subscription-offers/ios-subscription-offers",
      from: "/ios-subscription-offers.html",
    },
    {
      to: "/subscription-guidance/subscription-offers/stripe-free-trials",
      from: "/stripe-free-trials.html",
    },
    {
      to: "/subscription-guidance/subscription-offers",
      from: "/subscription-offers.html",
    },
    {
      to: "/test-and-launch/app-store-rejections",
      from: "/app-store-rejections.html",
    },
    {
      to: "/test-and-launch/debugging/caching",
      from: "/caching.html",
    },
    {
      to: "/test-and-launch/debugging/troubleshooting-the-sdks",
      from: "/troubleshooting-the-sdks.html",
    },
    {
      to: "/test-and-launch/debugging",
      from: "/debugging.html",
    },
    {
      to: "/test-and-launch/errors",
      from: "/errors.html",
    },
    {
      to: "/test-and-launch/launch-checklist",
      from: "/launch-checklist.html",
    },
    {
      to: "/test-and-launch/sandbox/amazon-store-sandbox-testing",
      from: "/amazon-store-sandbox-testing.html",
    },
    {
      to: "/test-and-launch/sandbox/apple-app-store",
      from: "/apple-app-store.html",
    },
    {
      to: "/test-and-launch/sandbox/google-play-store",
      from: "/google-play-store.html",
    },
    {
      to: "/test-and-launch/sandbox",
      from: "/sandbox.html",
    },
    {
      to: "/tools/experiments-v1/configuring-experiments-v1",
      from: "/configuring-experiments-v1.html",
    },
    {
      to: "/tools/experiments-v1/creating-offerings-to-test",
      from: "/creating-offerings-to-test.html",
    },
    {
      to: "/tools/experiments-v1/experiments-overview-v1",
      from: "/experiments-overview-v1.html",
    },
    {
      to: "/tools/experiments-v1/experiments-results-v1",
      from: "/experiments-results-v1.html",
    },
    {
      to: "/tools/experiments-v1",
      from: "/experiments-v1.html",
    },
    {
      to: "/tools/offering-metadata/offering-metadata-examples",
      from: "/offering-metadata-examples.html",
    },
    {
      to: "/tools/offering-metadata",
      from: "/offering-metadata.html",
    },
    {
      to: "/tools/offerings-guide",
      from: "/offerings-guide.html",
    },
    {
      to: "/tools/paywalls/creating-paywalls",
      from: "/creating-paywalls.html",
    },
    {
      to: "/tools/paywalls/displaying-paywalls",
      from: "/displaying-paywalls.html",
    },
    {
      to: "/tools/paywalls",
      from: "/paywalls.html",
    },
    {
      to: "/tools/targeting",
      from: "/targeting.html",
    },
    {
      to: "/projects/authentication",
      from: "/authentication",
    },
    {
      to: "/projects/authentication",
      from: "/welcome/authentication",
    },
    {
      to: "/welcome/building-new",
      from: "/building-new",
    },
    {
      to: "/welcome/set-up-revenuecat/account-management",
      from: "/account-management.html",
    },
    {
      to: "/welcome/set-up-revenuecat/account-management",
      from: "/welcome/projects/account-management.html",
    },
    {
      to: "/projects/collaborators",
      from: "/collaborators.html",
    },
    {
      to: "/projects/collaborators",
      from: "/welcome/projects/collaborators.html",
    },
    {
      to: "/welcome/set-up-revenuecat/security",
      from: "/security.html",
    },
    {
      to: "/welcome/set-up-revenuecat/security",
      from: "/welcome/projects/security.html",
    },
    {
      to: "/projects/overview",
      from: "/projects.html",
    },
    {
      to: "/projects/overview",
      from: "/welcome/projects.html",
    },
    {
      to: "/welcome/overview",
      from: "/welcome.html",
    },
    {
      to: "/dashboard-and-metrics/customer-history",
      from: "/dashboard-and-metrics/customers-group/customer-history",
    },
    {
      to: "/dashboard-and-metrics/customer-history/active-entitlements",
      from: "/dashboard-and-metrics/customers-group/active-entitlements",
    },
    {
      to: "/dashboard-and-metrics/customer-history/aliases-card",
      from: "/dashboard-and-metrics/customers-group/aliases-card",
    },
    {
      to: "/dashboard-and-metrics/customer-history/attributes",
      from: "/dashboard-and-metrics/customers-group/attributes",
    },
    {
      to: "/dashboard-and-metrics/customer-history/attribution-card",
      from: "/dashboard-and-metrics/customers-group/attribution-card",
    },
    {
      to: "/dashboard-and-metrics/customer-history/basic-information",
      from: "/dashboard-and-metrics/customers-group/basic-information",
    },
    {
      to: "/dashboard-and-metrics/customer-history/manage-users",
      from: "/dashboard-and-metrics/customers-group/manage-users",
    },
    {
      to: "/dashboard-and-metrics/customer-history/offering-override",
      from: "/dashboard-and-metrics/customers-group/offering-override",
    },
    {
      to: "/dashboard-and-metrics/customer-history/promotionals",
      from: "/dashboard-and-metrics/customers-group/promotionals",
    },
    {
      to: "/web/web-billing/web-sdk",
      from: "/web/rc-billing",
    },
    {
      to: "/web/web-billing/web-sdk",
      from: "/web/revenuecat-billing",
    },
    {
      to: "/web/web-billing/customer-portal",
      from: "/web/revenuecat-billing/customer-portal",
    },
    {
      to: "/web/web-billing/customization",
      from: "/web/revenuecat-billing/customization",
    },
    {
      to: "/web/web-billing/localization",
      from: "/web/revenuecat-billing/localization",
    },
    {
      to: "/web/web-billing/managing-customer-subscriptions",
      from: "/web/revenuecat-billing/managing-customer-subscriptions",
    },
    {
      to: "/web/web-billing/multi-currency-support",
      from: "/web/revenuecat-billing/multi-currency-support",
    },
    {
      to: "/web/web-billing/payment-methods",
      from: "/web/revenuecat-billing/payment-methods",
    },
    {
      to: "/web/web-billing/product-setup",
      from: "/web/revenuecat-billing/product-setup",
    },
    {
      to: "/web/web-billing/redemption-links",
      from: "/web/revenuecat-billing/redemption-links",
    },
    {
      to: "/web/web-billing/refunding-payments",
      from: "/web/revenuecat-billing/refunding-payments",
    },
    {
      to: "/web/web-billing/subscription-lifecycle",
      from: "/web/revenuecat-billing/subscription-lifecycle",
    },
    {
      to: "/web/web-billing/web-purchase-links",
      from: "/web/revenuecat-billing/web-paywall-links",
    },
    {
      to: "/web/integrations/stripe",
      from: "/web/stripe",
    },
    {
      to: "/web/web-billing/web-sdk",
      from: "/web/web-billing",
    },
    {
      to: "/web/web-billing/web-purchase-links",
      from: "/web/web-billing/web-paywall-links",
    },
  ],
};

// Add redirects with a .html appended to the "from" path for redirecting in S3/Cloudfront
redirects.redirects.push(
  ...redirects.redirects.map(({ from, to }) => ({ from: `${from}.html`, to })),
);

export default redirects;
