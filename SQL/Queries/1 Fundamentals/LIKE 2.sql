-- Selects all customers whose first names start with 'J' and last names start with 'S'

SELECT * FROM customer
WHERE first_name LIKE 'J%' AND last_name LIKE 'S%';