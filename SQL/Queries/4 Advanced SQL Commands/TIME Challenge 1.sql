-- Retrieves a list of distinct month names from payment_date (in uppercase)

SELECT DISTINCT TO_CHAR(payment_date,'MONTH')
FROM payment;