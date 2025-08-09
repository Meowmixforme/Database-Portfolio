-- Count how many films are rated 'R'
-- Uses CASE inside SUM to tally matching rows

SELECT SUM(
  CASE rating
    WHEN 'R' THEN 1   -- Include films rated 'R'
    ELSE 0            -- Exclude all others
  END
) AS R
FROM film;
