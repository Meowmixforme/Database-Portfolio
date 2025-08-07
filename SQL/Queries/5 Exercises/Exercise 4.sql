-- Finds facilities with a member cost greater than 0
-- but less than 1/50th of their monthly maintenance cost

SELECT facid, name, membercost, monthlymaintenance
FROM cd.facilities
WHERE membercost > 0
  AND membercost < monthlymaintenance / 50.0;