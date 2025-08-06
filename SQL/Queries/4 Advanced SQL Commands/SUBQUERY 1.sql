-- This query retrieves the titles and rental rates of films
-- whose rental rate is higher than the average rental rate
-- across all films in the database.

SELECT 
  title, 
  rental_rate
FROM film
WHERE rental_rate > (
  -- Subquery calculates the average rental rate of all films
  SELECT AVG(rental_rate) FROM film