-- Active trials
select count(1)
from transactions
where end_time > now()
and is_trial_period = true
and is_sandbox = false
and refunded_at IS NULL;