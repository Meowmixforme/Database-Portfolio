-- Counts facilities with a guest cost of £10 or more

SELECT COUNT(*) 
FROM cd.facilities 
WHERE guestcost >= 10;