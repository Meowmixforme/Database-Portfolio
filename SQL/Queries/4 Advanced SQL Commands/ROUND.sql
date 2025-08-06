-- Calculates the rental rate as a percentage of the replacement cost, rounded to 2 decimal places

SELECT ROUND(rental_rate / replacement_cost, 2) * 100
FROM film;