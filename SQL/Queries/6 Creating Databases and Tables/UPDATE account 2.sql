-- Sets last_login to match created_on for all accounts

UPDATE account
SET last_login = created_on;