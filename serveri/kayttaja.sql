-- Create the user if it does not already exist
CREATE USER IF NOT EXISTS 'sampleuser1'@'localhost' IDENTIFIED BY 'oranges';

-- Switch to the blog-app database
USE `blog-app`;

-- Grant the appropriate permissions to the user
GRANT INSERT, UPDATE, DELETE, SELECT ON `posts` TO 'sampleuser1'@'localhost';

-- Apply the changes
FLUSH PRIVILEGES;
