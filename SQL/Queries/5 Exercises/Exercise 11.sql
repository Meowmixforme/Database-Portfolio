-- Calculates total slots booked per facility in September 2012

SELECT facid, SUM(slots) AS "Total Slots" 
FROM cd.bookings 
WHERE starttime >= '2012-09-01' 
  AND starttime < '2012-10-01' 
GROUP BY facid 
ORDER BY SUM(slots);