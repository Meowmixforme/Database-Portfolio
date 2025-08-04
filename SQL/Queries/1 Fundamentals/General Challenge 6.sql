-- Counts how many films have "Truman" in their title

SELECT COUNT(*) FROM film
WHERE title LIKE '%Truman%';