-- Counts how many actors have first names starting with 'P'

SELECT COUNT(*) FROM actor
WHERE first_name LIKE 'P%';