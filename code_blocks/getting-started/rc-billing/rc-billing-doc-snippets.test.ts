import { expect, test, vi } from 'vitest';
import { getCustomerInfo, checkForSpecificEntitlement, checkForAnyEntitlement, getCurrentOffering, getCustomOffering, displayingPackages, gettingProduct, purchasingPackage, configuringSDK} from './rc-billing-doc-snippets';
import type { Package, Product } from "@revenuecat/purchases-js";
import { Purchases } from "@revenuecat/purchases-js";


const REVENUECAT_BILLING_PUBLIC_API_KEY = 'rcb_sb_NLgftxAMfaRjBxlpJjSfQnGAQ';
const purchases = new Purchases(REVENUECAT_BILLING_PUBLIC_API_KEY);
 
test('Snippet "Configuring SDK" works', () => {
  expect(configuringSDK()).toBeDefined();
})

test('Snippet "Get customer info" works', async () => {
  expect(await getCustomerInfo(purchases, "customer_with_gold_entitlement")).toBeDefined();
});

test('Snippet "Check for specific entitlement" works for customer with entitlement', async () => {
  const callback = vi.fn();
  await checkForSpecificEntitlement(purchases, "customer_with_gold_entitlement", callback);
  expect(callback).toHaveBeenCalled();
});

test('Snippet "Check for specific entitlement" works for customer without any entitlement', async () => {
  const callback = vi.fn();
  await checkForSpecificEntitlement(purchases, "customer_without_entitlement", callback);
  expect(callback).not.toHaveBeenCalled();
});

test('Snippet "Check for specific entitlement" works for customer with different entitlement', async () => {
  const callback = vi.fn();
  await checkForSpecificEntitlement(purchases, "customer_with_silver_entitlement", callback);
  expect(callback).not.toHaveBeenCalled();
});

test('Snippet "Check for any entitlement" works for both customers with entitlement', async () => {
  const callback = vi.fn();
  await checkForAnyEntitlement(purchases, "customer_with_gold_entitlement", callback);
  await checkForAnyEntitlement(purchases, "customer_with_silver_entitlement", callback);
  expect(callback).toHaveBeenCalledTimes(2);
});

test('Snippet "Check for any entitlement" works for customer without any entitlement', async () => {
  const callback = vi.fn();
  await checkForAnyEntitlement(purchases, "customer_without_entitlement", callback);
  expect(callback).not.toHaveBeenCalled();
});


test('Snippet "Get current offering" works', async () => {
  let pkgs : Package[]|null = null;
  const callback = vi.fn().mockImplementation((availablePackages : Package[]) => {
    pkgs = availablePackages;
  });
  await getCurrentOffering(purchases, "customer_without_entitlement", callback);
  expect(callback).toHaveBeenCalled();
  expect(pkgs).toBeTruthy();
  expect((pkgs ?? []).length).toBe(1);
  expect(pkgs !== null && (pkgs as Package[])[0].identifier).toBe("$rc_monthly");
});

test('Snippet "Get custom offering" works', async () => {
  let pkgs : Package[]|null = null;
  const callback = vi.fn().mockImplementation((availablePackages : Package[]) => {
    pkgs = availablePackages;
  });
  await getCustomOffering(purchases, "customer_without_entitlement", callback);
  expect(callback).toHaveBeenCalled();
  expect(pkgs).toBeTruthy();
  expect((pkgs ?? []).length).toBe(3);
  expect((pkgs ?? [] as Package[]).find(pkg => pkg.identifier == "experiment_group_package")).toBeDefined();
});


test('Snippet "Displaying packages" works', async () => {
  let allPackages : Package[] = [], monthlyPackage : Package|null = null, customPackage : Package|null = null;
  const callback = vi.fn().mockImplementation((props : {allPackages : Package[], monthlyPackage : Package|null, customPackage : Package|null}) => {
    allPackages = props.allPackages;
    monthlyPackage = props.monthlyPackage;
    customPackage = props.customPackage;
  });
  await displayingPackages(purchases, "customer_without_entitlement", callback);
  expect(callback).toHaveBeenCalled();
  expect(allPackages).toBeTruthy();
  expect((allPackages ?? []).length).toBe(3);
  expect(monthlyPackage).not.toBe(null);
  expect((monthlyPackage as Package|null)?.identifier).toBe("$rc_monthly");
  expect(customPackage).not.toBe(null);
  expect((customPackage as Package|null)?.identifier).toBe("<package_id>");
});

test('Snippet "Purchasing package" works', async () => {
  const purchasePackage = vi.spyOn(purchases, 'purchasePackage');
  
  await purchasingPackage(purchases, "customer_without_entitlement");
  expect(purchasePackage).toHaveBeenCalled();
});

