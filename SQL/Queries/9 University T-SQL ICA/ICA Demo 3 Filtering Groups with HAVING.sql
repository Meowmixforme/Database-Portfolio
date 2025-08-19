/* ICA Demo 3: Filtering Groups with HAVING

Useful Resources: https://www.youtube.com/watch?v=BY_sLK3s5O8

Business Function: 
This could be useful for a movie company wanting to assess which countries are the most profitable geographically to market in

TSQL Demo Code:

*/

	SELECT
	country.country_name AS Country, country.country_id, MAX(budget) AS Budget, MAX(revenue) AS Revenue, SUM(revenue - budget) AS [Box Office Loss]
	FROM movie
	INNER JOIN production_country ON movie.movie_id = production_country.movie_id
	INNER JOIN country ON production_country.country_id = country.country_id
	GROUP BY  country.country_name, country.country_id
	HAVING SUM(revenue - budget) < 0
	ORDER BY [Box Office Loss] ASC