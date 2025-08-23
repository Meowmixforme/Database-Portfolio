/*
ICA Demo 15: T-SQL Programming and Stored Procedures

Useful Resource: https://www.youtube.com/watch?v=NrBJmtD0kEw

Business Function:
Stored procedures encapsulate business logic for repeatable tasks, data validation, and reporting, allowing business users or applications to execute complex operations securely and efficiently.
*/

-- ICA Demo 1: T-SQL Programming and Stored Procedure
-- Simple stored procedure to list all movies with a minimum vote average

CREATE OR ALTER PROCEDURE usp_ListTopRatedMovies
AS
BEGIN
    SELECT title, release_date, vote_average
    FROM movie
    WHERE vote_average >= 8.0
    ORDER BY vote_average DESC, release_date DESC;
END;
GO

-- Example execution:
EXEC usp_ListTopRatedMovies;
GO

-- ICA Demo 2: T-SQL Programming with Parameters
-- Stored procedure with input parameters for flexible reporting

CREATE OR ALTER PROCEDURE usp_ListMoviesByYearAndGenre
    @Year INT,
    @Genre VARCHAR(50)
AS
BEGIN
    SELECT m.title, m.release_date, g.genre_name, m.vote_average
    FROM movie m
    JOIN movie_genres mg ON m.movie_id = mg.movie_id
    JOIN genre g ON mg.genre_id = g.genre_id
    WHERE TRY_CAST(LEFT(m.release_date, 4) AS INT) = @Year
      AND g.genre_name = @Genre
    ORDER BY m.vote_average DESC, m.title;
END;
GO

-- Example execution:
EXEC usp_ListMoviesByYearAndGenre @Year = 2017, @Genre = 'Drama';
GO