const offerings = await Purchases.getOfferings();
const current = offerings.current;
if (current) {
  const metadata = offerings.current || {};
  const showNewBenefits = metadata.show_new_benefits;
  const title = metadata.title_strings["en_US"];
  const cta = metadata.cta_strings["en_US"];
}
