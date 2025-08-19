/* ICA Demo 2: Using the GROUP BY Clause 

Business Function: 
This query could be useful to identify which actors have starred in the most movies, and overall how popular their movies have been received.
Johnny Depp and Owen Wilson have both starred in 40 movies, yet Depp's films have been received more positively.

Useful Resources: https://www.youtube.com/watch?v=qpF7Y2fGTrE

TSQL Demo Code:
*/

SELECT
	person_name AS Actor, COUNT(title) AS [Movies Starred In], FLOOR(AVG(popularity)) AS [Average Movie Popularity %]
	FROM movie
	INNER JOIN	movie_cast ON movie.movie_id = movie_cast.movie_id
	INNER JOIN person ON movie_cast.person_id = person.person_id
	GROUP BY person_name
	HAVING  COUNT(title) > 30
	ORDER BY [Movies Starred In] DESC;
