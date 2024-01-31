-- Revenue past 28-days (USD)
select 
sum(price)
from transactions
where start_time > (CURRENT_DATE - INTERVAL '28 days')
and is_sandbox = false;