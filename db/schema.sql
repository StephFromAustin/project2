-- Drops the "project2" database if it exists currently --
DROP DATABASE IF EXISTS project2_db;

-- Creates the "project2" database --
CREATE DATABASE project2_db;

-- Use the "project2" database --
USE project2_db;

-- CRATE THE "REGISTRY/ TASKS" TABLE --
CREATE TABLE registry (
	id INT NOT NULL AUTO_INCREMENT,
	item VARCHAR(100) NOT NULL,
	quantity INT NOT NULL,
	PRIMARY KEY (id)
);


-- Creates the "guest" table --
CREATE TABLE guest (
	id INT NOT NULL AUTO_INCREMENT,
	guest_name VARCHAR(255) NOT NULL,
	email VARCHAR(255) NOT NULL,
	phone_number VARCHAR(10) NOT NULL,
	PRIMARY KEY (id)
	);


-- Creates the "main_event" table --
CREATE TABLE main_event (
	id INT NOT NULL AUTO_INCREMENT,
	event_name VARCHAR(255) NOT NULL,
	event_date DATE NOT NULL,
	event_time TIME NOT NULL,
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