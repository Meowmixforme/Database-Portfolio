-- Create a view to expose customer names and their addresses
-- Joins 'customer' and 'address' tables on shared address_id

CREATE VIEW customer_info AS
SELECT
  customer.first_name,         -- Customer's first name
  customer.last_name,          -- Customer's last name
  address.address              -- Full address string
FROM customer
INNER JOIN address
  ON customer.address_id = address.address_id;