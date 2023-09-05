const inquirer = require("inquirer");
const connection = require("./config/connection");
const { listAllDepartments } = require("./lib/queries")
const { listAllEmployees } = require("./lib/queries")
const { listAllRoles } = require("./lib/queries")
const { addEmployee } = require("./lib/queries")
const { displayAllDepartments } = require("./lib/displays")
/*
  There are a lot of menu items presented to users in this app. The only real way you cam manage them 
  is by creating a function to handle each one.

  I'm giving you a bit of starter code below.
*/ 


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
        listAllDepartments().then( ([rows]) => {
          displayAllDepartments(rows);
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
        listAllDepartments().then( ([rows]) => {
          displayAllDepartments(rows);
          start();
        });        
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