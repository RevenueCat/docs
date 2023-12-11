-- Revenue past 28 days (USD)
SELECT
  SUM(price_in_usd)
FROM
  transactions
WHERE
  start_time > (CURRENT_DATE - INTERVAL '28 days')
  AND is_sandbox = false;