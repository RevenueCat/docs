-- What is my split of Active Subs by auto renew status?
  
SELECT
  CASE 
    WHEN unsubscribe_detected_at IS NOT NULL THEN 'Set to cancel' 
    ELSE 'Set to renew' 
    END) as auto_renew_status,
  COUNT(*) as active_subscriptions
FROM
  [revenuecat_data_table]
  
WHERE date(effective_end_time) > [targeted_date]
  AND date(start_time) <= [targeted_date]
  AND is_trial_period = 'false'
  AND DATE_DIFF('s', start_time, end_time)::float > 0)
  AND ownership_type != 'FAMILY_SHARED'
  AND store != 'promotional'
  AND is_sandbox != 'true'
  GROUP BY 1
