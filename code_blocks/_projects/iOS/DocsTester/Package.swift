// swift-tools-version: 5.8

import PackageDescription

let package = Package(
    name: "DocsTester",
    platforms: [.macOS(.v12)],
    products: [
        .library(
            name: "DocsTester",
            targets: ["DocsTester"]),
    ],
    dependencies: [
        .package(url: "https://github.com/revenuecat/purchases-ios", .upToNextMajor(from: "4.0.0")),
        .package(url: "https://github.com/realm/SwiftLint", .upToNextMajor(from: "0.52.4")),
    ],
    targets: [
        .target(
            name: "DocsTester",
            dependencies: [
                .product(name: "RevenueCat", package: "purchases-ios"),
            ],
            swiftSettings: [
                .unsafeFlags(["-warnings-as-errors"])
            ],
            plugins: [.plugin(name: "SwiftLintPlugin", package: "SwiftLint")]
        )
    ]
)
