-- Active Subscriptions as of a specified date

SELECT
  COUNT(*)
FROM
  [revenuecat_data_table]
WHERE date(effective_end_time) > [targeted_date]
  AND date(start_time) <= [targeted_date]
  AND is_trial_period = 'false'
  AND ownership_type != 'FAMILY_SHARED'
  AND store != 'promotional'
  AND is_sandbox != 'true'

-- The RevenueCat Active Subscriptions chart excludes trials,
-- promotional transactions, and transactions resulting from family sharing
-- since they do not reflect auto-renewing future payments.
