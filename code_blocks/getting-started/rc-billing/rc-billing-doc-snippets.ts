const REVENUECAT_BILLING_PUBLIC_API_KEY = '';
import type {CustomerInfo, Package, Product } from "@revenuecat/purchases-js";

// MARK: Configuring SDK
import { Purchases } from "@revenuecat/purchases-js";

const purchases = new Purchases(REVENUECAT_BILLING_PUBLIC_API_KEY);
// END

async function getCustomerInfo(purchases : Purchases, appUserId : string) : Promise<CustomerInfo | null> {
let customerInfo : CustomerInfo|null = null;
// MARK: Getting customer information
try {
  customerInfo = await purchases.getCustomerInfo(appUserId);
  // access latest customerInfo
} catch (e) {
  // Handle errors fetching customer info
} 
// END
return customerInfo; 
}

async function checkForSpecificEntitlement(purchases : Purchases, appUserId : string, grantEntitlementAccess : () => void) {
const customerInfo = await purchases.getCustomerInfo(appUserId);
if(!customerInfo) return;
// MARK: Check for specific entitlement
if ("gold_entitlement" in customerInfo.entitlements.active) {
  // Grant user access to the entitlement "entitlement_identifier"
  grantEntitlementAccess();
}
// END
}

async function checkForAnyEntitlement(purchases : Purchases, appUserId : string, grantEntitlementAccess : () => void) {
const customerInfo = await purchases.getCustomerInfo(appUserId);
if(!customerInfo) return;
// MARK: Check for any entitlement
if (Object.keys(customerInfo.entitlements.active).length > 0) {
  // User has access to some entitlement
  grantEntitlementAccess();
}
// END
}

async function getCurrentOffering(purchases : Purchases, appUserId: string, displayPackages :(pkg: Package[]) => void) {
// MARK: Get current offerings
try {
  const offerings = await purchases.getOfferings(appUserId);
  if (
    offerings.current !== null &&
    offerings.current.availablePackages.length !== 0
  ) {
    // Display packages for sale
    displayPackages(offerings.current.availablePackages);
  }
} catch (e) {
  // Handle errors
}
// END
}

async function getCustomOffering(purchases : Purchases, appUserId: string, displayPackages :(pkg: Package[]) => void) {
// MARK: Get custom offering
try {
  const offerings = await purchases.getOfferings(appUserId);
  if (offerings.all["experiment_group"].availablePackages.length !== 0) {
    // Display packages for sale
    displayPackages(offerings.all["experiment_group"].availablePackages);
  }
} catch (e) {
  // Handle errors
}
// END
}

async function displayingPackages(
  purchases : Purchases, 
  appUserId : string, 
  callback : (props: {allPackages : Package[], monthlyPackage : Package|null, customPackage : Package|null}) => void
) {
const offerings = await purchases.getOfferings(appUserId);
// MARK: Displaying packages
const allPackages = offerings.all["experiment_group"].availablePackages;
// --
const monthlyPackage = offerings.all["experiment_group"].monthlyPackage;
// --
const customPackage = offerings.all["experiment_group"].packagesById["<package_id>"];
// END
callback({allPackages, monthlyPackage, customPackage});
}

async function gettingProduct(purchases : Purchases, appUserId : string, displayProduct : (product : Product) => void) {
// MARK: Getting product
// Accessing / displaying the monthly product
try {
  const offerings = await purchases.getOfferings(appUserId);
  if (offerings.current && offerings.current.monthlyPackage) {
    const product = offerings.current.monthlyPackage.rcBillingProduct;
    // Display the price and currency of the RC Billing Product
    displayProduct(product);
  }
} catch (e) {
  // Handle errors
}
// END
}

async function purchasingPackage(purchases : Purchases, appUserId : string) {
// This can't really be tested currently
const pkg = (await purchases.getOfferings(appUserId)).current?.availablePackages[0];
if (!pkg) return;

// MARK: Purchasing package
try {
  const { customerInfo } = await purchases.purchasePackage(appUserId, pkg);
  if (Object.keys(customerInfo.entitlements.active).includes("pro")) {
    // Unlock that great "pro" content
  }
} catch (e) {
  // Handle errors
}
// END
}

export {
  getCustomerInfo,
  checkForSpecificEntitlement,
  checkForAnyEntitlement,
  getCurrentOffering,
  getCustomOffering,
  displayingPackages,
  gettingProduct,
  purchasingPackage,
}
