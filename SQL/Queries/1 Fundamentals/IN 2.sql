-- Retrieves all customer records where the first name is either John, Jake, or Julie

SELECT * FROM customer
WHERE first_name IN ('John', 'Jake', 'Julie');