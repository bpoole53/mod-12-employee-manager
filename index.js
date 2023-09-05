const inquirer = require("inquirer");
const connection = require("./config/connection");
const { listAllDepartments } = require("./lib/queries")
const { listAllEmployees } = require("./lib/queries")
const { listAllRoles } = require("./lib/queries")
const { addEmployee } = require("./lib/queries")
const { addDepartment } = require("./lib/queries")
const { addRole } = require("./lib/queries")
const { updateRole } = require("./lib/queries")
const { displayAllDepartments } = require("./lib/displays")

function start(){
  inquirer.prompt([
    {   
      type: "list",
      message: "Choose an item from the list below:",
      name: "option", 
      choices: [
        "View All Employees",
        "Add Employee",
        "Update Employee Role",
        "View All Roles",
        "Add Role",
        "View All Departments",
        "Add Department",
        "Quit",
      ]
    }
  ]).then( response => {
    switch(response.option){
      case "View All Employees":
        listAllEmployees().then( ([rows]) => {
          displayAllDepartments(rows);
          start();
        });
        break;
      case "Add Employee":
        inquirer.prompt([
          {   
            type: "prompt",
            message: "What is the employee's first name?",
            name: "fname",
          },
          {   
            type: "prompt",
            message: "What is the employee's last name?",
            name: "lname",
          },
          {   
            type: "list",
            message: "What is the Employee's Role?",
            name: "role",
            choices: [
              {
                name: 'Sales',
                value: 1
              },
              {
                name: 'Engineering',
                value: 2,
              },
              {
                name: 'Finance',
                value: 3,
              },
              {
                name: 'Legal',
                value: 4,
              },
            ]},
            {
            type: "list",
            message: "Who is the employee's manager?",
            name: "manager",
            choices: [
              {
                name: 'Ted Gatsby',
                value: 1
              },
              {
                name: 'None',
                value: 2,
              },
              {
                name: 'Alicia Silverstone',
                value: 3,
              },
              {
                name: 'Dag swaniels',
                value: 4,
              },
            ]},
            ]).then (response => {
              addEmployee(response);
              start();
            });                 
        break;        
      case "Update Employee Role":
        inquirer.prompt([
          {
            type: "list",
            message: "Which employee's role do you want to update?",
            name: "employee",
            choices: [
              {
                name: 'Bob Jones',
                value: 1
              },
              {
                name: 'Jeff Smith',
                value: 2,
              },
              {
                name: 'Marge Johnson',
                value: 3,
              },
              {
                name: 'John Doe',
                value: 4,
              },
            ]},
          {
          type: "list",
          message: "Which role do you want to assign to this employee?",
          name: "role",
          choices: [
            {
              name: 'Salesman I',
              value: 1
            },
            {
              name: 'Electrical Engineer',
              value: 2,
            },
            {
              name: 'Finance Assocaite',
              value: 3,
            },
            {
              name: 'Lawyer',
              value: 4,
            },
          ]},
        ]).then (response => {
          updateRole(response)
          start();
        });
        break;
      case "View All Departments":
        listAllDepartments().then( ([rows]) => {
          displayAllDepartments(rows);
          start();
        });
        break;
      case "View All Roles":
        listAllRoles().then( ([rows]) => {
          displayAllDepartments(rows);
          start();
        });
        break;
      case "Add Role":
        inquirer.prompt([
          {   
            type: "prompt",
            message: "What is the name of the role?",
            name: "title",
          },
          {   
            type: "prompt",
            message: "What is the salary of the role?",
            name: "salary",
          },
          {
          type: "list",
          message: "Which department does the role belong to?",
          name: "department_id",
          choices: [
            {
              name: 'Sales',
              value: 1
            },
            {
              name: 'Engineering',
              value: 2,
            },
            {
              name: 'Finance',
              value: 3,
            },
            {
              name: 'Legal',
              value: 4,
            },
          ]},
        ]).then (response => {
          addRole(response)
          start();
        });
        break;
      case "View All Departments":
        listAllDepartments().then( ([rows]) => {
          displayAllDepartments(rows);
          start();
        });
        break;     
      case "Add Department":
        inquirer.prompt([
          {   
            type: "prompt",
            message: "What is the department name?",
            name: "name",
          },
        ]).then (response => {
          addDepartment(response)
          start();
        })               
        break;
      case "Quit":
        listAllDepartments().then( ([rows]) => {
          displayAllDepartments(rows);
          start();
        });        
        break;  
      default:
        start();
    }
  })
}

start();