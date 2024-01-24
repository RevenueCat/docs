-- What portion of my Active Trials are in a grace period?
  
SELECT
  CASE
    WHEN grace_period_end_time IS NOT NULL THEN 'in_grace_period'
    ELSE 'in_trial_period'
    END as period_type,
  COUNT(*) as active_trials
FROM
  [revenuecat_data_table]
WHERE date(effective_end_time) > [targeted_date]
  AND date(start_time) <= [targeted_date]
  AND is_trial_period = 'true'
  AND (effective_end_time IS NULL OR DATE_DIFF('s', start_time, effective_end_time)::float > 0)
  AND ownership_type != 'FAMILY_SHARED'
  AND store != 'promotional'
  AND is_sandbox != 'true'
GROUP BY period_type
