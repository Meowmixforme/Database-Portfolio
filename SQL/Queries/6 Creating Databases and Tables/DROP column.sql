-- Drop the 'people' column if it exists
-- Cleans up schema by removing unused or deprecated field

ALTER TABLE new_info
DROP COLUMN IF EXISTS people;