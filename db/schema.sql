-- Drops the "project2" database if it exists currently --
DROP DATABASE IF EXISTS project2_db;

-- Creates the "project2" database --
CREATE DATABASE project2_db;

-- Use the "project2" database --
USE project2_db;

<<<<<<< HEAD
-- Creates the "registry" table --
CREATE TABLE registry

=======
-- CRATE THE "REGISTRY/ TASKS" TABLE --
CREATE TABLE registry (
>>>>>>> 2c50f48b6f57308c21aef0c6e2067703d36715dd
	id INT NOT NULL AUTO_INCREMENT,
	item VARCHAR(255) NOT NULL,
	quantity INT NOT NULL,
	PRIMARY KEY (id)
<<<<<<< HEAD

-- Creates the "guest" table --
CREATE TABLE guest

=======
);


-- Creates the "guest" table --
CREATE TABLE guest (
>>>>>>> 2c50f48b6f57308c21aef0c6e2067703d36715dd
	id INT NOT NULL AUTO_INCREMENT,
	guest_name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	phone_number VARCHAR(10) NOT NULL,
	PRIMARY KEY (id)
<<<<<<< HEAD

-- Creates the "main_event" table --
CREATE TABLE main_event

=======
	);


-- Creates the "main_event" table --
CREATE TABLE main_event (
>>>>>>> 2c50f48b6f57308c21aef0c6e2067703d36715dd
	id INT NOT NULL AUTO_INCREMENT,
	event_name VARCHAR(255) NOT NULL,
	event_date DATE NOT NULL,
	event_time TIME NOT NULL,
<<<<<<< HEAD
	PRIMARY KEY (id)
=======
	PRIMARY KEY (id)
	);

-- CRATES THE "USERS" TABLE -- 
CREATE TABLE users (
    fb_id INT NOT NULL, 
    user_name VARCHAR (255) NOT NULL, 
    user_email VARCHAR (255) NOT NULL, 
    user_phone INT NOT NULL, 
    PRIMARY KEY (fb_id)
    );
>>>>>>> 2c50f48b6f57308c21aef0c6e2067703d36715dd
