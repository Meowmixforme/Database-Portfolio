/* 
ICA Demo 11: Using Views and Set Operators

Useful Resources: https://www.youtube.com/watch?v=krnAfIHqGzI

Business Function: 
Views and set operators such as UNION, INTERSECT, and EXCEPT are used to create reusable queries and compare or combine results across different queries. This supports business needs such as talent analytics (e.g. people who have worked in both cast and crew), content discovery (e.g. movies with multiple genres), and production analysis (e.g. companies producing similar movies).
*/

--TSQL Demo Code:

-- Example 1: View showing movies with their genres and production companies
CREATE VIEW MoviesWithGenreAndCompany AS
SELECT m.movie_id, m.title, g.genre_name, pc.company_name, m.release_date
FROM movie m
JOIN movie_genres mg ON m.movie_id = mg.movie_id
JOIN genre g ON mg.genre_id = g.genre_id
JOIN movie_company mc ON m.movie_id = mc.movie_id
JOIN production_company pc ON mc.company_id = pc.company_id;
GO

-- Example 2: CTE for most popular movie per genre
;WITH GenrePopularity AS (
    SELECT 
        g.genre_name, 
        m.title, 
        m.popularity,
        ROW_NUMBER() OVER (PARTITION BY g.genre_name ORDER BY m.popularity DESC) AS rn
    FROM movie m
    JOIN movie_genres mg ON m.movie_id = mg.movie_id
    JOIN genre g ON mg.genre_id = g.genre_id
)
SELECT genre_name, title, popularity
FROM GenrePopularity
WHERE rn = 1;
GO

-- Example 3: UNION - movies in either 'Action' or 'Comedy'
SELECT m.title
FROM movie m
JOIN movie_genres mg ON m.movie_id = mg.movie_id
JOIN genre g ON mg.genre_id = g.genre_id
WHERE g.genre_name = 'Action'
UNION
SELECT m.title
FROM movie m
JOIN movie_genres mg ON m.movie_id = mg.movie_id
JOIN genre g ON mg.genre_id = g.genre_id
WHERE g.genre_name = 'Comedy';
GO

-- Example 4: INTERSECT - movies that are both 'Action' and 'Adventure'
SELECT m.title
FROM movie m
JOIN movie_genres mg ON m.movie_id = mg.movie_id
JOIN genre g ON mg.genre_id = g.genre_id
WHERE g.genre_name = 'Action'
INTERSECT
SELECT m.title
FROM movie m
JOIN movie_genres mg ON m.movie_id = mg.movie_id
JOIN genre g ON mg.genre_id = g.genre_id
WHERE g.genre_name = 'Adventure';
GO

-- Example 5: EXCEPT - Movies that have cast members but no keywords assigned (movies with cast but no keywords)

SELECT DISTINCT m.title
FROM movie m
JOIN movie_cast mc ON m.movie_id = mc.movie_id
EXCEPT
SELECT DISTINCT m.title
FROM movie m
JOIN movie_keywords mk ON m.movie_id = mk.movie_id;
GO

-- Drop the view

DROP VIEW IF EXISTS MoviesWithGenreAndCompany;
GO