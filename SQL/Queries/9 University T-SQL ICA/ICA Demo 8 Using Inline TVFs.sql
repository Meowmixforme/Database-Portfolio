/*

ICA Demo 8: Using Inline TVFs

Useful Resources: https://www.youtube.com/watch?v=MzMsHPeBVuw

Business Function: 
This is an extremely fast and user-friendly way for an employee to search a list of movies over the average runtime by any production company,
having their ID, release date and overview at hand. There has been a correlation in articles over the past five years showing longer movies make more money.

TSQL Demo Code:

*/

-- Start by SELECT company_name FROM production_company and writing down a list of production companies to search for later.

SELECT company_name
FROM production_company

--CREATE FUNCTION compname which will be the name of our TVF (@comp AS NVARCHAR(50)) - For where we'll insert our chosen company name to query
-- RETURNS TABLE AS RETURN
-- SELECT movie_id and give it the alias  [Movie Id], title as Title to give a clean look to our table, runtime, release_date as [Release Date] and overview FROM the movie table.
-- Create an INNER JOIN on movie_company and movie using the movie_id keys
-- Create an INNER JOIN on production_company and movie_company using the company_id keys
-- WHERE runtime is more or equal to (subquery) SELECT average runtime from movie WHERE company_name equals @comp
-- Then group by runtime, movie.movie_id, title, release_date and overview and GO
-- Now run the TVF and we can test it with a few production companies.

CREATE FUNCTION CompName (@comp AS NVARCHAR(50))
	RETURNS TABLE
AS
RETURN
SELECT movie.movie_id AS [Movie Id], title AS Title, runtime, release_date AS [Release Date], overview
FROM movie
INNER JOIN movie_company on movie.movie_id = movie_company.movie_id
INNER JOIN production_company on movie_company.company_id = production_company.company_id
WHERE runtime >= (SELECT AVG(runtime) from movie
WHERE company_name = @comp)
group by runtime, movie.movie_id, title, release_date, overview
	GO

--To test the TVF, SELECT [Movie Id], Title, runtime, [Release Date] and overview FROM CompName('ENTER PRODUCTION COMPANY NAME HERE')
-- The result is an extremely fast and user friendly way for an employee to search a list of movies over the average runtime by any production company, having their ID, release date and overview at hand.
-- There has been a correlation in articles over the past five years showing longer movies make more money.


-- Test with 'Walt Disney Pictures'
SELECT 
[Movie Id], Title, runtime, [Release Date], overview
FROM CompName('Walt Disney Pictures')
-- Test with 'Lucasfilm'
SELECT 
[Movie Id], Title, runtime, [Release Date], overview
FROM CompName('Lucasfilm')
--Test with Arte
SELECT 
[Movie Id], Title, runtime, [Release Date], overview
FROM CompName('Arte') 
-- Test with 'Sony Pictures'
SELECT 
[Movie Id], Title, runtime, [Release Date], overview
FROM CompName('Sony Pictures')
-- Test with 'Orion Pictures'
SELECT 
[Movie Id], Title, runtime, [Release Date], overview
FROM CompName('Orion Pictures')

--To delete the TVF DROP FUNCTION IF EXISTS CompName
--GO

DROP FUNCTION IF EXISTS CompName
GO