/* 
ICA Demo 13: Pivoting and Grouping Sets

Useful Resources: https://www.youtube.com/watch?v=V53C2r6qsKI

Business Function:
Pivoting and Grouping Sets allow flexible summary reports and dashboards for business users—e.g., comparing movie revenue and counts across years, genres, or companies, and for generating subtotals and grand totals in a single query.
*/

-- ICA Demo 1: Working with GROUPING SETS
-- Total revenue by year, by genre, and overall
SELECT 
    LEFT(m.release_date, 4) AS [Year],
    g.genre_name AS [Genre],
    SUM(m.revenue) AS [TotalRevenue]
FROM movie m
JOIN movie_genres mg ON m.movie_id = mg.movie_id
JOIN genre g ON mg.genre_id = g.genre_id
WHERE ISDATE(m.release_date) = 1
GROUP BY GROUPING SETS (
   (LEFT(m.release_date, 4), g.genre_name), -- by year and genre
   (LEFT(m.release_date, 4)),               -- by year
   (g.genre_name),                          -- by genre
   ()                                       -- grand total
)
ORDER BY [Year], [Genre];
GO

-- ICA Demo 2: Writing Queries with PIVOT and UNPIVOT

-- PIVOT: Number of movies by genre per year (each genre as a column)
SELECT [Year], [Action], [Comedy], [Drama], [Horror], [Animation], [Adventure]
FROM (
    SELECT 
        LEFT(m.release_date, 4) AS [Year],
        g.genre_name
    FROM movie m
    JOIN movie_genres mg ON m.movie_id = mg.movie_id
    JOIN genre g ON mg.genre_id = g.genre_id
    WHERE ISDATE(m.release_date) = 1
) AS SourceTable
PIVOT (
    COUNT(genre_name)
    FOR genre_name IN ([Action], [Comedy], [Drama], [Horror], [Animation], [Adventure])
) AS PivotTable
ORDER BY [Year];
GO

-- UNPIVOT: Transforming wide columns into rows for movie language counts (example)
-- First, create a summary view (for demonstration):
WITH MovieLangSummary AS (
    SELECT
        m.title,
        SUM(CASE WHEN l.language_name = 'English' THEN 1 ELSE 0 END) AS English,
        SUM(CASE WHEN l.language_name = 'French' THEN 1 ELSE 0 END) AS French,
        SUM(CASE WHEN l.language_name = 'Spanish' THEN 1 ELSE 0 END) AS Spanish
    FROM movie m
    JOIN movie_languages ml ON m.movie_id = ml.movie_id
    JOIN language l ON ml.language_id = l.language_id
    GROUP BY m.title
)
SELECT title, Language, LangCount
FROM MovieLangSummary
UNPIVOT (
    LangCount FOR Language IN ([English], [French], [Spanish])
) AS Unpvt
WHERE LangCount > 0;
GO