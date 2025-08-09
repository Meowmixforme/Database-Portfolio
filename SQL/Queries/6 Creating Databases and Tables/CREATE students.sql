-- Create 'students' table to store school enrollment records

CREATE TABLE students (
    student_id SERIAL PRIMARY KEY,             -- Auto-incrementing unique student ID
    first_name VARCHAR(45) NOT NULL,           -- Required first name (max 45 chars)
    last_name VARCHAR(45) NOT NULL,            -- Required last name (max 45 chars)
    homeroom_number INTEGER,                   -- Optional homeroom assignment
    phone VARCHAR(20) UNIQUE NOT NULL,         -- Required phone number, must be unique
    email VARCHAR(115) UNIQUE,                 -- Optional email, must be unique if provided
    grad_year INTEGER                          -- Optional graduation year
);