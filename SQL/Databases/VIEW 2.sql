-- Preview with a limit
SELECT * FROM customer_info LIMIT 10;

-- Filter by last name
SELECT * FROM customer_info WHERE last_name = 'Smith';

-- Sort alphabetically
SELECT * FROM customer_info ORDER BY last_name, first_name;
