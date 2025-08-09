-- Insert valid employee record for 'Sammy Smith'
-- Meets all constraints: realistic birth date, logical hire date, positive salary

INSERT INTO employees (first_name, last_name, birth_date, hire_date, salary)
VALUES ('Sammy', 'Smith', '1990-11-03', '2010-01-01', 100);