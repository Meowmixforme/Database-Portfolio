-- Inserts a new user named Jose into the 'account' table

INSERT INTO account (
    username, 
    password, 
    email, 
    created_on
) VALUES (
    'Jose', 
    'password', 
    'Jose@gmail.com', 
    CURRENT_TIMESTAMP  -- Sets the creation time to now
);