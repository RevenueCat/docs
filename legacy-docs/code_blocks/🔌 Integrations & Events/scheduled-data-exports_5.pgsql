-- What is my weekly revenue, where Monday is set as the start day of the week?

SELECT
  date_trunc('week', start_time) as week,
  SUM(price_in_usd) as total_revenue
FROM
  [revenuecat_data_table]
WHERE date(start_time) BETWEEN [targeted_period_start_date] AND [targeted_period_end_date]
  AND is_trial_period = 'false'
  AND ownership_type != 'FAMILY_SHARED'
  AND store != 'promotional'
  AND is_sandbox != 'true'
GROUP BY week
