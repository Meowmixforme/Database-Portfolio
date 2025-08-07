-- Retrieves 10 distinct surnames from members, sorted alphabetically

SELECT DISTINCT surname 
FROM cd.members
ORDER BY surname 
LIMIT 10;