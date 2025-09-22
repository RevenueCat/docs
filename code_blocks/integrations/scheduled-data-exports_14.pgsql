-- Subscription Retention per product

WITH filtered_transactions AS (
    SELECT
        *
    FROM [revenuecat_data_table] rc
    WHERE end_time IS NOT NULL /* only include subscriptions */
        AND NOT (billing_issues_detected_at IS NOT NULL
            AND (store = 'play_store' OR store = 'stripe'))
        AND is_sandbox <> 'true'
        AND is_trial_period = 'false'
        AND is_in_intro_offer_period = 'false' /* exclude introductory offers */
        AND ownership_type = 'PURCHASED'
),
  
subs AS (
    SELECT
        ft.rc_original_app_user_id,
        product_identifier,
        product_duration,
        DATE(MIN(ft.start_time)) AS first_start_time, /* first start time is used to define each cohort */
        MAX(DATE_DIFF('day', start_time, end_time)) as max_transaction_duration
    FROM filtered_transactions ft
    GROUP BY 1, 2, 3
),

/* some products don't have a set duration, so this CTE will calculate the duration on a per subscription basis */
calculated_product_duration AS (
    SELECT
        rc_original_app_user_id,
        product_identifier,
        CASE
            WHEN product_duration IS NOT NULL THEN 
            CASE
                WHEN product_duration = 'P7D' THEN 'P1W'
                WHEN product_duration = 'P30D' THEN 'P1M'
                WHEN product_duration = 'P4W' THEN 'P1M'
                WHEN product_duration = 'P12M' THEN 'P1Y'
                WHEN product_duration = 'P200Y' THEN 'lifetime'
                WHEN product_duration = 'P999Y' THEN 'lifetime'
            ELSE product_duration
            END
        ELSE 
            CASE
                WHEN max_transaction_duration BETWEEN 0 AND 1 THEN 'P1D'
                WHEN max_transaction_duration = 3 THEN 'P3D'
                WHEN max_transaction_duration BETWEEN 6 AND 8 THEN 'P1W'
                WHEN max_transaction_duration BETWEEN 12 AND 16 THEN 'P2W'
                WHEN max_transaction_duration BETWEEN 27 AND 37 THEN 'P1M'
                WHEN max_transaction_duration BETWEEN 58 AND 62 THEN 'P2M'
                WHEN max_transaction_duration BETWEEN 88 AND 95 THEN 'P3M'
                WHEN max_transaction_duration BETWEEN 179 AND 185 THEN 'P6M'
                WHEN max_transaction_duration BETWEEN 363 AND 375 THEN 'P1Y'
            ELSE NULL
            END
        END AS calculated_product_duration
    FROM subs s
    GROUP BY 1, 2, 3
),
  
retention AS (
    SELECT
        subs.first_start_time,
        subs.product_identifier,
        cpd.calculated_product_duration,
        /* Each period number represents the number of billing cycles the subscriber was active for */
        CASE
            WHEN calculated_product_duration = 'P1D' THEN DATE_DIFF('day', subs.first_start_time, start_time)
            WHEN calculated_product_duration = 'P1W' THEN DATE_DIFF('week', subs.first_start_time, start_time)
            WHEN calculated_product_duration = 'P1M' THEN CAST(ROUND(DATE_DIFF('day', subs.first_start_time, start_time) / CAST(30 AS NUMERIC)) AS INTEGER)
            WHEN calculated_product_duration = 'P2M' THEN CAST(ROUND(DATE_DIFF('day', subs.first_start_time, start_time) / CAST(60 AS NUMERIC)) AS INTEGER)
            WHEN calculated_product_duration = 'P3M' THEN CAST(ROUND(DATE_DIFF('day', subs.first_start_time, start_time) / CAST(90 AS NUMERIC)) AS INTEGER)
            WHEN calculated_product_duration = 'P6M' THEN CAST(ROUND(DATE_DIFF('day', subs.first_start_time, start_time) / CAST(180 AS NUMERIC)) AS INTEGER)
            WHEN calculated_product_duration = 'P1Y' THEN CAST(ROUND(DATE_DIFF('month', subs.first_start_time, start_time) / CAST(12 AS NUMERIC)) AS INTEGER)
        END AS period_number,
        count(1) AS subscriptions
    FROM filtered_transactions ft
    INNER JOIN subs ON 
        subs.rc_original_app_user_id = ft.rc_original_app_user_id AND
        subs.product_identifier = ft.product_identifier
    INNER JOIN calculated_product_duration cpd ON 
        cpd.rc_original_app_user_id = ft.rc_original_app_user_id AND
        cpd.product_identifier = ft.product_identifier
    WHERE period_number IS NOT NULL
    GROUP BY 1, 2, 3, 4
),
  
pending_retention AS (
    SELECT
        subs.first_start_time,
        subs.product_identifier,
        cpd.calculated_product_duration,
        CASE
            WHEN calculated_product_duration = 'P1D' THEN DATE_DIFF('day', subs.first_start_time, start_time) + 1
            WHEN calculated_product_duration = 'P1W' THEN DATE_DIFF('week', subs.first_start_time, start_time) + 1
            WHEN calculated_product_duration = 'P1M' THEN CAST(ROUND(DATE_DIFF('day', subs.first_start_time, start_time) / CAST(30 AS NUMERIC)) AS INTEGER) + 1
            WHEN calculated_product_duration = 'P2M' THEN CAST(ROUND(DATE_DIFF('day', subs.first_start_time, start_time) / CAST(60 AS NUMERIC)) AS INTEGER) + 1
            WHEN calculated_product_duration = 'P3M' THEN CAST(ROUND(DATE_DIFF('day', subs.first_start_time, start_time) / CAST(90 AS NUMERIC)) AS INTEGER) + 1
            WHEN calculated_product_duration = 'P6M' THEN CAST(ROUND(DATE_DIFF('day', subs.first_start_time, start_time) / CAST(180 AS NUMERIC)) AS INTEGER) + 1
            WHEN calculated_product_duration = 'P1Y' THEN CAST(ROUND(DATE_DIFF('month', subs.first_start_time, start_time) / CAST(12 AS NUMERIC)) AS INTEGER) + 1
        END AS period_number,
        count(1) AS subscriptions
    FROM filtered_transactions ft
    INNER JOIN subs ON 
        subs.rc_original_app_user_id = ft.rc_original_app_user_id AND
        subs.product_identifier = ft.product_identifier
    INNER JOIN calculated_product_duration cpd ON 
        cpd.rc_original_app_user_id = ft.rc_original_app_user_id AND
        cpd.product_identifier = ft.product_identifier
    WHERE unsubscribe_detected_at IS NOT NULL /* count only subscriptions that are set to renew */
        AND
            ((calculated_product_duration = 'P1D' AND DATE_ADD(start_time, '1 day') > CURRENT_DATE)
            OR (calculated_product_duration = 'P1W' AND DATE_ADD(start_time, '1 week') > CURRENT_DATE)
            OR (calculated_product_duration = 'P1M' AND DATE_ADD(start_time, '1 month') > CURRENT_DATE)
            OR (calculated_product_duration = 'P2M' AND DATE_ADD(start_time, '2 months') > CURRENT_DATE)
            OR (calculated_product_duration = 'P3M' AND DATE_ADD(start_time, '3 months') > CURRENT_DATE)
            OR (calculated_product_duration = 'P6M' AND DATE_ADD(start_time, '6 months') > CURRENT_DATE)
            OR (calculated_product_duration = 'P1Y' AND DATE_ADD(start_time, '1 year') > CURRENT_DATE))
        AND period_number IS NOT NULL
    GROUP BY 1, 2, 3, 4
)

SELECT
    COALESCE(retention.first_start_time, pending_retention.first_start_time) AS first_start_date,
    COALESCE(retention.calculated_product_duration, pending_retention.calculated_product_duration) AS product_duration,
    COALESCE(retention.product_identifier, pending_retention.product_identifier) AS product_identifier,
    COALESCE(retention.period_number, pending_retention.period_number) AS period_number,
    CASE
        WHEN retention.period_number = 0 THEN 'Subscriptions'
        WHEN retention.calculated_product_duration = 'P1Y' THEN CONCAT('Year ', retention.period_number)
        WHEN retention.calculated_product_duration = 'P6M' THEN CONCAT('Month ', 6 * retention.period_number)
        WHEN retention.calculated_product_duration = 'P3M' THEN CONCAT('Month ', 3 * retention.period_number)
        WHEN retention.calculated_product_duration = 'P2M' THEN CONCAT('Month ', 2 * retention.period_number)
        WHEN retention.calculated_product_duration = 'P1M' THEN CONCAT('Month ', retention.period_number)
        WHEN retention.calculated_product_duration = 'P1W' THEN CONCAT('Week ', retention.period_number)
        WHEN retention.calculated_product_duration = 'P1D' THEN CONCAT('Day ', retention.period_number)
    ELSE CONCAT('Period ', retention.period_number)
    END AS period_name,
    COALESCE(retention.subscriptions, 0) + COALESCE(pending_retention.subscriptions, 0) AS subscriptions
FROM retention
FULL OUTER JOIN pending_retention ON
    pending_retention.first_start_time = retention.first_start_time AND
    pending_retention.calculated_product_duration = retention.calculated_product_duration AND
    pending_retention.product_identifier = retention.product_identifier AND
    pending_retention.period_number = retention.period_number
WHERE first_start_date >= /* desired date range */
ORDER BY product_identifier, first_start_date, period_number