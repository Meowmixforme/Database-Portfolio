-- This query retrieves the first and last names of customers
-- who have made at least one payment greater than $11.

SELECT 
  first_name, 
  last_name
FROM customer AS c
WHERE EXISTS (
  -- Subquery: Check if a payment over $11 exists for the customer
  SELECT * 
  FROM payment AS p
  WHERE p.customer_id = c.customer_id
    AND amount > 11
);