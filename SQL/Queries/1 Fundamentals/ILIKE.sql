-- Selects all customers whose first and last names both start with 'j', case-insensitively

SELECT * FROM customer
WHERE first_name ILIKE 'j%' AND last_name ILIKE 'j%';
