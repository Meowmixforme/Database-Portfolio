-- Use dvdrental database for all the case examples
-- Count films by rental pricing tier: bargain, regular, premium
-- Uses CASE inside SUM to tally each category

SELECT
  SUM(CASE rental_rate WHEN 0.99 THEN 1 ELSE 0 END) AS bargains,  -- Budget-friendly titles
  SUM(CASE rental_rate WHEN 2.99 THEN 1 ELSE 0 END) AS regular,   -- Standard pricing
  SUM(CASE rental_rate WHEN 4.99 THEN 1 ELSE 0 END) AS premium    -- High-value titles
FROM film;