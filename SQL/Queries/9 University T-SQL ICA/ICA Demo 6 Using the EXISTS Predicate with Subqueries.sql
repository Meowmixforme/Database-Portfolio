/*

ICA Demo 6: Using the EXISTS Predicate with Subqueries

Useful Resources: https://www.youtube.com/watch?v=QAkCknWPSqY

Business Function: 
This query would help a production studio analyse trends of movie popularity by genre over the years. The result shows a range of profitable movies over the decades. For instance,
"Gone with the Wind" had held the top spot for romance since 1939 for decades, later replaced by Titanic and in 2019 was 14th place.

TSQL Demo Code:

*/

-- Select movie_id and givie it the alias of Id, title as Title, then create an aggregation of the revenue minus budget as MAX profit and give overview the alias Overview. SELECT them all from movie using the alias c
-- Create an inner join on movie_genres and c using the movie_id keys. Finally group by movie_id, title and overview and order by profit descending.


SELECT c.movie_id as Id, title as Title, max(revenue - budget) as Profit, overview as Overview
FROM movie as c
inner join movie_genres on movie_genres.movie_id = c.movie_id
		group by c.movie_id, title, overview
		order by profit desc

-- Using a WHERE EXISTS clause, select all from genre and inner join movie_genres using the alias g with genre using the genre_id keys.
-- Using another WHERE clause to check movies using the same movie_id key on movie_genres and movie AND having a genre name of your choice (action, horror and romance come to mind).
-- Then add andother AND clause using release date. You can select a specific year, a range of years or before/after a certain date.
-- The result shows a range of profitable movies over the decades. For instance, "Gone with the Wind" had held the top spot for romance since 1939 for decades, later replaced by Titanic and in 2019 was 14th place.



SELECT c.movie_id as Id, title as Title, max(revenue - budget) as Profit, overview, release_date
FROM movie as c
inner join movie_genres on movie_genres.movie_id = c.movie_id
WHERE 
	EXISTS (
		SELECT * 
		FROM genre 
		INNER JOIN movie_genres AS g ON g.genre_id = genre.genre_id
		WHERE g.movie_id = c.movie_id 
			AND genre_name like 'romance'
			AND c.release_date <= '1970'
		)	
		group by c.movie_id, title, overview, release_date
		order by profit desc
