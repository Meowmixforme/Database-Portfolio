-- Retrieves the five shortest films by title and duration from the film table

SELECT title, length FROM film
ORDER BY length ASC
LIMIT 5;