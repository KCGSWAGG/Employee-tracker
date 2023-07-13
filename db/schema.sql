DROP DATABASE IF EXISTS office_db;
CREATE DATABASE office_db;

USE office_db;

CREATE TABLE departments (
    id INT NOT NULL,
    department_name TEXT NOT NULL
)

CREATE TABLE employees (
    id INT NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    job_title TEXT NOT NULL,
    departments TEXT NOT NULL,
    salaries INT NOT NULL,
    manager TEXT NOT NULL
)