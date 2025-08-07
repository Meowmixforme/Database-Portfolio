-- Retrieves facilities with facid 1 or 5

SELECT * 
FROM cd.facilities 
WHERE facid IN (1, 5);