/*

ICA Demo 10: Using CTEs

Useful Resources: https://www.youtube.com/watch?v=_SanZ41uTlw

Business Function: 
This would be useful as an adaptive way to search for any character within a series of movies where the movies don't use similar names

TSQL Demo Code:

*/

-- Create a CTE That will search a movie character's name and return a list of films matching characters having that name.
-- Create the CTE as WITH CTE_Clouseau AS
-- In the subquery SELECT title using the alias Movie, movie.movie_id using the cleaner alias [Movie ID], character_name AS [Character Name], person.person_id AS [Actor ID],
-- person_name AS Actor, release_date using the cleaner alias [Release Date], tagline AS Tagline all FROM the movie table.
-- Create an INNER JOIN on movie _cast and movie using the movie_id keys
-- Create an INNER JOIN on person and movie_cast using the person_id keys
-- Then select WHERE character_name IN and in the next subquery SELECT character_name FROM movie_cast
-- WHERE the character_name is LIKE '%Clouseau' and close the  second subquery
-- GROUP BY title, movie_id, character_name, person_name, person_id, release_date and tagline then close the first subquery
-- Then SELECT Movie, [Character Name], [Actor ID], Actor, [Release Date], Tagline FROM the CTE_Clouseau and run it to see which movies Jacques Clouseau has been a character in.
-- This would be useful as an adpative way to search for any character within a series of movies where the movies don't use similar names


-- Using a CTE
WITH CTE_Clouseau AS
(SELECT title AS Movie, movie.movie_id AS [Movie ID], character_name AS [Character Name], person.person_id AS [Actor ID],
person_name AS Actor, release_date AS [Release Date], tagline AS Tagline
FROM movie
INNER JOIN movie_cast ON movie.movie_id = movie_cast.movie_id
INNER JOIN person ON movie_cast.person_id = person.person_id
WHERE character_name IN
	(SELECT
	character_name
	FROM movie_cast
	WHERE character_name LIKE '%Clouseau')
	GROUP BY title, movie.movie_id, character_name, person_name, person.person_id, release_date, tagline)
	SELECT Movie, [Character Name], [Actor ID], Actor, [Release Date], Tagline
	FROM CTE_Clouseau