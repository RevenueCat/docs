-- Active trials
SELECT
  COUNT(*)
FROM
  transactions
WHERE
  end_time > NOW()
  AND is_trial_period = TRUE
  AND renewal_number = 1
  AND is_sandbox = FALSE
  AND refunded_at IS NULL;