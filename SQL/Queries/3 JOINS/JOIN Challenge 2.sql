-- Retrieves titles of films featuring actor Nick Wahlberg

SELECT title, first_name, last_name
FROM film_actor
INNER JOIN actor ON film_actor.actor_id = actor.actor_id
INNER JOIN film ON film_actor.film_id = film.film_id
WHERE first_name = 'Nick'
  AND last_name = 'Wahlberg';