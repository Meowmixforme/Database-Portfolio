-- Counts how many customers have first names starting with 'J' and last names starting with 'S'

SELECT COUNT(*) FROM customer
WHERE first_name LIKE 'J%' AND last_name LIKE 'S%';