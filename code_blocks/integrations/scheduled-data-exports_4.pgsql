-- How many Active Subscriptions do I have with a given custom attribute value?
  
SELECT
  COUNT(*)
FROM
  [revenuecat_data_table] rc
  
WHERE date(effective_end_time) > [targeted_date]
  AND date(start_time) <= [targeted_date]
  AND is_trial_period = 'false'
  AND ownership_type != 'FAMILY_SHARED'
  AND store != 'promotional'
  AND is_sandbox != 'true'
  AND json_extract_path_text(custom_subscriber_attributes, '[custom_attribute_key].value') = [custom_attribute_value]
