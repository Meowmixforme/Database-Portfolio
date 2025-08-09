-- Create or replace a view to expose customer names and their address details
-- Includes district for regional grouping or filtering

CREATE OR REPLACE VIEW customer_info AS
SELECT
  customer.first_name,         -- Customer's first name
  customer.last_name,          -- Customer's last name
  address.address,             -- Street-level address
  address.district             -- District or region of the address
FROM customer
INNER JOIN address
  ON customer.address_id = address.address_id;
