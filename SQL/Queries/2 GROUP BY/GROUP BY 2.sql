-- Calculates the average replacement cost of films per rating category

SELECT rating, AVG(replacement_cost)
FROM film
GROUP BY rating;