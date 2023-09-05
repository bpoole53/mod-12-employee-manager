const inquirer = require("inquirer");
const connection = require("../config/connection");

/*
  We are making use of a mysql2 method called promise() which allows us to 
  perform our database query asynchronously. This means we don't need to use
  .then() blocks or callback functions, which makes it much easier run the queries 
  and return values from them.
*/

function listAllDepartments(){
  return connection.promise().query("SELECT department.id, department.name FROM department;");
}

function listAllEmployees(){
  return connection.promise().query("SELECT employee.id, employee.first_name, employee.last_name, department.name department, title, salary, manager_name FROM employees_db.employee INNER JOIN employees_db.role ON employee.role_id = role.id INNER JOIN employees_db.manager ON employee.manager_id = manager.id INNER JOIN employees_db.department ON role.department_id = department.id;");
}

function listAllRoles(){
  return connection.promise().query("SELECT role.id, title, salary, department.name FROM employees_db.role INNER JOIN employees_db.department ON role.department_id = department.id;");
}

function addEmployee(response){
  const info = {
    first_name: `${response.fname}`,
    last_name: `${response.lname}`,
    role_id: `${response.role}`, 
    manager_id: `${response.manager}`
  }
  connection.query('INSERT INTO employees_db.employee SET ?', info, (err, result) => {
    if (!err) {
      console.log('Employee added successfully')
    }
  });
}

module.exports = {
  listAllDepartments,
  listAllEmployees,
  listAllRoles,
  addEmployee
}