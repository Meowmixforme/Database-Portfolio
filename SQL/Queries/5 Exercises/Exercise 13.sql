-- Lists booking start times and facility names for facid 0 and 1 on 21st Sept 2012

SELECT cd.bookings.starttime AS start, 
       cd.facilities.name AS name
FROM cd.facilities
INNER JOIN cd.bookings
  ON cd.facilities.facid = cd.bookings.facid
WHERE cd.facilities.facid IN (0, 1)
  AND cd.bookings.starttime >= '2012-09-21'
  AND cd.bookings.starttime < '2012-09-22'
ORDER BY cd.bookings.starttime;