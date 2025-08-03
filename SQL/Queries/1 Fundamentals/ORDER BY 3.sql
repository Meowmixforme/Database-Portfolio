-- Counts how many films have a runtime of 50 minutes or less

SELECT COUNT(title) FROM film
WHERE length <= 50;