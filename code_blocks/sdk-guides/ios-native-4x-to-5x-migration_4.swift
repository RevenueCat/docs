let product = try await StoreKit.Product.products(for: ["my_product_id"]).first
let result = try await product?.purchase()

_ = try await Purchases.shared.recordPurchase(result)