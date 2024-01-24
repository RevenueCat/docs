-- Active Trials as of your [targeted_date]

SELECT
  COUNT(*)
FROM
  [revenuecat_data_table]
WHERE date(effective_end_time) > [targeted_date]
  AND date(start_time) <= [targeted_date]
  AND is_trial_period = 'true'
  AND (effective_end_time IS NULL OR DATE_DIFF('s', start_time, effective_end_time)::float > 0)
  AND ownership_type != 'FAMILY_SHARED'
  AND store != 'promotional'
  AND is_sandbox != 'true'

-- The RevenueCat Active Trials chart excludes
-- promotional transactions and transactions resulting from family sharing
-- since they do not reflect auto-renewing future payments.