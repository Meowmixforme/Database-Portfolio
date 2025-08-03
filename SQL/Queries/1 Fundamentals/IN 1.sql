-- Counts how many payments were made with specific low-value amounts

SELECT COUNT(*) FROM payment
WHERE amount IN (0.99, 1.98, 1.99);