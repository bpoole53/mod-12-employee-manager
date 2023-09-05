const inquirer = require("inquirer");
const connection = require("../config/connection");

//gets and returns the department information from the database
function listAllDepartments(){
  return connection.promise().query("SELECT department.id, department.name FROM department;");
}

//gets and returns the employee information from the database and then joins the matching id's from the other tables to form a new table with the joined information
function listAllEmployees(){
  return connection.promise().query("SELECT employee.id, employee.first_name, employee.last_name, department.name department, title, salary, manager_name FROM employees_db.employee INNER JOIN employees_db.role ON employee.role_id = role.id INNER JOIN employees_db.manager ON employee.manager_id = manager.id INNER JOIN employees_db.department ON role.department_id = department.id;");
}

//gets then returns role information from the database and then joins the matching department id's to form a new table with the joined information
function listAllRoles(){
  return connection.promise().query("SELECT role.id, title, salary, department.name FROM employees_db.role INNER JOIN employees_db.department ON role.department_id = department.id;");
}

//takes in the response argument from the inquirer response data then uses that to fill in the needed information and then inserts the new data in to the employee table
function addEmployee(response){
  const info = {
    first_name: `${response.fname}`,
    last_name: `${response.lname}`,
    role_id: `${response.role}`, 
    manager_id: `${response.manager}`
  }
  connection.query('INSERT INTO employees_db.employee SET ?', info, (err, result) => {
    if (err) {
      console.log('Error:' + err.message)      
    } else {
      console.log('/n')
      console.log('Employee added successfully')
    }
  });
}

//takes in the response argument from the inquirer response data then uses that to fill in the needed information and then inserts the new data in to the department table
function addDepartment(response){
  const info = {
    name: `${response.name}`
  }
  connection.query('INSERT INTO employees_db.department SET ?', info, (err, result) => {
    if (err) {
      console.log('Error:' + err.message)      
    } else {
      console.log('/n')
      console.log('Department added successfully')
    }
  });
}

//takes in the response argument from the inquirer response data then uses that to fill in the needed information and then inserts the new data in to the role table
function addRole(response){
  const info = {
    title: `${response.title}`,
    salary:`${response.salary}`,
    department_id: `${response.department_id}`
  }
  connection.query('INSERT INTO employees_db.role SET ?', info, (err, result) => {
    if (err) {
      console.log('Error:' + err.message)      
    } else {
      console.log('/n')
      console.log('Role added successfully')
    }
  });
}

//takes in the response argument from the inquirer response data then uses that to UPDATE the matching id values in the employee table
function updateRole(response){
  const info = [`${response.role}`,`${response.employee}`]
  
  connection.query('UPDATE employees_db.employee SET role_id = ? WHERE id = ?', info, (err, result) => {
    if (err) {
      console.log('Error:' + err.message)      
    } else {
      console.log('/n')
      console.log('Role updated successfully')
    }
  });
}  

module.exports = {
  listAllDepartments,
  listAllEmployees,
  listAllRoles,
  addEmployee,
  addDepartment,
  addRole,
  updateRole,
}