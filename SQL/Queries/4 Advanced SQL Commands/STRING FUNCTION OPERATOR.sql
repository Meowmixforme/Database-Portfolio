-- This query generates a custom email address for each customer
-- by combining the lowercase first initial of their first name,
-- their lowercase last name, and appending '@gmail.com'.
-- The result is labeled as 'custom_email'.

SELECT 
  -- Take the first letter of the first name, convert to lowercase
  LOWER(LEFT(first_name, 1)) 
  -- Convert the entire last name to lowercase
  || LOWER(last_name) 
  -- Append the email domain
  || '@gmail.com' 
  -- Name the resulting column as 'custom_email'
  AS custom_email
FROM customer;
