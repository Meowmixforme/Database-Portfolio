-- Count how many films are priced at the bargain rate of $0.99
-- Uses CASE inside SUM to tally qualifying rowS

SELECT SUM(
  CASE rental_rate
    WHEN 0.99 THEN 1   -- Count this film as a bargain
    ELSE 0             -- Ignore other rates
  END
) AS number_of_bargains
FROM film;