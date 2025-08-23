/* 
ICA Demo 12: Using CTE, Views, Windows Ranking and Partition By

Useful Resources: https://www.youtube.com/watch?v=rIcB4zMYMas

Business Function: 
CTEs, Views, and Window Functions (ROW_NUMBER, RANK, DENSE_RANK, PARTITION BY, OVER) are essential for advanced reporting and analytics, supporting business needs such as:
- Identifying top performers (actors, directors, companies, genres)
- Analyzing movie trends by year, genre, or company
- Generating deduplicated lists, advanced summaries, and custom rankings for dashboards and reports
*/

-- ICA TSQL Demo 1: Partition By Row Number function
-- Find the most recent movie per genre
WITH GenreMovieRank AS (
    SELECT
        g.genre_name,
        m.title,
        m.release_date,
        ROW_NUMBER() OVER (PARTITION BY g.genre_name ORDER BY LEFT(m.release_date, 4) DESC, m.release_date DESC) AS rn
    FROM movie m
    JOIN movie_genres mg ON m.movie_id = mg.movie_id
    JOIN genre g ON mg.genre_id = g.genre_id
    WHERE ISDATE(m.release_date) = 1
)
SELECT genre_name, title, release_date
FROM GenreMovieRank
WHERE rn = 1;
GO

-- ICA TSQL Demo 2: Windows Ranking (RANK or DENSE_RANK with PARTITION)
-- Rank actors by number of movies they've appeared in
WITH ActorMovieCount AS (
    SELECT
        p.person_name,
        COUNT(*) AS movie_count
    FROM person p
    JOIN movie_cast mc ON p.person_id = mc.person_id
    GROUP BY p.person_name
)
SELECT 
    person_name,
    movie_count,
    RANK() OVER (ORDER BY movie_count DESC) AS ActorRank
FROM ActorMovieCount;
GO

-- ICA TSQL Demo 3: OVER Clause (CTE Function with OVER)
-- Calculate the average vote_average per genre for each movie
SELECT
    g.genre_name,
    m.title,
    m.vote_average,
    AVG(m.vote_average) OVER (PARTITION BY g.genre_name) AS AvgGenreRating
FROM movie m
JOIN movie_genres mg ON m.movie_id = mg.movie_id
JOIN genre g ON mg.genre_id = g.genre_id;
GO

-- ICA TSQL Demo 4: Writing Aggregate function in Partition By
-- Show total number of movies per production company for each movie
SELECT
    pc.company_name,
    m.title,
    COUNT(*) OVER (PARTITION BY pc.company_name) AS MoviesPerCompany
FROM movie m
JOIN movie_company mc ON m.movie_id = mc.movie_id
JOIN production_company pc ON mc.company_id = pc.company_id;
GO