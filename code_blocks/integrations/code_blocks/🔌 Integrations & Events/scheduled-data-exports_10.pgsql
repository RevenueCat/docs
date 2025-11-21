-- Active Subscriptions Movement within a specified date range

WITH

filtered_subscription_transactions AS (
    SELECT
        *
    FROM [revenuecat_data_table]
    /* Filter down to the date range that you want to measure MRR Movement for */
    WHERE (start_time BETWEEN [targeted_start_date] and [targeted_end_date] 
        OR effective_end_time BETWEEN [targeted_start_date] and [targeted_end_date])
        /* Exclude trials, which do not contribute to MRR */
        AND is_trial_period = 'false'
        AND end_time > start_time
        AND ownership_type != 'FAMILY_SHARED'
        AND store != 'promotional'
        AND is_sandbox != 'true'),

actives AS (
  SELECT
    DATE(start_time) AS date,
    COUNT(
        CASE 
            WHEN renewal_number = 1
                OR is_trial_conversion = 'true'
            THEN 1 
            ELSE NULL 
        END) AS num_new_actives,
    COUNT(
        CASE 
            WHEN renewal_number > 1
                AND is_trial_conversion = 'false'  
            THEN 1 
            ELSE NULL 
        END
    ) AS num_renewals
    
  FROM filtered_subscription_transactions
  GROUP BY 1),
  
expirations AS (
  SELECT
    DATE(effective_end_time) AS date,
    COUNT(*) AS num_expirations
  FROM filtered_subscription_transactions
  GROUP BY 1)

SELECT
    COALESCE(a.date, e.date) AS date,
    COALESCE(a.num_new_actives, 0) AS new_actives,
    COALESCE(a.num_renewals, 0) AS num_renewals,
    COALESCE(e.num_expirations, 0) AS num_expirations,
    num_expirations - num_renewals AS churned_actives
FROM actives a
FULL JOIN expirations e ON a.date = e.date
WHERE a.date BETWEEN [targeted_start_date] AND [targeted_end_date]
    AND e.date BETWEEN [targeted_start_date] AND [targeted_end_date]
