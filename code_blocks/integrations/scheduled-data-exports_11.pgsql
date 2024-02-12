-- MRR Movement for a specified date range

WITH

filtered_subscriptipon_transactions AS (
    SELECT
        *,
        CASE WHEN effective_end_time IS NOT NULL THEN
            CASE 
                /* Handle cases where product_duration cannot be used for the transaction first */
                WHEN (is_in_intro_offer_period = 'true' OR product_duration IS NULL) THEN 
                CASE
                    WHEN DATE_DIFF(day, start_time, end_time) BETWEEN 0 AND 1 
                        THEN (30 * price)::DECIMAL(18,2)
                    WHEN DATE_DIFF(day, start_time, end_time) = 3 
                        THEN (10 * price)::DECIMAL(18,2)
                    WHEN DATE_DIFF(day, start_time, end_time) BETWEEN 6 AND 8 
                        THEN (4 * price)::DECIMAL(18,2)
                    WHEN DATE_DIFF(day, start_time, end_time) BETWEEN 12 AND 16 
                        THEN (2 * price)::DECIMAL(18,2)
                    WHEN DATE_DIFF(day, start_time, end_time) BETWEEN 27 AND 33 
                        THEN (1 * price)::DECIMAL(18,2)
                    WHEN DATE_DIFF(day, start_time, end_time) BETWEEN 58 AND 62 
                        THEN (0.5 * price)::DECIMAL(18,2)
                    WHEN DATE_DIFF(day, start_time, end_time) BETWEEN 88 AND 95 
                        THEN (0.333333 * price)::DECIMAL(18,2)
                    WHEN DATE_DIFF(day, start_time, end_time) BETWEEN 179 AND 185 
                        THEN (0.1666666 * price)::DECIMAL(18,2)
                    WHEN DATE_DIFF(day, start_time, end_time) BETWEEN 363 AND 375 
                        THEN (0.08333 * price)::DECIMAL(18,2)
                    ELSE ((28 / (DATE_DIFF('s', start_time, end_time)::float / (24 * 3600))) * price)::DECIMAL(18,2)
                END
                /* Then handle cases where product_duration can be used */
                WHEN product_duration = 'P1D' THEN (30 * price)::DECIMAL(18,2)
                WHEN product_duration = 'P3D' THEN (10 * price)::DECIMAL(18,2)
                WHEN product_duration = 'P7D' THEN (4 * price)::DECIMAL(18,2)
                WHEN product_duration = 'P1W' THEN (4 * price)::DECIMAL(18,2)
                WHEN product_duration = 'P2W' THEN (2 * price)::DECIMAL(18,2)
                WHEN product_duration = 'P4W' THEN (1 * price)::DECIMAL(18,2)
                WHEN product_duration = 'P1M' THEN (1 * price)::DECIMAL(18,2)
                WHEN product_duration = 'P2M' THEN (0.5 * price)::DECIMAL(18,2)
                WHEN product_duration = 'P3M' THEN (0.333333 * price)::DECIMAL(18,2)
                WHEN product_duration = 'P6M' THEN (0.1666666 * price)::DECIMAL(18,2)
                WHEN product_duration = 'P12M' THEN (0.08333 * price)::DECIMAL(18,2)
                WHEN product_duration = 'P1Y' THEN (0.08333 * price)::DECIMAL(18,2)
                ELSE ((28 / (DATE_DIFF('s', start_time, end_time)::float / (24 * 3600))) * price)::DECIMAL(18,2)
            END
        END AS transaction_mrr
    FROM [revenuecat_data_table]
    /* Filter down to the date range that you want to measure MRR Movement for */
    WHERE (start_time BETWEEN [targeted_start_date] and [targeted_end_date] 
        OR effective_end_time BETWEEN [targeted_start_date] and [targeted_end_date])
        /* Exclude trials, which do not contribute to MRR */
        AND is_trial_period = 'false'
        AND DATE_DIFF('s', start_time, end_time)::float > 0
        AND ownership_type != 'FAMILY_SHARED'
        AND store != 'promotional'
        AND is_sandbox != 'true'),

actives AS (
  SELECT
    DATE(start_time) AS date,
    SUM(
        CASE
            WHEN renewal_number = 1
                OR is_trial_conversion = 'true' 
            THEN transaction_mrr
            ELSE null
        END
    ) AS new_mrr,
    
    SUM(
        CASE
            WHEN renewal_number > 1 
                AND is_trial_conversion = 'false' 
            THEN transaction_mrr
            ELSE null
        END
    ) AS renewal_mrr
    
  FROM filtered_subscriptipon_transactions
  GROUP BY 1),
  
expirations AS (
  SELECT
    DATE(effective_end_time) AS date,
    SUM(transaction_mrr) AS expired_mrr
  FROM filtered_subscriptipon_transactions
  GROUP BY 1)

SELECT
    COALESCE(a.date, e.date) AS date,
    COALESCE(a.new_mrr, 0) AS new_mrr,
    COALESCE(a.renewal_mrr, 0) as renewal_mrr,
    COALESCE(e.expired_mrr, 0) as expired_mrr,
    expired_mrr - renewal_mrr as churned_mrr
FROM actives a
FULL JOIN expirations e ON a.date = e.date
WHERE a.date BETWEEN [targeted_start_date] AND [targeted_end_date]
    AND e.date BETWEEN [targeted_start_date] AND [targeted_end_date]
