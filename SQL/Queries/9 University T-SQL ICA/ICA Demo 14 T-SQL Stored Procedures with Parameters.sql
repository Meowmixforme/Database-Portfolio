/*
ICA Demo 14: T-SQL Stored Procedures with Parameters

Useful Resource: https://www.youtube.com/watch?v=NMMUkOWJrUs

Business Function:
Stored procedures with parameters allow business users and applications to run repeatable queries with dynamic input—such as filtering, searching, or generating custom reports—while encapsulating business logic for consistency and security.

*/

-- Demo 1: Simple stored procedure with an input parameter
-- Get all movies released by a given production company

CREATE OR ALTER PROCEDURE usp_GetMoviesByCompany
    @CompanyName VARCHAR(100)
AS
BEGIN
    SELECT m.title, m.release_date, pc.company_name
    FROM movie m
    JOIN movie_company mc ON m.movie_id = mc.movie_id
    JOIN production_company pc ON mc.company_id = pc.company_id
    WHERE pc.company_name = @CompanyName
    ORDER BY m.release_date DESC;
END;
GO

-- Example execution:
EXEC usp_GetMoviesByCompany @CompanyName = 'Warner Bros.';
GO

-- Demo 2: Stored procedure with multiple parameters and default value
-- Get movies by genre and year range, with optional minimum rating

CREATE OR ALTER PROCEDURE usp_GetMoviesByGenreYear
    @Genre VARCHAR(50),
    @StartYear INT,
    @EndYear INT,
    @MinRating DECIMAL(3,1) = 0
AS
BEGIN
    SELECT m.title, m.release_date, g.genre_name, m.vote_average
    FROM movie m
    JOIN movie_genres mg ON m.movie_id = mg.movie_id
    JOIN genre g ON mg.genre_id = g.genre_id
    WHERE g.genre_name = @Genre
      AND TRY_CAST(LEFT(m.release_date, 4) AS INT) BETWEEN @StartYear AND @EndYear
      AND m.vote_average >= @MinRating
    ORDER BY m.vote_average DESC, m.release_date DESC;
END;
GO

-- Example execution:
EXEC usp_GetMoviesByGenreYear @Genre = 'Action', @StartYear = 2010, @EndYear = 2020, @MinRating = 7.5;
GO

-- Demo 3: Output parameter example
-- Count movies for a genre

CREATE OR ALTER PROCEDURE usp_CountMoviesByGenre
    @Genre VARCHAR(50),
    @MovieCount INT OUTPUT
AS
BEGIN
    SELECT @MovieCount = COUNT(*)
    FROM movie m
    JOIN movie_genres mg ON m.movie_id = mg.movie_id
    JOIN genre g ON mg.genre_id = g.genre_id
    WHERE g.genre_name = @Genre;
END;
GO

-- Example execution:
DECLARE @Count INT;
EXEC usp_CountMoviesByGenre @Genre = 'Comedy', @MovieCount = @Count OUTPUT;
SELECT @Count AS ComedyMovieCount;
GO