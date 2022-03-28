CREATE DATABASE IF NOT EXISTS exercicios_23_1;

USE exercicios_23_1;

CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(20) NOT NULL,
    last_name VARCHAR(20) NOT NULL,
    email VARCHAR(30) NOT NULL,
    password VARCHAR(50) NOT NULL,
    PRIMARY KEY(id)
);