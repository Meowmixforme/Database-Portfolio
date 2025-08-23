/*
ICA Demo 16: T-SQL Error Handling

Business Function:
Error handling in T-SQL is crucial for building robust business applications. It allows you to catch problems, log them, and return meaningful information to users or calling applications, instead of just failing silently or crashing.

Useful Resource: https://learn.microsoft.com/en-us/sql/t-sql/language-elements/try-catch-transact-sql
*/

-- ICA Demo 1: Implementing T-SQL Error Handling (Basic TRY...CATCH)
-- Example: Attempt to insert a duplicate key, handle the error, and provide a message

BEGIN TRY
    -- Intentionally cause a primary key violation (replace with your own table/column as needed)
    INSERT INTO genre (genre_id, genre_name)
    VALUES (1, 'DuplicateGenre');  -- assuming 1 already exists
    PRINT 'Insert succeeded!';
END TRY
BEGIN CATCH
    PRINT 'Error occurred:';
    PRINT ERROR_MESSAGE();
END CATCH;
GO

-- ICA Demo 2: Implementing Structured Exception Handling in a Stored Procedure
-- Example: Robust procedure with error handling and transaction control

CREATE OR ALTER PROCEDURE usp_AddGenre
    @GenreID INT,
    @GenreName VARCHAR(100)
AS
BEGIN
    BEGIN TRY
        BEGIN TRANSACTION;

        INSERT INTO genre (genre_id, genre_name)
        VALUES (@GenreID, @GenreName);

        COMMIT TRANSACTION;
        PRINT 'Genre successfully added!';
    END TRY
    BEGIN CATCH
        IF @@TRANCOUNT > 0
            ROLLBACK TRANSACTION;

        PRINT 'Error occurred while adding genre:';
        PRINT ERROR_MESSAGE();
    END CATCH
END;
GO

-- Example execution - will fail if the genre_id already exists
EXEC usp_AddGenre @GenreID = 1, @GenreName = 'Action';
GO