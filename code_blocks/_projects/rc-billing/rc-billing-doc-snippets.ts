
import type {CustomerInfo, Package, Product } from "@revenuecat/purchases-js";
import { ErrorCode, Purchases, PurchasesError } from "@revenuecat/purchases-js";

const authentication = { getAppUserId : () => 'test' };

function configuringSDK(REVENUECAT_BILLING_PUBLIC_API_KEY: string) {
// MARK: Configuring SDK
const appUserId = authentication.getAppUserId(); // Replace with your own authentication system
const purchases = Purchases.configure(REVENUECAT_BILLING_PUBLIC_API_KEY, appUserId);
// END
return purchases;
}

async function getCustomerInfo() : Promise<CustomerInfo | null> {
let customerInfo : CustomerInfo|null = null;
// MARK: Getting customer information
try {
  customerInfo = await Purchases.getSharedInstance().getCustomerInfo();
  // access latest customerInfo
} catch (e) {
  // Handle errors fetching customer info
} 
// END
return customerInfo; 
}

async function checkForSpecificEntitlement(grantEntitlementAccess : () => void) {
const customerInfo = await Purchases.getSharedInstance().getCustomerInfo();
if(!customerInfo) return;
// MARK: Check for specific entitlement
if ("gold_entitlement" in customerInfo.entitlements.active) {
  // Grant user access to the entitlement "gold_entitlement"
  grantEntitlementAccess();
}
// END
}

async function checkForAnyEntitlement(grantEntitlementAccess : () => void) {
const customerInfo = await Purchases.getSharedInstance().getCustomerInfo();
if(!customerInfo) return;
// MARK: Check for any entitlement
if (Object.keys(customerInfo.entitlements.active).length > 0) {
  // User has access to some entitlement, grant entitlement access
  grantEntitlementAccess();
}
// END
}

async function getCurrentOffering(displayPackages :(pkg: Package[]) => void) {
// MARK: Get current offerings
try {
  const offerings = await Purchases.getSharedInstance().getOfferings();
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

async function getCustomOffering(displayPackages :(pkg: Package[]) => void) {
// MARK: Get custom offering
try {
  const offerings = await Purchases.getSharedInstance().getOfferings();
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
  callback : (props: {allPackages : Package[], monthlyPackage : Package|null, customPackage : Package|null}) => void
) {
const offerings = await Purchases.getSharedInstance().getOfferings();
// MARK: Displaying packages
const allPackages = offerings.all["experiment_group"].availablePackages;
// --
const monthlyPackage = offerings.all["experiment_group"].monthly;
// --
const customPackage = offerings.all["experiment_group"].packagesById["<package_id>"];
// END
callback({allPackages, monthlyPackage, customPackage});
}

async function gettingProduct(displayProduct : (product : Product) => void) {
// MARK: Getting product
// Accessing / displaying the monthly product
try {
  const offerings = await Purchases.getSharedInstance().getOfferings();
  if (offerings.current && offerings.current.monthly) {
    const product = offerings.current.monthly.rcBillingProduct;
    // Display the price and currency of the RC Billing Product
    displayProduct(product);
  }
} catch (e) {
  // Handle errors
}
// END
}

async function purchasingPackage() {
// This can't really be tested currently
const pkg = (await Purchases.getSharedInstance().getOfferings()).current?.availablePackages[0];
if (!pkg) return;

// MARK: Purchasing package
try {
  const { customerInfo } = await Purchases.getSharedInstance().purchase({
    rcPackage: pkg
  });
  if (Object.keys(customerInfo.entitlements.active).includes("pro")) {
    // Unlock that great "pro" content
  }
} catch (e) {
  if (e instanceof PurchasesError && e.errorCode == ErrorCode.UserCancelledError) {
    // User cancelled the purchase process, don't do anything
  } else {
    // Handle errors
  }
}
// END
}

export {
  configuringSDK,
  getCustomerInfo,
  checkForSpecificEntitlement,
  checkForAnyEntitlement,
  getCurrentOffering,
  getCustomOffering,
  displayingPackages,
  gettingProduct,
  purchasingPackage,
}
