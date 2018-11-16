-- Drops the "project2" database if it exists currently --
DROP DATABASE IF EXISTS project2_db;

-- Creates the "project2" database --
CREATE DATABASE project2_db;

-- Use the "project2" database --
USE project2_db;

CREATE TABLE registry

	id INT NOT NULL AUTO_INCREMENT,
	item VARCHAR(100) NOT NULL,
	quantity INT NOT NULL,
	PRIMARY KEY (id)