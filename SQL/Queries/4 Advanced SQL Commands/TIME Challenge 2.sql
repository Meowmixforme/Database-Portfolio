-- Counts the number of payments made on Mondays

SELECT COUNT(*)
FROM payment
WHERE EXTRACT(DOW FROM payment_date) = 1;