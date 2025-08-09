-- Modify the 'people' column to allow NULL values
-- Enables entries without a specified person reference

ALTER TABLE new_info
ALTER COLUMN people DROP NOT NULL;