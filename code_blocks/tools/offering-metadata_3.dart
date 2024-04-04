final offerings = await Purchases.getOfferings();
final current = offerings.current;
if (current != null) {
  final showNewBenefits = current.metadata["show_new_benefits"];
  final title = (current.metadata["title_strings"] as Map<String, Object>?)?["en_US"];
  final cta = (current.metadata["cta_strings"] as Map<String, Object>?)?["en_US"];
}