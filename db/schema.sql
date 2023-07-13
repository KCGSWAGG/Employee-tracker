DROP DATABASE IF EXISTS office_db;
CREATE DATABASE office_db;

USE office_db;

CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    department_name TEXT NOT NULL
);

CREATE TABLE roles (
     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR (30) NOT NULL,
    department_id INT NOT NULL,
    salary DECIMAL NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES departments(id) ON DELETE CASCADE
);

CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR (30) NOT NULL,
    last_name VARCHAR (30) NOT NULL,
    job_title VARCHAR (30) NOT NULL,
    role_id INT NOT NULL,
    FOREIGN KEY (role_id)
    REFERENCES roles(id) ON DELETE CASCADE,
    salaries INT NOT NULL,
    manager_id INT,
    FOREIGN KEY (manager_id)
    REFERENCES employees(id) ON DELETE SET NULL
);