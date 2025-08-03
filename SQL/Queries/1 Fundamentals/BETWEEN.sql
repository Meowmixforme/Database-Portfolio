-- Retrieves all payment records made between February 1 and February 15, 2007 (inclusive)

SELECT * FROM payment
WHERE payment_date BETWEEN '2007-02-01' AND '2007-02-15';