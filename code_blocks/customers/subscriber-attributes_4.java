Map<String, String> attributes = new HashMap<String, String>();
attributes.put("age", "24");
attributes.put("custom_group_id", "abc123");

Purchases.getSharedInstance().setAttributes(attributes);