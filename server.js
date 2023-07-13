const inquirer = require('inquirer');
const mysql = require('mysql2'); 
const fs = require('fs');
require('console.table');
require('dotenv').config();
const connection = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: process.env.DB_PASSWORD,
  database: 'office_db'
 });
 connection.connect(function(err){
  console.log(err)
  
 })

function init (){
  inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      name: 'options',
      choices: ['view all departments', 
      'view all roles', 
      'view all employees', 
      'add a department', 
      'add a role', 
      'add an employee', 
      'update an employee role']
    },
 
  ])
  .then((response) => {
    if (response.options === 'view all departments'){
      viewAllDepartments()
    }else  if (response.options === 'view all roles'){
    }else  if (response.options === 'view all employees'){

    }else  if (response.options === 'add a department'){
      addDepartment()
    }else  if (response.options === 'add a role'){
      addRole()
    }
    else  if (response.options === 'add an employee'){}
    else  if (response.options === 'update an employee role'){}
  });
}

async function viewAllDepartments (){
    const [employees] = await connection.promise().query('select * from departments')
    console.table(employees)
    init()
}

async function addDepartment (){
  const response = await inquirer.prompt([{
    type: 'input',
    message: 'What department would you like to add',
    name: 'department'
  }])
  await connection.promise().query(`insert into departments (department_name) values ('${response.department}')`)
  viewAllDepartments()
  init()
}

async function addRole (){
  const [departments] = await connection.promise().query('select * from departments')
  const response = await inquirer.prompt([{
    type: 'list',
    message: 'What department would you like to add',
    name: 'department',
    choices: departments.map(({id,department_name})=>({
      value: id,
      name: department_name
    })) 
  }])
  // await connection.promise().query(`insert into departments (department_name) values ('${response.department}')`)
  viewAllDepartments()
  init()
}

init()