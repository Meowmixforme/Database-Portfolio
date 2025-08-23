/*
ICA Demo 17: T-SQL Transactions

Business Function:
Transactions ensure that a group of operations are executed as a single unit—either all succeed or none do. This is critical for maintaining data consistency, especially in business processes like order processing, payroll, or inventory management.

Useful Resource: https://learn.microsoft.com/en-us/sql/t-sql/language-elements/transactions-transact-sql
*/

-- ICA Demo 1: Transactions (BEGIN TRAN, COMMIT, ROLLBACK)
-- Example: Inserting a new genre and a new keyword together as a single transaction

BEGIN TRANSACTION;

BEGIN TRY
    INSERT INTO genre (genre_id, genre_name)
    VALUES (101, 'Experimental');

    INSERT INTO keyword (keyword_id, keyword_name)
    VALUES (501, 'Avant-garde');

    COMMIT TRANSACTION;
    PRINT 'Both inserts succeeded and were committed!';
END TRY
BEGIN CATCH
    ROLLBACK TRANSACTION;
    PRINT 'Error occurred, transaction rolled back:';
    PRINT ERROR_MESSAGE();
END CATCH;
GO

-- ICA Demo 2: Controlling Transactions (Explicit Savepoints)
-- Example: Using SAVE TRANSACTION to set a savepoint and roll back to it

BEGIN TRANSACTION;

BEGIN TRY
    -- First operation
    INSERT INTO genre (genre_id, genre_name)
    VALUES (102, 'TestGenre');

    SAVE TRANSACTION SavePoint1;

    -- Second operation (cause a primary key violation intentionally)
    INSERT INTO genre (genre_id, genre_name)
    VALUES (101, 'ExperimentalAgain');  -- 101 already exists from previous example

    COMMIT TRANSACTION;
    PRINT 'All operations succeeded and were committed!';
END TRY
BEGIN CATCH
    PRINT 'Error occurred:';
    PRINT ERROR_MESSAGE();

    IF @@TRANCOUNT > 0
    BEGIN
        PRINT 'Rolling back to savepoint...';
        ROLLBACK TRANSACTION SavePoint1;
        -- You could proceed with other operations or commit/rollback the rest
        COMMIT TRANSACTION;
        PRINT 'Rolled back to savepoint and committed remaining work.';
    END
END CATCH;
GO

/*
Summary:
- ICA Demo 1: Shows atomicity—both inserts succeed or, if either fails, both are rolled back.
- ICA Demo 2: Demonstrates partial rollback using SAVE TRANSACTION; you can undo some changes and keep others.
*/