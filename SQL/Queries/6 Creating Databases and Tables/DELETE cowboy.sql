-- Remove the 'Cowboy' job role from the job table
-- RETURNING confirms which row was deleted (useful for logging or debugging)

DELETE FROM job
WHERE job_name = 'Cowboy'
RETURNING job_id, job_name;
