/*

ICA Demo 4: Writing Self-Contained Subqueries

Useful Resources: https://www.youtube.com/watch?v=JksrTuEVEPk

This query is useful for a series of movies or spin-offs where the movies use different title names. I will also be including the release date and tagline from the movies.

TSQL Demo Code:
-- For the inner query SELECT chacharacter_name from the table Movie_cast where the character_name is LIKE '%Ripley'.
-- We can see there are several results.
*/


SELECT
	character_name
	FROM movie_cast
	WHERE character_name LIKE '%Ripley'

-- Identify outer query through an INNER JOIN from movie_cast and movie, using movie_id to link the tables. Then INNER JOIN person and movie_cast using person_id.
-- SELECT FROM the movie table, title and use the alias MOVIE, give movie_id the alias of [MOVIE ID] and person_id the alias of [Actor ID].
-- The result are a series of movies with  their ids, Actors and their ids, a release date and tagline.   


SELECT title AS Movie, movie.movie_id AS [Movie ID], person.person_id AS [Actor ID],
person_name AS Actor, release_date AS [Release Date], tagline AS Tagline
FROM movie
INNER JOIN movie_cast ON movie.movie_id = movie_cast.movie_id
INNER JOIN person ON movie_cast.person_id = person.person_id

-- Add inner query so that only characters and details from the outer query by WHERE character_name IN.
-- are returned from movies containing the name '&Ripley'. As we can see, 'Lieutenant Ellen Ripley' from the movie series Alien is returned four times.
-- While she has slightly different names returned for three of the four films in the franchise, it is obviously the same character, as Sigourney Weaver
-- plays her each time. 

SELECT title AS Movie, movie.movie_id AS [Movie ID], character_name AS [Character Name], person.person_id AS [Actor ID],
person_name AS Actor, release_date AS [Release Date], tagline AS Tagline
FROM movie
INNER JOIN movie_cast ON movie.movie_id = movie_cast.movie_id
INNER JOIN person ON movie_cast.person_id = person.person_id
WHERE character_name IN
	(SELECT
	character_name
	FROM movie_cast
	WHERE character_name LIKE '%Ripley')
	GROUP BY title, movie.movie_id, character_name, person_name, person.person_id, release_date, tagline