var selectedOffering = ""

// Search through all offerings to see if any have a matching coupon code
// Make sure to gate this with logic--there's no need to check through all offerings
// if there's no coupon code present for a user!

for (offering in offerings.all) {
    if (offering.value.getMetadataString("coupon", "") == couponCode) {
       offeringSelected = offering.key
       break
    }
}

// Fall back on the current offerings if no match was found
if (offeringSelected == "") {
    adapter.offering = offerings.current
} else {
    adapter.offering = offerings.getOffering(offeringSelected)
}
