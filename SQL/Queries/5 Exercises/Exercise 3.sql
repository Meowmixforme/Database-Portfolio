-- Retrieves all facilities where members must pay a fee

SELECT * 
FROM cd.facilities 
WHERE membercost > 0;