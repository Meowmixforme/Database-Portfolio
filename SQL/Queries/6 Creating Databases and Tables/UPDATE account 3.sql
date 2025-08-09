-- Sets hire_date in account_job to match created_on from account

UPDATE account_job
SET hire_date = account.created_on
FROM account
WHERE account_job.user_id = account.user_id;