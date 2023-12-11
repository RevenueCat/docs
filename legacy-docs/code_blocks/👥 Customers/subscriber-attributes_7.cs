var purchases = GetComponent<Purchases>();
var attributes = new Dictionary<string, string>
{
    { "age", "24" }, 
    { "custom_group_id", "abc123" }
};
purchases.SetAttributes(attributes);