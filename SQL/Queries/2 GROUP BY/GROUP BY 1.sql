-- Counts the number of payments processed by each staff member

SELECT staff_id, COUNT(amount)
FROM payment
GROUP BY staff_id;