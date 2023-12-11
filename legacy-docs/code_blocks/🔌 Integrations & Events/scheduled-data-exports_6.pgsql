-- What is my Realized LTV of each monthly subscription cohort, segmented by whether they were offered a trial?
  
WITH 
(SELECT
  MIN(start_time) as subscription_start_time,
  original_store_transaction_id,
  MAX(is_trial_period) as had_a_trial,
  SUM(price_in_usd) as realized_ltv
FROM
  [revenuecat_data_table]
WHERE date(start_time) > [targeted_period_start_date]
  AND ownership_type != 'FAMILY_SHARED'
  AND store != 'promotional'
  AND is_sandbox != 'true'
  GROUP BY original_store_transaction_id) as subscriptions
  
SELECT
  to_char(first_start_time, 'YYYY-MM') as subscription_start_month,
  had_a_trial,
  COUNT() as subscriptions,
  SUM(realized_ltv) as realized_ltv,
  SUM(realized_ltv) / COUNT() as realized_ltv_per_subscription
FROM
  subscriptions