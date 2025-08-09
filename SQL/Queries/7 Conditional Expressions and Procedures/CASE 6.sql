-- Count films by selected rating categories: R, PG, PG-13
-- Uses CASE inside SUM to tally each group

SELECT
  SUM(CASE rating WHEN 'R' THEN 1 ELSE 0 END) AS R,         -- Mature audience
  SUM(CASE rating WHEN 'PG' THEN 1 ELSE 0 END) AS PG,       -- Parental guidance suggested
  SUM(CASE rating WHEN 'PG-13' THEN 1 ELSE 0 END) AS PG_13  -- Parents strongly cautioned
FROM film;