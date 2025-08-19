/* a) ICA Demo 1: Using Aggregate Functions

Useful Resources: https://www.youtube.com/watch?v=L7dMVFDgs7Q

Business Function: This query could be useful for a movie studio to identify the most profitable film genres for future productions.
*/

--TSQL Demo Code:

SELECT
	genre_name as [Movie Genre], FLOOR(AVG(popularity)) AS [Popularity %] 
	FROM movie
	INNER JOIN movie_genres ON movie_genres.movie_id = movie.movie_id
	INNER JOIN	genre ON genre.genre_id = movie_genres.genre_id
	GROUP BY genre_name
	ORDER BY [Popularity %]DESC	

