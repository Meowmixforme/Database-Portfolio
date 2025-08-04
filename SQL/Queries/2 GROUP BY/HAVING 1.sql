-- Filters customers with 40 or more payments

SELECT customer_id
FROM payment
GROUP BY customer_id
HAVING COUNT(*) >= 40;