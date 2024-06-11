-- How many trials ended and successfully converted each day

WITH trials AS
(SELECT
  subscriber_id,
  DATE(effective_end_time) AS end_time
  FROM [revenuecat_data_table] 
  WHERE is_trial_period
),

conversions AS
(SELECT
  subscriber_id,
  DATE(start_time) AS start_time
  FROM [revenuecat_data_table] 
  WHERE is_trial_conversion
)

SELECT
  DATE(t.end_time) AS date,
  COUNT(t.*) AS trials_ending,
  COUNT(c.*) AS conversions,
  (COUNT(c.*)::real / COUNT(t.*)::real) AS cvr
  FROM trials AS t
  LEFT JOIN conversions AS c ON c.subscriber_id=t.subscriber_id
  WHERE t.end_time < CURRENT_DATE
  GROUP BY date;