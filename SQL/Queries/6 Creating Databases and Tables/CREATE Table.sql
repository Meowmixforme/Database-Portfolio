-- Creates an 'account' table to store user login and profile information

CREATE TABLE account (
    user_id serial PRIMARY KEY,           -- Auto-incrementing unique user ID
    username varchar(50) UNIQUE NOT NULL, -- Unique username, required
    password varchar(50) NOT NULL,        -- User password, required
    email varchar(250) UNIQUE NOT NULL,   -- Unique email address, required
    created_on timestamp NOT NULL,        -- Timestamp of account creation
    last_login timestamp                  -- Timestamp of last login (optional)
);

