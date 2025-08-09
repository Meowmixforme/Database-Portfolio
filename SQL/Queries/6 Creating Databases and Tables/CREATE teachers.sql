-- Create 'teachers' table to store faculty records
CREATE TABLE teachers (
    teacher_id SERIAL PRIMARY KEY,             -- Auto-incrementing unique teacher ID
    first_name VARCHAR(45) NOT NULL,           -- Required first name
    last_name VARCHAR(45) NOT NULL,            -- Required last name
    homeroom_number INTEGER,                   -- Optional homeroom assignment
    department VARCHAR(45),                    -- Optional department affiliation
    email VARCHAR(20) UNIQUE,                  -- Optional email, must be unique if provided
    phone VARCHAR(20) UNIQUE                   -- Optional phone, must be unique if provided
);