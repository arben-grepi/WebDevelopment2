-- Create the user if it does not already exist
CREATE USER IF NOT EXISTS 'UserForTehtava3'@'localhost' IDENTIFIED BY 'UserForTehtava3';

-- Switch to the tehtava3 database
USE `tehtava3`;

-- Grant the appropriate permissions to the user
GRANT INSERT, UPDATE, DELETE, SELECT ON `henkilot` TO 'UserForTehtava3'@'localhost';

-- Apply the changes
FLUSH PRIVILEGES;
