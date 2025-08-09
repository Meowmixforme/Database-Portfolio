-- Classify customers based on their ID range
-- Assigns labels: 'premium', 'plus', or 'normal'

SELECT customer_id,
  CASE
    WHEN customer_id <= 100 THEN 'premium'             -- Early or high-value customers
    WHEN customer_id BETWEEN 101 AND 200 THEN 'plus'   -- Mid-tier customers
    ELSE 'normal'                                      -- Default classification
  END AS customer_class
FROM customer;
