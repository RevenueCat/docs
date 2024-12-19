import {expect, test, vi} from 'vitest';
import {
    getCustomerInfo,
    checkForSpecificEntitlement,
    checkForAnyEntitlement,
    getCurrentOffering,
    getCustomOffering,
    displayingPackages,
    gettingProduct,
    purchasingPackage,
    configuringSDK,
    configuringSDKWithAnonUser,
    getOfferingForEUR
} from './rc-billing-doc-snippets';
import type {Package, Product} from "@revenuecat/purchases-js";
import {Purchases} from "@revenuecat/purchases-js";

const REVENUECAT_BILLING_PUBLIC_API_KEY = 'rcb_sb_NLgftxAMfaRjBxlpJjSfQnGAQ';

test('Snippet "Configuring SDK" works', () => {
    const purchases = configuringSDK(REVENUECAT_BILLING_PUBLIC_API_KEY);
    expect(purchases).toBeDefined();
    purchases.close();
})

test('Snippet "Configuring SDK Anonymous" works', () => {
    const purchases = configuringSDKWithAnonUser(REVENUECAT_BILLING_PUBLIC_API_KEY);
    expect(purchases).toBeDefined();
    purchases.close();
})

test('Snippet "Get customer info" works', async () => {
    Purchases.configure(REVENUECAT_BILLING_PUBLIC_API_KEY, "customer_with_gold_entitlement");
    expect(await getCustomerInfo()).toBeDefined();
    Purchases.getSharedInstance().close();
});

test('Snippet "Check for specific entitlement" works for customer with entitlement', async () => {
    Purchases.configure(REVENUECAT_BILLING_PUBLIC_API_KEY, "customer_with_gold_entitlement");
    const callback = vi.fn();
    await checkForSpecificEntitlement(callback);
    expect(callback).toHaveBeenCalled();
    Purchases.getSharedInstance().close();
});

test('Snippet "Check for specific entitlement" works for customer without any entitlement', async () => {
    Purchases.configure(REVENUECAT_BILLING_PUBLIC_API_KEY, "customer_without_entitlement");
    const callback = vi.fn();
    await checkForSpecificEntitlement(callback);
    expect(callback).not.toHaveBeenCalled();
    Purchases.getSharedInstance().close();
});

test('Snippet "Check for specific entitlement" works for customer with different entitlement', async () => {
    Purchases.configure(REVENUECAT_BILLING_PUBLIC_API_KEY, "customer_with_silver_entitlement");
    const callback = vi.fn();
    await checkForSpecificEntitlement(callback);
    expect(callback).not.toHaveBeenCalled();
    Purchases.getSharedInstance().close();
});

test('Snippet "Check for any entitlement" works for both customers with entitlement', async () => {
    const callback = vi.fn();
    Purchases.configure(REVENUECAT_BILLING_PUBLIC_API_KEY, "customer_with_gold_entitlement");
    await checkForAnyEntitlement(callback);
    Purchases.getSharedInstance().close();
    Purchases.configure(REVENUECAT_BILLING_PUBLIC_API_KEY, "customer_with_silver_entitlement");
    await checkForAnyEntitlement(callback);
    Purchases.getSharedInstance().close();
    expect(callback).toHaveBeenCalledTimes(2);
});

test('Snippet "Check for any entitlement" works for customer without any entitlement', async () => {
    Purchases.configure(REVENUECAT_BILLING_PUBLIC_API_KEY, "customer_without_entitlement");
    const callback = vi.fn();
    await checkForAnyEntitlement(callback);
    expect(callback).not.toHaveBeenCalled();
    Purchases.getSharedInstance().close();
});

test('Snippet "Get current offering" works', async () => {
    Purchases.configure(REVENUECAT_BILLING_PUBLIC_API_KEY, "customer_without_entitlement");
    let pkgs: Package[] | undefined;
    const callback = vi.fn().mockImplementation((availablePackages: Package[]) => {
        pkgs = availablePackages;
    });
    await getCurrentOffering(callback);
    expect(callback).toHaveBeenCalled();
    expect(pkgs).toBeDefined();
    expect((pkgs ?? []).length).toBe(1);
    expect(pkgs !== undefined && pkgs[0]?.identifier).toBe("$rc_monthly");
    Purchases.getSharedInstance().close();
});

test('Snippet "Get current offering for EUR" works', async () => {
    Purchases.configure(REVENUECAT_BILLING_PUBLIC_API_KEY, "customer_without_entitlement");
    let pkgs: Package[] | undefined;
    const callback = vi.fn().mockImplementation((availablePackages: Package[]) => {
        pkgs = availablePackages;
    });
    await getOfferingForEUR(callback);
    expect(callback).toHaveBeenCalled();
    expect(pkgs).toBeDefined();
    expect((pkgs ?? []).length).toBe(1);
    expect(pkgs !== undefined && pkgs[0]?.identifier).toBe("$rc_monthly");
    expect(pkgs !== undefined && pkgs[0]?.rcBillingProduct.currentPrice.currency).toBe("EUR");
    Purchases.getSharedInstance().close();
});

test('Snippet "Get custom offering" works', async () => {
    Purchases.configure(REVENUECAT_BILLING_PUBLIC_API_KEY, "customer_without_entitlement");
    let pkgs: Package[] | null = null;
    const callback = vi.fn().mockImplementation((availablePackages: Package[]) => {
        pkgs = availablePackages;
    });
    await getCustomOffering(callback);
    expect(callback).toHaveBeenCalled();
    expect(pkgs).toBeTruthy();
    expect((pkgs ?? []).length).toBe(3);
    expect((pkgs ?? [] as Package[]).find(pkg => pkg.identifier == "experiment_group_package")).toBeDefined();
    Purchases.getSharedInstance().close();
});


test('Snippet "Displaying packages" works', async () => {
    Purchases.configure(REVENUECAT_BILLING_PUBLIC_API_KEY, "customer_without_entitlement");
    let allPackages: Package[] = [];
    let monthlyPackage: Package | undefined;
    let customPackage: Package | undefined;
    const callback = vi.fn().mockImplementation((props: {
        allPackages: Package[],
        monthlyPackage: Package | null,
        customPackage: Package | null
    }) => {
        allPackages = props.allPackages;
        monthlyPackage = props.monthlyPackage ?? undefined;
        customPackage = props.customPackage ?? undefined;
    });
    await displayingPackages(callback);
    expect(callback).toHaveBeenCalled();
    expect(allPackages).toBeTruthy();
    expect((allPackages ?? []).length).toBe(3);
    expect(monthlyPackage).not.toBe(null);
    monthlyPackage
    expect(monthlyPackage?.identifier).toBe("$rc_monthly");
    expect(customPackage).not.toBe(null);
    expect(customPackage?.identifier).toBe("<package_id>");
    Purchases.getSharedInstance().close();
});

test('Snippet "Getting product" works', async () => {
    Purchases.configure(REVENUECAT_BILLING_PUBLIC_API_KEY, "customer_without_entitlement");
    let product: Product | undefined;
    const callback = vi.fn().mockImplementation((theProduct: Product) => {
        product = theProduct;
    });
    await gettingProduct(callback);
    expect(callback).toHaveBeenCalled();
    expect(product).toBeDefined()
    expect(product?.currentPrice.amountMicros).toBe(10000000);
    expect(product?.currentPrice.currency).toBe("USD");
    Purchases.getSharedInstance().close();
});

test('Snippet "Purchasing package" works', async () => {
    Purchases.configure(REVENUECAT_BILLING_PUBLIC_API_KEY, "customer_without_entitlement");

    await purchasingPackage();
    Purchases.getSharedInstance().close();
});

