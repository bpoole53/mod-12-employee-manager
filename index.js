const inquirer = require("inquirer");
const connection = require("./config/connection");
const { listAllDepartments } = require("./lib/queries")
const { listAllEmployees } = require("./lib/queries")
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
        listAllDepartments().then( ([rows]) => {
          displayAllDepartments(rows);
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
        listAllDepartments().then( ([rows]) => {
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