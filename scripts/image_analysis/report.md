# Image Usage Analysis Report

## Summary

- **Total images in static directory (excluding icons):** 782
- **Local images referenced in docs:** 666
- **External images referenced in docs:** 12
- **Unused images:** 116 (14.8%)
- **Missing local images:** 0

## Analysis Method

This analysis was performed using a corrected script that:

- Properly handles markdown image syntax with alt text
- Scans all .md and .mdx files in the /docs directory
- Excludes images in the /static/icons directory
- Separates external images (http/https URLs) from local images
- Normalizes various image path formats

## Unused Images

These images exist in the static directory but are not referenced in any documentation:

- images/0900f59-pause_6cc43e23e96b8ccfa78c2e7a5f99dd75.png
- images/0925a4c-Receipt_Forwarding_Service_f3afcc5ec2e3de188219d44937583b73.png
- images/0b9a2f4-app.revenuecat.com_projects_3310b6dd_entitlements_2_7429e4d6cdaab6f86949cfcf0f3a2d5e.png
- images/14fd367-Screen_Shot_2018-12-13_at_4.21.05_PM_6420bfb083c906167c4884f88a6e6ad3.png
- images/215395e-Screenshot_2023-04-07_at_2.30.53_PM_4d5fdac193f3764e28c217a12a0ac9e5.png
- images/230537e-asa_chart_0d19b792771a898372ab35ddc90231bc.png
- images/24b0991-app.revenuecat.com_projects_85ff18c7_integrations_adjust_b786d725d8f712350e3f4fab92247ce8.png
- images/34bba5f-ab-test_c63a7d0c44df5d56c190763251259857.png
- images/55e2667-1628274-Entitlements_2.0_3dd9cdc954236c9ecc6981598b33cafc.png
- images/5fe8d9a-Create_a_New_Rule_cf16432e3072b0d8c4a799eaef270c86.png
- images/62d3199-Screenshot_2024-01-29_at_10.46.43_AM_dadef546e52d2bb05ef71fccb8cea79c.png
- images/79b7b8e5-update-payment-method-button-cb06-438d-91e9-9257c6921211.png
- images/7fd1cb2-stripe_rfa_1_a13a4a428ca2c75d694a1e0f37ba6f68.png
- images/842f5ae-image.png
- images/970b88e-Screen_Shot_2023-04-07_at_11.46.01_AM_1_b3a563878ad2f008d944bc5b607d0824.png
- images/974687c-AppsFlyer_Integration_d261e99446139d6cc9540f25f6d5ff30.png
- images/Powering-existing-subscriptions-with-RevenueCat-1_194c1e8056740df4787c4593253f8dc8.png
- images/Powering-existing-subscriptions-with-RevenueCat_c8255486885823df96391210b781734b.png
- images/a49a859b-invoice-details-expanded-65e93ca4f48e.png
- images/a9eeda94-video-placeholder-dark.png

... and 96 more (see unused_images.txt for complete list)

## External Images

These external images are referenced in documentation (hosted externally):

- https://files.readme.io/229d551-experiments-learn.webp
- https://files.readme.io/93dfcae-cross-platform-data.webp
- https://img.shields.io/github/release/RevenueCat/purchases-android.svg
- https://img.shields.io/github/release/RevenueCat/purchases-capacitor.svg
- https://img.shields.io/github/release/RevenueCat/purchases-flutter.svg
- https://img.shields.io/github/release/RevenueCat/purchases-ios.svg
- https://img.shields.io/github/release/RevenueCat/purchases-js.svg
- https://img.shields.io/github/release/RevenueCat/purchases-kmp.svg
- https://img.shields.io/github/release/RevenueCat/purchases-roku.svg
- https://img.shields.io/github/release/RevenueCat/purchases-unity.svg

... and 2 more (see external_images.txt for complete list)
