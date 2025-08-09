-- Rename the 'person' column to 'people' in the new_info table
-- Reflects updated naming to better represent plural or collective data

ALTER TABLE new_info
RENAME COLUMN person TO people;
