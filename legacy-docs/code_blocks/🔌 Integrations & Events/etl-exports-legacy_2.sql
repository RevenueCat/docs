-- Active subscriptions
SELECT
  COUNT(*)
FROM
  transactions
WHERE
  end_time > NOW()
  AND is_trial_period = FALSE
  AND is_in_intro_offer_period = FALSE
  AND is_sandbox = FALSE
  AND refunded_at IS NULL
  AND price != 0;

-- The RevenueCat charts exclude promotional transactions.
-- you can include the following filter to exclude promotional
-- transactions from your queries as well
product_identifier NOT ILIKE 'rc_promo%'