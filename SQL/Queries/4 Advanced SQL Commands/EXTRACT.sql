-- Extract the year component from each payment_date entry

SELECT EXTRACT(YEAR FROM payment_date) AS YEAR
FROM payment;