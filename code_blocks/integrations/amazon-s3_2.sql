-- Active subscriptions
select count(1)
from transactions
where end_time > now()
and is_trial_period = false
and is_sandbox = false
and refunded_at IS NULL;

-- The RevenueCat charts exclude promotional transactions.
-- you can include the following filter to exclude promotional
-- transactions from your queries as well
product_identifier NOT ILIKE 'rc_promo%'