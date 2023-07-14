const inquirer = require('inquirer');
const mysql = require('mysql2');
const fs = require('fs');
require('console.table');
require('dotenv').config();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'office_db'
});

connection.connect(function (err) {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database as ID ' + connection.threadId);
});

function init() {
  inquirer
    .prompt([
      {
        type: 'list',
        message: 'What would you like to do?',
        name: 'options',
        choices: [
          'view all departments',
          'view all roles',
          'view all employees',
          'add a department',
          'add a role',
          'add an employee',
          'update an employee role'
        ]
      }
    ])
    .then((response) => {
      if (response.options === 'view all departments') {
        viewAllDepartments();
      } else if (response.options === 'view all roles') {
        viewAllRoles();
      } else if (response.options === 'view all employees') {
        viewAllEmployees();
      } else if (response.options === 'add a department') {
        addDepartment();
      } else if (response.options === 'add a role') {
        addRole();
      } else if (response.options === 'add an employee') {
        addEmployee();
      } else if (response.options === 'update an employee role') {
        updateEmployeeRole();
      }
    });
}

async function viewAllDepartments() {
  try {
    const [departments] = await connection.promise().query('SELECT * FROM departments');
    console.table(departments);
    init();
  } catch (error) {
    console.error('Error retrieving departments from the database: ' + error);
    init();
  }
}

async function viewAllRoles() {
  try {
    const [roles] = await connection.promise().query('SELECT * FROM roles');
    console.table(roles);
    init();
  } catch (error) {
    console.error('Error retrieving roles from the database: ' + error);
    init();
  }
}

async function viewAllEmployees() {
  try {
    const [employees] = await connection.promise().query('SELECT * FROM employees');
    console.table(employees);
    init();
  } catch (error) {
    console.error('Error retrieving employees from the database: ' + error);
    init();
  }
}

async function addDepartment() {
  try {
    const response = await inquirer.prompt([
      {
        type: 'input',
        message: 'What department would you like to add?',
        name: 'department'
      }
    ]);

    await connection
      .promise()
      .query(`INSERT INTO departments (department_name) VALUES ('${response.department}')`);

    console.log('Department added successfully!');
    viewAllDepartments();
  } catch (error) {
    console.error('Error adding department to the database: ' + error);
    init();
  }
}

async function addRole() {
  try {
    const [departments] = await connection.promise().query('SELECT * FROM departments');

    const response = await inquirer.prompt([
      {
        type: 'input',
        message: 'What role would you like to add?',
        name: 'role'
      },
      {
        type: 'input',
        message: 'What is the salary for this role?',
        name: 'salary'
      },
      {
        type: 'list',
        message: 'Which department does this role belong to?',
        name: 'departmentId',
        choices: departments.map(({ id, department_name }) => ({
          value: id,
          name: department_name
        }))
      }
    ]);

    await connection.promise().query(
      `INSERT INTO roles (title, salary, department_id) VALUES ('${response.role}', ${response.salary}, ${response.departmentId})`
    );

    console.log('Role added successfully!');
    viewAllRoles();
  } catch (error) {
    console.error('Error adding role to the database: ' + error);
    init();
  }
}

// Implement the remaining functions: addEmployee and updateEmployeeRole

init();
