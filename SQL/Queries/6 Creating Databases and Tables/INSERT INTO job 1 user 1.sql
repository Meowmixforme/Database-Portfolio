-- Assigns job_id 1 to user_id 1 with the current hire date

INSERT INTO account_job (
    user_id, 
    job_id, 
    hire_date
) VALUES (
    1, 
    1, 
    CURRENT_TIMESTAMP
);