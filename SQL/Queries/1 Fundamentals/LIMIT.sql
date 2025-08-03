-- Retrieves the five most recent non-zero payments from the payment table

SELECT * FROM payment
WHERE amount != 0.00
ORDER BY payment_date DESC
LIMIT 5;