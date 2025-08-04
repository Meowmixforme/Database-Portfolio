-- Counts how many payments have an amount greater than 5

SELECT COUNT(amount) FROM payment
WHERE amount > 5;