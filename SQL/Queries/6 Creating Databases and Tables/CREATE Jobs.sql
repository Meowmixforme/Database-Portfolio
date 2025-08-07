-- Creates a 'job' table to store distinct job roles or titles

CREATE TABLE job (
    job_id serial PRIMARY KEY,           -- Auto-incrementing unique job ID
    job_name varchar(200) UNIQUE NOT NULL -- Unique job name/title, required
);
