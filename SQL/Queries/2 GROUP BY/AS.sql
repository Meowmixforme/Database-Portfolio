-- Lists customers who spent more than $100 in (Alias) total payments

SELECT customer_id, SUM(amount) AS total_spent
FROM payment
GROUP BY customer_id
HAVING SUM(amount) > 100;