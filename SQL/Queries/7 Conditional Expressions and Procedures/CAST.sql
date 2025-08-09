-- Measure the character length of inventory_id after casting to string
-- Useful for checking ID formatting or preparing for string-based operations

SELECT CHARACTER_LENGTH(CAST(inventory_id AS VARCHAR))
FROM rental;