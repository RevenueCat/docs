-- Revenue generated on [targeted_date]
SELECT
  SUM(price_in_usd) as revenue
FROM
  [your_table_name]
WHERE date(start_time) = [targeted_date]
  AND is_trial_period = 'false'
  AND (effective_end_time IS NULL OR DATE_DIFF('s', start_time, effective_end_time)::float > 0)
  AND ownership_type != 'FAMILY_SHARED'
  AND store != 'promotional'
  AND is_sandbox <> 'true'

-- Transactions which are refunded can be identified through the refunded_at field.
-- Once refunded, price_in_usd will be set to $0, so revenue will always be net of refunds.