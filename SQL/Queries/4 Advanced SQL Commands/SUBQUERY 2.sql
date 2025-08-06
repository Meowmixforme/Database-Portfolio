-- This query retrieves the IDs and titles of films that were rented
-- and returned between May 29 and May 30, 2005.
-- It uses a subquery to find relevant film IDs based on rental activity.

SELECT 
  film_id, 
  title
FROM film
WHERE film_id IN (
  -- Subquery: Get film IDs from rentals returned in the specified date range
  SELECT inventory.film_id
  FROM rental
  INNER JOIN inventory ON inventory.inventory_id = rental.inventory_id
  WHERE return_date BETWEEN '2005-05-29' AND '2005-05-30'
)
-- Sort the results by film ID
ORDER BY film_id;