-- Junction table linking accounts to jobs with hire date metadata

CREATE TABLE account_job (
    user_id integer REFERENCES account(user_id), -- Foreign key to account
    job_id integer REFERENCES job(job_id),       -- Foreign key to job
    hire_date timestamp                          -- When the user was hired for the job
);
