-- Example only
-- Calculate final price after applying discount
-- Assumes 'price' and 'discount' are numeric columns
SELECT
  item,                             -- Item identifier or name
  price - discount AS final_price  -- Net price after discount
FROM table;