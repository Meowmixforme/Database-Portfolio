-- Create a table to store general information entries
-- Each entry includes a title and a unique person reference

CREATE TABLE general_information (
    info_id SERIAL PRIMARY KEY,         -- Auto-incrementing unique ID
    title VARCHAR(500) NOT NULL,        -- Descriptive title or summary
    person VARCHAR(50) NOT NULL UNIQUE  -- Unique identifier for the person (e.g., name or alias)
);