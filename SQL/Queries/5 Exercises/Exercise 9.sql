-- Retrieves the latest member join date

SELECT MAX(joindate) AS latest_signup 
FROM cd.members;