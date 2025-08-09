-- Assign raffle results based on specific customer IDs
-- Uses simple CASE for direct value matching

SELECT customer_id,
  CASE customer_id
    WHEN 2 THEN 'winner'         -- Customer ID 2 won the raffle
    WHEN 5 THEN 'second place'   -- Customer ID 5 is runner-up
    ELSE 'normal'                -- All others are non-winners
  END AS raffle_results
FROM customer;