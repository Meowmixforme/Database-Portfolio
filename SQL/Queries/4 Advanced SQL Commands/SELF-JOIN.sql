-- This query finds pairs of films that have the same length
-- but are not the same film (i.e., different film IDs).
-- It returns the title of each film in the pair and their shared length.

SELECT 
  f1.title, 
  f2.title, 
  f1.length
FROM film AS f1
INNER JOIN film AS f2 
  ON f1.film_id != f2.film_id  -- Ensure the films are different
  AND f1.length = f2.length;   -- Match films with the same length
