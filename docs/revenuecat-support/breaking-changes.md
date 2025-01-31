---
title: Breaking Changes Policy
sidebar_label: Breaking Changes
slug: breaking-changes
excerpt: Learn about breaking changes in RevenueCat
---

At RevenueCat, we strive to provide a stable and reliable platform for developers integrating in-app subscriptions. To ensure smooth integrations while maintaining the flexibility to improve our platform, we have clear guidelines on what constitutes a breaking change and what does not.

## Semantic Versioning (SemVer)

We follow [Semantic Versioning (SemVer)](https://semver.org/) for our SDKs to ensure predictable and transparent versioning. This means:

- Major versions (X.0.0) may introduce breaking changes.

- Minor versions (X.Y.0) introduce backwards-compatible new features.

- Patch versions (X.Y.Z) contain backwards-compatible bug fixes and improvements.

## What is a backwards compatible change?

The following types of changes are not considered breaking:

1. Additive API changes, such as:

  - Adding new optional fields to API responses.

  - Introducing new endpoints without modifying existing ones.

  - Expanding webhook event payloads with additional fields.

2. Introducing new SDK methods that do not affect existing ones.

3. Bug fixes and performance improvements that do not alter documented behaviors.

4. Changes to internal logic that do not affect the API contract or documented SDK behavior.

5. Deprecating features with proper notice while keeping existing functionality intact during a transition period.

6. Updating documentation to clarify existing behaviors without modifying the implementation.

## Deprecation and Migration Policy

When a breaking change is necessary, we follow these best practices:

- Deprecation Notices: We provide advance notice through our changelogs, documentation, and direct customer communications.

- Grace Periods: Wherever possible, we maintain backward compatibility and provide transition periods for developers to update their integrations.

- Versioning: Breaking changes may be introduced in new major versions of our SDKs or API versions, ensuring that existing implementations continue to function as expected.

- Migration Guides: We provide clear upgrade paths and documentation to help developers adapt to changes.

Our goal is to minimize disruptions while ensuring RevenueCat continues to evolve and improve. If you have any concerns about a potential breaking change, please reach out via our support channels or check our changelog for the latest updates.

For further clarification or to discuss how a change might impact your integration, feel free to contact us!

