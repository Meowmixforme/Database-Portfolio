-- Updates last_login to the current timestamp for all accounts
-- Returns email, updated last_login, and original created_on for auditing

UPDATE account
SET last_login = CURRENT_TIMESTAMP
RETURNING email, last_login, created_on;