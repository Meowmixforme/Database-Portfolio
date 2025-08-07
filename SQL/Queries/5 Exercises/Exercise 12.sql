-- Finds facilities with more than 1000 total booked slots

SELECT facid, SUM(slots) AS total_slots 
FROM cd.bookings 
GROUP BY facid 
HAVING SUM(slots) > 1000 
ORDER BY facid;