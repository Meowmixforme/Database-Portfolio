-- Insert valid employee record for 'Jose Portilla'
-- All constraints passed: birth_date after 1900, hire_date after birth_date, salary positive

INSERT INTO employees (first_name, last_name, birth_date, hire_date, salary)
VALUES ('Jose', 'Portilla', '1990-11-03', '2010-01-01', 100);
