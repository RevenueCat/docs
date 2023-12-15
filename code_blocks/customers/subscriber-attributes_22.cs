var purchases = GetComponent<Purchases>();
var attributes = new Dictionary<string, string>
{
    { "age", "" }, 
    { "custom_group_id", "" }
};
purchases.SetAttributes(attributes);