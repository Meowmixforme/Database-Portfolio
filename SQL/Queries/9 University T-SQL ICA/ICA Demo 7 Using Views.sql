/*

ICA Demo 7: Using Views

Useful Resources: https://www.youtube.com/watch?v=eNFNN3coJVU

Business Function: 
Viewing actors, their number of movies starred in, average movie popularity through their career and production companies previously worked with. 


TSQL Demo Code:

*/

-- Create a view of the previous query from Mod9 that shows all actors and count the number of movies they've starred in.
-- Also show the average movie popularity of that actor's movies.
-- Start by CREATE VIEW ActorsMovies AS and SELECT person_name giving it the alias Actor. COUNT the title and give the alias [Movies Starred In] Aggregate FLOOR the Average popularity 
-- and give the alias [Average Movie Popularity %] FROM the table movie. 
-- Create an INNER JOIN ON movie_cast and movie using the movie_id key on both tables
-- Create an INNER JOIN on person and movie_cast using the person_id keys on both tables.
-- Group by person_name and finally list only those actors HAVING a title count of over 30 movies.


CREATE VIEW ActorsMovies
AS
SELECT
	person_name AS Actor, COUNT(title) AS [Movies Starred In], FLOOR(AVG(popularity)) AS [Average Movie Popularity %]
	FROM movie
	INNER JOIN	movie_cast ON movie.movie_id = movie_cast.movie_id
	INNER JOIN person ON movie_cast.person_id = person.person_id
	GROUP BY person_name
	HAVING  COUNT(title) > 30
	

-- Query the view by SELECT Actor, [Movies Starred In] and [Average Movie Popularity %] FROM the ActorsMovies VIEW
-- This is useful though could be improved upon by adding another table.

SELECT Actor, [Movies Starred In], [Average Movie Popularity %] 
FROM ActorsMovies

-- Join the view to another table by SELECT Actor, [Movies Starred In], [Average Movie Popularity %] and adding the table company_name using the alias [Production Company] FROM the view ActorsMovies.
-- Create a LEFT JOIN between movie_company movie_id key and The view ActorsMovies' [Average Movie Popularity %]
-- INNER JOIN production_company AND movie_company using the company.company_id keys.
-- Finally GROUP BY Actor, [Movies Starred In], [Average Movie Popularity %] and company_name.
-- Now not only do the actors have their number of movies starred in and average movie popularity, they also have each production company they've been involved with making those movies too.

SELECT DISTINCT Actor, [Movies Starred In], [Average Movie Popularity %], company_name AS [Production Company]
FROM ActorsMovies 
LEFT JOIN movie_company ON movie_company.movie_id = ActorsMovies.[Average Movie Popularity %]
INNER JOIN production_company ON movie_company.company_id = production_company.company_id
GROUP BY Actor, [Movies Starred In], [Average Movie Popularity %], company_name

-- Delete the query by typong DROP VIEW ActorsMovies and it will be deleted from the database.

DROP VIEW ActorsMovies