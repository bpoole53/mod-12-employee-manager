USE employees_db;

INSERT INTO department (name)
    VALUES
        ('Sales'),
        ('Engineering'),
        ('Finance'),
        ('Legal');

INSERT INTO employee (first_name, last_name, role_id, manager_id)
    VALUES
        ('Bob', 'Jones', 1, 1),
        ('Jeff', 'Smith', 2, 2),
        ('Marge', 'Johnson', 3, 3),
        ('John', 'Doe', 4, 4);

INSERT INTO role (title, salary, department_id)
    VALUES
        ('Salesman I', 80000, 1),
        ('Electrical Engineer', 70000, 2),
        ('Finance Associate', 60000, 3),
        ('Lawyer', 150000, 4);    

INSERT INTO manager (manager_name)
    VALUES
        ('Ted Gatsby'),
        (NULL),
        ('Alicia Silverstone'),
        ('Dag Swaniels');    