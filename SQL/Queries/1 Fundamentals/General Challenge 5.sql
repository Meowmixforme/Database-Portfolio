-- Counts how many 'R'-rated films have a replacement cost between $5 and $15

SELECT COUNT(*) FROM film
WHERE rating = 'R'
AND replacement_cost BETWEEN 5 AND 15;