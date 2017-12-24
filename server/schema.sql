CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
 id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
 msg_text VARCHAR(40),
 username VARCHAR(30),
 room VARCHAR(20) NOT NULL,
 created_at DATE
);

/* Create other tables and define schemas for them here! */



/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

