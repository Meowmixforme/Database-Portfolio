-- Create 'employees' table to store personnel records

CREATE TABLE employees (
    employee_id SERIAL PRIMARY KEY,                -- Auto-incrementing unique identifier
    first_name VARCHAR(50) NOT NULL,               -- Required first name (max 50 chars)
    last_name VARCHAR(50) NOT NULL,                -- Required last name (max 50 chars)
    birth_date DATE CHECK (birth_date > '1900-01-01'), -- Ensures realistic birth dates
    hire_date DATE CHECK (hire_date > birth_date),     -- Enforces logical hiring chronology
    salary INTEGER CHECK (salary > 0)                  -- Salary must be positive
);