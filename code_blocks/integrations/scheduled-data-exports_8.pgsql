-- What is my Realized LTV per Paying Customer cohorted by First Purchase Date?
  
WITH filtered_transactions AS
  (SELECT *
  FROM [revenuecat_data_table]
  WHERE is_trial_period = 'false'
    AND ownership_type != 'FAMILY_SHARED'
    AND store != 'promotional'
    AND is_sandbox != 'true'
    AND refunded_at IS NULL
    AND price > 0),

first_purchase_dates AS
  (SELECT
    rc_original_app_user_id,
    MIN(start_time) as first_purchase_date
  FROM filtered_transactions
  GROUP BY 1)

SELECT

  DATE(fpd.first_purchase_date) AS first_purchase_date,
  COUNT(DISTINCT rc_original_app_user_id) AS paying_customers,
  SUM(CASE WHEN DATEADD(day, 7, first_purchase_date) > start_time 
    THEN price_in_usd ELSE 0 END)::DECIMAL(18,2) AS total_ltv_7_days,
  SUM(CASE WHEN DATEADD(day, 30, first_purchase_date) > start_time 
    THEN price_in_usd ELSE 0 END)::DECIMAL(18,2) AS total_ltv_30_days,
  SUM(CASE WHEN DATEADD(month, 6, first_purchase_date) > start_time 
    THEN price_in_usd ELSE 0 END)::DECIMAL(18,2) AS total_ltv_6_months,
  SUM(CASE WHEN DATEADD(month, 12, first_purchase_date) > start_time 
    THEN price_in_usd ELSE 0 END)::DECIMAL(18,2) AS total_ltv_12_months,
  SUM(CASE WHEN DATEADD(month, 24, first_purchase_date) > start_time 
    THEN price_in_usd ELSE 0 END)::DECIMAL(18,2) AS total_ltv_24_months,
  SUM(price_in_usd)::DECIMAL(18,2) AS total_ltv_unbounded,

  (SUM(CASE WHEN DATEADD(day, 7, first_purchase_date) > start_time 
    THEN price_in_usd ELSE 0 END)/COUNT(DISTINCT rc_original_app_user_id))::DECIMAL(18,2) AS avg_ltv_7_days,
  (SUM(CASE WHEN DATEADD(day, 30, first_purchase_date) > start_time 
    THEN price_in_usd ELSE 0 END)/COUNT(DISTINCT rc_original_app_user_id))::DECIMAL(18,2) AS avg_ltv_30_days,
  (SUM(CASE WHEN DATEADD(month, 6, first_purchase_date) > start_time 
    THEN price_in_usd ELSE 0 END)/COUNT(DISTINCT rc_original_app_user_id))::DECIMAL(18,2) AS avg_ltv_6_months,
  (SUM(CASE WHEN DATEADD(month, 12, first_purchase_date) > start_time 
    THEN price_in_usd ELSE 0 END)/COUNT(DISTINCT rc_original_app_user_id))::DECIMAL(18,2) AS avg_ltv_12_months,
  (SUM(CASE WHEN DATEADD(month, 23, first_purchase_date) > start_time 
    THEN price_in_usd ELSE 0 END)/COUNT(DISTINCT rc_original_app_user_id))::DECIMAL(18,2) AS avg_ltv_24_months,
  (SUM(price_in_usd)/COUNT(DISTINCT rc_original_app_user_id))::DECIMAL(18,2) AS avg_ltv_unbounded

FROM filtered_transactions ft
LEFT JOIN first_purchase_dates fpd 
  ON fpd.rc_original_app_user_id = ft.rc_original_app_user_id
GROUP BY 1
