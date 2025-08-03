-- Retrieves the earliest 10 customer IDs based on payment date

SELECT customer_id FROM payment
ORDER BY payment_date ASC
LIMIT 10;