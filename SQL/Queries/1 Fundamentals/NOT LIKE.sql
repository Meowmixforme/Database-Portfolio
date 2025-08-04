-- Retrieves all customers whose first names start with 'A' 
-- and last names do NOT start with 'B', sorted alphabetically by last name

SELECT * FROM customer
WHERE first_name LIKE 'A%' AND last_name NOT LIKE 'B%'
ORDER BY last_name;