-- Revenue generated on a specified date

SELECT
  SUM(purchase_price_in_usd) as gross_revenue,
  SUM(price_in_usd) as revenue_net_of_refunds, /* "Revenue" in the Revenue Chart */
  SUM(price_in_usd * (1 - tax_percentage)) as revenue_net_of_taxes, /* "Revenue (net of taxes)" in the Revenue Chart */
  SUM(price_in_usd * (1 - tax_percentage - commission_percentage)) as proceeds /* "Proceeds" in the Revenue Chart */
FROM
  [revenuecat_data_table]
WHERE date(start_time) = [targeted_date]
  AND is_trial_period = 'false'
  AND ownership_type != 'FAMILY_SHARED'
  AND store != 'promotional'
  AND is_sandbox != 'true'

-- Transactions which have been refunded can be identified through the refunded_at field.
