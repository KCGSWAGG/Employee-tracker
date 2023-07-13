const inquirer = require('inquirer');

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
      'update an employee role'],
    },
    {
      type ''
    }
 
  ])
  .then((response) =>
    response.confirm === response.choices
  );
