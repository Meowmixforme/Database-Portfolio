-- Retrieves members who joined on or after 1st September 2012

SELECT memid, surname, firstname, joindate  
FROM cd.members 
WHERE joindate >= '2012-09-01';