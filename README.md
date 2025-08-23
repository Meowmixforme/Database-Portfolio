# Database-Portfolio

## SQL (Sections 1–8: PostgreSQL)

Below you will find a description of the contents and purpose of each directory in this portfolio. All SQL code and exercises within sections 1–8 are written for PostgreSQL.

   **1 Fundamentals**  
   This folder contains introductory SQL queries covering the foundational elements of the language. Scripts in this section demonstrate basic `SELECT` statements, filtering data with `WHERE`, sorting results with `ORDER BY`, using pattern matching with `LIKE` and `ILIKE`, and employing simple aggregate functions such as `COUNT`. These examples are ideal for beginners to gain an understanding of fundamental SQL operations in PostgreSQL.

   **2 GROUP BY**  
   This directory explores the use of the `GROUP BY` clause in SQL. The scripts focus on grouping data by one or more columns and applying aggregate functions like `SUM`, `AVG`, `MAX`, `MIN`, and `COUNT` to grouped results. It presents practical scenarios for summarising data and extracting insights from grouped datasets, which are essential skills for data analysis.

   **3 JOINS**  
   Here, you will find example queries demonstrating different types of table joins in SQL, including `INNER JOIN`, `LEFT JOIN`, `RIGHT JOIN`, and `FULL OUTER JOIN`. These scripts illustrate how to combine data from multiple tables based on related columns, showcasing both basic and more complex join conditions.

   **4 Advanced SQL Commands**  
   This section delves into more advanced SQL functionalities available in PostgreSQL. The queries cover topics such as subqueries, window functions, common table expressions (CTEs), set operations (`UNION`, `INTERSECT`, etc.), and advanced filtering techniques. This directory is intended for learners looking to deepen their SQL proficiency beyond the basics.

   **5 Exercises**  
   This folder contains a series of practical exercises designed to reinforce and test your understanding of SQL. Each script presents a problem or challenge, encouraging hands-on practice with query writing and logical thinking. The problems range from basic to advanced, making this section suitable for revision and self-assessment.

   **6 Creating Databases and Tables**  
   In this directory, you will find scripts focused on data definition language (DDL) commands in PostgreSQL. The examples demonstrate how to create new databases and tables, define columns and data types, set primary and foreign keys, and implement other structural constraints. This section is essential for learning how to design and implement a relational database schema.

   **7 Conditional Expressions and Procedures**  
   This section includes examples of using conditional expressions such as `CASE` statements within SQL queries. It may also contain scripts demonstrating the creation and use of stored procedures and functions in PostgreSQL, illustrating how to encapsulate logic and control flow within the database.

   **8 Python and PostgreSQL**  
   This folder bridges SQL and programming by providing example scripts that integrate Python with PostgreSQL. It features Python code (often using libraries such as `psycopg2` or `SQLAlchemy`) to connect to a PostgreSQL database, execute queries, and process results. This section is valuable for those interested in automating database tasks or developing data-driven applications using Python.

   ## 9. University T-SQL ICA

This section contains T-SQL scripts created as part of my second-year university module. Each file demonstrates a specific aspect of T-SQL using the Movies database. The scripts cover a range of advanced querying techniques and features, as outlined below:

1. **ICA Demo 1 Using Aggregate Functions.sql**  
   Demonstrates the use of aggregate functions such as `SUM`, `AVG`, `COUNT`, `MIN`, and `MAX` in T-SQL to summarise data from the Movies database.

2. **ICA Demo 2 Using the GROUP BY Clause.sql**  
   Shows how to use the `GROUP BY` clause to group data based on one or more columns, facilitating grouped aggregations and summaries.

3. **ICA Demo 3 Filtering Groups with HAVING.sql**  
   Illustrates the use of the `HAVING` clause to filter grouped results, allowing you to specify conditions on aggregated data.

4. **ICA Demo 4 Writing Self-Contained Subqueries.sql**  
   Explores writing self-contained (non-correlated) subqueries within T-SQL, allowing for more complex queries and data extraction.

5. **ICA Demo 5 Writing Correlated Subqueries.sql**  
   Provides examples of correlated subqueries, where the inner query references columns from the outer query, enabling row-by-row comparisons.

6. **ICA Demo 6 Using the EXISTS Predicate with Subqueries.sql**  
   Shows how to use the `EXISTS` predicate with subqueries to test for the existence of rows in a related table, commonly used for conditional logic.

7. **ICA Demo 7 Using Views.sql**  
   Demonstrates the creation and use of SQL views, which are virtual tables representing the result of a stored query.

8. **ICA Demo 8 Using Inline TVFs.sql**  
   Introduces inline table-valued functions (TVFs), which return a table data type and can be used like regular tables in queries.

9. **ICA Demo 9 Using Derived Tables.sql**  
   Explains the concept and usage of derived tables (subqueries in the `FROM` clause), useful for structuring complex queries.

10. **ICA Demo 10 Using CTEs.sql**  
    Covers the use of Common Table Expressions (CTEs), which provide a way to define temporary result sets that can be referenced within a query.

11. **ICA Demo 11 Using Views and Set Operators.sql**  
    Demonstrates how to create views and use set operators (`UNION`, `INTERSECT`, `EXCEPT`) in T-SQL. Examples include building reusable queries for analytics and showing how to compare or combine results across different queries for business scenarios such as talent analytics, content discovery, and production analysis.

12. **ICA Demo 12 Using CTE, Views, Windows Ranking and Partition By.sql**  
    Illustrates the use of CTEs, views, and advanced window functions (`ROW_NUMBER`, `RANK`, `DENSE_RANK`, `PARTITION BY`, `OVER`) in T-SQL for advanced reporting and analytics. Includes scenarios such as identifying top performers (actors, directors, companies, genres), analyzing movie trends, generating deduplicated lists, and creating ranked summaries for dashboards and business reports.

13. **ICA Demo 13 Pivoting and Grouping Sets.sql**  
    Demonstrates how to use `GROUPING SETS`, `PIVOT`, and `UNPIVOT` to create flexible summary reports and dashboards. These techniques allow comparison of movie revenue and counts across years, genres, or companies and support generating subtotals and grand totals within a single query for business reporting.

14. **ICA Demo 14 T-SQL Stored Procedures with Parameters.sql**  
    Explores stored procedures with input, output, and default parameters to encapsulate business logic for repeatable, dynamic queries. Examples include filtering movies by company or genre, running parameterized reports, and counting movies by genre, supporting secure and consistent access patterns for business users and applications.

15. **ICA Demo 15 T-SQL Programming and Stored Procedures.sql**  
    Shows how to encapsulate business logic and reporting tasks in stored procedures. Includes examples of simple stored procedures for listing top-rated movies, as well as procedures that accept parameters for flexible, dynamic reporting based on year and genre, supporting secure and efficient execution of complex queries.

16. **ICA Demo 16 T-SQL Error Handling.sql**  
    Highlights the importance of robust error handling in T-SQL. Demonstrates the use of `TRY...CATCH` blocks and structured exception handling within stored procedures to catch errors, log messages, and provide meaningful feedback to users or calling applications, improving reliability and maintainability of business processes.

17. **ICA Demo 17 T-SQL Transactions.sql**  
    Explains the use of transactions in T-SQL for ensuring data consistency and atomicity. Includes examples of atomic operations using `BEGIN TRANSACTION`, `COMMIT`, and `ROLLBACK`, as well as the use of savepoints for partial rollbacks. Demonstrates how transactions support reliable business processes such as order processing, payroll, and inventory management.


                    
