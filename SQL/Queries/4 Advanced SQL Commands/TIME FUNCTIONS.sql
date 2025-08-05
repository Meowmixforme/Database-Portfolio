-- Display all configuration parameters
SHOW ALL;

-- Display current timezone setting
SHOW TIMEZONE;

-- Get full timestamp (date + time + timezone)
SELECT NOW();  -- Output: 2025-08-06 00:44:27.42132+01

-- Get formatted time-of-day as a text string
SELECT TIMEOFDAY();  -- Output: 'Wed Aug 06 00:44:27 2025 BST'

-- Get current time (without date)
SELECT CURRENT_TIME;  -- Output: 00:44:27.42132+01

-- Get current date (without time)
SELECT CURRENT_DATE;  -- Output: 2025-08-06
