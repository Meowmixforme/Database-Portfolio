/* 

ICA Demo 5: Writing Correlated Subqueries

Business Function: This query will work with any production company and can be used to find the longest running films by a given company.

TSQL Demo Code:
*/

-- Identify production companies by SELECT company name FROM production_company and get the spelling for 'Walt Disney Pictures' production company from the database. We can see it is the second result and is 'Walt Disney Pictures'

SELECT company_name
FROM production_company

-- Write the outer Query to SELECT movie_id with the alias [Movie Id], the title alias Title, runtime, release_date alias [Release Date] and overview FROM the movie table.
-- GROUP BY all of the above and ORDER BY runtime descending. As you can see, the list of movies are by many production companies. 

SELECT movie.movie_id AS [Movie Id], title AS Title, runtime, release_date AS [Release Date], overview
FROM movie
GROUP BY runtime, movie.movie_id, title, release_date, overview
ORDER BY runtime DESC

-- Write INNER JOINS for movie_company  and movie on movie_id then an INNER JOIN for production_company and Movie_company on company_id. 
-- Write the inner query so that only WHERE films equal or the same to the average runtime of films in the database are returned WHERE the production company matches 'Walt Disney Pictures'.
-- 'Walt Disney Pictures' movies are shown equal or over the average runtime when the inner and outer queries are joined together. The inner query relies on the outer query to run. 
-- This query will work with any production company and can be used to find the longest running films by a given company.

SELECT movie.movie_id AS [Movie Id], title AS Title, runtime, release_date AS [Release Date], overview
FROM movie
INNER JOIN movie_company on movie.movie_id = movie_company.movie_id
INNER JOIN production_company on movie_company.company_id = production_company.company_id
WHERE runtime >= (SELECT AVG(runtime) from movie
WHERE company_name = 'Walt Disney Pictures')
group by runtime, movie.movie_id, title, release_date, overview
ORDER BY runtime DESC
