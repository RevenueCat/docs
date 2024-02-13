const REVENUECAT_BILLING_SANDBOX_API_KEY = 'rcb_sb_NLgftxAMfaRjBxlpJjSfQnGAQ';
import type {CustomerInfo, Package, Product } from "@revenuecat/purchases-js";

// MARK: Configuring SDK
import { Purchases } from "@revenuecat/purchases-js";

const purchases = new Purchases(REVENUECAT_BILLING_SANDBOX_API_KEY);
// END

async function getCustomerInfo(appUserId) : Promise<CustomerInfo | null> {
let customerInfo : CustomerInfo|null = null;
// MARK: Getting customer information
try {
  customerInfo = await purchases.getCustomerInfo(appUserId);
  // access latest customerInfo
} catch (e) {
  // Error fetching customer info
  throw e;
} 
// END
return customerInfo; 
}

async function checkForSpecificEntitlement(appUserId : string, grantEntitlementAccess : () => void) {
const customerInfo = await getCustomerInfo(appUserId);
if(!customerInfo) return;
// MARK: Check for specific entitlement
if ("entitlement_identifier" in customerInfo.entitlements.active) {
  // Grant user access to the entitlement "entitlement_identifier"
  grantEntitlementAccess();
}
// END
}

async function checkForAnyEntitlement(appUserId : string, grantEntitlementAccess : () => void) {
const customerInfo = await getCustomerInfo(appUserId);
if(!customerInfo) return;
// MARK: Check for any entitlement
if (Object.keys(customerInfo.entitlements.active).length > 0) {
  // User has access to some entitlement
  grantEntitlementAccess();
}
// END
}

async function getCurentOffering(appUserId: string, displayPackages :(pkg: Package[]) => void) {
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

async function getCustomOffering(appUserId: string, displayPackages :(pkg: Package[]) => void) {
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

async function gettingProduct(appUserId : string, displayProduct : (product : Product) => void) {
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

async function purchasingPackage(appUserId : string, pkg : Package) {
// This can't really be tested currently
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
  getCurentOffering,
  getCustomOffering,
  displayingPackages,
  gettingProduct,
  purchasingPackage,
}


