/*

ICA Demo 9: Using Derived Tables

Useful Resources: https://www.youtube.com/watch?v=nxozAGkKFrg

Business Function: 
The table could be used to view the box office profit of countries and see which countries are the most lucrative

TSQL Demo Code:

*/


-- Create a Derived Table that will show each country and their corresponding budget, revenue and box office profit as Country
-- SELECT Country, [Country ID], Budget, Revenue and [Box Office Profit] FROM and create a subquery
--  In the subquery SELECT country_name giving the alias Country,  country.country_id giving the alias [Country ID] to use in the outer query
-- Aggregate MAX(budget) AS Budget, MAX(revenue) AS Revenue, and SUM(revenue - budget) AS [Box Office Profit] From the movie table
-- Create an INNER JOIN on production_company and movie using the movie_id keys
-- Create an INNER JOIN on country and production_country using the country_id keys
-- GROUP BY  country.country_name, country.country_id
-- HAVING SUM(revenue - budget) of over 100000000 and end the subquery
-- Name the derived table Country
-- The table could be used to view the box office profit of countries and see which contries are the most lucrative.


	SELECT
	Country, [Country ID], Budget, Revenue, [Box Office Profit]
	FROM(SELECT
	country.country_name AS Country, country.country_id AS [Country ID],MAX(budget) AS Budget, MAX(revenue) AS Revenue, SUM(revenue - budget) AS [Box Office Profit]
	FROM movie
	INNER JOIN production_country ON movie.movie_id = production_country.movie_id
	INNER JOIN country ON production_country.country_id = country.country_id
	GROUP BY  country.country_name, country.country_id
	HAVING SUM(revenue - budget) > 100000000)
	AS Country

